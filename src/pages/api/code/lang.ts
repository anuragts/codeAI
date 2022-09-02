import { NextApiRequest, NextApiResponse } from "next";
const { Configuration, OpenAIApi } = require("openai");
import { config } from "dotenv";
config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAIApi(
  new Configuration({
    apiKey: OPENAI_API_KEY,
  })
);
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { prompt } = req.body;
  const {lang} = req.body;

  const { data } = await openai.createCompletion({
    model: "code-davinci-002",
    prompt:`${lang}${prompt} # \n\n#  Explanation of what the code does  \n\n#`,
    temperature: 0,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["\n\n"],
  });
  res.status(200).json(data.choices[0].text);
};
