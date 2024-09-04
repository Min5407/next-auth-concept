"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logoutAction = () => {
  cookies().set("session", "", { expires: new Date(0) });
  redirect("/");
};
