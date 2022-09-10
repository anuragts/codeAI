import { NextApiRequest,NextApiResponse } from "next";
import { config } from 'dotenv'
config();
const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


const openai = new OpenAIApi(
    new Configuration({
        apiKey: OPENAI_API_KEY,
    })
);
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { prompt } = req.body
    const {lang1} = req.body
    const {lang2} = req.body
const response = await openai.createCompletion({
  model: "code-davinci-002",
  prompt: `##### Translate this function  from ${lang1} into ${lang2}\n### ${lang1}\n ${prompt}    \n    ### ${lang2}`,
  temperature: 0,
  max_tokens: 150,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ["###"],
});
res.status(200).json(response.data.choices[0].text);
    
}
export const Config = {
    runtime: 'experimental-edge',
  };
  
