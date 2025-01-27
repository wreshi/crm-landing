"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { Suspense } from "react";
import { ProductMockupImage } from "../../../public/product-mockup-image";
import { BorderBeam } from "../ui/border-beam";
import { Loader2 } from "lucide-react";

export function ProductMockup() {
  const { theme } = useTheme();
  return (
    <section className="hidden md:block  md:px-56 lg:px-64 px-10">
      <div className="flex-col">
        <Suspense fallback={<div className="w-full h-full" >
          <Loader2 className="size-4 text-gray-600 animate-spin" />
        </div>}>
          <Image
            src={"/images/mockup-light.webp"}
            alt="Product Mockup"
            width={2000}
            height={1080}
            className="w-full h-full"
          />
        </Suspense>
        {/* <BorderBeam size={300} duration={12} delay={9} className="" /> */}
      </div>
      {/* <div className="bg-muted/40 relative flex-col items-center justify-center overflow-hidden rounded-lg w-full h-full">
        {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        </span> */}
    </section>
  );
}
