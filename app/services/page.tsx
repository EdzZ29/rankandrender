import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { ButtonLink, Chip, SectionTag, TextLink } from "@/components/ui";
import { CheckList, PageHero } from "@/components/sections";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design and development, mobile apps, AI automation, SEO and social media management. One team, one connected growth system.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Services"
        title={
          <>
            Everything you need to build, market and <span className="text-brand">grow online.</span>
          </>
        }
        text="One team bringing development, marketing and automation together around one goal: helping your business move forward."
      >
        <nav aria-label="Services" className="mt-10 flex flex-wrap gap-2">
          {services.map((s, i) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2.5 text-sm font-medium transition hover:border-ink hover:bg-ink hover:text-white"
            >
              <span className="font-mono text-xs text-brand">0{i + 1}</span>
              {s.short}
            </Link>
          ))}
        </nav>
      </PageHero>

      <div className="container-x space-y-6 pb-24 sm:pb-32">
        {services.map((s, i) => {
          const Icon = s.icon;
          const dark = i % 2 === 1;
          return (
            <section
              key={s.id}
              id={s.id}
              data-reveal
              className={`relative overflow-hidden rounded-[32px] p-8 sm:p-12 lg:p-16 ${
                dark ? "bg-ink text-white" : "border border-ink/10 bg-white"
              }`}
            >
              {dark && (
                <div className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-brand/20 blur-[100px]" />
              )}
              <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl bg-brand text-white">
                      <Icon className="size-6" />
                    </span>
                    <span className="font-mono text-sm font-semibold text-brand">0{i + 1}</span>
                  </div>
                  <h2 className="display mt-8 text-[clamp(2.25rem,4.5vw,3.75rem)]">{s.title}</h2>
                  <p className={`mt-5 font-display text-xl font-semibold italic tracking-tight ${dark ? "text-white/85" : "text-ink/80"}`}>
                    “{s.quote}”
                  </p>
                  <p className={`mt-5 max-w-lg text-lg leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>
                    {s.description}
                  </p>
                  <div className={`mt-8 rounded-2xl border p-5 ${dark ? "border-white/10 bg-white/5" : "border-ink/10 bg-paper"}`}>
                    <p className={`eyebrow ${dark ? "text-white/50" : "text-muted"}`}>Ideal for</p>
                    <p className={`mt-2 leading-relaxed ${dark ? "text-white/85" : "text-ink/80"}`}>{s.idealFor}</p>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <ButtonLink href={`/contact?service=${s.id}#audit`}>{s.cta}</ButtonLink>
                    <TextLink href="/pricing" className={dark ? "text-white" : ""}>
                      See pricing
                    </TextLink>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <p className={`eyebrow ${dark ? "text-white/50" : "text-muted"}`}>What’s included</p>
                    <div className="mt-5">
                      <CheckList items={s.deliverables} dark={dark} />
                    </div>
                  </div>
                  <div>
                    <p className={`eyebrow ${dark ? "text-white/50" : "text-muted"}`}>Capabilities</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <Chip key={t} dark={dark}>
                          {t}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section
          data-reveal
          className="relative overflow-hidden rounded-[32px] bg-brand p-8 text-white sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-white/15 blur-3xl" />
          <div className="relative grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionTag label="Not sure where to start?" dark className="[&_span]:!text-white/80" />
              <h2 className="display mt-6 text-[clamp(2.25rem,4.5vw,3.75rem)]">
                Most businesses don’t need everything. They need the right thing first.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="text-lg leading-relaxed text-white/85">
                Our free audit shows which service will make the biggest difference right now.
              </p>
              <ButtonLink href="/contact#audit" variant="dark" size="lg" className="mt-6">
                Get my free audit
              </ButtonLink>
            </div>
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
