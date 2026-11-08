import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import up from "@/assets/images/ic-up.svg";
import { contacts, messengers } from "@/data/contacts";
import { footerLinks } from "@/data/navigation";
import { IconLinks } from "@/components/ui/IconLinks";

const listClass = "mt-5 space-y-3 text-xs md:mt-6 md:text-base xl:mt-10 xl:space-y-2.5 xl:text-xl";
const headingClass = "text-sm font-bold md:text-base xl:text-2xl";

export function Footer() {
  return (
    <footer className="relative mt-[60px] overflow-hidden bg-white pt-[45px] pb-6 md:pt-[35px] xl:mt-[135px] xl:pt-24">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -top-3 -left-[71px] hidden text-[470px] leading-none font-bold text-navy/5 select-none md:block xl:-top-11 xl:text-[600px]"
      >
        CONTACTS
      </p>

      <div className="wrap relative grid grid-cols-[auto_1fr] gap-x-6 gap-y-10 md:grid-cols-[1fr_1.4fr_1fr] xl:grid-cols-[427px_456px_1fr] xl:gap-x-0">
        <div className="hidden md:block">
          <Image src={logo} alt="SurfTrainCo" className="w-[82px]" />
          <p className="mt-4 max-w-[200px] text-xs text-muted xl:mt-8 xl:text-base">
            Свяжитесь с нами любым удобным способом
          </p>
          <IconLinks links={messengers} className="mt-4 gap-2.5" iconClassName="size-5 xl:size-[29px]" />
        </div>

        <div>
          <p className={headingClass}>Контакты</p>
          <ul className={listClass}>
            <li>
              <a href={contacts.phoneHref} className="hover:underline">
                {contacts.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contacts.email}`} className="[overflow-wrap:anywhere] hover:underline">
                {contacts.email}
              </a>
            </li>
            <li className="text-muted md:text-xs xl:text-base">{contacts.fullAddress}</li>
            <li className="text-muted md:text-xs xl:text-base">{contacts.hours}</li>
          </ul>
          <Image src={logo} alt="SurfTrainCo" className="mt-6 w-[82px] md:hidden" />
        </div>

        <div className="max-md:order-first">
          <p className={headingClass}>Для клиентов</p>
          <ul className={listClass}>
            {footerLinks.map((link) => (
              <li key={link.id}>
                <Link href={`/#${link.id}`} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 flex flex-col items-center gap-1.5 text-center text-xs text-muted md:col-span-3 md:mt-10 md:grid md:grid-cols-subgrid md:items-baseline md:text-left md:text-navy xl:mt-[88px]">
          <Link href="/privacy" className="hover:underline md:col-start-2 md:text-base xl:text-xl">
            Политика конфиденциальности
          </Link>
          <Link href="/offer" className="hover:underline md:col-start-3 md:text-base xl:text-xl">
            Публичная оферта
          </Link>
          <p className="text-[10px] md:col-start-1 md:row-start-1 md:text-xs md:text-muted xl:text-base">
            © SurfTrainCo, 2018–{new Date().getFullYear()}
          </p>
        </div>
      </div>

      <a
        href="#top"
        aria-label="Наверх"
        className="absolute right-[30px] bottom-[50px] hidden size-[55px] place-items-center rounded-full bg-white shadow-[0_4px_20px_rgb(0_43_65/0.15)] transition-transform hover:-translate-y-1 md:grid xl:right-[84px] xl:bottom-[67px] xl:size-[84px]"
      >
        <Image src={up} alt="" className="w-[30%]" />
      </a>
    </footer>
  );
}
