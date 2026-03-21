# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run ESLint

node scripts/scrapeDevpost.js  # Scrape Devpost to refresh projects.json
```

No test suite is configured.

## Architecture

**Next.js 15 App Router** with TypeScript and Tailwind CSS v4.

### Routing

All routes live under `app/` using file-based routing:

- `/` — Home page (`app/page.tsx`): composites Hero, About, Experience, Projects preview, and Resume sections
- `/projects` — Full project gallery (`app/projects/page.tsx`): renders all entries from `data/projects.json`
- `/arcade` — Game selection hub (`app/arcade/page.tsx`)
- `/pong` — Playable Pong game (`app/pong/page.tsx`)
- `/doom` — 3D FPS game using canvas + Three.js (`app/doom/page.tsx`)

Root layout (`app/layout.tsx`) wraps every page with Navbar, Footer, ScrollToTop, and LightningEffects.

### Key Data Flow

Project data is stored in `data/projects.json` (23 hackathon projects with fields: `title`, `description`, `image`, `devpost`, `isWinner`, `hackathon`). Images are served from CloudFront CDNs configured in `next.config.js`. To refresh project data, run the Devpost scraper script.

### Component Pattern

Reusable UI lives in `components/`. Section components (Hero, About, Experience, Projects, Resume) are imported directly into `app/page.tsx`. Shared primitives like `project-item.tsx`, `work-item.tsx`, and `section-wrapper.tsx` are used across pages.

### Lightning Effects (`components/lightning-effects.tsx`)

Global client component mounted in the root layout. Three systems:

1. **Custom cursor** — SVG bolt icon (`M 9 0 L 0 16 L 6 16 L 2 32 L 18 12 L 12 12 Z`) that follows the mouse via `requestAnimationFrame` + direct DOM style manipulation (no React re-renders). Transform chain keeps the tip pixel-aligned: `translate(x, y) rotate(15deg) translate(-9px, 0px)`. On click, vibrates with decaying position (±10px) and rotation (±15°) jitter over 350ms, tracked via `lastClickTime` ref in the RAF loop. Hidden on touch devices via `@media (hover: none) { body { cursor: auto } }`.

2. **Click strike** — On every click, generates a jagged bolt from `(clickX, 0)` to `(clickX, clickY)` using midpoint-displacement recursion (depth 5, ~32 points). Spawns 2–3 branches. Rendered as a fixed full-screen SVG with `feGaussianBlur` glow filter. Animates draw → fade via CSS `opacity` transition; auto-removed from state after 500ms. Multiple simultaneous strikes supported.

3. **Ambient lightning** — Random bolt every 0.2–1.8s, depth 3, ~30% opacity. Same generation algorithm.

Strike state type: `Strike { id, points: [number,number][], branches: [number,number][][], x, y }`.

### Hero Title Surges (`components/hero.tsx`)

Electricty effect overlaid on the "RIAN CORCINO" heading. After the entrance animation settles (900ms delay), letter bounding rects are measured and 8 bolts are generated via midpoint-displacement (`jaggedLine`, roughness 0.34, depth 4). Each bolt cycles every 3.2–5.2s with a 0.2s stagger between bolts.

Two bolt types (chosen per-bolt, ~45% outward):
- **Contained** — centered within letter bounds, free angle (sampled from 8×45° bands), length 35–80% of letter size.
- **Outward** — one end anchored on the letter, the other end shooting 60–120% of letter size outside the title.

Each bolt stores 3 independently-displaced path variants that step-cycle at 90ms for a flickering electric effect, plus 0–2 branches that flicker independently. Rendered as a single `<svg>` overlay with a two-pass `feGaussianBlur` glow filter (stdDeviation 3 + 6).

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. Global styles and CSS variables are in `app/globals.css`. Fonts: Oswald (headings) and Barlow (body) via `next/font/google`. Animations use Framer Motion; icons use Lucide React.

**Design language — "Speed Force":**
- Palette: `#06060a` bg, `#ffd000` lightning yellow, `#cc1100` flash red, `#ff6a00` speed orange
- Section headings: left-aligned, `border-l-4 border-[#ffd000] pl-6`, Oswald bold
- Section transitions: `.clip-bottom` / `.clip-top` diagonal clip-path utilities (defined in `globals.css`)
- Cards: sharp corners (`rounded-none`), flat dark bg, yellow left-border accent on hover
- No centered timelines, no symmetric card grids, no gradient bar underlines

### Environment

```
NEXT_PUBLIC_PERSONAL_EMAIL=riancorci@gmail.com
```
