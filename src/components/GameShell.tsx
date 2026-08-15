'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Language } from '@/types';

export function GameShell({
  lang,
  title,
  children,
}: {
  lang: Language;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/games"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-600"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'et' ? 'Kõik mängud' : lang === 'ru' ? 'Все игры' : 'All games'}
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-sky-600"
        >
          <Home className="w-4 h-4" />
          {lang === 'et' ? 'Avaleht' : lang === 'ru' ? 'Домой' : 'Home'}
        </Link>
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{title}</h1>
      {children}
    </div>
  );
}

export function GameResult({
  lang,
  score,
  total,
  onRestart,
}: {
  lang: Language;
  score: number;
  total: number;
  onRestart: () => void;
}) {
  const pct = total ? Math.round((score / total) * 100) : 0;
  const good = pct >= 80;
  return (
    <div className={`p-6 sm:p-8 rounded-3xl border text-center space-y-4 ${good ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}>
      <div className="text-4xl font-extrabold text-slate-900 dark:text-white">
        {score} / {total}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {lang === 'et'
          ? good
            ? 'Tubli! Reeglid istuvad.'
            : 'Korda veel — eksamil loeb iga viga.'
          : lang === 'ru'
          ? good
            ? 'Отлично! Правила уже в голове.'
            : 'Повтори ещё — на экзамене важна каждая ошибка.'
          : good
            ? 'Nice! The rules are sticking.'
            : 'Try again — every mistake counts on the exam.'}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={onRestart}
          className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold"
        >
          {lang === 'et' ? 'Mängi uuesti' : lang === 'ru' ? 'Играть снова' : 'Play again'}
        </button>
        <Link href="/games" className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-sm font-semibold">
          {lang === 'et' ? 'Teine mäng' : lang === 'ru' ? 'Другая игра' : 'Another game'}
        </Link>
      </div>
    </div>
  );
}
