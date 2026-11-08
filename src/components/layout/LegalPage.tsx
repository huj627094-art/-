import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import logo from "@/assets/images/logo.svg";
import { Footer } from "./Footer";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <div id="top" className="wrap pt-5 md:pt-6 xl:pt-[30px]">
        <header className="flex items-center justify-between gap-5">
          <Link href="/" className="shrink-0">
            <Image src={logo} alt="SurfTrainCo" loading="eager" className="w-[55px] md:w-[60px] xl:w-[82px]" />
          </Link>
          <Link
            href="/"
            className="rounded-full bg-navy px-5 py-3 text-xs text-white transition-colors hover:bg-muted xl:px-[23px] xl:py-[17px] xl:text-base"
          >
            На главную
          </Link>
        </header>

        <main className="mt-10 rounded-[30px] bg-white p-5 md:mt-14 md:rounded-[40px] md:p-10 xl:mt-20 xl:rounded-[60px] xl:p-[60px]">
          <h1 className="text-[28px] leading-[1.1] font-bold uppercase md:text-[40px] xl:text-[56px]">{title}</h1>
          <p className="mt-3 text-xs text-muted md:text-sm xl:text-base">Редакция от {updated}</p>
          <div className="mt-8 max-w-[860px] space-y-6 text-sm leading-[1.5] text-muted md:text-base xl:mt-12 xl:text-lg [&_h2]:mb-2 [&_h2]:text-lg [&_h2]:leading-[1.2] [&_h2]:font-bold [&_h2]:text-navy md:[&_h2]:text-xl xl:[&_h2]:text-2xl [&_li]:mt-1 [&_ul]:list-disc [&_ul]:pl-5">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
