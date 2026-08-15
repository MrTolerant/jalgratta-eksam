'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { GameShell, GameResult } from '@/components/GameShell';
import { TrafficSignSvg } from '@/components/illustrations/Signs';
import { signRounds } from '@/data/games';

export default function SignsGamePage() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const round = signRounds[index];

  useEffect(() => {
    if (done || picked !== null) return;
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          setPicked(-1);
          setStreak(0);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [index, picked, done]);

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === round.correctIndex) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
  };

  const next = () => {
    if (index + 1 >= signRounds.length) {
      setDone(true);
      return;
    }
    setIndex((n) => n + 1);
    setPicked(null);
    setTimeLeft(10);
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setStreak(0);
    setTimeLeft(10);
    setPicked(null);
    setDone(false);
  };

  if (done) {
    return (
      <GameShell lang={lang} title={getTranslation('gameSigns', lang)}>
        <GameResult lang={lang} score={score} total={signRounds.length} onRestart={restart} />
      </GameShell>
    );
  }

  return (
    <GameShell lang={lang} title={getTranslation('gameSigns', lang)}>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>
          {index + 1} / {signRounds.length}
        </span>
        <span className={`font-mono ${timeLeft <= 3 ? 'text-rose-500' : ''}`}>{timeLeft}s</span>
        <span>
          {lang === 'et' ? 'Seeria' : lang === 'ru' ? 'Серия' : 'Streak'}: {streak}
        </span>
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
        <div className="flex justify-center">
          <TrafficSignSvg code={round.code} className="w-36 h-36" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {round.options[lang].map((opt, i) => {
            let cls = 'border-slate-200 dark:border-slate-700 hover:border-sky-400';
            if (picked !== null) {
              if (i === round.correctIndex) cls = 'border-emerald-500 bg-emerald-500/10 font-semibold';
              else if (i === picked) cls = 'border-rose-500 bg-rose-500/10';
            }
            return (
              <button
                key={opt}
                onClick={() => choose(i)}
                className={`p-3 rounded-xl border text-sm text-left ${cls}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {picked !== null && (
          <button onClick={next} className="w-full py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-sm">
            {lang === 'et' ? 'Edasi' : lang === 'ru' ? 'Дальше' : 'Next'}
          </button>
        )}
      </div>
    </GameShell>
  );
}
