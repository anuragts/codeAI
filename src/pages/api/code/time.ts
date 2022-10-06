import { NextApiRequest,NextApiResponse } from "next";
import {openAi} from "../../../config/openAi.config";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { prompt } = req.body;
    const { data } = await openAi.createCompletion({
        model: "code-davinci-002",
        prompt: `${prompt} The time complexity of this function is `,
        temperature: 0,
        max_tokens: 64,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["\n",'\\n'],
    });
    res.status(200).json(data.choices[0].text);
}   
export const Config = {
    runtime: 'experimental-edge',
  };
  
