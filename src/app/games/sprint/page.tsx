'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { GameShell, GameResult } from '@/components/GameShell';
import { sprintItems } from '@/data/games';
import { Check, X } from 'lucide-react';

export default function SprintGamePage() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(12);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [done, setDone] = useState(false);

  const item = sprintItems[index];

  useEffect(() => {
    if (done || answer !== null) return;
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          setAnswer(item.truth ? false : true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [index, answer, done, item.truth]);

  const choose = (val: boolean) => {
    if (answer !== null) return;
    setAnswer(val);
    if (val === item.truth) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 >= sprintItems.length) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setAnswer(null);
    setTimeLeft(12);
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setTimeLeft(12);
    setAnswer(null);
    setDone(false);
  };

  if (done) {
    return (
      <GameShell lang={lang} title={getTranslation('gameSprint', lang)}>
        <GameResult lang={lang} score={score} total={sprintItems.length} onRestart={restart} />
      </GameShell>
    );
  }

  const correct = answer === item.truth;

  return (
    <GameShell lang={lang} title={getTranslation('gameSprint', lang)}>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>
          {index + 1} / {sprintItems.length}
        </span>
        <span className={`font-mono ${timeLeft <= 3 ? 'text-rose-500' : ''}`}>{timeLeft}s</span>
        <span>
          {lang === 'et' ? 'Skoor' : lang === 'ru' ? 'Счёт' : 'Score'}: {score}
        </span>
      </div>

      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
          {item.statement[lang]}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => choose(true)}
            disabled={answer !== null}
            className={`py-4 rounded-2xl font-bold flex items-center justify-center gap-2 ${
              answer !== null && item.truth
                ? 'bg-emerald-500 text-white'
                : answer === true && !item.truth
                ? 'bg-rose-500 text-white'
                : 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-500/25'
            }`}
          >
            <Check className="w-5 h-5" />
            {lang === 'et' ? 'Jah' : lang === 'ru' ? 'Да' : 'Yes'}
          </button>
          <button
            onClick={() => choose(false)}
            disabled={answer !== null}
            className={`py-4 rounded-2xl font-bold flex items-center justify-center gap-2 ${
              answer !== null && !item.truth
                ? 'bg-emerald-500 text-white'
                : answer === false && item.truth
                ? 'bg-rose-500 text-white'
                : 'bg-rose-500/15 text-rose-800 dark:text-rose-200 hover:bg-rose-500/25'
            }`}
          >
            <X className="w-5 h-5" />
            {lang === 'et' ? 'Ei' : lang === 'ru' ? 'Нет' : 'No'}
          </button>
        </div>
        {answer !== null && (
          <div className={`p-3 rounded-xl text-sm ${correct ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
            {item.why[lang]}
          </div>
        )}
        {answer !== null && (
          <button onClick={next} className="w-full py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-sm">
            {lang === 'et' ? 'Edasi' : lang === 'ru' ? 'Дальше' : 'Next'}
          </button>
        )}
      </div>
    </GameShell>
  );
}
