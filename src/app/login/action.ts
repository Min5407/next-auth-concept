"use server";

import { createJwt, setJwtToken } from "@/lib/auth";

export const LoginAction = async (email: string, password: string) => {
  const user = { email, password };
  const oneMinute = 10000;
  const expireDate = new Date(Date.now() + oneMinute);

  const session = await createJwt({ user, expireDate });

  setJwtToken(session, expireDate);
};
