import type { StaticImageData } from "next/image";
import award1 from "@/assets/images/award-1.webp";
import award2 from "@/assets/images/award-2.webp";
import award3 from "@/assets/images/award-3.webp";

export type Award = {
  id: string;
  year: number;
  kind: string;
  title: string;
  issuer: string;
  link: string;
  image: StaticImageData;
  imageAlt: string;
};

export const awards: Award[] = [
  {
    id: "ioc-2022",
    year: 2022,
    kind: "Награда",
    title: "«За успешное продвижение серфинга»",
    issuer: "от Международного Олимпийского Комитета",
    link: "https://www.olympics.com/ioc",
    image: award1,
    imageAlt: "Вручение награды",
  },
  {
    id: "sas-2022",
    year: 2022,
    kind: "Награда",
    title: "«Лучший инструктор по серфингу 2022»",
    issuer: "от международной организации Surfers Against Sewage (SAS)",
    link: "https://www.sas.org.uk",
    image: award2,
    imageAlt: "Победительница с кубком",
  },
  {
    id: "wsl-2022",
    year: 2022,
    kind: "Премия",
    title: "«За исключительные достижения в серфинге»",
    issuer: "от международной организации World Surf League (WSL)",
    link: "https://www.worldsurfleague.com",
    image: award3,
    imageAlt: "Команда клуба",
  },
  {
    id: "isa-2021",
    year: 2021,
    kind: "Награда",
    title: "«Лучшая школа серфинга года»",
    issuer: "от International Surfing Association (ISA)",
    link: "https://isasurf.org",
    image: award3,
    imageAlt: "Команда клуба",
  },
  {
    id: "wsl-2021",
    year: 2021,
    kind: "Премия",
    title: "«За популяризацию серфинга среди молодёжи»",
    issuer: "от международной организации World Surf League (WSL)",
    link: "https://www.worldsurfleague.com",
    image: award2,
    imageAlt: "Победительница с кубком",
  },
  {
    id: "isa-2019",
    year: 2019,
    kind: "Премия",
    title: "«Открытие года»",
    issuer: "от International Surfing Association (ISA)",
    link: "https://isasurf.org",
    image: award1,
    imageAlt: "Вручение награды",
  },
];
