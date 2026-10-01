import Link from "next/link";

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="11" fill="#FF5A1F" />
      <circle cx="10" cy="10" r="1.7" fill="#fff" opacity="0.95" />
      <circle cx="15.2" cy="10" r="1.7" fill="#fff" opacity="0.7" />
      <circle cx="20.4" cy="10" r="1.7" fill="#fff" opacity="0.45" />
      <path
        d="M9 29.5 16.5 22l5 4 9.2-9.6"
        fill="none"
        stroke="#fff"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.6 15.6h6.5v6.5"
        fill="none"
        stroke="#fff"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Rank & Render home"
      className={`flex items-center gap-2.5 ${className}`}
    >
      <LogoMark />
      <span className="font-display text-[15px] font-bold leading-[0.92] tracking-tight">
        Rank <span className="text-brand">&amp;</span>
        <br />
        Render
      </span>
    </Link>
  );
}
