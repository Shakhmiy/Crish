import Image from "next/image";
import Link from "next/link";
import Avatar from "@/public/Avatar.svg"
import Settings from "@/public/Settings.svg"
import Share from "@/public/share.svg"
import Pens from "@/public/Pens.svg"
import ac from "@/public/ac.svg"


export default function CardProfile() {
  return (


      <div className="flex gap-[60px] py-6">
        <Image
            src={Avatar}
            width={190}
            height={190}
          alt="logo" />
          <div className="flex flex-col gap-10">
            <div>
              <div className="flex flex-row gap-[9px]">
                <p className="text-2xl font-semibold text-white">Utah Mammoth</p>
                <Image
                    src={ac}
                    width={21}
                    height={21}
                    alt="logo" />
              </div>
              <p className="text-base font-normal text-gray-400">@utahmammoth</p>
              <p className="text-base font-normal text-gray-400">Официальный аккаунт хоккейного клуба Utah Mammoth</p>
            </div>
            <div>
              <p className="text-base font-normal text-gray-400">Солт-Лейк-Сити, Юта</p>
              <p className="text-base font-normal text-gray-400">Tusks up, Utah</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-row bg-[#76C4F6] justify-center rounded-xl w-[234px] h-[44px] gap-3 shadow-lg  hover:bg-gray-700 text-black">
              <Image
                  src={Pens}
                  width={18}
                  height={18}
                  alt="logo" />
                <p className="flex items-center font-medium">Редактировать профиль</p>
            </div>
            <div className="flex flex-row bg-[#102337] border-[#2D4C65] border-1 justify-center rounded-xl w-[143px] h-[44px] gap-3 shadow-lg hover:bg-gray-200">
              <Image
                  src={Share}
                  width={18}
                  height={18}
                  alt="logo" />
                <p className="flex items-center font-medium text-white">Поделиться</p>
            </div>
            <div className="flex flex-row bg-[#102337] border-[#2D4C65] border-1 justify-center rounded-xl w-[44px] h-[44px] gap-3 shadow-lg hover:bg-gray-200">
              <Image
                  src={Settings}
                  width={21}
                  height={21}
                  alt="logo" />
            </div>
          </div>
      </div>

  );
}
