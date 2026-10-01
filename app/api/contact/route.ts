import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Receives audit requests and strategy-call bookings.
 * Set CONTACT_WEBHOOK_URL (Zapier, Make, Slack, n8n, a CRM, etc.) to forward each submission as JSON.
 * Without it, submissions are logged on the server.
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
  const data = {
    type,
    name: str("name", 120),
    email: str("email", 200),
    business: str("business", 160),
    phone: str("phone", 40),
    website: str("website", 300),
    service: str("service", 120),
    industry: str("industry", 120),
    plan: str("plan", 60),
    message: str("message", 5000),
    date: str("date", 40),
    time: str("time", 20),
    timezone: str("timezone", 80),
    submittedAt: new Date().toISOString(),
  };

  const errors: Record<string, string> = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (!EMAIL.test(data.email)) errors.email = "Please enter a valid email address.";
  if (type === "call" && (!data.date || !data.time)) errors.time = "Please choose a day and time.";
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
    } catch (err) {
      console.error("[contact] Failed to forward submission", err);
      return NextResponse.json(
        { ok: false, error: "We couldn’t send your request just now. Please email us directly." },
        { status: 502 },
      );
    }
  } else {
    console.info("[contact] New submission", data);
  }

  return NextResponse.json({ ok: true });
}
