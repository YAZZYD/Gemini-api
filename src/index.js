require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const googleGenerativeAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

async function run() {
  const model = googleGenerativeAI.getGenerativeModel({
    model: process.env.MODEL_NAME || "gemini-pro",
  });
  const prompt = "A beautiful sunset over the city";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
