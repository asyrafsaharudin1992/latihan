import { Question, MatchingPair } from "../types";

const SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbxsaAFP1Y6EAkV8Tle1DocgA8dhrkdNPZ-Aq16LmRmQBCBX_-y24H0CyRuUW3-8xqOLfw/exec";

/**
 * Generic action sender (kept for backwards compatibility with updateScore/register/etc).
 */
export const sendSheetAction = async (
  action: string,
  payload: Record<string, any>
) => {
  const formData = new FormData();
  formData.append("action", action);
  Object.keys(payload).forEach((key) => {
    formData.append(key, String(payload[key]));
  });

  try {
    const response = await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      body: formData,
    });
    return await response.json();
  } catch (error: any) {
    console.error("Error connecting to Google Sheets:", error);
    throw new Error("Gagal menyambung ke pelayan Google Sheets.");
  }
};

/* ============================================================
 * QUESTION BANK STORAGE
 * ============================================================
 * Sheet tab: "questions"
 * Columns:   Timestamp | Year | Subject | Topic | Type | Question | Answers | Correct Answer | Explanation
 *
 * Row formats:
 *   - Objective: Type="objective", Answers="A|B|C|D" (pipe-separated 4 options), Correct Answer="A"/"B"/"C"/"D"
 *   - Matching:  Type="matching",  Answers="r1|r2|r3|r4|r5" (the 5 right-side candidates for that exercise),
 *                Correct Answer = the correct right text. Question = the left item.
 *
 * On save: a single AI generation (22 items) is flattened to 30 rows
 *   - 20 objective rows
 *   - 10 matching pair rows (2 exercises × 5 pairs)
 *
 * On load: 30 rows are reconstructed into 22 Question objects (20 obj + 2 matching of 5 pairs each).
 *   Order is preserved by sheet row order — DO NOT manually re-sort the sheet rows.
 * ============================================================ */

interface SheetRow {
  Timestamp?: string;
  Year: string | number;
  Subject: string;
  Topic: string;
  Type: "objective" | "matching";
  Question: string;
  Answers: string;
  "Correct Answer": string;
  Explanation: string;
}

const PIPE = "|";

/**
 * Convert AI-generated Question[] into flat sheet rows.
 * Returns 30 rows for a normal 22-item generation.
 */
export function questionsToSheetRows(
  questions: Question[],
  meta: { year: number; subject: string; topic: string }
): Omit<SheetRow, "Timestamp">[] {
  const rows: Omit<SheetRow, "Timestamp">[] = [];

  for (const q of questions) {
    if (q.type === "matching" && q.pairs && q.pairs.length > 0) {
      // Flatten matching exercise -> one row per pair
      const allRights = q.pairs.map((p) => p.right).join(PIPE);
      for (const pair of q.pairs) {
        rows.push({
          Year: meta.year,
          Subject: meta.subject,
          Topic: meta.topic,
          Type: "matching",
          Question: pair.left,
          Answers: allRights, // all 5 right-candidates so we know what the choice set is
          "Correct Answer": pair.right,
          Explanation: q.explanation || "",
        });
      }
    } else {
      // Objective question
      const opts = q.options || [];
      const correctIdx =
        typeof q.correctAnswer === "number" ? q.correctAnswer : 0;
      const letter = ["A", "B", "C", "D"][correctIdx] || "A";
      rows.push({
        Year: meta.year,
        Subject: meta.subject,
        Topic: meta.topic,
        Type: "objective",
        Question: q.question,
        Answers: opts.join(PIPE),
        "Correct Answer": letter,
        Explanation: q.explanation || "",
      });
    }
  }

  return rows;
}

/**
 * Reconstruct Question[] from sheet rows.
 * Objective rows -> objective Question.
 * Consecutive groups of 5 matching rows -> one matching Question with 5 pairs.
 */
export function sheetRowsToQuestions(rows: SheetRow[]): Question[] {
  const result: Question[] = [];
  let matchBuffer: { left: string; right: string; explanation: string }[] = [];

  const flushMatchBuffer = () => {
    while (matchBuffer.length >= 5) {
      const chunk = matchBuffer.splice(0, 5);
      result.push({
        type: "matching",
        question: "Padankan istilah dengan maksudnya",
        pairs: chunk.map((c) => ({ left: c.left, right: c.right })),
        explanation: chunk[0].explanation,
      });
    }
    // If leftover (e.g. 3 pairs), still push as one shorter matching set
    if (matchBuffer.length > 0) {
      const chunk = matchBuffer.splice(0, matchBuffer.length);
      result.push({
        type: "matching",
        question: "Padankan istilah dengan maksudnya",
        pairs: chunk.map((c) => ({ left: c.left, right: c.right })),
        explanation: chunk[0].explanation,
      });
    }
  };

  for (const row of rows) {
    if (row.Type === "matching") {
      matchBuffer.push({
        left: row.Question,
        right: row["Correct Answer"],
        explanation: row.Explanation,
      });
    } else {
      // Hit an objective row — flush any pending matching pairs first
      if (matchBuffer.length > 0) flushMatchBuffer();

      const options = (row.Answers || "").split(PIPE).map((s) => s.trim());
      const letter = (row["Correct Answer"] || "A").trim().toUpperCase();
      const correctAnswer = ["A", "B", "C", "D"].indexOf(letter);
      result.push({
        type: "objective",
        question: row.Question,
        options,
        correctAnswer: correctAnswer >= 0 ? correctAnswer : 0,
        explanation: row.Explanation,
      });
    }
  }

  // Flush any trailing matching pairs
  if (matchBuffer.length > 0) flushMatchBuffer();

  return result;
}

/**
 * Fetch saved questions for a topic from the sheet.
 * Returns [] if none exist yet.
 */
export async function getQuestionsForTopic(
  year: number,
  subject: string,
  topic: string
): Promise<Question[]> {
  const formData = new FormData();
  formData.append("action", "getQuestions");
  formData.append("year", String(year));
  formData.append("subject", subject);
  formData.append("topic", topic);

  try {
    const response = await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (!data || !data.success) return [];
    const rows: SheetRow[] = data.rows || [];
    if (rows.length === 0) return [];

    return sheetRowsToQuestions(rows);
  } catch (error) {
    console.error("Error loading questions from sheet:", error);
    // Don't throw — caller can fall through to AI generation
    return [];
  }
}

/**
 * Save generated questions to the sheet.
 * Returns true on success.
 */
export async function saveQuestionsForTopic(
  questions: Question[],
  meta: { year: number; subject: string; topic: string }
): Promise<boolean> {
  const rows = questionsToSheetRows(questions, meta);

  const formData = new FormData();
  formData.append("action", "saveQuestions");
  formData.append("year", String(meta.year));
  formData.append("subject", meta.subject);
  formData.append("topic", meta.topic);
  formData.append("rows", JSON.stringify(rows));

  try {
    const response = await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return Boolean(data?.success);
  } catch (error) {
    console.error("Error saving questions to sheet:", error);
    return false;
  }
}