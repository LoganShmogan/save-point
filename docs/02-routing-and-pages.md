# Routing and Pages

All routes live under `app/`. Next's App Router maps folder path → URL
path 1:1, where a folder becomes a live route only if it contains a
`page.tsx`. This repo has no route groups (`(folder)`), no parallel routes
(`@slot`), no intercepting routes (`(.)folder`), and no dynamic segments
(`[param]`) — it's the simplest possible case of the App Router: a flat
tree of static folders.

## Route table

| URL | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero, automation band, `<Service />` overview, About-us teaser, `<Footer />` |
| `/services` | `app/services/page.tsx` | Full detail per service; content lives in `app/services/servicesData.ts` (shared with `<Service />`) |
| `/about` | `app/about/page.tsx` | Origin story, mission, values, team |
| `/pricing` | `app/pricing/page.tsx` | Fixed-price ready-made starters (data in `app/pricing/packages.ts`), custom "from" prices per service (from `servicesData.ts`), add-ons. Starter names and warranties are also listed in the legal warranty section 4.2 |
| `/contact` | `app/contact/page.tsx` | Email / Facebook / location, response-time copy |
| `/legal` | `app/legal/page.tsx` | Privacy Policy, ToS, Disclaimer, Support, Refund/Warranty — all in one page, sectioned |
| `/error` | `app/error/page.tsx` | Static "under construction" placeholder. **Not** a Next.js `error.tsx` boundary — see below. |
| *(any unmatched path)* | `app/not-found.tsx` | Rendered with HTTP 404 |
| `/manifest.webmanifest` | `app/manifest.ts` | PWA manifest, generated |
| `/robots.txt` | `app/robots.ts` | Crawler directives, generated |
| `/sitemap.xml` | `app/sitemap.ts` | URL list for search engines, generated |

## Important naming trap: `app/error/page.tsx` vs. Next's `error.tsx` convention

Next.js has a **separate**, framework-reserved convention:
`app/error.tsx` (no folder) is a special Client Component that acts as a
React error boundary, automatically rendered when a Server Component
throws during rendering.

This repo does not have that file. It has `app/error/page.tsx` — a folder
named `error` containing a normal `page.tsx`. Because of the folder, this
is just a regular, ordinarily-routed page at `/error`, with completely
unrelated content: a static "Page is under construction." message intended
to be linked to manually (e.g. as a placeholder page during development).
**It has no special error-catching behavior.** If a Server Component in
this app actually throws, Next falls back to its built-in default error
UI (or a `global-error.tsx` if one existed — it doesn't), not this page.

`app/error/page.tsx` is marked `noindex` via its `metadata` export (see
[`05-metadata-and-seo.md`](./05-metadata-and-seo.md)) and excluded from
`robots.ts`'s `disallow` list, since it isn't meant to be discoverable —
it's leftover scaffolding, not a page anyone should land on from search.

## Page-by-page technical notes

### `/` — `app/page.tsx`

- Default-exports a function component named `Home`.
- Renders `<Image src="/logo.png" width={470.7525} height={91.51} .../>` —
  note the **non-integer width** (`470.7525`). Next's `<Image>` requires
  numeric `width`/`height` matching the image's intrinsic aspect ratio to
  avoid layout shift; a fractional pixel value here is almost certainly a
  side effect of someone scaling down the original asset's dimensions by a
  ratio rather than measuring the source file and rounding. It renders
  fine (browsers accept fractional CSS pixel widths), it's just an unusual
  literal to see in source.
- The About-us teaser section links to `/about` via `<Link href="/about">`
  using Next's `<Link>` component, which enables client-side
  (no full-page-reload) navigation once JS hydrates, and prefetches the
  target route's payload on hover/viewport-entry in production builds.
- Composes `<Service />` (see [`03-components.md`](./03-components.md)) —
  this is the only page that does.

### `/about` — `app/about/page.tsx`

- Uses **tabs** for indentation (visibly different from every other
  `page.tsx`, which use 2-space indentation). This is a cosmetic
  inconsistency from whatever editor/format-on-save config was active when
  this file was authored — it doesn't affect behavior, ESLint's ruleset in
  this repo does not enforce indentation style.
- Structured as: hero → origin story → 2-column grid (`Our Mission` /
  `Our Values`) → `The Team`. The `Our Values` column contains three
  `<h3>` sub-sections (Documentation, Communication, Privacy), each ending
  in a disclaimer sentence that links to `/legal`.
- Exports page-specific `metadata` (title, description, canonical) that
  overrides the root layout's defaults for just this route — see
  [`05-metadata-and-seo.md`](./05-metadata-and-seo.md) for how Next merges
  nested metadata exports.

### `/pricing` — `app/pricing/page.tsx`

- Three `.priceCard` divs laid out in a CSS Grid (`.grid3`,
  defined in `pricing/page.module.css`), each with a title, a price
  string (plain text, not a number — e.g. `"$200 - $750"`, `"$1000 ++"` —
  so there is no currency/number formatting logic anywhere, it's just
  copy), a description, a `<ul>` of inclusions, and an "Enquire" link to
  `/contact`.
- Nothing here is data-driven — there's no array of `{ name, price,
  features }` objects mapped over JSX. Each card is hand-duplicated JSX.
  Adding a fourth tier means writing a fourth `<div className={styles.priceCard}>`
  block by hand, not appending to a config array.

### `/contact` — `app/contact/page.tsx`

- Contact methods (`mailto:` link, Facebook profile URL, "New Zealand" as
  a plain string for location) are hardcoded, not sourced from a shared
  constants file — the same email and Facebook URL are duplicated
  independently in `app/footer/footer.tsx`. If either changes, both files
  need editing (see [`07-dependencies-audit.md`](./07-dependencies-audit.md)
  and the "no shared content layer" note in
  [`01-architecture.md`](./01-architecture.md) for the broader pattern).

### `/legal` — `app/legal/page.tsx`

- The largest page in the repo (~500 lines). All five legal documents
  (Privacy Policy, Terms of Service, Disclaimer, Support, Refund &
  Warranty) live in a single route rather than being split into
  `/legal/privacy`, `/legal/terms`, etc. Anchors/deep-linking to a specific
  section (e.g. `/legal#refunds`) would require manually adding `id`
  attributes to the relevant `<div className={styles.section}>` — none
  currently exist, so every internal `<Link href="/legal">` (used
  throughout `/about`) always lands at the top of the page, not the
  relevant clause.

### `/error` — `app/error/page.tsx`

- See the naming-trap callout above. Renders `<Navbar />` plus a
  centered logo and an `<h1>` reading "Page is under construction." No
  `<Footer />`.

### `app/not-found.tsx`

- Reuses `app/error/page.module.css` for styling (imports
  `styles from "@/app/error/page.module.css"` despite living outside the
  `error/` folder) rather than having its own stylesheet — an intentional
  reuse of the "centered logo + big message" layout, not a mistake, but
  worth knowing if you ever delete or rename `error/page.module.css`: it
  will silently break `not-found.tsx`'s styling too since there's no
  import-time check that the CSS module still exists in dev mode beyond a
  module-not-found error.
