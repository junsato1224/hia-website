import { logout, getSessionToken, createLogoutResponse } from "@/lib/auth";

export async function POST() {
  const token = await getSessionToken();
  if (token) {
    logout(token);
  }
  return createLogoutResponse();
}
