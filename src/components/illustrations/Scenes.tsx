import React from 'react';
import { Language } from '@/types';

interface SceneProps {
  lang: Language;
}

function t(lang: Language, et: string, ru: string, en: string) {
  return lang === 'et' ? et : lang === 'ru' ? ru : en;
}

function Frame({ children, caption }: { children: React.ReactNode; caption: string }) {
  return (
    <div className="w-full">
      <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-[#9ccc65]">
        {children}
      </div>
      <p className="mt-2.5 text-center text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
        {caption}
      </p>
    </div>
  );
}
