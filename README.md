# Alex Capece — Photography Portfolio

Personal portfolio site for Washington, D.C.-based photographer Alex Capece. Built with Next.js 16 (App Router).

**Live scores:** 100 Desktop · 98 Mobile (Lighthouse)

---

## Stack

- [Next.js 16](https://nextjs.org/) — App Router, Server Components
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Cormorant Garamond + Jost, zero layout shift
- [next/image](https://nextjs.org/docs/app/building-your-application/optimizing/images) — automatic WebP, responsive srcsets
- CSS Modules — scoped styles, no runtime CSS-in-JS

---

## Project structure

```
alex-capece/
├── app/
│   ├── layout.tsx              # Root layout, font setup, metadata
│   ├── globals.css             # Design tokens, reset
│   ├── page.tsx                # / → Work (gallery)
│   └── about/
│       ├── page.tsx            # /about → About / Contact
│       └── About.module.css
├── components/
│   ├── Gallery/
│   │   ├── Gallery.tsx         # Full-width image stack
│   │   └── Gallery.module.css
│   └── Navbar/
│       ├── Navbar.tsx          # Sticky nav, mobile hamburger
│       └── Navbar.module.css
├── data/
│   └── images.ts               # Image list — edit this to add/reorder photos
├── public/
│   └── images/                 # Local image files go here
└── next.config.ts
```

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

Requires Node.js 18.18+.

---

## Adding or updating photos

All photos are managed in one place:

```ts
// data/images.ts
export const IMAGES = [
  { src: "/images/01.jpg", alt: "Description of photo" },
  // ...
];
```

1. Drop image files into `public/images/`
2. Add or reorder entries in `data/images.ts`
3. The gallery updates automatically — no other changes needed

**Image guidelines:**

- Format: JPG/PNG/WEBP (Next.js converts to WebP/AVIF automatically)
- Width: 1600px+ recommended for full-bleed quality
- File size: compress to under 500KB per image before committing — use [Squoosh](https://squoosh.app) or `sharp-cli`

---

## Design tokens

Defined as CSS custom properties in `app/globals.css`:

| Token      | Value                    | Usage                   |
| ---------- | ------------------------ | ----------------------- |
| `--bg`     | `#F5F3EF`                | Page background         |
| `--ink`    | `#1A1A18`                | Body text, active nav   |
| `--muted`  | `#8C8C84`                | Inactive nav, labels    |
| `--nav-h`  | `72px`                   | Nav bar height          |
| `--page-x` | `clamp(20px, 5vw, 72px)` | Horizontal page padding |

Fonts are loaded via `next/font/google` and exposed as CSS variables `--font-cormorant` and `--font-jost`.

---

## Deployment

The easiest path is [Vercel](https://vercel.com) — zero configuration required for Next.js:

1. Push this repo to GitHub
2. Import the repo at vercel.com/new
3. Deploy — Vercel auto-detects Next.js, no settings to change

For other platforms (Netlify, Fly.io, a VPS), run `npm run build` and serve the `.next/` output. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Performance

Lighthouse scores as of launch:

|                | Mobile | Desktop |
| -------------- | ------ | ------- |
| Performance    | 98     | 100     |
| Accessibility  | 100    | 95      |
| Best Practices | 100    | 100     |
| SEO            | 100    | 100     |

Key optimisations in place:

- `sizes="100vw"` on all gallery images so mobile gets appropriately sized srcsets
- `priority` on the first image only to avoid competing preloads
- `placeholder="blur"` on below-the-fold images to eliminate layout shift
- Fonts loaded via `next/font` (no render-blocking `@import`)
