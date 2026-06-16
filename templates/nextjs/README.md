# Managed App — Next.js Template

A Microsoft Managed App built with [Next.js](https://nextjs.org/) using static export (`output: 'export'`).

## Getting Started

```bash
npm install
npx ms app dev
```

The CLI detects this is not a Vite project and automatically runs a config server alongside `next dev`.

## Build

```bash
npm run build
```

Produces a fully static site in `out/` — no Node.js server required at runtime.

## Deploy

```bash
npx ms app deploy
```

Builds and publishes the `out/` directory to the Managed Apps platform.

## Key Differences from Vite Template

- No `@microsoft/managed-apps-vite-plugin` needed
- Build output in `out/` (not `dist/`)
- `next.config.ts` configures `output: 'export'` for static generation
- `ms app dev` uses the built-in config server fallback (no plugin integration required)
- Full Next.js App Router features available (layouts, loading states, error boundaries)
