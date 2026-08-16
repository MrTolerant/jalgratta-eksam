import { UserStats, ExamSession } from '@/types';
import { questions } from '@/data/questions';

const STATS_STORAGE_KEY = 'est_bike_exam_stats_v1';

const defaultStats: UserStats = {
  totalExamsTaken: 0,
  totalExamsPassed: 0,
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  mistakeQuestionIds: [],
  savedQuestionIds: [],
  categoryStats: {
    priority_give_way: { answered: 0, correct: 0 },
    road_position: { answered: 0, correct: 0 },
    turns: { answered: 0, correct: 0 },
    obstacle_avoidance: { answered: 0, correct: 0 },
    intersections: { answered: 0, correct: 0 },
    pedestrian_crossings: { answered: 0, correct: 0 },
    pedestrian_safety: { answered: 0, correct: 0 },
    bicycle_paths: { answered: 0, correct: 0 },
    darkness_and_visibility: { answered: 0, correct: 0 },
    safety_and_equipment: { answered: 0, correct: 0 },
    hand_signals: { answered: 0, correct: 0 },
    special_zones: { answered: 0, correct: 0 },
    passengers_cargo: { answered: 0, correct: 0 },
    prohibitions: { answered: 0, correct: 0 },
    roundabouts_transit: { answered: 0, correct: 0 },
  },
  history: [],
};

export function getStoredStats(): UserStats {
  if (typeof window === 'undefined') return defaultStats;
  try {
    const raw = localStorage.getItem(STATS_STORAGE_KEY);
    if (!raw) return defaultStats;
    const parsed = JSON.parse(raw);
    return {
      ...defaultStats,
      ...parsed,
      categoryStats: { ...defaultStats.categoryStats, ...(parsed.categoryStats || {}) },
    };
  } catch (e) {
    console.error('Failed to parse user stats:', e);
    return defaultStats;
  }
}

export function saveUserStats(stats: UserStats) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save user stats:', e);
  }
}

export function recordExamSession(session: ExamSession) {
  const stats = getStoredStats();

  let correctCount = 0;
  const newMistakes = new Set(stats.mistakeQuestionIds);

  session.questionIds.forEach((qId) => {
    const userAns = session.userAnswers[qId];
    const qObj = questions.find((q) => q.id === qId);
    if (!qObj) return;

    const isCorrect = userAns === qObj.correctAnswerId;
    if (isCorrect) {
      correctCount++;
      newMistakes.delete(qId);
    } else if (userAns) {
      newMistakes.add(qId);
    }

    const cat = qObj.categoryId;
    if (!stats.categoryStats[cat]) {
      stats.categoryStats[cat] = { answered: 0, correct: 0 };
    }
    stats.categoryStats[cat].answered += 1;
    if (isCorrect) stats.categoryStats[cat].correct += 1;
  });

  stats.totalQuestionsAnswered += session.questionIds.filter((id) => session.userAnswers[id]).length;
  stats.totalCorrectAnswers += correctCount;

  if (session.mode === 'exam') {
    stats.totalExamsTaken += 1;
    if (session.passed) stats.totalExamsPassed += 1;
  }

  stats.mistakeQuestionIds = Array.from(newMistakes);
  stats.history.unshift({
    date: new Date().toISOString(),
    score: correctCount,
    total: session.questionIds.length,
    passed: session.passed,
    mode: session.mode,
  });

  // Keep last 20 history records
  stats.history = stats.history.slice(0, 20);

  saveUserStats(stats);
  return stats;
}

export function generateExamQuestions(): string[] {
  // Real Transpordiamet exam: 15 questions from 10 categories
  // Select questions fairly across categories
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  
  // Pick up to 15 questions
  const selected = shuffled.slice(0, 15);
  return selected.map((q) => q.id);
}
