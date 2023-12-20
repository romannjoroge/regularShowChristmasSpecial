// This file creates the model that we will be using
import { GoogleGenerativeAI } from "@google/generative-ai";

// Give access to environment variables
import dotenv from 'dotenv';
dotenv.config();

// To use the service we have to first connect to it, we use our api key to do that
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// We create a model using the connection we've made
export const imagesTextModel = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
export const textOnlyModel = genAI.getGenerativeModel({ model: "gemini-pro" });
