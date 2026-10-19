import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/footer";
import CardProfile from "@/components/ui/CardProfile";
import CardStat from "@/components/ui/CardStat";
import CardAbout from "@/components/ui/CardAbout";
import CardContent from "@/components/ui/CardContent";


export default function Home() {
  return (
    <>
    <main className="flex container mx-auto px-40 flex-col gap-20 w-[1440px]">

      <CardProfile />
      <CardStat />

      <div className="flex flex-row gap-4 py-6">
        <CardAbout />
        <CardContent />
      </div>

    </main>
    <Footer/>
    </>
  );
}
