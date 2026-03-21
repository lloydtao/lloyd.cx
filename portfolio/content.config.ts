import { defineCollection, defineContentConfig } from "@nuxt/content";
import { travelCardSchema } from "./types/travel-card-props";

export default defineContentConfig({
  collections: {
    trips: defineCollection({
      source: "trips/**/index.json",
      type: "data",
      schema: travelCardSchema,
    }),
  },
});
