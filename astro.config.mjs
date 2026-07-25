// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Used to build absolute URLs in the sitemap, RSS feed, and canonical tags.
  site: 'https://yeboah.works',
  trailingSlash: 'never',
  build: {
    // Emit /about.html rather than /about/index.html so Vercel's cleanUrls
    // setting keeps serving exactly the paths the site serves today.
    format: 'file',
  },
  integrations: [sitemap()],
});
