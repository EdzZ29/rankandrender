import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectMockup } from "@/components/ProjectMockup";
import { ButtonLink, Chip, SectionTag } from "@/components/ui";
import { CheckList } from "@/components/sections";
import { CtaBand } from "@/components/CtaBand";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return pageMetadata({ title: `${project.title} | Our Work`, description: project.summary, path: `/work/${project.slug}` });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_65%)]" />
        <div className="container-x relative">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink">
            <ArrowLeft className="size-4" /> All projects
          </Link>
          <div className="mt-8 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionTag label={`${project.industry} · ${project.category}`} />
              <h1 className="display mt-6 text-[clamp(2.75rem,7vw,6rem)]">{project.title}</h1>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-muted">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x">
        <div data-reveal className="mx-auto max-w-5xl">
          <ProjectMockup theme={project.theme} />
        </div>
      </div>

      <section className="py-24 sm:py-32">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="self-start lg:sticky lg:top-32">
            <p className="eyebrow text-brand">The challenge</p>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              {project.challenge}
            </p>
          </div>
          <div className="space-y-12">
            <div data-reveal>
              <p className="eyebrow text-muted">Our approach</p>
              <ol className="mt-6 space-y-4">
                {project.approach.map((a, i) => (
                  <li key={a} className="flex gap-5 rounded-2xl border border-ink/10 bg-white p-6">
                    <span className="font-mono text-sm font-semibold text-brand">0{i + 1}</span>
                    <span className="leading-relaxed text-ink/80">{a}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div data-reveal className="rounded-3xl bg-ink p-8 text-white sm:p-10">
              <p className="eyebrow text-brand">What we built</p>
              <div className="mt-6">
                <CheckList items={project.built} dark />
              </div>
            </div>
            <div data-reveal>
              <p className="eyebrow text-muted">The result</p>
              <p className="mt-4 text-xl leading-relaxed text-ink/85">{project.outcome}</p>
              <ButtonLink href={`/contact?industry=${encodeURIComponent(project.industry)}#audit`} className="mt-8">
                Get something similar
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10">
        <Link href={`/work/${next.slug}`} className="group block">
          <div className="container-x flex items-center justify-between gap-6 py-14">
            <div>
              <p className="eyebrow text-muted">Next project</p>
              <p className="display mt-3 text-[clamp(2rem,5vw,4rem)] transition-colors group-hover:text-brand">
                {next.title}
              </p>
            </div>
            <span className="grid size-16 shrink-0 place-items-center rounded-full bg-ink text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-brand sm:size-20">
              <ArrowUpRight className="size-7" />
            </span>
          </div>
        </Link>
      </section>

      <CtaBand />
    </>
  );
}
