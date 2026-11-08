import type { StaticImageData } from "next/image";
import adv1 from "@/assets/images/adv-1.svg";
import adv2 from "@/assets/images/adv-2.svg";
import adv3 from "@/assets/images/adv-3.svg";
import adv4 from "@/assets/images/adv-4.svg";
import num1 from "@/assets/images/num-1.svg";
import num2 from "@/assets/images/num-2.svg";
import num3 from "@/assets/images/num-3.svg";
import num4 from "@/assets/images/num-4.svg";

export type Advantage = {
  title: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
  number: StaticImageData;
  dark: boolean;
};

export const advantages: Advantage[] = [
  {
    title: "Профессиональное руководство",
    text: "опытные инструкторы помогут вам освоить основы и быстро совершенствоваться.",
    image: adv1,
    imageAlt: "Инструктор",
    number: num1,
    dark: true,
  },
  {
    title: "Качественное оборудование",
    text: "доски и гидрокостюмы помогут вам оставаться в безопасности и получать удовольствие.",
    image: adv2,
    imageAlt: "Прокат досок",
    number: num2,
    dark: false,
  },
  {
    title: "Благоприятная обстановка",
    text: "благоприятная и безопасная обстановка в обучении с людьми со схожим опытом и целями.",
    image: adv3,
    imageAlt: "Занятие с ребёнком",
    number: num3,
    dark: true,
  },
  {
    title: "Дополнительные услуги",
    text: "услуги фотографий и видео помогут вам запечатлеть и поделиться опытом серфинга.",
    image: adv4,
    imageAlt: "Фотограф",
    number: num4,
    dark: false,
  },
];
