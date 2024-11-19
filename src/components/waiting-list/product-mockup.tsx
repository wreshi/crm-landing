"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { ProductMockupImage } from "../../../public/product-mockup-image";
import { BorderBeam } from "../ui/border-beam";

export function ProductMockup() {
  const { theme } = useTheme();
  return (
    <section className="sm:px-20 md:px-56 lg:px-64 px-10">
      <div className="bg-muted/40 p-6 relative flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          <ProductMockupImage />
        </span>
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
    </section>
  );
}
