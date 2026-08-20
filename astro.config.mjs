// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Must match where the site is actually served. www is the primary domain
  // in Vercel and the apex redirects to it, so canonical URLs, the sitemap
  // and the RSS feed all have to say www or search engines get told one
  // address is canonical and then redirected to a different one.
  site: 'https://www.yeboah.works',
  trailingSlash: 'never',
  build: {
    // Emit /about.html rather than /about/index.html so Vercel's cleanUrls
    // setting keeps serving exactly the paths the site serves today.
    format: 'file',
  },
  integrations: [sitemap()],
});
