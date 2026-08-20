import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every article is one Markdown file in src/content/writing/.
// The schema below is checked at build time, so a missing title or a
// malformed date fails loudly here rather than rendering a broken page.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Set when the piece is also on Substack, so the page can link across.
    substackUrl: z.string().url().optional(),
  }),
});

export const collections = { writing };
