import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/content";
import { Logo } from "./Logo";
import { SocialIcon } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="container-x pt-20 pb-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <div className="inline-flex rounded-2xl bg-white px-3 py-2 text-ink">
              <Logo />
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60">{site.tagline}</p>
            <ul className="mt-6 flex gap-2.5">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Rank & Render on ${s.label}`}
                    className="grid size-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-brand hover:bg-brand hover:text-white"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterCol title="Navigate">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/75 transition hover:text-brand">
                  {n.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className="text-white/75 transition hover:text-brand">
                  {s.short === "Websites" ? "Website Development" : s.short}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/pricing" className="text-white/75 transition hover:text-brand">
                Pricing
              </Link>
            </li>
          </FooterCol>

          <FooterCol title="Contact">
            <li>
              <a href={`mailto:${site.email}`} className="text-white/75 transition hover:text-brand">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="text-white/75 transition hover:text-brand">
                {site.phone}
              </a>
            </li>
            <li className="text-white/50">{site.location}</li>
            <li className="pt-2">
              <Link
                href="/contact#book"
                className="inline-flex items-center gap-1.5 font-semibold text-brand hover:underline"
              >
                Book a strategy call <ArrowUpRight className="size-4" />
              </Link>
            </li>
          </FooterCol>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-14 sm:flex-row sm:items-end">
          <p className="display max-w-2xl text-[clamp(2.75rem,7vw,5.5rem)]">
            Let’s build your <span className="text-brand">growth</span> system.
          </p>
          <Link
            href="/contact"
            aria-label="Start your project"
            className="group grid size-24 shrink-0 place-items-center rounded-full bg-brand transition duration-500 hover:scale-105 hover:bg-white hover:text-ink"
          >
            <ArrowUpRight className="size-9 transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </div>

        <div className="mt-14 flex flex-col-reverse justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center">
          <p>© {year} Rank &amp; Render. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="hidden md:inline">Websites · Apps · SEO · AI Automation · Social Media</span>
            <a href="#top" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white">
              Back to top <ArrowUp className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow text-white/40">{title}</h3>
      <ul className="mt-5 space-y-3 text-[15px]">{children}</ul>
    </div>
  );
}
