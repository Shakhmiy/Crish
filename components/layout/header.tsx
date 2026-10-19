import Image from "next/image";
import Logo from "@/public/Logo.svg"
import Link from "next/link";
import Search from "@/public/Search.svg"
import Lg from "@/public/Lg.svg"
import Uv from "@/public/Uv.svg"

export default function Header() {
  return (
    <header>
      <div className="bg-gray-200 max-w-full shadow-lg">
      <div className="flex container mx-auto items-center justify-between py-5 gap-10 gap-4 w-[1120px]">
        <Image
          src={Logo}
          width={120}
          height={20}
          alt="logo" />
          <div className="flex text-gray-500 font-medium text-base gap-5 w-[546px] justify-start">
            <p>Главная</p>
            <p>Поиск</p>
            <p>Сообщения</p>
          </div>
          <div className="flex flex-row bg-gray-300 justify-center rounded-xl w-[216px] h-[38px] gap-24">
            <p className="flex items-center text-gray-500">Поиск...</p>
            <Image
              src={Search}
              width={15}
              height={15}
              alt="logo" />
          </div>
          <div className="flex flex-row gap-2">
            <Image
              src={Uv}
              width={30}
              height={30}
              alt="logo" />
            <Image
              src={Lg}
              width={45}
              height={30}
              alt="logo" />
          </div>
      </div>
      </div>
    </header>
  );
}