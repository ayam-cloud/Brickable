import { createHash, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE_NAME = "brickable_admin_session";

function expectedToken(): string {
  const secret = process.env.ADMIN_SESSION_SECRET ?? "dev-secret-change-me";
  const password = process.env.ADMIN_PASSWORD ?? "";
  return createHash("sha256").update(`${password}:${secret}`).digest("hex");
}

export function adminSessionToken(): string {
  return expectedToken();
}

export function isValidAdminToken(token: string | undefined | null): boolean {
  if (!token || !process.env.ADMIN_PASSWORD) return false;
  const expected = expectedToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function isCorrectAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  if (!expected) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
