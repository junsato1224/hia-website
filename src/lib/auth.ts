import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";

const SESSION_COOKIE = "admin_session";
const sessions = new Set<string>();

export function login(password: string): string | null {
  if (password !== process.env.ADMIN_PASSWORD) {
    return null;
  }
  const token = crypto.randomUUID();
  sessions.add(token);
  return token;
}

export function logout(token: string): void {
  sessions.delete(token);
}

export function isValidSession(token: string): boolean {
  return sessions.has(token);
}

export async function getSessionToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value;
}

export async function requireAuth(): Promise<
  { authenticated: true } | { authenticated: false; response: NextResponse }
> {
  const token = await getSessionToken();
  if (!token || !isValidSession(token)) {
    return {
      authenticated: false,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }
  return { authenticated: true };
}

export function createSessionResponse(token: string): NextResponse {
  const response = NextResponse.json({ success: true });
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  });
  return response;
}

export function createLogoutResponse(): NextResponse {
  const response = NextResponse.json({ success: true });
  response.cookies.delete(SESSION_COOKIE);
  return response;
}
