'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../atoms/Button';
import Select from '../atoms/Select';
import MultiSelect from '../atoms/MultiSelect';
import PreferenceField from '../molecules/PreferenceField';
import { 
  READING_FREQUENCIES, 
  BOOK_LENGTHS, 
  GENRES,
  READING_PURPOSES,
  MOOD_PREFERENCES,
  WRITING_STYLES
} from '@/lib/constants';
import type { BookPreferences } from '@/lib/types';

export default function PreferencesForm() {
  const router = useRouter();
  const [preferences, setPreferences] = useState<BookPreferences>({
    genres: [],
    readingFrequency: '',
    preferredLength: '',
    readingPurpose: [],
    moodPreference: [],
    writingStyle: []
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
        label="Qual tamanho de livro você prefere?"
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
        label="Quais gêneros literários você mais gosta?"
        description="Selecione até 3 gêneros (segure Ctrl/Cmd para selecionar vários)"
      >
        <MultiSelect
          options={GENRES as unknown as string[]}
          value={preferences.genres}
          onChange={(value) => setPreferences(prev => ({ 
            ...prev, 
            genres: value.slice(0, 3)
          }))}
          required
        />
      </PreferenceField>

      <PreferenceField 
        label="Qual seu principal objetivo ao ler?"
        description="Selecione até 2 objetivos (segure Ctrl/Cmd para selecionar vários)"
      >
        <MultiSelect
          options={READING_PURPOSES as unknown as string[]}
          value={preferences.readingPurpose}
          onChange={(value) => setPreferences(prev => ({ 
            ...prev, 
            readingPurpose: value.slice(0, 2)
          }))}
          required
        />
      </PreferenceField>

      <PreferenceField 
        label="Que tipo de atmosfera você procura em um livro?"
        description="Selecione até 2 opções (segure Ctrl/Cmd para selecionar vários)"
      >
        <MultiSelect
          options={MOOD_PREFERENCES as unknown as string[]}
          value={preferences.moodPreference}
          onChange={(value) => setPreferences(prev => ({ 
            ...prev, 
            moodPreference: value.slice(0, 2)
          }))}
          required
        />
      </PreferenceField>

      <PreferenceField 
        label="Qual estilo de escrita você mais aprecia?"
        description="Selecione até 2 estilos (segure Ctrl/Cmd para selecionar vários)"
      >
        <MultiSelect
          options={WRITING_STYLES as unknown as string[]}
          value={preferences.writingStyle}
          onChange={(value) => setPreferences(prev => ({ 
            ...prev, 
            writingStyle: value.slice(0, 2)
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