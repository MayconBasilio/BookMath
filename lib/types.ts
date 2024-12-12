export interface BookPreferences {
  favoriteGenres: string[];
  readingFrequency: string;
  preferredLength: string;
  themes: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genres: string[];
  themes: string[];
  description: string;
  coverUrl: string;
  pageCount: number;
  rating: number;
}