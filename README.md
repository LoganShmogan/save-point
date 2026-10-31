<p align="center">
  <a href="https://savepoint.co.nz"><img src="public/logo.png" alt="Save Point" width="320"></a>
</p>

<h1 align="center">Save Point Website</h1>

<p align="center">
  The source for <a href="https://savepoint.co.nz">savepoint.co.nz</a>: what Save Point offers, its starter prices, its story, its legal policies and how to get in touch.<br>
  Built, owned and run by <a href="https://savepoint.co.nz"><b>Save Point Limited</b></a>, New Zealand.
</p>

<p align="center">
  <a href="docs/README.md">Docs</a> ·
  <a href="https://savepoint.co.nz/legal">Legal</a> ·
  <a href="SECURITY.md">Security</a> ·
  <a href="LICENSE">Licence</a>
</p>

---

> [!IMPORTANT]
> This is Save Point's company website and proprietary software. The code is public so the work can be seen. It is **not** open source, and it may not be copied, reused or deployed. See [LICENSE](LICENSE).

Save Point is a New Zealand software company that builds automation, kiosks,
custom software, websites and connected (IoT) systems for small businesses.

## At a glance

| | |
|---|---|
| Live site | https://savepoint.co.nz |
| Owner | Save Point Limited, New Zealand |
| Maintainer | Logan Young, Founder ([logan@savepoint.co.nz](mailto:logan@savepoint.co.nz)) |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Hand-written CSS Modules, Chakra Petch and Figtree |
| Hosting | Vercel, deployed automatically from `master` |
| Contact form | EmailJS (no backend or database) |

## Pages

| Route | What it is |
|---|---|
| `/` | Hero, automation band, service overview, About teaser |
| `/services` | Full detail for each of the five service lines |
| `/pricing` | Ready-made starter packages, custom "from" prices, add-ons |
| `/about` | Origin story, mission, values and team |
| `/contact` | Contact form, email, Facebook, location |
| `/legal` | Privacy Policy, Terms of Service, Disclaimer, Support, Refund and Warranty |
| `/legal/discord-bot` | Terms and privacy for the Save Point Project Hub Discord bot |

The site also generates its own `sitemap.xml`, `robots.txt`, web manifest,
social share images and JSON-LD structured data.

Service text and prices live in `app/services/servicesData.ts` and
`app/pricing/packages.ts`, so the home, services and pricing pages always agree.

## Project layout

```
save-point/
├── app/                      # Next.js App Router: every folder is a route
│   ├── layout.tsx            # Root layout: fonts, global metadata, JSON-LD
│   ├── page.tsx              # /  (home page; styles in home/)
│   ├── about/  contact/  pricing/  services/  legal/  error/
│   │                         # One folder per route (legal/discord-bot/ is the bot's terms)
│   ├── services/servicesData.ts  # Service text, shared by home and /services
│   ├── pricing/packages.ts   # Starter packages and prices
│   ├── navigation/  footer/  serviceComponent/  shared/
│   │                         # Shared components and styles
│   ├── sitemap.ts  robots.ts  manifest.ts
│   └── opengraph-image.png  twitter-image.png  icon.png  favicon.ico
├── docs/                     # Engineering documentation (start at docs/README.md)
├── lib/utils.ts              # cn() class-merging helper
├── public/                   # Logos and brand artwork (owned by Save Point)
│   └── brand/
├── .github/CODEOWNERS        # All changes reviewed by the maintainer
├── .env.example              # EmailJS settings template (copy to .env.local)
├── next.config.ts  tsconfig.json  eslint.config.mjs  postcss.config.mjs
├── package.json
├── LICENSE                   # Proprietary, all rights reserved
└── SECURITY.md
```

## Running it locally

Requires Node.js 20 or newer.

```sh
npm install
cp .env.example .env.local   # then fill in the EmailJS values
npm run dev                  # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (every page is static) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

### Environment variables

Only the contact form needs these. Everything else works without them.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service |
| `NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID` | Template used for contact enquiries |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

The same values are set in the Vercel project for production.

> [!WARNING]
> Never commit real values. `.env.local` and every other `.env*` file except
> `.env.example` are git-ignored. The EmailJS key is a *public* key by design,
> but keep it in the environment so it can be rotated without a code change.

## Deploying

Pushing to `master` deploys to production on Vercel. There is no separate
release step.

The canonical address is `https://savepoint.co.nz` (no `www`). In Vercel,
`savepoint.co.nz` serves the site and `www.savepoint.co.nz` redirects to it.
The code's canonical tags, sitemap and `metadataBase` all use the same
address, so keep them in step if the domain ever changes. See
[`docs/05-metadata-and-seo.md`](docs/05-metadata-and-seo.md#canonical-domain-and-redirects).

When a page's content changes, update its date in `app/sitemap.ts`.

## Documentation

Engineering documentation is in [`docs/`](docs/README.md), written for someone
opening the project for the first time:

1. [Architecture](docs/01-architecture.md)
2. [Routing and pages](docs/02-routing-and-pages.md)
3. [Components](docs/03-components.md)
4. [Styling and design tokens](docs/04-styling-and-design-tokens.md)
5. [Metadata and SEO](docs/05-metadata-and-seo.md)
6. [Utilities and types](docs/06-utilities-and-types.md)
7. [Dependencies audit](docs/07-dependencies-audit.md)
8. [Build and tooling](docs/08-build-and-tooling.md)

## Brand and graphic design

The Save Point brand identity was designed for Save Point by
**Emily Jacobs** (graphic designer, New Zealand). Her work includes the logo
and logo mark, wordmark, colour palette, typography, website illustrations,
flyers and business cards. Save Point Limited owns the final designs. Emily
Jacobs is credited as their designer in the site footer and keeps the right
to show them in her portfolio.

The website itself was built by **Logan Young**, also credited in the footer.

Brand files in this repository:

| File | What it is |
|---|---|
| `public/logo.png`, `public/logo-wordmark.png`, `public/logo-flag.png` | Logo lockup, wordmark and flag mark |
| `public/brand/logo-flag-square.jpg`, `public/brand/blocks-logo.png` | Square and block versions of the logo |
| `public/brand/hourglass.png`, `lightbulb.png`, `coin.png`, `finger.png` | Pixel-art illustrations |
| `public/brand/icon-192.png`, `public/brand/icon-512.png`, `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico` | App and browser icons made from the logo mark |
| `app/opengraph-image.png`, `app/twitter-image.png` | Social share images built from the brand artwork |

| Colour | Hex |
|---|---|
| Purple (primary) | `#b791c2` |
| Blue | `#699fd5` |
| Yellow | `#eecc67` |
| Green | `#82c889` |

Headings and the logo type use Chakra Petch Bold, and body text uses Figtree.
Both fonts are from Google Fonts under the SIL Open Font License, and they
aren't covered by Save Point's ownership.

## Ownership and licence

Copyright © 2025–2026 Save Point Limited. All rights reserved.

The source code, written content, prices, legal policies and brand artwork in
this repository belong to Save Point Limited. They are not open source. You
may read the code, but you may not copy, reuse, redistribute or deploy it, or
use the Save Point name, logo or artwork, without written permission. See
[`LICENSE`](LICENSE) for the full terms.

Third-party packages in `package.json` keep their own licences.

## Contact

- Website: [savepoint.co.nz](https://savepoint.co.nz)
- General enquiries: [contact@savepoint.co.nz](mailto:contact@savepoint.co.nz)
- Technical or repository questions: [logan@savepoint.co.nz](mailto:logan@savepoint.co.nz)
- Support: [support@savepoint.co.nz](mailto:support@savepoint.co.nz)
