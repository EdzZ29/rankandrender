import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections";
import { WorkGrid } from "@/components/WorkGrid";
import { CtaBand } from "@/components/CtaBand";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Our Work",
  description:
    "Real websites designed, built and launched by Rank & Render, including Fan Cleaners, Tower Sealants and LocalisedSEO.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        tag="Our work"
        title={
          <>
            Real businesses. <span className="text-brand">Live online.</span>
          </>
        }
        text="A few of the websites we’ve designed, built and launched for real businesses, with many more live online today. Every project starts with the same question: what will help this business get chosen?"
      />
      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <WorkGrid />
          <div
            data-reveal
            className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[32px] border border-ink/10 bg-white p-8 sm:p-10 lg:flex-row lg:items-center"
          >
            <div>
              <p className="eyebrow text-brand">And many more</p>
              <p className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                These are just a few highlights. We’ve developed many more websites that are live online and working
                for their businesses today.
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                Want to see work in your industry? Ask us on a free strategy call and we’ll share relevant examples.
              </p>
            </div>
            <ButtonLink href="/contact#book" size="lg" className="shrink-0">
              Ask for more examples
            </ButtonLink>
          </div>
        </div>
      </section>
      <CtaBand
        title={
          <>
            Your business could be the <span className="text-brand">next one.</span>
          </>
        }
        text="Tell us where you are and where you want to go. We’ll show you what’s possible, with a free audit and no obligation."
      />
    </>
  );
}
