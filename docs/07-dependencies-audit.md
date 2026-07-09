# Dependency Audit

Full inventory of `package.json`, cross-referenced against actual `import`
statements in `app/` and `lib/` (verified via repo-wide grep, not
inferred). This is a factual snapshot as of this writing — re-run the
grep commands below yourself before trusting this table after future
changes:

```sh
grep -rn "lucide-react\|fortawesome\|@clerk\|convex\|class-variance-authority" --include="*.tsx" --include="*.ts" app lib
```

## `dependencies`

| Package | Version | Status | Notes |
|---|---|---|---|
| `next` | `^16.1.6` (installed: `16.2.3`) | **Used** | The framework. Every route, the Metadata API, `next/image`, `next/font`, `next/link` all come from here. |
| `react` / `react-dom` | `19.2.0` | **Used** | Peer requirement of Next 16. No use of React 19-specific new APIs (no `use()`, no Server Actions, no `useOptimistic`) — the app only needs React for JSX/component rendering, nothing version-specific. |
| `clsx` | `^2.1.1` | **Installed, unused in practice** | Only consumed inside `lib/utils.ts`'s `cn()` helper, which itself is imported nowhere (see [`06-utilities-and-types.md`](./06-utilities-and-types.md)). Real dependency of the shadcn/ui scaffold, not of any shipped page. |
| `tailwind-merge` | `^3.4.0` | **Installed, unused in practice** | Same situation as `clsx` — only reachable via the unused `cn()`. |
| `class-variance-authority` | `^0.7.1` | **Fully unused** | Zero imports anywhere in the repo. This is the `cva()` utility shadcn/ui uses to define component style variants (e.g. a Button's `variant="outline" | "ghost"` prop) — relevant only once actual `components/ui/*` files are generated via the shadcn CLI. None exist yet. |
| `lucide-react` | `^0.553.0` | **Fully unused** | Zero imports. Declared as the icon library in `components.json` (`"iconLibrary": "lucide"`), but no icon from this package is rendered anywhere — all "icons" currently on the site are actually `next/image`-rendered PNG illustrations (`public/ads/*.png`), not `lucide-react` SVG components. |
| `@fortawesome/free-solid-svg-icons` / `@fortawesome/react-fontawesome` | `^7.1.0` / `^3.1.1` | **Fully unused** | Zero imports. A second, entirely separate icon system installed alongside `lucide-react` — the repo currently has two unused icon libraries rather than one. |
| `@clerk/nextjs` | `^6.35.1` | **Fully unused (removed feature)** | Zero imports. Clerk is an authentication provider. Git history (commit `c5fa151`, "updated main image to load faster, removed clerk and convex stuff") confirms auth was ripped out of the actual code, but the npm package itself was never removed from `package.json`. There is no sign-in flow, no protected route, no `<ClerkProvider>` anywhere in `app/layout.tsx` today. |
| `convex` | `^1.29.1` | **Fully unused (removed feature)** | Zero imports. Convex is a backend-as-a-service (database + server functions). Same commit as above removed its usage. No `ConvexProvider`, no `useQuery`/`useMutation` calls, no `convex/` schema folder exists in the repo. |

## `devDependencies`

| Package | Version | Status | Notes |
|---|---|---|---|
| `typescript` | `^5` (installed: `5.9.3`) | **Used** | Strict mode enabled (`tsconfig.json`); every `.tsx`/`.ts` file in the repo is type-checked on `next build` (see the "Running TypeScript" step in the build output). |
| `@types/node`, `@types/react`, `@types/react-dom` | `^20` / `^19` / `^19` | **Used** | Ambient type declarations required for TypeScript to understand Node/React/ReactDOM APIs — not directly imported, but load-bearing for the whole codebase to typecheck at all. |
| `eslint`, `eslint-config-next` | `^9` (`9.39.1`) / `16.0.3` | **Used** | Powers `npm run lint`. See [`08-build-and-tooling.md`](./08-build-and-tooling.md) for the flat-config setup. |
| `tailwindcss` | `^4` (installed: `4.3.2`) | **Partially used** | The `@import "tailwindcss"` directive in `globals.css` does compile and is processed by the PostCSS plugin below — but as documented in [`04-styling-and-design-tokens.md`](./04-styling-and-design-tokens.md), the one Tailwind utility class actually applied anywhere (`bg-background text-foreground` on `body`) resolves to unset custom properties and is a functional no-op. Every visible style on the site comes from hand-written CSS Modules, not Tailwind utility classes. |
| `@tailwindcss/postcss` | `^4` | **Used** | The actual PostCSS plugin registered in `postcss.config.mjs` that makes the `@import "tailwindcss"` line in `globals.css` do anything at all (Tailwind v4 moved from a standalone CLI/webpack-plugin model to a PostCSS-plugin-first model). |
| `autoprefixer` | `^10.5.0` | **Used (indirectly)** | Standard PostCSS plugin for adding vendor prefixes; not explicitly listed in `postcss.config.mjs`'s `plugins` object (only `@tailwindcss/postcss` is), so its actual effect depends on whether `@tailwindcss/postcss` chains it internally. Worth verifying if a vendor-prefix bug ever comes up — it is not wired in as its own explicit PostCSS plugin entry in this repo's config. |
| `tw-animate-css` | `^1.4.0` | **Partially used** | Imported via `@import "tw-animate-css";` in `globals.css` (adds Tailwind-compatible animation utility classes) — but since no component uses any Tailwind utility classes for animation, this import currently ships CSS that nothing references. |
| `baseline-browser-mapping` | `^2.9.5` | **Transitive/tooling** | Not imported directly by any app code; used internally by Tailwind v4's tooling to determine browser support baselines for generated CSS (e.g. which CSS features are safe to emit unprefixed). |
| `postcss` | `^8.5.9` | **Used** | The engine `postcss.config.mjs` configures. |

## Net takeaway

Of the 11 packages under `dependencies`, **5 have zero imports anywhere in
the app** (`class-variance-authority`, `lucide-react`, both FontAwesome
packages, `@clerk/nextjs`, `convex`) and 2 more (`clsx`, `tailwind-merge`)
are only reachable through a helper function that is itself unused. That's
7 of 11 dependencies contributing no runtime behavior to the shipped site
today — they inflate `node_modules` size and `npm install` time, and two
of them (`@clerk/nextjs`, `convex`) pull in non-trivial transitive
dependency trees for features that were deliberately removed. None of this
is a correctness bug (an unused dependency doesn't break anything), but if
disk size, install time, or `npm audit` surface area ever becomes a
concern, this table is the exact list of what's safe to `npm uninstall`
without touching a single line of `app/` or `lib/` — with the caveat that
`clsx`/`tailwind-merge` should only go if `lib/utils.ts`'s `cn()` is
deleted too (or intentionally kept in reserve for future conditional
styling, per the recommendation in
[`06-utilities-and-types.md`](./06-utilities-and-types.md)).
