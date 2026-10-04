"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];
// Filtering only helps once there's a real mix to filter.
const showFilters = projects.length > 3 && filters.length > 2;

export function WorkGrid() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.industry === filter);

  if (projects.length === 1) return <ProjectCard project={projects[0]} featured />;

  return (
    <div>
      {showFilters && (
        <div role="group" aria-label="Filter projects by industry" className="mb-12 flex flex-wrap gap-2">
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
      )}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-10">
        {shown.map((p, i) => {
          // With an odd count, feature the first project full-width so the rest pair up evenly.
          const featured = i === 0 && shown.length % 2 === 1;
          return (
            <div key={p.slug} className={featured ? "md:col-span-2" : ""}>
              <ProjectCard project={p} featured={featured} delay={featured ? 0 : (i % 2) * 90} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
