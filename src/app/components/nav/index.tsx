import Link from "next/link";
import React from "react";
import LogoutBtn from "./logout_btn";

const Navigation = () => {
  return (
    <nav className="py-3 px-5">
      <ul className="flex gap-3">
        <li className="border border-blue-400 rounded p-1">
          <Link href="/">Home</Link>
        </li>
        <li className="border border-blue-400 rounded p-1">
          <Link href="/login">Login</Link>
        </li>
        <li className="ml-auto">
          <LogoutBtn />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
