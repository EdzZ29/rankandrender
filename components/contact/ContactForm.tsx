"use client";

import { useState } from "react";
import { ChevronDown, CircleCheck, LoaderCircle } from "lucide-react";
import { industries, plans, serviceOptions } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "../ui";

export type ContactDefaults = {
  service?: string;
  industry?: string;
  plan?: string;
  email?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm({ defaults }: { defaults: ContactDefaults }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [sentName, setSentName] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    if (!EMAIL.test(data.email?.trim() ?? "")) next.email = "Please enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ type: "audit", ...data }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        if (json.errors) setErrors(json.errors);
        setServerError(json.error ?? "Please check the highlighted fields.");
        setStatus("error");
        return;
      }
      setSentName(data.name.trim().split(" ")[0]);
      setStatus("success");
      form.reset();
    } catch {
      setServerError(`Something went wrong. Please try again or email ${site.email}.`);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="animate-fade-up py-6 text-center sm:py-12">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-soft text-brand">
          <CircleCheck className="size-8" />
        </span>
        <h3 className="display mt-6 text-4xl">Thanks, {sentName}.</h3>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          Your audit request is in. We’ll review your digital presence and get back to you shortly with what we
          found.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold transition hover:bg-ink hover:text-white"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field label="Name" name="name" required placeholder="Your name" autoComplete="name" error={errors.name} />
      <Field label="Business name" name="business" placeholder="Your business" autoComplete="organization" />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        placeholder="yourname@gmail.com"
        autoComplete="email"
        defaultValue={defaults.email}
        error={errors.email}
      />
      <Field label="Phone" name="phone" type="tel" placeholder="+61 ..." autoComplete="tel" />
      <Select label="What do you need help with?" name="service" options={serviceOptions} defaultValue={defaults.service} />
      <Select
        label="Industry"
        name="industry"
        options={["Select your industry", ...industries.map((i) => i.name), "Other"]}
        defaultValue={defaults.industry}
      />
      <Select
        label="Plan you’re interested in"
        name="plan"
        options={["No preference", ...plans.map((p) => p.name)]}
        defaultValue={defaults.plan}
        className="sm:col-span-2"
      />
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us a little about your business and what you’re trying to achieve."
          className="mt-2 w-full resize-y rounded-2xl border border-ink/10 bg-paper px-4 py-3.5 text-[15px] outline-none transition placeholder:text-ink/35 focus:border-brand/60 focus:bg-white focus:ring-4 focus:ring-brand/10"
        />
      </div>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>
          Leave this empty
          <input type="text" name="company_site" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {serverError && (
        <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
          {serverError}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Free. No obligation. No hard sell.</p>
        <Button type="submit" size="lg" disabled={status === "submitting"} arrow={status !== "submitting"}>
          {status === "submitting" ? (
            <>
              <LoaderCircle className="size-4 animate-spin" /> Sending
            </>
          ) : (
            "Request my free audit"
          )}
        </Button>
      </div>
    </form>
  );
}

const inputClass =
  "mt-2 h-13 w-full rounded-2xl border bg-paper px-4 text-[15px] outline-none transition placeholder:text-ink/35 focus:bg-white focus:ring-4";

function Field({
  label,
  name,
  required,
  error,
  className = "",
  ...rest
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-semibold">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${inputClass} ${
          error ? "border-red-400 focus:ring-red-100" : "border-ink/10 focus:border-brand/60 focus:ring-brand/10"
        }`}
        {...rest}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({
  label,
  name,
  options,
  defaultValue,
  className = "",
}: {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          defaultValue={defaultValue && options.includes(defaultValue) ? defaultValue : options[0]}
          className={`${inputClass} appearance-none border-ink/10 pr-10 focus:border-brand/60 focus:ring-brand/10`}
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 mt-1 size-4 -translate-y-1/2 text-muted" />
      </div>
    </div>
  );
}
