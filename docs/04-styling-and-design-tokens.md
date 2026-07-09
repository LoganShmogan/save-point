# Styling and Design Tokens

The site is styled with **CSS Modules** — plain, hand-written CSS. A
Tailwind v4 + shadcn/ui scaffold is also installed and partially wired into
`globals.css`, but it is not used by any page. Both systems coexist in the
repo; this doc explains both, and is explicit about which one is live.

## CSS Modules mechanics

Every component/page has a co-located `*.module.css` file
(e.g. `app/pricing/page.module.css` next to `app/pricing/page.tsx`).
Next.js's built-in CSS Modules support (via its bundler — Turbopack in this
version) is triggered purely by the `.module.css` filename suffix. At
build time:

1. Each class name declared in the file (`.priceCard`, `.heroTitle`, etc.)
   is rewritten to a globally-unique identifier, typically of the form
   `PricingCard_priceCard__a1B2c` (exact hash format is a Turbopack/webpack
   implementation detail, not something this repo depends on directly).
2. The import `import styles from "@/app/pricing/page.module.css"` gives
   you a plain JS object at build/runtime: `{ priceCard: "PricingCard_priceCard__a1B2c", ... }`.
3. Writing `className={styles.priceCard}` therefore applies the *hashed*
   class name, which is scoped to this file — a `.priceCard` class defined
   in a different `*.module.css` file is a completely different, unrelated
   CSS rule, even though the source both call it `.priceCard`. This is the
   entire point of CSS Modules: it gives you the ergonomics of plain CSS
   (no utility-class soup, no CSS-in-JS runtime) while guaranteeing zero
   cross-file class name collisions, without a naming convention like BEM
   doing that work manually.

Because scoping is per-file, this repo's convention of every page/component
having a *generically named* `.section`, `.hero`, `.container` class
(reused as a name across `about/page.module.css`, `pricing/page.module.css`,
`contact/page.module.css`, `legal/page.module.css` independently) is safe —
they never collide, because each is a distinct compiled identifier scoped
to its own module.

## Design tokens (`app/globals.css`)

The live color palette is six CSS custom properties defined once, on
`:root`:

```css
:root {
  --purple: #b791c2;
  --yellow: #eecc67;
  --blue: #699fd5;
  --green: #82c88a;
  --black: #000000;
  --white: #ffffff;
}
```

These are referenced by name throughout every `*.module.css` file (e.g.
`background-color: var(--purple)` for card backgrounds, `color: var(--green)`
for hover states, `border: solid 10px var(--white)` for the thick card
borders that appear across services/pricing/footer cards). This is the
**entire** design system: six named colors, no shade scale (no
`--purple-100` / `--purple-900`), no semantic aliasing (no `--color-primary`
pointing at `--purple`) — components reference the literal palette names
directly.

`--yellow` is defined but, as of this writing, not referenced by any
`*.module.css` file in the repo — it's a reserved/unused brand color.

Two more globals worth knowing:
- `html, body { background: var(--black); color: var(--white); }` — the
  entire site is dark-mode-only by default; there is no light theme, and
  no `prefers-color-scheme` handling.
- `* { box-sizing: border-box; }` — a global reset so `width`/`height`
  values throughout the CSS modules include padding/border rather than
  excluding them (the standard modern reset, but worth knowing since it's
  declared once, globally, rather than per-component).

## Fonts (`next/font/google`, wired in `app/layout.tsx`)

```tsx
const chakra = Chakra_Petch({ subsets: ["latin"], weight: ["700"], variable: "--font-display" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400"], variable: "--font-body" });
```

`next/font/google` downloads the font files **at build time** and
self-hosts them from the app's own origin, rather than the page making a
runtime request to `fonts.googleapis.com`. This has two concrete effects:
1. No third-party network request for fonts at all — better privacy (no
   Google-visible request per visitor) and eliminates the render-blocking
   round-trip a `<link rel="stylesheet" href="fonts.googleapis.com/...">`
   would otherwise cost.
2. The `variable` option doesn't apply a font directly — it generates a CSS
   custom property (`--font-display`, `--font-body`) containing the
   resolved font-family stack (including Next's automatically-generated
   fallback metrics to reduce layout shift while the font loads). That
   variable is attached to `<html>` via
   `className={\`${chakra.variable} ${figtree.variable}\`}` in
   `app/layout.tsx`, making both variables available to **every**
   descendant element in the document, which is why individual
   `*.module.css` files can just write `font-family: var(--font-display)`
   without importing anything themselves.

Only **one weight** is loaded per font (700 for Chakra Petch, 400 for
Figtree) — there's no 400/500/600/700 range being fetched, which keeps the
font payload minimal but also means you cannot use e.g. `font-weight: 600`
anywhere and expect the browser to render an actual semi-bold cut; it will
synthesize (faux-bold/faux-weight) or silently fall back to the nearest
loaded weight, because only the one static weight file was downloaded.

There is no explicit mapping of "which font for which purpose" beyond
comments in `layout.tsx` (`// Main header / button font`, `// Main body
font`) — `--font-display` is used for all headings, nav links, prices,
and buttons; `--font-body` is used for paragraph text. This is convention
enforced by each `*.module.css` author remembering to write the right
`var()`, not by a type system or a shared heading component.

## The unused Tailwind v4 + shadcn/ui scaffold

`app/globals.css` starts with:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ...sidebar-*, chart-*, radius-* mappings... */
}
```

This is boilerplate generated by the shadcn/ui CLI (`components.json` at
the repo root confirms this — it's the CLI's own config file, pointing
`tailwind.css` at `app/globals.css` and defining path aliases for
`@/components`, `@/lib`, `@/hooks`, `@/components/ui`). In Tailwind v4, the
`@theme` at-rule is the **replacement** for the old JS `tailwind.config.js`
— it declares design tokens as CSS custom properties that Tailwind then
generates utility classes from (e.g. defining `--color-background` here is
what would make a `bg-background` utility class resolve to that value).

**The catch: `--background`, `--foreground`, `--radius`, and every
`--sidebar-*`/`--chart-*` variable referenced inside that `@theme inline`
block are never actually assigned a value anywhere in this file.** A
typical shadcn `globals.css` has a second block —
`:root { --background: oklch(1 0 0); --foreground: oklch(0.145 0 0); ... }`
plus a `.dark { ... }` override block — supplying the actual color values.
That block does not exist in this repository. The `:root` block that
*does* exist only defines the six brand colors (`--purple`, `--yellow`,
etc.) shown above.

Net effect: `--color-background` resolves to `var(--background)`, which is
an unset custom property, which CSS resolves to its **initial value**
(effectively invalid/`unset` for a color) rather than throwing an error.
The one place this is actually used —

```css
@layer base {
  body {
    @apply bg-background text-foreground;
  }
}
```

— is therefore a no-op in practice: `bg-background`/`text-foreground`
apply computed values that fall through to nothing, and the *actual*
background/text colors you see (`--black`/`--white`) come from the plain
`html, body { background: var(--black); color: var(--white); }` rule
declared further down the same file, not from the Tailwind utility
classes. If you ever try to use a Tailwind utility class expecting it to
theme correctly (e.g. `className="bg-background"` on a new component),
it will silently do nothing visually — you'd need to either finish wiring
up the shadcn color tokens in `:root`/`.dark`, or stop relying on that
`@theme` block and use the existing `--purple`/`--black`/`--white` tokens
directly.

`components.json` also declares `"iconLibrary": "lucide"`, matching the
`lucide-react` dependency in `package.json` — but no component has ever
been generated into a `components/ui/` folder (that folder doesn't exist),
and no `.tsx` file in `app/` imports from `lucide-react` or `@/components`.
See [`07-dependencies-audit.md`](./07-dependencies-audit.md) for the full
list of installed-but-unused packages this implies.
