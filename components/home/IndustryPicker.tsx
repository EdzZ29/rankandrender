"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/content";

export function IndustryPicker() {
  const [active, setActive] = useState(0);
  const current = industries[active];
  const Icon = current.icon;

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_360px]">
      <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-ink/10 bg-white/50 sm:grid-cols-3 lg:grid-cols-4">
        {industries.map((ind, i) => {
          const on = i === active;
          const ItemIcon = ind.icon;
          return (
            <button
              key={ind.name}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={`group -ml-px -mt-px flex min-h-24 flex-col items-start justify-between gap-4 border-l border-t border-ink/10 p-4 text-left transition-colors duration-300 sm:p-5 ${
                on ? "bg-ink text-white" : "hover:bg-white"
              }`}
            >
              <ItemIcon
                className={`size-5 transition-colors ${on ? "text-brand" : "text-ink/40 group-hover:text-brand"}`}
              />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-xs">
                {ind.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-brand p-7 text-white sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-white/15 blur-2xl" />
        <div key={active} className="relative animate-fade-up">
          <span className="grid size-12 place-items-center rounded-2xl bg-white/15">
            <Icon className="size-6" />
          </span>
          <p className="eyebrow mt-8 text-white/70">For {current.name.toLowerCase()}</p>
          <p className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight sm:text-[1.7rem]">
            {current.text}
          </p>
        </div>
        <Link
          href={`/contact?industry=${encodeURIComponent(current.name)}#audit`}
          className="group relative mt-10 inline-flex items-center justify-between rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
        >
          Talk to us about your business
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
