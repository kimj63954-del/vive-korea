
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTravelAdvice = async (userPrompt: string, history: {role: string, parts: {text: string}[]}[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: "You are the 'VIBE KOREA' AI Assistant. You are a trendy, helpful, and highly knowledgeable local guide. Help foreign tourists with essential and cool questions about transport, beauty, underground fashion, and drama locations. Keep your vibe friendly, modern, and concise.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! My vibe-check failed. Let me try reconnecting to my travel database. Try again in a second!";
  }
};
