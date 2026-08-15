import React from 'react';
import { VisualData, Language } from '@/types';
import { TrafficSignSvg } from '@/components/illustrations/Signs';
import { SceneIllustration } from '@/components/illustrations/Scenes';

interface VisualIllustrationProps {
  visual: VisualData;
  lang: Language;
}

export const VisualIllustration: React.FC<VisualIllustrationProps> = ({ visual, lang }) => {
  if (visual.type === 'none') return null;

  if (visual.type === 'sign' || visual.signCode) {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800">
        <TrafficSignSvg code={visual.signCode || ''} className="w-28 h-28 sm:w-32 sm:h-32" />
        {visual.signName && (
          <span className="mt-2 text-xs font-medium text-slate-700 dark:text-slate-300 text-center">
            {visual.signName[lang]}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <SceneIllustration variant={visual.svgVariant || ''} lang={lang} />
    </div>
  );
};
