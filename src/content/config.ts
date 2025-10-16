import { defineCollection, z } from "astro:content";
import { optional } from "astro:schema";
const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        coAuthor: z.string().optional(),
        description: z.string(),
        time: z.string(),
        img: z.string().optional(),
        link: z.string().optional(),
    })
})

export const collections = { projects };