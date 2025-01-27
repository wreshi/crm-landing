"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Linkedin } from "lucide-react";

export function LoginButton() {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
      className="!py-0 px-3 m-0 h-8 flex items-center gap-2"
      onClick={() => router.push("https://linkedin.com/company/asendcrm")}
    >
      <Linkedin className="size-3"/>
      Follow on LinkedIn
    </Button>
  );
}
