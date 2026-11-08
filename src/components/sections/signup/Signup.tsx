import Image from "next/image";
import background from "@/assets/images/bg-form.svg";
import photo from "@/assets/images/form.webp";
import { SignupForm } from "./SignupForm";

export function Signup() {
  return (
    <section
      id="signup"
      className="torn mt-[60px] pt-[70px] pb-[80px] md:mt-[90px] md:pt-[90px] md:pb-[120px] xl:mt-[120px] xl:pt-[120px] xl:pb-[234px]"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="wrap">
        <h2 className="title flex items-baseline gap-2.5 md:gap-5 xl:gap-[30px]">
          Запись <span className="script">на занятие</span>
        </h2>

        <div className="mt-[30px] grid gap-5 md:grid-cols-[420px_1fr] md:gap-[25px] xl:mt-[60px] xl:grid-cols-[655px_560px] xl:justify-between">
          <Image
            src={photo}
            alt="Девушка в гидрокостюме"
            sizes="(min-width: 1280px) 560px, (min-width: 768px) 300px, 100vw"
            className="h-[200px] w-full rounded-[20px] object-cover object-[95%_50%] md:col-start-2 md:h-full md:rounded-[40px] xl:h-[422px] xl:rounded-[60px]"
          />
          <SignupForm />
        </div>
      </div>
    </section>
  );
}
