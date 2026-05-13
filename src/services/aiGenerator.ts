import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../types";

// Supports both AI Studio's process.env and Vercel's import.meta.env
const apiKey = (typeof process !== 'undefined' && process.env.GEMINI_API_KEY) 
  ? process.env.GEMINI_API_KEY 
  : import.meta.env.VITE_GEMINI_API_KEY || "";

const ai = new GoogleGenAI({ apiKey });

// Sleep helper for retry backoff
const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

/**
 * Generate a full bank of questions for one topic.
 * Output: 22 items (20 objective + 2 matching exercises × 5 pairs = 10 matching pairs).
 * On the sheet side, the 2 matching exercises are flattened to 10 pair-rows,
 * giving 30 rows total per topic (20 obj + 10 matching pairs).
 *
 * Includes retry-with-backoff for transient quota / 429 errors.
 */
export async function generateChapterQuestions(
  subject: string,
  year: number,
  chapter: string,
  topics: string = ""
): Promise<Question[]> {
  const prompt = `You are a Malaysian JAIS (Jabatan Agama Islam Selangor) SRA/SRI Curriculum Developer.
Task: Generate an educational quiz for primary school children (Tahun ${year}) based on the official JAIS syllabus.

REQUIREMENTS:
Generate EXACTLY 22 items in the JSON array:
- The first 20 items MUST be "objective" questions (4 options: A, B, C, D).
- The last 2 items MUST be "matching" questions. Each matching question must contain exactly 5 pairs of related concepts (total 10 matching pairs).

Book Details:
- Subject: ${subject}
- Chapter: ${chapter}
- Key Topics/Focus: ${topics}

CRITICAL RULES:
1. ONLY generate questions directly found in the JAIS SRA/SRI Selangor curriculum for "${subject}" Tahun ${year}.
2. Focus specifically on the chapter: "${chapter}" and its related topics: "${topics}".
3. Language/Script:
   - For Bahasa Arab (Arabic subject): Use ONLY ARABIC LANGUAGE with full harakat (baris). Question, Options, Pairs, and Explanation must be in Arabic.
   - For all other subjects (Tauhid, Sirah, Fiqh, Akhlak, Jawi, etc.): YOU MUST write in Bahasa Melayu but strictly using the JAWI SCRIPT (Tulisan Jawi / حروف جاوي). DO NOT use Rumi (Latin alphabets). All Questions, Options, Pairs, and Explanations MUST be in Jawi. Example of Jawi: برايمان كڤد رسول.
4. Difficulty: Must be age-appropriate for Tahun ${year} students.
5. Format:
   - Objective: Provide 4 distinct options and a correctAnswer index (0-3).
   - Matching: Provide a "question" (e.g., 'Padankan istilah dengan maksudnya') and exactly 5 "pairs" (left and right).
6. Explanation: Provide a helpful, educational explanation in the same script.
7. Variety: The 20 objective questions must cover different sub-topics within the chapter — do not repeat the same concept.

Output Format: Return ONLY a JSON array with these 22 items.`;

  const config = {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          type: { type: Type.STRING, description: "'objective' or 'matching'" },
          question: { type: Type.STRING },
          options: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Required if type is 'objective'. EXACTLY 4 strings.",
          },
          correctAnswer: {
            type: Type.INTEGER,
            description:
              "Required if type is 'objective'. The EXACT array index of the correct option (0-3).",
          },
          pairs: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                left: { type: Type.STRING },
                right: { type: Type.STRING },
              },
              required: ["left", "right"],
            },
            description: "Required if type is 'matching'. Exactly 5 pairs.",
          },
          explanation: { type: Type.STRING },
        },
        required: ["type", "question", "explanation"],
      },
    },
  };

  // Retry up to 3 times with exponential backoff on quota / transient errors
  const MAX_ATTEMPTS = 3;
  let lastError: any = null;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config,
      });

      const text = response.text;
      if (!text) throw new Error("Tiada jawapan daripada AI.");

      const parsed = JSON.parse(text) as Question[];

      // Sanity check shape
      const objCount = parsed.filter((q) => q.type === "objective").length;
      const matchCount = parsed.filter((q) => q.type === "matching").length;
      if (objCount < 18 || matchCount < 2) {
        // Lenient threshold — if model returned mostly the right shape, accept it
        console.warn(
          `AI returned ${objCount} objective + ${matchCount} matching. Expected 20 + 2.`
        );
      }

      return parsed;
    } catch (error: any) {
      lastError = error;
      const msg = String(error?.message || error || "");
      const isRateLimit =
        msg.includes("429") ||
        msg.toLowerCase().includes("quota") ||
        msg.toLowerCase().includes("rate");

      console.error(`AI Generation attempt ${attempt} failed:`, msg);

      if (attempt < MAX_ATTEMPTS && isRateLimit) {
        // Exponential backoff: 2s, 4s
        await sleep(2000 * attempt);
        continue;
      }
      // Non-retryable, or out of attempts
      break;
    }
  }

  // All attempts failed
  const finalMsg = String(lastError?.message || "");
  if (
    finalMsg.includes("429") ||
    finalMsg.toLowerCase().includes("quota")
  ) {
    throw new Error(
      "Kuota AI hari ini telah habis. Sila cuba lagi esok atau hubungi admin."
    );
  }
  throw new Error("Gagal menjana soalan. Sila cuba lagi.");
}
