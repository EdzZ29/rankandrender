import { NextResponse } from "next/server";
import { mailConfigured, sendSubmissionEmail, type Submission } from "@/lib/mail";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const TIME = /^([01]\d|2[0-3]):[0-5]\d$/;

/**
 * Receives audit requests and strategy-call bookings.
 * Set RESEND_API_KEY to email each submission to the team (see lib/mail.ts).
 * Set CONTACT_WEBHOOK_URL (Zapier, Make, Slack, n8n, a CRM, etc.) to also forward each submission as JSON.
 * With neither, submissions are logged on the server.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const str = (key: string, max = 300) =>
    typeof body[key] === "string" ? (body[key] as string).trim().slice(0, max) : "";

  // Honeypot: bots fill hidden fields, people don't.
  if (str("company_site")) return NextResponse.json({ ok: true });

  const type = str("type") === "call" ? "call" : "audit";
  const startsAt = new Date(str("startsAt", 40));
  const data: Submission = {
    type,
    name: str("name", 120),
    email: str("email", 200),
    business: str("business", 160),
    phone: str("phone", 40),
    service: str("service", 120),
    industry: str("industry", 120),
    plan: str("plan", 60),
    message: str("message", 5000),
    date: str("date", 40),
    time: str("time", 20),
    timezone: str("timezone", 80),
    startsAt: Number.isNaN(startsAt.getTime()) ? "" : startsAt.toISOString(),
    submittedAt: new Date().toISOString(),
  };

  const errors: Record<string, string> = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (!EMAIL.test(data.email)) errors.email = "Please enter a valid email address.";
  if (type === "call" && (!DATE.test(data.date) || !TIME.test(data.time))) errors.time = "Please choose a day and time.";
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const deliveries: Promise<unknown>[] = [];
  if (mailConfigured()) deliveries.push(sendSubmissionEmail(data));
  if (webhook) {
    deliveries.push(
      fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
      }),
    );
  }

  if (!deliveries.length) {
    console.info("[contact] New submission", data);
    return NextResponse.json({ ok: true });
  }

  const results = await Promise.allSettled(deliveries);
  const failed = results.filter((r): r is PromiseRejectedResult => r.status === "rejected");
  failed.forEach((r) => console.error("[contact] Failed to deliver submission", r.reason));
  // One working channel is enough; only fail when nothing got through.
  if (failed.length === results.length) {
    return NextResponse.json(
      { ok: false, error: "We couldn’t send your request just now. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
