require("dotenv").config();
const fs = require("fs");
const path = require("path");

const { GoogleGenerativeAI } = require("@google/generative-ai");

const googleGenerativeAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

/**
 * Runs the Gemini Pro model to generate content based on the given text prompt.
 * @param {string} prompt - The text prompt for generating content.
 * @returns {Promise<void>} - A promise that resolves when the content generation is complete.
 */
async function promptGeminiPro(prompt) {
  const model = googleGenerativeAI.getGenerativeModel({
    model: process.env.MODEL_NAME || "gemini-pro",
  });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

/**
 * Runs the Gemini Pro Vision model to generate content based on the given text and images.
 * @param {string} prompt - The text prompt for content generation.
 * @param {string[]} images - An array of image infos.
 * @returns {Promise<void>} - A promise that resolves when the content generation is complete.
 */
async function promptGeminiProVision(prompt, images) {
  const model = googleGenerativeAI.getGenerativeModel({
    model: process.env.MODEL_NAME || "gemini-pro-vision",
  });

  const imageParts = images.map((image) =>
    filetoGenerativePart(
      path.join(path.dirname(__dirname), "asset", image.name),
      image.mimeType
    )
  );

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

/**
 * Converts a file to a generative part.
 *
 * @param {string} path - The path to the file.
 * @param {string} mimeType - The MIME type of the file.
 * @returns {object} - The generative part object.
 */
function filetoGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

module.exports = { promptGeminiPro, promptGeminiProVision };
