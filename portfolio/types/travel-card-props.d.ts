export interface Location {
  countries: string[];
}

export interface Stats {
  photos: number;
  memories: number;
}

export interface TravelCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: Location;
  type: string;
  tags: string[];
  coverPhoto: string;
  owner: string;
  contributors: string[];
  stats: Stats;
}
