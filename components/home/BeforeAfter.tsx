"use client";

import { useState } from "react";
import { MoveHorizontal, Star } from "lucide-react";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <div className="@container relative aspect-[4/3] w-full select-none overflow-hidden rounded-[28px] border border-ink/10 shadow-[0_40px_80px_-40px_rgb(11_17_23/0.45)] sm:aspect-[16/9]">
      <OldSite />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <NewSite />
      </div>

      <span className="eyebrow absolute bottom-4 left-4 rounded-full bg-ink/75 px-3 py-1.5 text-white backdrop-blur">
        Before
      </span>
      <span className="eyebrow absolute bottom-4 right-4 rounded-full bg-brand px-3 py-1.5 text-white">After</span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_20px_rgb(0_0_0/0.3)]"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-xl">
          <MoveHorizontal className="size-5" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare the before and after website"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

function OldSite() {
  return (
    <div className="absolute inset-0 bg-[#dcdad2] p-[2.4cqw]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <div className="flex h-full flex-col border-2 border-[#9c9a90] bg-[#efede6] p-[2cqw]">
        <div className="flex items-end justify-between gap-[2cqw] border-b-2 border-dashed border-[#9c9a90] pb-[1.2cqw]">
          <p className="text-[2.6cqw] font-bold leading-none text-[#1d3d9e] underline">WELCOME TO OUR WEBSITE!!!</p>
          <p className="text-[1.15cqw] text-[#1d3d9e] underline">Home | About Us | Services | Gallery | Links | Contact</p>
        </div>
        <div className="mt-[1.6cqw] grid grid-cols-[1fr_1.3fr] gap-[2cqw]">
          <div className="grid aspect-[16/10] place-items-center border border-[#9c9a90] bg-[#cfccc2] text-[1.3cqw] text-[#6b6960]">
            [ image.jpg ]
          </div>
          <div className="space-y-[1cqw] text-[1.25cqw] leading-snug text-[#3a3a3a]">
            <p>
              We are a family owned business established many years ago. We offer a wide range of services to
              customers in the local area and beyond. Our team is dedicated to quality and service.
            </p>
            <p>
              Please browse our website to find out more about what we do. For more information please see the
              services page or contact us using the details at the bottom of this page.
            </p>
            <p className="text-[#1d3d9e] underline">Click here for more information &gt;&gt;</p>
          </div>
        </div>
        <div className="mt-[1.8cqw] grid grid-cols-3 gap-[1.4cqw]">
          {["Our Services", "Latest News", "Testimonials"].map((t) => (
            <div key={t} className="border border-[#9c9a90] bg-[#e4e2da] p-[1cqw]">
              <p className="text-[1.3cqw] font-bold text-[#7a1f1f]">{t}</p>
              <p className="mt-[0.4cqw] text-[1.1cqw] text-[#555]">Coming soon. Check back later for updates.</p>
            </div>
          ))}
        </div>
        <p className="mt-auto pt-[1.8cqw] text-center text-[1.1cqw] text-[#777]">
          You are visitor number 004213 · Best viewed in 1024 x 768
        </p>
      </div>
    </div>
  );
}

function NewSite() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-ink px-[4cqw] py-[3cqw] text-white">
      <div className="pointer-events-none absolute -right-[10cqw] -top-[10cqw] size-[40cqw] rounded-full bg-brand/30 blur-[8cqw]" />
      <div className="pointer-events-none absolute -bottom-[16cqw] -left-[10cqw] size-[36cqw] rounded-full bg-brand/15 blur-[8cqw]" />
      <div className="relative flex items-center justify-between">
        <span className="font-display text-[2cqw] font-bold">
          Harbour<span className="text-brand">.</span>
        </span>
        <div className="flex items-center gap-[2cqw] text-[1.25cqw] text-white/60">
          <span>Services</span>
          <span>Projects</span>
          <span>Reviews</span>
          <span className="rounded-full bg-white px-[1.6cqw] py-[0.7cqw] font-semibold text-ink">Get a quote</span>
        </div>
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center text-center">
        <p className="flex items-center gap-[0.6cqw] text-[1.3cqw] text-white/70">
          <span className="flex text-brand">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-[1.4cqw] fill-current" />
            ))}
          </span>
          Loved by local customers
        </p>
        <p className="mt-[1.6cqw] max-w-[80%] font-display text-[5.4cqw] font-bold leading-[0.95] tracking-tight">
          Trusted local experts. <span className="text-brand">Booked in minutes.</span>
        </p>
        <p className="mt-[1.8cqw] max-w-[55%] text-[1.4cqw] leading-relaxed text-white/60">
          Clear pricing, fast responses and a team that turns up when we say we will.
        </p>
        <div className="mt-[2.4cqw] flex gap-[1.2cqw]">
          <span className="rounded-full bg-brand px-[2.4cqw] py-[1.1cqw] text-[1.4cqw] font-semibold">Get a free quote</span>
          <span className="rounded-full border border-white/25 px-[2.4cqw] py-[1.1cqw] text-[1.4cqw] font-semibold">
            See our work
          </span>
        </div>
      </div>
      <div className="relative grid grid-cols-3 gap-[1.4cqw]">
        {["Fast replies, every time", "Online booking 24/7", "Fixed, upfront quotes"].map((t) => (
          <div
            key={t}
            className="flex items-center gap-[1.2cqw] rounded-[1.4cqw] border border-white/10 bg-white/5 p-[1.6cqw] text-[1.35cqw]"
          >
            <span className="size-[2cqw] shrink-0 rounded-full bg-brand" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
