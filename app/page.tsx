import { BookOpen } from 'lucide-react';
import PreferencesForm from '@/components/organisms/PreferencesForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8 mb-12">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-12 h-12 text-primary" />
            <h1 className="text-4xl font-bold">LivroMatch</h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Descubra seu próximo livro favorito através de recomendações personalizadas
            baseadas em suas preferências e interesses únicos de leitura.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Conte-nos sobre suas preferências de leitura</h2>
          <PreferencesForm />
        </div>
      </div>
    </div>
  );
}