'use client';

import { useSearchParams } from 'next/navigation';
import { BookOpen } from 'lucide-react';
import type { BookPreferences } from '@/lib/types';
import Link from 'next/link';

export default function RecommendationsPage() {
  const searchParams = useSearchParams();
  const preferencesParam = searchParams.get('preferences');
  const preferences: BookPreferences = preferencesParam ? JSON.parse(decodeURIComponent(preferencesParam)) : null;

  // Isso seria substituído por uma lógica real de recomendação
  const mockRecommendation = {
    title: "A Biblioteca da Meia-Noite",
    author: "Matt Haig",
    description: "Entre a vida e a morte existe uma biblioteca. E nessa biblioteca, as estantes se estendem infinitamente. Cada livro oferece a chance de experimentar outra vida que você poderia ter vivido.",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400&h=600",
    genres: ["Ficção", "Fantasia", "Contemporâneo"],
    themes: ["Escolhas de Vida", "Filosofia", "Esperança"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8 mb-12">
          <Link href="/" className="flex items-center space-x-3">
            <BookOpen className="w-12 h-12 text-primary" />
            <h1 className="text-4xl font-bold">LivroMatch</h1>
          </Link>
          
          <h2 className="text-2xl font-semibold">Sua Recomendação Personalizada de Livro</h2>
        </div>

        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <img 
              src={mockRecommendation.coverUrl}
              alt={mockRecommendation.title}
              className="w-48 h-72 object-cover rounded-lg shadow-md mx-auto md:mx-0"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{mockRecommendation.title}</h3>
              <p className="text-lg text-muted-foreground mb-4">por {mockRecommendation.author}</p>
              <p className="mb-4">{mockRecommendation.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Gêneros</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockRecommendation.genres.map(genre => (
                      <span key={genre} className="px-3 py-1 bg-secondary rounded-full text-sm">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Temas</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockRecommendation.themes.map(theme => (
                      <span key={theme} className="px-3 py-1 bg-secondary rounded-full text-sm">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Obter Nova Recomendação
          </Link>
        </div>
      </div>
    </div>
  );
}