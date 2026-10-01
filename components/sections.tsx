import { Check, Minus, Plus } from "lucide-react";
import { bigAgency, ourWay, processSteps, reasons } from "@/lib/content";
import { ButtonLink, SectionTag } from "./ui";

export function PageHero({
  tag,
  title,
  text,
  children,
}: {
  tag: string;
  title: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_65%)]" />
      <div className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-brand/10 blur-[100px]" />
      <div className="container-x relative">
        <SectionTag label={tag} />
        <h1 className="display mt-6 max-w-5xl text-[clamp(2.75rem,7.5vw,6.5rem)]">{title}</h1>
        {text && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{text}</p>}
        {children}
      </div>
    </section>
  );
}

export function ReasonsGrid() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2">
      {reasons.map((r, i) => {
        const Icon = r.icon;
        return (
          <div
            key={r.title}
            data-reveal
            style={{ transitionDelay: `${i * 70}ms` }}
            className="group relative bg-paper p-8 transition-colors duration-500 hover:bg-white sm:p-12"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-7xl font-bold tracking-tighter text-ink/10 transition-colors duration-500 group-hover:text-brand/25 sm:text-8xl">
                0{i + 1}
              </span>
              <span className="grid size-12 place-items-center rounded-2xl border border-ink/10 text-ink/60 transition-all duration-500 group-hover:rotate-6 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <Icon className="size-5" />
              </span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight">{r.title}</h3>
            <p className="mt-3 max-w-md leading-relaxed text-muted">{r.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ProcessSection({ n = "08" }: { n?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container-x relative">
        <SectionTag n={n} label="Process" dark />
        <h2 data-reveal className="display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)]">
          Simple process. <span className="text-brand">Serious execution.</span>
        </h2>
        <ol className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-brand/50 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-6xl font-bold tracking-tighter text-white/10 transition-colors group-hover:text-brand/40">
                  0{i + 1}
                </span>
                {i < processSteps.length - 1 && (
                  <span className="hidden h-px flex-1 translate-x-8 bg-gradient-to-r from-white/20 to-transparent lg:block" />
                )}
              </div>
              <h3 className="mt-10 font-display text-2xl font-bold uppercase tracking-tight">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-white/60">{s.text}</p>
            </li>
          ))}
        </ol>
        <div data-reveal className="mt-12">
          <ButtonLink href="/contact" size="lg">
            Start with a free audit
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function Comparison() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div data-reveal className="rounded-3xl border border-ink/10 bg-white/50 p-8 sm:p-12">
        <p className="eyebrow font-semibold text-ink/70">Big agency</p>
        <ul className="mt-8 divide-y divide-ink/10 border-b border-ink/10">
          {bigAgency.map((item) => (
            <li key={item} className="flex items-center gap-4 py-4 text-muted">
              <Minus className="size-4 text-ink/30" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        data-reveal
        style={{ transitionDelay: "100ms" }}
        className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-12"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-brand/25 blur-3xl" />
        <p className="eyebrow relative font-semibold text-brand">Rank &amp; Render</p>
        <ul className="relative mt-8 divide-y divide-white/10 border-b border-white/10">
          {ourWay.map((item) => (
            <li key={item} className="flex items-center gap-4 py-4 font-medium">
              <Plus className="size-4 text-brand" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 ${dark ? "text-white/85" : "text-ink/80"}`}>
          <span
            className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
              dark ? "bg-brand/25 text-brand" : "bg-brand-soft text-brand"
            }`}
          >
            <Check className="size-3" strokeWidth={3} />
          </span>
          <span className="text-[15px]">{item}</span>
        </li>
      ))}
    </ul>
  );
}
