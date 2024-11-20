import React from "react";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";
import { LoginButton } from "./login-button";

export function Header() {
  return (
    <section className="py-3.5 border-b border-border w-screen flex items-center justify-between sm:px-20 md:px-32 lg:px-40 px-10">
      <Link className="flex items-center gap-2 font-medium" href={"/"}>
        <Logo className="h-5 w-5" />
        Asend
      </Link>
      <div className="flex items-center gap-2">
        <LoginButton />
        {/* <ModeToggle /> */}
      </div>
    </section>
  );
}
