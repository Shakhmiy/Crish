import Image from "next/image";
import Link from "next/link";
import Share from "@/public/share.svg"   
import Heart from "@/public/heart.svg"
import Grid from "@/public/grid.svg"
import Oes from "@/public/Oes.svg"
import Doc from "@/public/Doc.svg"
import Star from "@/public/star.svg"
import Video from "@/public/Video.svg"
import message from "@/public/message.svg"


export default function ContentVideo() {
  return (
        <div className="flex flex-col border-[#2D4C65] border-2 rounded-xl w-[680px] p-4 gap-[28px]">
          <div className="flex flex-row gap-5 border-[#2D4C65] border-b">
            <Link href="/">
                <div className="flex flex-row gap-2 items-center  hover:bg-gray-200">
                <Image
                    src={Grid}
                    width={20}
                    height={20}
                    alt="logo" />
                <p className="text-base font-semibold text-gray-400">Все посты</p>
                </div>
            </Link>
            <Link href="/Video">
                <div className="flex flex-row gap-2  items-center  hover:bg-gray-200">
                <Image
                    src={Doc}
                    width={20}
                    height={20}
                    alt="logo" />
                <p className="text-base font-medium text-gray-400  items-center">Видео</p>
                </div>
            </Link>
            <Link href="/Repost">
              <div className="flex flex-row gap-2  items-center  hover:bg-gray-200">
                <Image
                    src={Oes}
                    width={20}
                    height={20}
                    alt="logo" />
                <p className="text-base font-medium text-gray-400">Репосты</p>
              </div>
            </Link>
            <Link href="/Star">
                <div className="flex flex-row gap-2  items-center  hover:bg-gray-200">
                <Image
                    src={Star}
                    width={20}
                    height={20}
                    alt="logo" />
                <p className="text-base font-medium  text-gray-400">Избранное</p>
                </div>
            </Link>
          </div>

          <div className="border-[#2D4C65] border-1 rounded-lg w-[305px]">
                <div className="pt-2 px-2">
                <Image
                  src={Video}
                  width={305}
                  height={228}
                  alt="logo" />
                </div>
                  <div className="flex flex-col gap-4 py-3 px-2 ">
                    <p className="text-gray-400 font-semibold text-sm" >Первый гол нового сезона в ворота Чикаго.</p>
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-row gap-1">
                        <Image className="active:scale-95"
                          src={Heart}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">12k</p>
                        </div>
                        <div className="flex flex-row gap-1">
                        <Image
                          src={message}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">6k</p>
                        </div>
                        <div className="flex flex-row gap-1">
                        <Image
                          src={Share}
                          width={18}
                          height={18}
                          alt="logo" />
                          <p className="flex items-center text-gray-500 text-xs font-medium">1k</p>
                        </div>
                    </div>
                    <p className="flex items-center text-gray-500 text-xs font-medium">1 октября 2024</p>
                  </div>
          </div>

        </div>

  );
}
