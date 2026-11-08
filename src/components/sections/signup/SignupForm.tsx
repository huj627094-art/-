"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from "react";
import { planLabel, plans } from "@/data/plans";
import { sendSignupRequest } from "@/lib/emailjs";
import { formatPhone, PHONE_PATTERN } from "@/lib/phone";
import { usePlan } from "@/providers/PlanProvider";

type Status = "idle" | "sending" | "success" | "error";

const times = Array.from({ length: 14 }, (_, index) => `${String(index + 8).padStart(2, "0")}:00`);

const messages: Record<Status, string> = {
  idle: "",
  sending: "",
  success: "Спасибо! Заявка отправлена, мы перезвоним вам в ближайшее время.",
  error: "Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.",
};

function todayIso() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

const toRuDate = (iso: string) => iso.split("-").reverse().join(".");

function openPicker(event: MouseEvent<HTMLInputElement>) {
  try {
    event.currentTarget.showPicker();
  } catch {}
}

export function SignupForm() {
  const { plan, setPlan } = usePlan();
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dateRef.current) dateRef.current.min = todayIso();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const selectedPlan = plans.find((item) => item.id === plan);

    setStatus("sending");

    try {
      await sendSignupRequest({
        name: String(data.get("name") ?? "").trim(),
        phone,
        date: toRuDate(date),
        time: String(data.get("time") ?? ""),
        plan: selectedPlan ? planLabel(selectedPlan) : "",
      });
      form.reset();
      setDate("");
      setPhone("");
      setPlan("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const resetStatus = () => {
    if (status === "success" || status === "error") setStatus("idle");
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={resetStatus}
      className="grid gap-2.5 md:row-start-1 md:grid-cols-2 xl:gap-x-5 xl:gap-y-[30px]"
    >
      <label className="relative">
        <input
          ref={dateRef}
          type="date"
          name="date"
          required
          value={date}
          onChange={(event) => setDate(event.target.value)}
          onClick={openPicker}
          aria-label="Выберите дату"
          className={`field field-select peer relative focus:text-navy [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:size-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-date-and-time-value]:text-left ${
            date ? "" : "text-transparent"
          }`}
        />
        {!date && (
          <span className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-xs text-navy/75 peer-focus:hidden md:text-base xl:left-[30px] xl:text-xl">
            Выберите дату
          </span>
        )}
      </label>

      <select
        name="time"
        required
        defaultValue=""
        aria-label="Выберите время"
        className="field field-select invalid:text-navy/75"
      >
        <option value="" disabled>
          Выберите время
        </option>
        {times.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <select
        name="plan"
        required
        value={plan}
        onChange={(event) => setPlan(event.target.value)}
        aria-label="Выберите подходящий тариф"
        className="field field-select invalid:text-navy/75 md:col-span-2"
      >
        <option value="" disabled>
          Выберите подходящий тариф
        </option>
        {plans.map((item) => (
          <option key={item.id} value={item.id}>
            {planLabel(item)}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="name"
        required
        minLength={2}
        autoComplete="name"
        placeholder="Иванов Иван"
        aria-label="Имя"
        className="field"
      />
      <input
        type="tel"
        name="phone"
        required
        inputMode="tel"
        autoComplete="tel"
        pattern={PHONE_PATTERN}
        title="Номер в формате 8(999) 999-99-99"
        placeholder="8(999) 999-99-99"
        value={phone}
        onChange={(event) => setPhone(formatPhone(event.target.value))}
        aria-label="Телефон"
        className="field"
      />

      <div className="mt-2.5 flex flex-col gap-2.5 md:col-span-2 md:flex-row md:items-center md:gap-4 xl:mt-0 xl:gap-[30px]">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn h-[50px] shrink-0 text-base md:h-[54px] md:px-[14px] md:text-lg xl:h-[77px] xl:w-[336px] xl:text-2xl"
        >
          {status === "sending" ? "Отправляем…" : "Записаться онлайн"}
        </button>
        <p className="text-xs md:text-[11px] xl:text-base xl:whitespace-nowrap">
          Нажимая на кнопку, вы соглашаетесь{" "}
          <Link href="/privacy" className="block text-accent hover:underline">
            с политикой обработки данных
          </Link>
        </p>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`text-sm empty:hidden md:col-span-2 xl:text-lg ${status === "error" ? "text-accent" : "text-navy"}`}
      >
        {messages[status]}
      </p>
    </form>
  );
}
