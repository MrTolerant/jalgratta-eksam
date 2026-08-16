'use client';

import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const DEFAULT_LANG: Language = 'ru';

const LanguageContext = createContext<LanguageContextType>({
  lang: DEFAULT_LANG,
  setLang: () => {},
});

function getClientSavedLang(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  try {
    const saved = localStorage.getItem('est_bike_lang');
    if (saved === 'et' || saved === 'ru' || saved === 'en') {
      return saved as Language;
    }
  } catch {
    // ignore
  }
  return DEFAULT_LANG;
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialLang = useSyncExternalStore(subscribe, getClientSavedLang, () => DEFAULT_LANG);
  const [lang, setLangState] = useState<Language>(initialLang);

  useEffect(() => {
    if (initialLang !== lang) {
      setLangState(initialLang);
    }
  }, [initialLang, lang]);

  useEffect(() => {
    document.documentElement.lang = lang || DEFAULT_LANG;
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('est_bike_lang', newLang);
      window.dispatchEvent(new Event('storage'));
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ lang: lang || initialLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
