import Image from "next/image";
import Link from "next/link";
import Publ from "@/public/publ.svg"
import People from "@/public/people.svg"
import Ppl from "@/public/Ppl.svg"
import Heart from "@/public/heart.svg"
import Raz from "@/public/Raz.svg"



export default function CardStat() {
  return (
      <div className="flex border-[#2D4C65] border-1 rounded-2xl h-[153px] p-4">
        <div className="flex justify-center flex-col items-center w-[262px] gap-3">
          <Image
                src={Publ}
                width={24}
                height={24}
                alt="logo" />
          <p className="text-white text-2xl font-semibold ">134</p>
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
          <p className="text-white text-2xl font-semibold ">63М</p>
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
          <p className="text-white  text-2xl font-semibold ">167</p>
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
          <p className="text-white  text-2xl font-semibold ">5.2М</p>
          <p className="text-gray-500 text-base">Лайки</p>
        </div>
      </div>
  );
}
