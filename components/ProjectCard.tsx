import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectMockup } from "./ProjectMockup";
import { Chip } from "./ui";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className="group flex flex-col"
    >
      <div className="relative">
        <ProjectMockup theme={project.theme} />
        <span className="eyebrow absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-semibold text-ink backdrop-blur">
          {project.industry}
        </span>
        <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-ink text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <p className="eyebrow mt-6 font-semibold text-brand">{project.category}</p>
      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-brand">
        {project.title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </Link>
  );
}
