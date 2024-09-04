"use client";

import { logoutAction } from "./action";

const LogoutBtn = () => {
  const handleLogout = async () => {
    await logoutAction();
  };
  return <button onClick={handleLogout}>logout</button>;
};

export default LogoutBtn;
