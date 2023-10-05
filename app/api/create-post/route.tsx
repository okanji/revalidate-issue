// create a new post api endpoint

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  const result = await prisma.post.create({
    data: {
      text,
    },
  });

  console.log(result);

  return new NextResponse("Post created", {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
