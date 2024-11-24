"use server";

import { Buffer } from "buffer";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function uploadAndProcessFile(formData: FormData) {
  try {
    // Extract file from the FormData
    const file = formData.get("file");

    // Validate file presence
    if (!file || !(file instanceof File)) {
      return {
        error: "No valid file received.",
        status: 400,
      };
    }

    // Convert file to buffer and base64 string
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64File = buffer.toString("base64");

    // Initialize Google Generative AI client
    const genAI = new GoogleGenerativeAI({ apiKey: process.env.GOOGLE_API_KEY });

    // Generate AI content
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent({
      prompt: process.env.TASK_DESCRIPTION || "Default prompt",
      data: [
        {
          inlineData: {
            data: base64File,
            mimeType: file.type,
          },
        },
      ],
    });

    // Return AI content
    return {
      message: "Success",
      status: 201,
      response: result.response.text,
    };
  } catch (error: any) {
    console.error("Error occurred:", error);
    return {
      error: "File upload failed",
      details: error.message,
      status: 500,
    };
  }
}
