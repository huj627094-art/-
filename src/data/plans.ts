import type { StaticImageData } from "next/image";
import plan1 from "@/assets/images/plan-1.svg";
import plan2 from "@/assets/images/plan-2.svg";

export type Plan = {
  id: string;
  name: string;
  icon: StaticImageData;
  lessons: string;
  duration: string;
  features: string[];
  oldPrice: string;
  price: string;
};

export const plans: Plan[] = [
  {
    id: "easy-start",
    name: "Easy Start",
    icon: plan1,
    lessons: "5 уроков",
    duration: "45 минут",
    features: [
      "Воссозданный искусственный речной порог",
      "Доска с плавниками, как на океане",
      "Даёт возможность отработать технику поворотов, трюки на волне, развить баланс и мышечную память",
      "Помогает подготовиться к катанию на океанских волнах (работа тела после поп-ап)",
    ],
    oldPrice: "29 000 руб.",
    price: "12 990 руб.",
  },
  {
    id: "flow-rider",
    name: "Flow Rider",
    icon: plan2,
    lessons: "5 уроков",
    duration: "45 минут",
    features: [
      "Напор воды, направленный вверх по натянутой тканевой поверхности",
      "Доска без плавников, нечто среднее между скейтбордом и сноубордом",
      "Даёт возможность развить баланс и получить яркие эмоции от катания на волне",
      "Возможность поймать удовольствие от движения и маневрирования на доске по водному потоку",
    ],
    oldPrice: "22 000 руб.",
    price: "10 990 руб.",
  },
];

export const planLabel = (plan: Plan) => `${plan.name} — ${plan.price}`;
