import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// Your own feed, generated from the Markdown files. Readers can subscribe
// directly, and Substack can pull from it when importing a post.
export async function GET(context) {
  const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: "Yeboah's Notes",
    description: 'Writing on African tech, business, governance and policy.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags,
      // Absolute and without a trailing slash, so feed links match the
      // canonical URL on the page exactly. A mismatch splits search signals.
      link: new URL(`/writing/${post.id}`, context.site).href,
    })),
    customData: '<language>en-gb</language>',
  });
}
