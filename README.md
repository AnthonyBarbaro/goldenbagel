# Golden Bagel Cafe

## 1. Project Overview

Golden Bagel Cafe is a production-ready static website and serverless foundation for a bagel shop and cafe in El Cajon, California.

The frontend is built with Next.js static export and is intended to deploy to S3, serve through CloudFront, and call a separate API Gateway/Lambda backend through `NEXT_PUBLIC_API_BASE_URL`.

The backend foundation includes TypeScript Lambda handlers, shared CORS/validation/response/security/email helpers, mock ordering mode, and a Clover API adapter foundation for future live checkout.

## 2. Features

- Mobile-first homepage
- Menu browsing and everyday ordering
- Mock Clover API-ready ordering
- Cart with localStorage persistence
- Catering and big-party ordering survey
- Job applications
- Contact form
- Newsletter signup
- Google Maps embed with fallback
- Local SEO and structured data
- Serverless API foundation
- Clover adapter foundation

## 3. Tech Stack

Frontend:
- Next.js
- TypeScript
- Tailwind CSS
- Static export

Backend:
- AWS API Gateway
- AWS Lambda
- Clover API
- SMTP / SES-ready email helper

Deployment:
- S3
- CloudFront
- GitHub Actions

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

## 5. Static Build

```bash
npm run build
```

The static site is exported to:

```text
out/
```

## 6. Environment Variables

Frontend `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=https://goldenbagelcafe.com
NEXT_PUBLIC_API_BASE_URL=
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY=
NEXT_PUBLIC_ENABLE_ORDERING=true
NEXT_PUBLIC_MOCK_ORDERING=true
```

Serverless `serverless/.env.example`:

```env
ALLOWED_ORIGIN=https://goldenbagelcafe.com
MOCK_CLOVER=true
CLOVER_ENV=sandbox
CLOVER_MERCHANT_ID=
CLOVER_ACCESS_TOKEN=
CLOVER_ECOMMERCE_PUBLIC_KEY=
CLOVER_ECOMMERCE_PRIVATE_KEY=
CLOVER_API_BASE_URL=
CLOVER_ECOMMERCE_API_BASE_URL=
CLOVER_WEBHOOK_SECRET=
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

## 8. GitHub Actions Secrets

Required secrets:

- `AWS_ROLE_ARN`
- `AWS_REGION`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_API_BASE_URL`
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY`

Optional serverless secrets:

- `CLOVER_ENV`
- `CLOVER_MERCHANT_ID`
- `CLOVER_ACCESS_TOKEN`
- `CLOVER_ECOMMERCE_PUBLIC_KEY`
- `CLOVER_ECOMMERCE_PRIVATE_KEY`
- `CLOVER_WEBHOOK_SECRET`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `NOTIFY_TO`

Use GitHub Actions secrets. Do not commit credentials.

## 9. AWS Frontend Deployment

The frontend build creates a static export in `out/`. Upload that folder to S3 and serve it through CloudFront.

```bash
npm run build

aws s3 sync out/ s3://YOUR_BUCKET_NAME/ --delete

aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

Recommended AWS setup:

- Private S3 bucket
- CloudFront Origin Access Control
- HTTPS redirect
- Compression enabled
- Default root object `index.html`
- Custom error response strategy for static export
- Long cache for immutable assets
- Short cache for HTML

## 10. AWS Serverless Deployment

API Gateway routes requests to Lambda. Lambda handles forms, mock orders, future Clover order creation, and future Clover checkout. Clover secrets live server-side only. The frontend calls `NEXT_PUBLIC_API_BASE_URL`.

Lambda functions:

- `create-order`
- `checkout`
- `contact`
- `catering`
- `party-request`
- `job-application`
- `newsletter`
- `clover-webhook`

API Gateway notes:

- Use HTTP API or REST API
- Use Lambda proxy integration
- Enable preflight
- Use strict CORS with `ALLOWED_ORIGIN`
- Store secrets in environment variables or AWS Secrets Manager
- Enable CloudWatch logs

## 11. Clover Integration

Current mode:

```env
MOCK_CLOVER=true
```

Future live mode:

- Get Clover API access
- Add merchant ID
- Add access token
- Configure sandbox first
- Connect order and checkout functions
- Use Clover Ecommerce API for hosted checkout/payment flows
- Use Clover Orders/Platform API for POS order creation where needed
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
- `npm run build` works
- `out/` generated
- S3 bucket exists
- CloudFront distribution exists
- GitHub Actions secrets added
- API Gateway endpoint created
- Lambda endpoints deployed
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
- Secrets Manager preferred
- GitHub Secrets required for CI/CD

## 15. Manual Setup Steps

1. Clone repo
2. Install dependencies
3. Add `.env.local`
4. Run local dev
5. Build static export
6. Create S3 bucket
7. Create CloudFront distribution
8. Create API Gateway
9. Deploy Lambda functions
10. Add GitHub Actions secrets
11. Push to main
12. Verify live site

## Build and Deploy Commands

```bash
npm run build
S3_BUCKET_NAME=YOUR_BUCKET_NAME \
CLOUDFRONT_DISTRIBUTION_ID=YOUR_DISTRIBUTION_ID \
AWS_REGION=us-west-2 \
./scripts/deploy-s3-cloudfront.sh
```

## Final Verification Notes

Verified during implementation:

- `npm install`
- `npm run lint`
- `npm run build`
- `npm run build --prefix serverless`
- `npm audit --omit=dev`
- Static export generates `out/`
- No Next.js API routes or Server Actions are used
- `.env` files and secrets are ignored while `.env.example` templates are committed
- GitHub remote is connected to `https://github.com/AnthonyBarbaro/goldenbagel.git`

## Repository

Remote:

```text
https://github.com/AnthonyBarbaro/goldenbagel.git
```
