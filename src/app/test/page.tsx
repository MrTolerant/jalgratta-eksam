'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { categories } from '@/data/categories';
import { Question, ExamSession, CategoryId } from '@/types';
import { recordExamSession } from '@/lib/storage';
import { VisualIllustration } from '@/components/VisualIllustration';
import {
  QuizMode,
  buildQuiz,
  isLearningMode,
  quizDurationSeconds,
  quizPassed,
  unseenCount,
} from '@/lib/quizEngine';
import { getFlaggedIds, markQuestionsSeen, toggleFlaggedQuestion } from '@/lib/visitor';
import confetti from 'canvas-confetti';
import {
  Timer,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Home,
  HelpCircle,
  AlertTriangle,
  Award,
  BookOpen,
  Flag,
  Keyboard,
} from 'lucide-react';

const QUIZ_MODES: QuizMode[] = ['exam', 'practice', 'mistakes', 'marathon', 'quick', 'weak', 'daily', 'flagged'];

function parseMode(raw: string | null): QuizMode {
  if (raw && QUIZ_MODES.includes(raw as QuizMode)) return raw as QuizMode;
  return 'exam';
}

function TestContent() {
  const searchParams = useSearchParams();
  const { lang } = useLanguage();

  const mode = parseMode(searchParams.get('mode'));
  const categoryParam = searchParams.get('category') as CategoryId | null;
  const learning = isLearningMode(mode);
  const duration = quizDurationSeconds(mode);

  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration || 30 * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [flagged, setFlagged] = useState<string[]>([]);
  const [freshLeft, setFreshLeft] = useState(0);

  const startQuiz = useCallback((override?: Question[]) => {
    const qList = override ?? buildQuiz(mode, categoryParam);
    setSessionQuestions(qList);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setShowHint(false);
    setIsFinished(false);
    setTimeLeft(duration || 30 * 60);
    setTimerActive(duration > 0);
    setFlagged(getFlaggedIds());
    setFreshLeft(unseenCount());
    setIsLoading(false);
  }, [mode, categoryParam, duration]);

  const handleFinish = useCallback(() => {
    setIsFinished(true);
    setTimerActive(false);

    let correctCount = 0;
    sessionQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswerId) {
        correctCount++;
      }
    });

    const isPassed = quizPassed(mode, correctCount, sessionQuestions.length);

    if (isPassed && mode === 'exam') {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    }

    const session: ExamSession = {
      id: String(Date.now()),
      startTime: Date.now() - ((duration || 30 * 60) - timeLeft) * 1000,
      endTime: Date.now(),
      timeSpentSeconds: (duration || 30 * 60) - timeLeft,
      questionIds: sessionQuestions.map((q) => q.id),
      userAnswers: selectedAnswers,
      isCompleted: true,
      score: correctCount,
      passed: isPassed,
      mode,
      categoryId: categoryParam || undefined,
    };

    recordExamSession(session);
  }, [sessionQuestions, selectedAnswers, mode, timeLeft, categoryParam, duration]);

  useEffect(() => {
    const timer = setTimeout(() => startQuiz(), 0);
    return () => clearTimeout(timer);
  }, [startQuiz]);

  // Timer countdown
  useEffect(() => {
    if (!timerActive || isFinished) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerActive, isFinished, handleFinish]);

  const currentQ = sessionQuestions[currentIndex];

  useEffect(() => {
    if (!currentQ || isFinished || isLoading) return;
    markQuestionsSeen([currentQ.id]);
  }, [currentQ, isFinished, isLoading]);

  const handleSelectOption = useCallback((optId: string) => {
    if (isFinished) return;
    const q = sessionQuestions[currentIndex];
    if (!q) return;
    if (learning && selectedAnswers[q.id]) return;

    setSelectedAnswers((prev) => ({ ...prev, [q.id]: optId }));

    if (learning) {
      setShowExplanation(true);
    }
  }, [isFinished, sessionQuestions, currentIndex, learning, selectedAnswers]);

  const handleNext = useCallback(() => {
    setShowExplanation(false);
    setShowHint(false);
    setCurrentIndex((prev) => (prev < sessionQuestions.length - 1 ? prev + 1 : prev));
  }, [sessionQuestions.length]);

  const handlePrev = useCallback(() => {
    setShowExplanation(false);
    setShowHint(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleFlag = useCallback(() => {
    const q = sessionQuestions[currentIndex];
    if (!q) return;
    const on = toggleFlaggedQuestion(q.id);
    setFlagged((prev) => (on ? [...new Set([...prev, q.id])] : prev.filter((id) => id !== q.id)));
  }, [sessionQuestions, currentIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isFinished || isLoading || !currentQ) return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      const key = e.key.toLowerCase();
      if (key === '1' || key === '2' || key === '3' || key === 'a' || key === 'b' || key === 'c') {
        const idx = key === 'a' || key === '1' ? 0 : key === 'b' || key === '2' ? 1 : 2;
        const opt = currentQ.options[idx];
        if (opt) handleSelectOption(opt.id);
      } else if (key === 'arrowright' || key === 'n') {
        handleNext();
      } else if (key === 'arrowleft' || key === 'p') {
        handlePrev();
      } else if (key === 'f') {
        handleFlag();
      } else if (key === 'h') {
        setShowHint(true);
      } else if (key === 'enter' && currentIndex === sessionQuestions.length - 1) {
        handleFinish();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFinished, isLoading, currentQ, currentIndex, sessionQuestions.length, handleFinish, handleSelectOption, handleNext, handlePrev, handleFlag]);

  // Format timer
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  if (sessionQuestions.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center py-16 space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          {mode === 'mistakes'
            ? getTranslation('noMistakesYet', lang)
            : mode === 'flagged'
            ? lang === 'et'
              ? 'Märgitud küsimusi pole veel.'
              : lang === 'ru'
              ? 'Пока нет отмеченных вопросов.'
              : 'No flagged questions yet.'
            : 'Küsimusi ei leitud'}
        </h2>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 text-white text-sm font-semibold hover:bg-sky-500"
        >
          <Home className="w-4 h-4" />
          <span>{getTranslation('backToHome', lang)}</span>
        </Link>
      </div>
    );
  }

  // RESULT SCREEN
  if (isFinished) {
    let correctCount = 0;
    sessionQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswerId) {
        correctCount++;
      }
    });
    const mistakesCount = sessionQuestions.length - correctCount;
    const isPassed = quizPassed(mode, correctCount, sessionQuestions.length);
    const sessionWrong = sessionQuestions.filter((q) => selectedAnswers[q.id] !== q.correctAnswerId);

    return (
      <div className="max-w-2xl mx-auto space-y-8 py-4">
        {/* Result Header */}
        <div
          className={`p-6 sm:p-8 rounded-3xl text-center space-y-4 border ${
            isPassed
              ? 'bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border-emerald-500/40'
              : 'bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-900 border-rose-500/40'
          }`}
        >
          <div
            className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center shadow-lg ${
              isPassed
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-emerald-500/10'
                : 'bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-rose-500/10'
            }`}
          >
            {isPassed ? <Award className="w-10 h-10" /> : <AlertTriangle className="w-10 h-10" />}
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isPassed ? getTranslation('examPassedTitle', lang) : getTranslation('examFailedTitle', lang)}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {mode === 'exam'
                ? lang === 'et'
                  ? 'Transpordiameti nõue: vähemalt 13 õiget vastust 15-st (max 2 viga).'
                  : lang === 'ru'
                  ? 'Требование Transpordiamet: минимум 13 правильных из 15 (макс. 2 ошибки).'
                  : 'Transpordiamet requirement: at least 13 of 15 correct (max 2 mistakes).'
                : mode === 'quick'
                ? lang === 'et'
                  ? 'Kiirblits: sooritatud alates 6/7.'
                  : lang === 'ru'
                  ? 'Блиц: сдан от 6/7.'
                  : 'Blitz: pass from 6/7.'
                : mode === 'daily'
                ? lang === 'et'
                  ? 'Päeva väljakutse: sooritatud alates 8/10.'
                  : lang === 'ru'
                  ? 'Вызов дня: сдан от 8/10.'
                  : 'Daily challenge: pass from 8/10.'
                : ''}
            </p>
          </div>

          {/* Big Score Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {correctCount} / {sessionQuestions.length}
              </div>
              <div className="text-[11px] text-slate-400">{getTranslation('correctAnswers', lang)}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-rose-400">{mistakesCount}</div>
              <div className="text-[11px] text-slate-400">{getTranslation('mistakesCount', lang)}</div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-sky-400">
                {Math.round((correctCount / sessionQuestions.length) * 100)}%
              </div>
              <div className="text-[11px] text-slate-400">
                {lang === 'et' ? 'Täpsus' : lang === 'ru' ? 'Точность' : 'Accuracy'}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => startQuiz()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{getTranslation('restart', lang)}</span>
            </button>

            {sessionWrong.length > 0 && (
              <button
                onClick={() => startQuiz(sessionWrong)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all"
              >
                <Flag className="w-4 h-4" />
                <span>{getTranslation('trainSessionMistakes', lang)}</span>
              </button>
            )}

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all"
            >
              <Home className="w-4 h-4" />
              <span>{getTranslation('backToHome', lang)}</span>
            </Link>
          </div>
        </div>

        {/* Detailed Review of All Questions */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-sky-500" />
            <span>{getTranslation('reviewMistakes', lang)}</span>
          </h3>

          <div className="space-y-4">
            {sessionQuestions.map((q, idx) => {
              const userAns = selectedAnswers[q.id];
              const isCorrect = userAns === q.correctAnswerId;

              return (
                <div
                  key={q.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    isCorrect
                      ? 'bg-emerald-500/5 dark:bg-emerald-950/20 border-emerald-500/30'
                      : 'bg-rose-500/5 dark:bg-rose-950/20 border-rose-500/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        #{idx + 1}
                      </span>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {getTranslation('correct', lang)}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
                          <XCircle className="w-3.5 h-3.5" />
                          {getTranslation('incorrect', lang)}
                        </span>
                      )}
                    </div>
                    {q.lawReference && (
                      <span className="text-[11px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {q.lawReference}
                      </span>
                    )}
                  </div>

                  <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white mb-3">
                    {q.question[lang]}
                  </p>

                  {/* Options status */}
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    {q.options.map((opt) => {
                      const isOptionCorrect = opt.id === q.correctAnswerId;
                      const isOptionSelected = opt.id === userAns;

                      let optStyles = 'border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400';
                      if (isOptionCorrect) {
                        optStyles = 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold';
                      } else if (isOptionSelected && !isOptionCorrect) {
                        optStyles = 'border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-300 line-through';
                      }

                      return (
                        <div key={opt.id} className={`p-2.5 rounded-xl border flex items-center justify-between ${optStyles}`}>
                          <span>{opt.text[lang]}</span>
                          {isOptionCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 ml-2" />}
                          {isOptionSelected && !isOptionCorrect && <XCircle className="w-4 h-4 text-rose-500 shrink-0 ml-2" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation box */}
                  <div className="mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {getTranslation('explanation', lang)}:{' '}
                    </span>
                    {q.explanation[lang]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ACTIVE QUESTION SCREEN
  const currentCategory = categories.find((c) => c.id === currentQ.categoryId);
  const currentAnswer = selectedAnswers[currentQ.id];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top Bar: Progress, Timer, Mode */}
      <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2.5 py-1 rounded-lg">
            {getTranslation('question', lang)} {currentIndex + 1} {getTranslation('of', lang)} {sessionQuestions.length}
          </span>
          {currentCategory && (
            <span className="hidden md:inline-block text-xs font-medium text-slate-500">
              • {currentCategory.title[lang]}
            </span>
          )}
        </div>

        {duration > 0 && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono font-bold text-xs sm:text-sm">
            <Timer className="w-4 h-4" />
            <span>{timeFormatted}</span>
          </div>
        )}

        <button
          onClick={handleFinish}
          className="text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-500 hover:text-white transition-colors"
        >
          {getTranslation('finishExam', lang)}
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-2 text-[11px] text-slate-500">
        <span>
          {getTranslation('unseenLeft', lang)}: {freshLeft}
        </span>
      </div>

      {/* Progress Dots Navigation */}
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        {sessionQuestions.map((q, idx) => {
          const isAnswered = !!selectedAnswers[q.id];
          const isCurrent = idx === currentIndex;

          let btnColor = 'bg-slate-200 dark:bg-slate-800 text-slate-500';
          if (isAnswered) {
            btnColor = 'bg-sky-500 text-white font-bold';
          }
          if (isCurrent) {
            btnColor = 'ring-2 ring-sky-500 ring-offset-2 ring-offset-slate-950 bg-sky-600 text-white font-extrabold scale-110';
          }

          return (
            <button
              key={q.id}
              onClick={() => {
                setShowExplanation(false);
                setCurrentIndex(idx);
              }}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs transition-all flex items-center justify-center ${btnColor}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Main Question Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        {/* Visual Illustration / Sign / Diagram */}
        {currentQ.visual && currentQ.visual.type !== 'none' && (
          <VisualIllustration visual={currentQ.visual} lang={lang} />
        )}

        {/* Question Text */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug">
            {currentQ.question[lang]}
          </h2>
          <button
            type="button"
            onClick={handleFlag}
            className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
              flagged.includes(currentQ.id)
                ? 'bg-pink-500/15 text-pink-600 border-pink-500/40'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-transparent'
            }`}
          >
            <Flag className="w-3.5 h-3.5" />
            {getTranslation('flagQuestion', lang)}
          </button>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {currentQ.options.map((opt, optIdx) => {
            const isSelected = currentAnswer === opt.id;
            const isPracticeMode = learning;
            const isRight = opt.id === currentQ.correctAnswerId;

            let buttonStyles =
              'border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 bg-slate-50/50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200';

            if (isSelected) {
              if (isPracticeMode) {
                buttonStyles = isRight
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-semibold'
                  : 'border-rose-500 bg-rose-500/10 text-rose-800 dark:text-rose-300 font-semibold';
              } else {
                buttonStyles =
                  'border-sky-500 bg-sky-500/10 text-sky-800 dark:text-sky-300 font-semibold ring-1 ring-sky-500';
              }
            } else if (isPracticeMode && currentAnswer && isRight) {
              buttonStyles =
                'border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-semibold';
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${buttonStyles}`}
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {optIdx + 1}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base leading-relaxed">
                    {opt.text[lang]}
                  </span>
                </div>

                {isPracticeMode && currentAnswer && (
                  <div className="shrink-0 mt-0.5">
                    {isRight ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-rose-500" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Practice Mode Instant Explanation */}
        {learning && !currentAnswer && (
          <button
            type="button"
            onClick={() => setShowHint(true)}
            className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
          >
            {getTranslation('showHint', lang)}
            {showHint && currentQ.lawReference ? ` — ${currentQ.lawReference}` : ''}
          </button>
        )}

        {(showExplanation || (learning && currentAnswer)) && (
          <div className="p-4 rounded-2xl bg-sky-500/5 dark:bg-sky-950/30 border border-sky-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-sky-700 dark:text-sky-400">
              <HelpCircle className="w-4 h-4" />
              <span>{getTranslation('explanation', lang)}</span>
              {currentQ.lawReference && (
                <span className="ml-auto text-[11px] font-mono text-slate-500">
                  {currentQ.lawReference}
                </span>
              )}
            </div>
            <p className="leading-relaxed">{currentQ.explanation[lang]}</p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm disabled:opacity-40 disabled:pointer-events-none hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{getTranslation('prevQuestion', lang)}</span>
        </button>

        {currentIndex === sessionQuestions.length - 1 ? (
          <button
            onClick={handleFinish}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            <span>{getTranslation('finishExam', lang)}</span>
            <CheckCircle2 className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
          >
            <span>{getTranslation('nextQuestion', lang)}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
        <Keyboard className="w-3.5 h-3.5" />
        {getTranslation('keyboardHint', lang)}
      </p>
    </div>
  );
}

export default function TestPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sky-500"></div>
        </div>
      }
    >
      <TestContent />
    </Suspense>
  );
}
