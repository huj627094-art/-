import Image from "next/image";
import stamp from "@/assets/images/stamp.svg";

type StampProps = {
  className?: string;
  imageClassName?: string;
};

export function Stamp({ className = "", imageClassName = "" }: StampProps) {
  return (
    <a href="#signup" className={`transition-transform hover:rotate-12 ${className}`}>
      <Image src={stamp} alt="Онлайн-запись" className={imageClassName} />
    </a>
  );
}
