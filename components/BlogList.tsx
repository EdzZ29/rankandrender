"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Clock, Search, X } from "lucide-react";
import { categories, formatDate, posts, type Post } from "@/lib/posts";

export function BlogList() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)),
    );
  }, [category, query]);

  const showFeatured = category === "All" && !query.trim();
  const [featured, ...rest] = filtered;
  const grid = showFeatured ? rest : filtered;

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                category === c
                  ? "border-ink bg-ink text-white"
                  : "border-ink/10 bg-white text-ink/70 hover:border-ink hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex h-12 w-full items-center gap-2 rounded-full border border-ink/10 bg-white px-4 transition focus-within:border-brand/50 focus-within:ring-4 focus-within:ring-brand/10 lg:w-72">
          <Search aria-hidden className="size-4 text-muted" />
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides"
            className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-ink/40 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="text-muted hover:text-ink">
              <X className="size-4" />
            </button>
          )}
        </label>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "guide" : "guides"}
        {category !== "All" && ` in ${category}`}
        {query.trim() && ` matching “${query.trim()}”`}
      </p>

      {filtered.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-ink/15 p-12 text-center">
          <p className="font-display text-2xl font-bold tracking-tight">No guides found.</p>
          <p className="mt-2 text-muted">Try a different search or category.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-3"
          >
            Reset filters
          </button>
        </div>
      )}

      {showFeatured && featured && <FeaturedPost post={featured} />}

      {grid.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {grid.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function Meta({ post, dark = false }: { post: Post; dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-[13px]">
      <span
        className={`eyebrow rounded-full px-3 py-1.5 font-semibold ${
          dark ? "bg-brand text-white" : "bg-brand-soft text-brand"
        }`}
      >
        {post.category}
      </span>
      <span className={dark ? "text-white/55" : "text-muted"}>{formatDate(post.date)}</span>
      <span className={`flex items-center gap-1 ${dark ? "text-white/55" : "text-muted"}`}>
        <Clock className="size-3.5" /> {post.readTime}
      </span>
    </div>
  );
}

function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative mt-8 grid grid-cols-1 overflow-hidden rounded-[28px] bg-ink p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-brand/25 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="relative">
        <p className="eyebrow text-white/50">Featured guide</p>
        <div className="mt-5">
          <Meta post={post} dark />
        </div>
        <h2 className="display mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)]">{post.title}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">{post.excerpt}</p>
      </div>
      <span className="relative mt-10 grid size-16 place-items-center rounded-full bg-brand transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink lg:mt-0">
        <ArrowUpRight className="size-6" />
      </span>
    </Link>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_60px_-30px_rgb(11_17_23/0.3)] sm:p-8"
    >
      <Meta post={post} />
      <h3 className="mt-6 font-display text-[1.6rem] font-bold leading-tight tracking-tight transition-colors group-hover:text-brand">
        {post.title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{post.excerpt}</p>
      <span className="mt-8 inline-flex items-center gap-1.5 font-semibold">
        Read the guide
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
