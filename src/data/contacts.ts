import type { StaticImageData } from "next/image";
import telegram from "@/assets/images/tg.png";
import whatsapp from "@/assets/images/wa.png";
import viber from "@/assets/images/viber.png";
import instagram from "@/assets/images/insta.png";
import tiktok from "@/assets/images/tiktok.png";
import vk from "@/assets/images/vk.png";

export type IconLink = {
  label: string;
  href: string;
  icon: StaticImageData;
};

export const contacts = {
  phone: "+7 (910) 684-90-53",
  phoneHref: "tel:+79106849053",
  email: "SurfCocommerce@yandex.ru",
  address: "ул. Черкизова 14, Москва",
  fullAddress: "г. Москва, ул. Черкизова 14",
  hours: "Работаем с 8:00-22:00",
  routes: "Маршруты: 139, 28б",
  coordinates: [55.7968, 37.7266] as [number, number],
};

export const messengers: IconLink[] = [
  { label: "Telegram", href: "https://t.me/+79106849053", icon: telegram },
  { label: "WhatsApp", href: "https://wa.me/79106849053", icon: whatsapp },
  { label: "Viber", href: "viber://chat?number=%2B79106849053", icon: viber },
];

export const socials: IconLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: instagram },
  { label: "TikTok", href: "https://www.tiktok.com/", icon: tiktok },
  { label: "ВКонтакте", href: "https://vk.com/", icon: vk },
];
