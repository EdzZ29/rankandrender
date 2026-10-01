import type { Metadata } from "next";
import { PageHero } from "@/components/sections";
import { BlogList } from "@/components/BlogList";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, honest guides on websites, SEO, automation, apps and social media, written for business owners.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        tag="Insights"
        title={
          <>
            Answers for business owners who want to <span className="text-brand">grow online.</span>
          </>
        }
        text="Practical, honest guides on websites, SEO, automation, apps and social media. Written for business owners, not marketers. No jargon, no fluff, no sales pitch."
      />
      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <BlogList />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
