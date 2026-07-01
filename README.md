# aprovista-pov

Static site hosting AproVista Point-of-View briefs. One HTML file per company under `public/`, deployed to `aprovista-pov.vercel.app` via Vercel's GitHub integration.

## Layout

- `public/banner-logo.png` — AproVista banner used as page header
- `public/index.html` — landing page (root)
- `public/{slug}.html` — POV for a given company (e.g. `public/boland.html` → `/boland`)
- `public/{slug}.pdf` — downloadable PDF version
- `vercel.json` — `cleanUrls: true` so `/boland` serves `boland.html`

## How POVs land here

The AproVista agent (Claude Code) generates each POV, writes the HTML+PDF into `public/`, commits, and pushes. Vercel auto-deploys on push to `main`.

Do not hand-edit POV files — re-run the agent.
