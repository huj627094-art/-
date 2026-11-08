import Image from "next/image";
import { advantages } from "@/data/advantages";

export function Advantages() {
  return (
    <div className="mt-[50px] grid gap-2.5 md:-mx-5 md:mt-[min(100px,9.8vw)] md:grid-cols-3 md:gap-5 md:rounded-[40px] md:bg-mist md:p-5 md:shadow-[0_10px_40px_rgb(0_43_65/0.08)] xl:-mx-[34px] xl:mt-[min(130px,6.8vw)] xl:grid-cols-4 xl:gap-[30px] xl:rounded-[60px] xl:p-[34px]">
      {advantages.map((item, index) => {
        const last = index === advantages.length - 1;

        return (
          <article
            key={item.title}
            className={`grid grid-cols-[120px_1fr] items-center gap-[18px] rounded-[20px] p-2.5 md:rounded-[25px] md:pb-5 xl:block xl:rounded-[35px] xl:pt-5 xl:pb-[30px] ${
              last ? "md:hidden" : "md:block"
            } ${item.dark ? "bg-navy text-white" : "bg-white"}`}
          >
            <div className="relative">
              <Image src={item.image} alt={item.imageAlt} className="w-full" />
              <Image src={item.number} alt="" className="absolute right-[6%] bottom-0 w-[30%]" />
            </div>
            <div className="md:mt-5 md:px-2.5 xl:mt-[30px] xl:px-5">
              <h3 className="text-sm leading-[1.1] font-bold md:text-xl xl:text-[26px]">{item.title}</h3>
              <p className={`mt-2.5 text-xs xl:mt-5 xl:text-base ${item.dark ? "" : "text-muted"}`}>{item.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
