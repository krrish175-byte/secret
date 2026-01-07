
import { GoogleGenAI } from "@google/genai";

export const generateBirthdayPoem = async (name: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("No API key found. returning fallback wish.");
    return "To the most wonderful Debjani, may your year ahead be as bright and beautiful as your smile. Wishing you the happiest of birthdays!";
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `Write a short, heart-touching, and poetic birthday wish for a girl named ${name}. 
      The message should be sweet, elegant, and celebratory. Use emojis sparingly. Max 60 words.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text || "May your day be filled with all the magic you bring to the lives of those around you. Happy Birthday!";
  } catch (error) {
    console.error("Error generating poem:", error);
    return "To the most wonderful Debjani, may your year ahead be as bright and beautiful as your smile. Wishing you the happiest of birthdays!";
  }
};
