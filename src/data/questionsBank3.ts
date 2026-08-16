import { Question } from '@/types';
import { bank01 } from '@/data/banks/bank01';
import { bank02 } from '@/data/banks/bank02';
import { bank03 } from '@/data/banks/bank03';
import { bank04 } from '@/data/banks/bank04';
import { bank05 } from '@/data/banks/bank05';
import { bank06 } from '@/data/banks/bank06';

export const extraBankQuestions: Question[] = [
  ...bank01,
  ...bank02,
  ...bank03,
  ...bank04,
  ...bank05,
  ...bank06,
];
