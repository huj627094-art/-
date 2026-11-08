"use client";

import { useEffect, useRef, useState } from "react";
import type { Award } from "@/data/awards";
import { AwardCard } from "./AwardCard";

const middleIndex = (count: number) => Math.max(0, Math.floor((count - 1) / 2));

function centerCard(list: HTMLElement, index: number, behavior: ScrollBehavior) {
  const card = list.children[index] as HTMLElement | undefined;
  if (!card) return;
  list.scrollTo({ left: card.offsetLeft - (list.clientWidth - card.offsetWidth) / 2, behavior });
}

type YearTabsProps = {
  years: number[];
  value: number;
  onChange: (year: number) => void;
  className: string;
};

function YearTabs({ years, value, onChange, className }: YearTabsProps) {
  return (
    <div className={`text-muted/50 ${className}`}>
      {years.map((year) => (
        <button
          key={year}
          type="button"
          aria-pressed={year === value}
          onClick={() => onChange(year)}
          className={`border-b transition-colors ${
            year === value ? "border-navy text-navy" : "border-transparent hover:text-navy"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}

export function AwardsSlider({ awards }: { awards: Award[] }) {
  const years = [...new Set(awards.map((award) => award.year))];
  const [year, setYear] = useState(years[0]);
  const items = awards.filter((award) => award.year === year);
  const [active, setActive] = useState(() => middleIndex(items.length));
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (list) centerCard(list, middleIndex(list.children.length), "instant");
  }, [year]);

  const selectYear = (value: number) => {
    if (value === year) return;
    setYear(value);
    setActive(middleIndex(awards.filter((award) => award.year === value).length));
  };

  const handleScroll = () => {
    const list = listRef.current;
    if (!list) return;

    const center = list.scrollLeft + list.clientWidth / 2;
    let closest = 0;
    let distance = Infinity;

    Array.from(list.children).forEach((child, index) => {
      const card = child as HTMLElement;
      const offset = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
      if (offset < distance) {
        distance = offset;
        closest = index;
      }
    });

    setActive(closest);
  };

  const goTo = (index: number) => {
    if (listRef.current) centerCard(listRef.current, index, "smooth");
  };

  return (
    <>
      <div className="wrap flex items-end justify-between">
        <h2 className="title flex flex-col items-center max-md:w-full md:flex-row md:items-baseline md:gap-5 xl:gap-[30px]">
          Награды <span className="script">нашего клуба</span>
        </h2>
        <YearTabs
          years={years}
          value={year}
          onChange={selectYear}
          className="hidden gap-2.5 text-base md:flex xl:gap-[30px] xl:text-xl"
        />
      </div>

      <div
        ref={listRef}
        onScroll={handleScroll}
        className="no-scrollbar relative mt-[30px] flex snap-x snap-mandatory gap-[19px] overflow-x-auto px-[calc(50%-145px)] md:gap-[30px] md:px-[calc(50%-370px)] xl:mt-20 xl:px-[max(34px,calc(50%-670px))]"
      >
        {items.map((award) => (
          <AwardCard key={award.id} award={award} />
        ))}
      </div>

      <YearTabs
        years={years}
        value={year}
        onChange={selectYear}
        className="mt-[30px] flex justify-center gap-[23px] text-xs md:hidden"
      />

      <div className="mt-[30px] hidden justify-center gap-2.5 md:flex xl:mt-[60px]">
        {items.map((award, index) => (
          <button
            key={award.id}
            type="button"
            aria-label={`Награда ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => goTo(index)}
            className={`size-[7px] rounded-full bg-navy transition-opacity xl:size-[15px] ${
              index === active ? "" : "opacity-20 hover:opacity-40"
            }`}
          />
        ))}
      </div>
    </>
  );
}
