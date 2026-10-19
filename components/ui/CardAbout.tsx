import Image from "next/image";
import Link from "next/link";
import Rzz from "@/public/rzz.svg"
import Email from "@/public/mail.svg"
import Global from "@/public/globe.svg"
import Inst from "@/public/instagram.svg"
import X from "@/public/x.svg"
import Calendar from "@/public/calendar.svg"



export default function CardAbout() {
  return (
        <div className="flex flex-col  border-gray-300 border-2 rounded-xl w-[426px] p-4 gap-7">
          <div className="flex flex-col gap-4 w-[378px]">
            <p className="text-black text-xl font-semibold " >О себе</p>
            <p className="text-base text-gray-400">Криштиану Роналду — португальский футболист, один из самых известных и титулованных игроков в истории футбола. 
            Многократный обладатель Золотого мяча и чемпион различных лиг. 
            В дохновляет миллионы людей по всему миру своей дисциплиной, трудолюбием и стремлением к совершенству.</p>
          </div>
          <Image
          src={Rzz}
          width={378}
          height={1}
          alt="logo" />
          <div className="flex flex-col gap-4 w-[378px] ">
            <p className="text-black text-xl font-semibold ">Навыки</p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3">
                  <p className="p-2 flex text-xs font-normal text-gray-500 bg-gray-200 border-gray-200 border-2 rounded-2xl h-[30px] w-auto justify-center items-center">Футбол</p>
                  <p className="p-2 flex text-xs font-normal text-gray-500 bg-gray-200 border-gray-200 border-2 rounded-2xl h-[30px] w-auto justify-center items-center">Лидерство</p>
                  <p className="p-2 flex text-xs font-normal text-gray-500 bg-gray-200 border-gray-200 border-2 rounded-2xl h-[30px] w-auto justify-center items-center">Дисциплина</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p className="p-2 flex text-xs font-normal text-gray-500 bg-gray-200 border-gray-200 border-2 rounded-2xl h-[30px] w-auto justify-center items-center">Мотивация</p>
                  <p className="p-2 flex text-xs font-normal text-gray-500 bg-gray-200 border-gray-200 border-2 rounded-2xl h-[30px] w-auto justify-center items-center">Упорство</p>
                  <p className="p-2 flex text-xs font-normal text-gray-500 bg-gray-200 border-gray-200 border-2 rounded-2xl h-[30px] w-auto justify-center items-center">Проффесионализм</p>
                </div>
            </div>
          </div>
          <Image
          src={Rzz}
          width={378}
          height={1}
          alt="logo" />
          <div className="flex flex-col gap-4">
            <p className="text-black text-xl font-semibold ">Контактная информация</p>
            <div className="flex flex-row gap-5">
              <Image
                src={Email}
                width={24}
                height={24}
                alt="logo" />
              <div className="">
                <p className="text-base font-medium text-black">ronaldo@cr7.com</p>
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
                  <p className="text-base font-medium text-black">www.cristianoronaldo.com</p>
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
                <p className="text-base font-medium text-black">@cristiano</p>
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
                <p className="text-base font-medium text-black">@cristiano</p>
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
                <p className="text-base font-medium text-black">3 ноября 2009</p>
                <p className="text-base font-medium text-gray-500">Дата регистрации</p>
              </div>
            </div>
          </div>
        </div>

  );
}