import React from "react";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

export function Header() {
  return (
    <section className="py-3.5 border-b border-border w-screen flex items-center justify-between sm:px-20 md:px-32 lg:px-40 px-10">
      <div className="flex items-center gap-2 font-medium">
        <Logo className="h-5 w-5" />
        Asend
      </div>
      <div className="flex items-center gap-2">
        <Button variant={"outline"} className="!py-0 px-3 m-0 h-8">
          Login (Beta)
        </Button>
        {/* <ModeToggle /> */}
      </div>
    </section>
  );
}
