import type { Book } from '@/lib/types';

export const BOOK_DATABASE: Book[] = [
  {
    id: '1',
    title: 'A Biblioteca da Meia-Noite',
    author: 'Matt Haig',
    genres: ['Ficção Contemporânea', 'Fantasia'],
    mood: ['Profundo e reflexivo', 'Inspirador e motivacional'],
    writingStyle: ['Poético e metafórico'],
    purpose: ['Crescimento pessoal', 'Escapismo'],
    length: 'Médio (200-400 páginas)',
    description: 'Entre a vida e a morte existe uma biblioteca. E nessa biblioteca, as estantes se estendem infinitamente. Cada livro oferece a chance de experimentar outra vida que você poderia ter vivido.',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400&h=600'
  },
  // ... other books
];