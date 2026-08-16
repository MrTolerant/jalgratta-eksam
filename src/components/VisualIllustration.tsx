import React from 'react';
import { VisualData, Language } from '@/types';
import { TrafficSignSvg } from '@/components/illustrations/Signs';
import { SceneIllustration } from '@/components/illustrations/Scenes';
import { getTrafficSignByCode, signOnSignLabel } from '@/data/trafficSigns';

interface VisualIllustrationProps {
  visual: VisualData;
  lang: Language;
  /** quiz = sign + pictogram legend; icon = SVG only (signs catalog). */
  mode?: 'quiz' | 'icon';
}

export const VisualIllustration: React.FC<VisualIllustrationProps> = ({
  visual,
  lang,
  mode = 'quiz',
}) => {
  if (visual.type === 'none') return null;

  if (visual.type === 'sign' || visual.signCode) {
    const code = visual.signCode || '';
    const meta = getTrafficSignByCode(code);
    const name = visual.signName?.[lang] || meta?.name[lang];
    const legend = meta?.legend[lang];

    if (mode === 'icon') {
      return (
        <div className="flex items-center justify-center">
          <TrafficSignSvg code={code} className="w-28 h-28 sm:w-32 sm:h-32" />
        </div>
      );
    }

    return (
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="shrink-0">
          <TrafficSignSvg code={code} className="w-28 h-28 sm:w-32 sm:h-32" />
        </div>

        <div className="flex-1 space-y-1.5 text-center sm:text-left min-w-0">
          {code && (
            <span className="inline-block font-mono text-[11px] font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded">
              № {code}
            </span>
          )}
          {name && (
            <p className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">{name}</p>
          )}
          {legend && (
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {signOnSignLabel(lang)}:
              </span>{' '}
              {legend}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <SceneIllustration variant={visual.svgVariant || ''} lang={lang} />
    </div>
  );
};
