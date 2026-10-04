"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { teamRoles } from "@/lib/content";
import { CheckList } from "../sections";

export function TeamRoles() {
  const [active, setActive] = useState(0);
  const role = teamRoles[active];
  const Icon = role.icon;

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <ul className="space-y-3">
        {teamRoles.map((r, i) => {
          const open = i === active;
          return (
            <li key={r.title}>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`role-${i}`}
                onClick={() => setActive(i)}
                className={`w-full border text-left transition-all duration-500 ${
                  open
                    ? "rounded-3xl border-ink bg-white p-7 shadow-[0_24px_50px_-30px_rgb(11_17_23/0.35)] sm:p-8"
                    : "rounded-none border-transparent border-b-ink/10 px-7 py-6 hover:bg-white/60 sm:px-8"
                }`}
              >
                <span className="flex items-center justify-between gap-6">
                  <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">{r.title}</span>
                  {open ? (
                    <ArrowUpRight className="size-5 shrink-0 text-brand" />
                  ) : (
                    <ArrowRight className="size-5 shrink-0 text-ink/50" />
                  )}
                </span>
                <span
                  id={`role-${i}`}
                  className={`grid transition-all duration-500 ${open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <span className="overflow-hidden leading-relaxed text-muted">{r.text}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div
        aria-live="polite"
        className="relative overflow-hidden rounded-[32px] bg-ink p-8 text-white sm:p-10 lg:min-h-[420px]"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/25 blur-3xl" />
        <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div key={active} className="relative animate-fade-up">
          <span className="grid size-16 place-items-center rounded-2xl bg-brand text-white">
            <Icon className="size-7" />
          </span>
          <p className="eyebrow mt-8 text-brand">Your {role.title.toLowerCase()}</p>
          <p className="mt-3 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">{role.text}</p>
          <p className="eyebrow mt-10 text-white/50">Looks after</p>
          <div className="mt-5">
            <CheckList items={role.handles} dark className="grid grid-cols-1 gap-3 sm:grid-cols-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
