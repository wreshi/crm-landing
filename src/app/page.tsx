import { Features } from "@/components/waiting-list/features";
import { Footer } from "@/components/waiting-list/footer";
import { WaitingListForm } from "@/components/waiting-list/form";
import { Header } from "@/components/waiting-list/header";
import { Hero } from "@/components/waiting-list/hero";
import { ProductMockup } from "@/components/waiting-list/product-mockup";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WaitingListForm />
      <ProductMockup />
      <Features />
      <Footer />
    </main>
  );
}
