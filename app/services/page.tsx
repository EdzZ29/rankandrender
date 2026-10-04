import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { services } from "@/lib/content";
import { ButtonLink, Chip, SectionTag, TextLink } from "@/components/ui";
import { CheckList, PageHero } from "@/components/sections";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Website design and development, mobile apps, AI automation, SEO and social media management. One team, one connected growth system.",
  path: "/services",
});

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

      <div className="container-x grid grid-cols-1 gap-6 pb-24 sm:pb-32 lg:grid-cols-2">
        {services.map((s, i) => {
          const Icon = s.icon;
          // Checkerboard across the two columns: light, dark / dark, light / ...
          const dark = (Math.floor(i / 2) + (i % 2)) % 2 === 1;
          return (
            <section
              key={s.id}
              id={s.id}
              data-reveal
              style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              className={`relative flex scroll-mt-28 flex-col overflow-hidden rounded-[32px] p-8 sm:p-10 ${
                dark ? "bg-ink text-white" : "border border-ink/10 bg-white"
              }`}
            >
              {dark && (
                <div className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-brand/20 blur-[100px]" />
              )}
              <div className="relative flex flex-1 flex-col">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand text-white">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-mono text-sm font-semibold text-brand">0{i + 1}</span>
                </div>
                <h2 className="display mt-8 text-[clamp(2rem,3.2vw,2.75rem)]">{s.title}</h2>
                <p className={`mt-4 font-display text-lg font-semibold italic tracking-tight ${dark ? "text-white/85" : "text-ink/80"}`}>
                  “{s.quote}”
                </p>
                <p className={`mt-4 leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>{s.description}</p>
                <div className={`mt-6 rounded-2xl border p-5 ${dark ? "border-white/10 bg-white/5" : "border-ink/10 bg-paper"}`}>
                  <p className={`eyebrow ${dark ? "text-white/50" : "text-muted"}`}>Ideal for</p>
                  <p className={`mt-2 leading-relaxed ${dark ? "text-white/85" : "text-ink/80"}`}>{s.idealFor}</p>
                </div>
                <div className="mt-8">
                  <p className={`eyebrow ${dark ? "text-white/50" : "text-muted"}`}>What’s included</p>
                  <div className="mt-5">
                    <CheckList items={s.deliverables} dark={dark} className="grid grid-cols-1 gap-3 sm:grid-cols-2" />
                  </div>
                </div>
                <div className="mt-8">
                  <p className={`eyebrow ${dark ? "text-white/50" : "text-muted"}`}>Capabilities</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <Chip key={t} dark={dark}>
                        {t}
                      </Chip>
                    ))}
                  </div>
                </div>
                {/* Pinned to the bottom so buttons line up across each row. */}
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-10">
                  <ButtonLink href={`/contact?service=${s.id}#audit`}>{s.cta}</ButtonLink>
                  <TextLink href="/pricing" className={dark ? "text-white" : ""}>
                    See pricing
                  </TextLink>
                </div>
              </div>
            </section>
          );
        })}

        <section
          data-reveal
          style={{ transitionDelay: `${(services.length % 2) * 90}ms` }}
          className={`relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-brand p-8 text-white sm:p-10 ${
            services.length % 2 === 0 ? "lg:col-span-2" : ""
          }`}
        >
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-white/15 blur-3xl" />
          <div className="relative">
            <SectionTag label="Not sure where to start?" dark className="[&_span]:!text-white/80" />
            <h2 className="display mt-6 text-[clamp(2rem,3.2vw,2.75rem)]">
              Most businesses don’t need everything. They need the right thing first.
            </h2>
          </div>
          <div className="relative mt-10">
            <p className="text-lg leading-relaxed text-white/85">
              Our free audit shows which service will make the biggest difference right now.
            </p>
            <ButtonLink href="/contact#audit" variant="dark" size="lg" className="mt-6">
              Get my free audit
            </ButtonLink>
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
