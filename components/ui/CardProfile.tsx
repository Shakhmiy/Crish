import Image from "next/image";
import Link from "next/link";
import Avatar from "@/public/Avatar.svg"
import Settings from "@/public/settings.svg"
import Share from "@/public/share.svg"
import Pens from "@/public/pens.svg"


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
              <p className="text-2xl font-semibold text-black">Cristiano Ronaldo</p>
              <p className="text-base font-normal text-gray-400">@cr7</p>
              <p className="text-base font-normal text-gray-400">Футболист | Нападающий | Легенда</p>
            </div>
            <div>
              <p className="text-base font-normal text-gray-400">Мечтай. Действуй. Побеждай.</p>
              <p className="text-base font-normal text-gray-400">Величие — это не случайность, а результат работы.</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-row bg-[#222A3B] justify-center rounded-xl w-[234px] h-[44px] gap-3 shadow-lg  hover:bg-gray-700">
              <Image
                  src={Pens}
                  width={18}
                  height={18}
                  alt="logo" />
                <p className="flex items-center font-medium">Редактировать профиль</p>
            </div>
            <div className="flex flex-row bg-white justify-center rounded-xl w-[143px] h-[44px] gap-3 shadow-lg hover:bg-gray-200">
              <Image
                  src={Share}
                  width={18}
                  height={18}
                  alt="logo" />
                <p className="flex items-center font-medium text-gray-500">Поделиться</p>
            </div>
            <div className="flex flex-row bg-white justify-center rounded-xl w-[44px] h-[44px] gap-3 shadow-lg hover:bg-gray-200">
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
