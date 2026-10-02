import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Gauge, Handshake, Layers, MessageSquare, ShieldCheck, Target } from "lucide-react";
import { Comparison, PageHero, ProcessSection, ReasonsGrid } from "@/components/sections";
import { SectionTag } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "Why Us",
  description:
    "Strategy and execution from one hands-on team. Here’s why businesses choose Rank & Render over bigger agencies.",
  path: "/why-us",
});

const commitments = [
  { icon: Target, title: "Clear scope before work starts", text: "You’ll know exactly what we’re building, when, and what it costs before anything begins." },
  { icon: MessageSquare, title: "Plain-English updates", text: "Regular progress updates without jargon, so you always know where things stand." },
  { icon: Handshake, title: "Honest recommendations", text: "If something isn’t worth doing yet, we’ll tell you, even if it means a smaller project." },
  { icon: Layers, title: "Built to be extended", text: "Everything we build is designed to grow with you, so you’re never starting from scratch." },
  { icon: Gauge, title: "Measured by business results", text: "We focus on enquiries, bookings and time saved, not vanity metrics." },
  { icon: ShieldCheck, title: "Direct access to the team", text: "You talk to the people doing the work, not a chain of account managers." },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        tag="Why Rank & Render"
        title={
          <>
            Why businesses choose <span className="text-brand">Rank &amp; Render.</span>
          </>
        }
        text="Strategy and execution from one hands-on team. We combine design, development, SEO, automation and marketing so every part of your digital presence works together."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <ReasonsGrid />
        </div>
      </section>

      <section className="border-t border-ink/10 py-24 sm:py-32">
        <div className="container-x">
          <SectionTag label="What you can expect" />
          <h2 data-reveal className="display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)]">
            Our commitments to every client.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  data-reveal
                  style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                  className="group rounded-3xl border border-ink/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-8 font-display text-xl font-bold tracking-tight">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <SectionTag label="A different approach" />
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

      <ProcessSection n="" />
      <CtaBand />
    </>
  );
}
