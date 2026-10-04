import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectMockup } from "./ProjectMockup";
import { ButtonLink, Chip } from "./ui";

/** `featured` lays the card out side by side on large screens, for when it's shown on its own. */
export function ProjectCard({ project, delay = 0, featured = false }: { project: Project; delay?: number; featured?: boolean }) {
  const href = `/work/${project.slug}`;
  return (
    <div
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className={`group ${featured ? "grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-14" : "flex flex-col"}`}
    >
      <Link href={href} className="relative block" aria-label={`${project.title} case study`}>
        <ProjectMockup theme={project.theme} image={project.image} url={project.url} />
        <span className="eyebrow absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-semibold text-ink backdrop-blur">
          {project.industry}
        </span>
        <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-ink text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </Link>
      <div className={featured ? "" : "mt-6"}>
        <p className="eyebrow font-semibold text-brand">{project.category}</p>
        <h3
          className={`mt-2 font-display font-bold tracking-tight transition-colors hover:text-brand ${
            featured ? "text-[clamp(2rem,3.5vw,3rem)] leading-none" : "text-2xl"
          }`}
        >
          <Link href={href}>{project.title}</Link>
        </h3>
        <p className={`mt-3 leading-relaxed text-muted ${featured ? "text-lg" : ""}`}>{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.url && (
            <ButtonLink href={project.url} target="_blank" rel="noopener noreferrer" size={featured ? "md" : "sm"}>
              Visit live site
            </ButtonLink>
          )}
          <ButtonLink href={href} variant="dark" size={featured ? "md" : "sm"} arrow={false}>
            View case study
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
