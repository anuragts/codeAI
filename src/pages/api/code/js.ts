import { NextApiRequest,NextApiResponse } from "next";
import {openAi} from "../../../config/openAi.config";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { prompt } = req.body
    const { data } = await openAi.createCompletion({
        model: "code-davinci-002",
        prompt: `${prompt} # const`,
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["#","\n\n"],
});
if (data) {
    res.status(200).json(data);
  } else {
    res.status(500).json({ error: "No data fetched" });
  }};
export const Config = {
    runtime: 'experimental-edge',
  };
  
