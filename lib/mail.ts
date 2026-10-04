import { site } from "@/lib/site";

export type Submission = {
  type: "audit" | "call";
  name: string;
  email: string;
  business: string;
  phone: string;
  service: string;
  industry: string;
  plan: string;
  message: string;
  date: string;
  time: string;
  timezone: string;
  startsAt: string;
  submittedAt: string;
};

export const mailConfigured = () => !!process.env.RESEND_API_KEY;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Calendar invite for a requested call, so it can be added to the team's calendar in one click. */
function invite(data: Submission) {
  const start = new Date(data.startsAt);
  const end = new Date(start.getTime() + 30 * 60_000);
  const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const text = (s: string) => s.replace(/[\\;,]/g, (c) => `\\${c}`).replace(/\r?\n/g, "\\n");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Rank & Render//Booking//EN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${stamp(start)}-${data.email}@rankandrender.com`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${text(`Strategy call with ${data.name}`)}`,
    `DESCRIPTION:${text(`Free strategy call requested via ${site.url}\nEmail: ${data.email}\nTheir time zone: ${data.timezone}`)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/**
 * Emails a submission to the team via Resend (https://resend.com).
 * RESEND_API_KEY      required
 * CONTACT_TO_EMAIL    defaults to site.email
 * CONTACT_FROM_EMAIL  a sender on a domain verified in Resend, e.g. "Rank & Render <bookings@rankandrender.com>"
 */
export async function sendSubmissionEmail(data: Submission) {
  const isCall = data.type === "call";
  const when = isCall ? `${data.date} at ${data.time} (${data.timezone || "time zone unknown"})` : "";
  const subject = isCall
    ? `Strategy call request: ${data.name}, ${data.date} ${data.time}`
    : `Free audit request: ${data.name}${data.business ? `, ${data.business}` : ""}`;

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Requested time", when],
    ["Business", data.business],
    ["Phone", data.phone],
    ["Service", data.service],
    ["Industry", data.industry],
    ["Plan", data.plan],
    ["Message", data.message],
  ];
  const filled = rows.filter(([, v]) => v);

  const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#0b1117">
<h2 style="margin:0 0 16px">${isCall ? "New strategy call request" : "New free audit request"}</h2>
<table cellpadding="6" style="border-collapse:collapse">${filled
    .map(
      ([k, v]) =>
        `<tr><td style="vertical-align:top;color:#5b6570;white-space:nowrap"><strong>${k}</strong></td><td style="white-space:pre-wrap">${escape(v)}</td></tr>`,
    )
    .join("")}</table>
<p style="margin-top:16px;color:#5b6570;font-size:13px">Reply to this email to respond to ${escape(data.name)} directly.</p>
</div>`;
  const textBody = filled.map(([k, v]) => `${k}: ${v}`).join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Rank & Render <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || site.email],
      reply_to: data.email,
      subject,
      html,
      text: textBody,
      attachments:
        isCall && data.startsAt
          ? [{ filename: "strategy-call.ics", content: Buffer.from(invite(data)).toString("base64") }]
          : undefined,
    }),
  });
  if (!res.ok) throw new Error(`Resend responded with ${res.status}: ${await res.text()}`);
}
