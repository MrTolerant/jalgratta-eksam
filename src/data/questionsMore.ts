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

export const moreQuestions: Question[] = [];
