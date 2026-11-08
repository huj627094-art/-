import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import arrow from "@/assets/images/ic-arrow-btn.svg";
import { contacts, messengers } from "@/data/contacts";
import { IconLinks } from "@/components/ui/IconLinks";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="wrap flex items-center gap-5 pt-5 whitespace-nowrap md:pt-6 xl:pt-[30px]">
      <a href="#top" className="mr-auto shrink-0">
        <Image src={logo} alt="SurfTrainCo" loading="eager" className="w-[55px] md:w-[43px] xl:w-[82px]" />
      </a>

      <DesktopNav />

      <div className="flex shrink-0 items-center gap-[5px] xl:ml-auto xl:gap-[7px]">
        <IconLinks links={messengers} className="gap-[5px] xl:gap-[7px]" iconClassName="size-5 md:size-[25px]" />
        <a
          href={contacts.phoneHref}
          className="ml-2 hidden text-xs font-bold hover:text-accent md:block xl:ml-[15px] xl:text-xl"
        >
          {contacts.phone}
        </a>
      </div>

      <a
        href="#about"
        className="hidden shrink-0 items-center gap-6 rounded-full bg-navy px-5 py-3 text-xs text-white transition-colors hover:bg-muted md:flex xl:hidden xl:px-[23px] xl:py-[17px] xl:text-base wide:flex"
      >
        Подробнее
        <Image src={arrow} alt="" className="size-3 xl:size-[22px]" />
      </a>

      <MobileMenu />
    </header>
  );
}
