// pages/api/hello.ts

import { NextRequest, NextResponse } from 'next/server';

export default (req: NextRequest) => {
  return NextResponse.json({
    name: `Hello, from ${req.url} , use another route .`,
  });
};

export const config = {
  runtime: 'experimental-edge',
};
export const Config = {
  runtime: 'experimental-edge',
};

