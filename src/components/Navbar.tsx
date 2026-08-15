'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/types';
import { Bike, ShieldCheck, BookOpen } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, setLang } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'et', label: 'Eesti', flag: '🇪🇪' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <Bike className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
              JalgrattaEksam
            </span>
            <span className="text-[11px] font-medium text-sky-600 dark:text-sky-400">
              Eesti Liiklustestid
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/signs"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">
              {lang === 'et' ? 'Liiklusmärgid' : lang === 'ru' ? 'Знаки' : 'Signs'}
            </span>
          </Link>

          <Link
            href="/rules"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="hidden sm:inline">
              {lang === 'et' ? 'Meelespea' : lang === 'ru' ? 'Правила' : 'Rules'}
            </span>
          </Link>

          {/* Language selector */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  lang === l.code
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span className="text-xs">{l.flag}</span>
                <span className="hidden md:inline">{l.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
