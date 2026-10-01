import type { Metadata } from "next";
import { PageHero } from "@/components/sections";
import { WorkGrid } from "@/components/WorkGrid";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Selected Rank & Render project experience across education, construction, hospitality and more.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        tag="Our work"
        title={
          <>
            Different industries. <span className="text-brand">Same standard.</span>
          </>
        }
        text="Selected project experience across different industries and markets. Every project starts with the same question: what will help this business get chosen?"
      />
      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <WorkGrid />
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
