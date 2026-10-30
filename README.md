# Golden Bagel Cafe

## 1. Project Overview

Golden Bagel Cafe is a production-ready website and ordering foundation for a bagel shop and cafe in El Cajon, California.

The app is built for Vercel-style Next.js hosting: pages, API routes, hosted checkout creation, and form handlers live in one Next.js project.

The backend foundation still keeps reusable handler logic under `serverless/`, but Vercel API routes call it directly through `/api/...`.

## 2. Features

- Mobile-first homepage
- Mobile Food, Call, Directions, and Cart shortcuts; Food jumps to the existing menu on the homepage or menu page and opens the menu page elsewhere, Call uses the phone dialer, and Directions opens a Google Maps route in a new tab.
- Menu browsing and everyday ordering
- Hosted Clover online ordering link support
- Live Clover inventory pricing for the order menu and HTML cafe menu board
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
npm run build
```

The app builds to `.next/` for Vercel. `npm run build` runs the Clover online menu sync first through the `prebuild` hook, so every deploy build refreshes `src/data/onlineMenu.generated.ts`.

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
CLOVER_ACCESS_TOKEN=
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

`CLOVER_ACCESS_TOKEN` is the server-only Platform API token used to overlay current Clover item and modifier prices on `/menu/` and `/menu-tv/`. It must have Read Inventory permission. Never prefix it with `NEXT_PUBLIC_` or expose it to browser code. The ecommerce private key remains checkout-only and cannot replace the inventory token.

Manage item and option prices in Clover. The homepage and `/menu/` are pre-rendered without waiting for Clover. Their ordering sections load the shared `/api/menu/` response and the menu interface separately; the homepage waits until the menu approaches the viewport. The public response includes only customer-facing items and is cached for up to 30 seconds, with concurrent requests coalesced. CDN cache lifetime uses the remaining inventory lifetime so caches do not add another 30 seconds of stale pricing. ETags support unchanged-response revalidation. Open menus refresh the data every 30 seconds while visible and when customers return to the tab, preserving search, category, and valid option selections. The header Menu link jumps directly to the existing menu. Checkout independently verifies prices against its own inventory cache before creating payment, and checkout/customer responses are not placed in the public menu cache. Price edits do not require a website rebuild. Saved-menu fallbacks are not cached by the CDN; browsing can continue with a notice while live checkout requires verified prices.

The loading screen uses SVG and CSS to animate cream cheese spreading onto a bagel. It appears during actual loading without an artificial delay, respects reduced-motion preferences, and requires no animation library or image download. Visit `/loading-preview/` to watch the animation continuously. This preview is excluded from search indexing.

The hero keeps a short headline and order button over the video. Watch video opens an unobstructed player with native playback controls on any screen. Phones and reduced-motion visitors see the poster until they choose to watch; desktop background video starts after hydration when the browser is idle. Menu cards use cart actions without subscribing to every cart change, and below-the-fold visit photos load lazily.

Online customization shows required groups first and preselects Plain in Choose Bagel and Toasted in Toast Level (or Style Toast). These choices remain expanded and editable. `serverless/shared/menuOptions.ts` excludes Remove Ingredients - General from both online menus and checkout validation. Product descriptions use the synced description when present, then an existing menu-board description matched by Clover item ID; products without either source need a description added to the menu data.

Customization uses a centered desktop popup with shortcuts to required groups, a live selection summary, and a fixed total and action bar. On mobile, the choices scroll below the shortcuts while the action bar stays visible. When required choices are incomplete, the bottom button takes customers to the next missing group before anything is added to the cart.

Bagel-with-spread items in Golden Deals open a required-choice popup from Add. Customers explicitly choose their bagel type before confirming; Toasted remains preselected. Optional extras are excluded from these quick orders.

Fixed-size bagel groups, such as Choose Bagel 6x and Choose Bagel 13x, use per-flavor quantity controls. The quantities must total the pack size. Cart modifiers store each flavor once with an optional quantity (default 1); checkout validates those quantities against the current Clover group, multiplies per-bagel surcharges, and includes flavor counts in the payment-session notes. Bagel choices show Plain first and Everything second among included flavors, with extra-cost options grouped at the bottom under Extra charge.

Production OAuth v2 access tokens expire and refresh tokens rotate. This site currently accepts an active access token but does not refresh it automatically; use Clover-approved durable token storage and rotation before relying on unattended long-term OAuth sync.

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
- `CLOVER_ACCESS_TOKEN`
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
npm run build
```

The app uses Next.js API routes:

- `/api/orders/create`
- `/api/contact`
- `/api/newsletter`
- `/api/party-request`
- `/api/job-application`
- `/api/catering`
- `/api/clover-webhook`

The live cafe board is available at `/menu-tv/`. It is rendered as responsive HTML, makes a fresh server-side Clover request every five minutes, and falls back to the last generated menu when Clover is unavailable. Because it reads Clover at runtime, deploy this route to Vercel or another Next.js server runtime; a static S3 export cannot provide live pricing.

Use one board URL per in-store TV so the selected menu fills the screen without scrolling:

- TV 1: `/menu-tv/?board=1` — breakfast, Golden Deals, bagel packs, and cream cheese
- TV 2: `/menu-tv/?board=2` — lunch bagels, focaccia sandwiches, and melts
- TV 3: `/menu-tv/?board=3` — wraps, salads, smoothies, and açaí

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
- Confirm `CLOVER_ACCESS_TOKEN` has Read Inventory permission
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
