import Image from "next/image";
import location from "@/assets/images/ic-location.svg";
import { contacts, messengers, socials } from "@/data/contacts";
import { IconLinks } from "@/components/ui/IconLinks";
import { Stamp } from "@/components/ui/Stamp";
import { ContactsMap } from "./ContactsMap";

const cardClass =
  "flex items-center justify-between rounded-[20px] bg-white px-[18px] py-4 md:flex-col md:items-start md:gap-[14px] md:bg-transparent md:p-0";
const iconClass = "size-[25px] xl:size-[30px]";

export function Contacts() {
  return (
    <section id="contacts" className="mt-[60px] md:mt-[90px] xl:mt-[120px]">
      <div className="relative h-[487px] md:h-[500px] xl:h-[997px]">
        <ContactsMap className="contacts-map absolute inset-0 isolate z-0 rounded-[40px] [mask-image:linear-gradient(transparent,#000_60px,#000_calc(100%-60px),transparent)] xl:rounded-[60px] xl:[mask-image:linear-gradient(transparent,#000_100px,#000_calc(100%-100px),transparent)]" />

        <div className="wrap pointer-events-none relative pt-[47px] md:pt-[60px] xl:pt-[109px]">
          <h2 className="title pointer-events-auto inline-flex flex-col items-end rounded-[25px] bg-white p-5 md:rounded-[40px] xl:-ml-[33px] xl:rounded-[60px] xl:px-[30px] xl:py-[37px]">
            <span className="self-start">Мы на карте</span>
            <span className="script xl:-mt-2">где искать?</span>
          </h2>
        </div>

        <Stamp className="absolute right-0 bottom-[90px] md:hidden" imageClassName="w-[70px]" />
      </div>

      <div className="wrap relative -mt-[75px] flex flex-col gap-2.5 md:-mt-10 md:flex-row md:items-center md:justify-between md:rounded-[40px] md:bg-white md:px-5 md:py-2.5 xl:-mt-[132px] xl:rounded-[60px] xl:px-20 xl:py-[30px]">
        <div className={cardClass}>
          <p className="text-sm font-bold md:text-xs md:font-normal xl:text-xl">Социальные сети:</p>
          <IconLinks links={socials} className="gap-2.5" iconClassName={iconClass} />
        </div>

        <div className={cardClass}>
          <a
            href={contacts.phoneHref}
            className="text-sm font-bold hover:text-accent md:text-xs md:font-normal xl:text-xl"
          >
            {contacts.phone}
          </a>
          <IconLinks links={messengers} className="gap-2.5" iconClassName={iconClass} />
        </div>

        <Stamp className="hidden md:block" imageClassName="w-[70px] xl:w-[131px]" />

        <div className="flex justify-between gap-3 rounded-[25px] bg-white px-[18px] py-4 max-md:order-first md:contents">
          <p className="flex max-w-[120px] items-start gap-2 text-xs md:max-w-[110px] xl:max-w-[200px] xl:gap-4 xl:text-xl">
            <Image src={location} alt="" className="w-4 shrink-0 xl:w-[26px]" />
            {contacts.address}
          </p>
          <p>
            <span className="block text-sm font-bold md:text-base xl:text-[26px]">Как добраться?</span>
            <span className="mt-1 block text-xs text-muted xl:mt-2.5 xl:text-xl">{contacts.routes}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
