# blog.anuragparida.com

Personal blog. Astro + [Astro Sienna](https://github.com/anjay-goel/astro-sienna), deployed on Cloudflare Pages.

## Writing a post

Create a `.md` or `.mdx` file in `src/content/post/`. The filename becomes the URL slug.

```markdown
---
title: "Post title"
publishDate: 2026-08-22
description: "One sentence, 10–160 chars. Used in cards and meta tags."
tags: [kubernetes, notes]
# updatedDate: 2026-09-01
# draft: true
---

Body goes here.
```

`description` and `publishDate` are required and validated at build time — a
malformed post fails the build rather than rendering wrong.

### Images

Put them in `src/content/post/_assets/` and reference them relatively:

```markdown
![Alt text](./_assets/diagram.png)
```

Astro resizes, converts, and hashes them at build. A broken path is a build
error, not a silent 404.

## Commands

| Command | What it does |
| --- | --- |
| `pnpm dev` | Dev server at http://localhost:4321 |
| `pnpm build` | Type-check, build to `dist/`, index with Pagefind |
| `pnpm preview` | Serve the production build locally |
| `pnpm format` | Biome + Prettier |

Node version is pinned in `.nvmrc`.

## Deployment

Cloudflare Pages builds on push to `main`:

- Build command: `pnpm build`
- Output directory: `dist`

## Configuration

- `src/site.config.ts` — author, profile links, nav, comments, analytics
- `astro.config.ts` — `site` is set to the production domain; it drives canonical URLs, RSS, sitemap, and OG images
- `src/content/page/about.md` — the About page
- `src/styles/global.css` — design tokens

## Theme updates

Upstream is tracked as the `theme` remote:

```sh
git fetch theme
git merge theme/main
```
