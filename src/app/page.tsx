import { WaitingListForm } from "@/components/waiting-list-form";
import Image from "next/image";

export default function Home() {
  return <div className="flex flex-col items-center justify-center h-screen">

    <WaitingListForm />
  </div>;
}
