import { NextApiRequest , NextApiResponse  } from "next";
import {openAi} from "../../../config/openAi.config";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const  prompt:string  = req.body
  const { data } = await openAi.createCompletion({
        model: "code-davinci-002",
        prompt: `The Regex for a string that contains ${ prompt } is - const regex =  `,
        temperature: 0.5,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["\n\n","\n"],   
});
if (data) {
    res.status(200).json(data);
  } else {
    res.status(500).json({ error: "No data fetched" });
  }};
export const Config = {
    runtime: 'experimental-edge',
  };