import { NextApiRequest,NextApiResponse } from "next";
import {openAi} from "../../../config/openAi.config";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { prompt } = req.body
const response = await openAi.createCompletion({
  model: "code-davinci-002",
  prompt: `${prompt} # SELECT`,
  temperature: 0,
  max_tokens: 150,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ["#", ";"],
});
res.status(200).json(response.data.choices[0].text);
    
}
export const Config = {
    runtime: 'experimental-edge',
  };
  
