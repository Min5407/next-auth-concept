import { SignJWT, jwtVerify } from "jose";

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
