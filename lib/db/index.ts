import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite, { schema });

// Initialize database tables
const initDb = () => {
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at INTEGER DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS preferences (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      favorite_genres TEXT NOT NULL,
      reading_frequency TEXT NOT NULL,
      preferred_length TEXT NOT NULL,
      themes TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users (id)
    );
  `);
};

initDb();

export async function createUser(userData: { name: string; email: string; password: string }) {
  const id = Math.random().toString(36).substring(7);
  
  try {
    const result = db.insert(schema.users).values({
      id,
      name: userData.name,
      email: userData.email,
      password: userData.password,
    }).run();
    
    return { id, name: userData.name, email: userData.email };
  } catch (error: any) {
    if (error.message.includes('UNIQUE constraint failed')) {
      throw new Error('User already exists');
    }
    throw error;
  }
}

export async function getUserByEmail(email: string) {
  return db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email)
  });
}

export async function updateUserPreferences(userId: string, preferences: {
  favoriteGenres: string[];
  readingFrequency: string;
  preferredLength: string;
  themes: string[];
}) {
  const id = Math.random().toString(36).substring(7);
  
  return db.insert(schema.preferences).values({
    id,
    userId,
    favoriteGenres: JSON.stringify(preferences.favoriteGenres),
    readingFrequency: preferences.readingFrequency,
    preferredLength: preferences.preferredLength,
    themes: JSON.stringify(preferences.themes),
  }).run();
}