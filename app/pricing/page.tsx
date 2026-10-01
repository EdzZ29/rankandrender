import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { planMatrix, plans, pricingFaqs } from "@/lib/content";
import { CheckList, PageHero } from "@/components/sections";
import { ButtonLink, SectionTag } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent starting points for websites, SEO, automation and full digital growth systems. Every engagement is scoped after a free audit.",
};

const included = [
  "Free digital growth audit",
  "Fixed quote before work starts",
  "Direct access to the team",
  "Launch support and training",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        tag="Pricing"
        title={
          <>
            Choose the level of support your business <span className="text-brand">needs.</span>
          </>
        }
        text="Transparent starting points. Every engagement is scoped to your business after a free audit, so you’ll never pay for services you don’t need."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-stretch">
            {plans.map((p, i) => (
              <div
                key={p.id}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
                className={`relative flex flex-col rounded-[28px] p-8 sm:p-10 ${
                  p.featured
                    ? "bg-ink text-white shadow-[0_40px_80px_-30px_rgb(11_17_23/0.6)] lg:-my-4 lg:py-14"
                    : "border border-ink/10 bg-white"
                }`}
              >
                {p.featured && (
                  <>
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
                      <div className="absolute -right-20 -top-20 size-72 rounded-full bg-brand/25 blur-3xl" />
                    </div>
                    <span className="eyebrow absolute -top-3.5 left-8 rounded-full bg-brand px-3.5 py-1.5 font-semibold text-white">
                      Most popular
                    </span>
                  </>
                )}
                <p className="eyebrow relative font-semibold">{p.name}</p>
                <div className="relative mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <span className="display text-6xl">{p.price}</span>
                  <span className={`pb-1.5 text-sm ${p.featured ? "text-white/55" : "text-muted"}`}>{p.unit}</span>
                </div>
                <p className={`relative mt-5 leading-relaxed ${p.featured ? "text-white/65" : "text-muted"}`}>{p.blurb}</p>
                <div className={`relative my-8 h-px ${p.featured ? "bg-white/10" : "bg-ink/10"}`} />
                <div className="relative flex-1">
                  <CheckList items={p.features} dark={p.featured} />
                </div>
                <ButtonLink
                  href={`/contact?plan=${p.id}#audit`}
                  variant={p.featured ? "primary" : "outline"}
                  size="lg"
                  className="relative mt-10 w-full"
                >
                  {p.cta}
                </ButtonLink>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="mt-12 flex flex-col gap-6 rounded-3xl border border-ink/10 bg-white/60 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between"
          >
            <p className="font-display text-xl font-bold tracking-tight">Every engagement includes</p>
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[15px] text-ink/80">
                  <Check className="size-4 text-brand" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-24 sm:py-32">
        <div className="container-x">
          <SectionTag label="Compare plans" />
          <h2 data-reveal className="display mt-6 max-w-3xl text-[clamp(2.5rem,5vw,4rem)]">
            What’s in each plan.
          </h2>
          <div data-reveal className="mt-12 overflow-x-auto rounded-3xl border border-ink/10 bg-white">
            <table className="w-full min-w-[560px] text-left">
              <caption className="sr-only">Plan feature comparison</caption>
              <thead>
                <tr className="border-b border-ink/10">
                  <th scope="col" className="p-5 text-sm font-semibold text-muted sm:p-6">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      scope="col"
                      className={`p-5 text-center font-display text-lg font-bold tracking-tight sm:p-6 ${
                        p.featured ? "text-brand" : ""
                      }`}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planMatrix.map((row) => (
                  <tr key={row.feature} className="border-b border-ink/5 last:border-0 hover:bg-paper/60">
                    <th scope="row" className="p-5 text-[15px] font-medium text-ink/80 sm:px-6 sm:py-4">
                      {row.feature}
                    </th>
                    {row.tiers.map((on, i) => (
                      <td key={i} className="p-5 text-center sm:px-6 sm:py-4">
                        {on ? (
                          <span className="inline-grid size-7 place-items-center rounded-full bg-brand-soft text-brand">
                            <Check className="size-4" strokeWidth={3} />
                            <span className="sr-only">Included</span>
                          </span>
                        ) : (
                          <span className="inline-grid size-7 place-items-center text-ink/20">
                            <Minus className="size-4" />
                            <span className="sr-only">Not included</span>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTag label="Pricing questions" />
            <h2 className="display mt-6 text-[clamp(2.25rem,4vw,3.5rem)]">Straight answers about cost.</h2>
          </div>
          <Faq items={pricingFaqs} />
        </div>
      </section>

      <CtaBand
        title={
          <>
            Not sure which plan fits? <span className="text-brand">Let’s find out.</span>
          </>
        }
        text="Start with a free audit. We’ll recommend the right level of support for where your business is right now."
      />
    </>
  );
}
