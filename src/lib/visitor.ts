const COOKIE = 'est_bike_vid';
const SEEN_COOKIE = 'est_bike_seen';
const MEMORY_KEY = 'est_bike_visitor_mem_v1';
const SEEN_LIMIT = 800;

export interface VisitorMemory {
  visitorId: string;
  seenQuestionIds: string[];
  examFingerprints: string[];
  flaggedQuestionIds: string[];
  lastVisitDay: string;
  streakDays: number;
  sessionCount: number;
}

function randomId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `v_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 12)}`;
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const parts = document.cookie.split(';');
  for (const part of parts) {
    const [k, ...rest] = part.trim().split('=');
    if (k === name) return decodeURIComponent(rest.join('='));
  }
  return null;
}

function writeCookie(name: string, value: string) {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`;
}

export function getVisitorId(): string {
  if (typeof window === 'undefined') return 'ssr';
  let id = readCookie(COOKIE);
  if (!id) {
    try {
      id = localStorage.getItem(COOKIE);
    } catch {
      id = null;
    }
  }
  if (!id) id = randomId();
  writeCookie(COOKIE, id);
  try {
    localStorage.setItem(COOKIE, id);
  } catch {
    // ignore
  }
  return id;
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function readSeenCookie(): string[] {
  const raw = readCookie(SEEN_COOKIE);
  if (!raw) return [];
  return raw.split(',').map((id) => id.trim()).filter(Boolean);
}

function writeSeenCookie(ids: string[]) {
  // Cookies stay under ~4KB; full history lives in localStorage.
  writeCookie(SEEN_COOKIE, ids.slice(-220).join(','));
}

export function getVisitorMemory(): VisitorMemory {
  const visitorId = getVisitorId();
  const empty: VisitorMemory = {
    visitorId,
    seenQuestionIds: [],
    examFingerprints: [],
    flaggedQuestionIds: [],
    lastVisitDay: todayKey(),
    streakDays: 1,
    sessionCount: 0,
  };
  if (typeof window === 'undefined') return empty;
  const fromCookie = readSeenCookie();
  try {
    const raw = localStorage.getItem(MEMORY_KEY);
    if (!raw) {
      return { ...empty, seenQuestionIds: fromCookie };
    }
    const parsed = JSON.parse(raw) as VisitorMemory;
    const merged = Array.from(new Set([...(parsed.seenQuestionIds || []), ...fromCookie])).slice(-SEEN_LIMIT);
    return {
      ...empty,
      ...parsed,
      visitorId,
      seenQuestionIds: merged,
    };
  } catch {
    return { ...empty, seenQuestionIds: fromCookie };
  }
}

export function saveVisitorMemory(mem: VisitorMemory) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(MEMORY_KEY, JSON.stringify(mem));
  } catch {
    // ignore
  }
  writeSeenCookie(mem.seenQuestionIds || []);
}

export function touchVisitorVisit(): VisitorMemory {
  const mem = getVisitorMemory();
  const today = todayKey();
  if (mem.lastVisitDay !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = yesterday.toISOString().slice(0, 10);
    mem.streakDays = mem.lastVisitDay === yKey ? mem.streakDays + 1 : 1;
    mem.lastVisitDay = today;
    saveVisitorMemory(mem);
  }
  return mem;
}

export function markQuestionsSeen(ids: string[]) {
  if (!ids.length) return;
  const mem = getVisitorMemory();
  const set = new Set(mem.seenQuestionIds);
  const before = set.size;
  ids.forEach((id) => set.add(id));
  mem.seenQuestionIds = Array.from(set).slice(-SEEN_LIMIT);
  if (set.size !== before) {
    mem.sessionCount += 1;
  }
  saveVisitorMemory(mem);
}

/** After the child has seen the whole pool, start a new learning cycle. */
export function clearSeenInPool(poolIds: string[]) {
  const mem = getVisitorMemory();
  const drop = new Set(poolIds);
  mem.seenQuestionIds = mem.seenQuestionIds.filter((id) => !drop.has(id));
  saveVisitorMemory(mem);
}

export function rememberExamFingerprint(fp: string) {
  const mem = getVisitorMemory();
  if (!mem.examFingerprints.includes(fp)) {
    mem.examFingerprints = [fp, ...mem.examFingerprints].slice(0, 80);
    saveVisitorMemory(mem);
  }
}

export function examFingerprint(ids: string[]): string {
  return [...ids].sort().join('|');
}

export function getFlaggedIds(): string[] {
  return getVisitorMemory().flaggedQuestionIds || [];
}

export function toggleFlaggedQuestion(id: string): boolean {
  const mem = getVisitorMemory();
  const set = new Set(mem.flaggedQuestionIds || []);
  if (set.has(id)) set.delete(id);
  else set.add(id);
  mem.flaggedQuestionIds = Array.from(set).slice(-80);
  saveVisitorMemory(mem);
  return set.has(id);
}

export function shortVisitorTag(id = getVisitorId()): string {
  return id.replace(/-/g, '').slice(0, 6).toUpperCase();
}
