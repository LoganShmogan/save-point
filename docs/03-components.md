# Shared Components

Three components are shared across routes. All three are **zero-prop**
function components — none of them accept or forward any props, so there
is no component API surface to document beyond "import it and render it
with no arguments." Each is co-located with its own `*.module.css` file in
a same-named folder under `app/`.

## `<Navbar />` — `app/navigation/navBar.tsx`

```tsx
const Navbar = () => {
  return (
    <nav className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.home}><Link href="/"><u>Home</u></Link></div>
        <div className={styles.about}><Link href="/about"><u>About</u></Link></div>
        <div className={styles.contact}><Link href="/contact"><u>Contact</u></Link></div>
        <div className={styles.price}><Link href="/pricing"><u>Pricing</u></Link></div>
        <div className={styles.legal}><Link href="/legal"><u>Legal</u></Link></div>
      </div>
    </nav>
  );
};
```

Technical notes:
- Rendered on every route **except** `app/not-found.tsx` does include it
  and so does `app/error/page.tsx` — actually every route in the app
  includes it, there is no route without a nav bar.
- Underlines are done with a literal `<u>` HTML tag around the link text,
  not a CSS `text-decoration: underline`. This means the underline is
  *always on*, including in non-hover state — there is no CSS rule toggling
  it, so removing the `<u>` tag is the only way to change that, editing the
  CSS module won't do it.
- `styles.container` (in `navBar.module.css`) is `position: sticky; top: 10px`
  on `.outer`, so the nav bar sticks 10px from the top of the viewport on
  scroll — it does not use `position: fixed`, meaning it participates in
  normal document flow until its scroll threshold is crossed, and it will
  not overlap content that hasn't scrolled past it yet.
- `z-index: 100` on `.outer` is the only stacking-context rule in the whole
  CSS codebase — nothing else declares a `z-index`, so 100 is arbitrarily
  "high enough," not tuned against a specific colliding element.
- CSS classes `.home`, `.about`, `.contact`, `.price`, `.legal` are named
  after the *route*, not a generic `.navLink` class reused five times —
  each link item has its own class selector even though all five share
  identical rules (see `navBar.module.css:22-32`, a single comma-separated
  selector list). This is a stylistic choice (arguably premature
  specificity) rather than a functional requirement — the rules are
  byte-for-byte identical per class today.
- Note the CSS class is `.price`, but the visible label and route are
  "Pricing" — the class name and the URL don't match (`/pricing` vs.
  `.price`), a naming inconsistency worth knowing about before you go
  searching for a `.pricing` class that doesn't exist.

## `<Footer />` — `app/footer/footer.tsx`

```tsx
const Footer = () => {
  return (
    <footer className={styles.outer}>
      <div className={styles.container}>
        {/* Column 1 — Legal (3 links, all → /legal) */}
        {/* divider */}
        {/* Column 2 — Contact (email text + Facebook link) */}
        {/* divider */}
        {/* Column 3 — Brand tagline + copyright */}
      </div>
    </footer>
  );
};
```

Technical notes:
- Rendered at the bottom of every page **except** `/error` and
  `app/not-found.tsx` — those two intentionally omit it (they're meant to
  be minimal placeholder screens, not full page layouts).
- The "Legal" column renders **three separate `<Link>` elements** —
  "Our Policy", "Terms of Service", "Support" — that all point to the same
  `href="/legal"`. This isn't a bug: since `/legal` is a single page
  containing all of those documents (see
  [`02-routing-and-pages.md`](./02-routing-and-pages.md)), three labeled
  entry points into one page is an intentional (if slightly redundant)
  choice, not three distinct, wired-up routes.
- Layout is a 5-column CSS Grid: `1fr 2px 1fr 2px 1fr` — columns 2 and 4
  are 2px-wide divider elements (`.divider`, `background-color: var(--white)`),
  i.e. the vertical rules between footer columns are actual grid cells with
  a background color, not a `border-left` on the adjacent column.
- `@media (max-width: 768px)` collapses the grid to a single column and
  hides `.divider` entirely, replacing the visual separation with
  `border-bottom` on `.column` instead — so the "divider" element and the
  mobile separator are two different techniques for the same job depending
  on viewport.
- Copyright year is a hardcoded string: `© 2026 Save Point Limited`. It
  is not computed from `new Date().getFullYear()`, so it will silently
  read "2026" forever until someone edits the JSX by hand next January.

## `<Service />` — `app/serviceComponent/service.tsx`

```tsx
const Service = () => {
  return (
    <section>
      <div className={styles.servicesLogo}><h2>Services</h2></div>
      <div className={styles.servicesContainer}>
        {/* 3× .servicesCard: Automation / Custom Software / Web applications */}
      </div>
    </section>
  );
};
```

Technical notes:
- Only rendered from `/` (`app/page.tsx`) — it is not reused on any other
  page, so despite being factored out into its own file/folder, it is
  effectively home-page-only markup, not a genuinely shared component in
  practice.
- Rendered inside a top-level `<main>` on the homepage (`app/page.tsx`
  wraps everything in `<main>`). `Service` itself renders a `<section>` —
  it used to render its own `<main>`, which produced two nested `<main>`
  landmarks in one document (invalid: the HTML spec and the accessibility
  tree both expect at most one `<main>` per page). That was fixed by
  changing `Service`'s root element to `<section>`.
- Each of the three cards is independently hand-written JSX (title, one
  descriptive sentence, a 250×250 illustration via `next/image`, and a
  "View Packages" link to `/pricing`) — like the pricing tiers, this is
  not `.map()`'d over a config array, so adding a fourth service means
  copy-pasting a fourth `<div className={styles.servicesCard}>` block.
- Heading levels inside each card: card title is `<h3>`, the one-line
  description underneath it is a `<p>` (previously an `<h2>`, which was
  incorrect — a plain sentence describing the service isn't a heading;
  see [`05-metadata-and-seo.md`](./05-metadata-and-seo.md) for why heading
  hierarchy matters here beyond visual styling).
- Images use hand-picked pixel dimensions (`width={250} height={250}`)
  against source assets that are actually 1250×1250
  (`public/ads/Hourglass (1250 x 1250).png`, etc. — the filenames literally
  encode the source resolution). Next's `<Image>` component downsamples at
  request time via its built-in image optimizer (or serves an
  `unoptimized` passthrough if that's disabled), so shipping a 1250px
  source for a 250px render target is intentional headroom for retina
  displays (`next/image` will request 2x/3x variants for high-DPI
  screens), not a mistake.

## Root layout — `app/layout.tsx`

Not a "component" in the reusable sense (there's exactly one root layout
per app), but it's the one place that:
- Loads both Google Fonts via `next/font/google` and exposes them as CSS
  variables (`--font-display`, `--font-body`) on the `<html>` element's
  `className`.
- Declares the app-wide `metadata` and `viewport` exports.
- Injects the single `<script type="application/ld+json">` JSON-LD block.
- Renders `<body>{children}</body>` — every route's `page.tsx` output
  becomes `children` here.

Full breakdown in [`05-metadata-and-seo.md`](./05-metadata-and-seo.md) and
[`04-styling-and-design-tokens.md`](./04-styling-and-design-tokens.md).
