import type { StaticImageData } from "next/image";
import promo1 from "@/assets/images/promo-1.webp";
import promo2 from "@/assets/images/promo-2.webp";
import promo3 from "@/assets/images/promo-3.webp";

export type Promo = {
  id: string;
  period: string;
  text: string;
  image: StaticImageData;
};

export const promos: Promo[] = [
  {
    id: "first-lesson",
    period: "До 25.04.2024",
    text: "Бесплатный урок серфинга для первого посещения",
    image: promo1,
  },
  {
    id: "certificate",
    period: "Бессрочно",
    text: "Сертификация или аттестация по окончании курса",
    image: promo2,
  },
  {
    id: "for-two",
    period: "До 12.05.2024",
    text: "Пакет серфинга для двоих",
    image: promo3,
  },
  {
    id: "students",
    period: "Бессрочно",
    text: "Скидка 15% на любой тариф для студентов",
    image: promo1,
  },
  {
    id: "wetsuit",
    period: "До 30.06.2024",
    text: "Гидрокостюм в подарок при покупке полного курса",
    image: promo2,
  },
  {
    id: "birthday",
    period: "Бессрочно",
    text: "Скидка 10% в день рождения и за неделю после",
    image: promo3,
  },
];
