# Metadata, SEO, and the Generated Routes

This doc covers Next's typed Metadata API as actually used in this repo:
`app/layout.tsx`'s `metadata` export, the per-page overrides in
`about/pricing/contact/legal/error/not-found`, and the three
metadata-file routes (`manifest.ts`, `robots.ts`, `sitemap.ts`).

## Current setup (October 2026)

Parts of this doc below predate these changes; where they disagree, this
section wins.

- **Per-page metadata** goes through `pageMetadata()` in
  `app/shared/seo.tsx`. It sets title, description, canonical, and the full
  `openGraph`/`twitter` objects (including the share image), because Next
  replaces those objects per page rather than merging them.
- **Structured data** uses the `<JsonLd>` component from the same file:
  - root layout: `ProfessionalService` + `WebSite` graph
  - every inner page: `BreadcrumbList` via `breadcrumbJsonLd()`
  - `/services`: `ItemList` of `Service` with NZD starting prices
  - `/pricing`: `OfferCatalog` of the starter packages
- **Icons and share image** use Next file conventions: `app/favicon.ico`
  (real 48x48 ICO), `app/icon.png` (512), `app/apple-icon.png` (180),
  `app/opengraph-image.png` and `app/twitter-image.png` (1200x630).
  Manifest icons live in `public/brand/icon-192.png` and `icon-512.png`.
- When page content changes, bump that route's date in `app/sitemap.ts`.

## The `Metadata` type and merge behavior

Every `page.tsx`/`layout.tsx` may export a `const metadata: Metadata = {...}`
object (imported from `next`, typed via `import type { Metadata } from "next"`).
Next statically analyzes these exports at build time (they cannot be
computed from runtime data unless you use the async `generateMetadata`
function instead — this repo doesn't need to, since none of the metadata
depends on anything dynamic) and merges them **root-down**: a child
route's `metadata` object is shallow-merged over its parent layout's, key
by key, not deep-merged. Concretely in this repo:

- `app/layout.tsx` defines the site-wide defaults: `title` (as a
  `{ default, template }` object — see below), `description`, `keywords`,
  `openGraph`, `twitter`, `robots`, `alternates.canonical: "/"`,
  and `metadataBase`.
- `app/about/page.tsx`, `pricing/page.tsx`, `contact/page.tsx`,
  `legal/page.tsx` each export their own `metadata` with just `title`,
  `description`, and `alternates.canonical`. Because the merge is per-key,
  overriding `title`/`description` on a child route does **not** wipe out
  the parent's `openGraph`/`twitter`/`robots` — those keys are simply
  absent from the child object, so the parent's values win by default for
  those fields (a page like `/pricing` still inherits the root layout's
  Open Graph image and Twitter card, just with the root's title/description
  swapped for its own).
- `app/error/page.tsx` and `app/not-found.tsx` override `robots: { index:
  false, follow: false }` specifically — this is the mechanism that keeps
  the placeholder/404 pages out of search results without needing a
  separate `<meta name="robots">` tag written by hand; Next generates that
  tag from this object at build time.

### The `title.template` mechanism

```ts
title: {
  default: "Save Point | Custom Software & IoT Development, New Zealand",
  template: "%s | Save Point NZ",
},
```

This is a two-part contract:
- `default` is used verbatim on any route that does **not** provide its
  own `title` (there are none currently — every routed page sets one).
- `template` is applied to every **child** route's `title` string, with
  `%s` substituted for that child's own value. So `/pricing`'s
  `title: "Pricing"` does not render as `<title>Pricing</title>` — it
  renders as `<title>Pricing | Save Point NZ</title>`, because the
  template is inherited from the root layout and applied automatically.
  A child route can only supply the plain string; it cannot opt out of the
  parent's template without also defining its own `title.template`.

## `metadataBase` and relative URLs

```ts
metadataBase: new URL("https://savepoint.co.nz"),
```

This is what allows every other metadata field in this app to use
**relative** paths — `alternates: { canonical: "/about" }`,
`openGraph.images: ["/logo.png"]` — instead of fully-qualified URLs. Next
resolves any relative URL found in metadata fields against `metadataBase`
at build time. Without this field, Next would either throw a build warning
or leave those URLs unresolved/relative in the emitted `<head>`, which most
crawlers and social-media unfurlers will not resolve correctly (an
Open Graph `og:image` must be an absolute URL to work in practice, per the
Open Graph protocol spec — relative URLs are technically undefined
behavior for consumers).

## Canonical domain and redirects

The canonical address is `https://savepoint.co.nz` (no `www`). Everything
in the code agrees on it: `SITE_URL` in `app/shared/seo.tsx`,
`metadataBase`, every `alternates.canonical`, `robots.txt` and
`sitemap.xml`.

The host has to agree too. In Vercel (Project → Settings → Domains):

| Domain | Setting |
|---|---|
| `savepoint.co.nz` | Connected to Production (serves the site) |
| `www.savepoint.co.nz` | 308 redirect to `savepoint.co.nz` |

Until 31 October 2026 this was the other way round: Vercel redirected the
apex to `www`, while the canonical tags and sitemap pointed back at the
apex. Every sitemap URL redirected and every page's canonical pointed at a
redirect, which Search Console reported as "Redirect error" and "Page with
redirect". **Don't add a host-based www ↔ apex redirect in
`next.config.ts`.** Vercel's domain redirect runs before the app, so a
second rule in the opposite direction creates a real infinite loop. If the
canonical domain ever changes, change Vercel and `SITE_URL` together.

Removed pages that Google had already indexed are permanently redirected
in `next.config.ts` (`redirects()`, served as 308, which Google treats
like a 301):

| Old path | Now goes to |
|---|---|
| `/home` | `/` |
| `/packages` | `/pricing` |
| `/automation` (old Home Automation venture page) | `/services` |

`/job-search` (old Job Search venture page) is deliberately left as a
404. It has no replacement yet, and redirecting it to the home page would
be treated as a soft 404. When a page is removed in future, add a redirect
here if it has a real replacement, otherwise let it 404, and take it out
of `app/sitemap.ts` either way.

To check the live site, each URL should reach a 200 in one hop:

```sh
curl -sIL https://www.savepoint.co.nz/services | grep -iE '^(HTTP|location)'
```

## JSON-LD structured data

`app/layout.tsx` defines a plain JS object, `organizationJsonLd`, typed
implicitly (no `Thing`/`Organization` TypeScript type is imported —
schema.org's vocabulary isn't type-checked by the `next`/React toolchain,
it's just a JSON shape search engines know how to parse), and renders it
via:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
/>
```

Technical notes:
- `dangerouslySetInnerHTML` is required here because React does not have
  a first-class way to render a `<script>` tag's *text content* from a JS
  object — `<script>{JSON.stringify(x)}</script>` would have React
  HTML-escape the JSON string (turning `"` into `&quot;`, etc.), which
  would make it invalid JSON to any parser reading the raw HTML. Using
  `dangerouslySetInnerHTML` bypasses React's escaping and writes the exact
  JSON string as the script's raw content.
- This is safe here specifically because `organizationJsonLd` is a
  **build-time-constant object literal in the source code** — there is no
  user input, no CMS field, and no request-derived data flowing into it.
  `dangerouslySetInnerHTML` is a genuine XSS vector when the content comes
  from anything user-influenced; it is inert risk-wise when the content is
  a static literal you wrote yourself, which is the case for every field
  in this object (`name`, `url`, `logo`, `email`, `telephone`, `areaServed`,
  `address`, `sameAs`).
- The schema type used is `"@type": "ProfessionalService"` — one of
  schema.org's `LocalBusiness` subtypes. This is what allows Google to
  potentially render a knowledge-panel-style result (business name, area
  served, contact) for brand-name searches like "Save Point NZ", as
  distinct from a generic `Organization` type which carries less
  local-business-specific semantics.

## `app/manifest.ts` → `/manifest.webmanifest`

Returns a `MetadataRoute.Manifest` object (`name`, `short_name`,
`description`, `start_url`, `display: "standalone"`, `background_color`,
`theme_color`, `icons`). This is the PWA web app manifest — its practical
effect on this project (a marketing site, not an installable app) is
mostly about how the site would appear if a user chose "Add to Home
Screen": `short_name` is used as the home-screen icon label, `icons`
supplies what image to use (currently just `/favicon.ico` at `sizes: "any"`
— there is no dedicated 192×192/512×512 PNG icon set, which most PWA
installability checklists expect; a `.ico` favicon is a minimal-but-valid
fallback).

## `app/robots.ts` → `/robots.txt`

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/error"] }],
    sitemap: "https://savepoint.co.nz/sitemap.xml",
  };
}
```

Compiles to:

```
User-Agent: *
Allow: /
Disallow: /error

Sitemap: https://savepoint.co.nz/sitemap.xml
```

`userAgent: "*"` applies the rule to every crawler. The previous version
of this file had two rules — one allowing only `Googlebot`, and a second
explicitly disallowing `Applebot` and `Bingbot` entirely — which meant
Bing and Apple's crawlers (the latter powers Siri/Spotlight Suggestions
web results, not just a search engine) were told to index nothing at all.
That's been consolidated into the single wildcard rule above.

## `app/sitemap.ts` → `/sitemap.xml`

```ts
const baseUrl = "https://savepoint.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/pricing", "/contact", "/legal"];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
```

Each entry is a `{ url, lastModified, changeFrequency, priority }` tuple
per the sitemap protocol. Two things worth knowing:
- `lastModified: new Date()` evaluates **at build time**, not per-request
  (this whole function only runs once during `next build`, per the
  static-rendering model described in
  [`01-architecture.md`](./01-architecture.md)) — so every entry's
  `<lastmod>` timestamp is simply "whenever the site was last built," not
  a true per-page content-modified date. That's an approximation, not a
  bug: there's no CMS or file-system `mtime` tracking wired in to produce a
  more accurate value.
- `/error` is **deliberately excluded** from the `routes` array (it's not
  in the list), consistent with it being `noindex`'d and disallowed in
  `robots.ts` — all three signals (sitemap omission, robots disallow,
  meta-robots noindex) agree, which matters because search engines treat
  conflicting signals (e.g. a page that's in the sitemap *and* marked
  noindex) as a signal to trust with lower confidence.

## Heading hierarchy as an SEO/accessibility signal

Search engines (and screen readers) use heading levels
(`<h1>`…`<h6>`) to build a structural outline of a page, roughly
analogous to a table of contents. The convention enforced across this
codebase (after cleanup) is: **exactly one `<h1>` per page**, corresponding
to that page's primary topic, with `<h2>` for major sections and `<h3>`
for sub-sections within them. This is why, for example,
`app/about/page.tsx`'s three sub-section titles ("Strong Documentation &
Future-Proofing", "Communication & Availability", "Privacy & Transparency")
are `<h3>` nested under the "Our Values" `<h2>`, rather than `<h1>` — three
same-page `<h1>`s would tell a crawler the page has three unrelated
top-level topics, which dilutes rather than reinforces topical relevance
for any one of them.
