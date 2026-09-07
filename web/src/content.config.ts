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

const gallery = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/gallery",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      alt: z.string(),
      caption: z.string().optional(),
      date: z.date(),
      category: z.enum(["kendo", "skiing", "coffee", "cats"]),
    }),
});

export const collections = {
  writing,
  projects,
  gallery,
};
