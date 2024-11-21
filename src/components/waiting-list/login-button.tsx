"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function LoginButton() {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
      className="!py-0 px-3 m-0 h-8"
      onClick={() => router.push("https://linkedin.com/company/asendcrm")}
    >
      Follow on LinkedIn
    </Button>
  );
}
