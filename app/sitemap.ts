import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";
import { posts } from "@/lib/posts";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...nav.map((n) => ({ url: `${site.url}${n.href === "/" ? "" : n.href}` })),
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}` })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
