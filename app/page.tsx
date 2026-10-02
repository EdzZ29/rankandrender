import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, X } from "lucide-react";
import { afterList, beforeList, faqs, problems, services } from "@/lib/content";
import { projects } from "@/lib/projects";
import { ButtonLink, Chip, SectionTag, TextLink } from "@/components/ui";
import { HeroAudit } from "@/components/home/HeroAudit";
import { HeroVisual } from "@/components/home/HeroVisual";
import { SystemStages } from "@/components/home/SystemStages";
import { IndustryPicker } from "@/components/home/IndustryPicker";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Faq } from "@/components/Faq";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { Comparison, ProcessSection, ReasonsGrid } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Rank & Render | Web Design, SEO & AI Automation Studio",
    description:
      "Rank & Render builds digital growth systems: high-performance websites, SEO, AI automation, apps and social media that help businesses get found, win customers and grow.",
    path: "/",
  }),
  title: { absolute: "Rank & Render | Web Design, SEO & AI Automation Studio" },
};

const marquee = [
  "Websites",
  "SEO",
  "AI Automation",
  "Mobile Apps",
  "Social Media",
  "Conversion Design",
  "Local SEO",
  "CRM Workflows",
  "Landing Pages",
  "Lead Follow-Up",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-24 lg:pt-44">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,black_20%,transparent_70%)]" />
        <div className="container-x relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.08fr_1fr] lg:gap-10">
          <div>
            <SectionTag label="Digital growth studio · Worldwide" />
            <h1 className="display mt-7 text-[clamp(2.9rem,5.6vw,5.1rem)]">
              Your business deserves{" "}
              <span className="relative inline-block text-brand">
                more
                <svg
                  aria-hidden
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  className="absolute -bottom-[0.12em] left-0 h-[0.18em] w-full"
                >
                  <path
                    d="M3 15 C 50 5, 120 3, 197 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="400"
                    className="animate-draw"
                  />
                </svg>
              </span>{" "}
              than just a website.
            </h1>
            <p className="mt-8 max-w-xl text-xl font-medium leading-snug text-ink">
              We build digital systems that help businesses get found, win customers and grow.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Rank &amp; Render combines high-performance websites, SEO, AI automation, apps and digital marketing
              to turn your online presence into a stronger growth engine.
            </p>
            <div className="mt-9">
              <HeroAudit />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <TextLink href="/work">See our work</TextLink>
              <span className="h-4 w-px bg-ink/15" />
              <p className="eyebrow text-muted">Free audit. No obligation. No hard sell.</p>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Marquee */}
      <div className="group relative overflow-hidden border-y border-ink/10 bg-white/60 py-5">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {marquee.map((m) => (
                <li key={m} className="flex items-center gap-8 pr-8 font-display text-2xl font-bold tracking-tight text-ink/80">
                  {m}
                  <span className="text-brand">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* 01 Problem */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="self-start lg:sticky lg:top-32">
            <SectionTag n="01" label="The problem" />
            <h2 data-reveal className="display mt-6 text-[clamp(2.5rem,5vw,4rem)]">
              Your business may be losing opportunities online.
            </h2>
            <p data-reveal className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Businesses can lose customers every day, even when the product or service is excellent. The gaps are
              usually digital, and they’re usually fixable.
            </p>
            <div data-reveal className="mt-8">
              <ButtonLink href="/contact#audit">Find my digital growth gaps</ButtonLink>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  data-reveal
                  style={{ transitionDelay: `${(i % 2) * 80}ms` }}
                  className="group bg-paper p-7 transition-colors duration-500 hover:bg-white sm:p-9"
                >
                  <span className="grid size-12 place-items-center rounded-full border border-ink/10 text-ink/70 transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-7 font-mono text-[13px] font-semibold uppercase tracking-[0.16em]">{p.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container-x mt-16">
          <div
            data-reveal
            className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink/10 bg-white px-7 py-7 sm:flex-row sm:items-center sm:px-10"
          >
            <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              We find the gaps, then build the systems to fix them.
            </p>
            <TextLink href="/contact#audit" className="text-brand">
              Find my gaps
            </TextLink>
          </div>
        </div>
      </section>

      {/* 02 System */}
      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -left-40 top-20 size-[30rem] rounded-full bg-brand/15 blur-[120px]" />
        <div className="container-x relative">
          <SectionTag n="02" label="The Rank & Render system" dark />
          <h2 data-reveal className="display mt-6 max-w-4xl text-[clamp(2.5rem,5.5vw,4.75rem)]">
            We don’t just build websites. <span className="text-brand">We build digital growth systems.</span>
          </h2>
          <p data-reveal className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Every service we offer plugs into one connected system. Each stage feeds the next, so your digital
            presence compounds instead of sitting still.
          </p>
          <div className="mt-16">
            <SystemStages />
          </div>
          <div className="mt-12">
            <ButtonLink href="/services" size="lg">
              Explore the system
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 03 Services */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <SectionTag n="03" label="Services" />
              <h2 data-reveal className="display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)]">
                Everything you need to build, market and grow online.
              </h2>
              <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                One team bringing development, marketing and automation together around one goal: helping your
                business move forward.
              </p>
            </div>
            <TextLink href="/services">All services</TextLink>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              const featured = i === 0;
              return (
                <Link
                  key={s.id}
                  href={`/services#${s.id}`}
                  data-reveal
                  style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 sm:p-10 ${
                    i < 1 ? "lg:col-span-4" : "lg:col-span-2"
                  } ${
                    featured
                      ? "bg-ink text-white"
                      : "border border-ink/10 bg-white hover:border-brand/40 hover:shadow-[0_30px_60px_-30px_rgb(11_17_23/0.3)]"
                  }`}
                >
                  {featured && (
                    <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/30 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                  )}
                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-brand">0{i + 1}</span>
                    <span
                      className={`grid size-12 place-items-center rounded-2xl transition-all duration-500 group-hover:rotate-6 ${
                        featured ? "bg-brand text-white" : "bg-brand-soft text-brand group-hover:bg-brand group-hover:text-white"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <h3 className={`relative mt-10 font-display font-bold tracking-tight ${featured ? "text-4xl sm:text-5xl" : "text-[1.7rem] leading-tight"}`}>
                    {s.title}
                  </h3>
                  <p className={`relative mt-3 max-w-lg leading-relaxed ${featured ? "text-white/65" : "text-muted"}`}>
                    {s.description}
                  </p>
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {s.tags.slice(0, featured ? 6 : 3).map((t) => (
                      <Chip key={t} dark={featured}>
                        {t}
                      </Chip>
                    ))}
                  </div>
                  <span
                    className={`relative mt-auto inline-flex items-center gap-1.5 pt-10 font-semibold ${
                      featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {s.cta}
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 Industries */}
      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <SectionTag n="04" label="Who we work with" />
          <h2 data-reveal className="display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)]">
            Built for businesses. Not just one industry.
          </h2>
          <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Every business is different. Your digital strategy should be too.
          </p>
          <div data-reveal className="mt-14">
            <IndustryPicker />
          </div>
          <p className="mt-10 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            If your business needs to grow online,{" "}
            <Link href="/contact" className="text-brand underline-offset-4 hover:underline">
              we can help.
            </Link>
          </p>
        </div>
      </section>

      {/* 05 Why */}
      <section className="border-t border-ink/10 py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <SectionTag n="05" label="Why Rank & Render" />
              <h2 data-reveal className="display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)]">
                Why businesses choose Rank &amp; Render.
              </h2>
            </div>
            <TextLink href="/why-us">More about our approach</TextLink>
          </div>
          <div className="mt-14">
            <ReasonsGrid />
          </div>
        </div>
      </section>

      {/* 06 Work */}
      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <SectionTag n="06" label="Our work" />
              <h2 data-reveal className="display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)]">
                Different industries. Same standard.
              </h2>
              <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Selected project experience across different industries and markets.
              </p>
            </div>
            <TextLink href="/work">View all projects</TextLink>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* 07 Before / After */}
      <section className="border-t border-ink/10 bg-paper-2/60 py-24 sm:py-32">
        <div className="container-x">
          <SectionTag n="07" label="Before / After" />
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 data-reveal className="display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)]">
              The difference a better digital presence makes.
            </h2>
            <p className="eyebrow text-muted">Drag the handle to compare</p>
          </div>
          <div data-reveal className="mt-14">
            <BeforeAfter />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div data-reveal className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-10">
              <p className="eyebrow font-semibold text-ink/60">Before</p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {beforeList.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-ink/5 text-ink/40">
                      <X className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={{ transitionDelay: "100ms" }} className="rounded-3xl bg-ink p-8 text-white sm:p-10">
              <p className="eyebrow font-semibold text-brand">After</p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {afterList.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand/20 text-brand">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 08 Process */}
      <ProcessSection n="08" />

      {/* 09 Different approach */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionTag n="09" label="A different approach" />
          <h2 data-reveal className="display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)]">
            You probably don’t need a bigger agency.
          </h2>
          <p data-reveal className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            You need the right team. Rank &amp; Render is intentionally hands-on. A different approach, not a
            criticism of anyone else’s.
          </p>
          <div className="mt-14">
            <Comparison />
          </div>
        </div>
      </section>

      {/* 10 FAQ */}
      <section className="border-t border-ink/10 py-24 sm:py-32">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="self-start lg:sticky lg:top-32">
            <SectionTag n="10" label="FAQ" />
            <h2 data-reveal className="display mt-6 text-[clamp(2.5rem,4.5vw,3.75rem)]">
              Questions, answered honestly.
            </h2>
            <p data-reveal className="mt-6 max-w-sm leading-relaxed text-muted">
              The things business owners usually want to know before starting a conversation.
            </p>
            <div className="mt-8">
              <TextLink href="/contact">Ask us anything</TextLink>
            </div>
          </div>
          <Faq items={faqs} />
          <JsonLd data={faqJsonLd(faqs)} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
