# So Dental — Patient Care Guide

A modern, Apple-style single-page site with patient care instructions for braces and clear aligners, plus a curated list of recommended supplies.

## Files
- `index.html` — page content and structure
- `styles.css` — styling (Apple-inspired, light + dark mode, responsive)
- `app.js` — smooth scroll reveal, mobile menu toggle, footer year

## How to view
Just open `index.html` in any browser:

```bash
open index.html
```

No build step, no dependencies, no internet required (except the Amazon links).

## What to customise before publishing

### 1. Contact details (placeholders)
Search the project for `REPLACE:` comments and update the phone/email in two places:

- **`index.html`** — the emergency callout (`#emergency-contact`) and the footer.
- Update both the `tel:+10000000000` links and the `mailto:hello@yourpractice.com` links, plus the visible text `(000) 000-0000`.

Find & replace across the file:
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
