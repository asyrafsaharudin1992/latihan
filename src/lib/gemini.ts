import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function askTutor(question: string, context: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a friendly, encouraging Islamic school tutor mascot for kids. 
      The child is learning about: ${context}.
      They asked: ${question}
      Explain it in a simple, fun, and easy-to-understand way for a child (around 7-12 years old). 
      Use emojis. Keep it concise.`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Tutor error:", error);
    return "Ops! Kawan AI sedang berehat sekejap. Cuba lagi nanti ya! 😊";
  }
}
