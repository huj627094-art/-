"use client";

import { usePlan } from "@/providers/PlanProvider";

export function ChoosePlanButton({ planId }: { planId: string }) {
  const { setPlan } = usePlan();

  return (
    <a
      href="#signup"
      onClick={() => setPlan(planId)}
      className="btn mt-5 h-[47px] text-base md:h-[50px] md:text-lg xl:mt-[50px] xl:h-[77px] xl:text-2xl"
    >
      Выбрать тариф
    </a>
  );
}
