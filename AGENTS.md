# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` (App Router): page routes like `page.tsx`, layout in `layout.tsx`.
- `src/components/`: reusable UI (e.g., `shared/Navbar.tsx`, `home/HeroTitle.tsx`).
- `src/styles/`: Tailwind and tokens (`globals.css`, `tokens.css`).
- `src/{features,lib,server,hooks,types}/`: feature modules, utilities, server-only code, hooks, and shared types.
- `public/`: static assets, `CNAME`, `robots.txt`, `sitemap.xml`.
- Build output: `out/` (static export).

## Build, Test, and Development Commands
- `nvm use`: select Node 20 (required by `.nvmrc` and `package.json` engines).
- `npm install`: install dependencies.
- `npm run dev`: start Next.js dev server.
- `npm run lint`: run ESLint (Next.js config).
- `npm run typecheck`: run TypeScript in no-emit mode.
- `npm run build`: static export; writes production assets to `./out`.

## Coding Style & Naming Conventions
- Language: TypeScript (strict). Framework: Next.js 15 (App Router), React 19.
- Linting: ESLint extends `next/core-web-vitals`. Fix warnings before PR.
- Styling: Tailwind CSS; prefer design tokens via CSS vars (e.g., `text-fg`, `bg-bg`).
- Dark mode: use `[data-theme="dark"]` or `class` per `tailwind.config.ts`.
- Naming: components `PascalCase` (e.g., `ThemeToggle.tsx`), hooks `useXxx`, files in `app/` follow route semantics (`contribute/page.tsx`).
- Indentation: 2 spaces; avoid long lines; keep functions small and focused.

## Testing Guidelines
- No test runner is configured yet. For new tests, prefer:
  - Unit: Vitest + React Testing Library under `src/**/__tests__` or `*.test.tsx`.
  - E2E: Playwright (`@playwright/test`) in `e2e/`.
- Until tests exist, PRs must pass `lint`, `typecheck`, and `build` locally.

## Commit & Pull Request Guidelines
- Commits: present tense, concise subject. Conventional prefixes welcome (`feat:`, `fix:`, `docs:`).
- PRs: include a clear description, linked issue (if any), screenshots for UI changes, and notes on accessibility or performance.
- Requirements: no ESLint errors, type-safe, build succeeds, and routes/components documented in code where non-obvious.

## Security & Configuration Tips
- Runtime: Node 20 only. No secrets required; site is statically exported.
- Avoid server-only code in client routes; prefer `src/server/` for future server code.
- Respect `public/CNAME` and static export constraints (images are unoptimized).

## Agent-Specific Instructions
- Keep diffs minimal and focused; match existing patterns.
- Before proposing large changes: run `npm run lint && npm run typecheck`.
- Do not add dependencies or enable network access without explicit approval.
