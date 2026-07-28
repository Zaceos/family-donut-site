# Family Donut Shop — Pitch Site

Five-page Astro + Tailwind site for **Family Donut Shop**, 2100 N Northgate Way, Seattle, WA 98133. Built as a pitch deliverable from publicly available Google + Yelp content.

## Quick start

```bash
npm install
npm run dev
```

## Pages

- `/` Home — hero, story, signature items, photo strip, reviews preview, visit block
- `/menu` Menu — categorized item list with confirmed pricing
- `/gallery` Gallery — photo wall
- `/reviews` Reviews — full review pulls with attribution
- `/visit` Visit — hours, address, parking, map

## Content sourcing

All review text, photos, and pricing come from public Yelp + Google Maps + Infatuation reviews. Photos cached locally under `public/images/yelp/`. Before going live with the actual business owner, photos should be replaced with owner-provided imagery or licensed properly. Review pull quotes are attributed by reviewer first name + last initial.

## Deploy

Static site. Build with `npm run build`, deploy `dist/` to Cloudflare Pages.
