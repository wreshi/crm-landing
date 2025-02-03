import { Badge } from "../ui/badge";
import { Circle } from "lucide-react";
import Meteors from "@/components/ui/meteors";

export function Hero() {
  return (
    <section className="relative py-10 w-screen grid items-start justify-center sm:px-20 md:px-32 lg:px-40 px-10 text-sm md:text-base gap-2 overflow-hidden">
      <Meteors number={20} className="absolute inset-0 z-0 !opacity-30" />
      <div className="relative z-10 flex items-center flex-col justify-center gap-3">
        <Badge
          variant={"outline"}
          className="text-orange-500 rounded-full w-fit py-1.5 px-3"
        >
          <Circle className="mr-1 size-3 fill-orange-500" />
          Launching in Q1 2025
        </Badge>
        <h1 className="max-w-[41.5rem] break-words text-center text-4xl font-bold text-black dark:text-white md:text-5xl">
          Your fullstack
          <span className="relative inline-block bg-orange-600 px-2 py-1 rounded-full text-white transform rotate-[5deg]">
            LinkedIn 
          </span>{" "}
          Client Acquisiton tool.
        </h1>
      </div>
      <div className="relative z-10 items-center flex flex-col pt-2">
        <p className="text-center font-medium text-muted-foreground w-[20rem] sm:w-[29rem] ">
          Fill in your information and we will let you know when we are
          accepting beta customers (so that you can get early access).
        </p>
      </div>
    </section>
  );
}
