import { Language } from '@/types';

export const translations = {
  appName: {
    et: 'Jalgratturi Teooriaeksam',
    ru: 'Теория на права велосипедиста',
    en: 'Bicycle Theory Exam',
  },
  appTagline: {
    et: 'Ettevalmistus Eesti jalgratturi teooriaeksamiks ja liiklustestid',
    ru: 'Подготовка к теоретическому экзамену на права велосипедиста в Эстонии (Transpordiamet)',
    en: 'Preparation for the Estonian bicycle theory exam (Transpordiamet)',
  },
  examMode: {
    et: 'Eksamirežiim',
    ru: 'Режим экзамена',
    en: 'Exam Mode',
  },
  examDesc: {
    et: '15 küsimust, 30 minutit. Sooritatud, kui vähemalt 13 on õiged (kuni 2 viga).',
    ru: '15 вопросов, 30 минут. Сдан, если не меньше 13 правильных (не больше 2 ошибок).',
    en: '15 questions, 30 minutes. Pass with at least 13 correct (max 2 mistakes).',
  },
  practiceMode: {
    et: 'Teemade järgi',
    ru: 'Тренировка по темам',
    en: 'Practice by Topic',
  },
  practiceDesc: {
    et: 'Harjuta küsimusi 10 ametliku teemavaldkonna järgi kohese selgitusega.',
    ru: 'Тренируйся по 10 официальным темам — ответ разбирается сразу.',
    en: 'Practice by 10 official syllabus topics with instant explanations.',
  },
  mistakesMode: {
    et: 'Vigade parandus',
    ru: 'Работа над ошибками',
    en: 'Mistakes Review',
  },
  mistakesDesc: {
    et: 'Korda küsimusi, kus oled varem eksinud.',
    ru: 'Повтори вопросы, в которых раньше ошибался.',
    en: 'Review questions you answered incorrectly in past sessions.',
  },
  marathonMode: {
    et: 'Maraton',
    ru: 'Марафон',
    en: 'Marathon',
  },
  marathonDesc: {
    et: 'Kõik veel nägemata küsimused. Juba õpitu jäetakse vahele.',
    ru: 'Все вопросы, которые ты ещё не видел. Уже пройденные пропускаются.',
    en: 'All still-unseen questions. Already learned ones are skipped.',
  },
  signsGuide: {
    et: 'Liiklusmärgid',
    ru: 'Справочник знаков',
    en: 'Traffic Signs',
  },
  signsDesc: {
    et: 'Jalgratturile olulised liiklusmärgid ja selgitused.',
    ru: 'Дорожные знаки и правила движения, важные для велосипедистов.',
    en: 'Essential road signs and explanations for cyclists.',
  },
  rulesSummary: {
    et: 'Meelespea ja reeglid',
    ru: 'Памятка велосипедиста',
    en: 'Cyclist Cheat Sheet',
  },
  statsTitle: {
    et: 'Sinu statistika',
    ru: 'Твоя статистика',
    en: 'Your Statistics',
  },
  startExam: {
    et: 'Alusta eksamit',
    ru: 'Начать экзамен',
    en: 'Start Exam',
  },
  question: {
    et: 'Küsimus',
    ru: 'Вопрос',
    en: 'Question',
  },
  of: {
    et: '/',
    ru: 'из',
    en: 'of',
  },
  timeLeft: {
    et: 'Aega jäänud',
    ru: 'Осталось времени',
    en: 'Time left',
  },
  finishExam: {
    et: 'Lõpeta test',
    ru: 'Завершить тест',
    en: 'Finish Test',
  },
  nextQuestion: {
    et: 'Järgmine küsimus',
    ru: 'Следующий вопрос',
    en: 'Next Question',
  },
  prevQuestion: {
    et: 'Eelmine küsimus',
    ru: 'Предыдущий вопрос',
    en: 'Previous Question',
  },
  confirmAnswer: {
    et: 'Vasta',
    ru: 'Ответить',
    en: 'Confirm Answer',
  },
  correct: {
    et: 'Õige vastus!',
    ru: 'Правильно!',
    en: 'Correct!',
  },
  incorrect: {
    et: 'Vale vastus!',
    ru: 'Неправильно!',
    en: 'Incorrect!',
  },
  explanation: {
    et: 'Selgitus',
    ru: 'Объяснение',
    en: 'Explanation',
  },
  examPassedTitle: {
    et: 'Palju õnne! Eksam on SOORITATUD!',
    ru: 'Поздравляем! Экзамен СДАН!',
    en: 'Congratulations! Exam PASSED!',
  },
  examFailedTitle: {
    et: 'Kahjuks eksam EI OLE SOORITATUD',
    ru: 'К сожалению, экзамен НЕ СДАН',
    en: 'Exam NOT PASSED',
  },
  examResultScore: {
    et: 'Sinu tulemus',
    ru: 'Твой результат',
    en: 'Your score',
  },
  correctAnswers: {
    et: 'Õigeid vastuseid',
    ru: 'Правильных ответов',
    en: 'Correct answers',
  },
  mistakesCount: {
    et: 'Vigu',
    ru: 'Ошибок',
    en: 'Mistakes',
  },
  restart: {
    et: 'Proovi uuesti',
    ru: 'Пройти снова',
    en: 'Try again',
  },
  backToHome: {
    et: 'Tagasi avalehele',
    ru: 'На главную',
    en: 'Back to Home',
  },
  reviewMistakes: {
    et: 'Vaata vigu',
    ru: 'Разбор ошибок',
    en: 'Review Mistakes',
  },
  selectCategory: {
    et: 'Vali teema',
    ru: 'Выбери тему',
    en: 'Select Topic',
  },
  noMistakesYet: {
    et: 'Sul pole veel salvestatud vigu! Suurepärane töö.',
    ru: 'У тебя пока нет ошибок. Отличная работа!',
    en: 'No recorded mistakes yet! Great job.',
  },
  allTopics: {
    et: 'Kõik teemad',
    ru: 'Все темы',
    en: 'All Topics',
  },
  filterByTheme: {
    et: 'Filtreeri teema järgi',
    ru: 'Фильтр по теме',
    en: 'Filter by topic',
  },
  dailyMode: {
    et: 'Päeva väljakutse',
    ru: 'Вызов дня',
    en: 'Daily challenge',
  },
  dailyDesc: {
    et: '10 uut küsimust, mida see laps veel ei näinud. Järgmisel korral tuleb uus valik.',
    ru: '10 новых вопросов, которые этот ребёнок ещё не видел. В следующий раз — другой набор.',
    en: '10 new questions this child has not seen yet. The next visit is a different set.',
  },
  quickMode: {
    et: 'Kiirblits',
    ru: 'Блиц',
    en: 'Quick blitz',
  },
  quickDesc: {
    et: '7 juhuslikku küsimust 7 minutiga. Iga kord uus valik, mida sa veel ei näinud.',
    ru: '7 случайных вопросов за 7 минут. Каждый раз — новый набор из тех, что ты ещё не видел.',
    en: '7 random questions in 7 minutes. A fresh unseen mix every time.',
  },
  weakMode: {
    et: 'Nõrgad teemad',
    ru: 'Слабые темы',
    en: 'Weak topics',
  },
  weakDesc: {
    et: '12 küsimust teemadest, kus su täpsus on kõige madalam.',
    ru: '12 вопросов из тем с самой низкой точностью.',
    en: '12 questions from the topics where your accuracy is lowest.',
  },
  uniqueSet: {
    et: 'Sinu unikaalne komplekt',
    ru: 'Твой уникальный набор',
    en: 'Your unique set',
  },
  unseenLeft: {
    et: 'Uusi küsimusi jäänud',
    ru: 'Новых вопросов осталось',
    en: 'Unseen questions left',
  },
  streakDays: {
    et: 'Päevade seeria',
    ru: 'Серия дней',
    en: 'Day streak',
  },
  keyboardHint: {
    et: 'Klaviatuur: 1–3 valik, ← → küsimus, F märgi, H vihje',
    ru: 'Клавиатура: 1–3 — ответ, ← → — вопрос, F — метка, H — подсказка',
    en: 'Keyboard: 1–3 answer, ← → question, F flag, H hint',
  },
  flagQuestion: {
    et: 'Märgi kordamiseks',
    ru: 'Отметить для повтора',
    en: 'Flag for review',
  },
  showHint: {
    et: 'Näita vihjet',
    ru: 'Показать подсказку',
    en: 'Show hint',
  },
  trainSessionMistakes: {
    et: 'Treeni ainult need vead',
    ru: 'Тренируй только эти ошибки',
    en: 'Train only these mistakes',
  },
  visitorRemembered: {
    et: 'Külastaja meeles (küpsis)',
    ru: 'Посетитель запомнен (cookie)',
    en: 'Visitor remembered (cookie)',
  },
  extraTopics: {
    et: 'Lisateemad',
    ru: 'Дополнительные темы',
    en: 'Extra topics',
  },
  flaggedMode: {
    et: 'Märgitud küsimused',
    ru: 'Отмеченные вопросы',
    en: 'Flagged questions',
  },
  gamesTitle: {
    et: 'Mängud',
    ru: 'Игры',
    en: 'Игры',
  },
  gamesDesc: {
    et: 'Lühikesed mängud märkide, eesõiguse ja varustuse kinnistamiseks.',
    ru: 'Короткие игры, чтобы закрепить знаки, приоритет и снаряжение.',
    en: 'Short games to lock in signs, priority and equipment.',
  },
  gamePriority: {
    et: 'Kes sõidab esimesena?',
    ru: 'Кто едет первым?',
    en: 'Who goes first?',
  },
  gamePriorityDesc: {
    et: 'Toksa liiklejad õiges järjekorras.',
    ru: 'Нажимай участников в правильном порядке.',
    en: 'Tap road users in the correct order.',
  },
  gameSigns: {
    et: 'Tuvasta märk',
    ru: 'Угадай знак',
    en: 'Guess the sign',
  },
  gameSignsDesc: {
    et: 'Tuvasta liiklusmärk enne, kui aeg otsa saab.',
    ru: 'Узнай дорожный знак, пока не вышло время.',
    en: 'Identify the traffic sign before time runs out.',
  },
  gameEquipment: {
    et: 'Varustus',
    ru: 'Снаряжение',
    en: 'Equipment',
  },
  gameEquipmentDesc: {
    et: 'Leia, mis rattal puudu on või mis on vale.',
    ru: 'Найди, чего не хватает на велосипеде или что неверно.',
    en: 'Find what is missing or wrong on the bike.',
  },
  gameSprint: {
    et: 'Tõde või vale',
    ru: 'Правда или нет',
    en: 'True or false',
  },
  gameSprintDesc: {
    et: 'Kiired jah/ei väited liiklusreeglite kohta.',
    ru: 'Быстрые утверждения «да / нет» по правилам.',
    en: 'Quick yes/no statements about the rules.',
  },
  footerCopy: {
    et: '© 2026 JalgrattaEksam.ee — ettevalmistuskeskkond jalgratturi juhiloaks Eestis',
    ru: '© 2026 JalgrattaEksam.ee — платформа подготовки к правам велосипедиста в Эстонии',
    en: '© 2026 JalgrattaEksam.ee — training platform for the Estonian cyclist licence',
  },
  footerLaw: {
    et: 'Põhineb Transpordiameti ja Liiklusseaduse nõuetel',
    ru: 'Основано на требованиях Transpordiamet и Закона о дорожном движении',
    en: 'Based on Transpordiamet and Traffic Act requirements',
  },
};

export function getTranslation(key: keyof typeof translations, lang: Language): string {
  return translations[key]?.[lang] || translations[key]?.['et'] || '';
}
