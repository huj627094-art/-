import { plans } from "@/data/plans";
import { PlanCard } from "./PlanCard";

export function Plans() {
  return (
    <section id="plans" className="wrap mt-[60px] md:mt-[90px] xl:mt-[120px]">
      <h2 className="title flex flex-col items-center md:flex-row md:items-baseline md:gap-5 xl:gap-[30px]">
        Программы <span className="script">обучения</span>
      </h2>

      <div className="mt-[83px] grid gap-[110px] md:mt-[100px] md:grid-cols-2 md:gap-5 xl:mt-[178px] xl:gap-[30px]">
        {plans.map((plan, index) => (
          <PlanCard key={plan.id} plan={plan} className={index === 1 ? "max-md:order-first" : ""} />
        ))}
      </div>
    </section>
  );
}
