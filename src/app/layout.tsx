import type { Metadata, Viewport } from "next";
import { Caveat, Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-onest",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: "500",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: {
    default: "SurfTrainCo — обучение серфингу в Москве",
    template: "%s — SurfTrainCo",
  },
  description:
    "SurfTrainCo предлагает доступное, комплексное и приятное обучение серфингу для всех уровней навыков и возрастов.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "SurfTrainCo",
    title: "SurfTrainCo — обучение серфингу в Москве",
    description: "Школа серфинга в Москве: тарифы Easy Start и Flow Rider, опытные инструкторы и онлайн-запись.",
  },
};

export const viewport: Viewport = {
  themeColor: "#eef5ff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" data-scroll-behavior="smooth" className={`${onest.variable} ${caveat.variable}`}>
      <body className="overflow-x-clip">{children}</body>
    </html>
  );
}
