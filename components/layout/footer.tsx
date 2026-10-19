import Image from "next/image";
import Logo from "@/public/Logo.svg"
import Yt from "@/public/Yt.svg"
import Tg from "@/public/Tg.svg"
import Xx from "@/public/Xx.svg"
import Instg from "@/public/Inst.svg"



export default function Footer() {
  return (
    <footer>

      <div className="bg-gray-200 max-w-full shadow-lg">
      <div className="flex container mx-auto items-center justify-between py-5 w-[1120px]">
        <Image
          src={Logo}
          width={120}
          height={20}
          alt="logo" />
          <p className="text-gray-600 text-base">© 2026 Shakhmiy. Все права защищены.</p>
        <div className="flex flex-row text-gray-600 gap-4 text-base">
          <p>О нас</p>
          <p>Поддержка</p>
          <p>Блок</p>
          <p>Вакансии</p>
        </div>
        <div className="flex flex-row gap-2">
            <Image
            src={Yt}
            width={22}
            height={22}
            alt="logo" />
            <Image
            src={Tg}
            width={22}
            height={22}
            alt="logo" />
            <Image
            src={Xx}
            width={22}
            height={22}
            alt="logo" />
            <Image
            src={Instg}
            width={22}
            height={22}
            alt="logo" />
        </div>
      </div>
      </div>
    
    </footer>
  );
}
