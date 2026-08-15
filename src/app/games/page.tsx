'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { Gamepad2, TrafficCone, BadgeAlert, Wrench, Zap, ChevronRight } from 'lucide-react';

export default function GamesHubPage() {
  const { lang } = useLanguage();

  const games = [
    {
      href: '/games/priority',
      icon: TrafficCone,
      color: 'text-sky-600 bg-sky-500/10',
      title: getTranslation('gamePriority', lang),
      desc: getTranslation('gamePriorityDesc', lang),
    },
    {
      href: '/games/signs',
      icon: BadgeAlert,
      color: 'text-amber-600 bg-amber-500/10',
      title: getTranslation('gameSigns', lang),
      desc: getTranslation('gameSignsDesc', lang),
    },
    {
      href: '/games/equipment',
      icon: Wrench,
      color: 'text-emerald-600 bg-emerald-500/10',
      title: getTranslation('gameEquipment', lang),
      desc: getTranslation('gameEquipmentDesc', lang),
    },
    {
      href: '/games/sprint',
      icon: Zap,
      color: 'text-rose-600 bg-rose-500/10',
      title: getTranslation('gameSprint', lang),
      desc: getTranslation('gameSprintDesc', lang),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
          <Gamepad2 className="w-8 h-8 text-violet-500" />
          <span>{getTranslation('gamesTitle', lang)}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {getTranslation('gamesDesc', lang)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-violet-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4"
          >
            <div className="space-y-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${g.color}`}>
                <g.icon className="w-6 h-6" />
              </div>
              <h2 className="font-bold text-lg text-slate-900 dark:text-white">{g.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{g.desc}</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform">
              <span>{lang === 'et' ? 'Mängi' : lang === 'ru' ? 'Играть' : 'Play'}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
