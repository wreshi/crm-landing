import { Features } from "@/components/waiting-list/features";
import { WaitingListForm } from "@/components/waiting-list/form";
import { Hero } from "@/components/waiting-list/hero";
import { ProductMockup } from "@/components/waiting-list/product-mockup";
import { cookies } from "next/headers";

export default async function Home() {
  const submissionId = (await cookies()).get("waitlist")?.value;
  return (
    <section>
      <Hero />
      <WaitingListForm submissionId={submissionId} />
      <ProductMockup />
      <Features />
    </section>
  );
}
