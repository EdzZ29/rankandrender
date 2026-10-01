"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

export function Faq({ items, defaultOpen = 0 }: { items: { q: string; a: string }[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const uid = useId();

  return (
    <ul className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const on = open === i;
        return (
          <li key={item.q}>
            <h3>
              <button
                type="button"
                id={`${uid}-q-${i}`}
                aria-expanded={on}
                aria-controls={`${uid}-a-${i}`}
                onClick={() => setOpen(on ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span
                  className={`font-display text-lg font-bold tracking-tight transition-colors sm:text-xl ${
                    on ? "text-brand" : "text-ink group-hover:text-brand"
                  }`}
                >
                  {item.q}
                </span>
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                    on ? "rotate-45 border-brand bg-brand text-white" : "border-ink/15 text-ink group-hover:border-brand"
                  }`}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={`${uid}-a-${i}`}
              role="region"
              aria-labelledby={`${uid}-q-${i}`}
              className={`grid transition-[grid-template-rows] duration-500 ease-out-expo ${
                on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 pr-12 leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
