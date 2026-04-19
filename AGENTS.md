# Pixel Brewer Studios

## Project Structure

- `pixel-brewer-client/` - Angular 21 application (the only project)

## Key Commands

```bash
# From pixel-brewer-client/ or root with --prefix
cd pixel-brewer-client && npm install
npm start          # ng serve --open
npm run build      # Production build (outputs to dist/pixel-brewer-client/browser/)
npm run watch      # Dev build with watch
npm test           # Run tests (Jasmine/Karma)
```

## CI/Deploy

- Deploys from `pixel-brewer-client/dist/pixel-brewer-client/browser/*`
- CI workflow runs in `.github/workflows/deploy.yaml`
- Pushes to main branch auto-deploys to https://www.pixelbrewer.dev

## Angular Client Guidance

See `pixel-brewer-client/AGENTS.md` for detailed Angular patterns (signals, standalone components, accessibility requirements, etc.).

## Build Config Notes

- Angular schematics skip tests by default (set `skipTests: true` in angular.json)
- Tailwind CSS v4 with PostCSS
- Package manager: npm (corepack enabled in CI)
- Strict TypeScript enabled with `noImplicitOverride`, `strictTemplates`
