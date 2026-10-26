import Image from "next/image";
import Link from "next/link";
import Rzz from "@/public/Rzz.svg"
import Email from "@/public/mail.svg"
import Global from "@/public/globe.svg"
import Inst from "@/public/instagram.svg"
import X from "@/public/x.svg"
import Calendar from "@/public/calendar.svg"



export default function CardAbout() {
  return (
        <div className="flex flex-col border-[#2D4C65] border-2 rounded-xl w-[426px] p-4 gap-7">
          <div className="flex flex-col gap-4 w-[378px]">
            <p className="text-white text-xl font-semibold " >О себе</p>
            <p className="text-base text-gray-400">Utah Mammoth — профессиональный хоккейный клуб НХЛ, основанный в 2024 году и базирующийся в Солт-Лейк-Сити, штат Юта. Мы — новая сила в лиге, объединяющая страсть к хоккею, гордость за регион и амбициозный взгляд в будущее.</p>
          </div>
          <Image
          src={Rzz}
          width={378}
          height={1}
          alt="logo" />
          <div className="flex flex-col gap-4 w-[378px] ">
            <p className="text-white text-xl font-semibold ">Навыки</p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3">
                  <p className="p-2 flex text-xs font-normal text-gray-400 border-[#2D4C65] border-1 rounded-2xl h-[30px] w-auto justify-center items-center">НХЛ</p>
                  <p className="p-2 flex text-xs font-normal text-gray-400 border-[#2D4C65] border-1 rounded-2xl h-[30px] w-auto justify-center items-center">Западная конференция</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p className="p-2 flex text-xs font-normal text-gray-400 border-[#2D4C65] border-1 rounded-2xl h-[30px] w-auto justify-center items-center">Центральный дивизион</p>
                  <p className="p-2 flex text-xs font-normal text-gray-400 border-[#2D4C65] border-1 rounded-2xl h-[30px] w-auto justify-center items-center">Солт-Лейк-Сити</p>
                </div>
            </div>
          </div>
          <Image
          src={Rzz}
          width={378}
          height={1}
          alt="logo" />
          <div className="flex flex-col gap-4">
            <p className="text-white text-xl font-semibold ">Контактная информация</p>
            <div className="flex flex-row gap-5">
              <Image
                src={Email}
                width={24}
                height={24}
                alt="logo" />
              <div className="">
                <p className="text-base font-medium text-gray-400">media@utahmammoth.com</p>
                <p className="text-base font-medium text-gray-500">Email</p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <Image
                src={Global}
                width={24}
                height={24}
                alt="logo" />
              <Link href="https://www.cristianoronaldo.com/" className="">
                <div className="">
                  <p className="text-base font-medium text-gray-400">www.utahmammoth.com</p>
                  <p className="text-base font-medium text-gray-500">Веб-сайт</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-row gap-5">
              <Image
                src={Inst}
                width={24}
                height={24}
                alt="logo" />
              <div className="">
                <p className="text-base font-medium text-gray-400">@utahmammoth</p>
                <p className="text-base font-medium text-gray-500">Instagram</p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <Image
                src={X}
                width={24}
                height={24}
                alt="logo" />
              <div className="">
                <p className="text-base font-medium text-gray-400">@utahmammoth</p>
                <p className="text-base font-medium text-gray-500">X (twitter)</p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <Image
                src={Calendar}
                width={24}
                height={24}
                alt="logo" />
              <div className="">
                <p className="text-base font-medium text-gray-400">1 июня 2024</p>
                <p className="text-base font-medium text-gray-500">Дата регистрации</p>
              </div>
            </div>
          </div>
        </div>

  );
}