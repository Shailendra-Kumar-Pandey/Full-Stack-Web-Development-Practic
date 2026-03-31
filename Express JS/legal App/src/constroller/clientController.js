import {GoogleGenAI} from '@google/genai';
import e from 'express';

export const AIResponse = async (req, res) => {

    try {

        let { prompt } = req?.body;

        
        const ai = new GoogleGenAI({
          apiKey: 'AIzaSyA5UzD44a6kdsRTb_JFZvof60E9TNSFrFM'
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: prompt,
            config:{
                systemInstruction:"please data return in json format only",
                temperature: 0.2,
            }
        });

        let result=response.candidates[0].content.parts[0].text


        res.json({
            success: true,
            message: "AI Response Generated Successfully...",
            data: JSON.stringify(result)
        });
        

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message : `${error}, Server Error...`})
    }
}


export const createCaseWithAIResponse = async (req, res) => {

    try {

        let { problemStatement, location, caseDate } = req?.body;


        const prompt =`
        Analyze the legal case belowand return STRICT JSON only.
        
        Problem: "${problemStatement}",

        Location: "${location}",

        CaseDate: "${caseDate}"
        
        Return format:
        {
        "predictedCaseType":"",
        "caseSeverity":"HIGH" | "MEDIUM" | "LOW",
        "suggestedIPSSections": [],
        "wrostCaseOutcome":"",
        "estimatedFeeMin": number,
        "estimatedFeeMax": number,
        "remark":"",
        "TypeOfLawyerNeeded":"Criminal" | "Civil" | "Family" | "Corporate" | "Cyber" | "Property"
        }
        `


        
        const ai = new GoogleGenAI({
          apiKey: 'AIzaSyA5UzD44a6kdsRTb_JFZvof60E9TNSFrFM'
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config:{
                systemInstruction:"please data return in json format only",
                temperature: 0.2,
            }
        });

        console.log("Raw AI Response:", response);

        let result=response?.candidates[0]?.content?.parts[0]?.text;
        let resultAI = result.split("```json")[1]?.split("```")[0]?.trim();

        let axtractedData=JSON.parse(resultAI);
        console.log(axtractedData)

        res.json({
            success: true,
            message: "AI Response Generated Successfully...",
            data: axtractedData
       });
        

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message : `${error}, Server Error...`})
    }
}
