import { Question } from '@/types';
import { moreQuestions } from '@/data/questionsMore';
import { extraBankQuestions } from '@/data/questionsBank3';
import { base01 } from '@/data/banks/base01';
import { base02 } from '@/data/banks/base02';
import { base03 } from '@/data/banks/base03';
import { base04 } from '@/data/banks/base04';

const baseQuestions: Question[] = [...base01, ...base02, ...base03, ...base04];

export const questions: Question[] = [...baseQuestions, ...moreQuestions, ...extraBankQuestions];

if (process.env.NODE_ENV !== 'production') {
  const ids = new Set<string>();
  const texts = new Set<string>();
  for (const q of questions) {
    if (ids.has(q.id)) {
      console.error(`Duplicate question id: ${q.id}`);
    }
    ids.add(q.id);
    if (texts.has(q.question.et)) {
      console.error(`Duplicate Estonian question text: ${q.id}`);
    }
    texts.add(q.question.et);
  }
}
