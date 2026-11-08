import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";

export default function NotFound() {
  return (
    <main className="wrap flex min-h-svh flex-col items-center justify-center py-10 text-center">
      <Image src={logo} alt="SurfTrainCo" className="w-[82px]" />
      <p className="script mt-8">волна ушла</p>
      <h1 className="title mt-2">Страница не найдена</h1>
      <p className="mt-4 max-w-[420px] text-sm text-muted md:text-base">
        Возможно, ссылка устарела или в адресе опечатка.
      </p>
      <Link href="/" className="btn mt-8 h-[50px] px-8 text-base md:h-[60px] md:text-lg">
        На главную
      </Link>
    </main>
  );
}
