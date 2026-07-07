"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { ADMIN_COOKIE_NAME, adminSessionToken, isCorrectAdminPassword } from "@/lib/auth";
import type { RequestStatus } from "@/generated/prisma/client";

export type LoginState = { error: string | null };

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");

  if (!process.env.ADMIN_PASSWORD) {
    return { error: "Admin login isn't configured yet. Set ADMIN_PASSWORD in your environment." };
  }

  if (!isCorrectAdminPassword(password)) {
    return { error: "Incorrect password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, adminSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return { error: null };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}

export async function updateRequestStatus(id: string, status: RequestStatus) {
  await prisma.customRequest.update({ where: { id }, data: { status } });
  revalidatePath("/admin");
}
