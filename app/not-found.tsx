import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pb-32 pt-44">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_65%)]" />
      <div className="container-x relative text-center">
        <p className="display text-[clamp(7rem,22vw,14rem)] text-brand">404</p>
        <h1 className="display mt-2 text-[clamp(2rem,4vw,3rem)]">This page can’t be found.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          Unlike your business, which we’d love to help people find.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" variant="dark">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Get a free audit
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
