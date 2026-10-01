"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { ButtonLink } from "./ui";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
        <div className="container-x">
          <div
            className={`flex items-center justify-between rounded-full border py-2 pl-4 pr-2 transition-all duration-500 ${
              scrolled
                ? "border-ink/10 bg-white/80 shadow-[0_12px_40px_-18px_rgb(11_17_23/0.35)] backdrop-blur-xl"
                : "border-ink/5 bg-white/55 backdrop-blur-md"
            }`}
          >
            <Logo onClick={close} />

            <nav aria-label="Main" className="hidden xl:block">
              <ul className="flex items-center gap-0.5">
                {nav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                          active ? "bg-ink/[0.06] text-ink" : "text-ink/60 hover:text-ink"
                        }`}
                      >
                        {item.label}
                        {active && (
                          <span className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-brand" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <span className="hidden sm:block">
                <ButtonLink href="/contact" variant="dark" size="sm">
                  Get your free audit
                </ButtonLink>
              </span>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="grid size-10 place-items-center rounded-full bg-ink text-white transition hover:bg-ink-3 xl:hidden"
              >
                <Menu className="size-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-ink text-white transition-all duration-500 ease-out-expo xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-brand/25 blur-3xl" />
        <div className="container-x flex items-center justify-between pt-5">
          <Logo onClick={close} />
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full border border-white/15 transition hover:bg-white hover:text-ink"
          >
            <X className="size-[18px]" />
          </button>
        </div>
        <nav aria-label="Mobile" className="container-x mt-10 flex-1 overflow-y-auto">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {nav.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <li
                  key={item.href}
                  className={`transition-all duration-500 ease-out-expo ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    className="group flex items-center justify-between py-4"
                  >
                    <span
                      className={`font-display text-3xl font-bold tracking-tight ${
                        active ? "text-brand" : "text-white group-hover:text-brand"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-white/40">0{i + 1}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="container-x space-y-4 pb-8 pt-6">
          <ButtonLink href="/contact" onClick={close} size="lg" className="w-full">
            Get my free digital growth audit
          </ButtonLink>
          <div className="flex flex-wrap justify-between gap-2 text-sm text-white/60">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <a href={site.phoneHref} className="hover:text-white">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
