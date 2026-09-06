import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/writing",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["active", "complete", "paused"]),
    featured: z.boolean(),
    repository: z.url().optional(),
  }),
});

export const collections = {
  writing,
  projects,
};
