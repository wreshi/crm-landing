import { Footer } from "@/components/waiting-list/footer";
import { WaitingListForm } from "@/components/waiting-list/form";
import { Header } from "@/components/waiting-list/header";
import Image from "next/image";

export default function Home() {
  return <div className="flex flex-col h-screen justify-between">
    <Header />
    <Footer />
  </div>;
}
