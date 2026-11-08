"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/navigation";

const links = [{ id: "top", label: "Главная" }, ...navLinks];

export function DesktopNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = "top";

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && section.getBoundingClientRect().top <= line) current = link.id;
      }

      setActive(atBottom ? navLinks[navLinks.length - 1].id : current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="hidden rounded-full border border-navy/20 bg-white p-[5px] xl:flex">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          aria-current={active === link.id ? "true" : undefined}
          className={`rounded-full px-[22px] py-4 transition-colors wide:px-4 ${
            active === link.id ? "bg-navy text-white" : "hover:bg-mist"
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
