export interface Photo {
  slug: string;
  title: string;
  description: string;
  dateTaken: string;
  photoUrl: string;
}

export interface Posts {
  slug: string;
  title: string;
  description: string;
  datePosted: string;
  photos: Photo[];
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
  favourite: boolean;
  red: boolean;
  posts: Post[];
}
