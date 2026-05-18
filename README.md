# Golden Bagel Cafe

## 1. Project Overview

Golden Bagel Cafe is a production-ready website and ordering foundation for a bagel shop and cafe in El Cajon, California.

The app is built for Vercel-style Next.js hosting: pages, API routes, hosted checkout creation, and form handlers live in one Next.js project.

The backend foundation still keeps reusable handler logic under `serverless/`, but Vercel API routes call it directly through `/api/...`.

## 2. Features

- Mobile-first homepage
- Menu browsing and everyday ordering
- Hosted Clover online ordering link support
- Cart with localStorage persistence
- Catering and big-party ordering survey
- Job applications
- Contact form
- Newsletter signup
- Google Maps embed with fallback
- Local SEO and structured data
- Next.js API route foundation
- Clover adapter foundation

## 3. Tech Stack

Frontend:
- Next.js
- TypeScript
- Tailwind CSS
- Next.js App Router

Backend:
- Vercel Functions / Next.js Route Handlers
- Clover API
- SMTP / SES-ready email helper

Deployment:
- Vercel

## 4. Local Development

```bash
npm install
npm run dev
```

Serverless typecheck:

```bash
npm install --prefix serverless
npm run build --prefix serverless
```

## 5. Production Build

```bash
npm run sync:menu
npm run build
```

The app builds to `.next/` for Vercel. `vercel.json` runs menu sync before the build.

## 6. Environment Variables

Root `.env.example`:

```env
# Public browser settings
NEXT_PUBLIC_SITE_URL=https://goldenbagelcafe.com
NEXT_PUBLIC_API_BASE_URL=
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY=
NEXT_PUBLIC_CLOVER_ONLINE_ORDERING_URL=https://golden-bagel-el-cajon.cloveronline.com/
NEXT_PUBLIC_ENABLE_ORDERING=true
NEXT_PUBLIC_MOCK_ORDERING=false

# Server-only settings for Vercel API routes. Do not prefix these with NEXT_PUBLIC.
ALLOWED_ORIGIN=https://goldenbagelcafe.com
MOCK_CLOVER=false
CLOVER_ENV=production
CLOVER_MERCHANT_ID=6EE1NRRRY8KS1
CLOVER_ECOMMERCE_PRIVATE_KEY=
CLOVER_HOSTED_CHECKOUT_TAX_NAME=Sales tax
CLOVER_HOSTED_CHECKOUT_TAX_RATE=
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
NOTIFY_TO=
USE_SES=false
AWS_REGION=us-west-2
```

`NEXT_PUBLIC_CLOVER_ONLINE_ORDERING_URL` should be the hosted online ordering page URL from the Clover Dashboard. The menu sync uses this URL as its source of truth, and variable-price items can still link there until modifiers are fully mapped into the local cart.

## 7. GitHub Setup

```bash
git init
git branch -M main
git remote add origin https://github.com/AnthonyBarbaro/goldenbagel.git
git add .
git commit -m "chore: scaffold Golden Bagel static site"
git push -u origin main
```

Safe origin reset:

```bash
git remote set-url origin https://github.com/AnthonyBarbaro/goldenbagel.git
```

## 8. Vercel Environment Variables

Configure these in Vercel Project Settings. Do not commit real secret values.

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY`
- `NEXT_PUBLIC_CLOVER_ONLINE_ORDERING_URL`
- `NEXT_PUBLIC_MOCK_ORDERING`
- `ALLOWED_ORIGIN`
- `MOCK_CLOVER`
- `CLOVER_ENV`
- `CLOVER_MERCHANT_ID`
- `CLOVER_ECOMMERCE_PRIVATE_KEY`
- `CLOVER_HOSTED_CHECKOUT_TAX_NAME`
- `CLOVER_HOSTED_CHECKOUT_TAX_RATE`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `NOTIFY_TO`

Leave `NEXT_PUBLIC_API_BASE_URL` blank on Vercel so the frontend uses same-origin `/api`.

## 9. Vercel Deployment

Connect the GitHub repo to Vercel and use the default Next.js settings. The included `vercel.json` runs:

```text
npm run sync:menu && npm run build
```

The app uses Next.js API routes:

- `/api/orders/create`
- `/api/contact`
- `/api/newsletter`
- `/api/party-request`
- `/api/job-application`
- `/api/catering`
- `/api/clover-webhook`

## 11. Clover Integration

Recommended hosted checkout path:

- Keep `NEXT_PUBLIC_CLOVER_ONLINE_ORDERING_URL` set so menu sync can mirror the live online menu
- Create a Clover Hosted Checkout ecommerce token
- Add the private token as `CLOVER_ECOMMERCE_PRIVATE_KEY` in Vercel
- Set `NEXT_PUBLIC_MOCK_ORDERING=false` and `MOCK_CLOVER=false`
- Add the active sales tax as `CLOVER_HOSTED_CHECKOUT_TAX_RATE`

The Golden Bagel site owns the cart, then `/api/orders/create` creates a Clover Hosted Checkout session and redirects customers to Clover's secure payment page.

Current mode:

```env
NEXT_PUBLIC_MOCK_ORDERING=false
MOCK_CLOVER=false
```

Before first live payment test:

- Confirm `CLOVER_MERCHANT_ID`
- Confirm `CLOVER_ECOMMERCE_PRIVATE_KEY`
- Confirm `CLOVER_HOSTED_CHECKOUT_TAX_RATE`
- Never expose Clover secrets in the frontend

## 12. Content Editing

Business info:

```text
src/config/site.ts
```

Menu:

```text
src/data/menu.ts
```

Reviews:

```text
src/data/reviews.ts
```

Gallery:

```text
public/goldenbagels/gallery/
src/data/gallery.ts
```

Images:

```text
public/goldenbagels/
```

Logo:

```text
public/goldenbagels/logo.png
```

## 13. Deployment Checklist

- `npm install` works
- `npm run sync:menu` works
- `npm run build` works
- Vercel project connected to GitHub
- Vercel environment variables added
- `/api/orders/create` responds
- Clover mock mode works
- Forms work
- No secrets committed
- Sitemap exists
- Robots exists
- Mobile nav works

## 14. Security Notes

- No card data stored
- No Clover secrets in the browser
- Strict CORS
- Honeypot fields
- Server-side validation
- Rate limiting
- Sanitized logs and email payloads
- Vercel server-side environment variables for secrets

## 15. Manual Setup Steps

1. Clone repo
2. Install dependencies
3. Add `.env`
4. Run local dev
5. Run menu sync
6. Build
7. Connect repo to Vercel
8. Add Vercel environment variables
9. Deploy
10. Verify live site and `/api/orders/create`

## Build and Deploy Commands

```bash
npm run sync:menu
npm run build
```

## Final Verification Notes

Verified during implementation:

- `npm install`
- `npm run lint`
- `npm run sync:menu`
- `npm run build`
- `npm run build --prefix serverless`
- `npm audit --omit=dev`
- Next.js API routes are used for forms and checkout
- `.env` files and secrets are ignored while `.env.example` templates are committed
- GitHub remote is connected to `https://github.com/AnthonyBarbaro/goldenbagel.git`

## Repository

Remote:

```text
https://github.com/AnthonyBarbaro/goldenbagel.git
```
