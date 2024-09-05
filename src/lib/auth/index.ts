import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = "random secret key";
const key = new TextEncoder().encode(secretKey);
const algorithm = "HS256";

export async function createJwt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: algorithm })
    .setIssuedAt()
    .setExpirationTime("1 minute from now")
    .sign(key);
}

export async function decryptJwt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: [algorithm],
  });
  return payload;
}

export function getJwtToken() {
  const token = cookies().get("session")?.value || null;
  return token;
}

export function setJwtToken(session: string, expireDate: Date) {
  cookies().set("session", session, { expires: expireDate, httpOnly: true });
}

export async function createRefreshJwtToken(token: string, expireDate: Date) {
  const decryptToken = await decryptJwt(token);

  decryptToken.expireDate = expireDate;

  const refreshToken = await createJwt(decryptToken);

  return refreshToken;
}

export async function getJwtTokenInfo() {
  const token = getJwtToken();

  if (!token) return;
  const info = await decryptJwt(token);
  return info;
}
