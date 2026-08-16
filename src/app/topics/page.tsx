'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { categories } from '@/data/categories';
import { questions } from '@/data/questions';
import { Layers, ChevronRight } from 'lucide-react';

export default function TopicsPage() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
          <Layers className="w-8 h-8 text-indigo-500" />
          <span>{getTranslation('practiceMode', lang)}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {lang === 'et'
            ? 'Ametlikud teemad pluss lisaplokid. Uuel sisseastumisel tulevad küsimused, mida laps veel ei näinud.'
            : lang === 'ru'
            ? 'Официальные темы плюс дополнительные блоки. При новом заходе — только вопросы, которые ребёнок ещё не видел.'
            : 'Official topics plus extra blocks. A new visit shows questions the child has not seen yet.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => {
          const count = questions.filter((q) => q.categoryId === cat.id).length;

          return (
            <Link
              key={cat.id}
              href={`/test?mode=practice&category=${cat.id}`}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    {lang === 'et' ? 'Teema' : lang === 'ru' ? 'Тема' : 'Topic'} #{cat.order}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {count} {lang === 'et' ? 'küsimust' : lang === 'ru' ? 'вопросов' : 'questions'}
                  </span>
                </div>

                <h2 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cat.title[lang]}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cat.description[lang]}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <span>{lang === 'et' ? 'Alusta harjutamist' : lang === 'ru' ? 'Начать тренировку' : 'Start practice'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
