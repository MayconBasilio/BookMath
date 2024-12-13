export const READING_FREQUENCIES = [
  'Diariamente',
  'Várias vezes por semana',
  'Uma vez por semana',
  'Algumas vezes por mês',
  'Mensalmente',
  'Ocasionalmente'
] as const;

export const BOOK_LENGTHS = [
  'Curto (menos de 200 páginas)',
  'Médio (200-400 páginas)',
  'Longo (mais de 400 páginas)',
  'Sem preferência'
] as const;

export const GENRES = [
  'Romance',
  'Mistério e Suspense',
  'Ficção Científica',
  'Fantasia',
  'Ficção Histórica',
  'Biografia',
  'Desenvolvimento Pessoal',
  'Negócios',
  'Literatura Clássica',
  'Ficção Contemporânea',
  'Young Adult',
  'Poesia',
  'História',
  'Ciência',
  'Filosofia'
] as const;

export const READING_PURPOSES = [
  'Entretenimento',
  'Aprendizado',
  'Crescimento pessoal',
  'Escapismo',
  'Inspiração',
  'Relaxamento'
] as const;

export const MOOD_PREFERENCES = [
  'Leve e divertido',
  'Profundo e reflexivo',
  'Emocionante e intenso',
  'Misterioso e intrigante',
  'Inspirador e motivacional',
  'Dramático e complexo'
] as const;

export const WRITING_STYLES = [
  'Direto e objetivo',
  'Descritivo e detalhado',
  'Poético e metafórico',
  'Dinâmico e ágil',
  'Técnico e informativo',
  'Conversacional e informal'
] as const;

// Banco de livros para recomendação
export const BOOK_DATABASE = [
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
  {
    id: '2',
    title: 'Verity',
    author: 'Colleen Hoover',
    genres: ['Mistério e Suspense', 'Romance'],
    mood: ['Misterioso e intrigante', 'Emocionante e intenso'],
    writingStyle: ['Dinâmico e ágil'],
    purpose: ['Entretenimento'],
    length: 'Médio (200-400 páginas)',
    description: 'Uma escritora em dificuldades financeiras aceita uma proposta para completar os últimos livros de uma autora de sucesso que está incapacitada, mas descobre segredos perturbadores.',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400&h=600'
  },
  {
    id: '3',
    title: 'Sapiens: Uma Breve História da Humanidade',
    author: 'Yuval Noah Harari',
    genres: ['Ciência', 'História'],
    mood: ['Profundo e reflexivo'],
    writingStyle: ['Conversacional e informal', 'Técnico e informativo'],
    purpose: ['Aprendizado'],
    length: 'Longo (mais de 400 páginas)',
    description: 'Uma narrativa envolvente sobre a história da humanidade, desde o surgimento do Homo sapiens até o presente, explorando como nos tornamos a espécie dominante do planeta.',
    coverUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400&h=600'
  },
  {
    id: '4',
    title: 'Torto Arado',
    author: 'Itamar Vieira Junior',
    genres: ['Literatura Clássica', 'Ficção Contemporânea'],
    mood: ['Dramático e complexo', 'Profundo e reflexivo'],
    writingStyle: ['Poético e metafórico', 'Descritivo e detalhado'],
    purpose: ['Crescimento pessoal'],
    length: 'Médio (200-400 páginas)',
    description: 'Uma história poderosa sobre duas irmãs que compartilham um segredo ancestral em uma fazenda no interior da Bahia, explorando temas de família, terra e identidade.',
    coverUrl: 'https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?auto=format&fit=crop&q=80&w=400&h=600'
  },
  {
    id: '5',
    title: 'Mindset: A Nova Psicologia do Sucesso',
    author: 'Carol S. Dweck',
    genres: ['Desenvolvimento Pessoal', 'Ciência'],
    mood: ['Inspirador e motivacional'],
    writingStyle: ['Direto e objetivo'],
    purpose: ['Aprendizado', 'Crescimento pessoal'],
    length: 'Médio (200-400 páginas)',
    description: 'Descubra como nossos pensamentos sobre nossas capacidades influenciam significativamente nosso sucesso em todas as áreas da vida.',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400&h=600'
  }
] as const;