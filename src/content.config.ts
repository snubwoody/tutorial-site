import { defineCollection,z,reference } from "astro:content";
import {glob} from "astro/loaders";

const lessons = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./collections/lessons"}),
    schema: z.object({
        title: z.string(),
        course: reference("courses"),
    }),
});

const courses = defineCollection({
    loader: glob({pattern: "*.toml", base: "./collections/courses"}),
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = { courses,lessons };