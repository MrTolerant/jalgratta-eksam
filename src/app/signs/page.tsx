'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { trafficSigns } from '@/data/trafficSigns';
import { VisualIllustration } from '@/components/VisualIllustration';
import { BookOpen, Search } from 'lucide-react';

export default function SignsPage() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSigns = trafficSigns.filter((sign) => {
    const matchesSearch =
      sign.name[lang].toLowerCase().includes(search.toLowerCase()) ||
      sign.description[lang].toLowerCase().includes(search.toLowerCase()) ||
      sign.code.includes(search);

    const matchesCat = activeCategory === 'all' || sign.category === activeCategory;

    return matchesSearch && matchesCat;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Title & Search */}
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
          <BookOpen className="w-8 h-8 text-sky-500" />
          <span>{getTranslation('signsGuide', lang)}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {lang === 'et'
            ? 'Kõik peamised liiklusmärgid, mida jalgrattur peab teadma teooriaeksami edukaks sooritamiseks ja ohutuks liiklemiseks.'
            : lang === 'ru'
            ? 'Основные дорожные знаки, знание которых необходимо велосипедисту для сдачи теоретического экзамена и безопасной езды.'
            : 'Key road traffic signs that every cyclist must know for the theory exam and safe road navigation.'}
        </p>

        {/* Search input */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                lang === 'et'
                  ? 'Otsi märgi nime või numbri järgi...'
                  : lang === 'ru'
                  ? 'Поиск по названию или номеру знака...'
                  : 'Search by sign name or number...'
              }
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: { et: 'Kõik', ru: 'Все', en: 'All' } },
              { id: 'warning', label: { et: 'Hoiatus', ru: 'Предупреждение', en: 'Warning' } },
              { id: 'priority', label: { et: 'Eesõigus', ru: 'Приоритет', en: 'Priority' } },
              { id: 'mandatory', label: { et: 'Kohustus', ru: 'Предписание', en: 'Mandatory' } },
              { id: 'prohibitory', label: { et: 'Keeld', ru: 'Запрет', en: 'Prohibitory' } },
              { id: 'informative', label: { et: 'Info', ru: 'Инфо', en: 'Informative' } },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {tab.label[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Signs Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSigns.map((sign) => (
          <div
            key={sign.code}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center gap-5"
          >
            <div className="shrink-0">
              <VisualIllustration
                visual={{
                  type: 'sign',
                  signCode: sign.code,
                }}
                lang={lang}
              />
            </div>

            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded">
                  № {sign.code}
                </span>
                <span className="text-[11px] text-slate-400 capitalize">
                  {sign.category}
                </span>
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {sign.name[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {sign.description[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
