# Utsav — India's Special Days

A dark, colorful React + TypeScript site that checks the current date against a
curated list of Indian festivals, national holidays, jayantis, and observances
from **1 August 2026** to **31 December 2027**, and re-skins the whole page
(title, colors, decorative animation) to match whatever special day it is.

## Features
- Auto-detects today's date and shows the matching special day with a
  festival-specific dark color theme and animated decoration (diyas for
  Diwali, color splashes for Holi, tricolor for national days, snowfall for
  Christmas, etc).
- Date picker + prev/next day buttons to browse any date in range.
- If a date has no listed special day, shows a countdown to the next one.
- Scrollable list of all 90+ special days in range, click any to jump to it.
- Fully responsive, keyboard-focusable, respects `prefers-reduced-motion`.

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
npm run preview
```

## Editing the festival list
All dates live in `src/data/festivals.ts`. Each entry has a `date`
(`YYYY-MM-DD`), `title`, optional `subtitle`, and a `theme` key mapping to a
palette in `src/data/themes.ts`. Add, remove, or re-theme entries there.
