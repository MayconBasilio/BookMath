// Simple in-memory storage for demonstration
// In a real app, you'd use a proper database

interface DB {
  users: Map<string, any>;
  sessions: Map<string, any>;
}

const db: DB = {
  users: new Map(),
  sessions: new Map(),
};

export function createUser(userData: any) {
  const id = Math.random().toString(36).substring(7);
  const user = { id, ...userData };
  db.users.set(user.email, user);
  return user;
}

export function getUserByEmail(email: string) {
  return db.users.get(email);
}

export function updateUser(email: string, data: any) {
  const user = db.users.get(email);
  if (!user) return null;
  const updatedUser = { ...user, ...data };
  db.users.set(email, updatedUser);
  return updatedUser;
}

export default db;