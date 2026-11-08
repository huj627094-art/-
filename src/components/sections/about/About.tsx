import Image from "next/image";
import background from "@/assets/images/bg-surfing.svg";
import surfer from "@/assets/images/surfer.webp";
import logoWhite from "@/assets/images/logo-white.svg";
import avatar1 from "@/assets/images/avatar-1.webp";
import avatar2 from "@/assets/images/avatar-2.webp";
import avatar3 from "@/assets/images/avatar-3.webp";
import { Stamp } from "@/components/ui/Stamp";

const avatars = [avatar1, avatar2, avatar3];

export function About() {
  return (
    <section
      id="about"
      className="torn mt-10 pt-[70px] pb-[90px] md:mt-[70px] md:pt-[60px] md:pb-[120px] xl:mt-[94px] xl:pt-[120px] xl:pb-[180px]"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="wrap">
        <h2 className="title flex flex-col items-center md:items-start">
          <span>
            Серфинг<span className="md:hidden"> -</span>
          </span>
          <span className="script -mt-1 md:ml-[73px] xl:-mt-2 xl:ml-[70px]">это стиль жизни</span>
        </h2>

        <div className="mt-[30px] grid gap-2.5 md:mt-5 md:grid-cols-[1fr_245px] xl:mt-[30px] xl:grid-cols-[1fr_436px]">
          <div className="relative grid h-[183px] place-items-center overflow-hidden rounded-[20px] md:row-span-2 md:h-auto xl:min-h-[500px] xl:rounded-[35px]">
            <Image
              src={surfer}
              alt="Серфер на волне"
              fill
              sizes="(min-width: 1280px) 900px, (min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
            <Image src={logoWhite} alt="" className="relative w-[100px] md:w-[110px] xl:w-[311px]" />
          </div>

          <div className="relative rounded-[20px] bg-navy p-5 text-white max-md:order-last md:col-start-2 md:row-start-1 md:px-[15px] xl:rounded-[35px] xl:px-[47px] xl:pt-[43px] xl:pb-[44px]">
            <p className="text-[25px] leading-[1.1] font-medium xl:text-[45px]">SurfTrainCo —</p>
            <p className="mt-5 max-w-[195px] text-xs md:max-w-none xl:mt-[35px] xl:text-xl">
              это компания по обучению серфингу, расположенная в Москве, которая открылась в 2018 году.
            </p>
            <p className="mt-3 max-w-[195px] text-xs md:max-w-none xl:mt-6 xl:text-xl">
              Ее миссия состоит в том, чтобы обеспечить доступное, всестороннее и приятное обучение серфингу для всех
              уровней навыков и возрастов.
            </p>
            <Stamp
              className="absolute -right-2.5 -bottom-4 md:-top-6 md:-right-4 md:bottom-auto xl:-top-[54px] xl:-right-[30px] wide:-right-[45px]"
              imageClassName="w-[75px] xl:w-[131px]"
            />
          </div>

          <div className="flex items-center justify-between rounded-[20px] border border-muted/50 p-4 md:col-start-2 md:row-start-2 md:justify-start md:gap-4 xl:gap-8 xl:rounded-[35px] xl:px-[42px] xl:py-[31px]">
            <div className="flex">
              {avatars.map((avatar, index) => (
                <Image
                  key={avatar.src}
                  src={avatar}
                  alt=""
                  className={`size-[60px] rounded-full object-cover md:size-[50px] xl:size-[79px] ${
                    index ? "-ml-4 md:-ml-3 xl:-ml-[22px]" : ""
                  }`}
                />
              ))}
            </div>
            <p className="w-[88px] md:w-auto">
              <span className="block text-[25px] leading-[1.1] font-medium xl:text-[45px]">2000+</span>
              <span className="block text-xs text-muted md:text-base xl:text-xl">учеников</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
