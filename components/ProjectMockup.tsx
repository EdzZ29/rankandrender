import Image from "next/image";
import type { MockTheme } from "@/lib/projects";

function Pattern({ type, accent }: { type: MockTheme["pattern"]; accent: string }) {
  if (type === "road")
    return (
      <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <path d="M250 200 C 280 140, 330 110, 420 90" stroke="rgb(255 255 255 / 0.08)" strokeWidth="70" fill="none" />
        <path d="M250 200 C 280 140, 330 110, 420 90" stroke={accent} strokeOpacity="0.8" strokeWidth="3" strokeDasharray="14 12" fill="none" />
        <circle cx="330" cy="40" r="60" fill={accent} fillOpacity="0.08" />
      </svg>
    );
  if (type === "blueprint")
    return (
      <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id="bp-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M16 0H0V16" fill="none" stroke="rgb(255 255 255 / 0.06)" />
          </pattern>
        </defs>
        <rect width="400" height="200" fill="url(#bp-grid)" />
        <g fill="none" stroke={accent} strokeOpacity="0.55" strokeWidth="1.5">
          <rect x="250" y="30" width="120" height="120" />
          <path d="M250 90h70v60M320 30v40M290 90v-60" />
          <path d="M270 160h80" strokeDasharray="4 4" />
        </g>
      </svg>
    );
  if (type === "fan")
    return (
      <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <circle cx="330" cy="80" r="90" fill={accent} fillOpacity="0.06" />
        <g transform="translate(330 80)" fill="#fff" fillOpacity="0.14">
          {[0, 120, 240].map((r) => (
            <path key={r} transform={`rotate(${r})`} d="M0 -8 C 20 -14, 70 -12, 78 0 C 70 12, 20 14, 0 8Z" />
          ))}
          <circle r="10" fill={accent} fillOpacity="0.8" />
        </g>
      </svg>
    );
  return (
    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <circle cx="320" cy="50" r="28" fill={accent} fillOpacity="0.7" />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M0 ${120 + i * 22} Q 50 ${108 + i * 22} 100 ${120 + i * 22} T 200 ${120 + i * 22} T 300 ${120 + i * 22} T 400 ${120 + i * 22} V200 H0Z`}
          fill="#fff"
          fillOpacity={0.05 + i * 0.03}
        />
      ))}
    </svg>
  );
}

/** A real screenshot in the same browser frame as the illustrated mockups. */
function Screenshot({ theme, image, url }: { theme: MockTheme; image: string; url?: string }) {
  return (
    <div className="@container relative aspect-[4/3] overflow-hidden rounded-3xl bg-paper-2">
      <div
        className="absolute inset-0 opacity-90"
        style={{ background: `radial-gradient(circle at 80% 0%, ${theme.accent}55, transparent 60%)` }}
      />
      <div className="absolute inset-x-[7cqw] bottom-0 top-[13cqw] flex flex-col overflow-hidden rounded-t-[3cqw] bg-white shadow-[0_30px_60px_-30px_rgb(11_17_23/0.5)] transition-transform duration-700 ease-out-expo group-hover:-translate-y-[2cqw]">
        <div className="flex items-center gap-[1.2cqw] border-b border-ink/5 px-[3cqw] py-[2cqw]">
          <span className="size-[1.6cqw] rounded-full bg-ink/15" />
          <span className="size-[1.6cqw] rounded-full bg-ink/15" />
          <span className="size-[1.6cqw] rounded-full" style={{ background: theme.from }} />
          {url && (
            <span className="mx-auto rounded-full bg-paper px-[3cqw] py-[0.6cqw] text-[1.7cqw] text-ink/50">
              {new URL(url).hostname.replace(/^www\./, "")}
            </span>
          )}
        </div>
        <div className="relative flex-1">
          <Image
            src={image}
            alt={`${theme.brand} website homepage`}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export function ProjectMockup({ theme, image, url }: { theme: MockTheme; image?: string; url?: string }) {
  if (image) return <Screenshot theme={theme} image={image} url={url} />;
  return (
    <div
      aria-hidden
      className="@container relative aspect-[4/3] overflow-hidden rounded-3xl bg-paper-2"
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{ background: `radial-gradient(circle at 80% 0%, ${theme.accent}33, transparent 60%)` }}
      />
      <div className="absolute inset-x-[7cqw] bottom-0 top-[13cqw] overflow-hidden rounded-t-[3cqw] bg-white shadow-[0_30px_60px_-30px_rgb(11_17_23/0.5)] transition-transform duration-700 ease-out-expo group-hover:-translate-y-[2cqw]">
        <div className="flex items-center gap-[1.2cqw] border-b border-ink/5 px-[3cqw] py-[2cqw]">
          <span className="size-[1.6cqw] rounded-full bg-ink/15" />
          <span className="size-[1.6cqw] rounded-full bg-ink/15" />
          <span className="size-[1.6cqw] rounded-full" style={{ background: theme.accent }} />
        </div>
        <div
          className="relative overflow-hidden px-[5cqw] pb-[6cqw] pt-[3.5cqw] text-white"
          style={{ background: `linear-gradient(135deg, ${theme.from}, ${theme.to})` }}
        >
          <Pattern type={theme.pattern} accent={theme.accent} />
          <div className="relative flex items-center justify-between">
            <span className="font-display text-[2.8cqw] font-bold tracking-tight">{theme.brand}</span>
            <span className="flex gap-[2cqw] text-[1.8cqw] text-white/60">
              <span>About</span>
              <span>Services</span>
              <span>Contact</span>
            </span>
          </div>
          <p className="relative mt-[6cqw] max-w-[62%] font-display text-[6.4cqw] font-bold leading-[0.95] tracking-tight">
            {theme.headline}
          </p>
          <p className="relative mt-[2cqw] max-w-[55%] text-[2.1cqw] text-white/70">{theme.sub}</p>
          <span
            className="relative mt-[3.5cqw] inline-block rounded-full px-[3cqw] py-[1.4cqw] text-[2cqw] font-semibold text-ink"
            style={{ background: theme.accent }}
          >
            {theme.cta}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-[2.4cqw] p-[4cqw]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-[2cqw] bg-paper p-[2.4cqw]">
              <span className="block size-[3cqw] rounded-full" style={{ background: theme.accent }} />
              <span className="mt-[2cqw] block h-[1.2cqw] w-[80%] rounded-full bg-ink/20" />
              <span className="mt-[1cqw] block h-[1.2cqw] w-[55%] rounded-full bg-ink/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
