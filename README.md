# Nhlakanipho Masilela — Portfolio

Personal portfolio site, built with [Next.js](https://nextjs.org/) (Pages Router), TypeScript, and Tailwind CSS. Deployed on [Vercel](https://vercel.com).

## Stack

- **Framework**: Next.js 15 (Pages Router)
- **Styling**: Tailwind CSS, Google Fonts (Barlow / Barlow Condensed) loaded via `pages/_document.tsx`
- **Hosting**: Vercel

No animation library, no CMS — content lives in `src/data/projects.ts` and the page files directly.

## Running locally

```bash
npm install
npm run dev
# http://localhost:3000
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm start` — run the production build locally
- `npm run type-check` — TypeScript, no emit
- `npm run lint` — ESLint

## Structure

```
pages/            route files (index, about, projects, contact, documents)
src/components/   Navbar, Footer, Layout, SEO, WorkRow, PerformanceMonitor
src/data/         project content (src/data/projects.ts)
src/styles/       global.css, next/font loaders
public/           static assets, resume.html
```

To update project content, edit `src/data/projects.ts` — it's the single source both the homepage's "Selected work" section and the full `/projects` page read from.

## Deployment

Pushes to `main` deploy to Vercel automatically via its Git integration. `.github/workflows/ci.yml` runs a type-check and build on every push and PR.
