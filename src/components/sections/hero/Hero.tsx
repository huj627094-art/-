import { getImageProps } from "next/image";
import hero from "@/assets/images/hero.webp";
import heroMobile from "@/assets/images/hero-mobile.webp";
import { contacts } from "@/data/contacts";
import { Header } from "@/components/layout/Header";
import { Stamp } from "@/components/ui/Stamp";
import { Advantages } from "./Advantages";

export function Hero() {
  const common = { alt: "", sizes: "100vw", loading: "eager", fetchPriority: "high" } as const;
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: hero });
  const {
    props: { srcSet: mobileSrcSet, ...imageProps },
  } = getImageProps({ ...common, src: heroMobile });

  return (
    <section id="top" className="relative isolate">
      <picture className="absolute inset-x-0 top-0 -z-10">
        <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
        <img {...imageProps} srcSet={mobileSrcSet} alt="" className="w-full" />
      </picture>

      <Header />

      <div className="wrap">
        <p className="script mt-[35px] text-[16px] md:mt-[clamp(16px,calc(15.625vw-90px),70px)] md:text-[21px] xl:mt-[min(123px,6.4vw)] xl:text-[min(34px,1.8vw)]">
          {contacts.address}
        </p>

        <h1 className="mt-2 max-w-[260px] text-[40px] leading-[1.1] font-bold uppercase md:mt-4 md:max-w-none md:text-[min(64px,6.25vw)] xl:mt-[min(30px,1.6vw)] xl:text-[min(116px,6vw)]">
          Покоряйте <span className="md:wave-hero">волны</span>
          <br />
          <span className="hidden md:inline">
            вместе <Stamp className="inline-block align-middle" imageClassName="w-[1.15em]" />{" "}
          </span>
          с нами<span className="hidden md:inline">!</span>
        </h1>

        <a href="#signup" className="btn mt-6 h-[43px] px-5 text-base md:hidden">
          Онлайн-запись
        </a>

        <p className="mt-[70px] max-w-[260px] text-[12px] text-muted md:mt-2 md:max-w-[460px] md:text-[clamp(12px,1.5625vw,16px)] lg:max-w-[360px] xl:mt-2.5 xl:max-w-[470px] xl:text-xl">
          SurfTrainCo предлагает вам доступное, комплексное и приятное обучение серфингу для всех уровней навыков и
          возрастов.
        </p>

        <Advantages />
      </div>
    </section>
  );
}
