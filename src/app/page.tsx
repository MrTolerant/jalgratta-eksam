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

      {/* Quick Statistics Banner */}
      {stats && stats.totalQuestionsAnswered > 0 && (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.totalExamsPassed} / {stats.totalExamsTaken}
              </div>
              <div className="text-xs text-slate-500">
                {lang === 'et' ? 'Eksameid sooritatud' : lang === 'ru' ? 'Сдано экзаменов' : 'Exams passed'}
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {passRate}%
              </div>
              <div className="text-xs text-slate-500">
                {lang === 'et' ? 'Edukusprotsent' : lang === 'ru' ? 'Процент успеха' : 'Pass rate'}
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.totalCorrectAnswers} / {stats.totalQuestionsAnswered}
              </div>
              <div className="text-xs text-slate-500">
                {lang === 'et' ? 'Õigeid vastuseid' : lang === 'ru' ? 'Верных ответов' : 'Correct answers'}
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.mistakeQuestionIds.length}
              </div>
              <div className="text-xs text-slate-500">
                {lang === 'et' ? 'Küsimust vigade pangas' : lang === 'ru' ? 'Ошибок в базе' : 'Questions in mistake bank'}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Learning Modes Grid */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Zap className="w-6 h-6 text-amber-500" />
          <span>{lang === 'et' ? 'Vali režiim' : lang === 'ru' ? 'Режимы тренировки' : 'Training Modes'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/test?mode=daily"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-violet-500 dark:hover:border-violet-500 shadow-sm hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CalendarDays className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {getTranslation('dailyMode', lang)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {getTranslation('dailyDesc', lang)}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform">
              <span>{lang === 'et' ? 'Täna 10 küsimust' : lang === 'ru' ? 'Сегодня 10 вопросов' : '10 questions today'}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/test?mode=quick"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500 shadow-sm hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {getTranslation('quickMode', lang)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {getTranslation('quickDesc', lang)}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
              <span>{lang === 'et' ? '7 küsimust / 7 min' : lang === 'ru' ? '7 вопросов / 7 мин' : '7 questions / 7 min'}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/test?mode=weak"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 shadow-sm hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {getTranslation('weakMode', lang)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {getTranslation('weakDesc', lang)}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:translate-x-1 transition-transform">
              <span>{lang === 'et' ? 'Treeni auke' : lang === 'ru' ? 'Закрыть пробелы' : 'Close the gaps'}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {flaggedCount > 0 && (
            <Link
              href="/test?mode=flagged"
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-pink-500 dark:hover:border-pink-500 shadow-sm hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Flag className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {getTranslation('flaggedMode', lang)}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {flaggedCount}{' '}
                  {lang === 'et' ? 'küsimust ootab kordamist.' : lang === 'ru' ? 'вопросов ждут повтора.' : 'questions waiting for review.'}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-pink-600 dark:text-pink-400 group-hover:translate-x-1 transition-transform">
                <span>{lang === 'et' ? 'Ava märked' : lang === 'ru' ? 'Открыть метки' : 'Open flags'}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          )}

          {/* 1. Exam Simulation */}
          <Link
            href="/test?mode=exam"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-500 shadow-sm hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Timer className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {getTranslation('examMode', lang)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {getTranslation('examDesc', lang)}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
              <span>{getTranslation('startExam', lang)}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* 2. Topic Practice */}
          <Link
            href="/topics"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-sm hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {getTranslation('practiceMode', lang)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {getTranslation('practiceDesc', lang)}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
              <span>{lang === 'et' ? 'Vali teema' : lang === 'ru' ? 'Выбери тему' : 'Select topic'}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* 3. Mistakes Review */}
          <Link
            href="/test?mode=mistakes"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500 dark:hover:border-rose-500 shadow-sm hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {getTranslation('mistakesMode', lang)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {getTranslation('mistakesDesc', lang)}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400 group-hover:translate-x-1 transition-transform">
              <span>{lang === 'et' ? 'Paranda vigu' : lang === 'ru' ? 'Исправить ошибки' : 'Fix mistakes'}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* 4. Marathon Mode */}
          <Link
            href="/test?mode=marathon"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 shadow-sm hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {getTranslation('marathonMode', lang)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {getTranslation('marathonDesc', lang)}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>{lang === 'et' ? 'Kõik küsimused' : lang === 'ru' ? 'Все вопросы' : 'All questions'}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* 10 Official Topics Overview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Shield className="w-6 h-6 text-sky-500" />
            <span>{lang === 'et' ? 'Ametlikud eksamiteemad' : lang === 'ru' ? 'Официальные темы экзамена' : 'Official exam topics'}</span>
          </h2>
          <Link href="/topics" className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline">
            {lang === 'et' ? 'Vaata kõiki' : lang === 'ru' ? 'Смотреть все' : 'View all'} →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {categories.filter((c) => c.order <= 10).map((cat) => {
            const topicQuestions = questions.filter((q) => q.categoryId === cat.id);
            return (
              <Link
                key={cat.id}
                href={`/test?mode=practice&category=${cat.id}`}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 transition-all flex flex-col justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/50">
                      #{cat.order}
                    </span>
                    <span className="text-xs text-slate-400">
                      {topicQuestions.length} {lang === 'et' ? 'küsimust' : lang === 'ru' ? 'вопросов' : 'questions'}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {cat.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                    {cat.description[lang]}
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 gap-1 pt-1">
                  <span>{lang === 'et' ? 'Harjuta seda teemat' : lang === 'ru' ? 'Тренируй тему' : 'Practice topic'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-violet-500" />
          <span>{getTranslation('extraTopics', lang)}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {categories.filter((c) => c.order > 10).map((cat) => {
            const topicQuestions = questions.filter((q) => q.categoryId === cat.id);
            return (
              <Link
                key={cat.id}
                href={`/test?mode=practice&category=${cat.id}`}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-violet-400 dark:hover:border-violet-500 transition-all flex flex-col justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-violet-600 dark:text-violet-400 px-2 py-0.5 rounded-md bg-violet-50 dark:bg-violet-950/50">
                      #{cat.order}
                    </span>
                    <span className="text-xs text-slate-400">
                      {topicQuestions.length} {lang === 'et' ? 'küsimust' : lang === 'ru' ? 'вопросов' : 'questions'}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {cat.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                    {cat.description[lang]}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Road signs & quick cheat-sheet promo */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/signs"
          className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-700/30 hover:border-indigo-500 text-white flex items-center justify-between group transition-all"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs">
              <BookOpen className="w-4 h-4" />
              <span>{lang === 'et' ? 'Teooria & Märgid' : lang === 'ru' ? 'Теория и знаки' : 'Signs & Theory'}</span>
            </div>
            <h3 className="text-xl font-bold">{getTranslation('signsGuide', lang)}</h3>
            <p className="text-xs text-slate-300 max-w-sm">
              {getTranslation('signsDesc', lang)}
            </p>
          </div>
          <ChevronRight className="w-6 h-6 text-indigo-400 group-hover:translate-x-1.5 transition-transform" />
        </Link>

        <Link
          href="/rules"
          className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-700/30 hover:border-emerald-500 text-white flex items-center justify-between group transition-all"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'et' ? 'Liiklusseadus' : lang === 'ru' ? 'ПДД Эстонии' : 'Traffic Law'}</span>
            </div>
            <h3 className="text-xl font-bold">{getTranslation('rulesSummary', lang)}</h3>
            <p className="text-xs text-slate-300 max-w-sm">
              {lang === 'et'
                ? 'Kiivrinõuded, vanusepiirid, kohustuslik varustus ja käitumine ülekäigurajal.'
                : lang === 'ru'
                ? 'Требования к шлему, возрастные нормы, светоотражатели и проезд пешеходных переходов.'
                : 'Helmet rules, age limits, required bike equipment, and zebra crossing rules.'}
            </p>
          </div>
          <ChevronRight className="w-6 h-6 text-emerald-400 group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
