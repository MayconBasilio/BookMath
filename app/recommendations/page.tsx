'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { BookOpen } from 'lucide-react';
import type { BookPreferences } from '@/lib/types';
import { BOOK_DATABASE } from '@/lib/data/books';
import { findBestMatch } from '@/lib/utils/bookMatcher';
import BookDetails from '@/components/molecules/BookDetails';
import Link from 'next/link';


export default function RecommendationsPage() {
  const searchParams = useSearchParams();
  const [preferences, setPreferences] = useState<BookPreferences | null>(null);
  useEffect(() => {
    const preferencesParam = searchParams.get('preferences');
    if (preferencesParam) {
      setPreferences(JSON.parse(decodeURIComponent(preferencesParam)));
    }
  }, [searchParams]);

  const recommendedBook = preferences ? findBestMatch(preferences) : BOOK_DATABASE[0];

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
          <BookDetails book={recommendedBook} />
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
    </Suspense>
  );
}