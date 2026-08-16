import { CategoryId, Question } from '@/types';
import { questions } from '@/data/questions';
import { getStoredStats } from '@/lib/storage';
import {
  examFingerprint,
  getFlaggedIds,
  getVisitorId,
  getVisitorMemory,
  markQuestionsSeen,
  rememberExamFingerprint,
} from '@/lib/visitor';

export type QuizMode = 'exam' | 'practice' | 'mistakes' | 'marathon' | 'quick' | 'weak' | 'daily' | 'flagged';

function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function rng() {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createRng(salt: string) {
  return mulberry32(hashString(`${getVisitorId()}::${salt}::${Date.now()}::${Math.random()}`));
}

export function createStableRng(salt: string) {
  return mulberry32(hashString(`${getVisitorId()}::${salt}`));
}

export function shuffleInPlace<T>(arr: T[], rng: () => number): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function withShuffledOptions(q: Question, rng: () => number): Question {
  return {
    ...q,
    options: shuffleInPlace([...q.options], rng),
  };
}

function preferUnseen(pool: Question[], seen: Set<string>, rng: () => number): Question[] {
  const fresh = pool.filter((q) => !seen.has(q.id));
  const used = pool.filter((q) => seen.has(q.id));
  return [...shuffleInPlace(fresh, rng), ...shuffleInPlace(used, rng)];
}

function pickBalanced(count: number, pool: Question[], rng: () => number, seen: Set<string>): Question[] {
  const byCat = new Map<CategoryId, Question[]>();
  for (const q of preferUnseen(pool, seen, rng)) {
    const list = byCat.get(q.categoryId) || [];
    list.push(q);
    byCat.set(q.categoryId, list);
  }

  const cats = shuffleInPlace([...byCat.keys()], rng);
  const picked: Question[] = [];
  const used = new Set<string>();

  for (const cat of cats) {
    if (picked.length >= count) break;
    const next = (byCat.get(cat) || []).find((q) => !used.has(q.id));
    if (next) {
      picked.push(next);
      used.add(next.id);
    }
  }

  const rest = preferUnseen(pool.filter((q) => !used.has(q.id)), seen, rng);
  while (picked.length < count && rest.length) {
    const q = rest.shift()!;
    picked.push(q);
    used.add(q.id);
  }

  return shuffleInPlace(picked, rng);
}

export function buildQuiz(mode: QuizMode, categoryId?: CategoryId | null): Question[] {
  const mem = getVisitorMemory();
  const seen = new Set(mem.seenQuestionIds);
  const sessionSalt = `${mode}:${categoryId || 'all'}:${mem.sessionCount}:${performance.now?.() ?? Date.now()}`;
  const rng = mode === 'daily' ? createStableRng(`daily:${new Date().toISOString().slice(0, 10)}`) : createRng(sessionSalt);

  let list: Question[] = [];

  if (mode === 'exam') {
    list = pickUniqueExam(15, rng, seen, mem.examFingerprints);
  } else if (mode === 'quick') {
    list = pickBalanced(7, questions, rng, seen);
  } else if (mode === 'daily') {
    // Same visitor + same calendar day = same 10 questions; other people get a different set.
    list = pickBalanced(10, questions, rng, new Set());
  } else if (mode === 'weak') {
    const stats = getStoredStats();
    const ranked = (Object.entries(stats.categoryStats) as [CategoryId, { answered: number; correct: number }][])
      .map(([id, s]) => ({
        id,
        rate: s.answered === 0 ? 0 : s.correct / s.answered,
        answered: s.answered,
      }))
      .sort((a, b) => a.rate - b.rate || a.answered - b.answered)
      .slice(0, 5)
      .map((x) => x.id);
    const weakPool = questions.filter((q) => ranked.includes(q.categoryId));
    list = pickBalanced(12, weakPool.length ? weakPool : questions, rng, seen);
  } else if (mode === 'practice' && categoryId) {
    list = preferUnseen(questions.filter((q) => q.categoryId === categoryId), seen, rng);
  } else if (mode === 'mistakes') {
    const stats = getStoredStats();
    list = shuffleInPlace(
      stats.mistakeQuestionIds.map((id) => questions.find((q) => q.id === id)!).filter(Boolean),
      rng
    );
  } else if (mode === 'marathon') {
    list = preferUnseen([...questions], seen, rng);
  } else if (mode === 'flagged') {
    list = shuffleInPlace(
      getFlaggedIds().map((id) => questions.find((q) => q.id === id)!).filter(Boolean),
      rng
    );
  } else {
    list = pickBalanced(15, questions, rng, seen);
  }

  const prepared = list.map((q) => withShuffledOptions(q, rng));
  if (prepared.length) {
    markQuestionsSeen(prepared.map((q) => q.id));
    if (mode === 'exam' || mode === 'quick' || mode === 'daily') {
      rememberExamFingerprint(examFingerprint(prepared.map((q) => q.id)));
    }
  }
  return prepared;
}

function pickUniqueExam(count: number, rng: () => number, seen: Set<string>, fingerprints: string[]): Question[] {
  for (let attempt = 0; attempt < 12; attempt++) {
    const candidate = pickBalanced(count, questions, rng, seen);
    const fp = examFingerprint(candidate.map((q) => q.id));
    if (!fingerprints.includes(fp) || attempt === 11) {
      return candidate;
    }
  }
  return pickBalanced(count, questions, rng, seen);
}

export function unseenCount(): number {
  const seen = new Set(getVisitorMemory().seenQuestionIds);
  return questions.filter((q) => !seen.has(q.id)).length;
}

export function questionBankSize(): number {
  return questions.length;
}

export function quizDurationSeconds(mode: QuizMode): number {
  if (mode === 'exam') return 30 * 60;
  if (mode === 'daily') return 15 * 60;
  if (mode === 'quick') return 7 * 60;
  return 0;
}

export function quizPassed(mode: QuizMode, correct: number, total: number): boolean {
  if (total === 0) return false;
  if (mode === 'exam') return correct >= 13;
  if (mode === 'quick') return correct >= 6;
  if (mode === 'daily') return correct >= 8;
  if (mode === 'weak') return correct >= 10;
  return correct >= Math.ceil(total * 0.85);
}

export function isLearningMode(mode: QuizMode): boolean {
  return mode === 'practice' || mode === 'mistakes' || mode === 'weak' || mode === 'flagged';
}
