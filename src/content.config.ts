import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const labs = defineCollection({
  loader: glob({
    base: "./src/content/labs",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  labs,
};
