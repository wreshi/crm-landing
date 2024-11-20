import { Features } from "@/components/waiting-list/features";
import { Footer } from "@/components/waiting-list/footer";
import { WaitingListForm } from "@/components/waiting-list/form";
import { Header } from "@/components/waiting-list/header";
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
