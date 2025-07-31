import { defineCollection,z } from "astro:content";
import {glob} from "astro/loaders";

const courses = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./courses"}),
    schema: z.object({
        title: z.string(),
    }),
});

const fonts = defineCollection({
    loader: glob({pattern: "*.md", base: "./fonts"}),
    schema: z.object({
        title: z.string(),
    })
});

export const collections = { courses, fonts };