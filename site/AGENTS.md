# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Selected design direction

- Source of truth: `qa/reference-warm-sandstone.png`.
- Direction: warm sandstone editorial design with Luanda Marginal and Ilha skyline imagery, dark teal ink, restrained terracotta accents, serif display typography, and documentary evidence framing.
- Preserve the prominent `Validation stage` label and avoid claims that FacadeOps is licensed, insured, operating, or proven safer.
- Public-facing site copy must be available in English and Portuguese.
- Select a supported language from the visitor's browser preference on first use, remember a manual override, and keep a visible language control. Describe this as an adaptive or localized experience rather than advertising that the site is bilingual.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
