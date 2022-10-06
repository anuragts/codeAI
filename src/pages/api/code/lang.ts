import { NextApiRequest, NextApiResponse } from "next";
import {openAi} from "../../../config/openAi.config";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { prompt } = req.body;
  const {lang} = req.body;

  const { data } = await openAi.createCompletion({
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
export const Config = {
  runtime: 'experimental-edge',
};


