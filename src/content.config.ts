import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		prevBlogSlug: z.string().optional(),
		nextBlogSlug: z.string().optional(),
		prevTitle: z.string().optional(),
		nextTitle: z.string().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

// 4. Define a `loader` and `schema` for each collection
const portfolio = defineCollection({
  loader: glob({ base: './src/content/portfolio', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
	tags: z.array(z.string()),            // array is required but can be empty []
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog, portfolio };
console.log();