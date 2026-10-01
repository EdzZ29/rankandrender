import type { Metadata } from "next";
import { Globe, Users, Zap } from "lucide-react";
import { values } from "@/lib/content";
import { PageHero } from "@/components/sections";
import { ButtonLink, SectionTag } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rank & Render is a digital growth studio helping businesses get found, earn trust and grow, with websites, SEO, automation, apps and social media.",
};

const howWeWork = [
  { icon: Globe, title: "Remote by design", text: "We work with businesses worldwide, scheduling calls around your time zone and sharing progress in real time." },
  { icon: Users, title: "Small, senior team", text: "The people you speak with are the people doing the work. No hand-offs, no lost context." },
  { icon: Zap, title: "Lean and fast", text: "Focused scopes, short feedback loops and steady progress you can see every week." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About"
        title={
          <>
            We help good businesses look as good online as they are <span className="text-brand">in real life.</span>
          </>
        }
        text="Rank & Render is a digital growth studio. We bring design, development, SEO, automation and marketing together so business owners don’t have to stitch it all together themselves."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-x grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div data-reveal className="relative overflow-hidden rounded-[32px] bg-ink p-8 text-white sm:p-12">
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-brand/25 blur-3xl" />
            <p className="eyebrow relative text-white/50">What’s in a name</p>
            <div className="relative mt-10 space-y-10">
              <div>
                <p className="display text-6xl sm:text-7xl">Rank</p>
                <p className="mt-3 max-w-sm leading-relaxed text-white/65">
                  Getting found. Showing up when customers search for what you sell, in the places they already look.
                </p>
              </div>
              <p className="display text-6xl text-brand sm:text-7xl">&amp;</p>
              <div>
                <p className="display text-6xl sm:text-7xl">Render</p>
                <p className="mt-3 max-w-sm leading-relaxed text-white/65">
                  Building the experience. Websites, apps and systems that turn that attention into trust and enquiries.
                </p>
              </div>
            </div>
          </div>
          <div data-reveal style={{ transitionDelay: "100ms" }} className="flex flex-col justify-between rounded-[32px] border border-ink/10 bg-white p-8 sm:p-12">
            <div>
              <p className="eyebrow text-muted">Our story</p>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
                <p>
                  We kept meeting business owners with the same frustration. They’d paid for a website, then hired
                  someone else for SEO, someone else for social and tried a few tools for automation. None of it
                  talked to each other, and none of it was clearly working.
                </p>
                <p>
                  So we built a studio around a simple idea: your digital presence should work as one system. Every
                  piece should help you get found, earn trust and win customers, and every piece should make the
                  next one stronger.
                </p>
                <p>That’s still how we approach every project today.</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/work" variant="dark">
                See our work
              </ButtonLink>
              <ButtonLink href="/services" variant="outline">
                Our services
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-24 sm:py-32">
        <div className="container-x">
          <SectionTag label="What we believe" />
          <h2 data-reveal className="display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)]">
            The principles behind every project.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
                className="group bg-paper p-8 transition-colors duration-500 hover:bg-white"
              >
                <span className="font-mono text-sm font-semibold text-brand">0{i + 1}</span>
                <h3 className="mt-10 font-display text-2xl font-bold tracking-tight">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <SectionTag label="How we work" />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {howWeWork.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="rounded-3xl border border-ink/10 bg-white p-8"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-8 font-display text-xl font-bold tracking-tight">{h.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{h.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
