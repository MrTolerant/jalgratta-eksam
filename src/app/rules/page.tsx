'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { rulesMemo } from '@/data/rulesMemo';
import {
  ShieldCheck,
  Users,
  Shield,
  Bike,
  GitFork,
  Navigation,
  Hand,
  Home,
  Ban,
  ShieldAlert,
} from 'lucide-react';

const ICON_WRAP: Record<string, string> = {
  age: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
  helmet: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  zebra: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  gear: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  yield: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  position: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  junction: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  signal: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  pedestrian: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  zone: 'bg-slate-500/10 text-slate-600 dark:text-slate-300',
};

function CardIcon({ name }: { name: string }) {
  const cls = 'w-6 h-6';
  if (name === 'age') return <span className="text-sm font-extrabold">10+</span>;
  if (name === 'helmet') return <Shield className={cls} />;
  if (name === 'zebra') return <Users className={cls} />;
  if (name === 'gear') return <Bike className={cls} />;
  if (name === 'yield') return <ShieldAlert className={cls} />;
  if (name === 'position') return <Navigation className={cls} />;
  if (name === 'junction') return <GitFork className={cls} />;
  if (name === 'signal') return <Hand className={cls} />;
  if (name === 'pedestrian') return <Users className={cls} />;
  if (name === 'zone') return <Home className={cls} />;
  return <Ban className={cls} />;
}

export default function RulesPage() {
  const { lang } = useLanguage();
  const core = rulesMemo.filter((c) => c.group === 'core');
  const exam = rulesMemo.filter((c) => c.group === 'exam');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
          <ShieldCheck className="w-8 h-8 text-emerald-500" />
          <span>
            {lang === 'et'
              ? 'Jalgratturi Meelespea ja Reeglid'
              : lang === 'ru'
              ? 'Памятка велосипедиста и ПДД Эстонии'
              : 'Estonian Cyclist Rules & Cheat Sheet'}
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {lang === 'et'
            ? 'Ametlik teooriaeksam: 15 küsimust, 10 teemat (Transpordiamet). All on kogu kava, mitte ainult neli „kuulsat“ punkti.'
            : lang === 'ru'
            ? 'Официальный экзамен: 15 вопросов, 10 тем (Transpordiamet). Ниже вся программа, не только четыре «громких» пункта.'
            : 'Official theory exam: 15 questions, 10 topics (Transpordiamet). Below is the full syllabus, not only the four famous facts.'}
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
          {lang === 'et'
            ? 'Kõige sagedamini eksitavad'
            : lang === 'ru'
            ? 'Чаще всего валят именно здесь'
            : 'Most often failed'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {core.map((card) => (
            <MemoCardView key={card.id} card={card} lang={lang} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
          {lang === 'et'
            ? 'Ülejäänud eksamiteemad (siit tuleb suurem osa 15 küsimusest)'
            : lang === 'ru'
            ? 'Остальные темы экзамена (отсюда большая часть из 15 вопросов)'
            : 'The rest of the exam (most of the 15 questions come from here)'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {exam.map((card) => (
            <MemoCardView key={card.id} card={card} lang={lang} />
          ))}
        </div>
      </section>
    </div>
  );
}

function MemoCardView({
  card,
  lang,
}: {
  card: (typeof rulesMemo)[number];
  lang: 'et' | 'ru' | 'en';
}) {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${ICON_WRAP[card.icon]}`}
      >
        <CardIcon name={card.icon} />
      </div>
      <h2 className="font-bold text-lg text-slate-900 dark:text-white">{card.title[lang]}</h2>
      <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
        {card.points.map((point) => (
          <li key={point.en}>{point[lang]}</li>
        ))}
      </ul>
    </div>
  );
}
