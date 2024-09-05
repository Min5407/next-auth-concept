import { createRefreshJwtToken, getJwtToken } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export const updateJwtToken = async (request: NextRequest) => {
  const response = NextResponse.next();

  const token = getJwtToken();

  if (!token) return;

  // refresh the token
  const oneMinute = 1000 * 60;
  const expireDate = new Date(Date.now() + oneMinute);
  const refreshToken = await createRefreshJwtToken(token, expireDate);

  response.cookies.set({
    name: "session",
    value: refreshToken,
    httpOnly: true,
    expires: expireDate,
  });

  return response;
};
