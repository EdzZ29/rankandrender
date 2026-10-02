import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { formatDate, posts } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          articleSection: post.category,
          url: `${site.url}/blog/${post.slug}`,
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
          image: `${site.url}/opengraph-image`,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@type": "Organization", name: site.name, url: site.url, logo: `${site.url}/icon.svg` },
        }}
      />
      <article>
        <header className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
          <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_65%)]" />
          <div className="container-x relative mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink">
              <ArrowLeft className="size-4" /> All guides
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] text-muted">
              <span className="eyebrow rounded-full bg-brand-soft px-3 py-1.5 font-semibold text-brand">{post.category}</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" /> {post.readTime}
              </span>
            </div>
            <h1 className="display mt-6 text-[clamp(2.5rem,6vw,4.75rem)]">{post.title}</h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">{post.excerpt}</p>
          </div>
        </header>

        <div className="container-x mx-auto max-w-4xl pb-20">
          <div className="border-t border-ink/10 pt-12">
            <div className="prose-rr mx-auto max-w-[68ch]">
              {post.body.map((block, i) => {
                switch (block.type) {
                  case "h2":
                    return <h2 key={i}>{block.text}</h2>;
                  case "quote":
                    return <blockquote key={i}>{block.text}</blockquote>;
                  case "ul":
                    return (
                      <ul key={i}>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return <p key={i}>{block.text}</p>;
                }
              })}
            </div>

            <aside className="mx-auto mt-16 max-w-[68ch] rounded-3xl bg-ink p-8 text-white sm:p-10">
              <p className="eyebrow text-brand">Want a second opinion?</p>
              <p className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                We’ll review your digital presence and show you exactly where the gaps are.
              </p>
              <ButtonLink href="/contact#audit" className="mt-7">
                Get my free audit
              </ButtonLink>
            </aside>
          </div>
        </div>
      </article>

      <section className="border-t border-ink/10 py-20 sm:py-24">
        <div className="container-x">
          <h2 className="display text-[clamp(2rem,4vw,3rem)]">Keep reading.</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="eyebrow font-semibold text-brand">{p.category}</span>
                <h3 className="mt-4 flex-1 font-display text-xl font-bold leading-tight tracking-tight group-hover:text-brand">
                  {p.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Read the guide
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
