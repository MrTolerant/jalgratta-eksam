import { CategoryId, Question, VisualData } from '@/types';

type Triple = [string, string, string];

function L(t: Triple): { et: string; ru: string; en: string } {
  return { et: t[0], ru: t[1], en: t[2] };
}

function mq(
  id: string,
  categoryId: CategoryId,
  difficulty: Question['difficulty'],
  question: Triple,
  options: Triple[],
  correctIndex: number,
  explanation: Triple,
  lawReference?: string,
  visual?: VisualData
): Question {
  return {
    id,
    categoryId,
    difficulty,
    question: L(question),
    options: options.map((text, i) => ({ id: `opt_${i + 1}`, text: L(text) })),
    correctAnswerId: `opt_${correctIndex + 1}`,
    explanation: L(explanation),
    lawReference,
    visual,
  };
}

export const bank06: Question[] = [
mq('q3_bn_04', 'prohibitions', 'medium',
    ['Kas tohid lasta end vedada teise ratturi järel köiega?', 'Можно ли дать себя буксировать за другим велосипедистом на верёвке?', 'May you be towed behind another cyclist on a rope?'],
    [
      ['Ei. Köis / haakimine on ettearvamatu ja keelatud käitumine.', 'Нет. Верёвка / сцепка непредсказуема и запрещена.', 'No. A rope / hitch is unpredictable and forbidden behaviour.'],
      ['Jah, kui köis on alla 2 m.', 'Да, если верёвка короче 2 м.', 'Yes if the rope is under 2 m.'],
      ['Jah õuealal.', 'Да в жилой зоне.', 'Yes in a living zone.'],
    ], 0,
    ['Vedamine köiega võtab mõlemalt juhtimise. Pidurdus = kukkumine.', 'Буксир верёвкой отбирает управление у обоих. Торможение = падение.', 'A tow rope steals control from both. Braking equals a crash.'],
    'LS § 33'),
mq('q3_rt_01', 'roundabouts_transit', 'easy',
    ['Kuidas näitad, et väljud ringristmikult?', 'Как показать, что съезжаешь с кольца?', 'How do you show you are leaving a roundabout?'],
    [
      ['Annad parempöörde märguande enne väljasõitu.', 'Подаёшь сигнал правого поворота перед съездом.', 'Give a right-turn signal before the exit.'],
      ['Sõidad välja vaikselt, märku pole vaja.', 'Съезжаешь молча, сигнал не нужен.', 'Exit silently, no signal needed.'],
      ['Tõstad mõlemad käed.', 'Поднимаешь обе руки.', 'Raise both hands.'],
    ], 0,
    ['Väljasõit on pööre. Taga- ja kõrvalolijad peavad teadma.', 'Съезд — поворот. Сзади и сбоку должны знать.', 'An exit is a turn. Others beside and behind must know.'],
    'LS § 47'),
mq('q3_rt_02', 'roundabouts_transit', 'medium',
    ['Ringil on rattarada ääres. Auto tahab väljuda üle raja. Mida eeldad?', 'На круге по краю велополоса. Машина хочет съехать через полосу. Чего ждать?', 'A cycle lane runs around the roundabout edge. A car wants to exit across it. What do you expect?'],
    [
      ['Auto võib raja ületada väljumisel — ära jää ukse kõrvale pimealasse.', 'Машина может пересечь полосу на съезде — не стой у двери в мёртвой зоне.', 'The car may cross the lane when exiting — do not sit in the door blind spot.'],
      ['Rattarada ringil on alati „peatee“ auto suhtes.', 'Велополоса на круге всегда «главная» относительно машины.', 'The cycle lane in a roundabout is always priority over the car.'],
      ['Sõida vastu ringi, et auto sind näeks.', 'Едь против круга, чтобы машина тебя видела.', 'Ride against the circle so the car sees you.'],
    ], 0,
    ['Väljuv auto lõikab ääre. Silmside ja varu.', 'Съезжающая машина режет край. Зрительный контакт и запас.', 'An exiting car cuts across the edge. Eye contact and a gap.'],
    'LS § 17'),
mq('q3_rt_03', 'roundabouts_transit', 'hard',
    ['Tramm tuleb tagant, uksed avanevad sinu kõrval. Mida teed?', 'Трамвай сзади, двери открываются рядом с тобой. Что делаешь?', 'A tram comes from behind and its doors open beside you. What do you do?'],
    [
      ['Peatud ja jätad ukseala vabaks — reisijad astuvad välja.', 'Останавливаешься и оставляешь зону дверей свободной — пассажиры выходят.', 'Stop and keep the door zone clear — passengers step out.'],
      ['Sõidad uste vahelt, et „jõuda ette“.', 'Едешь между дверями, чтобы «успеть».', 'Ride between the doors to get ahead.'],
      ['Helistad, reisijad ootavad.', 'Звонишь — пассажиры ждут.', 'Ring, passengers wait.'],
    ], 0,
    ['Trammiuks on nagu bussiuks: inimesed astuvad pimedast välja.', 'Дверь трамвая как дверь автобуса: люди выходят из слепой зоны.', 'A tram door is like a bus door: people step out of a blind area.'],
    'LS § 32'),
mq('q3_rt_04', 'roundabouts_transit', 'medium',
    ['Buss näitab, et sõidab peatusest välja linnaliikluses. Kuidas käitud?', 'Автобус показывает выезд с остановки в городском потоке. Как себя вести?', 'A city bus signals leaving a stop. How do you behave?'],
    [
      ['Ära takista väljasõitu; hoia varu, bussi pimeala on suur.', 'Не мешай выезду; держи запас, мёртвая зона автобуса огромна.', 'Do not block the pull-out; keep a gap, the bus blind spot is huge.'],
      ['Surud end bussi ja äärekivi vahele.', 'Втискиваешься между автобусом и бордюром.', 'Squeeze between the bus and the kerb.'],
      ['Möödud paremalt ukse kõrvalt.', 'Обгоняешь справа у дверей.', 'Overtake on the right by the doors.'],
    ], 0,
    ['Bussi ümber on „surmatsoon“. Mööda vasakult ainult kui oled kindel ja nähtav.', 'Вокруг автобуса «зона смерти». Слева обгоняй только если уверен и видим.', 'Around a bus is a kill zone. Overtake left only if sure and seen.'],
    'LS § 17'),
];
