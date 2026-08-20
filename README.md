# yeboah-works

Personal website for Acquah Yeboah, who writes as Acquah Nana Yeboah.
Live at [www.yeboah.works](https://www.yeboah.works).

## Stack

[Astro](https://astro.build). Static output, no client framework.

```
src/
├── pages/          one file per route
│   └── writing/    [...slug].astro renders each article
├── layouts/        Base.astro: head, meta, structured data
├── components/     Nav.astro, Footer.astro
├── content/
│   └── writing/    articles as Markdown
├── data/           career, portfolio, awards, places (JSON)
└── styles/
public/             images, robots.txt, main.js
```

## Writing a post

Add a Markdown file to `src/content/writing/`:

```markdown
---
title: "Your title"
date: 2026-07-31
description: "One sentence. This is what shows in search results."
tags: [governance, nigeria]
draft: false
---

Your article.
```

Commit and push. It builds and deploys itself.

The frontmatter is schema-checked at build time, so a missing field or a
malformed date fails the build rather than publishing something broken.

## Local development

```
npm install
npm run dev
```

Then open http://localhost:4321.

## Design

- Dark by default, "a warm study at night". Light theme available via the
  toggle in the nav, remembered per visitor.
- Type: Gloock (display), Karla (body), IBM Plex Mono (labels)
- Mobile first, 44px minimum touch targets
- Both themes meet WCAG AA contrast
- Respects `prefers-reduced-motion`

## SEO

Canonical URLs, sitemap, RSS and structured data all use
`https://www.yeboah.works` because that is the primary domain in Vercel and
the apex redirects to it. If the primary is ever switched to the apex,
change `site` in `astro.config.mjs` to match, or search engines will be
told one address is canonical and then redirected to another.

## Notes

- The reading list is a Goodreads widget, updated by shelving books there.
- Career logos are letter placeholders pending real assets.

Built by Yeboah and Claude Code.
