import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Mail, MapPin, Phone } from "lucide-react";
import { plans, services } from "@/lib/content";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections";
import { ContactForm } from "@/components/contact/ContactForm";
import { BookingWidget } from "@/components/contact/BookingWidget";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Request your free digital growth audit or book a free strategy call with Rank & Render. No obligation, no hard sell.",
  path: "/contact",
});

const nextSteps = [
  { title: "We review", text: "We look at your website, search visibility, conversion pathways and follow-up process." },
  { title: "We report back", text: "You get a clear summary of the gaps and opportunities, in plain English." },
  { title: "You decide", text: "If it makes sense, we recommend a scope. If not, you keep the insights. No pressure." },
];

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const one = (key: string) => {
    const v = params[key];
    return (Array.isArray(v) ? v[0] : v)?.slice(0, 300);
  };

  const defaults = {
    service: services.find((s) => s.id === one("service"))?.title,
    plan: plans.find((p) => p.id === one("plan"))?.name,
    industry: one("industry"),
    website: one("url"),
  };

  return (
    <>
      <PageHero
        tag="Free audit"
        title={
          <>
            Let’s find the gaps in your <span className="text-brand">digital presence.</span>
          </>
        }
        text="Tell us about your business and we’ll identify where your website, marketing or digital systems could be working harder."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-x grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_1fr]">
          <div id="audit" className="relative rounded-[32px] border border-ink/10 bg-white p-7 sm:p-10">
            <h2 className="display text-[clamp(1.9rem,3vw,2.5rem)]">Request your free audit</h2>
            <p className="mt-3 text-muted">Fields marked * are required.</p>
            <div className="mt-8">
              <ContactForm key={JSON.stringify(defaults)} defaults={defaults} />
            </div>
          </div>

          <div id="book" className="relative overflow-hidden rounded-[32px] bg-ink p-7 text-white sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/25 blur-3xl" />
            <div className="relative">
              <p className="eyebrow text-brand">Prefer to talk?</p>
              <h2 className="display mt-3 text-[clamp(1.9rem,3vw,2.5rem)]">Book a free strategy call</h2>
              <p className="mt-3 leading-relaxed text-white/65">
                A relaxed 30-minute conversation about where your business is, where you want it to go and whether
                we’re the right team to help.
              </p>
              <div className="mt-8">
                <BookingWidget />
              </div>

              <ul className="mt-10 space-y-4 border-t border-white/10 pt-8 text-[15px]">
                <li>
                  <a href={`mailto:${site.email}`} className="group flex items-center gap-3 text-white/80 hover:text-white">
                    <span className="grid size-10 place-items-center rounded-full border border-white/15 transition group-hover:border-brand group-hover:bg-brand">
                      <Mail className="size-4" />
                    </span>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref} className="group flex items-center gap-3 text-white/80 hover:text-white">
                    <span className="grid size-10 place-items-center rounded-full border border-white/15 transition group-hover:border-brand group-hover:bg-brand">
                      <Phone className="size-4" />
                    </span>
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <span className="grid size-10 place-items-center rounded-full border border-white/15">
                    <MapPin className="size-4" />
                  </span>
                  {site.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-x mt-20">
          <p className="eyebrow text-muted">What happens next</p>
          <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {nextSteps.map((s, i) => (
              <li key={s.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="rounded-3xl border border-ink/10 bg-white/60 p-8">
                <span className="font-mono text-sm font-semibold text-brand">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
