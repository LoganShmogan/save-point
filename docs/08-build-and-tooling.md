# Build, TypeScript, and Tooling Configuration

## npm scripts (`package.json`)

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

- `npm run dev` — starts the Turbopack dev server (default in Next 16) with
  hot module replacement. No custom port/host flags are configured; it
  binds to `localhost:3000` by default.
- `npm run build` — full production build: type-checks every `.ts`/`.tsx`
  file, statically renders every route (see
  [`01-architecture.md`](./01-architecture.md) for why all routes are
  static), and writes output to `.next/`.
- `npm run start` — serves the output of `npm run build`. **Must** be run
  after a build; there is no build-on-demand behavior in `start`.
- `npm run lint` — runs `eslint` with no additional flags, which picks up
  `eslint.config.mjs` automatically (ESLint 9's flat-config resolution:
  no `--config` flag needed, it looks for `eslint.config.{js,mjs,cjs}` in
  the CWD by convention).

There is no `test` script and no test runner (Jest/Vitest/Playwright)
installed in `package.json` — this repo currently has zero automated
tests of any kind.

## TypeScript (`tsconfig.json`)

Key compiler options and what they actually do in this repo:

- `"strict": true` — enables the full strict-mode bundle (`strictNullChecks`,
  `noImplicitAny`, `strictFunctionTypes`, etc. all at once). Combined with
  `"skipLibCheck": true` (skip type-checking of `.d.ts` files in
  `node_modules`, which is standard — it means a broken type definition in
  a third-party package can't fail your build, at the cost of not catching
  genuine third-party type errors either).
- `"jsx": "react-jsx"` — uses the modern JSX transform (React 17+), which
  means `.tsx` files do **not** need `import React from "react"` at the
  top just to use JSX syntax; the transform auto-injects the necessary
  `jsx()`/`jsxs()` calls from `react/jsx-runtime` instead of the classic
  `React.createElement`. Consistent with this: no file in `app/` imports
  `React` explicitly.
- `"moduleResolution": "bundler"` — tells TypeScript to resolve imports the
  way modern bundlers do (supports package.json `"exports"` field
  conditions, etc.) rather than emulating older Node.js `require()`
  resolution. Required for some of the newer dependencies here (Tailwind
  v4's package structure in particular relies on `"exports"` map
  resolution).
- `"incremental": true` — TypeScript caches prior type-checking results
  (in a `.tsbuildinfo` file) to speed up subsequent `tsc` runs; relevant to
  build speed, not to behavior.
- `"paths": { "@/*": ["./*"] }` — this is what makes
  `import Navbar from "@/app/navigation/navBar"` resolve to
  `<repo-root>/app/navigation/navBar.tsx`. It's a TypeScript-level path
  alias; Next.js's own bundler (Turbopack) independently honors the same
  mapping by reading this same `tsconfig.json` `paths` field, so the alias
  works identically in both the type-checker and the actual bundled
  output — you don't need to configure it twice.
- `"include"` explicitly lists `.next/types/**/*.ts` and
  `.next/dev/types/**/*.ts` — these are Next's own **generated** type
  declaration files (created during `dev`/`build`, not hand-written) that
  give you typed `params`/`searchParams` for dynamic routes. This repo has
  no dynamic routes, so these generated files are currently near-empty,
  but the `include` entry is part of Next's standard scaffolded
  `tsconfig.json` and is left in for forward-compatibility if dynamic
  routes are added later.

## ESLint (`eslint.config.mjs`)

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
```

This is ESLint 9's **flat config** format (`eslint.config.mjs` — the
successor to the old `.eslintrc.json`; ESLint 9 requires flat config by
default). Two composed rule-set packages from `eslint-config-next`:

- `core-web-vitals` — Next's opinionated ruleset aimed at preventing
  patterns that hurt Core Web Vitals scores (e.g. it's what would flag a
  raw `<img>` tag in favor of `next/image`, or an unoptimized
  `<link>`/font-loading pattern). This is why every image in the codebase
  goes through `next/image` rather than a plain `<img>` tag.
- `typescript` — TypeScript-aware linting rules (e.g.
  `@typescript-eslint`-family checks) layered on top.

`react/no-unescaped-entities` (part of the Next/React ruleset, not
custom-configured here) is the rule responsible for the lint errors you'll
see if you grep for raw `"`/`'` characters inside JSX text nodes in
`contact/page.tsx` and `legal/page.tsx` — these are pre-existing,
not introduced by any of the documented content edits, and don't affect
`next build` (ESLint errors don't fail a production build unless you
explicitly wire lint-on-build enforcement, which this repo does not do —
`next build`'s TypeScript step and ESLint are independent checks here).

The `globalIgnores` call is worth noting: `eslint-config-next` ships its
*own* default ignore list, and this repo explicitly re-declares it
(`.next/**`, `out/**`, `build/**`, `next-env.d.ts`) — a comment in the file
says "Override default ignores of eslint-config-next," implying this was
added because the defaults weren't being picked up as expected in some
ESLint 9 flat-config edge case, not because a *different* ignore list was
wanted.

## PostCSS (`postcss.config.mjs`)

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

Single-plugin PostCSS pipeline. `@tailwindcss/postcss` is Tailwind v4's
official PostCSS plugin — passing it an empty options object (`{}`) means
Tailwind is running with zero custom configuration options at the PostCSS
level (all its actual configuration, per v4's CSS-first model, lives
inside the `@theme` block in `globals.css` instead — see
[`04-styling-and-design-tokens.md`](./04-styling-and-design-tokens.md)).

## `next.config.ts`

```ts
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Old pages Google still has on file. /job-search is left as a 404 since
  // it has no replacement yet.
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/packages", destination: "/pricing", permanent: true },
      { source: "/automation", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
```

Two settings. `redirects()` permanently redirects removed pages that
Google had indexed; see
[`05-metadata-and-seo.md`](./05-metadata-and-seo.md#canonical-domain-and-redirects).

`path.resolve(__dirname)`
resolves to the absolute path of the directory containing this config
file (the project root), pinned explicitly to stop Turbopack's
auto-detected "workspace root" heuristic from walking up past this
directory. See [`01-architecture.md`](./01-architecture.md) for the exact
failure this fixes (an unrelated `package-lock.json` in the developer's
home directory was being mistaken for a monorepo root, breaking
`node_modules` resolution for `tailwindcss` specifically).

## `components.json` (shadcn/ui CLI config)

Not consumed by Next.js, TypeScript, or the build pipeline at all — this
file is read exclusively by the **shadcn/ui CLI** (`npx shadcn add
<component>`) if it's ever invoked in this repo. It pre-declares:
- `"style": "new-york"` — which visual variant of shadcn's component
  templates to scaffold when a component is added.
- `"tailwind.css": "app/globals.css"` — where the CLI should look for /
  inject theme tokens.
- `"aliases"` — matches the `@/*` path mapping already present in
  `tsconfig.json`, so components the CLI generates would land at
  `components/ui/*.tsx` and import via `@/components/ui/...`, `@/lib/...`,
  etc.

No component has been added yet (`components/` doesn't exist in the repo).
This file being present with no corresponding `components/` folder is the
project-root signature of "shadcn/ui was initialized but never used" —
consistent with the unused `cn()` helper and the incomplete Tailwind theme
tokens documented in
[`06-utilities-and-types.md`](./06-utilities-and-types.md) and
[`04-styling-and-design-tokens.md`](./04-styling-and-design-tokens.md).
