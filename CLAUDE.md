# Ledgeraa website

The public marketing site at **ledgeraa.com** (www.ledgeraa.com redirects to it). It explains Ledgeraa to UK sole traders, hosts the MTD guides, comparison and trade pages and the legal documents, and sends every sign-up / log-in to the app at **app.ledgeraa.com**. It has no backend, no login and no forms.

The project-wide rules in `../CLAUDE.md` apply here too (KISS, minimal comments, security first).

## Stack
- Vite 7 + React 19 + TypeScript, React Router 7 (client-side routing).
- Tailwind CSS v4 via `@tailwindcss/vite`. Design tokens live in `src/globals.css` and mirror the app's.
- Inter is self-hosted (`@fontsource-variable/inter`). Don't add third-party requests (fonts, analytics, embeds) without updating the privacy and cookie policies and the CSP below.
- `lucide-react` for icons. Playwright for the smoke test.

## Layout
```
src/
  App.tsx              routes
  config/site.ts       APP_ORIGIN, sign-up/in URLs, nav, plans + comparison table
  config/seo-pages.json  title/description/sitemap entry for every route
  Seo.tsx              per-page head tags
  pages/               top-level pages (home, pricing, join, contact, support, 404)
  pages/content/       MTD hub + guides, /compare/*, /for/* (ContentLayout shell)
  pages/legal/         legal pages: legalPages.ts lists them, LegalLayout renders them
  content/legal/*.md   legal document text, rendered by ds/patterns/Markdown.tsx
  ds/primitives/       small building blocks (Button, Section, Heading…)
  ds/patterns/         page sections (Nav, Footer, PricingPlans, FeatureSplit…)
scripts/build-pages.mjs  post-build: dist/<route>/index.html per route, CSP meta tag, sitemap.xml
tests/e2e/pages.spec.ts  smoke test: every route renders with the right title
```

## Run locally
```
npm ci
npm run dev        # http://localhost:5173
npm run build      # tsc -b, vite build, then scripts/build-pages.mjs
npm run preview    # serve dist/
npm run lint
npm run test:e2e   # needs a build first; first run: npx playwright install chromium
```
`APP_ORIGIN` sets where sign-up/log-in links point. It defaults to `http://localhost:3000` (the FE dev server) and is the only env var exposed to the bundle (`envPrefix` in `vite.config.ts`). Never widen `envPrefix`.

## Rules for changes
- **New route:** add it in `App.tsx` and in `src/config/seo-pages.json`. Without the JSON entry, the build writes no HTML file for it. It still renders via the SPA fallback, but crawlers get the home page's title, description and canonical URL.
- **Plan copy** (`PLANS` and `COMPARE_ROWS` in `src/config/site.ts`) must match the app: `ledgeraa_frontend_1/src/pages/onboarding/copy.ts` and `src/lib/plan/entitlements.ts`.
- **MTD is "coming soon"** while `MTD_ENABLED` is off in the app. Any claim that Ledgeraa submits, connects or files to HMRC (including VAT returns, tax estimates and deadline reminders) must say so. Factual MTD guidance (thresholds, deadlines, GOV.UK links) is fine.
- Legal text lives in `src/content/legal/*.md`; edit the Markdown, not the components.

## CI (GitHub Actions)
- `lint_test_and_audit.yml` runs on every PR and push to main: lint, `npm audit --audit-level=high`, then build plus the Playwright smoke test.
- Claude reviews (code quality, security audit, factual accuracy) run on PRs labelled `ready-for-claude-review`. Their prompts are in `.github/prompts/`. Factual accuracy checks website copy against the FE and BE repos.
- These need the org secrets and vars `CLAUDE_CODE_OAUTH_TOKEN`, `REPO_READER_CLIENT_ID` and `REPO_READER_PRIVATE_KEY` shared with this repo.

## Deploy
DigitalOcean App Platform static site `ledgeraa-website` (free tier, London), deployed automatically on every push to `prod`. To release, merge `main` → `prod`; this is the same flow as the FE. Never deploy manually.

`.do/app.yaml` is a copy of the live app spec. DO doesn't read it, so apply changes in the dashboard (Settings → App Spec) or with doctl, then update the copy. The spec covers:
- **Domains:** the `ledgeraa.com` DNS zone is managed by DigitalOcean. ledgeraa.com is primary; www.ledgeraa.com is an alias that the first `ingress` rule 301-redirects to the apex.
- **Clean URLs:** App Platform serves `/pricing` from `dist/pricing/index.html`, which `scripts/build-pages.mjs` writes for every route. `catchall_document: index.html` sends any other path to the SPA, which renders the noindexed 404 page with a 200 status.
- HTTP → HTTPS is automatic on App Platform.

**Security headers:** App Platform static sites can't set response headers. The CSP is a `<meta http-equiv>` tag that the build injects into every page; it's build-time only because it would block Vite's dev-server scripts. A meta CSP can't do everything, so these are still missing until the nginx follow-up below:
- HSTS
- `frame-ancestors` / X-Frame-Options (clickjacking)
- `X-Content-Type-Options: nosniff`
- Permissions-Policy

The Playwright smoke test runs against the built pages with the CSP active, so a change that the CSP would block fails CI. Don't load anything from another origin without updating the CSP in `build-pages.mjs` and the privacy and cookie policies.

## Follow-up
Move to an App Platform **service** running nginx (multi-stage Dockerfile + `nginx.conf`), so the site can send real security headers and a real 404 status. The same is planned for the app: `ledgeraa_frontend_1/docs/plans/security-headers-nginx-plan.md`.
