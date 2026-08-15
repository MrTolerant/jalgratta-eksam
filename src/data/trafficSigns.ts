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
];
