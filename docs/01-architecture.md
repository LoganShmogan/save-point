# Architecture

## Rendering model: fully static (SSG)

Every route in this app is a **React Server Component** with no
`"use client"` directive, no `fetch()` calls, no `params`/`searchParams`
usage, and no `dynamic = "force-dynamic"` export. Under Next.js App Router
rules, a route segment is only rendered dynamically (per-request) if it
opts into dynamic behavior. None of these pages do, so at `next build` time
every route is evaluated **once**, ahead of time, and its output is written
to disk as static HTML in `.next/`. Confirm this yourself — `npm run build`
prints:

```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /contact
├ ○ /error
├ ○ /legal
├ ○ /manifest.webmanifest
├ ○ /pricing
├ ○ /robots.txt
└ ○ /sitemap.xml

○  (Static)  prerendered as static content
```

The `○` marker is Next's own build-output legend for "prerendered static
content" — every single route qualifies. There is no `ƒ` (dynamic function)
or `●` (SSG with `generateStaticParams`) route in this app, because there
are no dynamic segments (`[slug]`) anywhere in the `app/` tree.

Practically, this means:
- `npm run start` (after `npm run build`) serves pre-built HTML files from
  disk. Node is only needed to serve static files and handle routing —
  there is no per-request React render happening in production.
- There is nothing to cache-invalidate. If you change copy in a `page.tsx`,
  it only takes effect after a rebuild + redeploy.
- This is why `docs/06-utilities-and-types.md` can say, accurately, that
  the app has no data layer: there is no request-time code path that could
  read from one.

## App Router file conventions used in this repo

Next.js's App Router (the `app/` directory) treats certain filenames as
**reserved conventions** — the framework's build step scans the file tree
and wires up routing/metadata based on filename alone, not just folder
name. This repo uses six of them:

| File | Convention | What Next does with it |
|---|---|---|
| `app/layout.tsx` | Root layout | Wraps every route's rendered output in this component's JSX. Must render `<html>` and `<body>` since it's the root layout (no parent layout above it). Its `metadata` export is the fallback for any child route that doesn't override a given field. |
| `app/page.tsx` | Page | The default export becomes the component rendered for the `/` route. A `page.tsx` file is what actually makes a folder "a route" — a folder without one (e.g. `app/navigation/`) is not routable, it's just a place to put a component. |
| `app/not-found.tsx` | Not-found boundary | Rendered whenever a route doesn't match any `page.tsx`, or when code explicitly calls Next's `notFound()` helper (not used here). Next automatically returns HTTP 404 for this render — no manual status code handling needed. |
| `app/manifest.ts` | Web app manifest | Default export is a function returning a `MetadataRoute.Manifest` object. Next serializes it to JSON and serves it at `/manifest.webmanifest` with the correct `Content-Type`. |
| `app/robots.ts` | Robots directives | Default export returns a `MetadataRoute.Robots` object; Next serializes it to the plain-text `robots.txt` format and serves it at `/robots.txt`. |
| `app/sitemap.ts` | Sitemap | Default export returns a `MetadataRoute.Sitemap` (an array of URL entries); Next serializes it to XML and serves it at `/sitemap.xml`. |

Every one of these (except `layout.tsx`/`page.tsx`) is a case of **Next
generating an HTTP-servable file from a typed TypeScript function** — you
never hand-write XML, `.webmanifest` JSON, or the `robots.txt` grammar
directly; you write a typed object literal and the framework's metadata
compiler renders it into the correct wire format at build time. This is why
`docs/05-metadata-and-seo.md` treats `MetadataRoute.Sitemap` /
`.Robots` / `.Manifest` as the load-bearing types for those three files —
get the shape wrong and it's a TypeScript build error, not a silent runtime
bug.

Folders that are **not** routes: `app/navigation/`, `app/footer/`,
`app/serviceComponent/` contain a component + its co-located
`*.module.css` file, but no `page.tsx`, so the App Router never registers
them as URL segments. They exist purely as import targets
(`import Navbar from "@/app/navigation/navBar"`), and `@/` resolves to the
project root via the `paths` mapping in `tsconfig.json`
(see [`08-build-and-tooling.md`](./08-build-and-tooling.md)).

## Component tree

There is no client-side router transition logic, no context providers, and
no shared layout state. The tree for a page like `/pricing` is simply:

```
RootLayout (app/layout.tsx)
└── Pricing (app/pricing/page.tsx)
    ├── Navbar (app/navigation/navBar.tsx)
    ├── <page content, hand-written JSX>
    └── Footer (app/footer/footer.tsx)
```

The homepage (`/`) is the only route that composes an extra shared
component, `<Service />` (`app/serviceComponent/service.tsx`), between the
hero section and the "About us" teaser:

```
RootLayout
└── Home (app/page.tsx)
    ├── <hero: logo + h1/h2>
    ├── Navbar
    ├── Service               ← services grid (Automation / Custom Software / Web apps)
    ├── <about teaser: image + text + link to /about>
    └── Footer
```

Note the homepage renders `<Navbar />` *after* its hero block in JSX source
order (`app/page.tsx`), not before it — the hero logo sits above the nav
bar visually. Every other page (`/about`, `/pricing`, `/contact`,
`/legal`, `/error`) renders `<Navbar />` as the first child, so the
homepage's nav placement is a one-off, not the pattern to copy for new
pages.

## Data flow: there isn't one

There is no `useState`, `useEffect`, `useReducer`, Context provider, form
handler, or API route (`app/api/*`) anywhere in the codebase. All copy
(prices, service descriptions, legal text, contact details) is inlined
directly as JSX string literals in each `page.tsx`. Concretely, this means:

- Changing the price of a package requires editing
  `app/pricing/page.tsx` and redeploying — there is no admin panel, CMS, or
  environment variable driving it.
- The `@clerk/nextjs` and `convex` packages in `package.json` are the
  remnants of a previous iteration of this project that had auth and a
  backend. They were removed from the code (see commit `c5fa151`,
  "removed clerk and convex stuff") but never uninstalled from
  `package.json` — they contribute zero behavior today. Full audit in
  [`07-dependencies-audit.md`](./07-dependencies-audit.md).

## Turbopack and the build pipeline

Next 16 uses **Turbopack** (Vercel's Rust-based bundler) as the default
compiler for both `next dev` and `next build`, replacing webpack. The
`next.config.ts` file pins `turbopack.root` explicitly:

```ts
const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
};
```

This exists to work around a real bug encountered during development:
Turbopack auto-detects the "workspace root" by walking up the directory
tree looking for lockfiles, and it found an unrelated
`~/package-lock.json` in the developer's home directory (from an
unconnected `chart.js` install). That made Turbopack resolve `node_modules`
from `~/node_modules` instead of `save-point/node_modules`, so it couldn't
find `tailwindcss` and `next dev` crashed with `Can't resolve 'tailwindcss'`.
Pinning `turbopack.root` to `__dirname` (i.e., the directory containing
`next.config.ts`) forces module resolution to stay inside the project,
regardless of what lockfiles exist further up the filesystem.
