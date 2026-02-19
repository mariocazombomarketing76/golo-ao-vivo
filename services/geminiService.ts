
import { GoogleGenAI, Type } from "@google/genai";
import { Match } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMatchAnalysis = async (match: Match) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analise este estado de jogo de futebol e forneça um insight curto no estilo "Alerta" (máx 20 palavras). 
      Responda obrigatoriamente em Português.
      Jogo: ${match.homeTeam} vs ${match.awayTeam}. 
      Resultado: ${match.homeScore}-${match.awayScore}. 
      Minuto: ${match.minute}. 
      Estatísticas: Posse Casa ${match.stats.homePos}%, Remates Casa ${match.stats.homeShots}.
      
      Foque em momentum de apostas ou golos potenciais. Saída estritamente um objeto JSON com campos 'message' e 'type' (um de: DANGER, MOMENTUM, AI_PICK).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            message: { type: Type.STRING },
            type: { type: Type.STRING }
          },
          required: ["message", "type"]
        }
      }
    });
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Erro Gemini:", error);
    return { message: "Jogo a aquecer! Intensidade detetada no último terço.", type: "MOMENTUM" };
  }
};
