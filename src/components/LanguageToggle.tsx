import { Languages } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      style={{ zIndex: 9999 }}
      className="bg-[var(--background)] fixed top-4 right-4 flex items-center gap-2 px-4 py-2 border border-[var(--primary)]/30 rounded-full hover:border-[var(--primary)] transition-colors text-[var(--primary)] glow-border"
    >
      <Languages className="w-4 h-4" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
}