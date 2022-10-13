import { NextApiRequest, NextApiResponse } from "next";
import { openAi } from "../../../config/openAi.config";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // get prompt from request body
  const prompt: string = req.body;
  const data = await openAi.createCompletion({
    model: "code-davinci-002",
    prompt: `${prompt} # SELECT`,
    temperature: 0,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["#", ";"],
  });
  if (data) {
    // if data exists, send it back to the client
    res.status(200).json(data);
  } else {
    res.status(500).json({ error: "No data fetched" });
  }
};

// vercel edge function
export const Config = {
  runtime: "experimental-edge",
};
