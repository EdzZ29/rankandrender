"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];

export function WorkGrid() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.industry === filter);

  return (
    <div>
      <div role="group" aria-label="Filter projects by industry" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
              filter === f ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-ink/70 hover:border-ink hover:text-ink"
            }`}
          >
            {f}
            <span className="ml-2 font-mono text-xs opacity-50">
              {f === "All" ? projects.length : projects.filter((p) => p.industry === f).length}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-10">
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} delay={(i % 2) * 90} />
        ))}
      </div>
    </div>
  );
}
