"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "../ui";

export function HeroAudit() {
  const router = useRouter();
  const [url, setUrl] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = url.trim();
    router.push(value ? `/contact?url=${encodeURIComponent(value)}#audit` : "/contact#audit");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-xl items-center gap-2 rounded-full border border-ink/10 bg-white p-1.5 pl-5 shadow-[0_20px_50px_-25px_rgb(11_17_23/0.35)] transition focus-within:border-brand/50 focus-within:ring-4 focus-within:ring-brand/10"
    >
      <Globe aria-hidden className="size-4 shrink-0 text-muted" />
      <label htmlFor="hero-url" className="sr-only">
        Your website address
      </label>
      <input
        id="hero-url"
        type="text"
        inputMode="url"
        autoComplete="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="yourbusiness.com"
        className="min-w-0 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-ink/40"
      />
      <Button type="submit" size="md">
        <span className="sm:hidden">Free audit</span>
        <span className="hidden sm:inline">Get my free audit</span>
      </Button>
    </form>
  );
}
