import type { Book, BookPreferences } from '@/lib/types';
import { BOOK_DATABASE } from '@/lib/data/books';

interface ScoredBook {
  book: Book;
  score: number;
}

function calculateGenreScore(bookGenres: string[], preferredGenres: string[]): number {
  return preferredGenres.reduce((score, genre) => 
    bookGenres.includes(genre) ? score + 3 : score, 0);
}

function calculatePurposeScore(bookPurposes: string[], preferredPurposes: string[]): number {
  return preferredPurposes.reduce((score, purpose) => 
    bookPurposes.includes(purpose) ? score + 2 : score, 0);
}

function calculateMoodScore(bookMoods: string[], preferredMoods: string[]): number {
  return preferredMoods.reduce((score, mood) => 
    bookMoods.includes(mood) ? score + 2 : score, 0);
}

function calculateWritingStyleScore(bookStyles: string[], preferredStyles: string[]): number {
  return preferredStyles.reduce((score, style) => 
    bookStyles.includes(style) ? score + 2 : score, 0);
}

export function findBestMatch(preferences: BookPreferences): Book {
  const scores: ScoredBook[] = BOOK_DATABASE.map(book => {
    let score = 0;

    score += calculateGenreScore(book.genres, preferences.genres);
    score += book.length === preferences.preferredLength ? 2 : 0;
    score += calculatePurposeScore(book.purpose, preferences.readingPurpose);
    score += calculateMoodScore(book.mood, preferences.moodPreference);
    score += calculateWritingStyleScore(book.writingStyle, preferences.writingStyle);

    return { book, score };
  });

  return scores.sort((a, b) => b.score - a.score)[0].book;
}