import { Question } from '@/types';

export const base03: Question[] = [
{
    id: 'q_lane_01',
    categoryId: 'bicycle_paths',
    difficulty: 'easy',
    question: {
      et: 'Mida tähistab ümmargune sinine märk jalgratta sümboliga (märk 431)?',
      ru: 'Что обозначает круглый синий знак с символом велосипеда (знак 431)?',
      en: 'What does a round blue sign with a bicycle symbol mean (sign 431)?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Jalgrattatee – tee, mis on ette nähtud jalgrattaga, kergliikuriga ja pisimopeediga sõitmiseks.',
          ru: 'Велосипедная дорожка — предназначена для движения на велосипедах, лёгких персональных средствах и микромопедах.',
          en: 'Cycle path – designated for bicycles, personal light electric vehicles, and mini-mopeds.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Jalgrattaga sõitmise keeluala.',
          ru: 'Зона запрета движения на велосипедах.',
          en: 'Zone where cycling is strictly prohibited.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Jalgrataste remonditöökoda.',
          ru: 'Мастерская по ремонту велосипедов.',
          en: 'Bicycle repair workshop.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Märk 431 „Jalgrattatee“ on kohustusmärk, mis määrab teeosa jalgratastele ja kergliikuritele.',
      ru: 'Знак 431 «Велосипедная дорожка» является предписывающим знаком, определяющим дорогу для велосипедистов и лёгкого электротранспорта.',
      en: 'Sign 431 "Cycle path" is a mandatory sign designating a dedicated path for bicycles and light personal vehicles.',
    },
    lawReference: 'Liiklusmärgid märk 431',
    visual: {
      type: 'sign',
      signCode: '431',
      signName: {
        et: 'Märk 431: Jalgrattatee',
        ru: 'Знак 431: Велосипедная дорожка',
        en: 'Sign 431: Cycle path',
      },
    },
  },
{
    id: 'q_lane_02',
    categoryId: 'bicycle_paths',
    difficulty: 'medium',
    question: {
      et: 'Mida tähendab märk 313a (punane ring jalgratta kujutisega valgel taustal)?',
      ru: 'Что означает дорожный знак 313a (красный круг с изображением велосипеда)?',
      en: 'What does sign 313a (red circular prohibition sign with a bicycle) mean?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Jalgrattaga ja pisimopeediga sõidu keeld.',
          ru: 'Запрет движения на велосипедах и микромопедах.',
          en: 'Prohibition of cycling and mini-mopeds.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Jalgratturite eesõigus tee suhtes.',
          ru: 'Преимущество велосипедистов.',
          en: 'Bicycle right-of-way.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Laste jalgrattavõistluse algus.',
          ru: 'Начало детских соревнований на велосипедах.',
          en: 'Start of a children bicycle race.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Märk 313a on keelumärk: jalgrattaga, kergliikuriga ja pisimopeediga edasisõit on selle märgi alt keelatud.',
      ru: 'Знак 313a является запрещающим: движение на велосипеде за знак запрещено.',
      en: 'Sign 313a is a prohibitory sign banning the riding of bicycles and mini-mopeds past the sign.',
    },
    lawReference: 'Liiklusmärgid märk 313a',
    visual: {
      type: 'sign',
      signCode: '313a',
      signName: {
        et: 'Märk 313a: Jalgrattasõidu keeld',
        ru: 'Знак 313a: Движение на велосипедах запрещено',
        en: 'Sign 313a: Cycling prohibited',
      },
    },
  },
{
    id: 'q_dark_01',
    categoryId: 'darkness_and_visibility',
    difficulty: 'easy',
    question: {
      et: 'Millised tuled peavad jalgrattal põlema pimeda ajal või halva nähtavuse korral sõites?',
      ru: 'Какие фонари должны гореть на велосипеде при движении в тёмное время суток или в условиях плохой видимости?',
      en: 'Which lights must be illuminated on a bicycle in the dark or poor visibility?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Ees valge tuli ja taga punane tuli.',
          ru: 'Спереди белый фонарь, сзади красный фонарь.',
          en: 'Front white light and rear red light.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Mõlemad tuled peavad olema rohelised.',
          ru: 'Оба фонаря должны быть зелёными.',
          en: 'Both lights must be green.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Tuled pole kohustuslikud, kui linnas põlevad tänavalaternad.',
          ru: 'Фонари не обязательны, если горят уличные фонари.',
          en: 'Lights are not required if city streetlights are on.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Liiklusseaduse järgi peab pimeda ajal või halva nähtavuse korral jalgrattal põlema ees valge ja taga punane tuli.',
      ru: 'По Закону о дорожном движении в темноте или при плохой видимости на велосипеде спереди должен гореть белый свет, сзади — красный.',
      en: 'By law, during darkness or poor visibility, a bicycle must have an active white light in front and red light in back.',
    },
    lawReference: 'LS § 87 lg 1',
    visual: {
      type: 'svg_equipment',
      svgVariant: 'lights_reflectors',
    },
  },
{
    id: 'q_dark_02',
    categoryId: 'darkness_and_visibility',
    difficulty: 'medium',
    question: {
      et: 'Millised helkurid peavad jalgrattal olema paigaldatud?',
      ru: 'Какие светоотражатели (катафоты) должны быть установлены на велосипеде?',
      en: 'Which reflectors must be fitted on a bicycle?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Ees valge, taga punane ning vähemalt ühe ratta mõlemal küljel kollane või valge helkur.',
          ru: 'Спереди белый, сзади красный, и минимум на одном колесе с обеих сторон жёлтый или белый отражатель.',
          en: 'Front white, rear red, and on at least one wheel on both sides a yellow or white reflector.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Ainult taga üks sinine helkur.',
          ru: 'Только сзади один синий катафот.',
          en: 'Only a single blue reflector at the rear.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Helkureid pole vaja, kui rattur kannab erksavärvilisi riideid.',
          ru: 'Отражатели не нужны, если на велосипедисте яркая одежда.',
          en: 'Reflectors are not needed if the rider wears bright clothes.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Jalgrattal peab olema ees valge ja taga punane helkur ning vähemalt ühe ratta mõlemal küljel kollane või valge helkur (kodarahelkur).',
      ru: 'На велосипеде спереди должен быть белый катафот, сзади красный, и на колёсах (спицах) жёлтые или белые отражатели с обеих сторон.',
      en: 'A bicycle must have a white front reflector, red rear reflector, and amber/white side reflectors on at least one wheel.',
    },
    lawReference: 'LS § 87',
    visual: {
      type: 'svg_equipment',
      svgVariant: 'reflectors_diagram',
    },
  },
{
    id: 'q_safe_01',
    categoryId: 'safety_and_equipment',
    difficulty: 'easy',
    question: {
      et: 'Kellele on Eestis jalgrattaga sõitmisel jalgratturikiivri kandmine kohustuslik?',
      ru: 'Для кого в Эстонии ношение застёгнутого велосипедного шлема является обязательным по закону?',
      en: 'For whom is wearing a fastened bicycle helmet mandatory by law in Estonia?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Kõigile alla 16-aastastele jalgratturitele.',
          ru: 'Всем велосипедистам моложе 16 лет.',
          en: 'All cyclists under 16 years of age.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Ainult professionaalsetele võidusõitjatele.',
          ru: 'Только профессиональным спортсменам.',
          en: 'Only professional bicycle racers.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Ainult pensioniealistele ratturitele.',
          ru: 'Только велосипедистам пенсионного возраста.',
          en: 'Only senior citizen cyclists.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Eesti Liiklusseaduse kohaselt peab alla 16-aastane jalgrattur teel (sh kõnniteel ja kergliiklusteel) sõites kandma kinnirihmatud jalgratturikiivrit.',
      ru: 'Согласно ПДД Эстонии, велосипедист в возрасте до 16 лет при движении по дороге (включая тротуары и велодорожки) обязан носить застёгнутый шлем.',
      en: 'Under Estonian Traffic Act, cyclists under 16 must wear a properly fastened bicycle helmet when riding on any road or path.',
    },
    lawReference: 'LS § 31 lg 6',
    visual: {
      type: 'svg_equipment',
      svgVariant: 'helmet_safety',
    },
  },
{
    id: 'q_safe_02',
    categoryId: 'safety_and_equipment',
    difficulty: 'medium',
    question: {
      et: 'Mis vanusest alates tohib laps iseseisvalt (ilma täiskasvanu järelevalveta) sõita sõiduteel ja millal on vaja juhiluba?',
      ru: 'С какого возраста ребёнок может самостоятельно ехать по проезжей части и когда требуются права?',
      en: 'From what age may a child ride independently on the roadway and when is a license required?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Alates 10. eluaastast. 10–15-aastasel ratturil peab sõiduteel sõites olema kaasas jalgratturi juhiluba.',
          ru: 'С 10 лет. В возрасте 10–15 лет при движении по проезжей части обязательно иметь при себе права велосипедиста.',
          en: 'From 10 years of age. Cyclists aged 10–15 must carry a cyclist driver license on the roadway.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Alates 6. eluaastast ja juhiluba pole kunagi vaja.',
          ru: 'С 6 лет, и права никогда не нужны.',
          en: 'From 6 years old and a license is never needed.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Alates 18. eluaastast koos autojuhiloaga.',
          ru: 'С 18 лет только с автомобильными правами.',
          en: 'From 18 years old only with a car license.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Sõiduteel võib iseseisvalt jalgrattaga sõita vähemalt 10-aastane isik. 10–15-aastasel peab olema kaasas jalgratturi juhiluba. Alates 16. eluaastast juhiluba ei nõuta.',
      ru: 'По проезжей части самостоятельно можно ехать с 10 лет. В возрасте 10–15 лет обязательно наличие прав. С 16 лет права велосипедиста не требуются.',
      en: 'A person aged 10 or older may ride independently on the roadway. Between 10 and 15, carrying a bicycle license is mandatory. From 16, no license is required.',
    },
    lawReference: 'LS § 148 lg 1',
  },
{
    id: 'q_safe_03',
    categoryId: 'safety_and_equipment',
    difficulty: 'easy',
    question: {
      et: 'Millised tehnilised seadmed peavad jalgrattal kindlasti olema töökorras?',
      ru: 'Какое обязательное техническое оснащение должно быть в исправном состоянии на велосипеде?',
      en: 'Which technical safety devices must be in working order on a bicycle?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Töökorras pidur ja helisignaal (signaalkell).',
          ru: 'Исправный тормоз и звуковой сигнал (звонок).',
          en: 'Working brakes and a sound signal (bell).',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Mootor ja tahavaatepeegel.',
          ru: 'Мотор и зеркало заднего вида.',
          en: 'Engine and rearview mirror.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Kiirusmõõdik ja turvapadi.',
          ru: 'Спидометр и подушка безопасности.',
          en: 'Speedometer and airbag.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Jalgrattal peab olema töökorras pidur ja signaalkell ning nõuetekohased helkurid ja valgustusseadmed.',
      ru: 'Велосипед обязан иметь исправные тормоза, звонок (звуковой сигнал), а также установленные катафоты и фонари.',
      en: 'A bicycle must have working brakes, a bell, and appropriate reflectors and lighting.',
    },
    lawReference: 'LS § 87',
  },
{
    id: 'q_safe_04',
    categoryId: 'safety_and_equipment',
    difficulty: 'easy',
    question: {
      et: 'Kas jalgrattaga sõites tohib hoida käes telefoni ja rääkida või sõnumeid saata?',
      ru: 'Разрешено ли во время езды на велосипеде держать в руке телефон, разговаривать или писать сообщения?',
      en: 'Are you allowed to hold a phone to call or text while riding a bicycle?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Ei, juhtrauast tuleb hoida mõlema käega (v.a manöövrimärguande andmisel) ja telefoni käeshoidmine on keelatud.',
          ru: 'Нет, руль нужно держать обеими руками (кроме подачи сигналов), держать телефон в руке запрещено.',
          en: 'No, handlebars must be held with both hands (except signaling), holding a phone is forbidden.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Jah, kui sõidad alla 10 km/h.',
          ru: 'Да, если скорость меньше 10 км/ч.',
          en: 'Yes, if riding below 10 km/h.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Jah, kui vaatad samal ajal ainult ekraani.',
          ru: 'Да, если смотреть только в экран.',
          en: 'Yes, if looking only at the screen.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Sõidu ajal telefoni käes hoidmine hajutab tähelepanu ja halvendab ratta juhitavust, mis on ohtlik ja keelatud.',
      ru: 'Использование телефона в руке во время езды рассеивает внимание и мешает управлению велосипедом, создавая опасность.',
      en: 'Holding a mobile device while riding is distracting, degrades control, and is illegal.',
    },
    lawReference: 'LS § 31',
  }
];
