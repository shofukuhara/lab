import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const labs = defineCollection({
  loader: glob({
    base: "./src/content/labs",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  labs,
};
