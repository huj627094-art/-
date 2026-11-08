import Image from "next/image";
import type { IconLink } from "@/data/contacts";

type IconLinksProps = {
  links: IconLink[];
  className?: string;
  iconClassName?: string;
};

export function IconLinks({ links, className = "", iconClassName = "" }: IconLinksProps) {
  return (
    <div className={`flex ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="shrink-0 transition-transform hover:-translate-y-0.5"
        >
          <Image src={link.icon} alt="" className={iconClassName} />
        </a>
      ))}
    </div>
  );
}
