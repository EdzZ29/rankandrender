import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "outline-light" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_10px_30px_-10px_rgb(255_90_31/0.7)] hover:bg-brand-deep",
  dark: "bg-ink text-white hover:bg-ink-3",
  outline: "border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-white",
  "outline-light": "border border-white/20 text-white hover:border-white hover:bg-white hover:text-ink",
  light: "bg-white text-ink hover:bg-paper-2",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-[13px] gap-1.5",
  md: "h-12 px-6 text-sm gap-2",
  lg: "h-14 px-7 text-[15px] gap-2.5",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

function classes(variant: Variant, size: Size, className = "") {
  return `group inline-flex shrink-0 items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;
}

function Arrow() {
  return (
    <ArrowUpRight
      aria-hidden
      className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  children,
  ...rest
}: ButtonProps & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link href={href} className={classes(variant, size, className)} {...rest}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  children,
  ...rest
}: ButtonProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-semibold tracking-tight underline-offset-4 hover:underline ${className}`}
    >
      {children}
      <Arrow />
    </Link>
  );
}

export function SectionTag({
  n,
  label,
  dark = false,
  className = "",
}: {
  n?: string;
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`eyebrow flex items-center gap-4 ${className}`}>
      {n ? (
        <>
          <span className="font-semibold text-brand">{n}</span>
          <span className={`h-px w-12 ${dark ? "bg-white/20" : "bg-ink/20"}`} />
        </>
      ) : (
        <span className="size-2 rounded-full bg-brand animate-pulse-dot" />
      )}
      <span className={dark ? "text-white/60" : "text-muted"}>{label}</span>
    </div>
  );
}

export function Chip({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[12.5px] ${
        dark ? "border-white/15 text-white/75" : "border-ink/12 bg-white/60 text-ink/75"
      }`}
    >
      {children}
    </span>
  );
}

export function SocialIcon({ name, className = "size-4" }: { name: string; className?: string }) {
  if (name === "instagram")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
      </svg>
    );
  if (name === "linkedin")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M6.5 8.5h-3V20h3V8.5ZM5 3.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM20.5 13.3c0-3-1.6-4.9-4.2-4.9-1.6 0-2.6.9-3 1.6V8.5h-3V20h3v-6c0-1.5.6-2.8 2.2-2.8 1.5 0 2 1.2 2 2.9V20h3v-6.7Z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.1v3h2.5V21h2.9Z" />
    </svg>
  );
}
