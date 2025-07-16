export interface Stats {
  photos: number;
  memories: number;
}

export interface Photo {
  slug: string;
  title: string;
  description: string;
  dateTaken: string;
  photoUrl: string;
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
  photos: Photo[];
}
