import { NextRequest, NextResponse } from "next/server";
import { login, createSessionResponse } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { password } = (await request.json()) as { password?: string };

  if (!password) {
    return NextResponse.json({ error: "Password is required" }, { status: 400 });
  }

  const token = login(password);
  if (!token) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  return createSessionResponse(token);
}
