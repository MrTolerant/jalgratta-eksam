export type MemoLang = 'et' | 'ru' | 'en';

export type MemoCard = {
  id: string;
  group: 'core' | 'exam';
  icon: 'age' | 'helmet' | 'zebra' | 'gear' | 'yield' | 'position' | 'junction' | 'signal' | 'pedestrian' | 'zone';
  title: Record<MemoLang, string>;
  points: Record<MemoLang, string>[];
};

export const rulesMemo: MemoCard[] = [
  {
    id: 'age',
    group: 'core',
    icon: 'age',
    title: {
      et: 'Vanus ja juhiluba',
      ru: 'Возраст и водительские права',
      en: 'Age and licence',
    },
    points: [
      {
        et: 'Sõiduteel tohib iseseisvalt sõita vähemalt 10-aastane isik.',
        ru: 'Самостоятельно по проезжей части разрешено ехать с 10 лет.',
        en: 'Solo riding on the roadway is allowed from age 10.',
      },
      {
        et: '10–15-aastasel ratturil peab sõiduteel sõites kaasas olema jalgratturi juhiluba.',
        ru: 'Велосипедисты 10–15 лет на проезжей части обязаны иметь при себе права.',
        en: 'Cyclists aged 10–15 must carry a cyclist licence on the roadway.',
      },
      {
        et: 'Alates 16. eluaastast jalgratta juhtimiseks juhiluba ei nõuta.',
        ru: 'С 16 лет права для езды на велосипеде не требуются.',
        en: 'From age 16 no licence is required for cycling.',
      },
    ],
  },
  {
    id: 'helmet',
    group: 'core',
    icon: 'helmet',
    title: {
      et: 'Jalgratturikiiver',
      ru: 'Велосипедный шлем',
      en: 'Bicycle helmet',
    },
    points: [
      {
        et: 'Alla 16-aastasele on kinnirihmatud kiiver teel sõites KOHUSTUSLIK.',
        ru: 'До 16 лет застёгнутый шлем на дороге ОБЯЗАТЕЛЕН.',
        en: 'Under 16 a fastened helmet is MANDATORY on the road.',
      },
      {
        et: 'Täiskasvanule on kiiver tungivalt soovituslik.',
        ru: 'Взрослым шлем настоятельно рекомендуется.',
        en: 'For adults a helmet is strongly recommended.',
      },
    ],
  },
  {
    id: 'zebra',
    group: 'core',
    icon: 'zebra',
    title: {
      et: 'Ülekäigurada (sebra)',
      ru: 'Пешеходный переход (зебра)',
      en: 'Pedestrian crossing (zebra)',
    },
    points: [
      {
        et: 'Rattaga TOHIB sebral ületada jalakäija kiirusega, ohustamata jalakäijat.',
        ru: 'Переезжать зебру верхом РАЗРЕШЕНО со скоростью шага, не мешая пешеходам.',
        en: 'You MAY ride across a zebra at walking speed without endangering pedestrians.',
      },
      {
        et: 'Reguleerimata sebral rattaga sõites EI OLE sul auto ees eesõigust, v.a kui auto pöörab.',
        ru: 'На нерегулируемой зебре у едущего велосипедиста НЕТ преимущества перед авто, кроме случая поворота машины.',
        en: 'On an uncontrolled zebra a riding cyclist has NO priority over cars, unless the car is turning.',
      },
      {
        et: 'Ratast käekõrval lükates oled jalakäija ja saad täieliku eesõiguse.',
        ru: 'Спешившись и ведя велосипед, ты пешеход с полным преимуществом.',
        en: 'Walking the bike makes you a pedestrian with full priority.',
      },
    ],
  },
  {
    id: 'gear',
    group: 'core',
    icon: 'gear',
    title: {
      et: 'Kohustuslik varustus',
      ru: 'Обязательное оснащение',
      en: 'Mandatory equipment',
    },
    points: [
      {
        et: 'Töökorras pidurid ja signaalkell.',
        ru: 'Исправные тормоза и звонок.',
        en: 'Working brakes and a bell.',
      },
      {
        et: 'Helkurid: ees valge, taga punane, ratastel kollased või valged.',
        ru: 'Отражатели: спереди белый, сзади красный, на колёсах жёлтые или белые.',
        en: 'Reflectors: white front, red rear, yellow or white on the wheels.',
      },
      {
        et: 'Pimedas ja halva nähtavusega: ees valge põlev tuli, taga punane põlev tuli.',
        ru: 'В темноте и сумерках: спереди горящий белый свет, сзади красный.',
        en: 'In darkness or poor visibility: a lit white front lamp and a red rear lamp.',
      },
    ],
  },
  {
    id: 'yield',
    group: 'exam',
    icon: 'yield',
    title: {
      et: 'Teeandmise kohustus',
      ru: 'Кому уступать',
      en: 'Duty to give way',
    },
    points: [
      {
        et: 'Hoovist, õuealalt või teega külgnevalt alalt teele sõites anna teed KÕIGILE teel olijatele.',
        ru: 'Выезжая со двора, жилой зоны или прилегающей территории — уступи ВСЕМ, кто уже на дороге.',
        en: 'Leaving a yard, living zone or adjacent area: give way to EVERYONE already on the road.',
      },
      {
        et: 'Jalgrattatee ja sõidutee reguleerimata lõikumisel anna teed sõiduteel liikujale ja ületa jalakäija kiirusega.',
        ru: 'На нерегулируемом пересечении велодорожки с проезжей частью уступи машинам и переезжай со скоростью шага.',
        en: 'At an uncontrolled cycle-path / roadway crossing, give way to road traffic and cross at walking speed.',
      },
      {
        et: 'Pöörav auto peab andma teed ülekäigurada ületavale ratturile.',
        ru: 'Поворачивающий автомобиль обязан уступить велосипедисту на переходе.',
        en: 'A turning car must give way to a cyclist crossing at the crosswalk.',
      },
    ],
  },
  {
    id: 'position',
    group: 'exam',
    icon: 'position',
    title: {
      et: 'Koht teel ja rattateed',
      ru: 'Где ехать',
      en: 'Position and cycle paths',
    },
    points: [
      {
        et: 'Sõida jalgrattateel või -rajal; nende puudumisel võimalikult sõidutee parema ääre lähedal.',
        ru: 'Едь по велодорожке или полосе; если их нет — как можно правее по проезжей части.',
        en: 'Use a cycle path or lane; if none, stay as far right as possible on the roadway.',
      },
      {
        et: 'Jalgratta- ja jalgteel ära ohusta jalakäijat; tema kõrval sõida sammu kiirusega.',
        ru: 'На совмещённой дорожке не мешай пешеходу; рядом с ним — со скоростью шага.',
        en: 'On a shared path do not endanger pedestrians; beside them ride at walking speed.',
      },
      {
        et: 'Seisvast või aeglasest autost tohid mööduda paremalt, kui ruumi on ja auto ei näita parempööret.',
        ru: 'Стоящую или медленную машину можно объехать справа, если есть место и она не показывает правый поворот.',
        en: 'You may pass a stopped or slow car on the right if there is room and it is not signalling a right turn.',
      },
    ],
  },
  {
    id: 'junction',
    group: 'exam',
    icon: 'junction',
    title: {
      et: 'Ristmikud',
      ru: 'Перекрёстки',
      en: 'Intersections',
    },
    points: [
      {
        et: 'Reguleerija märguanded on ülimuslikud foori suhtes. Punane tuli kehtib ka ratturile.',
        ru: 'Сигналы регулировщика главнее светофора. Красный горит и для велосипедиста.',
        en: 'A traffic officer overrides traffic lights. A red light binds cyclists too.',
      },
      {
        et: 'Samaliigilisel reguleerimata ristmikul kehtib parema käe reegel: anna teed paremalt tulevale.',
        ru: 'На равнозначном нерегулируемом перекрёстке — помеха справа: уступи тому, кто справа.',
        en: 'At an equal uncontrolled junction, give way to the right.',
      },
      {
        et: 'Peatee, „Anna teed“ ja STOP tühistavad parema käe reegli.',
        ru: 'Главная дорога, «Уступи» и STOP отменяют помеху справа.',
        en: 'A main-road, yield or STOP sign overrides priority-to-the-right.',
      },
    ],
  },
  {
    id: 'signal',
    group: 'exam',
    icon: 'signal',
    title: {
      et: 'Käemärguanded ja pöörded',
      ru: 'Сигналы рукой и повороты',
      en: 'Hand signals and turns',
    },
    points: [
      {
        et: 'Enne pööret, ümberpõiget või peatumist näita kätt õigel ajal — vähemalt 3 sekundit ette.',
        ru: 'Перед поворотом, объездом или остановкой покажи руку вовремя — не позже чем за 3 секунды.',
        en: 'Before a turn, bypass or stop, signal in time — at least 3 seconds ahead.',
      },
      {
        et: 'Vasak / parem: käsi horisontaalselt küljele. Peatumine: käsi üles. Kell ei asenda märguannet.',
        ru: 'Левый / правый: рука горизонтально в сторону. Остановка: рука вверх. Звонок сигнал не заменяет.',
        en: 'Left / right: arm out horizontally. Stop: arm up. A bell does not replace the signal.',
      },
      {
        et: 'Pöörde hetkel hoia juhtrauda kahe käega. Enne manöövrit vaata taha.',
        ru: 'В сам поворот держи руль двумя руками. Перед манёвром посмотри назад.',
        en: 'During the turn keep both hands on the bars. Look back before you move.',
      },
    ],
  },
  {
    id: 'pedestrian',
    group: 'exam',
    icon: 'pedestrian',
    title: {
      et: 'Jalakäijad ja kõnnitee',
      ru: 'Пешеходы и тротуар',
      en: 'Pedestrians and sidewalks',
    },
    points: [
      {
        et: 'Kõnniteel tohib sõita alla 13-aastane, kuni kaks saatjat, last rattatoolis vedav rattur või kui sõidutee on oluliselt raskesti sõidetav.',
        ru: 'По тротуару можно: младше 13 лет, до двух сопровождающих, с ребёнком в кресле или если проезжая часть сильно непригодна.',
        en: 'Sidewalk riding: under 13, up to two escorts, a rider with a child in a seat, or if the roadway is badly unusable.',
      },
      {
        et: 'Kõnniteel ja ühisel teel ära ohusta ega takista jalakäijat.',
        ru: 'На тротуаре и общей дорожке не подвергай опасности и не мешай пешеходу.',
        en: 'On a sidewalk or shared path do not endanger or block pedestrians.',
      },
      {
        et: 'Bussi- või trammpeatuses anna teed peale- ja mahaminejatele.',
        ru: 'У остановки автобуса или трамвая уступи входящим и выходящим.',
        en: 'At a bus or tram stop give way to boarding and alighting passengers.',
      },
    ],
  },
  {
    id: 'zone',
    group: 'exam',
    icon: 'zone',
    title: {
      et: 'Õueala ja keelud',
      ru: 'Жилая зона и запреты',
      en: 'Living zone and bans',
    },
    points: [
      {
        et: 'Õuealal max 20 km/h. Jalakäijal on eesõigus kogu alal; lapsed tohivad teel mängida.',
        ru: 'В жилой зоне максимум 20 км/ч. Преимущество у пешехода везде; детям можно играть на дороге.',
        en: 'Living zone: max 20 km/h. Pedestrians have priority everywhere; children may play on the road.',
      },
      {
        et: 'Keelatud: telefon käes, sõit ilma käeta, teise sõiduki järel vedamine.',
        ru: 'Нельзя: телефон в руке, езда без рук, держаться за другую машину.',
        en: 'Forbidden: phone in hand, no-hands riding, holding onto another vehicle.',
      },
      {
        et: 'Sõitjat tohid vedada ainult ettenähtud istmel; alla 16-aastasel ka kinnitatud kiiver.',
        ru: 'Пассажира можно везти только на предусмотренном сиденье; до 16 лет — ещё и застёгнутый шлем.',
        en: 'A passenger only on a proper seat; under 16 they also need a fastened helmet.',
      },
    ],
  },
];
