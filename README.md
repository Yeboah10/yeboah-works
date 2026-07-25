# yeboah-works

Personal website for Acquah Yeboah. Live at [yeboah.works](https://yeboah.works).

## Stack

Static HTML, CSS, and vanilla JavaScript. No build step, no dependencies.

```
├── index.html        homepage (magazine scroll)
├── about.html        bio, career timeline, places
├── writing.html      Substack RSS feed
├── portfolio.html    five tracks, awards, extracurriculars
├── contact.html
├── 404.html
├── css/style.css     design system
├── js/main.js        nav, scroll reveal, rotating tagline, RSS fetch
└── img/
```

## Design

- Palette: dark walnut background, cream text, rust and gold accents
- Type: Gloock (display), Karla (body), IBM Plex Mono (labels)
- Mobile-first, tested from 375px up
- Respects `prefers-reduced-motion`

## Local development

Open `index.html` in a browser. For the RSS feed and scroll animations to work,
serve over HTTP rather than `file://`:

```
npx serve .
```

## Deployment

Pushes to `main` deploy automatically via Vercel.

## Notes

- Writing is pulled from `https://yeboah.substack.com/feed` at page load via a
  CORS proxy. A planned Astro migration will move this to build time.
- The reading list in `index.html` is hard-coded and updated by hand.
- Career timeline logos are letter placeholders pending real assets.

Built by Yeboah and Claude Code.
