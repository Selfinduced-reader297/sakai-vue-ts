# sakai-vue-ts

A fully TypeScript-migrated version of the [Sakai Vue](https://www.primefaces.org/sakai-vue/) admin template, built with Vue 3, Vite, PrimeVue 4, and Pinia — with a MSW-powered mock API replacing all hardcoded data.

## Features

- **Full TypeScript** — all components, stores, router, and config typed with `vue-tsc`
- **Pinia stores** — five typed stores (`product`, `customer`, `country`, `photo`, `node`) that fetch from a REST API
- **MSW mock API** — [Mock Service Worker](https://mswjs.io/) intercepts all API calls in development, providing realistic data without a backend
- **PrimeVue 4** — full component library with Aura theme
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **Conventional Commits** — enforced via commitlint + husky, powering automated semantic releases

## Tech Stack

| Layer            | Technology              |
| ---------------- | ----------------------- |
| Framework        | Vue 3 (Composition API) |
| Language         | TypeScript 6            |
| Build tool       | Vite 8                  |
| UI library       | PrimeVue 4 + Aura theme |
| State management | Pinia 3                 |
| Routing          | Vue Router 5            |
| Styling          | Tailwind CSS v4         |
| Mock API         | MSW v2 (dev only)       |
| Linting          | ESLint + oxlint         |
| Formatting       | Prettier                |
| Releases         | semantic-release        |

## Getting Started

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- [pnpm](https://pnpm.io/) (recommended)

### Install

```sh
pnpm install
```

### Development

```sh
pnpm dev
```

The dev server starts at `http://localhost:5173`. MSW intercepts all `/api/*` requests automatically — no backend required.

### Type Check

```sh
pnpm type-check
```

### Build

```sh
pnpm build
```

### Lint & Format

```sh
pnpm lint
pnpm format
```

## Mock API (MSW)

In development, all data is served by [Mock Service Worker](https://mswjs.io/) via `src/mocks/handlers.ts`. The following endpoints are available:

| Endpoint                        | Description                        |
| ------------------------------- | ---------------------------------- |
| `GET /api/products`             | 30 products                        |
| `GET /api/products/with-orders` | Products with nested order history |
| `GET /api/customers`            | ~100 customers                     |
| `GET /api/countries`            | ~240 countries                     |
| `GET /api/photos`               | 15 Galleria photos                 |
| `GET /api/nodes/tree`           | TreeView node data                 |
| `GET /api/nodes/tree-table`     | TreeTable node data                |

MSW only runs in development (`import.meta.env.DEV`). Production builds make real network requests.

## Project Structure

```
src/
├── assets/          # Global styles (Tailwind, SCSS)
├── components/      # Reusable UI components (dashboard, landing, layout widgets)
├── layout/          # AppLayout, AppMenu, AppTopbar, AppSidebar
├── mocks/
│   ├── browser.ts   # MSW worker setup
│   └── handlers.ts  # All API mock handlers + data
├── router/          # Vue Router config
├── stores/          # Pinia stores (product, customer, country, photo, node)
├── types/           # TypeScript interfaces
└── views/           # Page components (Dashboard, UI Kit, Blocks, Landing, etc.)
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

Recommended extensions are listed in `.vscode/extensions.json`.

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)
