'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { GameShell, GameResult } from '@/components/GameShell';
import { SceneIllustration } from '@/components/illustrations/Scenes';
import { priorityRounds } from '@/data/games';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function PriorityGamePage() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const round = priorityRounds[index];

  const tap = (id: string) => {
    if (locked || picked.includes(id)) return;
    const next = [...picked, id];
    setPicked(next);
    if (next.length === round.order.length) {
      setLocked(true);
      const ok = next.every((v, i) => v === round.order[i]);
      if (ok) setScore((s) => s + 1);
    }
  };

  const nextRound = () => {
    if (index + 1 >= priorityRounds.length) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setPicked([]);
    setLocked(false);
  };

  const restart = () => {
    setIndex(0);
    setPicked([]);
    setLocked(false);
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <GameShell lang={lang} title={getTranslation('gamePriority', lang)}>
        <GameResult lang={lang} score={score} total={priorityRounds.length} onRestart={restart} />
      </GameShell>
    );
  }

  const correctSoFar = picked.every((v, i) => v === round.order[i]);

  return (
    <GameShell lang={lang} title={getTranslation('gamePriority', lang)}>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>
          {index + 1} / {priorityRounds.length}
        </span>
        <span>
          {lang === 'et' ? 'Skoor' : lang === 'ru' ? 'Счёт' : 'Score'}: {score}
        </span>
      </div>

      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div>
          <h2 className="font-bold text-lg text-slate-900 dark:text-white">{round.title[lang]}</h2>
          <p className="text-sm text-slate-500 mt-1">{round.hint[lang]}</p>
        </div>
        <SceneIllustration variant={round.scene} lang={lang} />
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          {lang === 'et'
            ? 'Toksa liiklejad selles järjekorras, milles nad tohivad sõita.'
            : lang === 'ru'
            ? 'Нажимай участников в том порядке, в каком они могут ехать.'
            : 'Tap road users in the order they are allowed to go.'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {round.actors.map((a) => {
            const pos = picked.indexOf(a.id);
            const expected = round.order[pos];
            const wrong = locked && pos >= 0 && a.id !== expected;
            return (
              <button
                key={a.id}
                onClick={() => tap(a.id)}
                disabled={picked.includes(a.id)}
                className={`text-left p-3 rounded-xl border text-sm font-semibold transition-all ${
                  pos >= 0
                    ? locked && !correctSoFar && wrong
                      ? 'border-rose-500 bg-rose-500/10 text-rose-700'
                      : 'border-sky-500 bg-sky-500/10 text-sky-800 dark:text-sky-200'
                    : 'border-slate-200 dark:border-slate-700 hover:border-sky-400'
                }`}
              >
                {pos >= 0 ? `${pos + 1}. ` : ''}
                {a.label[lang]}
              </button>
            );
          })}
        </div>

        {locked && (
          <div
            className={`p-3 rounded-xl text-sm flex items-start gap-2 ${
              correctSoFar ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-200' : 'bg-rose-500/10 text-rose-800 dark:text-rose-200'
            }`}
          >
            {correctSoFar ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
            <span>
              {correctSoFar
                ? lang === 'et'
                  ? 'Õige järjekord!'
                  : lang === 'ru'
                  ? 'Верный порядок!'
                  : 'Correct order!'
                : `${lang === 'et' ? 'Õige järjekord' : lang === 'ru' ? 'Верный порядок' : 'Correct order'}: ${round.order
                    .map((id) => round.actors.find((a) => a.id === id)?.label[lang])
                    .join(' → ')}`}
            </span>
          </div>
        )}

        {locked && (
          <button
            onClick={nextRound}
            className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm"
          >
            {lang === 'et' ? 'Edasi' : lang === 'ru' ? 'Дальше' : 'Next'}
          </button>
        )}
      </div>
    </GameShell>
  );
}
