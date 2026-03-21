import { z } from "@nuxt/content";

export interface TravelPhoto {
  slug: string;
  title: string;
  description: string;
  dateTaken: string;
  photoUrl: string;
}

export const travelPhotoSchema: z.ZodType<TravelPhoto> = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  dateTaken: z.string(),
  photoUrl: z.string(),
});

export interface TravelPost {
  slug: string;
  title: string;
  description: string;
  datePosted: string;
  photos: TravelPhoto[];
}

export const travelPostSchema: z.ZodType<TravelPost> = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  datePosted: z.string(),
  photos: z.array(travelPhotoSchema),
});

export interface TravelCardProps {
  slug: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  countries: string[];
  tags: string[];
  coverPhoto: string;
  owner: string;
  contributors: string[];
  favourite: boolean;
  red: boolean;
  posts: TravelPost[];
}

export const travelCardSchema: z.ZodType<TravelCardProps> = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  countries: z.array(z.string()),
  tags: z.array(z.string()),
  coverPhoto: z.string(),
  owner: z.string(),
  contributors: z.array(z.string()),
  favourite: z.boolean(),
  red: z.boolean(),
  posts: z.array(travelPostSchema),
});
