# Rank & Render

Marketing site for Rank & Render, built with Next.js 16, React 19 and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

- `lib/site.ts`: contact details, social links and navigation
- `lib/content.ts`: services, industries, FAQs, pricing plans and other page copy
- `lib/projects.ts`: case studies shown on `/work`
- `lib/posts.ts`: blog articles shown on `/blog`
- `components/`: shared UI; `components/home/` holds the interactive home page sections

## Forms

The audit form and strategy-call booking on `/contact` post to `app/api/contact/route.ts`, which validates
each submission. Set `CONTACT_WEBHOOK_URL` (Zapier, Make, n8n, Slack, a CRM, etc.) to forward submissions
as JSON. Without it, submissions are only logged on the server.

## Troubleshooting

If `next dev` reports "Turbopack is not supported on this platform", the native SWC binary is incomplete.
Reinstall it:

```bash
rm -rf node_modules/@next/swc-win32-x64-msvc && npm install
```
