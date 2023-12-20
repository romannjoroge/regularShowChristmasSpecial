// This file contains the code for prompting Gemini
import { imagesTextModel, textOnlyModel } from './model.js';
import pathToFile from './path_to_file.js';

// prompt: string
// images: list of buffer
// This function accepts a prompt and images that can be an empty list and returns as a result a string that contains the response from gemini
export async function promptAI(prompt, images) {
    try {
        if (images === undefined || images.length === 0) {
            // Asks the model a question and generates a response
            const result = await textOnlyModel.generateContent(prompt);

            // Wait for it to complete the response
            const response = await result.response;

            // Getting the response as text
            const text = response.text();
            return text;
        } else {
            // Asks the model a question and generates a response
            const result = await imagesTextModel.generateContent([prompt, ...images]);

            // Wait for it to complete the response
            const response = await result.response;

            // Getting the response as text
            const text = response.text();
            return text;
        }
    } catch (err) {
        console.log(err);
        throw "Could Not Prompt AI"
    }
}

// chat: a chat to provide the ai with and use to prompt
// prompt: what the user is asking the ai
export async function chatWithAI(chat, prompt) {
    try {
        // Send the prompt to the chat and wait for the response
        const result = await chat.sendMessage(prompt);
        const response = await result.response;

        // Return the response
        const text = response.text();
        return text;
    } catch (err) {
        console.log(err);
        throw "Could Not Chat With AI"
    }
}

async function test() {
    const chat = textOnlyModel.startChat({
        history: [{
            role: "user",
            parts: "I want you to respond to my questions as if you were Rigby from Regular show",
        },
        {
            role: "model",
            parts: "Okay understood!"
        }
    ],
        generationConfig: {
            maxOutputTokens: 100,
        },
    });

    const response = await chatWithAI(chat, "Benson told us to rake the leaves again!");
    console.log(response);
}

test();