import Image from "next/image";
import background from "@/assets/images/bg-promo.svg";
import boardLeft from "@/assets/images/board-l.svg";
import boardRight from "@/assets/images/board-r.svg";
import { promos } from "@/data/promos";
import { PromoSlider } from "./PromoSlider";

export function Promo() {
  return (
    <section
      id="promo"
      className="torn relative mt-[60px] pt-[70px] pb-[80px] md:mt-[90px] md:pt-[90px] md:pb-[120px] xl:mt-[120px] xl:pt-[120px] xl:pb-[212px]"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <Image
        src={boardLeft}
        alt=""
        className="absolute top-[69px] left-[22px] hidden w-[106px] lg:block xl:top-[143px] xl:left-[48px] xl:hidden xl:w-[216px] 3xl:block"
      />
      <Image
        src={boardRight}
        alt=""
        className="absolute top-[69px] right-[21px] hidden w-[106px] lg:block xl:top-[143px] xl:right-[45px] xl:hidden xl:w-[217px] 3xl:block"
      />

      <div className="wrap relative">
        <PromoSlider promos={promos} />
      </div>
    </section>
  );
}
