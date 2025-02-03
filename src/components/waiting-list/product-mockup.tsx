import Image from "next/image";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export function ProductMockup() {
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
      </div>
    </section>
  );
}
