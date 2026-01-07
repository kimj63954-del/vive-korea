import { GoogleGenAI } from "@google/genai";

export const getTravelAdvice = async (userPrompt: string, history: any[]) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("API_KEY is missing.");
    return "I'm sorry, my AI brain is currently disconnected (Missing API Key).";
  }

  try {
    // Correct initialization as per guidelines: new GoogleGenAI({ apiKey: ... })
    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-3-flash-preview as recommended for basic/general tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({
          role: h.role === 'model' ? 'model' : 'user',
          parts: [{ text: h.parts[0].text }]
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: "You are the 'VIBE KOREA' AI Assistant. You are a trendy, helpful, and highly knowledgeable local guide. Help foreign tourists with essential and cool questions about transport, beauty, underground fashion, and drama locations. Keep your vibe friendly, modern, and concise.",
        temperature: 0.7,
      },
    });

    return response.text || "I couldn't generate a response. Let's try another question!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! My vibe-check failed. Please check your internet or API key settings.";
  }
};