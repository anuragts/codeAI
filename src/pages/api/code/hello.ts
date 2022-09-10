// pages/api/hello.ts

import { NextRequest, NextResponse } from 'next/server';

export default (req: NextRequest) => {
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
};

export const config = {
  runtime: 'experimental-edge',
};
