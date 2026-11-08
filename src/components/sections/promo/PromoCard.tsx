import Image from "next/image";
import arrow from "@/assets/images/ic-arrow-white.svg";
import type { Promo } from "@/data/promos";

type PromoCardProps = {
  promo: Promo;
  className?: string;
};

export function PromoCard({ promo, className = "" }: PromoCardProps) {
  return (
    <a
      href="#signup"
      className={`group shrink-0 snap-start rounded-[30px] bg-mist p-3.5 md:w-[calc((100%-40px)/3)] md:p-2.5 xl:w-[calc((100%-60px)/3)] xl:rounded-[60px] xl:p-[30px] ${className}`}
    >
      <div className="relative isolate flex aspect-square flex-col overflow-hidden rounded-[20px] p-5 text-white xl:rounded-[35px] xl:p-[30px]">
        <Image
          src={promo.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 240px, 100vw"
          className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 -z-10 bg-linear-to-b from-black/35 via-transparent to-black/45" />
        <span className="flex items-start justify-between text-xs xl:text-base">
          {promo.period}
          <Image src={arrow} alt="" className="w-4 xl:w-6" />
        </span>
        <span className="mt-auto text-sm font-bold md:text-xs xl:text-xl">{promo.text}</span>
      </div>
    </a>
  );
}
