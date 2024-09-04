"use server";

import { createJwt } from "@/lib/auth";
import { cookies } from "next/headers";

export const LoginAction = async (email: string, password: string) => {
  const user = { email, password };
  const oneMinute = 1000 * 60;
  const expireDate = new Date(Date.now() + oneMinute);

  const session = await createJwt({ user, expireDate });

  cookies().set("session", session, { expires: expireDate, httpOnly: true });
};
