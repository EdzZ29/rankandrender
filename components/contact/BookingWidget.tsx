"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { CalendarDays, CircleCheck, LoaderCircle } from "lucide-react";
import { Button } from "../ui";

const SLOTS = ["09:00", "10:00", "11:30", "13:00", "14:30", "16:00"];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const subscribe = () => () => {};

function nextWeekdays(count: number) {
  const days: Date[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) days.push(new Date(d));
  }
  return days;
}

const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export function BookingWidget() {
  // Dates depend on the visitor's clock and time zone, so only render them in the browser.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const days = useMemo(() => (mounted ? nextWeekdays(10) : []), [mounted]);

  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const selected = days[day];
  const label = selected
    ? selected.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })
    : "";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!slot) return setError("Choose a time that suits you.");
    if (!name.trim()) return setError("Please enter your name.");
    if (!EMAIL.test(email.trim())) return setError("Please enter a valid email address.");
    setError("");
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type: "call",
          name,
          email,
          date: iso(selected),
          time: slot,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setError(json.error ?? Object.values(json.errors ?? {})[0] ?? "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="animate-fade-up rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand/20 text-brand">
          <CircleCheck className="size-7" />
        </span>
        <p className="mt-5 font-display text-2xl font-bold tracking-tight">Call requested.</p>
        <p className="mt-2 text-white/65">
          {label} at {slot}, your time. We’ll confirm by email with a calendar invite.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setSlot(null);
          }}
          className="mt-6 text-sm font-semibold text-brand hover:underline"
        >
          Choose another time
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
        <CalendarDays className="size-4 text-brand" /> Pick a day
      </div>
      <div className="no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:px-6">
        {mounted
          ? days.map((d, i) => (
              <button
                key={iso(d)}
                type="button"
                aria-pressed={day === i}
                onClick={() => setDay(i)}
                className={`flex w-16 shrink-0 flex-col items-center rounded-2xl border py-3 transition ${
                  day === i
                    ? "border-brand bg-brand text-white"
                    : "border-white/10 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                <span className="text-[11px] uppercase tracking-wider opacity-75">
                  {d.toLocaleDateString(undefined, { weekday: "short" })}
                </span>
                <span className="mt-1 font-display text-xl font-bold">{d.getDate()}</span>
                <span className="text-[11px] opacity-60">{d.toLocaleDateString(undefined, { month: "short" })}</span>
              </button>
            ))
          : Array.from({ length: 6 }, (_, i) => (
              <span key={i} className="h-[84px] w-16 shrink-0 animate-pulse rounded-2xl bg-white/5" />
            ))}
      </div>

      <p className="mt-5 text-sm font-semibold text-white/80">Choose a time (your local time)</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {SLOTS.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={slot === s}
            onClick={() => setSlot(s)}
            className={`rounded-xl border py-2.5 text-sm font-semibold transition ${
              slot === s
                ? "border-brand bg-brand text-white"
                : "border-white/10 text-white/75 hover:border-white/40 hover:text-white"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <label className="sr-only" htmlFor="call-name">
          Your name
        </label>
        <input
          id="call-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
          className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-brand/60"
        />
        <label className="sr-only" htmlFor="call-email">
          Your email
        </label>
        <input
          id="call-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@business.com"
          autoComplete="email"
          className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-brand/60"
        />
      </div>

      {error && (
        <p role="alert" className="mt-3 text-sm text-[#ffb59a]">
          {error}
        </p>
      )}

      <Button type="submit" className="mt-5 w-full" disabled={status === "submitting" || !mounted} arrow={status !== "submitting"}>
        {status === "submitting" ? (
          <>
            <LoaderCircle className="size-4 animate-spin" /> Requesting
          </>
        ) : slot && selected ? (
          `Request ${selected.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" })} at ${slot}`
        ) : (
          "Request a free strategy call"
        )}
      </Button>
    </form>
  );
}
