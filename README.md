# So Dental — Patient Care Guide

A modern, Apple-style patient education site for So Dental. Two cross-linked pages:
- **Braces & clear aligners** care guide (`index.html`, Apple-blue theme)
- **Dental implant post-op** guide (`implants.html`, healing-teal theme)

## Files
- `index.html` — braces & aligners page (English)
- `index-zh.html` — Traditional Chinese (繁體中文) translation of the braces & aligners page; **EN / 中文** toggle switches between them
- `implants.html` — dental implant post-op page (Day 1 care, comfort & swelling, diet & hygiene, warning signs, soft-food shopping list, healing timeline)
- `implants-zh.html` — Traditional Chinese (繁體中文) translation of the implant page; an **EN / 中文** toggle in the nav switches between the two
- `extraction.html` — tooth-extraction aftercare page (warm-coral theme): protect the clot, first 24–48h, routine-vs-wisdom comparison table, eating, recovery timeline, warning signs
- `extraction-zh.html` — Traditional Chinese (繁體中文) translation of the extraction page; **EN / 中文** toggle switches between them
- `extraction.css` — warm-coral theme override + `.compare` table component (loaded after `styles.css` on both extraction pages)

All three treatment guides (braces, implants, extractions) cross-link to each other from the top nav.
- `styles.css` — shared styling (Apple-inspired, light + dark mode, responsive) driving both pages
- `implants.css` — small theme override loaded after `styles.css` on the implants page (teal color tokens only)
- `app.js` — shared: smooth scroll reveal, mobile menu toggle, footer year (used by both pages)

## How to view
Just open `index.html` in any browser:

```bash
open index.html
```

No build step, no dependencies, no internet required (except the Amazon links).

## What to customise before publishing

### 1. Contact details (placeholders)
Search the project for `REPLACE:` comments and update the phone/email. Both pages
(`index.html` and `implants.html`) use the **same** placeholders — in each page's
emergency callout (`#emergency-contact`) and footer — so one find-and-replace fixes both.

Find & replace across both HTML files:
- `+10000000000` → your real number (digits only, e.g. `+15035551234`)
- `(000) 000-0000` → your display number
- `hello@yourpractice.com` → your real email

### 2. Amazon links (optional)
Each product card in the **Shop** section links to an Amazon search for a widely-available
product. To point at specific products or add your Amazon Associates affiliate tag, edit the
`href="https://www.amazon.com/s?k=..."` links in the `#shop` section of `index.html`.

The page already includes an affiliate/medical disclaimer under the shop grid.

### 3. Practice name
The wordmark reads **So Dental** in the nav and footer. Change it there if needed.

## Notes
- Fully responsive; collapses to a single column with a hamburger menu on phones.
- Automatically follows the visitor's light/dark system preference.
- Respects `prefers-reduced-motion` (disables scroll animations for those who opt out).
