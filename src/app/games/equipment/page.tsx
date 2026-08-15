'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { GameShell, GameResult } from '@/components/GameShell';
import { SceneIllustration } from '@/components/illustrations/Scenes';
import { equipmentRounds } from '@/data/games';

export default function EquipmentGamePage() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const round = equipmentRounds[index];

  const toggle = (id: string) => {
    if (checked) return;
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const check = () => {
    const ok =
      selected.length === round.correctIds.length &&
      round.correctIds.every((id) => selected.includes(id));
    if (ok) setScore((s) => s + 1);
    setChecked(true);
  };

  const next = () => {
    if (index + 1 >= equipmentRounds.length) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected([]);
    setChecked(false);
  };

  const restart = () => {
    setIndex(0);
    setSelected([]);
    setChecked(false);
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <GameShell lang={lang} title={getTranslation('gameEquipment', lang)}>
        <GameResult lang={lang} score={score} total={equipmentRounds.length} onRestart={restart} />
      </GameShell>
    );
  }

  return (
    <GameShell lang={lang} title={getTranslation('gameEquipment', lang)}>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>
          {index + 1} / {equipmentRounds.length}
        </span>
        <span>
          {lang === 'et' ? 'Skoor' : lang === 'ru' ? 'Счёт' : 'Score'}: {score}
        </span>
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="font-bold text-lg text-slate-900 dark:text-white">{round.title[lang]}</h2>
        <SceneIllustration variant={round.scene} lang={lang} />
        <p className="text-sm text-slate-500">
          {lang === 'et'
            ? 'Vali kõik sobivad vastused, siis kontrolli.'
            : lang === 'ru'
            ? 'Выбери все верные варианты, затем проверь.'
            : 'Select all that apply, then check.'}
        </p>
        <div className="space-y-2">
          {round.faults.map((f) => {
            const on = selected.includes(f.id);
            const should = round.correctIds.includes(f.id);
            let cls = 'border-slate-200 dark:border-slate-700';
            if (on && !checked) cls = 'border-sky-500 bg-sky-500/10';
            if (checked && should) cls = 'border-emerald-500 bg-emerald-500/10';
            if (checked && on && !should) cls = 'border-rose-500 bg-rose-500/10';
            return (
              <button
                key={f.id}
                onClick={() => toggle(f.id)}
                className={`w-full text-left p-3 rounded-xl border text-sm ${cls}`}
              >
                {f.label[lang]}
              </button>
            );
          })}
        </div>
        {!checked ? (
          <button
            onClick={check}
            disabled={selected.length === 0}
            className="w-full py-2.5 rounded-xl bg-sky-600 disabled:opacity-40 text-white font-semibold text-sm"
          >
            {lang === 'et' ? 'Kontrolli' : lang === 'ru' ? 'Проверить' : 'Check'}
          </button>
        ) : (
          <button onClick={next} className="w-full py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-sm">
            {lang === 'et' ? 'Edasi' : lang === 'ru' ? 'Дальше' : 'Next'}
          </button>
        )}
      </div>
    </GameShell>
  );
}
