"use client";

import { useEffect, useState } from "react";
import { Check, Lock, Search, TrendingUp, Zap } from "lucide-react";

const events = ["New enquiry received", "Instant reply sent", "Call booked for Tue, 10:00"];

export function HeroVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % (events.length + 2)), 1400);
    return () => clearInterval(id);
  }, []);

  const visible = Math.min(step, events.length);

  return (
    <div aria-hidden className="@container relative mx-auto aspect-[10/9] w-full max-w-[600px] select-none">
      <div className="absolute inset-[12%] rounded-full bg-brand/25 blur-[80px]" />

      {/* Browser */}
      <div className="absolute left-[5%] top-[11%] w-[74%] overflow-hidden rounded-[4cqw] border border-ink/10 bg-white shadow-[0_40px_80px_-30px_rgb(11_17_23/0.35)]">
        <div className="flex items-center gap-[1.2cqw] border-b border-ink/5 px-[3cqw] py-[2.2cqw]">
          <span className="size-[1.6cqw] rounded-full bg-ink/15" />
          <span className="size-[1.6cqw] rounded-full bg-ink/15" />
          <span className="size-[1.6cqw] rounded-full bg-brand" />
          <span className="ml-[2cqw] flex items-center gap-[1cqw] rounded-full bg-paper px-[2.4cqw] py-[0.8cqw] text-[1.9cqw] text-muted">
            <Lock className="size-[1.8cqw]" /> yourbusiness.com
          </span>
        </div>
        <div className="p-[4.5cqw]">
          <div className="flex items-center justify-between">
            <span className="h-[1.8cqw] w-[12cqw] rounded-full bg-ink/80" />
            <div className="flex gap-[1.6cqw]">
              <span className="h-[1.2cqw] w-[5cqw] rounded-full bg-ink/15" />
              <span className="h-[1.2cqw] w-[5cqw] rounded-full bg-ink/15" />
              <span className="h-[1.2cqw] w-[5cqw] rounded-full bg-ink/15" />
            </div>
          </div>
          <p className="mt-[5cqw] max-w-[80%] font-display text-[5.2cqw] font-bold leading-[1] tracking-tight text-ink">
            Your city’s most trusted <span className="text-brand">team.</span>
          </p>
          <span className="mt-[2.5cqw] block h-[1.3cqw] w-[60%] rounded-full bg-ink/10" />
          <span className="mt-[1.3cqw] block h-[1.3cqw] w-[45%] rounded-full bg-ink/10" />
          <div className="mt-[3.5cqw] flex gap-[1.6cqw]">
            <span className="rounded-full bg-brand px-[3cqw] py-[1.3cqw] text-[1.9cqw] font-semibold text-white">
              Book now
            </span>
            <span className="rounded-full border border-ink/15 px-[3cqw] py-[1.3cqw] text-[1.9cqw] font-semibold text-ink/70">
              Our services
            </span>
          </div>
          <div className="mt-[4.5cqw] grid grid-cols-3 gap-[2cqw]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-[2cqw] bg-paper p-[2.4cqw]">
                <span className="block size-[2.6cqw] rounded-full bg-brand/80" />
                <span className="mt-[2cqw] block h-[1.1cqw] w-[80%] rounded-full bg-ink/20" />
                <span className="mt-[1cqw] block h-[1.1cqw] w-[55%] rounded-full bg-ink/10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search results */}
      <div className="animate-float-slow absolute right-0 top-0 w-[44%] rounded-[3.5cqw] border border-ink/10 bg-white p-[2.8cqw] shadow-[0_30px_60px_-25px_rgb(11_17_23/0.35)]">
        <div className="flex items-center gap-[1.4cqw] rounded-full border border-ink/10 px-[2.4cqw] py-[1.6cqw] text-[2cqw] text-muted">
          <Search className="size-[2.4cqw]" /> your service + your city
        </div>
        <div className="mt-[2.4cqw] flex items-center gap-[1.6cqw] rounded-[2cqw] bg-brand-soft p-[1.8cqw]">
          <span className="grid size-[3.6cqw] place-items-center rounded-full bg-brand text-[1.8cqw] font-bold text-white">
            1
          </span>
          <div className="flex-1">
            <span className="block text-[1.8cqw] font-semibold text-ink">yourbusiness.com</span>
            <span className="mt-[0.6cqw] block h-[1cqw] w-[85%] rounded-full bg-ink/20" />
          </div>
        </div>
        {[2, 3].map((n) => (
          <div key={n} className="flex items-center gap-[1.6cqw] p-[1.8cqw]">
            <span className="grid size-[3.6cqw] place-items-center rounded-full bg-ink/5 text-[1.8cqw] text-muted">
              {n}
            </span>
            <span className="h-[1cqw] w-[60%] rounded-full bg-ink/10" />
          </div>
        ))}
      </div>

      {/* Enquiries */}
      <div className="animate-float absolute bottom-[13%] left-0 w-[38%] rounded-[3.5cqw] border border-ink/10 bg-white p-[3cqw] shadow-[0_30px_60px_-25px_rgb(11_17_23/0.4)]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[1.7cqw] uppercase tracking-[0.18em] text-muted">Enquiries</span>
          <TrendingUp className="size-[2.8cqw] text-brand" />
        </div>
        <svg viewBox="0 0 200 80" className="mt-[1.5cqw] w-full">
          <defs>
            <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 70 C30 66 45 60 70 52 S115 44 135 30 S175 14 200 8 V80 H0Z" fill="url(#hero-area)" />
          <path
            d="M0 70 C30 66 45 60 70 52 S115 44 135 30 S175 14 200 8"
            fill="none"
            stroke="#ff5a1f"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="400"
            className="animate-draw"
          />
        </svg>
        <p className="mt-[1cqw] flex items-baseline gap-[1.4cqw]">
          <span className="font-display text-[4.2cqw] font-bold tracking-tight">Steady</span>
          <span className="text-[1.8cqw] text-muted">month over month</span>
        </p>
      </div>

      {/* Automation */}
      <div className="absolute bottom-[2%] right-[2%] w-[46%] rounded-[3.5cqw] bg-ink p-[3.2cqw] text-white shadow-[0_40px_70px_-25px_rgb(11_17_23/0.6)]">
        <div className="flex items-center gap-[1.6cqw]">
          <span className="grid size-[4.4cqw] place-items-center rounded-full bg-brand">
            <Zap className="size-[2.4cqw]" />
          </span>
          <span className="font-mono text-[1.8cqw] uppercase tracking-[0.18em] text-white/80">Automation</span>
          <span className="ml-auto flex items-center gap-[0.8cqw] text-[1.6cqw] text-white/50">
            <span className="size-[1.2cqw] animate-pulse-dot rounded-full bg-brand" /> Live
          </span>
        </div>
        <ul className="mt-[2.6cqw] space-y-[1.6cqw]">
          {events.map((e, i) => (
            <li
              key={e}
              className={`flex items-center gap-[1.6cqw] text-[2cqw] transition-all duration-500 ${
                i < visible ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-20"
              }`}
            >
              <span
                className={`grid size-[3cqw] place-items-center rounded-full transition-colors duration-500 ${
                  i < visible ? "bg-brand/25 text-brand" : "bg-white/10 text-white/30"
                }`}
              >
                <Check className="size-[1.8cqw]" strokeWidth={3} />
              </span>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
