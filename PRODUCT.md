# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary user is a nearby El Cajon customer who wants a fast, reliable path from discovering the menu to customizing and paying for a pickup order. Customers also use the site to check hours and location details, get directions, call the cafe, and plan a visit.

Secondary users include job applicants, customers planning larger orders or gatherings, and cafe staff who use the in-store menu-board views.

## Product Purpose

Golden Bagel Cafe's website is the public information and pickup-ordering experience for the cafe at 2744 Fletcher Pkwy, El Cajon, CA 92020. It helps customers choose food, customize an order, select a pickup time, and continue to secure payment through Clover. Success means customers can order or plan a visit quickly and with confidence.

## Positioning

Golden Bagel Cafe is an independent local cafe offering a broad, made-to-order menu centered on bagels, breakfast sandwiches, wraps, salads, smoothies, and cafe favorites. The site combines local visit information, live menu data, customization, and pickup ordering in one direct experience.

## Operating Context

Customers may browse from a phone while deciding what to eat, place an ASAP order when the cafe is open, schedule an available pickup time, or check practical visit information before leaving. The primary ordering flow is menu search or category browsing, item customization, a persistent local cart, pickup and contact details, and hosted Clover checkout.

The cafe is configured as open daily from 6:30 AM to 3:00 PM. In-store staff can use three menu-board views organized for separate displays.

## Capabilities and Constraints

- The customer-facing menu and menu boards use Clover inventory data when available and fall back to a generated menu snapshot.
- Ordering is pickup-only in the current customer experience.
- The site owns menu browsing, customization, cart state, and pickup details; Clover owns final hosted payment.
- Cart contents persist in the customer's browser.
- Live menu pricing and the menu-board refresh require a Next.js server runtime.
- Card data and Clover secrets must never be stored or exposed by the browser application.
- Clover OAuth token refresh is not currently automated.
- The product also supports directions, contact, job applications, large-party requests, reviews, and accessibility, privacy, and terms information.
- Parking, dine-in, physical-accessibility details, public email, and map coordinates are not yet confirmed product facts.

## Brand Commitments

Preserve the name “Golden Bagel Cafe,” the official logo, the Fletcher Parkway and El Cajon identity, and the direct, friendly, service-oriented voice. Fresh food and easy local pickup are established themes. Do not introduce awards, rankings, historical claims, or other marketing proof without a source.

## Evidence on Hand

- Official logo and hero video/poster under `public/goldenbagels/`.
- Storefront, food, cafe, catering, and gathering photography under `public/goldenbagels/` and `public/gallery/`.
- Generated Clover-backed menu data and cafe menu-board data under `src/data/`.
- Four named review snippets in `src/data/reviews.ts`; their source URLs are not present, so future work must not invent provenance or broader testimonial claims.
- Confirmed business address, phone number, daily hours, and local visit information in `src/config/site.ts`.

## Product Principles

1. Make pickup ordering the shortest, clearest path through the product.
2. Keep menu availability, prices, pickup expectations, and store details trustworthy.
3. Let the real cafe, food, and local identity provide the proof; never fabricate claims.
4. Preserve customer progress across browsing, customization, and checkout.
5. Keep secondary workflows useful without competing with ordering and visit planning.

## Accessibility & Inclusion

Support practical use with keyboards, screen readers, magnification, voice control, reduced-motion preferences, visible focus, sufficient contrast, labeled controls, useful alternative text, and responsive layouts. The accessibility page describes an ongoing goal rather than a formal conformance certification, and phone assistance remains an available fallback.
