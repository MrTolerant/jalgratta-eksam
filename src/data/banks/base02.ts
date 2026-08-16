import { Question } from '@/types';

export const base02: Question[] = [
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
  }
];
