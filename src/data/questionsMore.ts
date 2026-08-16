import { Question } from '@/types';
import { more01 } from '@/data/banks/more01';
import { more02 } from '@/data/banks/more02';
import { more03 } from '@/data/banks/more03';
import { more04 } from '@/data/banks/more04';
import { more05 } from '@/data/banks/more05';
import { more06 } from '@/data/banks/more06';

export const moreQuestions: Question[] = [
  ...more01,
  ...more02,
  ...more03,
  ...more04,
  ...more05,
  ...more06,
];
