# Contributing

Thank you for considering contributing to **sakai-vue-ts**!

## Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- [pnpm](https://pnpm.io/) — install with `npm install -g pnpm`

## Setup

```sh
git clone https://github.com/<your-username>/sakai-vue-ts.git
cd sakai-vue-ts
pnpm install
pnpm dev
```

## Development Workflow

1. Fork the repository and create a feature branch from `main`:
   ```sh
   git checkout -b feat/my-feature
   ```
2. Make your changes.
3. Run type-check and lint before committing:
   ```sh
   pnpm type-check
   pnpm lint
   ```
4. Commit using [Conventional Commits](https://www.conventionalcommits.org/) (enforced by commitlint):

   | Type        | When to use                                             |
   | ----------- | ------------------------------------------------------- |
   | `feat:`     | New feature                                             |
   | `fix:`      | Bug fix                                                 |
   | `chore:`    | Tooling, config, dependencies                           |
   | `docs:`     | Documentation only                                      |
   | `refactor:` | Code change that neither fixes a bug nor adds a feature |
   | `style:`    | Formatting, missing semicolons, etc.                    |
   | `test:`     | Adding or updating tests                                |

   Example: `git commit -m "feat: add dark mode toggle"`

5. Open a pull request targeting `main`.

## Pull Request Guidelines

- Keep PRs focused — one concern per PR.
- Fill in the PR template fully.
- CI must pass (type-check, lint, build) before a PR can be merged.

## Mock API

All API data in development is served by [MSW](https://mswjs.io/). Handlers live in `src/mocks/handlers.ts`. If you add a new data-fetching feature, add the corresponding mock handler there.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
