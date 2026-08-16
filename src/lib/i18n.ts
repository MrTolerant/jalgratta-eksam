import { Language } from '@/types';

export const translations = {
  appName: {
    et: 'Jalgratturi Teooriaeksam',
    ru: 'Теория на велосипедные права',
    en: 'Bicycle Theory Exam',
  },
  appTagline: {
    et: 'Ettevalmistus Eesti jalgratturi teooriaeksamiks ja liiklustestid',
    ru: 'Подготовка к теоретическому экзамену на права велосипедиста в Эстонии (Transpordiamet)',
    en: 'Preparation for the Estonian bicycle theory exam (Transpordiamet)',
  },
  examMode: {
    et: 'Eksamirežiim',
    ru: 'Режим Экзамена',
    en: 'Exam Mode',
  },
  examDesc: {
    et: '15 küsimust, 30 minutit. Sooritatud, kui vähemalt 13 õiget (max 2 viga).',
    ru: '15 вопросов, 30 минут. Сдан при минимум 13 правильных (макс. 2 ошибки).',
    en: '15 questions, 30 minutes. Pass with at least 13 correct (max 2 mistakes).',
  },
  practiceMode: {
    et: 'Teemade järgi',
    ru: 'Тренировка по темам',
    en: 'Practice by Topic',
  },
  practiceDesc: {
    et: 'Harjuta küsimusi 10 ametliku teemavaldkonna järgi kohese selgitusega.',
    ru: 'Тренируйтесь по 10 официальным темам с мгновенным разбором ответов.',
    en: 'Practice by 10 official syllabus topics with instant explanations.',
  },
  mistakesMode: {
    et: 'Vigade parandus',
    ru: 'Работа над ошибками',
    en: 'Mistakes Review',
  },
  mistakesDesc: {
    et: 'Korda küsimusi, kus oled varem eksinud.',
    ru: 'Повторите вопросы, в которых ранее были допущены ошибки.',
    en: 'Review questions you answered incorrectly in past sessions.',
  },
  marathonMode: {
    et: 'Maraton',
    ru: 'Марафон',
    en: 'Marathon',
  },
  marathonDesc: {
    et: 'Kõik veel nägemata küsimused. Juba õpitu jäetakse vahele.',
    ru: 'Все ещё не виденные вопросы. Уже пройденные пропускаются.',
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
    ru: 'Ваша статистика',
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
    et: 'st',
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
    ru: 'Ваш результат',
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
    ru: 'Выберите тему',
    en: 'Select Topic',
  },
  noMistakesYet: {
    et: 'Sul pole veel salvestatud vigu! Suurepärane töö.',
    ru: 'У вас пока нет ошибок! Отличная работа.',
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
    et: 'Kiirblitz',
    ru: 'Блиц',
    en: 'Quick blitz',
  },
  quickDesc: {
    et: '7 juhuslikku küsimust 7 minutiga. Iga kord uus valik, mida sa veel ei näinud.',
    ru: '7 случайных вопросов за 7 минут. Каждый раз новый набор из ещё не виденных.',
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
    ru: 'Клавиатура: 1–3 ответ, ← → вопрос, F метка, H подсказка',
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
    ru: 'Тренировать только эти ошибки',
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
};

export function getTranslation(key: keyof typeof translations, lang: Language): string {
  return translations[key]?.[lang] || translations[key]?.['et'] || '';
}
