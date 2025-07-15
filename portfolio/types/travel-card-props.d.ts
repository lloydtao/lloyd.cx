export interface Stats {
  photos: number;
  memories: number;
}

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
  stats: Stats;
}
