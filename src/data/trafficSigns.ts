import { TrafficSign } from '@/types';

export const trafficSigns: TrafficSign[] = [
  {
    code: '221',
    name: {
      et: 'Anna teed',
      ru: 'Уступите дорогу',
      en: 'Give way',
    },
    description: {
      et: 'Juht peab andma teed lõikuval teel sõitvale juhile, lisateatetahvli olemasolul peateel sõitjale.',
      ru: 'Водитель должен уступить дорогу транспортным средствам, движущимся по пересекаемой дороге.',
      en: 'The driver must give way to vehicles traveling on the intersecting roadway.',
    },
    category: 'priority',
    svgType: 'sign_221_give_way',
  },
  {
    code: '222',
    name: {
      et: 'Peatu ja anna teed',
      ru: 'Стоп и уступите дорогу (STOP)',
      en: 'Stop and give way (STOP)',
    },
    description: {
      et: 'Kohustuslik peatumine stoppjoone ees või lõikuva tee serval enne teed andmist.',
      ru: 'Обязательная остановка перед стоп-линией или краем пересекаемой проезжей части.',
      en: 'Mandatory stop before the stop line or edge of the intersection.',
    },
    category: 'priority',
    svgType: 'sign_222_stop',
  },
  {
    code: '211',
    name: {
      et: 'Peatee',
      ru: 'Главная дорога',
      en: 'Priority road',
    },
    description: {
      et: 'Annab juhile eesõiguse reguleerimata ristmike ületamisel.',
      ru: 'Предоставляет право преимущественного проезда нерегулируемых перекрестков.',
      en: 'Grants the driver priority at uncontrolled intersections.',
    },
    category: 'priority',
    svgType: 'sign_211_priority_road',
  },
  {
    code: '431',
    name: {
      et: 'Jalgrattatee',
      ru: 'Велосипедная дорожка',
      en: 'Cycle path',
    },
    description: {
      et: 'Kohustuslik teeosa jalgratastele ja kergliikuritele. Jalakäijad ei tohi seal takistada rattureid.',
      ru: 'Предписано для движения на велосипедах и легком персональном транспорте.',
      en: 'Designated path for bicycles and light personal electric vehicles.',
    },
    category: 'mandatory',
    svgType: 'sign_431_bike_path',
  },
  {
    code: '433',
    name: {
      et: 'Jalgratta- ja jalgtee',
      ru: 'Пешеходная и велосипедная дорожка',
      en: 'Shared pedestrian and cycle path',
    },
    description: {
      et: 'Ühine tee jalakäijatele ja jalgratturitele. Rattur ei tohi ohustada jalakäijat ja peab hoidma sobivat kiirust.',
      ru: 'Совместная дорожка для пешеходов и велосипедистов. Велосипедист не должен подвергать опасности пешеходов.',
      en: 'Shared path for pedestrians and cyclists. Cyclists must avoid endangering walkers.',
    },
    category: 'mandatory',
    svgType: 'sign_433_shared_path',
  },
  {
    code: '313a',
    name: {
      et: 'Jalgrattaga sõidu keeld',
      ru: 'Движение на велосипедах запрещено',
      en: 'No cycling',
    },
    description: {
      et: 'Keelab edasisõidu jalgrataste ja kergliikuritega.',
      ru: 'Запрещает движение на велосипедах и персональных мобильных средствах.',
      en: 'Prohibits cycling and light personal mobility devices.',
    },
    category: 'prohibitory',
    svgType: 'sign_313a_no_bike',
  },
  {
    code: '543',
    name: {
      et: 'Ülekäigurada',
      ru: 'Пешеходный переход',
      en: 'Pedestrian crossing',
    },
    description: {
      et: 'Tähistab ülekäigurada. Jalgrattaga võib ületada, kuid reguleerimata rajal puudub eesõigus autode ees.',
      ru: 'Обозначает пешеходный переход. Велосипедист может переехать на скорости шага, но без преимущества перед авто.',
      en: 'Designates a crosswalk. Cyclists may ride across at walking pace without right-of-way over cars.',
    },
    category: 'informative',
    svgType: 'sign_543_crosswalk',
  },
  {
    code: '573',
    name: {
      et: 'Õueala',
      ru: 'Жилая зона (Дворовая территория)',
      en: 'Residential / Living zone',
    },
    description: {
      et: 'Õuealal on jalakäijatel eesõigus ja suurim lubatud kiirus on 20 km/h.',
      ru: 'В жилой зоне пешеходы имеют преимущество на всей территории, макс. скорость 20 км/ч.',
      en: 'In living zones, pedestrians have right of way anywhere and max speed is 20 km/h.',
    },
    category: 'informative',
    svgType: 'sign_573_living_zone',
  },
  {
    code: '132',
    name: {
      et: 'Jalgratturid',
      ru: 'Велосипедисты',
      en: 'Cyclists',
    },
    description: {
      et: 'Hoiatus: ees võib olla jalgrattureid või jalgrattatee lõikumine.',
      ru: 'Предупреждение: впереди возможны велосипедисты или пересечение велодорожки.',
      en: 'Warning: cyclists ahead or a cycle path crossing.',
    },
    category: 'warning',
    svgType: 'sign_132_cyclists',
  },
  {
    code: '151',
    name: {
      et: 'Lapsed',
      ru: 'Дети',
      en: 'Children',
    },
    description: {
      et: 'Hoiatus: ees võib olla lapsi (kool, mänguväljak). Vähenda kiirust.',
      ru: 'Предупреждение: впереди возможны дети (школа, площадка). Снизь скорость.',
      en: 'Warning: children ahead (school, playground). Slow down.',
    },
    category: 'warning',
    svgType: 'sign_151_children',
  },
  {
    code: '212',
    name: {
      et: 'Peatee lõpp',
      ru: 'Конец главной дороги',
      en: 'End of priority road',
    },
    description: {
      et: 'Peatee lõpeb. Edasi kehtivad tavalised teeandmise reeglid.',
      ru: 'Главная дорога заканчивается. Дальше действуют обычные правила уступки.',
      en: 'Priority road ends. Normal give-way rules apply after this sign.',
    },
    category: 'priority',
    svgType: 'sign_212_end_priority',
  },
  {
    code: '331',
    name: {
      et: 'Suurim kiirus 20',
      ru: 'Ограничение скорости 20',
      en: 'Speed limit 20',
    },
    description: {
      et: 'Suurim lubatud kiirus 20 km/h. Õuealal kehtib sama piirang.',
      ru: 'Максимальная скорость 20 км/ч. В жилой зоне действует тот же лимит.',
      en: 'Maximum speed 20 km/h. The same limit applies in living zones.',
    },
    category: 'prohibitory',
    svgType: 'sign_331_speed_20',
  },
  {
    code: '351',
    name: {
      et: 'Sissesõidu keeld',
      ru: 'Въезд запрещён',
      en: 'No entry',
    },
    description: {
      et: 'Keelab sissesõidu kõikidele sõidukitele, sh jalgratastele, kui pole erandit.',
      ru: 'Запрещает въезд всем ТС, включая велосипеды, если нет исключения.',
      en: 'Forbids entry for all vehicles, including bicycles, unless excepted.',
    },
    category: 'prohibitory',
    svgType: 'sign_351_no_entry',
  },
  {
    code: '414',
    name: {
      et: 'Möödasõit paremalt',
      ru: 'Объезд справа',
      en: 'Pass on this side',
    },
    description: {
      et: 'Kohustab mööduma tähistatud takistusest või saarekesest paremal pool.',
      ru: 'Обязательно объезжать препятствие или островок с указанной стороны.',
      en: 'Requires passing an island or obstacle on the indicated side.',
    },
    category: 'mandatory',
    svgType: 'sign_414_keep_right',
  },
  {
    code: '432',
    name: {
      et: 'Jalgtee',
      ru: 'Пешеходная дорожка',
      en: 'Footpath',
    },
    description: {
      et: 'Kohustuslik jalgtee jalakäijatele. Rattaga tohid sõita vaid erandjuhtudel.',
      ru: 'Предписанная пешеходная дорожка. На велосипеде — только в виде исключения.',
      en: 'Mandatory footpath for pedestrians. Cycling only in exceptional cases.',
    },
    category: 'mandatory',
    svgType: 'sign_432_footpath',
  },
  {
    code: '434',
    name: {
      et: 'Jalgratta- ja jalgtee (eraldatud)',
      ru: 'Разделённая вело- и пешеходная дорожка',
      en: 'Separated cycle and foot path',
    },
    description: {
      et: 'Ratturid ja jalakäijad sõidavad/kõnnivad oma poolel, mida näitab märk ja märgistus.',
      ru: 'Велосипедисты и пешеходы движутся каждый по своей стороне, как показывает знак.',
      en: 'Cyclists and pedestrians keep to their own side as shown on the sign.',
    },
    category: 'mandatory',
    svgType: 'sign_434_separated',
  },
  {
    code: '571',
    name: {
      et: 'Jalakäijate ala',
      ru: 'Пешеходная зона',
      en: 'Pedestrian zone',
    },
    description: {
      et: 'Ala on jalakäijatele. Rattaga sõit on lubatud ainult siis, kui see on eraldi lubatud, ja jalakäija tempos.',
      ru: 'Зона для пешеходов. Езда на велосипеде — только если отдельно разрешено и со скоростью шага.',
      en: 'Area for pedestrians. Cycling only if separately allowed, and at walking pace.',
    },
    category: 'informative',
    svgType: 'sign_571_ped_zone',
  },
  {
    code: '574',
    name: {
      et: 'Õueala lõpp',
      ru: 'Конец жилой зоны',
      en: 'End of living zone',
    },
    description: {
      et: 'Õueala reeglid (20 km/h, jalakäija eesõigus) lõpevad.',
      ru: 'Правила жилой зоны (20 км/ч, преимущество пешехода) заканчиваются.',
      en: 'Living-zone rules (20 km/h, pedestrian priority) end here.',
    },
    category: 'informative',
    svgType: 'sign_574_end_living',
  },
];
