'use client';

import type { Book } from '@/lib/types';

interface BookDetailsProps {
  book: Book;
}

export default function BookDetails({ book }: BookDetailsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <img 
        src={book.coverUrl}
        alt={book.title}
        className="w-48 h-72 object-cover rounded-lg shadow-md mx-auto md:mx-0"
      />
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
        <p className="text-lg text-muted-foreground mb-4">por {book.author}</p>
        <p className="mb-4">{book.description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Gêneros</h4>
            <div className="flex flex-wrap gap-2">
              {book.genres.map(genre => (
                <span key={genre} className="px-3 py-1 bg-secondary rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Atmosfera</h4>
            <div className="flex flex-wrap gap-2">
              {book.mood.map(mood => (
                <span key={mood} className="px-3 py-1 bg-secondary rounded-full text-sm">
                  {mood}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}