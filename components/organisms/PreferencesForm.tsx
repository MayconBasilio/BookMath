'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../atoms/Button';
import Select from '../atoms/Select';
import MultiSelect from '../atoms/MultiSelect';
import PreferenceField from '../molecules/PreferenceField';
import { READING_FREQUENCIES, BOOK_LENGTHS, GENRES, THEMES } from '@/lib/constants';
import type { BookPreferences } from '@/lib/types';

export default function PreferencesForm() {
  const router = useRouter();
  const [preferences, setPreferences] = useState<BookPreferences>({
    favoriteGenres: [],
    readingFrequency: '',
    preferredLength: '',
    themes: []
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/recommendations?preferences=${encodeURIComponent(JSON.stringify(preferences))}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PreferenceField 
        label="Com que frequência você lê?"
        description="Isso nos ajuda a entender seu nível de comprometimento com a leitura"
      >
        <Select
          options={READING_FREQUENCIES.map(freq => ({ value: freq, label: freq }))}
          value={preferences.readingFrequency}
          onChange={(e) => setPreferences(prev => ({ 
            ...prev, 
            readingFrequency: e.target.value 
          }))}
          required
        />
      </PreferenceField>

      <PreferenceField 
        label="Tamanho preferido de livro"
        description="Selecione seu tamanho ideal de livro"
      >
        <Select
          options={BOOK_LENGTHS.map(len => ({ value: len, label: len }))}
          value={preferences.preferredLength}
          onChange={(e) => setPreferences(prev => ({ 
            ...prev, 
            preferredLength: e.target.value 
          }))}
          required
        />
      </PreferenceField>

      <PreferenceField 
        label="Gêneros favoritos"
        description="Selecione múltiplos gêneros que você gosta (segure Ctrl/Cmd para selecionar vários)"
      >
        <MultiSelect
          options={GENRES as unknown as string[]}
          value={preferences.favoriteGenres}
          onChange={(value) => setPreferences(prev => ({ 
            ...prev, 
            favoriteGenres: value 
          }))}
          required
        />
      </PreferenceField>

      <PreferenceField 
        label="Temas que você gosta"
        description="Selecione temas que te interessam (segure Ctrl/Cmd para selecionar vários)"
      >
        <MultiSelect
          options={THEMES as unknown as string[]}
          value={preferences.themes}
          onChange={(value) => setPreferences(prev => ({ 
            ...prev, 
            themes: value 
          }))}
          required
        />
      </PreferenceField>

      <Button type="submit" className="w-full">
        Obter Recomendações
      </Button>
    </form>
  );
}