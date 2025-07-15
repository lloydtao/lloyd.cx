import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    trips: defineCollection({
      source: "trips/**/index.json",
      type: "data",
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        startDate: z.date(),
        endDate: z.date(),
        countries: z.array(z.string()),
        tags: z.array(z.string()),
        coverPhoto: z.string(),
        owner: z.string(),
        contributors: z.array(z.string()),
        stats: z.object({
          memories: z.number(),
        }),
        photos: z.array(
          z.object({
            slug: z.string(),
            title: z.string(),
            description: z.string(),
            dateTaken: z.string(),
            photoUrl: z.string(),
          }),
        ),
      }),
    }),
  },
});
