import { ButtonLink, SectionTag } from "./ui";

export function CtaBand({
  title = (
    <>
      Let’s build something that moves your business <span className="text-brand">forward.</span>
    </>
  ),
  text = "Whether you need a better website, stronger visibility, smarter automation or a complete digital growth strategy, we’ll help you work out what comes next.",
}: {
  title?: React.ReactNode;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink text-white">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 size-[32rem] rounded-full bg-brand/20 blur-[120px]" />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[clamp(10rem,26vw,24rem)] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.1)]"
      >
        R&amp;R
      </span>
      <div className="container-x relative py-24 sm:py-32">
        <SectionTag label="Ready when you are" dark />
        <h2 data-reveal className="display mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5rem)]">
          {title}
        </h2>
        <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
          {text}
        </p>
        <div data-reveal className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="lg">
            Get my free digital growth audit
          </ButtonLink>
          <ButtonLink href="/contact#book" variant="outline-light" size="lg">
            Book a free strategy call
          </ButtonLink>
        </div>
        <p className="eyebrow mt-6 text-white/40">Free. No obligation. No hard sell.</p>
      </div>
    </section>
  );
}
