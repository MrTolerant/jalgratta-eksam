import { Language } from '@/types';

export interface PriorityActor {
  id: string;
  label: Record<Language, string>;
  x: number;
  y: number;
}

export interface PriorityRound {
  id: string;
  title: Record<Language, string>;
  hint: Record<Language, string>;
  scene: string;
  actors: PriorityActor[];
  order: string[];
}

export const priorityRounds: PriorityRound[] = [
  {
    id: 'pr1',
    title: {
      et: 'Samaliigiline ristmik',
      ru: 'Равнозначный перекрёсток',
      en: 'Equal intersection',
    },
    hint: {
      et: 'Kehtib parema käe reegel. Sina tuled alt, auto paremalt.',
      ru: 'Действует помеха справа. Ты снизу, машина справа.',
      en: 'Priority to the right. You come from below, the car from the right.',
    },
    scene: 'equal_intersection',
    actors: [
      { id: 'you', label: { et: 'Sina (rattur)', ru: 'Ты (велосипед)', en: 'You (bike)' }, x: 232, y: 230 },
      { id: 'car', label: { et: 'Auto paremalt', ru: 'Авто справа', en: 'Car from right' }, x: 340, y: 122 },
    ],
    order: ['car', 'you'],
  },
  {
    id: 'pr2',
    title: {
      et: 'Hoovist teele',
      ru: 'Выезд со двора',
      en: 'Leaving a courtyard',
    },
    hint: {
      et: 'Külgnevalt alalt teele sõites annad teed kõigile.',
      ru: 'Выезжая с прилегающей территории, уступаешь всем.',
      en: 'Entering from an adjacent area, you give way to everyone.',
    },
    scene: 'driveway_exit',
    actors: [
      { id: 'you', label: { et: 'Sina hoovist', ru: 'Ты со двора', en: 'You from yard' }, x: 196, y: 210 },
      { id: 'car', label: { et: 'Auto teel', ru: 'Авто на дороге', en: 'Car on road' }, x: 70, y: 92 },
    ],
    order: ['car', 'you'],
  },
  {
    id: 'pr3',
    title: {
      et: 'Ülekäigurada rattaga',
      ru: 'Зебра на велосипеде',
      en: 'Zebra on a bicycle',
    },
    hint: {
      et: 'Rattaga ülekäigurajal pole jalakäija eesõigust. Auto ei pea sulle teed andma.',
      ru: 'На велосипеде по зебре нет преимущества пешехода.',
      en: 'Riding a bike on a zebra does not give pedestrian priority.',
    },
    scene: 'crosswalk_rules',
    actors: [
      { id: 'you', label: { et: 'Sina rajal', ru: 'Ты на зебре', en: 'You on zebra' }, x: 210, y: 236 },
      { id: 'car', label: { et: 'Auto teel', ru: 'Авто на дороге', en: 'Car on road' }, x: 70, y: 168 },
    ],
    order: ['car', 'you'],
  },
  {
    id: 'pr4',
    title: {
      et: 'Roheline foor, vastutulev pöörab',
      ru: 'Зелёный, встречный поворачивает',
      en: 'Green light, oncoming car turns',
    },
    hint: {
      et: 'Otse sõitjal on eesõigus vasakule pöörava ees.',
      ru: 'Едущий прямо имеет преимущество перед поворачивающим налево.',
      en: 'Going straight has priority over a vehicle turning left.',
    },
    scene: 'traffic_lights_turn',
    actors: [
      { id: 'you', label: { et: 'Sina otse', ru: 'Ты прямо', en: 'You straight' }, x: 232, y: 230 },
      { id: 'car', label: { et: 'Pöörav auto', ru: 'Поворачивающее авто', en: 'Turning car' }, x: 188, y: 40 },
    ],
    order: ['you', 'car'],
  },
  {
    id: 'pr5',
    title: {
      et: 'Ringristmik',
      ru: 'Кольцо',
      en: 'Roundabout',
    },
    hint: {
      et: 'Siseneja annab teed ringil juba sõitjatele.',
      ru: 'Въезжающий уступает тем, кто уже на круге.',
      en: 'Entering traffic gives way to traffic already in the circle.',
    },
    scene: 'roundabout',
    actors: [
      { id: 'you', label: { et: 'Sina sisened', ru: 'Ты въезжаешь', en: 'You entering' }, x: 210, y: 240 },
      { id: 'car', label: { et: 'Auto ringil', ru: 'Авто на круге', en: 'Car in circle' }, x: 258, y: 110 },
    ],
    order: ['car', 'you'],
  },
  {
    id: 'pr6',
    title: {
      et: 'Õueala',
      ru: 'Жилая зона',
      en: 'Living zone',
    },
    hint: {
      et: 'Õuealal on jalakäijal eesõigus kogu alal.',
      ru: 'В жилой зоне пешеход имеет преимущество везде.',
      en: 'In a living zone pedestrians have priority everywhere.',
    },
    scene: 'living_zone',
    actors: [
      { id: 'you', label: { et: 'Sina rattaga', ru: 'Ты на велосипеде', en: 'You on bike' }, x: 80, y: 130 },
      { id: 'ped', label: { et: 'Jalakäija', ru: 'Пешеход', en: 'Pedestrian' }, x: 140, y: 150 },
    ],
    order: ['ped', 'you'],
  },
];

export interface SignRound {
  code: string;
  options: Record<Language, string[]>;
  correctIndex: number;
}

export const signRounds: SignRound[] = [
  {
    code: '221',
    options: {
      et: ['Anna teed', 'Peatee', 'Sissesõidu keeld', 'Jalgrattatee'],
      ru: ['Уступите дорогу', 'Главная дорога', 'Въезд запрещён', 'Велодорожка'],
      en: ['Give way', 'Priority road', 'No entry', 'Cycle path'],
    },
    correctIndex: 0,
  },
  {
    code: '222',
    options: {
      et: ['Peatee', 'Peatu ja anna teed', 'Õueala', 'Jalgtee'],
      ru: ['Главная дорога', 'Стоп и уступи', 'Жилая зона', 'Пешеходная дорожка'],
      en: ['Priority road', 'Stop and give way', 'Living zone', 'Footpath'],
    },
    correctIndex: 1,
  },
  {
    code: '211',
    options: {
      et: ['Anna teed', 'Peatee lõpp', 'Peatee', 'Kiirus 20'],
      ru: ['Уступите дорогу', 'Конец главной', 'Главная дорога', 'Скорость 20'],
      en: ['Give way', 'End of priority', 'Priority road', 'Speed 20'],
    },
    correctIndex: 2,
  },
  {
    code: '431',
    options: {
      et: ['Jalgrattaga sõidu keeld', 'Jalgrattatee', 'Ülekäigurada', 'Lapsed'],
      ru: ['Движение на велосипедах запрещено', 'Велодорожка', 'Пешеходный переход', 'Дети'],
      en: ['No cycling', 'Cycle path', 'Pedestrian crossing', 'Children'],
    },
    correctIndex: 1,
  },
  {
    code: '313a',
    options: {
      et: ['Jalgrattatee', 'Jalgrattaga sõidu keeld', 'Jalgtee', 'Peatee'],
      ru: ['Велодорожка', 'Движение на велосипедах запрещено', 'Пешеходная дорожка', 'Главная дорога'],
      en: ['Cycle path', 'No cycling', 'Footpath', 'Priority road'],
    },
    correctIndex: 1,
  },
  {
    code: '433',
    options: {
      et: ['Jalgratta- ja jalgtee', 'Sissesõidu keeld', 'Peatu', 'Lapsed'],
      ru: ['Пешеходная и велосипедная дорожка', 'Въезд запрещён', 'Стоп', 'Дети'],
      en: ['Shared pedestrian and cycle path', 'No entry', 'Stop', 'Children'],
    },
    correctIndex: 0,
  },
  {
    code: '543',
    options: {
      et: ['Õueala', 'Ülekäigurada', 'Jalgrattatee', 'Peatee'],
      ru: ['Жилая зона', 'Пешеходный переход', 'Велодорожка', 'Главная дорога'],
      en: ['Living zone', 'Pedestrian crossing', 'Cycle path', 'Priority road'],
    },
    correctIndex: 1,
  },
  {
    code: '573',
    options: {
      et: ['Jalakäijate ala', 'Õueala', 'Peatee lõpp', 'Kiirus 20'],
      ru: ['Пешеходная зона', 'Жилая зона', 'Конец главной', 'Скорость 20'],
      en: ['Pedestrian zone', 'Living zone', 'End of priority', 'Speed 20'],
    },
    correctIndex: 1,
  },
  {
    code: '331',
    options: {
      et: ['Suurim kiirus 20', 'Peatee', 'Anna teed', 'Jalgratturid'],
      ru: ['Ограничение 20', 'Главная дорога', 'Уступите дорогу', 'Велосипедисты'],
      en: ['Speed limit 20', 'Priority road', 'Give way', 'Cyclists'],
    },
    correctIndex: 0,
  },
  {
    code: '132',
    options: {
      et: ['Lapsed', 'Jalgratturid (hoiatus)', 'Ülekäigurada', 'Õueala'],
      ru: ['Дети', 'Велосипедисты (предупреждение)', 'Пешеходный переход', 'Жилая зона'],
      en: ['Children', 'Cyclists (warning)', 'Pedestrian crossing', 'Living zone'],
    },
    correctIndex: 1,
  },
];

export interface EquipmentFault {
  id: string;
  label: Record<Language, string>;
}

export interface EquipmentRound {
  id: string;
  title: Record<Language, string>;
  scene: string;
  faults: EquipmentFault[];
  correctIds: string[];
}

export const equipmentRounds: EquipmentRound[] = [
  {
    id: 'eq1',
    title: {
      et: 'Sõidad pimedas. Mis on puudu?',
      ru: 'Едешь в темноте. Чего не хватает?',
      en: 'Riding in the dark. What is missing?',
    },
    scene: 'lights_reflectors',
    faults: [
      { id: 'front', label: { et: 'Valge / kollane esituli', ru: 'Белая / жёлтая фара спереди', en: 'White / amber front light' } },
      { id: 'rear', label: { et: 'Punane tagatuli', ru: 'Красный задний фонарь', en: 'Red rear light' } },
      { id: 'radio', label: { et: 'Raadio', ru: 'Радио', en: 'A radio' } },
    ],
    correctIds: ['front', 'rear'],
  },
  {
    id: 'eq2',
    title: {
      et: '14-aastane sõidab teel. Mis on kohustuslik?',
      ru: '14-летний едет по дороге. Что обязательно?',
      en: 'A 14-year-old is riding on the road. What is mandatory?',
    },
    scene: 'helmet_safety',
    faults: [
      { id: 'helmet', label: { et: 'Kinnitatud kiiver', ru: 'Застёгнутый шлем', en: 'Fastened helmet' } },
      { id: 'license', label: { et: 'Jalgratturi juhiluba (10–15 a, sõiduteel)', ru: 'Права велосипедиста (10–15 лет, на проезжей части)', en: 'Cyclist licence (ages 10–15 on roadway)' } },
      { id: 'mirror', label: { et: 'Autopeegel', ru: 'Автомобильное зеркало', en: 'A car wing mirror' } },
    ],
    correctIds: ['helmet', 'license'],
  },
  {
    id: 'eq3',
    title: {
      et: 'Milline varustus peab rattal olema alati?',
      ru: 'Какое оснащение должно быть на велосипеде всегда?',
      en: 'Which equipment must the bike always have?',
    },
    scene: 'reflectors_diagram',
    faults: [
      { id: 'bell', label: { et: 'Signaalkell', ru: 'Звонок', en: 'Bell' } },
      { id: 'brakes', label: { et: 'Kaks sõltumatut pidurit', ru: 'Два независимых тормоза', en: 'Two independent brakes' } },
      { id: 'siren', label: { et: 'Politseisireen', ru: 'Полицейская сирена', en: 'Police siren' } },
    ],
    correctIds: ['bell', 'brakes'],
  },
  {
    id: 'eq4',
    title: {
      et: 'Mis on pimedas KEELATUD / vale?',
      ru: 'Что в темноте ЗАПРЕЩЕНО / неверно?',
      en: 'What is forbidden / wrong in the dark?',
    },
    scene: 'phone_ban',
    faults: [
      { id: 'phone', label: { et: 'Telefon käes sõites', ru: 'Телефон в руке на ходу', en: 'Phone in hand while riding' } },
      { id: 'noLights', label: { et: 'Sõit ilma tuledega pimedas', ru: 'Езда без фар в темноте', en: 'Riding without lights in the dark' } },
      { id: 'helmetAdult', label: { et: 'Täiskasvanu ilma kiivrita (soovituslik, mitte keeld)', ru: 'Взрослый без шлема (рекомендация, не запрет)', en: 'Adult without helmet (recommended, not banned)' } },
    ],
    correctIds: ['phone', 'noLights'],
  },
];

export interface SprintItem {
  id: string;
  statement: Record<Language, string>;
  truth: boolean;
  why: Record<Language, string>;
}

export const sprintItems: SprintItem[] = [
  {
    id: 's1',
    statement: {
      et: 'Alla 16-aastasele on kiiver teel sõites kohustuslik.',
      ru: 'До 16 лет шлем на дороге обязателен.',
      en: 'A helmet is mandatory on the road under the age of 16.',
    },
    truth: true,
    why: {
      et: 'LS nõuab kinnitatud kiivrit kõigile alla 16-aastastele.',
      ru: 'Закон требует застёгнутый шлем для всех младше 16 лет.',
      en: 'The law requires a fastened helmet for everyone under 16.',
    },
  },
  {
    id: 's2',
    statement: {
      et: 'Rattaga ülekäigurajal sõites on sul sama eesõigus kui jalakäijal.',
      ru: 'Если едешь по зебре на велосипеде, у тебя то же преимущество, что у пешехода.',
      en: 'Riding across a zebra gives you the same priority as a pedestrian.',
    },
    truth: false,
    why: {
      et: 'Eesõigus tekib siis, kui lükkad ratast käekõrval — siis oled jalakäija.',
      ru: 'Преимущество появляется, только если ведёшь велосипед рядом — тогда ты пешеход.',
      en: 'Priority appears only if you walk the bike — then you are a pedestrian.',
    },
  },
  {
    id: 's3',
    statement: {
      et: 'Hoovist teele sõites pead andma teed kõigile teel olijatele.',
      ru: 'Выезжая со двора, ты уступаешь всем, кто уже на дороге.',
      en: 'Leaving a courtyard, you must give way to everyone already on the road.',
    },
    truth: true,
    why: {
      et: 'Külgnevalt alalt teele sõitev juht annab teed igale teel liiklejale.',
      ru: 'Выезжая с прилегающей территории, водитель уступает всем на дороге.',
      en: 'A driver entering from an adjacent area gives way to all road users.',
    },
  },
  {
    id: 's4',
    statement: {
      et: 'Sõiduteel tohivad ratturid sõita kõrvuti kahes reas.',
      ru: 'По проезжей части велосипедисты могут ехать в два ряда рядом.',
      en: 'Cyclists may ride two abreast on the roadway.',
    },
    truth: false,
    why: {
      et: 'Sõiduteel sõidetakse ühes reas, võimalikult parema ääre lähedal.',
      ru: 'На проезжей части едут в один ряд, как можно ближе к правому краю.',
      en: 'On the roadway you ride in single file, close to the right edge.',
    },
  },
  {
    id: 's5',
    statement: {
      et: 'Õuealal on suurim kiirus 20 km/h.',
      ru: 'В жилой зоне максимальная скорость 20 км/ч.',
      en: 'The speed limit in a living zone is 20 km/h.',
    },
    truth: true,
    why: {
      et: 'Õuealal kehtib 20 km/h ja jalakäijal on eesõigus.',
      ru: 'В жилой зоне лимит 20 км/ч, преимущество у пешехода.',
      en: 'Living zones are 20 km/h and pedestrians have priority.',
    },
  },
  {
    id: 's6',
    statement: {
      et: 'Pimeda ajal piisab ainult helkuritest, tulesid ei ole vaja.',
      ru: 'В темноте достаточно катафотов, фары не нужны.',
      en: 'In the dark, reflectors alone are enough; lights are optional.',
    },
    truth: false,
    why: {
      et: 'Vaja on nii tulesid (valge ees, punane taga) kui ka helkureid.',
      ru: 'Нужны и фары (белый спереди, красный сзади), и катафоты.',
      en: 'You need both lights (white front, red rear) and reflectors.',
    },
  },
  {
    id: 's7',
    statement: {
      et: '10–15-aastane peab sõiduteel sõites omama jalgratturi juhiluba.',
      ru: 'В 10–15 лет на проезжей части нужны права велосипедиста.',
      en: 'Ages 10–15 need a cyclist licence when riding on the roadway.',
    },
    truth: true,
    why: {
      et: 'Alates 16. eluaastast luba ei nõuta. 10–15-aastasel peab luba kaasas olema.',
      ru: 'С 16 лет права не нужны. В 10–15 лет права должны быть с собой.',
      en: 'From 16 no licence is required. Ages 10–15 must carry one on the roadway.',
    },
  },
  {
    id: 's8',
    statement: {
      et: 'Joobes tohid rattaga sõita, sest jalgratas ei ole auto.',
      ru: 'Пьяным можно ехать на велосипеде, потому что это не машина.',
      en: 'You may cycle while drunk because a bike is not a car.',
    },
    truth: false,
    why: {
      et: 'Joobe keeld kehtib kõigile juhtidele, sh jalgratturile.',
      ru: 'Запрет опьянения действует на всех водителей, включая велосипедиста.',
      en: 'The intoxication ban applies to all drivers, including cyclists.',
    },
  },
  {
    id: 's9',
    statement: {
      et: 'Kui on kasutatav jalgrattarada, pead seda kasutama.',
      ru: 'Если есть пригодная велополоса, ты обязан ею пользоваться.',
      en: 'If a usable cycle lane exists, you must use it.',
    },
    truth: true,
    why: {
      et: 'Jalgrattatee või -rada on kohustuslik, kui see on kasutatav.',
      ru: 'Велодорожка или полоса обязательны, если ими можно пользоваться.',
      en: 'A cycle track or lane is mandatory when it is usable.',
    },
  },
  {
    id: 's10',
    statement: {
      et: 'Telefoni tohid hoida käes, kui räägid lühidalt.',
      ru: 'Телефон можно держать в руке, если разговор короткий.',
      en: 'You may hold a phone if the call is short.',
    },
    truth: false,
    why: {
      et: 'Käes hoitav telefon võtab käe ja tähelepanu — see on keelatud.',
      ru: 'Телефон в руке забирает руку и внимание — это запрещено.',
      en: 'A handheld phone takes a hand and attention — it is forbidden.',
    },
  },
  {
    id: 's11',
    statement: {
      et: 'Ringristmikule sisenedes annad teed ringil juba sõitjatele.',
      ru: 'Въезжая на кольцо, уступаешь тем, кто уже на круге.',
      en: 'When entering a roundabout you give way to traffic already circulating.',
    },
    truth: true,
    why: {
      et: 'Klassikalisel ringil on eesõigus juba ringil olijatel.',
      ru: 'На классическом кольце преимущество у тех, кто уже едет по кругу.',
      en: 'On a classic roundabout, circulating traffic has priority.',
    },
  },
  {
    id: 's12',
    statement: {
      et: 'Punase fooriga tohid rattaga sõita, kui autosid ei paista.',
      ru: 'На красный можно ехать на велосипеде, если машин не видно.',
      en: 'You may ride through a red light if no cars are visible.',
    },
    truth: false,
    why: {
      et: 'Foor kehtib ratturile samamoodi. Punasega sõitmine on rikkumine.',
      ru: 'Светофор обязателен и для велосипедиста. Езда на красный — нарушение.',
      en: 'Lights bind cyclists too. Going on red is an offence.',
    },
  },
];
