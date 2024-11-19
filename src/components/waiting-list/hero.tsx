import React from "react";
import { Badge } from "../ui/badge";
import { Circle } from "lucide-react";

export function Hero() {
  return (
    <section className="py-10 w-screen grid items-start justify-center sm:px-20 md:px-32 lg:px-40 px-10 text-sm md:text-base gap-2">
      <div className="flex items-center flex-col justify-center gap-3">
        <Badge
          variant={"outline"}
          className=" text-orange-500 rounded-full w-fit py-1.5 px-3 "
        >
          <Circle className="mr-1 size-3 fill-orange-500" />
          Launching in January
        </Badge>
        <h1 className="text-4xl font-semibold text-center md:text-5xl">
          The AI CRM
        </h1>
      </div>
      <div>
        <p className="text-center font-medium text-muted-foreground w-[26rem] sm:w-[29rem]">
          Fill in your information and we will let you know when we are accepting beta customers (so that you can get early access).
        </p>
      </div>
    </section>
  );
}
