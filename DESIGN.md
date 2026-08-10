---
name: Golden Bagel Cafe
description: A warm neighborhood bake counter made fast and clear for pickup.
colors:
  charcoal: "#201814"
  cream: "#fff8ec"
  honey: "#f6b642"
  toast: "#a55325"
  sesame: "#f8df9f"
  espresso: "#4b2f22"
  sage: "#6f7f5f"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  control: "12px"
  card: "24px"
  panel: "28px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "56px"
components:
  button-primary:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.charcoal}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "#ffffff"
    textColor: "{colors.charcoal}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "48px"
  button-dark:
    backgroundColor: "{colors.charcoal}"
    textColor: "#ffffff"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "48px"
  card:
    backgroundColor: "#ffffff"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.card}"
    padding: "24px"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
    height: "48px"
  chip-selected:
    backgroundColor: "{colors.charcoal}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
---

# Design System: Golden Bagel Cafe

## Overview

**Creative North Star: "The Neighborhood Bake Counter"**

The interface should feel like stepping up to a well-loved local counter: warm, direct, tactile, and full of real food. Cream paper tones, dark espresso surfaces, honey accents, bold labels, and generous rounded shapes make it friendly without becoming childish.

Ordering speed is part of the character. Information is grouped like a clear counter menu, controls feel substantial under a thumb, and the strongest contrast always points toward the next useful action. The existing video hero and logo-led navigation remain signature anchors; refinement should make the surrounding experience more coherent rather than replace them.

**Key Characteristics:**

- Warm, local, and food-forward
- Bold hierarchy with compact, practical copy
- Tactile controls and softly lifted surfaces
- Mobile-first ordering with clear progress and feedback
- Real cafe imagery instead of decorative stock graphics

## Colors

The palette combines toasted bakery neutrals with a single sunny honey accent and a restrained sage utility note.

### Primary

- **Counter Charcoal** (`#201814`): Primary text, dark action surfaces, footer, and high-contrast feature bands.
- **Golden Honey** (`#f6b642`): Primary actions, focus indicators, active details, and small moments of emphasis.

### Secondary

- **Toasted Crust** (`#a55325`): Eyebrows, warm supporting emphasis, and hover depth.
- **Sesame Gold** (`#f8df9f`): Soft selected or highlighted backgrounds where full honey would be too loud.
- **Quiet Sage** (`#6f7f5f`): Restrained status or supporting accents; it never competes with ordering actions.

### Neutral

- **Bakery Cream** (`#fff8ec`): Default page canvas and warm nested surface.
- **Espresso Brown** (`#4b2f22`): Secondary copy and the softer alternative to charcoal.
- **Counter White** (`#ffffff`): Cards, fields, and controls lifted from the cream canvas.

### Named Rules

**The Honey Means Action Rule.** Reserve strong honey fills for primary actions, focus, active state, or one deliberate highlight in a local group.

## Typography

**Display Font:** Georgia (with Times New Roman and serif fallbacks)
**Body Font:** System UI (with platform sans-serif fallbacks)

**Character:** Heavy Georgia headlines carry the familiarity of neighborhood signage, while the system sans remains fast and legible for menus, prices, forms, and operational details.

### Hierarchy

- **Display** (900, `clamp(2.25rem, 6vw, 4.5rem)`, `0.98`): Hero and defining page statements only.
- **Headline** (900, `clamp(2rem, 4vw, 3rem)`, `1.05`): Section and primary page headings.
- **Title** (800–900, `1.125rem–1.5rem`, `1.2`): Menu items, card titles, and checkout groups.
- **Body** (400–700, `0.875rem–1rem`, `1.5–1.75`): Descriptions and supporting information; keep paragraphs compact.
- **Label** (800–900, `0.625rem–0.75rem`, tracked uppercase): Categories, eyebrows, statuses, and short metadata.

### Named Rules

**The Counter Scan Rule.** A customer should be able to find the item name, price, option state, and next action without reading the surrounding paragraph copy.

## Layout

Use a mobile-first spatial rhythm based on 4, 8, 16, 24, and 32 pixels. Page content sits in a centered `max-width: 80rem` container with 16-pixel mobile gutters, 24-pixel small-screen gutters, and 32-pixel large-screen gutters. Major sections normally receive about 40–56 pixels of vertical space on mobile and 56–80 pixels on larger screens.

Ordering surfaces prioritize a single scanning column on mobile. At large breakpoints, menu navigation may become a narrow rail beside a flexible item grid, and checkout becomes a flexible cart column beside a 420-pixel summary/form column. Dense menu grids must preserve readable card widths rather than maximize column count.

The fixed header and mobile action bar are persistent navigation landmarks. Every mobile page must reserve bottom space for the action bar, and sticky order actions must not overlap it.

## Elevation & Depth

Depth is warm and ambient rather than glossy. White cards sit over cream with a fine charcoal border, while important actions and lifted interactions use soft shadows tinted by charcoal or toast. Dark bands provide structural depth without needing extra shadow.

### Shadow Vocabulary

- **Soft Counter** (`0 18px 60px rgba(32, 24, 20, 0.14)`): Cards, secondary controls, and floating navigation surfaces.
- **Warm Lift** (`0 20px 45px rgba(184, 101, 43, 0.18)`): Primary actions and intentional hover elevation.

### Named Rules

**The One Lift Rule.** Within a local group, lift the action or surface that matters most; supporting elements stay bordered and comparatively quiet.

## Shapes

The form language is round and generous: 12-pixel field corners, 16-pixel compact control corners, 24-pixel cards, 28-pixel feature panels, and full pills for buttons and chips. Borders are usually a 10% charcoal tint. Circular icon wells and occasional subtle irregular rotation add hand-built character, but content containers remain orderly and aligned.

## Components

### Buttons

- **Shape:** Full pill with a minimum 44-pixel touch target; standard ordering actions are 48 pixels tall.
- **Primary:** Honey fill, charcoal text, heavy label, and warm lift shadow.
- **Hover / Focus:** Slightly brighter honey or deeper surface color; all variants use the visible honey focus outline.
- **Secondary / Dark / Ghost:** White secondary controls use a fine ring, dark controls use charcoal with white text, and ghost controls are reserved for low-risk tertiary actions.

### Chips

- **Style:** Compact pill with a fine border and bold short label.
- **State:** Selected chips use charcoal with white text; unselected chips use cream or white with espresso text. Selection must be conveyed programmatically as well as visually.

### Cards / Containers

- **Corner Style:** 24-pixel default; 20 pixels for compact menu and cart rows.
- **Background:** Counter white on bakery cream, with cream nested rows inside white panels.
- **Shadow Strategy:** Soft Counter for major cards; small nested rows remain border-led.
- **Border:** One-pixel charcoal at roughly 10% opacity.
- **Internal Padding:** 16 pixels on compact mobile cards, growing to 20–24 pixels when space allows.

### Inputs / Fields

- **Style:** White fill, subtle charcoal border, 12-pixel corners, and a minimum 48-pixel height.
- **Focus:** Honey border plus a soft honey ring; the global focus outline must remain visible.
- **Error / Disabled:** Errors use explicit text in addition to color. Disabled controls retain legible labels and clearly reduced emphasis.

### Navigation

The fixed cream header is logo-led, lightly translucent, and separated by a fine border. Desktop links are compact pills with a quiet white hover. Mobile navigation and the bottom action bar use large touch targets, clear text labels, and correct expanded or selected semantics.

### Menu Item Customizer

Customization should feel like building an order at the counter. The item identity and price stay anchored while choices progress in clear groups. Required state, selected state, quantity, price changes, close behavior, and add-to-cart confirmation must all be immediately perceivable and keyboard accessible.

## Do's and Don'ts

### Do:

- **Do** preserve the video-led hero, official logo, warm palette, and logo-led navigation as signature anchors.
- **Do** use real food and cafe photography when imagery adds decision value.
- **Do** make menu name, price, options, availability, and order action easy to scan.
- **Do** keep touch targets at least 44 pixels and preserve visible keyboard focus.
- **Do** use charcoal bands to create rhythm between cream and white surfaces.

### Don't:

- **Don't** introduce unsupported awards, claims, review sources, or generic marketing proof.
- **Don't** turn every card into a floating object or every accent into honey.
- **Don't** hide ordering state, required choices, errors, or price changes behind hover-only behavior.
- **Don't** add decorative gradients, stock illustration, or novelty icons that compete with the real cafe imagery.
- **Don't** sacrifice mobile ordering speed or legibility for desktop density.
