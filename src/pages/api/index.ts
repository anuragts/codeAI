import { NextRequest, NextResponse } from "next/server";

export default (req: NextRequest) => {
  return NextResponse.json({
    name: `Hello, from ${req.url} , use another route .`,
  });
};
// edge function
export const config = {
  runtime: "experimental-edge",
};
