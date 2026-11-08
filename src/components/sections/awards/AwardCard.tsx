import Image from "next/image";
import arrow from "@/assets/images/ic-arrow.svg";
import type { Award } from "@/data/awards";

export function AwardCard({ award }: { award: Award }) {
  return (
    <article className="w-[290px] shrink-0 snap-center rounded-[30px] bg-mist px-[13px] py-2.5 md:w-[740px] md:rounded-[40px] md:p-[15px] xl:w-[min(1340px,calc(100vw-68px))] xl:rounded-[60px] xl:p-[30px]">
      <div className="relative flex h-full flex-col rounded-[25px] bg-white md:flex-row xl:rounded-[35px]">
        <Image
          src={award.image}
          alt={award.imageAlt}
          sizes="(min-width: 1280px) 630px, (min-width: 768px) 340px, 270px"
          className="h-[246px] w-full rounded-[25px] object-cover md:h-auto md:min-h-[280px] md:w-[46%] xl:min-h-[509px] xl:w-[47%] xl:rounded-[35px]"
        />
        <div className="flex flex-1 flex-col p-[23px] md:p-10 xl:py-20 xl:pr-[60px] xl:pl-[114px]">
          <p className="text-xs text-muted/70 xl:text-base">{award.kind}</p>
          <h3 className="mt-2.5 text-lg leading-[1.1] font-medium md:text-[25px] xl:mt-5 xl:text-[45px] xl:leading-[1.2]">
            {award.title}
          </h3>
          <p className="mt-2.5 text-xs text-muted md:mt-5 md:text-base xl:mt-10 xl:text-xl">{award.issuer}</p>
          <p className="mt-auto pt-5 text-xs text-muted md:text-base xl:text-xl">({award.year})</p>
        </div>
        <a
          href={award.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Подробнее о награде ${award.title}`}
          className="absolute right-2.5 bottom-2.5 grid size-[25px] place-items-center rounded-full bg-mist transition-colors hover:bg-navy/10 md:size-[35px] xl:right-[13px] xl:bottom-[13px] xl:size-[55px]"
        >
          <Image src={arrow} alt="" className="w-1/2" />
        </a>
      </div>
    </article>
  );
}
