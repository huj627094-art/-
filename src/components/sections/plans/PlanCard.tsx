import Image from "next/image";
import calendar from "@/assets/images/ic-calendar.svg";
import timer from "@/assets/images/ic-timer.svg";
import check from "@/assets/images/ic-check.svg";
import type { Plan } from "@/data/plans";
import { ChoosePlanButton } from "./ChoosePlanButton";

type PlanCardProps = {
  plan: Plan;
  className?: string;
};

export function PlanCard({ plan, className = "" }: PlanCardProps) {
  const stats = [
    { icon: calendar, label: "длительность курса", value: plan.lessons },
    { icon: timer, label: "длительность урока", value: plan.duration },
  ];

  return (
    <article
      className={`flex flex-col rounded-[30px] bg-white px-[15px] pb-[15px] text-center md:rounded-[40px] md:pb-5 xl:rounded-[60px] xl:px-10 xl:pb-[60px] ${className}`}
    >
      <Image
        src={plan.icon}
        alt=""
        className="mx-auto -mt-[45px] w-[90px] md:-mt-[58px] md:w-[115px] xl:-mt-[117px] xl:w-[233px]"
      />
      <p className="mt-3 text-sm text-muted md:text-base xl:mt-[23px] xl:text-xl">-тариф-</p>
      <h3 className="text-[25px] leading-[1.1] font-medium xl:mt-4 xl:text-[45px]">{plan.name}</h3>

      <div className="mt-4 flex justify-center gap-6 text-left xl:mt-[50px] xl:gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-2.5 xl:gap-5">
            <Image src={stat.icon} alt="" className="w-[30px] xl:w-[60px]" />
            <p>
              <span className="block text-[10px] text-muted xl:text-base">{stat.label}</span>
              <span className="block font-medium xl:mt-1 xl:text-xl xl:font-normal">{stat.value}</span>
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-[25px] space-y-[19px] text-left text-xs text-muted md:px-2.5 xl:mt-[49px] xl:space-y-[30px] xl:px-[21px] xl:text-xl">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-[13px] md:gap-2.5 xl:gap-[26px]">
            <Image src={check} alt="" className="w-[21px] shrink-0 md:w-[34px]" />
            {feature}
          </li>
        ))}
      </ul>

      <p className="mt-auto pt-[25px] xl:pt-[49px]">
        <s className="block text-base text-muted md:text-xl xl:text-[30px]">{plan.oldPrice}</s>
        <span className="block text-[25px] font-bold md:text-[30px] xl:text-[50px]">{plan.price}</span>
      </p>

      <ChoosePlanButton planId={plan.id} />
    </article>
  );
}
