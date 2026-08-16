import { CategoryId, Question, VisualData } from '@/types';

type Triple = [string, string, string];

function L(t: Triple): { et: string; ru: string; en: string } {
  return { et: t[0], ru: t[1], en: t[2] };
}

function mq(
  id: string,
  categoryId: CategoryId,
  difficulty: Question['difficulty'],
  question: Triple,
  options: Triple[],
  correctIndex: number,
  explanation: Triple,
  lawReference?: string,
  visual?: VisualData
): Question {
  return {
    id,
    categoryId,
    difficulty,
    question: L(question),
    options: options.map((text, i) => ({ id: `opt_${i + 1}`, text: L(text) })),
    correctAnswerId: `opt_${correctIndex + 1}`,
    explanation: L(explanation),
    lawReference,
    visual,
  };
}

export const more05: Question[] = [
mq('q2_sg_01', 'hand_signals', 'easy',
    ['Vasaku käe sirutus küljele tähendab…', 'Вытянутая в сторону левая рука значит…', 'Left arm held out to the side means…'],
    [
      ['Vasakpööre / ümberreastumine vasakule.', 'Поворот налево / перестроение влево.', 'Left turn / moving left.'],
      ['Peatus.', 'Остановка.', 'Stop.'],
      ['Tervitus.', 'Приветствие.', 'A greeting.'],
    ], 0,
    ['Horisontaalne käsi = selle poole manööver.', 'Горизонтальная рука = манёвр в эту сторону.', 'A horizontal arm means a manoeuvre to that side.'],
    'LS § 47', { type: 'svg_turning', svgVariant: 'hand_signals' }),
mq('q2_sg_02', 'hand_signals', 'medium',
    ['Kui kaua enne pööret peaksid märku andma?', 'За сколько до поворота нужно сигналить?', 'How early should you signal before a turn?'],
    [
      ['Aegsasti, et teised jõuaksid reageerida — mitte alles pöörde hetkel.', 'Заблаговременно, чтобы другие успели среагировать — не в сам момент поворота.', 'Early enough for others to react — not only at the instant of turning.'],
      ['0,1 sekundit enne.', 'За 0,1 секунды.', '0.1 seconds before.'],
      ['Pärast pööret, et kinnitada.', 'После поворота, чтобы подтвердить.', 'After the turn, to confirm.'],
    ], 0,
    ['Märguanne on hoiatus ette. Hiline märk on kasutu.', 'Сигнал — предупреждение заранее. Поздний знак бесполезен.', 'A signal is an advance warning. A late signal is useless.'],
    'LS § 47'),
mq('q2_sg_03', 'hand_signals', 'easy',
    ['Kuidas hoiatad, et hakkad peatuma?', 'Как предупредить окружающих, что ты останавливаешься?', 'How do you warn others that you are stopping?'],
    [
      ['Tõstad käe / näitad selgelt aeglustust ja vaatad taha.', 'Поднять руку или ясно показать, что сбавляешь скорость, и посмотреть назад.', 'Raise an arm / clearly show you are slowing and look behind.'],
      ['Pidurdad järsult ilma hoiatuseta.', 'Резко тормозить без сигнала.', 'Brake hard with no signal.'],
      ['Hüüad ainult «stopp».', 'Просто крикнуть «стоп».', 'Just shout “stop”.'],
    ], 0,
    ['Järsk peatus on ohtlik tagaolijale. Anna märku ja kontrolli tagumist liiklust.', 'Внезапная остановка опасна для тех, кто сзади.', 'A sudden stop is dangerous for traffic behind.'],
    'LS § 47'),
];
