import { Question } from '@/types';

export const base01: Question[] = [
{
    id: 'q_prio_01',
    categoryId: 'priority_give_way',
    difficulty: 'easy',
    question: {
      et: 'Sõidad jalgrattaga õuealalt või hoovist sõiduteele. Kellele pead teed andma?',
      ru: 'Вы выезжаете на велосипеде из двора или жилой зоны на проезжую часть. Кому вы обязаны уступить дорогу?',
      en: 'You are riding a bicycle out of a courtyard or living zone onto the roadway. To whom must you give way?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Ainult mootorsõidukitele, mis lähenevad vasakult.',
          ru: 'Только автомобилям, приближающимся слева.',
          en: 'Only to motor vehicles approaching from the left.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Kõigile teel liiklejatele (nii sõidukitele kui ka jalakäijatele).',
          ru: 'Всем участникам движения на дороге (как транспортным средствам, так и пешеходам).',
          en: 'All road users on that road (both vehicles and pedestrians).',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Mitte kellelegi, kui oled juba hoo sisse saanud.',
          ru: 'Никому, если вы уже набрали скорость.',
          en: 'To no one, if you have already gained speed.',
        },
      },
    ],
    correctAnswerId: 'opt_2',
    explanation: {
      et: 'Liiklusseaduse järgi peab teega külgnevalt alalt, õuealalt või hoovist teele sõitev juht andma teed igale teel liiklejale.',
      ru: 'Согласно Закону о дорожном движении, выезжая со двора или прилегающей территории, водитель обязан уступить дорогу всем участникам движения на дороге.',
      en: 'According to traffic law, a driver entering the road from an adjacent area or courtyard must give way to all road users on that road.',
    },
    lawReference: 'LS § 17 lg 1',
    visual: {
      type: 'svg_intersection',
      svgVariant: 'driveway_exit',
    },
  },
{
    id: 'q_prio_02',
    categoryId: 'priority_give_way',
    difficulty: 'medium',
    question: {
      et: 'Sõidad jalgrattaga teepeenralt sõiduteele. Kes peab teed andma?',
      ru: 'Вы выезжаете на велосипеде с обочины на проезжую часть. Кто должен уступить дорогу?',
      en: 'You are moving from the road shoulder onto the roadway on a bicycle. Who must give way?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Sõiduteel sõitev juht peab andma teed teepeenralt tulevale ratturile.',
          ru: 'Водитель на проезжей части обязан уступить дорогу выезжающему велосипедисту.',
          en: 'The driver on the roadway must give way to the cyclist entering from the shoulder.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Jalgrattur peab andma teed sõiduteel liiklejatele.',
          ru: 'Велосипедист обязан уступить дорогу движущимся по проезжей части.',
          en: 'The cyclist must give way to users already traveling on the roadway.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Kehtib parema käe reegel.',
          ru: 'Действует правило помехи справа.',
          en: 'The priority-to-the-right rule applies.',
        },
      },
    ],
    correctAnswerId: 'opt_2',
    explanation: {
      et: 'Teepeenralt või tee äärest sõitu alustav või sõiduteele suunduv juht peab teed andma sõiduteel liikuvatele juhtidele.',
      ru: 'Водитель, начинающий движение от края дороги или обочины и выезжающий на проезжую часть, обязан уступить дорогу движущимся по ней транспортным средствам.',
      en: 'A driver starting off from the roadside or shoulder and entering the roadway must give way to drivers traveling on the roadway.',
    },
    lawReference: 'LS § 17 lg 2',
    visual: {
      type: 'svg_intersection',
      svgVariant: 'shoulder_entry',
    },
  },
{
    id: 'q_prio_03',
    categoryId: 'priority_give_way',
    difficulty: 'medium',
    question: {
      et: 'Rattur läheneb ristmikule, mille ees on märk „Anna teed“ (kolmnurk teravikuga alla). Mida see märk kohustab tegema?',
      ru: 'Велосипедист приближается к перекрестку с установленным знаком «Уступите дорогу» (треугольник вершиной вниз). Что требует этот знак?',
      en: 'A cyclist approaches an intersection with a "Give way" sign (inverted triangle). What is required?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Peatuma igal juhul vähemalt 3 sekundiks enne ristmikku.',
          ru: 'Остановиться в любом случае минимум на 3 секунды перед перекрестком.',
          en: 'Stop in all cases for at least 3 seconds before the intersection.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Andma teed lõikuval (peateel) sõitvatele juhtidele.',
          ru: 'Уступить дорогу водителям, движущимся по пересекаемой (главной) дороге.',
          en: 'Give way to drivers traveling on the intersecting (priority) road.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Märk kehtib ainult autodele, jalgrattur võib vabalt sõita.',
          ru: 'Знак действует только на автомобили, велосипедист может ехать свободно.',
          en: 'The sign applies only to cars, cyclists have free right of way.',
        },
      },
    ],
    correctAnswerId: 'opt_2',
    explanation: {
      et: 'Märk 221 „Anna teed“ kohustab juhti andma teed lõikuval teel sõitvale juhile, lisateatetahvli korral aga peateel sõitvale juhile.',
      ru: 'Знак 221 «Уступите дорогу» обязывает водителя уступить дорогу транспортным средствам на пересекаемой дороге.',
      en: 'Sign 221 "Give way" requires the driver to give way to drivers traveling on the intersecting road.',
    },
    lawReference: 'Liiklusmärgid märk 221',
    visual: {
      type: 'sign',
      signCode: '221',
      signName: {
        et: 'Märk 221: Anna teed',
        ru: 'Знак 221: Уступите дорогу',
        en: 'Sign 221: Give way',
      },
    },
  },
{
    id: 'q_prio_04',
    categoryId: 'priority_give_way',
    difficulty: 'easy',
    question: {
      et: 'Ristmiku ees on märk „Peatu ja anna teed“ (STOP). Kus peab jalgrattur peatuma?',
      ru: 'Перед перекрестком установлен знак «STOP» (Стоп и уступи дорогу). Где обязан остановиться велосипедист?',
      en: 'There is a "STOP and Give way" sign at an intersection. Where must the cyclist stop?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Stoppjoone ees, selle puudumisel lõikuva sõidutee ääre ees.',
          ru: 'Перед стоп-линией, а при ее отсутствии — перед краем пересекаемой проезжей части.',
          en: 'Before the stop line, or if absent, before the edge of the intersecting roadway.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Vaid siis, kui teine sõiduk on nähtaval; tühjal teel ei pea peatuma.',
          ru: 'Только если видна другая машина; на пустой дороге останавливаться не обязательно.',
          en: 'Only if another vehicle is visible; no stop needed on an empty road.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Ristmiku keskel.',
          ru: 'Посреди перекрестка.',
          en: 'In the middle of the intersection.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Märk 222 „Peatu ja anna teed“ nõuab kohustuslikku peatumist stoppjoone ees või selle puudumisel ristuva tee ääre ees, isegi kui teisi liiklejaid ei paista.',
      ru: 'Знак 222 «STOP» требует обязательной остановки перед стоп-линией (или краем пересекаемой ПЧ), даже если других машин нет.',
      en: 'Sign 222 "STOP" mandates a full stop before the stop line or edge of the intersecting roadway.',
    },
    lawReference: 'Liiklusmärgid märk 222',
    visual: {
      type: 'sign',
      signCode: '222',
      signName: {
        et: 'Märk 222: Peatu ja anna teed',
        ru: 'Знак 222: Стоп и уступи дорогу',
        en: 'Sign 222: STOP',
      },
    },
  },
{
    id: 'q_pos_01',
    categoryId: 'road_position',
    difficulty: 'easy',
    question: {
      et: 'Kus peab jalgrattur sõitma sõiduteel liigeldes?',
      ru: 'Где должен двигаться велосипедист при движении по проезжей части?',
      en: 'Where should a cyclist ride when traveling on the roadway?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Võimalikult sõidutee parema ääre lähedal ühes reas.',
          ru: 'Как можно ближе к правому краю проезжей части в один ряд.',
          en: 'As close to the right edge of the roadway as possible in a single file.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Sõiduraja keskel või vasakus servas.',
          ru: 'Посередине полосы или у левого края.',
          en: 'In the middle or left side of the lane.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Mitmekesi kõrvuti tervet sõidurada hõivates.',
          ru: 'В несколько рядов рядом друг с другом, занимая всю полосу.',
          en: 'Riding side by side occupying the whole lane.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Jalgrattur peab sõiduteel sõitma võimalikult parema ääre lähedal ja üksteise järel (yksikreas), välja arvatud enne ümberreastumist või vasakpööret.',
      ru: 'Велосипедист обязан двигаться по проезжей части как можно ближе к правому краю в один ряд, за исключением перестроения и поворота налево.',
      en: 'A cyclist must ride as close to the right edge of the roadway as possible in a single file, except before maneuvering or turning left.',
    },
    lawReference: 'LS § 31 lg 1',
    visual: {
      type: 'svg_bike_lane',
      svgVariant: 'road_right_edge',
    },
  },
{
    id: 'q_pos_02',
    categoryId: 'road_position',
    difficulty: 'medium',
    question: {
      et: 'Millal tohib üle 13-aastane jalgrattur sõita kõnniteel?',
      ru: 'Когда велосипедисту старше 13 лет разрешено ехать по тротуару?',
      en: 'When is a cyclist over 13 years old permitted to ride on a sidewalk?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Mitte kunagi, see on alati rangelt keelatud.',
          ru: 'Никогда, это всегда строго запрещено.',
          en: 'Never, it is strictly forbidden in all cases.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Kui sõiduteel sõitmine on tee seisukorra tõttu oluliselt raskendatud, samuti alla 10-aastase lapse saatmisel või lapseistmel last vedades.',
          ru: 'Если движение по проезжей части существенно затруднено состоянием дороги, а также при сопровождении ребенка до 10 лет или перевозке ребенка в кресле.',
          en: 'If riding on the road is significantly impeded due to road conditions, or when accompanying a child under 10 or carrying a child.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Alati, kui autojuhtidele meeldib kiiremini sõita.',
          ru: 'Всегда, если машинам на дороге хочется ехать быстрее.',
          en: 'Always, whenever motorists drive fast.',
        },
      },
    ],
    correctAnswerId: 'opt_2',
    explanation: {
      et: 'Kõnniteel võivad sõita alla 13-aastased, lapse saatjad (kuni 10 a), last vedavad ratturid või kui sõidutee seisukord teeb seal sõitmise oluliselt raskendatuks. Jalakäijat ei tohi ohustada!',
      ru: 'По тротуару разрешено ехать детям до 13 лет, сопровождающим ребенка до 10 лет, с ребенком в кресле, либо если состояние ПЧ делает езду по ней существенно затрудненной.',
      en: 'Children under 13, their escorts (up to 10 yo), riders carrying child passengers, or when road conditions make roadway riding severely impeded may ride on sidewalks.',
    },
    lawReference: 'LS § 32 lg 1',
    visual: {
      type: 'svg_bike_lane',
      svgVariant: 'sidewalk_rules',
    },
  },
{
    id: 'q_pos_03',
    categoryId: 'road_position',
    difficulty: 'easy',
    question: {
      et: 'Kas jalgratturid tohivad sõiduteel sõita kõrvuti (kahes reas)?',
      ru: 'Разрешено ли велосипедистам ехать по проезжей части рядом друг с другом (в два ряда)?',
      en: 'Are cyclists allowed to ride side by side (two abreast) on the roadway?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Jah, kui nad vestlevad omavahel.',
          ru: 'Да, если они разговаривают друг с другом.',
          en: 'Yes, if they are conversing.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Ei, sõiduteel tohib sõita ainult üksteise järel ühes reas.',
          ru: 'Нет, по проезжей части разрешено ехать только друг за другом в один ряд.',
          en: 'No, cyclists may only ride one behind the other in a single file on the roadway.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Jah, kui liiklustihedus on madal.',
          ru: 'Да, если на дороге мало машин.',
          en: 'Yes, if traffic density is low.',
        },
      },
    ],
    correctAnswerId: 'opt_2',
    explanation: {
      et: 'Sõiduteel peavad jalgratturid liikuma ühes reas (üksteise järel), et tagada ohutus ja mitte takistada teisi sõidukeid.',
      ru: 'На проезжей части велосипедисты должны двигаться строго в один ряд друг за другом.',
      en: 'On the roadway, cyclists must move in a single file behind each other to maintain safety and not obstruct traffic.',
    },
    lawReference: 'LS § 31 lg 1',
  },
{
    id: 'q_turns_01',
    categoryId: 'turns',
    difficulty: 'hard',
    question: {
      et: 'Kuidas peab jalgrattur sooritama vasakpöörde mitmerajalisel tiheda liiklusega teel asulas?',
      ru: 'Как велосипедист должен выполнять поворот налево на многополосной дороге с интенсивным движением в городе?',
      en: 'How should a cyclist make a left turn on a multi-lane road with heavy traffic in an urban area?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Reastuma järsult vasakpoolsele rajale otse autode ette.',
          ru: 'Резко перестроиться в крайний левый ряд прямо перед автомобилями.',
          en: 'Abruptly change to the leftmost lane directly in front of cars.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Ohutum on sõita otse üle ristmiku, tulla rattalt maha ja ületada tee jalakäijana (nn kaheetapiline vasakpööre).',
          ru: 'Безопаснее проехать прямо через перекресток, спешиться и пересечь дорогу пешком (двухэтапный поворот).',
          en: 'It is safer to ride straight across the intersection, dismount, and cross the roadway as a pedestrian (two-stage turn).',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Vasakpööre on jalgratturile seadusega igal pool keelatud.',
          ru: 'Поворот налево для велосипедистов запрещен везде законом.',
          en: 'Left turns are strictly prohibited everywhere for cyclists.',
        },
      },
    ],
    correctAnswerId: 'opt_2',
    explanation: {
      et: 'Kui sõiduteel on samas suunas mitu sõidurada või liiklus on tihe, on jalgratturil ohutuim sooritada vasakpööre kahe etapina või ületada sõidutee jalakäijana ratast käekõrval lükates.',
      ru: 'На многополосных дорогах или при интенсивном движении наиболее безопасный способ повернуть налево — прямой проезд перекрестка с последующим спешиванием и переходом по переходу (2-этапный поворот).',
      en: 'On multi-lane roads or in dense traffic, the safest method for a left turn is a two-stage turn or dismounting and walking across as a pedestrian.',
    },
    lawReference: 'LS § 48 lg 2',
    visual: {
      type: 'svg_turning',
      svgVariant: 'left_turn_stages',
    },
  }
];
