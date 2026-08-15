import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'priority_give_way',
    order: 1,
    title: {
      et: 'Teeandmise kohustus',
      ru: 'Обязанность уступить дорогу',
      en: 'Duty to give way',
    },
    description: {
      et: 'Sõiduteele sõit hoovist, teega külgnevalt alalt ja teepeenralt ning ristmikel.',
      ru: 'Выезд на проезжую часть со двора, прилегающей территории, обочины и на перекрестках.',
      en: 'Entering the roadway from courtyards, adjacent areas, road shoulders, and intersections.',
    },
    icon: 'ShieldAlert',
  },
  {
    id: 'road_position',
    order: 2,
    title: {
      et: 'Sõiduki asukoht sõitmisel',
      ru: 'Расположение на дороге',
      en: 'Position on the roadway',
    },
    description: {
      et: 'Sõitmine asulas, väljaspool asulat, kõnniteel ja manöövri sooritamisel.',
      ru: 'Движение в населенном пункте, вне его, по тротуару и при выполнении маневров.',
      en: 'Riding in urban and rural areas, on sidewalks, and during maneuvers.',
    },
    icon: 'Navigation',
  },
  {
    id: 'turns',
    order: 3,
    title: {
      et: 'Vasak- ja tagasipööre',
      ru: 'Левый поворот и разворот',
      en: 'Left turns and U-turns',
    },
    description: {
      et: 'Ohutu vasak- ja tagasipöörde sooritamine ristmikel ja ristmikevahelisel alal.',
      ru: 'Безопасное выполнение левого поворота и разворота на перекрестках и перегонах.',
      en: 'Safe execution of left turns and U-turns at intersections and between them.',
    },
    icon: 'CornerUpLeft',
  },
  {
    id: 'obstacle_avoidance',
    order: 4,
    title: {
      et: 'Ümberpõige takistusest',
      ru: 'Объезд препятствий',
      en: 'Bypassing obstacles',
    },
    description: {
      et: 'Takistusest möödumine, suunamärguanded ja teiste liiklejatega arvestamine.',
      ru: 'Объезд неподвижных препятствий, подача сигналов и безопасность.',
      en: 'Passing obstacles, hand signaling, and observing traffic.',
    },
    icon: 'MoveHorizontal',
  },
  {
    id: 'intersections',
    order: 5,
    title: {
      et: 'Sõitmine ristmikel',
      ru: 'Проезд перекрестков',
      en: 'Passing intersections',
    },
    description: {
      et: 'Reguleeritud (foorid, reguleerija) ja reguleerimata (parema käe reegel, peatee) ristmikud.',
      ru: 'Регулируемые (светофоры, регулировщик) и нерегулируемые (помеха справа, главная дорога).',
      en: 'Controlled (lights, traffic officers) and uncontrolled intersections (priority to right).',
    },
    icon: 'GitFork',
  },
  {
    id: 'pedestrian_crossings',
    order: 6,
    title: {
      et: 'Sõidutee ületamine ülekäigurajal',
      ru: 'Пересечение по пешеходному переходу',
      en: 'Pedestrian crossings',
    },
    description: {
      et: 'Eesti liiklusseaduse reeglid ülekäiguraja (ülekäigukoha) ületamisel jalgrattaga.',
      ru: 'Правила ПДД Эстонии при пересечении дороги по зебре на велосипеде.',
      en: 'Estonian traffic rules for cyclists crossing at pedestrian crosswalks.',
    },
    icon: 'Footprints',
  },
  {
    id: 'pedestrian_safety',
    order: 7,
    title: {
      et: 'Jalakäijate ohutus',
      ru: 'Безопасность пешеходов',
      en: 'Pedestrian safety',
    },
    description: {
      et: 'Juhi kohustused jalakäijate ohutuse tagamisel kõnniteel, kergliiklusteel ja bussipeatustes.',
      ru: 'Обязанности велосипедиста по отношению к пешеходам на тротуарах и совместных дорожках.',
      en: 'Cyclist responsibilities toward pedestrians on sidewalks and shared paths.',
    },
    icon: 'Users',
  },
  {
    id: 'bicycle_paths',
    order: 8,
    title: {
      et: 'Jalgrattateed ja -rajad',
      ru: 'Велосипедные дорожки и полосы',
      en: 'Bicycle paths and lanes',
    },
    description: {
      et: 'Jalgrattatee, jalgratta- ja jalgtee ning jalgrattaraja kasutamise reeglid ja märgistus.',
      ru: 'Правила движения по велодорожкам, совмещенным дорожкам и велополосам на ПЧ.',
      en: 'Rules and signs for cycle tracks, shared foot/cycle paths, and cycle lanes.',
    },
    icon: 'Bike',
  },
  {
    id: 'darkness_and_visibility',
    order: 9,
    title: {
      et: 'Pime aeg ja nähtavus',
      ru: 'Темное время суток и видимость',
      en: 'Darkness and poor visibility',
    },
    description: {
      et: 'Tuled (valge ees, punane taga), helkurid, ohutusvest ja nähtavus liikluses.',
      ru: 'Фары (белая спереди, красная сзади), светоотражатели, жилеты и видимость.',
      en: 'Lights (white front, red rear), reflectors, high-vis vests, and visibility.',
    },
    icon: 'Moon',
  },
  {
    id: 'safety_and_equipment',
    order: 10,
    title: {
      et: 'Ohutus, kiiver ja varustus',
      ru: 'Безопасность, шлем и оснащение',
      en: 'Safety, helmet & equipment',
    },
    description: {
      et: 'Kiivri kandmise nõue (kuni 16 a), vanusepiirangud (10 a, juhiluba 10-15 a), pidurid ja signaalkell.',
      ru: 'Требования к шлему (до 16 лет), возраст (10 лет, права 10-15 лет), звонок и тормоза.',
      en: 'Mandatory helmet rule (under 16), age requirements (10+ yrs, license 10-15), bell and brakes.',
    },
    icon: 'CheckCircle2',
  },
];
