import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { collabTools, processPillars } from "@/lib/content";
import { PageHero, ProcessSection } from "@/components/sections";
import { SectionTag } from "@/components/ui";
import { TeamRoles } from "@/components/process/TeamRoles";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "Process",
  description:
    "How Rank & Render works with you: a clear process, a dedicated team and the tools you already use, including Google Meet, Teams, WhatsApp, Discord and Google Drive.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        tag="Process"
        title={
          <>
            Let’s start with how we can <span className="text-brand">help you.</span>
          </>
        }
        text="Rank & Render brings strategy, design, development and marketing together so you can build, launch and grow online without juggling different providers. We keep the process simple, the communication open and the people doing the work within easy reach."
      />

      {/* How we work */}
      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {processPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.title}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className="group rounded-[28px] border border-ink/10 bg-white p-8 shadow-[0_30px_60px_-45px_rgb(255_90_31/0.45)] transition duration-500 hover:-translate-y-1 hover:border-brand/30 sm:p-9"
                >
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand transition duration-500 group-hover:rotate-6 group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-6" />
                  </span>
                  <h2 className="mt-8 font-display text-2xl font-bold tracking-tight">{p.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ProcessSection n="01" />

      {/* Your team */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <SectionTag n="02" label="Your team" />
              <h2 data-reveal className="display mt-6 text-[clamp(2.5rem,5.5vw,4.5rem)]">
                You’ll be assisted <span className="text-brand">by our team.</span>
              </h2>
            </div>
            <p data-reveal className="max-w-xl text-lg leading-relaxed text-muted">
              Every project has named people behind it. Our team is experienced, hands-on and ready to start working
              with you today.
            </p>
          </div>
          <div className="mt-14">
            <TeamRoles />
          </div>
        </div>
      </section>

      {/* Collaboration tools */}
      <section className="border-t border-ink/10 bg-paper-2/60 py-24 sm:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTag n="03" label="Collaboration" className="justify-center" />
            <h2 data-reveal className="display mt-6 text-[clamp(2.5rem,5.5vw,4.5rem)]">
              Collaboration <span className="text-brand">tools.</span>
            </h2>
            <p data-reveal className="mt-6 text-lg leading-relaxed text-muted">
              We work where you already are. Meet with us, message us and share files using the tools you’re
              comfortable with.
            </p>
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {collabTools.map((t, i) => (
              <li
                key={t.name}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
                className={`group flex flex-col items-center rounded-[28px] border border-ink/10 bg-white px-5 py-8 text-center transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgb(11_17_23/0.35)] ${
                  i === collabTools.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <span className="grid size-20 place-items-center">
                  <Image
                    src={t.logo}
                    alt={`${t.name} logo`}
                    width={64}
                    height={64}
                    className="max-h-16 w-auto transition duration-500 group-hover:scale-110"
                  />
                </span>
                <p className="mt-5 font-display text-lg font-bold tracking-tight">{t.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{t.use}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
