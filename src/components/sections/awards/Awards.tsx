import background from "@/assets/images/bg-awards.svg";
import { awards } from "@/data/awards";
import { AwardsSlider } from "./AwardsSlider";

export function Awards() {
  return (
    <section
      id="awards"
      className="torn mt-[60px] pt-[70px] pb-[80px] md:mt-[90px] md:py-[90px] xl:mt-[100px] xl:pt-[120px] xl:pb-[105px]"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <AwardsSlider awards={awards} />
    </section>
  );
}
