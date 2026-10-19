import Image from "next/image";
import Link from "next/link";
import Publ from "@/public/publ.svg"
import People from "@/public/people.svg"
import Ppl from "@/public/peppl.svg"
import Heart from "@/public/heart.svg"
import Raz from "@/public/Raz.svg"



export default function CardStat() {
  return (
      <div className="flex border-gray-200 rounded-2xl border-2 h-[153px] p-4">
        <div className="flex justify-center flex-col items-center w-[262px] gap-3">
          <Image
                src={Publ}
                width={24}
                height={24}
                alt="logo" />
          <p className="text-black text-2xl font-semibold ">1.234</p>
          <p className="text-gray-500 text-base">Публикации</p>
        </div>
        <Image
          src={Raz}
          width={1}
          height={105}
          alt="logo" />
        <div className="flex justify-center flex-col items-center w-[262px] gap-3">
          <Image
                src={People}
                width={24}
                height={24}
                alt="logo" />
          <p className="text-black text-2xl font-semibold ">639М</p>
          <p className="text-gray-500 text-base">Подписчики</p>
        </div>
        <Image
          src={Raz}
          width={1}
          height={105}
          alt="logo" />
        <div className="flex justify-center flex-col items-center w-[262px] gap-3">
          <Image
                src={Ppl}
                width={24}
                height={24}
                alt="logo" />
          <p className="text-black text-2xl font-semibold ">1</p>
          <p className="text-gray-500 text-base">Подписки</p>
        </div>
        <Image
          src={Raz}
          width={1}
          height={105}
          alt="logo" />
        <div className="flex justify-center flex-col items-center w-[262px] gap-3">
          <button className="">
            <Image
                  src={Heart}
                  width={24}
                  height={24}
                  alt="logo" />
          </button>
          <p className="text-black text-2xl font-semibold ">5.2М</p>
          <p className="text-gray-500 text-base">Лайки</p>
        </div>
      </div>
  );
}
