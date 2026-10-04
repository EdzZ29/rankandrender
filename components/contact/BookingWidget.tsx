"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, CircleCheck, Clock, LoaderCircle } from "lucide-react";
import { Button } from "../ui";

// Every half hour, around the clock.
const SLOTS = Array.from({ length: 48 }, (_, i) => `${String(Math.floor(i / 2)).padStart(2, "0")}:${i % 2 ? "30" : "00"}`);
const MONTHS_AHEAD = 12;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const subscribe = () => () => {};

const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const parseIso = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};

/** Monday-first month grid; `null` pads the days before the 1st. */
function monthCells(year: number, month: number) {
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const count = new Date(year, month + 1, 0).getDate();
  return [
    ...Array.from({ length: offset }, () => null),
    ...Array.from({ length: count }, (_, i) => new Date(year, month, i + 1)),
  ];
}

export function BookingWidget() {
  // Dates depend on the visitor's clock and time zone, so only render them in the browser.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return mounted ? d : null;
  }, [mounted]);

  const [offset, setOffset] = useState(0); // months from the current one
  const [date, setDate] = useState<string | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const slotsRef = useRef<HTMLDivElement>(null);

  const view = today ? new Date(today.getFullYear(), today.getMonth() + offset, 1) : null;
  const lastDay = today ? new Date(today.getFullYear(), today.getMonth() + MONTHS_AHEAD + 1, 0) : null;
  const cells = view ? monthCells(view.getFullYear(), view.getMonth()) : [];
  const weekdays = useMemo(
    () =>
      mounted
        ? Array.from({ length: 7 }, (_, i) => new Date(2024, 0, 1 + i).toLocaleDateString(undefined, { weekday: "short" }))
        : [],
    [mounted],
  );

  const selected = date ? parseIso(date) : null;
  const isToday = !!(selected && today && selected.getTime() === today.getTime());
  const isPast = (s: string) => {
    if (!isToday) return false;
    const [h, m] = s.split(":").map(Number);
    const now = new Date();
    return h * 60 + m <= now.getHours() * 60 + now.getMinutes();
  };
  const label = selected
    ? selected.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    : "";

  // Start the time list at business hours; earlier and later times are a scroll away.
  useEffect(() => {
    const box = slotsRef.current;
    const nine = box?.querySelector<HTMLElement>('[data-slot="09:00"]');
    if (box && nine) box.scrollTop = nine.offsetTop - 4;
  }, [mounted, status]);

  function pickDate(d: Date) {
    setDate(iso(d));
    setError("");
    if (slot && d.getTime() === today?.getTime()) {
      const [h, m] = slot.split(":").map(Number);
      const now = new Date();
      if (h * 60 + m <= now.getHours() * 60 + now.getMinutes()) setSlot(null);
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!date) return setError("Pick a day that suits you.");
    if (!slot) return setError("Choose a time that suits you.");
    if (!name.trim()) return setError("Please enter your name.");
    if (!EMAIL.test(email.trim())) return setError("Please enter a valid email address.");
    const startsAt = new Date(`${date}T${slot}:00`);
    if (startsAt.getTime() <= Date.now()) return setError("That time has already passed. Please choose another.");
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
          date,
          time: slot,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          startsAt: startsAt.toISOString(),
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

  const navClass =
    "grid size-9 place-items-center rounded-full border border-white/10 text-white/75 transition hover:border-white/40 hover:text-white disabled:pointer-events-none disabled:opacity-30";

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
          <CalendarDays className="size-4 text-brand" /> Pick a day
        </div>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Previous month" onClick={() => setOffset((o) => o - 1)} disabled={offset === 0} className={navClass}>
            <ChevronLeft className="size-4" />
          </button>
          <span aria-live="polite" className="min-w-[8.5rem] text-center text-sm font-semibold text-white">
            {view?.toLocaleDateString(undefined, { month: "long", year: "numeric" })}
          </span>
          <button
            type="button"
            aria-label="Next month"
            onClick={() => setOffset((o) => o + 1)}
            disabled={offset === MONTHS_AHEAD}
            className={navClass}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {mounted && today && lastDay ? (
        <div className="mt-4 grid grid-cols-7 gap-1">
          {weekdays.map((w) => (
            <span key={w} className="pb-1 text-center text-[11px] uppercase tracking-wider text-white/45">
              {w}
            </span>
          ))}
          {cells.map((d, i) => {
            if (!d) return <span key={`pad-${i}`} />;
            const key = iso(d);
            const disabled = d < today || d > lastDay;
            const active = key === date;
            return (
              <button
                key={key}
                type="button"
                disabled={disabled}
                aria-pressed={active}
                aria-label={d.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })}
                onClick={() => pickDate(d)}
                className={`relative aspect-square rounded-xl text-sm font-semibold transition ${
                  active
                    ? "bg-brand text-white"
                    : disabled
                      ? "text-white/20"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {d.getDate()}
                {d.getTime() === today.getTime() && !active && (
                  <span className="absolute bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-brand" />
                )}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mt-4 h-[260px] animate-pulse rounded-2xl bg-white/5" />
      )}

      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white/80">
        <Clock className="size-4 text-brand" /> Choose a time (your local time)
      </div>
      <div ref={slotsRef} className="relative mt-3 grid max-h-[156px] grid-cols-4 gap-2 overflow-y-auto pr-1">
        {SLOTS.map((s) => {
          const past = isPast(s);
          return (
            <button
              key={s}
              type="button"
              data-slot={s}
              disabled={past}
              aria-pressed={slot === s}
              onClick={() => {
                setSlot(s);
                setError("");
              }}
              className={`rounded-xl border py-2.5 text-sm font-semibold transition ${
                slot === s
                  ? "border-brand bg-brand text-white"
                  : past
                    ? "border-white/5 text-white/20"
                    : "border-white/10 text-white/75 hover:border-white/40 hover:text-white"
              }`}
            >
              {s}
            </button>
          );
        })}
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
          placeholder="yourname@gmail.com"
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
