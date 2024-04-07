const { promptGeminiPro, promptGeminiProVision } = require("./api/helper.js");

/*

*    example for prompting the Gemini Pro Vision model
*        -add images within asset directory.
*        -define the informations related to the images.
*        -pass your prompt and the images array as arguments to the promptGeminiProVision function.
*/

/*
  const images = [
  { name: "goku.jpg", mimeType: "image/jpeg" },
  { name: "eliot.jpg", mimeType: "image/jpeg" },
];
  
promptGeminiProVision("What is goku doing? and wb eliot ?", images);
*/

/*
 
*  example for prompting the Gemini Pro model
*        -pass your prompt as an argument to the promptGeminiPro function.
*/
/*
promptGeminiPro("how are you?");
*/
