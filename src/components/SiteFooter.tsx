'use client';

import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';

export function SiteFooter() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>{getTranslation('footerCopy', lang)}</p>
        <p>{getTranslation('footerLaw', lang)}</p>
      </div>
    </footer>
  );
}
