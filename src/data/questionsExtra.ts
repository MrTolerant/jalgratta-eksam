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
      ru: 'Велосипедист едет по главной дороге к перекрестку. На второстепенной стоит «Уступите дорогу». Кто едет первым?',
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
  q({
    id: 'q_pos_04',
    categoryId: 'road_position',
    difficulty: 'medium',
    question: {
      et: 'Kas asulavälisel teel tohib rattur sõita teepeenral?',
      ru: 'Можно ли за городом ехать по обочине?',
      en: 'May a cyclist ride on the shoulder outside a built-up area?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Jah, kui see on ohutu ega takista teisi; muidu sõidutee paremas servas.', ru: 'Да, если это безопасно и не мешает другим; иначе — у правого края проезжей части.', en: 'Yes if it is safe and does not obstruct others; otherwise on the right edge of the roadway.' } },
      { id: 'opt_2', text: { et: 'Ei, teepeenar on ainult autodele.', ru: 'Нет, обочина только для машин.', en: 'No, the shoulder is only for cars.' } },
      { id: 'opt_3', text: { et: 'Jah, aga ainult pimedal ajal.', ru: 'Да, но только ночью.', en: 'Yes, but only at night.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Asulavälisel teel võib rattur kasutada teepeenart, kui see on sõidetav ja ohutu. Takistada ei tohi jalakäijaid.',
      ru: 'Вне населённого пункта велосипедист может ехать по обочине, если она пригодна и безопасна.',
      en: 'Outside built-up areas a cyclist may use the shoulder when it is rideable and safe.',
    },
    lawReference: 'LS § 31',
    visual: { type: 'svg_bike_lane', svgVariant: 'shoulder_entry' },
  }),
  q({
    id: 'q_pos_05',
    categoryId: 'road_position',
    difficulty: 'easy',
    question: {
      et: 'Kui teel on kasutatav jalgrattarada, kus peab rattur sõitma?',
      ru: 'Если на дороге есть пригодная велополоса, где должен ехать велосипедист?',
      en: 'If a usable cycle lane is present, where must the cyclist ride?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Jalgrattarajal, kui see on kasutatav ja ohutu.', ru: 'По велополосе, если ею можно безопасно пользоваться.', en: 'In the cycle lane, if it is usable and safe.' } },
      { id: 'opt_2', text: { et: 'Sõiduraja keskel, et autod näeksid paremini.', ru: 'По центру полосы, чтобы машины лучше видели.', en: 'In the middle of the car lane for visibility.' } },
      { id: 'opt_3', text: { et: 'Vasakul sõidurajal.', ru: 'В левом ряду.', en: 'In the left traffic lane.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Kui jalgrattatee või -rada on olemas ja kasutatav, peab rattur seda kasutama.',
      ru: 'При наличии пригодной велодорожки или полосы велосипедист обязан ею пользоваться.',
      en: 'If a cycle track or lane exists and is usable, the cyclist must use it.',
    },
    lawReference: 'LS § 31',
    visual: { type: 'svg_bike_lane', svgVariant: 'bike_lane' },
  }),
  q({
    id: 'q_turns_03',
    categoryId: 'turns',
    difficulty: 'medium',
    question: {
      et: 'Enne vasakpööret ühe sõidurajaga teel, mida rattur peab tegema?',
      ru: 'Перед левым поворотом на однополосной дороге что должен сделать велосипедист?',
      en: 'Before a left turn on a single-lane road, what must the cyclist do?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Anda käega märku, veenduda ohutuses ja vajadusel reastuda vasakule.', ru: 'Показать сигнал рукой, убедиться в безопасности и при необходимости перестроиться влево.', en: 'Signal with the arm, check it is safe, and move left if needed.' } },
      { id: 'opt_2', text: { et: 'Pöörata ootamatult ilma märguandeta.', ru: 'Повернуть внезапно без сигнала.', en: 'Turn suddenly without signalling.' } },
      { id: 'opt_3', text: { et: 'Peatuda keset teed ja oodata, kuni kõik autod lahkuvad.', ru: 'Остановиться посреди дороги и ждать, пока все машины уедут.', en: 'Stop in the middle of the road until all cars leave.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Enne manöövrit tuleb anda suunamärku, kontrollida tagant ja kõrvalt tulevat liiklust ning alles siis reastuda.',
      ru: 'Перед манёвром нужно подать сигнал, проверить транспорт сзади и сбоку и только потом перестроиться.',
      en: 'Before manoeuvring, signal, check traffic behind and beside you, then change position.',
    },
    lawReference: 'LS § 48',
    visual: { type: 'svg_turning', svgVariant: 'hand_signals' },
  }),
  q({
    id: 'q_turns_04',
    categoryId: 'turns',
    difficulty: 'easy',
    question: {
      et: 'Kas rattur tohib teha tagasipööret kohas, kus see on keelatud autodele (nt sild, raudteeülesõit)?',
      ru: 'Можно ли велосипедисту разворачиваться там, где разворот запрещён машинам (мост, ж/д переезд)?',
      en: 'May a cyclist make a U-turn where it is forbidden for cars (bridge, railway crossing)?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Ei. Üldised tagasipöörde keeldud kehtivad ka jalgratturile.', ru: 'Нет. Общие запреты разворота действуют и на велосипедиста.', en: 'No. General U-turn prohibitions also apply to cyclists.' } },
      { id: 'opt_2', text: { et: 'Jah, rattur võib pöörata kõikjal.', ru: 'Да, велосипедист может разворачиваться везде.', en: 'Yes, a cyclist may turn anywhere.' } },
      { id: 'opt_3', text: { et: 'Jah, kui ta lükkab ratast käekõrval.', ru: 'Да, если он ведёт велосипед рядом.', en: 'Yes if walking the bike.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Keelumärgid ja üldised manöövrikeelud kehtivad jalgratturile samamoodi nagu teistele juhtidele, kui pole erandit.',
      ru: 'Запрещающие знаки и общие запреты манёвров действуют на велосипедиста так же, как на других водителей.',
      en: 'Prohibitory signs and general manoeuvre bans apply to cyclists like other drivers.',
    },
    lawReference: 'LS § 48',
  }),
  q({
    id: 'q_obst_02',
    categoryId: 'obstacle_avoidance',
    difficulty: 'medium',
    question: {
      et: 'Sõidutee paremas servas on parkiv auto. Kuidas möödud ohutult?',
      ru: 'У правого края стоит припаркованная машина. Как безопасно объехать?',
      en: 'A car is parked at the right edge. How do you pass it safely?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Vaata taha, anna märku, hoia uste avamise varu ja möödu alles siis, kui see on ohutu.', ru: 'Посмотри назад, покажи сигнал, оставь запас на открытие двери и объезжай только когда безопасно.', en: 'Look back, signal, leave a door-opening gap, and pass only when safe.' } },
      { id: 'opt_2', text: { et: 'Sõida tihedalt auto kõrvalt, et mitte takistada tagaolevaid.', ru: 'Проезжай вплотную к машине, чтобы не мешать тем, кто сзади.', en: 'Ride tightly past the car so you do not delay traffic behind.' } },
      { id: 'opt_3', text: { et: 'Helista kella ja sõida ilma vaatamata.', ru: 'Позвони в звонок и едь не глядя.', en: 'Ring the bell and ride without looking.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Pargitud auto uks võib ootamatult avaneda. Vaja on tagasivaadet, märguannet ja piisavat külgvahet.',
      ru: 'Дверь припаркованной машины может внезапно открыться. Нужны взгляд назад, сигнал и боковой интервал.',
      en: 'A parked-car door can open suddenly. Check behind, signal, and keep a side gap.',
    },
    lawReference: 'LS § 33',
    visual: { type: 'svg_intersection', svgVariant: 'car_door_zone' },
  }),
  q({
    id: 'q_obst_03',
    categoryId: 'obstacle_avoidance',
    difficulty: 'easy',
    question: {
      et: 'Teel on auk. Tagant tuleb auto. Mida teed?',
      ru: 'На дороге яма. Сзади едет машина. Что делать?',
      en: 'There is a pothole. A car is coming from behind. What do you do?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Ootan, kuni auto on möödunud, või annan selge märguande ja möödun takistusest alles ohutult.', ru: 'Жду, пока машина проедет, либо чётко сигналю и объезжаю только когда безопасно.', en: 'Wait until the car has passed, or signal clearly and bypass only when safe.' } },
      { id: 'opt_2', text: { et: 'Hüppan järsult vasakule ilma vaatamata.', ru: 'Резко прыгаю влево не глядя.', en: 'Swerve left without looking.' } },
      { id: 'opt_3', text: { et: 'Sõidan august läbi igal juhul.', ru: 'Еду через яму в любом случае.', en: 'Ride through the hole no matter what.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Ümberpõige on manööver: enne tuleb veenduda, et teisi ei ohustata.',
      ru: 'Объезд — это манёвр: сначала убедись, что никого не подвергнешь опасности.',
      en: 'Bypassing is a manoeuvre: first make sure you will not endanger others.',
    },
    lawReference: 'LS § 33',
    visual: { type: 'svg_intersection', svgVariant: 'obstacle_bypass' },
  }),
  q({
    id: 'q_inter_04',
    categoryId: 'intersections',
    difficulty: 'medium',
    question: {
      et: 'Fooris põleb ratturile punane. Kas tohid sõita, kui autosid ei ole?',
      ru: 'Велосипедисту горит красный. Можно ли ехать, если машин нет?',
      en: 'The cyclist signal is red. May you go if no cars are visible?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Ei. Punane foor kehtib jalgratturile samamoodi.', ru: 'Нет. Красный сигнал обязателен и для велосипедиста.', en: 'No. A red light binds cyclists the same way.' } },
      { id: 'opt_2', text: { et: 'Jah, rattur tohib punasega alati sõita.', ru: 'Да, велосипедисту всегда можно на красный.', en: 'Yes, cyclists may always go on red.' } },
      { id: 'opt_3', text: { et: 'Jah, kui helistad kella.', ru: 'Да, если позвонить в звонок.', en: 'Yes if you ring the bell.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Foor signaalid kehtivad kõigile juhtidele. Punasega sõitmine on rikkumine.',
      ru: 'Сигналы светофора обязательны для всех водителей. Езда на красный — нарушение.',
      en: 'Traffic lights apply to all drivers. Going on red is an offence.',
    },
    lawReference: 'LS § 8',
    visual: { type: 'svg_intersection', svgVariant: 'traffic_lights_turn' },
  }),
  q({
    id: 'q_inter_05',
    categoryId: 'intersections',
    difficulty: 'hard',
    question: {
      et: 'Reguleerija ja foor näitavad vastuolulisi signaale. Kumba järgid?',
      ru: 'Регулировщик и светофор показывают разные сигналы. Кого слушаться?',
      en: 'A traffic officer and the lights give conflicting signals. Which do you follow?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Reguleerijat. Tema märguanded on ülimuslikud.', ru: 'Регулировщика. Его сигналы главнее.', en: 'The officer. Their signals take precedence.' } },
      { id: 'opt_2', text: { et: 'Alati foori.', ru: 'Всегда светофор.', en: 'Always the traffic light.' } },
      { id: 'opt_3', text: { et: 'Sõidad kuidas tahad.', ru: 'Едешь как хочешь.', en: 'Ride however you like.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Reguleerija märguanded on ülimuslikud foori ja märkide suhtes.',
      ru: 'Сигналы регулировщика имеют приоритет над светофором и знаками.',
      en: 'A traffic officer’s signals override lights and signs.',
    },
    lawReference: 'LS § 8',
    visual: { type: 'svg_intersection', svgVariant: 'traffic_officer_side' },
  }),
  q({
    id: 'q_cross_03',
    categoryId: 'pedestrian_crossings',
    difficulty: 'medium',
    question: {
      et: 'Kuidas on kõige ohutum ületada sõiduteed ülekäigurajal rattaga, kui liiklus on tihe?',
      ru: 'Как безопаснее пересечь дорогу по зебре на велосипеде при плотном движении?',
      en: 'What is the safest way to cross at a zebra on a bike in heavy traffic?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Tulla rattalt maha ja lükata ratast käekõrval — siis kehtivad jalakäija õigused.', ru: 'Спешиться и вести велосипед рядом — тогда действуют права пешехода.', en: 'Dismount and walk the bike — then pedestrian rights apply.' } },
      { id: 'opt_2', text: { et: 'Sõita täiskiirusel üle, et autod jõuaksid pidurdada.', ru: 'Проскочить на полной скорости, чтобы машины успели затормозить.', en: 'Sprint across so cars have time to brake.' } },
      { id: 'opt_3', text: { et: 'Sõita tagurpidi.', ru: 'Ехать задом.', en: 'Ride backwards.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Rattaga ülekäigurajal sõites ei ole sul jalakäija eesõigust. Käekõrval lükates oled jalakäija.',
      ru: 'Едучи по зебре на велосипеде, ты не имеешь преимущества пешехода. Ведя велосипед — ты пешеход.',
      en: 'Riding across a zebra does not give pedestrian priority. Walking the bike does.',
    },
    lawReference: 'LS § 32',
    visual: { type: 'svg_crossing', svgVariant: 'dismount_pedestrian' },
  }),
  q({
    id: 'q_pedsaf_02',
    categoryId: 'pedestrian_safety',
    difficulty: 'easy',
    question: {
      et: 'Kergliiklustee on ühine jalakäijate ja ratturitega. Kellel on eesõigus kitsas kohas?',
      ru: 'Совмещённая дорожка для пешеходов и велосипедистов. У кого преимущество в узком месте?',
      en: 'On a shared path, who has priority in a narrow spot?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Jalakäija. Rattur peab valima kiiruse, mis ei ohusta jalakäijat.', ru: 'Пешеход. Велосипедист обязан выбрать скорость, не создающую опасность.', en: 'The pedestrian. The cyclist must choose a speed that does not endanger walkers.' } },
      { id: 'opt_2', text: { et: 'Rattur, sest ta on kiirem.', ru: 'Велосипедист, потому что он быстрее.', en: 'The cyclist, because they are faster.' } },
      { id: 'opt_3', text: { et: 'See, kes heliseb valjemini.', ru: 'Тот, кто громче звонит.', en: 'Whoever rings louder.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Ühisel teel ei tohi rattur jalakäijat ohustada ega takistada. Kiirus peab olema olukorrale vastav.',
      ru: 'На совместной дорожке велосипедист не должен подвергать пешехода опасности или мешать ему.',
      en: 'On a shared path a cyclist must not endanger or obstruct pedestrians.',
    },
    lawReference: 'LS § 32',
    visual: { type: 'svg_bike_lane', svgVariant: 'shared_path' },
  }),
  q({
    id: 'q_pedsaf_03',
    categoryId: 'pedestrian_safety',
    difficulty: 'medium',
    question: {
      et: 'Lähened bussipeatusele, kus inimesed väljuvad. Mida teed?',
      ru: 'Подъезжаешь к остановке, где выходят люди. Что делать?',
      en: 'You approach a bus stop where people are getting off. What do you do?',
    },
    options: [
      { id: 'opt_1', text: { et: 'Vähendan kiirust, olen valmis peatuma ja annan teed väljuvatele inimestele.', ru: 'Снижаю скорость, готов остановиться и уступаю выходящим.', en: 'Slow down, be ready to stop, and give way to people leaving the vehicle.' } },
      { id: 'opt_2', text: { et: 'Sõidan nende vahelt täiskiirusel.', ru: 'Проезжаю между ними на полной скорости.', en: 'Ride through them at full speed.' } },
      { id: 'opt_3', text: { et: 'Helistan kella, et nad annaksid mulle teed.', ru: 'Звоню, чтобы они уступили мне.', en: 'Ring so they give way to me.' } },
    ],
    correctAnswerId: 'opt_1',
    explanation: {
      et: 'Peatuse juures on jalakäijad eriti haavatavad. Rattur peab olema valmis peatuma.',
      ru: 'У остановки пешеходы особенно уязвимы. Велосипедист должен быть готов остановиться.',
      en: 'Pedestrians at stops are especially vulnerable. Be ready to stop.',
    },
    lawReference: 'LS § 32',
    visual: { type: 'svg_intersection', svgVariant: 'bus_stop' },
  }),
];
