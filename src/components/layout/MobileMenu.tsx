"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative xl:hidden">
      <button
        type="button"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="relative flex h-5 w-[22px] flex-col justify-between py-1 before:absolute before:-inset-3"
      >
        <span className={`h-px bg-navy transition-transform ${open ? "translate-y-[5.5px] rotate-45" : ""}`} />
        <span className={`h-px bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`h-px bg-navy transition-transform ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`} />
      </button>

      <nav
        id="mobile-menu"
        className={`absolute top-full right-0 z-30 mt-3 flex w-48 flex-col rounded-[20px] bg-white p-3 text-sm shadow-lg transition duration-200 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setOpen(false)}
            className="rounded-full px-4 py-2 hover:bg-mist"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
