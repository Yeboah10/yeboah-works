# yeboah.works — Build brief for Claude Code

## What this is

A personal website for Yeboah (full name: Acquah Yeboah), a Nigerian researcher, writer, and builder currently based in Morocco. The domain is **yeboah.works**. The site should feel like stepping into someone's world, not a portfolio template.

---

## Design direction

### Layout: magazine scroll (not a card grid)

The homepage is one long, flowing scroll. Each section takes up most of the viewport. No card grids. No boxy layouts. Think of it like scrolling through a well-designed magazine article about one person.

Separate pages for: About, Writing, Portfolio, Contact.

The homepage previews everything and links deeper.

### Mood: warm, personal, alive

The design concept is "a warm study at night." Dark background, cream-coloured text and elements. Not corporate, not cold, not templated.

### Colour palette (from the working prototype)

```
--bg:           #241C15    (dark walnut background)
--bg-soft:      #2C2216    (slightly lighter background)
--paper:        #F4EBD9    (cream, for text and paper elements)
--paper-shadow: #DDCDA8    (shadow under paper elements)
--ink:          #2A2015    (dark ink, for text on light surfaces)
--cream:        #EFE6D6    (body text colour on dark backgrounds)
--muted:        #B6A98F    (secondary/muted text)
--rust:         #C1602E    (accent colour, links, buttons)
--gold:         #E0A73B    (highlight colour, wordmark accent)
--pine:         #4A7360    (secondary accent, tape/decoration)
```

These are not final but they're the starting direction. The designer and Yeboah liked them. They should not be changed to the typical "cream background with terracotta accent" or "dark background with acid green" patterns. The palette is intentional.

### Typography

```
Display:  'Gloock', serif (headlines, names, section titles)
Body:     'Karla', sans-serif (paragraphs, descriptions)
Mono:     'IBM Plex Mono', monospace (labels, eyebrows, nav, metadata)
```

Load from Google Fonts. Gloock is also the typeface used in Yeboah's Substack brand "Yeboah's Notes."

### Key design rules

- No em dashes in any copy
- British spelling throughout (colour, organise, favour)
- No AI-tell words: delve, crucial, pivotal, robust, underscore, leverage, moreover, furthermore, tapestry, seamless, intricate, testament, holistic, synergy, empower, multifaceted, nuanced, foster, showcase
- Never use the word "sits" in any writing
- Sentence case for headings, not Title Case
- Mobile-first. Most visitors will be on phones, especially from Africa. Every page must work well on mobile before desktop.
- Respect `prefers-reduced-motion`
- Keyboard focus states on all interactive elements

---

## Site architecture

### Pages

1. **Homepage** (index.html) — magazine scroll
2. **About** (about.html) — bio, photos, career story, "right now" section
3. **Writing** (writing.html) — Substack feed via RSS, subscribe embed
4. **Portfolio** (portfolio.html) — five tracks, highlights up front
5. **Contact** (contact.html) — email, socials, note on what conversations are welcome

### Homepage sections (scroll order)

Each section should fill most of the viewport:

1. **Hero** — name "Yeboah", single fixed tagline underneath in small text: "Researcher. Writer. Builder." (not rotating, just one line), portrait photo placeholder, nav links
2. **Welcome line + bio preview** — Welcome line (confirmed copy): "This is where I keep my work, my writing, and whatever I'm thinking about. None of it is finished. Neither am I. Look around." Then two to three short paragraphs from the bio, linking to the full About page.
3. **Writing preview** — latest two to three post titles pulled from Substack RSS, with preview text, linking to the full Writing page
4. **Portfolio preview** — the five track names with one-line descriptions, linking to the full Portfolio page
5. **My shelf** — a lifestyle section:
   - Reading: Goodreads widget (embed code confirmed, see technical requirements below)
   - Listening: Spotify playlist embed (embed code confirmed, see technical requirements below)
   - No movie/watch section. Just books and music.
6. **Subscribe** — embedded Substack subscribe form
7. **Footer** — copyright, social links, colophon line reading "Built by Yeboah and Claude Code"

IMPORTANT: The homepage should breathe. Ample whitespace between sections. Do not clutter with too many words. Let the design do the talking. Each section should be spare and clean, not packed with text.

### About page

Bio copy (confirmed):

"I'm Yeboah. I grew up between Torugbene, Warri, and Yenagoa in southern Nigeria. I studied political science at Federal University Otuoke, where I got interested in how local governments spend money and why nobody seems to be watching.

After university, I taught civic education during NYSC in Osun State, then worked as a research assistant on a peacebuilding project in Bayelsa with Search For Common Ground. I moved to Lagos and spent time reporting on African tech startups at Techloy and Theouut.com, covering over a thousand stories and building databases on startup funding across emerging markets. I also handled brand communications at IGI Insurance, where I wrote more press releases than I can count.

Along the way, I co-founded CAGAD, a governance non-profit, and started Logalab, a civic tech project to make local government data accessible across Nigeria's 774 LGAs. Both are still active. Both are still works in progress.

Right now, I'm in Rabat, finishing a master's in collective intelligence at UM6P on a scholarship from the Ibn Rochd Foundation. I also work as a research intern at Africa Business School, where I develop case studies on African businesses. My most recent fieldwork took me to Nairobi.

I write a newsletter called Yeboah's Notes, where I think out loud about African tech, business, and policy. I read a lot. I listen to music while I work. I'm looking for a PhD."

Style notes: flowing paragraphs, not a timeline or bullet list. Keep whitespace generous. Include photos (portrait, one or two candid shots, placeholders for now).

**"What I believe" section** (confirmed copy):

"Good governance is not complicated. People should know how their money is spent. Leaders should explain their decisions. Citizens should have a say. Most of the tools to make this happen already exist. The problem is not technology. It is will."

**"Places that shaped me" section** (inspired by heyarinze.com's "My Homes")
A horizontal scroll of cities. No year ranges because Yeboah lived between and commuted among these places at different points. Just list the city names in this order, with only two exceptions noted:

- Torugbene
- Warri
- Ughelli
- Yenagoa
- Otuoke (2014-2018)
- Lagos
- Rabat (present)

Only Otuoke and Rabat get dates. The rest are just names. This tells the story geographically without forcing a strict timeline. Use a clean horizontal card scroll, not a timeline.

**Career path with logos**
A visual career timeline showing roles and institutions with their logos. Similar to heyarinze.com's "My Career" section but styled to match yeboah.works' dark palette. Confirmed entries from CV (in chronological order):

- Federal University Otuoke (BSc Political Science, 2014-2018) — Education
- The Abolarin College, Oke-Ila, Osun State / NYSC (Civic Education Teacher, 2018-2019) — Teaching
- Creative Xpressions Int'l Learning Centre, Yenagoa (Admin Assistant, 2020) — Work
- Search For Common Ground Nigeria (Research Assistant, 2020) — Research
- Theouut.com (Reporter/Assistant Editor, 2021-2022) — Work
- N-Teach Fellow, Community Secondary School Kpansia-Epie (Government Teacher, 2021-2022) — Teaching
- Techloy (Technology and Data Reporter, 2022-2023) — Work
- IGI Insurance Plc, Lagos (Brand & Corporate Comms Analyst, 2023-2024) — Work
- UM6P, School of Collective Intelligence (MA Collective Intelligence, 2024-2026) — Education
- SCI Research Assistant under Prof O'Madagain (2025) — Research
- Global Citizens Assembly (Programme & Comms Support, 2026) — Research
- ABS/UM6P Research & Case Development Intern (2026-present) — Research

Each entry needs: logo placeholder, years, role title, institution name, and a type tag (education/work/research/teaching/fellowship). Yeboah will provide logos.

**"Right now" section** — what he's currently working on, updated every few months. Place at the bottom of the About page. Content not yet written (Yeboah will provide).

### Writing page

- Auto-updating feed from Substack RSS: `https://yeboah.substack.com/feed`
- Show latest posts with title, date, and a preview paragraph
- Each post links out to the full article on Substack (full embedding is not possible)
- Embedded Substack subscribe form
- The feed should update automatically when Yeboah publishes. No manual work.
- **Category tags on each article** — tags like "Fintech," "Governance," "Policy," "Business," "Tech" to help visitors scan quickly. These can be pulled from the RSS feed categories if available, or added manually.

### Portfolio page

Five tracks, each as a section on the same page:

1. **Research and academic** — Featured items (ranked by impact):
   - Farmers-herders conflict and national security challenges in Nigeria (published, NPSA South-South Journal, 2022). Link: https://www.researchgate.net/publication/380377622_Farmers-Herders_Conflict_and_National_Security_Challenges_in_Nigeria
   - NLP Sentiment Analysis of Any.do (16,092 Google Play reviews, Python pipeline using Hugging Face transformers, TF-IDF, topic modelling)
   - Participatory Budgeting Policy Brief for Ekeremor LGA, Bayelsa State (recommends PB as governance solution, references Logalab)
   - Texas Flood Forecasting: A Machine Learning Exploratory Approach (with Ayomide Fagbolade, supervised by Prof Ikram Chairi, UM6P 2025)

2. **Communications and PR** — IGI Insurance (200+ pieces of content, 50 media contacts, 15 placements, 36 marketing materials), CAGAD comms work, Techloy (700+ stories, 500-company database), Theouut.com (400+ articles), Yeboah's Notes as a media product

3. **Events and programmes** — Spelling Bee Bayelsa (Comms & Publicity Manager, 2020-2023, raised millions for scholarships), events organised at UM6P, any speaking appearances. Yeboah will add more items.

4. **Civic and governance** — BudgIT/STFL (South-South zone, 6 states), Search for Common Ground peacebuilding research (5 communities, 5 LGAs), Global Citizens Assembly, CAGAD, NYSC voter education and SDG work

5. **Things I've built** — Inspired by heyarinze.com's "My Creations" section. Each item shows project name, role, year, status tag, one-two sentence description, and collaborator credit. Confirmed items:
   - Logalab (Co-founder, 2024-present, Active) — Civic tech project making local government data accessible across Nigeria's 774 LGAs. Under active development.
   - Yeboah's Notes (Founder, ongoing, Active) — Newsletter on African tech, business, and policy on Substack.
   - CAGAD (Head of Policy and Research, ongoing, Active) — Centre for Advancement of Governance and Development, a Nigerian governance non-profit.
   - Vote Beta (Project Manager, 2022, Inactive) — Offline civic campaigns and data-driven voter participation ahead of the 2023 elections. Link: https://t.co/D627bYx5yK
   - Citizen Participation Platform for Tamale Metropolitan Assembly (Designer, 2025, Concept) — A crowd-based feedback system for local governance in Ghana, modelled on Ushahidi and FixMyStreet.

   NOTE on Logalab: always describe as "under active development." It does not currently track live governance data. Never imply it is a deployed product.

Structure: highlights shown up front for each track, with an expandable "see all" for the full list.

**Extracurriculars section** (on the Portfolio page, after the five tracks)
Separate from the main portfolio. Confirmed entries:
- Climate Awareness Club, UM6P (Communications Manager, 2025-present)
- Collective Intelligence Consortium, UM6P (Social Media Manager, 2025, 45k+ impressions)
- WholeLife Initiative for Development (State Coordinator, Osun, 2019-2020)
- NYSC Voter Education CDS Group (Team Lead, 2018-2019)
- Sustainable Development Goals CDS Group (Coordinator, 2019, renovated community library, established SDG clubs in 3 schools)

**Awards and fellowships** (also on the Portfolio page or About page, as a compact list):
- BudgIT STFL Fellow (2025)
- World Bank Group Youth Summit Delegate (2025)
- Ibn Rochd Foundation for Science and Innovation Scholar (2024)
- Building Blocks for Peace Policy Fellow (2024)
- Best Team Player, IGI Graduate Trainee School (2023)
- Nominee, Startup Journalist of the Year, Startup South NG (2021)
- Global Schools Program Advocate (2019)
- Student Leadership Award, NUBSS (2018)
- Top 5 Finalist, Speak Up Bayelsa Public Speaking Contest (2017)

**Professional affiliations** (small mention on About page):
- Associate Member, Nigerian Institute of International Affairs (2022-present)
- Associate Member, NPSA South South Zone (2019-present)

Each extracurricular entry needs: name, role, year, and a link if available. Display as a clean list or horizontal scroll, not cards.

### Contact page

- Email: acquahyeboah01@gmail.com
- LinkedIn: https://www.linkedin.com/in/yeboah01/
- Instagram: https://www.instagram.com/yeboah_01
- Substack: https://yeboah.substack.com/
- A short note about what kinds of conversations Yeboah welcomes (placeholder text for now)

---

## Technical requirements

### Auto-updating Substack feed

Use the RSS feed at `https://yeboah.substack.com/feed` to pull in the latest posts. Write a client-side script (or a build-time fetch if using a static site generator) that reads the feed and displays:
- Post title
- Publication date
- First ~150 characters of the post as a preview
- Link to the full post on Substack

This must update automatically when Yeboah publishes. No manual intervention.

### Substack subscribe embed

Substack provides an embed code for subscribe forms. Use the iframe embed from Substack:

```html
<iframe src="https://yeboah.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
```

Style the surrounding area to match the site's design. The iframe itself will be Substack's default styling.

### Spotify embed

Spotify embed code (confirmed):

```html
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0O3JPzX2NBJTVLyi1J6D3f?utm_source=generator&theme=0&si=3f1831b4a4234527" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
```

Note: `theme=0` means dark theme, which matches the site's dark palette.

### Goodreads widget

Goodreads profile: https://www.goodreads.com/review/list/86244076-acquah-yeboah?shelf=recent-reads

Embed the Goodreads widget using this script (confirmed):

```html
<script src="https://www.goodreads.com/review/custom_widget/86244076.Acquah's%20bookshelf:%20recent-reads?cover_position=left&cover_size=small&num_books=7&order=a&shelf=recent-reads&show_author=1&show_cover=1&show_rating=1&show_review=0&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1784386820&widget_text_color=000000&widget_title_size=medium&widget_width=medium" type="text/javascript" charset="utf-8"></script>
```

The widget auto-updates when Yeboah adds books to his "recent-reads" shelf on Goodreads. The default styling (white background, black text) will need to be restyled to match the site's dark palette. Override the widget container CSS to use the site colours.

### Google Analytics

Measurement ID: **G-4ZQZL9ZKTR**

Add the Google Analytics tag to every page in the `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4ZQZL9ZKTR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-4ZQZL9ZKTR');
</script>
```

### Favicon and OG image

Generate a simple favicon from the letter "Y" using the site colours (gold on dark background, or cream on rust). Create the standard sizes: 16x16, 32x32, and 180x180 (Apple touch icon).

Generate an OG image (1200x630) with:
- "yeboah.works" in the display typeface
- The one-line personal statement (once written)
- Site background colour

Add proper `<meta>` OG tags to every page for social sharing previews.

### Custom 404 page

Create a 404.html page that matches the site design. Tone should be warm and helpful, something like "You've wandered off the path. Here's a way back." with a link to the homepage.

### Colophon

Add a small line in the footer: "Built by Yeboah and Claude Code. Set in Gloock and Karla."

---

## Responsive / mobile

Mobile is the primary experience. Design mobile-first, then scale up to desktop.

- Navigation should collapse to a hamburger or similar pattern on mobile
- The magazine scroll sections should stack naturally on narrow screens
- Spotify and reading widgets should be full-width on mobile
- Subscribe form should be single-column on mobile
- Touch targets should be at least 44x44px
- Test at 375px width (iPhone SE) as the baseline

---

## What's provided vs what's placeholder

### Provided now
- Domain: yeboah.works
- Substack: https://yeboah.substack.com/
- Substack RSS: https://yeboah.substack.com/feed
- LinkedIn: https://www.linkedin.com/in/yeboah01/
- Instagram: https://www.instagram.com/yeboah_01
- Email: acquahyeboah01@gmail.com
- Google Analytics ID: G-4ZQZL9ZKTR
- Spotify embed code (dark theme, playlist ID: 0O3JPzX2NBJTVLyi1J6D3f)
- Goodreads widget code (user ID: 86244076, shelf: recent-reads)
- Colour palette, typography, and design direction
- Homepage prototype (index.html in this folder)
- Full career timeline (12 entries with dates, roles, institutions, type tags, confirmed from CV)
- Portfolio content for all five tracks (research highlights ranked, comms work with numbers, civic work details, things built with status tags)
- Extracurriculars list (5 entries confirmed)
- Awards and fellowships list (9 entries confirmed)
- Professional affiliations (2 entries)
- Places that shaped me: Torugbene, Yenagoa, Otuoke, Lagos, Rabat (year ranges still needed)
- Vote Beta link: https://t.co/D627bYx5yK
- Published paper link: https://www.researchgate.net/publication/380377622_Farmers-Herders_Conflict_and_National_Security_Challenges_in_Nigeria

### Still needed from Yeboah
- Portrait photo and any additional photos (will be uploaded alongside this brief to Claude Code)
- Logos for career timeline institutions (will be uploaded alongside this brief to Claude Code)
- "Right now" section content
- Press mentions (if any)
- Any additional events or speaking appearances for the Events and Programmes track

NOTE: Photos and logos will be provided when Yeboah uploads this brief document to Claude Code. They are not missing, just not included in this file.

---

## Writing style

All copy on this site must follow these rules:

- Plain, simple English. No puffed-up language.
- Sound like a person, not a press release.
- Short sentences. If it needs three commas, split it.
- No banned words (see the full list above under design rules).
- No em dashes. Use commas, full stops, or brackets.
- British spelling.
- Sentence case for headings.
- Straight quotation marks, not curly.

---

## Reference site

**heyarinze.com** — Arinze Obiezue's personal site. Yeboah likes several elements from this site and they've been incorporated into this brief (places that shaped me, career timeline with logos, extracurriculars, the full "shelf" section, category tags on writing, the footer credit). Do NOT copy the visual style (Arinze uses a light cream background and unicode symbols). yeboah.works should keep its own dark, warm palette and cleaner visual language. Use Arinze's site as a structural reference, not a design reference.

---

## Existing prototype

The `index.html` file in this folder is a working homepage prototype built during ideation. It uses the card-grid layout which has been replaced by the magazine scroll layout. Keep the colours, typography, and tone, but rebuild the layout as a flowing magazine scroll. The prototype is a reference for visual direction, not the final structure.

---

## Summary of what to build

1. Homepage — magazine scroll layout, all sections, rotating byline, RSS feed preview, widget placeholders, subscribe embed, Google Analytics
2. About page — structured with placeholders, photo slots, "right now" section
3. Writing page — live Substack RSS feed, subscribe embed
4. Portfolio page — five tracks with placeholder items, highlights plus expandable full list
5. Contact page — email, LinkedIn, Instagram placeholder, Substack
6. 404 page — on-brand, warm, helpful
7. Favicon and OG image — generated from site colours
8. Responsive / mobile-first throughout
9. Google Analytics on every page
10. Navigation between all pages
