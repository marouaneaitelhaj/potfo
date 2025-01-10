import { create } from 'zustand';

type Language = 'en' | 'fr';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguage = create<LanguageStore>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}));