import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateChapterQuestions(
  subject: string,
  year: number,
  chapter: string,
  topics: string = "",
  count: number = 30 // Now acts as a total conceptual questions (20 obj + 10 matching pairs)
): Promise<Question[]> {
  const scriptType = subject.toLowerCase().includes("arab") ? "Arabic" : "JAWI";
  
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
   - For Bahasa Arab: Use ONLY ARABIC script with full harakat (baris). Question, Options, Pairs, and Explanation must be in Arabic.
   - For Tauhid, Sirah, Fiqh, Akhlak, and Jawi: EVERYTHING MUST be in JAWI script.
4. Difficulty: Must be age-appropriate for Tahun ${year} students.
5. Format:
   - Objective: Provide 4 distinct options and a correctAnswer index (0-3).
   - Matching: Provide a "question" (e.g., 'Padankan istilah dengan maksudnya') and exactly 5 "pairs" (left and right).
6. Explanation: Provide a helpful, educational explanation in the same script.

Output Format: Return ONLY a JSON array with these 22 items.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
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
                    description: "Required if type is 'objective'. EXACTLY 4 strings."
                  },
                  correctAnswer: { 
                    type: Type.INTEGER, 
                    description: "Required if type is 'objective'. The EXACT array index of the correct option (0 for the first option, 1 for the second option, 2 for the third option, 3 for the fourth option)." 
                  },
              pairs: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    left: { type: Type.STRING },
                    right: { type: Type.STRING }
                  },
                  required: ["left", "right"]
                },
                description: "Required if type is 'matching'. Exactly 5 pairs."
              },
              explanation: { type: Type.STRING }
            },
            required: ["type", "question", "explanation"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text);
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw error;
  }
}
