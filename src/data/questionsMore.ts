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

export const moreQuestions: Question[] = [
  mq('q2_prio_01', 'priority_give_way', 'easy',
    ['Kes peab teed andma, kui rattur sõidab parklast sõiduteele?', 'Кто уступает, когда велосипедист выезжает с парковки на дорогу?', 'Who gives way when a cyclist leaves a parking lot onto the roadway?'],
    [
      ['Rattur — parkla on teega külgnev ala.', 'Велосипедист — парковка прилегает к дороге.', 'The cyclist — a car park is an adjacent area.'],
      ['Autod teel, sest rattur on nõrgem.', 'Машины на дороге, потому что велосипедист слабее.', 'Cars on the road, because the cyclist is weaker.'],
      ['Keegi ei anna teed.', 'Никто не уступает.', 'Nobody gives way.'],
    ], 0,
    ['Teega külgnevalt alalt (parkla, hoov) teele sõitev juht annab teed kõigile teel olijatele.', 'Выезжая с прилегающей территории, водитель уступает всем на дороге.', 'Entering from an adjacent area, a driver gives way to everyone on the road.'],
    'LS § 17', { type: 'svg_intersection', svgVariant: 'driveway_exit' }),
];
