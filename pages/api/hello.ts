import { NextRequest, NextResponse } from "next/server";
import TurndownService from "turndown";

export default function hello(req: NextRequest) {
  const turndownString = String(TurndownService);

  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function! Turndown: ${turndownString}`,
  });
}

export const config = {
  runtime: "experimental-edge",
};
