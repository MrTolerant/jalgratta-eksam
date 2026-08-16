import { Question } from '@/types';

function q(
  partial: Question
): Question {
  return partial;
}

export const extraQuestions: Question[] = [
  q({
    id: 'q_prio_05',
    categoryId: 'priority_give_way',
    difficulty: 'medium',
    question: {
      et: 'Jalgrattur sõidab kergliiklusteelt üle sõidutee. Kellele peab ta teed andma?',
      ru: 'Велосипедист пересекает проезжую часть с велопешеходной дорожки. Кому он должен уступить?',
      en: 'A cyclist crosses the roadway from a shared path. To whom must they give way?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Sõiduteel liikuvatele juhtidele, kui puudub reguleeritud ülekäik või foor.', ru: 'Водителям на проезжей части, если нет регулируемого перехода или светофора.', en: 'Drivers on the roadway if there is no controlled crossing or traffic light.' } },
      { id: 'opt_2', text: { et: 'Mitte kellelegi, kergliiklustee annab alati eesõiguse.', ru: 'Никому: велодорожка всегда даёт преимущество.', en: 'Nobody — a cycle path always has priority.' } },
      { id: 'opt_3', text: { et: 'Ainult veoautodele.', ru: 'Только грузовикам.', en: 'Only trucks.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Kergliiklusteelt sõiduteele või üle sõidutee suunduv rattur peab andma teed sõiduteel liikujatele, kui märgid või foor ei anna talle eesõigust.',
      ru: 'Выезжая с дорожки на проезжую часть, велосипедист уступает тем, кто уже едет по дороге, если знаки или светофор не дают ему приоритет.',
      en: 'Entering or crossing a roadway from a path, a cyclist must give way unless signs or lights grant priority.',
    },
    lawReference: 'LS § 17',
    visual: { type: 'svg_intersection', svgVariant: 'driveway_exit' },
  }),
  q({
    id: 'q_prio_06',
    categoryId: 'priority_give_way',
    difficulty: 'hard',
    question: {
      et: 'Peateel sõitev rattur läheneb ristmikule. Kõrvalteel on märk „Anna teed“. Kes sõidab esimesena?',
      ru: 'Велосипедист едет по главной дороге к перекрёстку. На второстепенной стоит «Уступите дорогу». Кто едет первым?',
      en: 'A cyclist is on a priority road. A side road has a Give way sign. Who goes first?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Peateel sõitev rattur, sest peatee annab eesõiguse ka jalgratturile.', ru: 'Велосипедист на главной: главная дорога даёт преимущество и велосипеду.', en: 'The cyclist on the priority road — priority applies to bicycles too.' } },
      { id: 'opt_2', text: { et: 'Alati auto, sest auto on raskem.', ru: 'Всегда машина, потому что она тяжелее.', en: 'Always the car, because it is heavier.' } },
      { id: 'opt_3', text: { et: 'Kehtib ainult parema käe reegel.', ru: 'Действует только правило помехи справа.', en: 'Only the priority-to-the-right rule applies.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Peatee kehtib kõigile juhtidele, sealhulgas jalgratturitele. Kõrvalteelt tulev juht peab teed andma.',
      ru: 'Главная дорога действует для всех водителей, включая велосипедистов.',
      en: 'A priority road applies to all drivers, including cyclists.',
    },
    lawReference: 'Liiklusmärgid märk 211',
    visual: { type: 'sign', signCode: '211', signName: { et: 'Märk 211: Peatee', ru: 'Знак 211: Главная дорога', en: 'Sign 211: Priority road' } },
  }),
]