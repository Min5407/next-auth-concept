import { getJwtTokenInfo } from "@/lib/auth";

export default async function Home() {
  const myInfo = await getJwtTokenInfo();

  return (
    <div>
      Home
      <div>{JSON.stringify(myInfo)}</div>
    </div>
  );
}
