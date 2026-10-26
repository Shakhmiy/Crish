import Image from "next/image";
import Link from "next/link";
import Share from "@/public/share.svg"   
import Heart from "@/public/heart.svg"
import Grid from "@/public/Grid.svg"
import Oes from "@/public/Oes.svg"
import Doc from "@/public/Doc.svg"
import Star from "@/public/star.svg"
import p1 from "@/public/serg.png"
import p2 from "@/public/Fans.svg"
import p3 from "@/public/delta.png"
import p4 from "@/public/jers.png"
import message from "@/public/message.svg"


export default function CardContent() {
  return (
        <div className="flex flex-col border-[#2D4C65] border-2 rounded-xl w-[680px] p-4 gap-[28px]">
          <div className="flex flex-row gap-5 border-[#2D4C65] border-b">
            <div className="flex flex-row gap-2 items-center  hover:bg-gray-200">
              <Image
                  src={Grid}
                  width={20}
                  height={20}
                  alt="logo" />
              <p className="text-base font-semibold text-gray-400">Все посты</p>
            </div>
            <div className="flex flex-row gap-2  items-center  hover:bg-gray-200">
              <Image
                  src={Oes}
                  width={20}
                  height={20}
                  alt="logo" />
              <p className="text-base font-medium text-gray-400  items-center">Видео</p>
            </div>
            <div className="flex flex-row gap-2  items-center  hover:bg-gray-200">
              <Image
                  src={Doc}
                  width={20}
                  height={20}
                  alt="logo" />
              <p className="text-base font-medium text-gray-400">Репосты</p>
            </div>
            <div className="flex flex-row gap-2  items-center  hover:bg-gray-200">
              <Image
                  src={Star}
                  width={20}
                  height={20}
                  alt="logo" />
              <p className="text-base font-medium  text-gray-400">Избранное</p>
            </div>
          </div>


          <div className="flex flex-col gap-3">

            <div className="grid grid-cols-2 auto-col gap-2">
              <div className="border-[#2D4C65] border-1 rounded-lg w-[305px]">
                <div className="pt-2 px-2">
                <Image
                  src={p1}
                  width={305}
                  height={228}
                  alt="logo" />
                </div>
                  <div className="flex flex-col gap-4 py-3 px-2 ">
                    <p className="text-gray-400 font-semibold text-sm" >Добро пожаловать в Юту, Михаил Сергачёв!</p>
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-row gap-1">
                        <Image className="active:scale-95"
                          src={Heart}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">482k</p>
                        </div>
                        <div className="flex flex-row gap-1">
                        <Image
                          src={message}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">122k</p>
                        </div>
                        <div className="flex flex-row gap-1">
                        <Image
                          src={Share}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">49k</p>
                        </div>
                    </div>
                    <p className="flex items-center text-gray-500 text-xs font-medium">29 июня 2024</p>
                  </div>
              </div>
              <div className="border-[#2D4C65] border-1 rounded-lg w-[305px]">
                <div className="pt-2 px-2">
                <Image
                  src={p2}
                  width={305}
                  height={228}
                  alt="logo" />
                </div>
                  <div className="flex flex-col gap-4 py-3 px-2 ">
                    <p className="text-gray-400 font-semibold text-sm" >Первая победа в истории Utah Mammoth в НХЛ</p>
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-row gap-1">
                        <Image className="active:scale-95"
                          src={Heart}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">500k</p>
                        </div>
                        <div className="flex flex-row gap-1">
                        <Image
                          src={message}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">192k</p>
                        </div>
                        <div className="flex flex-row gap-1">
                        <Image
                          src={Share}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">20k</p>
                        </div>
                    </div>
                    <p className="flex items-center text-gray-500 text-xs font-medium">5 октября 2024</p>
                  </div>
              </div>
            </div>
            <div className="grid grid-cols-2 auto-col gap-2">
              <div className="border-[#2D4C65] border-1 rounded-lg w-[305px]">
                <div className="pt-2 px-2">
                <Image
                  src={p3}
                  width={305}
                  height={228}
                  alt="logo" />
                </div>
                  <div className="flex flex-col gap-4 py-3 px-2 ">
                    <p className="text-gray-400 font-semibold text-sm" >Delta Center - наш дом</p>
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-row gap-1">
                        <Image className="active:scale-95"
                          src={Heart}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">992k</p>
                        </div>
                        <div className="flex flex-row gap-1">
                        <Image
                          src={message}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">650k</p>
                        </div>
                        <div className="flex flex-row gap-1">
                        <Image
                          src={Share}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">120k</p>
                        </div>
                    </div>
                    <p className="flex items-center text-gray-500 text-xs font-medium">1 октября 2024</p>
                  </div>
              </div>
              <div className="border-[#2D4C65] border-1 rounded-lg w-[305px]">
                <div className="pt-2 px-2">
                <Image
                  src={p4}
                  width={305}
                  height={228}
                  alt="logo" />
                </div>
                  <div className="flex flex-col gap-4 py-3 px-2 ">
                    <p className="text-gray-400 font-semibold text-sm" >Комплекты джерси на сезон 24/25 </p>
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-row gap-1">
                        <Image className="active:scale-95"
                          src={Heart}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">923k</p>
                        </div>
                        <div className="flex flex-row gap-1">
                        <Image
                          src={message}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">192k</p>
                        </div>
                        <div className="flex flex-row gap-1">
                        <Image
                          src={Share}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">220k</p>
                        </div>
                    </div>
                    <p className="flex items-center text-gray-500 text-xs font-medium">1 cентября 2024</p>
                  </div>
              </div>
            </div>

          </div>

        </div>

  );
}
