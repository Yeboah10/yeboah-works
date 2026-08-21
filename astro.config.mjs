// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Must match where the site is actually served. yeboah.works (no www) is
  // the primary domain in Vercel. If that primary is ever switched back to
  // www, this has to change too, or canonical URLs, the sitemap and the RSS
  // feed will name an address different from the one Vercel treats as real.
  site: 'https://yeboah.works',
  trailingSlash: 'never',
  build: {
    // Emit /about.html rather than /about/index.html so Vercel's cleanUrls
    // setting keeps serving exactly the paths the site serves today.
    format: 'file',
  },
  integrations: [sitemap()],
});
