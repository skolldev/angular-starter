[![CI](https://github.com/skolldev/angular-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/skolldev/angular-starter/actions/workflows/ci.yml)

# Angular Starter

A minimal, modern Angular starter template with opinionated tooling choices.

## What's Included

**Core:** Angular 21

**Styling:** Tailwind

**Testing:** Vitest + Testing Library + MSW (Mock Service Worker) for API mocking

**Linting & Formatting:** ESLint with rules for Angular and TypeScript, Prettier, Knip (unused dependency detection)

**CI/CD:** GitHub Actions (lint, format check, build, test), Dependabot

## Scripts

```
pnpm start            # Dev server on localhost:4200
pnpm build            # Production build
pnpm test             # Run tests via Vitest
pnpm lint             # ESLint check
pnpm prettier:check   # Check for formatting errors
pnpm prettier:fix     # Fix formatting errors
pnpm knip             # Find unused deps/exports
```
