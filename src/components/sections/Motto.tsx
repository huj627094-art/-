import type { ReactNode } from "react";

type MottoProps = {
  children: ReactNode;
  className?: string;
};

export function Motto({ children, className = "" }: MottoProps) {
  return (
    <section className={`wrap mt-[60px] md:mt-[90px] ${className}`}>
      <p className="text-[20px] leading-[1.4] md:text-[25px] md:font-medium xl:text-[45px]">{children}</p>
    </section>
  );
}
