"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import next from "@/assets/images/ic-next.svg";
import type { Promo } from "@/data/promos";
import { PromoCard } from "./PromoCard";

const MOBILE_LIMIT = 3;

const readEdges = (list: HTMLElement) => ({
  start: list.scrollLeft <= 1,
  end: list.scrollLeft + list.clientWidth >= list.scrollWidth - 1,
});

export function PromoSlider({ promos }: { promos: Promo[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = () => {
    if (listRef.current) setEdges(readEdges(listRef.current));
  };

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const observer = new ResizeObserver(() => setEdges(readEdges(list)));
    observer.observe(list);

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 1 | -1) => {
    const list = listRef.current;
    const card = list?.firstElementChild as HTMLElement | null;
    if (!list || !card) return;
    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    list.scrollBy({ left: (card.offsetWidth + gap) * direction, behavior: "smooth" });
  };

  const arrowClass =
    "grid size-9 place-items-center rounded-full bg-mist transition-opacity hover:bg-navy/10 disabled:opacity-40 disabled:hover:bg-mist xl:size-[60px]";

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="title flex items-baseline gap-2.5 max-md:mx-auto md:gap-5 xl:gap-[30px]">
          Акции <span className="script">и скидки</span>
        </h2>
        <div className="hidden gap-2.5 md:flex xl:gap-[15px]">
          <button type="button" aria-label="Назад" disabled={edges.start} onClick={() => scroll(-1)} className={arrowClass}>
            <Image src={next} alt="" className="w-1/3 rotate-180" />
          </button>
          <button type="button" aria-label="Вперёд" disabled={edges.end} onClick={() => scroll(1)} className={arrowClass}>
            <Image src={next} alt="" className="w-1/3" />
          </button>
        </div>
      </div>

      <div
        ref={listRef}
        onScroll={updateEdges}
        className="no-scrollbar mt-[30px] flex flex-col gap-[13px] md:snap-x md:snap-mandatory md:flex-row md:gap-5 md:overflow-x-auto xl:mt-20 xl:gap-[30px]"
      >
        {promos.map((promo, index) => (
          <PromoCard
            key={promo.id}
            promo={promo}
            className={!expanded && index >= MOBILE_LIMIT ? "max-md:hidden" : ""}
          />
        ))}
      </div>

      {!expanded && promos.length > MOBILE_LIMIT && (
        <button type="button" onClick={() => setExpanded(true)} className="btn mt-5 h-[41px] w-full text-base md:hidden">
          Показать больше
        </button>
      )}
    </>
  );
}
