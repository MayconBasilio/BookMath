export interface BookPreferences {
  genres: string[];
  readingFrequency: string;
  preferredLength: string;
  readingPurpose: string[];
  moodPreference: string[];
  writingStyle: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genres: string[];
  mood: string[];
  writingStyle: string[];
  purpose: string[];
  length: string;
  description: string;
  coverUrl: string;
}