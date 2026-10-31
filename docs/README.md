# Save Point Website: Documentation

This is the engineering documentation for the Save Point marketing site. It
documents what is actually in the repository right now (not aspirational
architecture), at a level of detail intended for an engineer who has never
opened the project before.

© Save Point Limited. Proprietary, not open source. Brand artwork designed by Emily
Jacobs for Save Point. See the [project README](../README.md#ownership-and-licence)
for ownership, licence and design credits.

## Stack summary

| Layer | Technology | Version (installed) |
|---|---|---|
| Framework | Next.js (App Router, Turbopack) | 16.2.3 |
| UI library | React | 19.2.0 |
| Language | TypeScript (strict) | 5.9.3 |
| Styling | CSS Modules (hand-written) | — |
| Styling (installed, unused) | Tailwind CSS v4 + shadcn/ui scaffold | 4.3.2 |
| Fonts | `next/font/google` (Chakra Petch, Figtree) | bundled with Next |
| Package manager | npm | — |
| Lint | ESLint flat config (`eslint-config-next`) | 9.39.1 / 16.0.3 |

There is **no backend, no database, and no client-side state management**.
Every page is a React Server Component that renders static JSX at build time.
The entire site compiles down to static HTML/CSS/JS with zero server-side
runtime data fetching (see [`01-architecture.md`](./01-architecture.md)).

## Reading order

1. [`01-architecture.md`](./01-architecture.md) — how the App Router turns
   this file tree into routes, and the rendering model (SSG).
2. [`02-routing-and-pages.md`](./02-routing-and-pages.md) — every route in
   the site, file-by-file.
3. [`03-components.md`](./03-components.md) — the shared components
   (Navbar, Footer, Service) and their composition.
4. [`04-styling-and-design-tokens.md`](./04-styling-and-design-tokens.md) —
   CSS Modules mechanics, the color/font token system, and the unused
   Tailwind/shadcn scaffold.
5. [`05-metadata-and-seo.md`](./05-metadata-and-seo.md) — the Metadata API,
   `sitemap.ts` / `robots.ts` / `manifest.ts`, and the JSON-LD block.
6. [`06-utilities-and-types.md`](./06-utilities-and-types.md) — `lib/utils.ts`
   and every TypeScript type/interface used in the codebase (this is the
   closest thing this project has to "data structures").
7. [`07-dependencies-audit.md`](./07-dependencies-audit.md) — every package
   in `package.json`, what it's for, and which ones are dead weight.
8. [`08-build-and-tooling.md`](./08-build-and-tooling.md) — `tsconfig.json`,
   ESLint config, PostCSS, the Turbopack workspace-root fix, and npm scripts.

## Repository layout

```
save-point/
├── app/                          # Next.js App Router root
│   ├── layout.tsx                # Root layout: fonts, <html>/<body>, global metadata, JSON-LD
│   ├── page.tsx                  # Route: /
│   ├── globals.css               # Global stylesheet and design tokens
│   ├── manifest.ts               # Route: /manifest.webmanifest
│   ├── robots.ts                 # Route: /robots.txt
│   ├── sitemap.ts                # Route: /sitemap.xml
│   ├── not-found.tsx             # Rendered on any unmatched route (404)
│   ├── opengraph-image.png       # Social share images (+ .alt.txt)
│   ├── twitter-image.png
│   ├── icon.png  apple-icon.png  favicon.ico
│   ├── home/page.module.css      # Styles for the home page
│   ├── about/page.tsx            # Route: /about
│   ├── contact/page.tsx          # Route: /contact
│   ├── services/
│   │   ├── page.tsx              # Route: /services
│   │   ├── servicesData.ts       # Service text shared by / and /services
│   │   └── services.module.css
│   ├── pricing/
│   │   ├── page.tsx              # Route: /pricing
│   │   └── packages.ts           # Starter packages, "from" prices, add-ons
│   ├── legal/
│   │   ├── page.tsx              # Route: /legal
│   │   └── discord-bot/page.tsx  # Route: /legal/discord-bot (Project Hub terms and privacy)
│   ├── error/page.tsx            # Route: /error (static "under construction" page, not an error boundary)
│   ├── navigation/navBar.tsx     # <Navbar />
│   ├── footer/footer.tsx         # <Footer />
│   ├── serviceComponent/service.tsx  # <Service /> (services grid)
│   └── shared/                   # pageHero.tsx, seo.tsx and shared CSS modules
├── lib/
│   └── utils.ts                  # cn() class-merging helper (shadcn convention)
├── public/                       # Static assets served from /
│   ├── logo.png  logo-wordmark.png  logo-flag.png
│   └── brand/                    # Illustrations, square logos, app icons
├── .github/CODEOWNERS
├── .env.example                  # EmailJS variables (real values live in .env.local / Vercel)
├── components.json               # shadcn/ui CLI config (no components generated yet)
├── next.config.ts                # Next.js config (Turbopack root pin, old-page redirects)
├── tsconfig.json                 # TypeScript compiler config
├── eslint.config.mjs             # ESLint flat config
├── postcss.config.mjs            # PostCSS config (Tailwind v4 plugin)
└── package.json
```
