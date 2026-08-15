import { Question } from '@/types';

export const questions: Question[] = [
  // -------------------------------------------------------------
  // CATEGORY 1: Priority & Give Way (Teeandmise kohustus)
  // -------------------------------------------------------------
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

  // -------------------------------------------------------------
  // CATEGORY 2: Road Position (Sõiduki asukoht sõitmisel)
  // -------------------------------------------------------------
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
      et: 'Jalgrattur peab sõiduteel sõitma võimalikult parema ääre lähedal ja üksteise järel (üksikreas), välja arvatud enne ümberreastumist või vasakpööret.',
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

  // -------------------------------------------------------------
  // CATEGORY 3: Turns (Vasak- ja tagasipööre)
  // -------------------------------------------------------------
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
  },
  {
    id: 'q_turns_02',
    categoryId: 'turns',
    difficulty: 'medium',
    question: {
      et: 'Kuidas peab jalgrattur näitama suunamärguannet enne vasakpööret?',
      ru: 'Как велосипедист должен подавать сигнал поворота перед поворотом налево?',
      en: 'How must a cyclist signal before making a left turn?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Sirutama vasaku käe kõrvale (või kõverdama parema käe küünarnukist ülespoole) aegsasti enne manöövrit.',
          ru: 'Вытянуть левую руку в сторону (или согнуть правую руку в локте вверх) заблаговременно до маневра.',
          en: 'Extend the left arm sideways (or bend the right arm upward at the elbow) well in advance.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Hõikama valjult „Pööran vasakule!“ vahetult pööramise hetkel.',
          ru: 'Громко крикнуть «Поворачиваю налево!» непосредственно в момент поворота.',
          en: 'Shout loudly "Turning left!" right at the moment of turning.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Kätega märku andma ei pea, piisab pea pööramisest.',
          ru: 'Подавать сигналы руками не нужно, достаточно повернуть голову.',
          en: 'No hand signals are needed, just look in that direction.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Enne manöövri alustamist peab jalgrattur andma käega selge suunamärguande ja lõpetama selle vahetult enne pööramist, et hoida mõlema käega juhtrauast kinni.',
      ru: 'Перед началом маневра велосипедист должен заблаговременно подать сигнал рукой (левая рука в сторону) и вернуть руку на руль непосредственно перед поворотом.',
      en: 'Before maneuvering, the cyclist must give a clear hand signal (left arm outstretched) in advance, returning hands to handlebars right before turning.',
    },
    lawReference: 'LS § 39 lg 1',
    visual: {
      type: 'svg_turning',
      svgVariant: 'hand_signals',
    },
  },

  // -------------------------------------------------------------
  // CATEGORY 4: Obstacle Avoidance (Ümberpõige)
  // -------------------------------------------------------------
  {
    id: 'q_obst_01',
    categoryId: 'obstacle_avoidance',
    difficulty: 'medium',
    question: {
      et: 'Sõidad tee paremas servas ja ees seisab pargitud auto. Kuidas teed ümberpõike?',
      ru: 'Вы едете по правому краю дороги, впереди припаркована машина. Как выполнить объезд?',
      en: 'You are riding along the right edge of the road and a parked car is ahead. How do you bypass it?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Vaatad taha, veendud ohutuses, annad vasakule suunamärguande ja möödud autost ohutu külgvahega (ustest kaugemal).',
          ru: 'Посмотреть назад, убедиться в безопасности, подать сигнал левого поворота и объехать с безопасным боковым интервалом (учитывая возможное открытие дверей).',
          en: 'Look back, ensure safety, signal left, and bypass with a safe lateral distance (away from opening doors).',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Pöörad koheselt kõrvale ilma taha vaatamata, sest takistuse korral on sul eesõigus.',
          ru: 'Сразу повернуть руль, не глядя назад, так как при препятствии у вас преимущество.',
          en: 'Immediately steer around without looking back, as you have priority.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Sõidad autole võimalikult lähedalt (5 cm kauguselt).',
          ru: 'Проехать как можно ближе к машине (в 5 см).',
          en: 'Ride as close as possible (5 cm) to the parked car.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Takistusest ümberpõikel peab juht veenduma manöövri ohutuses, näitama suunamärguannet ja hoidma piisavat külgvahet, et vältida kokkupõrget ootamatult avaneva auto uksega.',
      ru: 'При объезде препятствия необходимо убедиться в безопасности, подать сигнал рукой и держать достаточный боковой интервал на случай внезапного открытия двери авто.',
      en: 'When avoiding an obstacle, check behind, signal, and keep a safe lateral distance to avoid opening car doors.',
    },
    lawReference: 'LS § 45',
    visual: {
      type: 'svg_intersection',
      svgVariant: 'car_door_zone',
    },
  },

  // -------------------------------------------------------------
  // CATEGORY 5: Intersections (Sõitmine ristmikel)
  // -------------------------------------------------------------
  {
    id: 'q_inter_01',
    categoryId: 'intersections',
    difficulty: 'medium',
    question: {
      et: 'Lähened samaliigiliste teede ristmikule (reguleerimata, liiklusmärke pole). Kellel on eesõigus?',
      ru: 'Вы подъезжаете к перекрестку равнозначных дорог (нерегулируемый, знаков нет). Кто имеет преимущество?',
      en: 'You approach an uncontrolled intersection of equal roads (no signs). Who has priority?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Sõidukil, mis liigub kiiremini.',
          ru: 'Транспортное средство, которое движется быстрее.',
          en: 'The vehicle that is traveling faster.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Peab andma teed paremalt lähenevale sõidukijuhile (parema käe reegel).',
          ru: 'Необходимо уступить дорогу водителю, приближающемуся справа (правило правой руки).',
          en: 'Must give way to a driver approaching from the right (priority to the right).',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Jalgratturil on alati eesõigus auto ees.',
          ru: 'Велосипедист всегда имеет преимущество перед автомобилем.',
          en: 'A cyclist always has priority over cars.',
        },
      },
    ],
    correctAnswerId: 'opt_2',
    explanation: {
      et: 'Samaliigiliste teede ristmikul kehtib parema käe reegel: juht peab andma teed paremalt lähenevale juhile.',
      ru: 'На равнозначном перекрестке действует правило помехи справа: водитель обязан уступить дорогу приближающемуся справа транспортному средству.',
      en: 'At an intersection of equivalent roads, the priority-to-the-right rule applies: give way to traffic from the right.',
    },
    lawReference: 'LS § 58 lg 1',
    visual: {
      type: 'svg_intersection',
      svgVariant: 'equal_intersection',
    },
  },
  {
    id: 'q_inter_02',
    categoryId: 'intersections',
    difficulty: 'medium',
    question: {
      et: 'Sõidad reguleeritaval ristmikul rohelise fooritulega otse. Vastutulev auto soovib sooritada vasakpööret. Kes peab teed andma?',
      ru: 'Вы едете прямо на перекрестке на зеленый сигнал светофора. Встречный автомобиль хочет повернуть налево. Кто должен уступить дорогу?',
      en: 'You are going straight through a traffic light intersection on green. An oncoming car wants to turn left. Who gives way?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Vasakpööret sooritav auto juht peab andma teed otse sõitvale jalgratturile.',
          ru: 'Водитель поворачивающего налево автомобиля должен уступить дорогу велосипедисту, едущему прямо.',
          en: 'The oncoming driver turning left must give way to the cyclist going straight.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Jalgrattur peab alati autole teed andma.',
          ru: 'Велосипедист всегда обязан уступить дорогу автомобилю.',
          en: 'The cyclist must always yield to the car.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Mõlemad peavad seisma jääma ja ootama politseid.',
          ru: 'Оба обязаны остановиться и ждать полицию.',
          en: 'Both must stop and wait for police.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Vasakpööret või tagasipööret tegev juht peab andma teed vastassuunast otse või paremale liikuvatele sõidukijuhtidele.',
      ru: 'Водитель, совершающий левый поворот, обязан уступить дорогу встречным транспортным средствам, движущимся прямо или направо.',
      en: 'A driver turning left must give way to oncoming traffic going straight or turning right.',
    },
    lawReference: 'LS § 58 lg 2',
    visual: {
      type: 'svg_intersection',
      svgVariant: 'traffic_lights_turn',
    },
  },
  {
    id: 'q_inter_03',
    categoryId: 'intersections',
    difficulty: 'easy',
    question: {
      et: 'Reguleerija seisab ristmikul küljega teie poole, käed külgedel või välja sirutatud. Mida see tähendab?',
      ru: 'Регулировщик стоит к вам боком, руки опущены или вытянуты в стороны. Что это разрешает?',
      en: 'A traffic controller stands with their side facing you, arms down or extended. What does this mean?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Sõit on lubatud otse ja paremale (kui jalgratturina pole keelavat lisamärki).',
          ru: 'Движение разрешено прямо и направо (при отсутствии других ограничений).',
          en: 'Movement is permitted straight and to the right.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Kõikides suundades sõitmine on keelatud (peatumismärguanne).',
          ru: 'Движение во всех направлениях запрещено (сигнал остановки).',
          en: 'Movement in all directions is prohibited.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Lubatud on ainult tagasipööre.',
          ru: 'Разрешен только разворот.',
          en: 'Only a U-turn is permitted.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Kui reguleerija seisab liikleja poole küljega, on lubatud sõita otse ja paremale (vasakule pööre sõltub reeglitest ja ohutusest). Rinnaga või seljaga seismine keelab sõidu.',
      ru: 'Если регулировщик стоит боком к водителю — движение разрешено прямо и направо. Грудь и спина регулировщика — сигнал остановки («стена»).',
      en: 'If a traffic controller stands with their side to you, you may proceed straight or turn right. Facing chest or back means stop.',
    },
    lawReference: 'LS § 8',
    visual: {
      type: 'svg_intersection',
      svgVariant: 'traffic_officer_side',
    },
  },

  // -------------------------------------------------------------
  // CATEGORY 6: Pedestrian Crossings (Sõidutee ületamine ülekäigurajal)
  // -------------------------------------------------------------
  {
    id: 'q_cross_01',
    categoryId: 'pedestrian_crossings',
    difficulty: 'hard',
    question: {
      et: 'Kas jalgrattaga tohib ületada sõiduteed reguleerimata ülekäigurajal (sebral) sellel sõites?',
      ru: 'Разрешено ли пересекать проезжую часть по нерегулируемому пешеходному переходу (зебре) верхом на велосипеде?',
      en: 'Is a cyclist allowed to ride across a roadway on an uncontrolled pedestrian crossing (zebra)?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Ei, sebral tohib ratast alati ainult käekõrval lükata.',
          ru: 'Нет, по зебре всегда можно передвигаться только ведя велосипед рядом пешком.',
          en: 'No, on zebra crossings you may only walk your bike.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Jah, tohib sõita jalakäija kiirusega, kuid reguleerimata ülekäigurajal EI OLE ratturil auto suhtes eesõigust (autojuht ei pea teed andma), v.a juhul, kui auto pöörab sellele teele.',
          ru: 'Да, можно ехать со скоростью пешехода, но на нерегулируемом переходе у велосипедиста НЕТ преимущества перед авто (машины не обязаны уступать), кроме случая, когда авто поворачивает на эту дорогу.',
          en: 'Yes, at walking pace, but on uncontrolled crossings the cyclist DOES NOT have priority over cars (cars do not have to yield), unless the car is turning onto that road.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Jah, ja kõigil autodel on kohustus ratturile kohe teed anda.',
          ru: 'Да, и все машины обязаны сразу уступить дорогу велосипедисту.',
          en: 'Yes, and all cars are obligated to yield to the cyclist.',
        },
      },
    ],
    correctAnswerId: 'opt_2',
    explanation: {
      et: 'Eesti Liiklusseaduse järgi tohib ülekäigurajal sõita jalgrattaga, kuid reguleerimata ülekäigurajal ei ole jalgratturil sõidukijuhi suhtes eesõigust (kui autojuht just ei soorita pööret sellele teele). Jalakäijat ei tohi ohustada!',
      ru: 'По ПДД Эстонии ехать по зебре на велосипеде разрешено (с пешеходной скоростью), но у велосипедиста НЕТ преимущества перед машинами, если авто едет прямо. Преимущество появляется только если авто поворачивает.',
      en: 'Under Estonian law, you may ride across a crosswalk at pedestrian speed, but you have NO right of way over straight-moving cars unless the car is turning into that road.',
    },
    lawReference: 'LS § 100',
    visual: {
      type: 'svg_crossing',
      svgVariant: 'crosswalk_rules',
    },
  },
  {
    id: 'q_cross_02',
    categoryId: 'pedestrian_crossings',
    difficulty: 'medium',
    question: {
      et: 'Kuidas saab jalgrattur ülekäigurajal (sebral) kindla eesõiguse läheneva auto ees?',
      ru: 'Как велосипедист может получить гарантированное преимущество перед приближающимся автомобилем на нерегулируемой зебре?',
      en: 'How can a cyclist ensure full right of way over approaching cars at an uncontrolled crosswalk?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Tulles jalgrattalt maha ja lükates seda käekõrval jalakäijana.',
          ru: 'Спешившись с велосипеда и ведя его рядом в качестве пешехода.',
          en: 'By dismounting and walking the bicycle across as a pedestrian.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Helistades kella ja kiirendades üle tee.',
          ru: 'Позвонив в звонок и ускорившись через дорогу.',
          en: 'By ringing the bell and accelerating across.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Tõstes käe üles ja silmad kinni pigistades.',
          ru: 'Подняв руку вверх и зажмурившись.',
          en: 'By raising a hand and closing eyes.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Jalgrattalt maha tulnud ja ratast käekõrval lükkav isik on seaduse silmis jalakäija. Autojuhid on kohustatud reguleerimata ülekäigurajal jalakäijale teed andma.',
      ru: 'Человек, ведущий велосипед рядом, считается пешеходом. Водители автомобилей обязаны уступать дорогу пешеходам на нерегулируемом переходе.',
      en: 'A person walking a bicycle is considered a pedestrian. Motorists are legally required to give way to pedestrians at crosswalks.',
    },
    lawReference: 'LS § 2 p 16, LS § 35',
    visual: {
      type: 'svg_crossing',
      svgVariant: 'dismount_pedestrian',
    },
  },

  // -------------------------------------------------------------
  // CATEGORY 7: Pedestrian Safety (Jalakäijate ohutus)
  // -------------------------------------------------------------
  {
    id: 'q_pedsaf_01',
    categoryId: 'pedestrian_safety',
    difficulty: 'easy',
    question: {
      et: 'Sõidad jalgratta- ja jalgteel ning lähened jalakäijatele selja tagant. Kuidas käitud?',
      ru: 'Вы едете по совмещенной вело-пешеходной дорожке и приближаетесь к пешеходам со спины. Ваши действия?',
      en: 'You are riding on a shared pedestrian and cycle path approaching pedestrians from behind. What do you do?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Vähendad kiirust jalakäija kiiruseni, vajadusel hoiatad aegsasti kellaga ja möödud ohutu külgvahega.',
          ru: 'Снизить скорость до скорости пешехода, при необходимости заблаговременно предупредить звонком и объехать с безопасным интервалом.',
          en: 'Reduce speed to walking pace, warn gently with bell if necessary, and pass with safe clearance.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Kihutad maksimaalsel kiirusel otse nende vahelt läbi.',
          ru: 'Пронестись на максимальной скорости прямо между ними.',
          en: 'Speed through directly between them at maximum speed.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Nõuad häälekalt, et nad teelt viivitamatult murule hüppaksid.',
          ru: 'Громко требовать, чтобы они немедленно спрыгнули на траву.',
          en: 'Shout demands that they jump onto the grass immediately.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Kõnniteel ning jalgratta- ja jalgteel liigeldes ei tohi jalgrattur jalakäijaid ohustada ega takistada; jalakäijate vahetus läheduses tohib sõita vaid jalakäija kiirusega.',
      ru: 'На тротуарах и совместных дорожках велосипедист не должен подвергать опасности пешеходов; вблизи пешеходов разрешено двигаться только с их скоростью.',
      en: 'On sidewalks and shared paths, cyclists must not endanger pedestrians and must ride at walking speed near them.',
    },
    lawReference: 'LS § 32 lg 2',
  },

  // -------------------------------------------------------------
  // CATEGORY 8: Bicycle Paths & Lanes (Jalgrattateed ja -rajad)
  // -------------------------------------------------------------
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
          ru: 'Велосипедная дорожка — предназначена для движения на велосипедах, легких персональных средствах и микромопедах.',
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
      ru: 'Знак 431 «Велосипедная дорожка» является предписывающим знаком, определяющим дорогу для велосипедистов и легкого электротранспорта.',
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

  // -------------------------------------------------------------
  // CATEGORY 9: Darkness & Visibility (Pime aeg ja nähtavus)
  // -------------------------------------------------------------
  {
    id: 'q_dark_01',
    categoryId: 'darkness_and_visibility',
    difficulty: 'easy',
    question: {
      et: 'Millised tuled peavad jalgrattal põlema pimeda ajal või halva nähtavuse korral sõites?',
      ru: 'Какие фонари должны гореть на велосипеде при движении в темное время суток или в условиях плохой видимости?',
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
          ru: 'Оба фонаря должны быть зелеными.',
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
          ru: 'Спереди белый, сзади красный, и минимум на одном колесе с обеих сторон желтый или белый отражатель.',
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
      ru: 'На велосипеде спереди должен быть белый катафот, сзади красный, и на колесах (спицах) желтые или белые отражатели с обеих сторон.',
      en: 'A bicycle must have a white front reflector, red rear reflector, and amber/white side reflectors on at least one wheel.',
    },
    lawReference: 'LS § 87',
    visual: {
      type: 'svg_equipment',
      svgVariant: 'reflectors_diagram',
    },
  },

  // -------------------------------------------------------------
  // CATEGORY 10: Safety & Equipment (Ohutus, kiiver ja varustus)
  // -------------------------------------------------------------
  {
    id: 'q_safe_01',
    categoryId: 'safety_and_equipment',
    difficulty: 'easy',
    question: {
      et: 'Kellele on Eestis jalgrattaga sõitmisel jalgratturikiivri kandmine kohustuslik?',
      ru: 'Для кого в Эстонии ношение застегнутого велосипедного шлема является обязательным по закону?',
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
      ru: 'Согласно ПДД Эстонии, велосипедист в возрасте до 16 лет при движении по дороге (включая тротуары и велодорожки) обязан носить застегнутый шлем.',
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
      ru: 'С какого возраста ребенок может самостоятельно ехать по проезжей части и когда требуются права?',
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
  },
  {
    id: 'q_safe_05',
    categoryId: 'safety_and_equipment',
    difficulty: 'medium',
    question: {
      et: 'Kas jalgrattaga tohib sõita alkoholijoobes?',
      ru: 'Разрешено ли управлять велосипедом в состоянии алкогольного опьянения?',
      en: 'Is it permitted to ride a bicycle under the influence of alcohol?',
    },
    options: [
      {
        id: 'opt_1',
        text: {
          et: 'Ei, joobeseisundis sõiduki (sh jalgratta ja kergliikuri) juhtimine on rangelt keelatud ja karistatav.',
          ru: 'Нет, управление любым транспортом (включая велосипед и самокат) в состоянии опьянения строго запрещено законом.',
          en: 'No, operating any vehicle (including bicycles and e-scooters) while intoxicated is strictly prohibited.',
        },
      },
      {
        id: 'opt_2',
        text: {
          et: 'Jah, sest jalgratas ei ole mootorsõiduk.',
          ru: 'Да, так как велосипед не автомобиль.',
          en: 'Yes, because a bicycle is not a motor vehicle.',
        },
      },
      {
        id: 'opt_3',
        text: {
          et: 'Jah, aga ainult õuealal ja suvel.',
          ru: 'Да, но только во дворе и летом.',
          en: 'Yes, but only in courtyards in summer.',
        },
      },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Liiklusseaduse kohaselt ei tohi ükski juht (sh jalgrattur) olla joobeseisundis. Politsei võib joobes jalgratturit trahvida.',
      ru: 'Закон о дорожном движении прямо запрещает управлять велосипедом в состоянии опьянения под угрозой штрафа.',
      en: 'Under traffic laws, no driver may operate a vehicle (including a bicycle) while intoxicated.',
    },
    lawReference: 'LS § 69',
  },
];
