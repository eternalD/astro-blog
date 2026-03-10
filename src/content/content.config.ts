// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';



// 4. Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
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

const portfolio = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
	tags: z.array(z.string().optional()),
	}),
});

export const collections = {
	'blog': blog,
	'portfolio': portfolio
};

