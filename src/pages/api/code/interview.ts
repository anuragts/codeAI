import { NextApiRequest,NextApiResponse } from "next";
const { Configuration, OpenAIApi } = require("openai");
import { config } from 'dotenv'
config();

// load environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Create api to get code from the prompt
const openai = new OpenAIApi(
    new Configuration({
        apiKey: OPENAI_API_KEY,
    })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { prompt } = req.body
    const { data } = await openai.createCompletion({
        model: "code-davinci-002",
        prompt: `Create a list of 8 questions for my interview about the following topic ${prompt} \n\n 1.`,
        temperature: 0.5,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["###","\n\n"],   
});
    res.status(200).json(data.choices[0].text);
};