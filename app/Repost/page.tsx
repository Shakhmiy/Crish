import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/footer";
import Profile from "@/components/ui/Profile";
import Stat from "@/components/ui/Stat";
import About from "@/components/ui/About";
import ContentRepost from "@/components/ui/ContentRepost";


export default function Repost() {
  return (
    <>
    <main className="flex container mx-auto px-40 flex-col gap-20 w-[1440px]">

      <Profile />
      <Stat />

      <div className="flex flex-row gap-4 py-6">
        <About />
        <ContentRepost/>
      </div>

    </main>
    <Footer/>
    </>
  );
}
