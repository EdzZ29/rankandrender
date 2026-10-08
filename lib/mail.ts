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

const font = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

/**
 * Branded notification email. Table layout and inline styles so it renders the same in Gmail and Outlook;
 * the logo is a PNG (public/email-logo.png) because most mail clients don't display SVG.
 */
function submissionHtml(data: Submission, when: string) {
  const isCall = data.type === "call";
  const first = data.name.split(/\s+/)[0];
  const subtitle = [data.business, data.industry].filter(Boolean).map(escape).join(" &middot; ");
  const replyHref = `mailto:${data.email}?subject=${encodeURIComponent(
    isCall ? "Your strategy call with Rank & Render" : "Your free audit from Rank & Render",
  )}`;
  const preheader = [data.business, data.service, data.plan && `${data.plan} plan`].filter(Boolean).join(" · ");

  const details: [string, string][] = [
    ["Email", `<a href="mailto:${escape(data.email)}" style="color:#0b1117;text-decoration:none">${escape(data.email)}</a>`],
    ["Phone", data.phone && `<a href="tel:${escape(data.phone.replace(/[^\d+]/g, ""))}" style="color:#0b1117;text-decoration:none">${escape(data.phone)}</a>`],
    ["Service", escape(data.service)],
    ["Plan", escape(data.plan)],
  ];
  const detailRows = details
    .filter(([, v]) => v)
    .map(
      ([k, v]) => `<tr>
<td style="padding:14px 0;border-top:1px solid #efebe3;color:#59636e;font-size:13px;line-height:22px;width:110px;vertical-align:top">${k}</td>
<td style="padding:14px 0;border-top:1px solid #efebe3;color:#0b1117;font-size:15px;line-height:22px;vertical-align:top">${v}</td>
</tr>`,
    )
    .join("");

  const timeBlock = when
    ? `<tr><td style="padding:24px 0 0">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffeadf;border-radius:12px">
<tr><td style="padding:16px 20px">
<div style="color:#e2470f;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase">Requested time</div>
<div style="color:#0b1117;font-size:17px;font-weight:600;margin-top:4px">${escape(when)}</div>
<div style="color:#59636e;font-size:13px;margin-top:4px">Calendar invite attached</div>
</td></tr></table>
</td></tr>`
    : "";

  const messageBlock = data.message
    ? `<tr><td style="padding:28px 0 0">
<div style="color:#59636e;font-size:13px;margin-bottom:8px">Message</div>
<div style="background:#f7f5f0;border-left:3px solid #ff5a1f;border-radius:0 10px 10px 0;padding:16px 18px;color:#0b1117;font-size:15px;line-height:1.6;white-space:pre-wrap">${escape(data.message)}</div>
</td></tr>`
    : "";

  const callButton = data.phone
    ? `<td style="padding-left:8px"><a href="tel:${escape(data.phone.replace(/[^\d+]/g, ""))}" style="display:inline-block;border:1px solid #d9d4ca;color:#0b1117;font-size:14px;font-weight:600;text-decoration:none;padding:11px 20px;border-radius:10px">Call</a></td>`
    : "";

  return `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"></head>
<body style="margin:0;padding:0;background:#f7f5f0">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${escape(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f5f0;font-family:${font}">
<tr><td align="center" style="padding:40px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">

<tr><td style="padding:0 4px 20px">
<a href="${site.url}" style="text-decoration:none">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td style="vertical-align:middle"><img src="${site.url}/email-logo.png" width="32" height="32" alt="" style="display:block;border:0;border-radius:9px"></td>
<td style="vertical-align:middle;padding-left:10px;color:#0b1117;font-size:16px;font-weight:700;letter-spacing:-.01em">Rank <span style="color:#ff5a1f">&amp;</span> Render</td>
</tr></table>
</a>
</td></tr>

<tr><td style="background:#ffffff;border:1px solid #ebe7df;border-radius:16px;padding:36px 32px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td>
<div style="color:#e2470f;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase">&#9679;&nbsp; ${isCall ? "New strategy call" : "New free audit request"}</div>
<h1 style="margin:12px 0 0;color:#0b1117;font-size:26px;line-height:1.2;font-weight:700;letter-spacing:-.02em">${escape(data.name)}</h1>
${subtitle ? `<div style="margin-top:6px;color:#59636e;font-size:15px">${subtitle}</div>` : ""}
</td></tr>
${timeBlock}
<tr><td style="padding:24px 0 28px">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td><a href="${escape(replyHref)}" style="display:inline-block;background:#0b1117;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:10px">Reply to ${escape(first)}</a></td>
${callButton}
</tr></table>
</td></tr>
<tr><td><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailRows}</table></td></tr>
${messageBlock}
</table>
</td></tr>

<tr><td align="center" style="padding:24px 16px 0;color:#9aa4ae;font-size:12px;line-height:1.6">
Submitted via <a href="${site.url}/contact" style="color:#9aa4ae">rankandrender.com</a>. Reply to this email to respond to ${escape(first)} directly.
</td></tr>

</table>
</td></tr>
</table>
</body></html>`;
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

  const html = submissionHtml(data, when);
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
