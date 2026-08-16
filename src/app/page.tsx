'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { categories } from '@/data/categories';
import { questions } from '@/data/questions';
import { getStoredStats } from '@/lib/storage';
import { UserStats } from '@/types';
import { questionBankSize, unseenCount } from '@/lib/quizEngine';
import { getFlaggedIds, touchVisitorVisit } from '@/lib/visitor';
import {
  Timer,
  Layers,
  AlertOctagon,
  Flame,
  BookOpen,
  Award,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Bike,
  Shield,
  ShieldCheck,
  Zap,
  CalendarDays,
  Target,
  Flag,
} from 'lucide-react';

export default function HomePage() {
  const { lang } = useLanguage();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [freshLeft, setFreshLeft] = useState(0);
  const [streak, setStreak] = useState(1);
  const [flaggedCount, setFlaggedCount] = useState(0);
  const bankSize = questionBankSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats(getStoredStats());
      const mem = touchVisitorVisit();
      setFreshLeft(unseenCount());
      setStreak(mem.streakDays || 1);
      setFlaggedCount(getFlaggedIds().length);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const passRate = stats && stats.totalExamsTaken > 0
    ? Math.round((stats.totalExamsPassed / stats.totalExamsTaken) * 100)
    : 0;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-indigo-600 to-slate-900 text-white p-6 sm:p-10 md:p-12 shadow-xl shadow-sky-600/10">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-sky-200 text-xs font-semibold border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transpordiamet 2026 standard</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {getTranslation('appName', lang)}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sky-100/90 leading-relaxed">
            {getTranslation('appTagline', lang)}
          </p>
          <p className="text-xs sm:text-sm text-sky-100/80">
            {lang === 'et'
              ? `${bankSize} erinevat küsimust. Sama laps näeb igal uuel külastusel uusi küsimusi — juba nähtud jäetakse vahele.`
              : lang === 'ru'
              ? `${bankSize} разных вопросов. При каждом новом заходе ребёнок получает вопросы, которые ещё не видел, — старые не повторяются.`
              : `${bankSize} distinct questions. On every new visit the child gets unseen questions — already viewed ones are skipped.`}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/test?mode=exam"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold text-sm sm:text-base hover:bg-sky-50 shadow-lg shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Timer className="w-5 h-5 text-sky-600" />
              <span>{getTranslation('startExam', lang)}</span>
            </Link>

            <Link
              href="/topics"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/15 hover:bg-white/20 text-white backdrop-blur-md font-semibold text-sm sm:text-base border border-white/20 transition-all"
            >
              <Layers className="w-5 h-5" />
              <span>{getTranslation('practiceMode', lang)}</span>
            </Link>
          </div>
        </div>

        {/* Decorative bike watermark icon */}
        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none">
          <Bike className="w-96 h-96 text-white" />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] uppercase tracking-wide text-slate-500">{getTranslation('unseenLeft', lang)}</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">{freshLeft}</div>
          <div className="text-xs text-slate-500">/ {bankSize}</div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] uppercase tracking-wide text-slate-500">{getTranslation('streakDays', lang)}</div>
          <div className="text-2xl font-bold text-amber-500">{streak}</div>
        </div>
      </section>
    </div>
  );
}
