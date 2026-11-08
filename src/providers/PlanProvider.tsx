"use client";

import { createContext, use, useState, type ReactNode } from "react";

type PlanContextValue = {
  plan: string;
  setPlan: (planId: string) => void;
};

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState("");

  return <PlanContext value={{ plan, setPlan }}>{children}</PlanContext>;
}

export function usePlan() {
  const context = use(PlanContext);
  if (!context) throw new Error("usePlan must be used inside PlanProvider");
  return context;
}
