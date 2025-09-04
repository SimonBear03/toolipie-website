# Toolipie Website

A minimal Next.js 14 (App Router, TypeScript) site set up for static export to GitHub Pages with Tailwind CSS powered by design tokens and light/dark via `data-theme`.

## Tech
- Next.js 14 App Router (TypeScript)
- Tailwind CSS with CSS variables tokens (`src/styles/tokens.css`)
- Light/dark via `data-theme` attribute (no UI toggle logic beyond a simple button)
- Static export (`output: 'export'`), unoptimized images, custom domain `toolipie.com` via `public/CNAME`
- ESLint (Next defaults), Dependabot, GitHub Actions deploy to Pages

## Requirements
- Node 20 (see `.nvmrc` and `"engines"` in `package.json`)

## Getting Started
```bash
# Use Node 20
nvm use

# Install deps
npm install

# Dev server
npm run dev

# Lint / Typecheck
npm run lint
npm run typecheck

# Production build (static export)
npm run build
# Output is written to ./out because next.config.mjs has output: 'export'
```

Note: `next export` is deprecated in Next 14 when using `output: 'export'`. The CI keeps an `export` script for compatibility, but `npm run build` already creates `out/`.

## Deploy (GitHub Pages)
- Pushing to `main` triggers `.github/workflows/gh-pages.yml` which:
  - Installs deps, lints, typechecks, builds, and uploads `./out` as the Pages artifact
- In GitHub repo settings: Settings → Pages → set Source to “GitHub Actions”
- Custom domain is configured via `public/CNAME` → `toolipie.com`

## Project Structure
```
src/
  app/            # App Router
  components/     # Shared components (Navbar, Footer, ThemeToggle)
  features/       # Feature modules
  lib/            # Utilities (client-side)
  server/         # Server-only code (if added later)
  hooks/          # React hooks
  types/          # TypeScript types
  styles/         # Tailwind + tokens
planning/         # Notes only (never imported by the site)
```

## Notes
- Images are unoptimized for static export compatibility
- `planning/` is not imported anywhere in the site
