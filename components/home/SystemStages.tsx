"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { stages } from "@/lib/content";

export function SystemStages() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setActive((a) => (a + 1) % stages.length), 4200);
    return () => clearInterval(id);
  }, [auto]);

  const select = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  const stage = stages[active];
  const progress = (active / (stages.length - 1)) * 100;

  return (
    <div>
      <div className="no-scrollbar -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <div role="tablist" aria-label="Growth system stages" className="relative grid min-w-[640px] grid-cols-5">
          <div className="absolute left-6 right-[calc(20%-1.5rem)] top-6 h-px bg-white/15">
            <div
              className="h-full bg-brand transition-[width] duration-700 ease-out-expo"
              style={{ width: `${progress}%` }}
            />
          </div>
          {stages.map((s, i) => {
            const on = i === active;
            const done = i < active;
            return (
              <button
                key={s.title}
                role="tab"
                id={`stage-tab-${i}`}
                aria-selected={on}
                aria-controls="stage-panel"
                onClick={() => select(i)}
                className="group relative flex flex-col items-start pr-4 text-left"
              >
                <span
                  className={`grid size-12 place-items-center rounded-full border font-mono text-sm font-semibold transition-all duration-500 ${
                    on
                      ? "scale-110 border-brand bg-brand text-white shadow-[0_0_0_8px_rgb(255_90_31/0.15)]"
                      : done
                        ? "border-brand bg-ink text-brand"
                        : "border-white/25 bg-ink text-white/60 group-hover:border-brand group-hover:text-brand"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`mt-6 font-display text-lg font-bold uppercase tracking-tight transition-colors sm:text-xl ${
                    on ? "text-white" : "text-white/45 group-hover:text-white"
                  }`}
                >
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="stage-panel"
        role="tabpanel"
        aria-labelledby={`stage-tab-${active}`}
        key={active}
        className="mt-10 grid grid-cols-1 animate-fade-up gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-10 md:grid-cols-2"
      >
        <div>
          <p className="eyebrow text-brand">Stage 0{active + 1}</p>
          <h3 className="display mt-3 text-4xl sm:text-5xl">{stage.title}</h3>
          <p className="mt-4 max-w-md leading-relaxed text-white/65">{stage.text}</p>
          <Link
            href={stage.link}
            className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-brand hover:underline"
          >
            See how we do it
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <ul className="grid grid-cols-1 content-start gap-3 sm:grid-cols-2">
          {stage.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/60 px-4 py-3.5 text-[15px] text-white/85"
            >
              <span className="grid size-6 place-items-center rounded-full bg-brand/20 text-brand">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
