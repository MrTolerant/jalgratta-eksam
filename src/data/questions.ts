import { Question } from '@/types';
import { moreQuestions } from '@/data/questionsMore';
import { extraBankQuestions } from '@/data/questionsBank3';

const baseQuestions: Question[] = [
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
]