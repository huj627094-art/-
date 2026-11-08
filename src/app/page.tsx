import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/about/About";
import { Awards } from "@/components/sections/awards/Awards";
import { Contacts } from "@/components/sections/contacts/Contacts";
import { Hero } from "@/components/sections/hero/Hero";
import { Motto } from "@/components/sections/Motto";
import { Plans } from "@/components/sections/plans/Plans";
import { Promo } from "@/components/sections/promo/Promo";
import { Signup } from "@/components/sections/signup/Signup";
import { PlanProvider } from "@/providers/PlanProvider";

export default function HomePage() {
  return (
    <PlanProvider>
      <main>
        <Hero />
        <About />
        <Motto className="xl:mt-[100px]">
          Не бойтесь испытать себя и свои возможности - поддайтесь волнам и пусть они помогут вам раскрыть свой
          истинный потенциал. <span className="md:wave-1">Погрузитесь в мир серфинга</span> и почувствуйте, как ваша
          жизнь наполняется яркими эмоциями и волнующими приключениями. Погнали волну!
        </Motto>
        <Awards />
        <Plans />
        <Promo />
        <Motto className="xl:mt-[120px]">
          Помните, что каждый ваш выход на доску - это возможность{" "}
          <span className="md:wave-2">выйти за пределы своих комфортных зон</span> и стать лучше, сильнее и увереннее.
          Поверьте в себя, стремитесь к новым вершинам и не забывайте наслаждаться каждым мгновением на доске.
        </Motto>
        <Signup />
        <Contacts />
      </main>
      <Footer />
    </PlanProvider>
  );
}
