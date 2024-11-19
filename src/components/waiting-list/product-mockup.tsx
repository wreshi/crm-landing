import Image from "next/image";
import React from "react";

export function ProductMockup() {
  return (
    <section className="sm:px-20 md:px-56 lg:px-64 px-10">
      <div className="bg-muted/50 rounded-lg p-2">
        <Image
          src="/images/mockup.png"
          alt="Product mockup"
          width={1280}
          height={720}
        />  
      </div>
    </section>
  );
}
