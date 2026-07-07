# Brickable

Custom LEGO&reg; mezuzah kits — online shop plus a "request a custom Brickable" flow for
families and local businesses. Built with Next.js (App Router), Tailwind CSS, Prisma/SQLite, and
Stripe Checkout.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in real values, see below
npx prisma migrate dev
npm run dev
```

Visit http://localhost:3000.

## Environment variables

See `.env.example` for the full list:

- `DATABASE_URL` — SQLite file for local dev. Swap for a hosted Postgres URL before deploying,
  since SQLite files don't persist on most serverless hosts.
- `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` — from your [Stripe dashboard](https://dashboard.stripe.com/test/apikeys).
  Use test keys until you're ready to take real payments. To test the webhook locally, run
  `stripe listen --forward-to localhost:3000/api/webhooks/stripe`.
- `NEXT_PUBLIC_SITE_URL` — used to build the Stripe Checkout success/cancel redirect URLs. Set
  this to your real deployed URL in production.
- `ADMIN_PASSWORD` / `ADMIN_SESSION_SECRET` — protects `/admin`, where custom requests and orders
  show up.

## What's here

- `/` — homepage
- `/shop`, `/shop/[slug]` — product catalog and detail pages with Stripe Checkout
- `/request` — request a custom Brickable (business or personal), with a showcase of past
  custom builds
- `/about` — about + contact info
- `/admin` — password-gated dashboard for custom requests and orders

## Known gaps / next steps

- Product photos, the Brickable logo, and packaging art are still placeholders — swap in real
  image files under `public/` and update `src/lib/products.ts` and the relevant components once
  you have final assets.
- Stripe is wired up but needs real API keys (and a webhook endpoint configured in the Stripe
  dashboard) before checkout will work end-to-end.
- No email notifications yet for new custom requests — currently they only show up in `/admin`.
