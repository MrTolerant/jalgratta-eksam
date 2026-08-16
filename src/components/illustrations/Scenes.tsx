import React from 'react';
import { Language } from '@/types';

interface SceneProps {
  lang: Language;
}

function t(lang: Language, et: string, ru: string, en: string) {
  return lang === 'et' ? et : lang === 'ru' ? ru : en;
}

function Frame({ children, caption }: { children: React.ReactNode; caption: string }) {
  return (
    <div className="w-full">
      <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-[#9ccc65]">
        {children}
      </div>
      <p className="mt-2.5 text-center text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
        {caption}
      </p>
    </div>
  );
}

function ArrowDef({ id, color }: { id: string; color: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill={color} />
    </marker>
  );
}

function BikeTop({
  x,
  y,
  rot = 0,
  you = false,
  label,
}: {
  x: number;
  y: number;
  rot?: number;
  you?: boolean;
  label?: string;
}) {
  const body = you ? '#059669' : '#1e293b';
  return (
    <g>
      <g transform={`translate(${x} ${y}) rotate(${rot})`}>
        <ellipse cx="1" cy="2" rx="10" ry="18" fill="rgba(15,23,42,0.18)" />
        <ellipse cx="0" cy="13" rx="6.2" ry="7" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.4" />
        <ellipse cx="0" cy="-13" rx="6.2" ry="7" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.4" />
        <rect x="-4.5" y="-9" width="9" height="18" rx="3.5" fill={body} />
        <circle cx="0" cy="-1" r="6" fill="#f59e0b" />
        <path d="M-5 -4 Q0 -9 5 -4" fill={you ? '#065f46' : '#1e3a5f'} />
        {you && <circle cx="0" cy="-18" r="3.5" fill="#34d399" />}
      </g>
      {label && (
        <g>
          <rect x={x + 12} y={y - 10} width={Math.max(36, label.length * 6.4)} height="18" rx="4" fill="#0f172a" />
          <text x={x + 18} y={y + 3} fill="#fff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">
            {label}
          </text>
        </g>
      )}
    </g>
  );
}

function CarTop({
  x,
  y,
  rot = 0,
  color = '#ef4444',
  label,
}: {
  x: number;
  y: number;
  rot?: number;
  color?: string;
  label?: string;
}) {
  return (
    <g>
      <g transform={`translate(${x} ${y}) rotate(${rot})`}>
        <rect x="-13" y="-20" width="26" height="42" rx="7" fill="rgba(15,23,42,0.18)" />
        <rect x="-12" y="-22" width="24" height="44" rx="7" fill={color} />
        <rect x="-9" y="-13" width="18" height="11" rx="2.5" fill="#bae6fd" />
        <rect x="-9" y="5" width="18" height="8" rx="2" fill="rgba(15,23,42,0.28)" />
        <rect x="-8" y="-22" width="5" height="3" rx="1" fill="#fef08a" />
        <rect x="3" y="-22" width="5" height="3" rx="1" fill="#fef08a" />
        <rect x="-8" y="19" width="5" height="3" rx="1" fill="#fda4af" />
        <rect x="3" y="19" width="5" height="3" rx="1" fill="#fda4af" />
      </g>
      {label && (
        <g>
          <rect x={x + 16} y={y - 10} width={Math.max(32, label.length * 6.2)} height="18" rx="4" fill="#0f172a" />
          <text x={x + 22} y={y + 3} fill="#fff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">
            {label}
          </text>
        </g>
      )}
    </g>
  );
}

function Pedestrian({ x, y, color = '#0f172a', walking = false }: { x: number; y: number; color?: string; walking?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke={color} fill={color} strokeLinecap="round">
      <circle cx="0" cy="-16" r="5" strokeWidth="0" />
      <path d={walking ? 'M0 -10 L0 2 M-7 -3 L8 -6 M0 2 L-8 16 M0 2 L7 14' : 'M0 -10 L0 4 M-6 -2 L6 -2 M0 4 L-5 18 M0 4 L5 18'} fill="none" strokeWidth="2.6" />
    </g>
  );
}

function Tree({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-3" y="6" width="6" height="10" fill="#8d6e63" />
      <circle cx="0" cy="0" r="12" fill="#2e7d32" />
      <circle cx="-6" cy="-4" r="8" fill="#388e3c" />
      <circle cx="6" cy="-3" r="7" fill="#43a047" />
    </g>
  );
}

function House({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="18" width="44" height="28" fill="#efebe9" stroke="#8d6e63" strokeWidth="1.5" />
      <polygon points="22,2  -4,20  48,20" fill="#c62828" />
      <rect x="16" y="28" width="12" height="18" fill="#5d4037" />
      <rect x="6" y="24" width="8" height="8" fill="#81d4fa" />
      <rect x="30" y="24" width="8" height="8" fill="#81d4fa" />
    </g>
  );
}

function TrafficLight({ x, y, lit }: { x: number; y: number; lit: 'red' | 'yellow' | 'green' }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-8" y="-2" width="16" height="40" rx="4" fill="#0f172a" />
      <circle cx="0" cy="6" r="5" fill={lit === 'red' ? '#ef4444' : '#334155'} />
      <circle cx="0" cy="18" r="5" fill={lit === 'yellow' ? '#facc15' : '#334155'} />
      <circle cx="0" cy="30" r="5" fill={lit === 'green' ? '#22c55e' : '#334155'} />
    </g>
  );
}

function CrossRoads({
  children,
  showGrass = true,
}: {
  children: React.ReactNode;
  showGrass?: boolean;
}) {
  return (
    <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
      <defs>
        <ArrowDef id="arrG" color="#059669" />
        <ArrowDef id="arrR" color="#ef4444" />
        <ArrowDef id="arrB" color="#0284c7" />
        <ArrowDef id="arrW" color="#f8fafc" />
        <ArrowDef id="arrA" color="#f59e0b" />
      </defs>
      {showGrass && <rect width="420" height="280" fill="#9ccc65" />}
      <rect x="0" y="108" width="420" height="64" fill="#546e7a" />
      <rect x="178" y="0" width="64" height="280" fill="#546e7a" />
      <line x1="0" y1="140" x2="168" y2="140" stroke="#f8fafc" strokeWidth="2" strokeDasharray="8 8" />
      <line x1="252" y1="140" x2="420" y2="140" stroke="#f8fafc" strokeWidth="2" strokeDasharray="8 8" />
      <line x1="210" y1="0" x2="210" y2="98" stroke="#f8fafc" strokeWidth="2" strokeDasharray="8 8" />
      <line x1="210" y1="182" x2="210" y2="280" stroke="#f8fafc" strokeWidth="2" strokeDasharray="8 8" />
      {children}
    </svg>
  );
}

export function SceneDrivewayExit({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Hoovist teele: anna teed kõigile', 'Со двора на дорогу: уступи всем', 'From courtyard: give way to all')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <defs>
          <ArrowDef id="dG" color="#059669" />
          <ArrowDef id="dR" color="#ef4444" />
        </defs>
        <rect width="420" height="280" fill="#9ccc65" />
        <rect x="0" y="70" width="420" height="90" fill="#546e7a" />
        <line x1="0" y1="115" x2="420" y2="115" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 8" />
        <rect x="168" y="160" width="56" height="120" fill="#78909c" />
        <House x={118} y={188} />
        <House x={248} y={188} />
        <Tree x={70} y={210} />
        <Tree x={360} y={210} />
        <BikeTop x={196} y={210} rot={0} you label={t(lang, 'Sina', 'Ты', 'You')} />
        <path d="M196 190 L196 150" stroke="#059669" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#dG)" fill="none" />
        <CarTop x={70} y={92} rot={90} color="#ef4444" label={t(lang, 'Auto', 'Авто', 'Car')} />
        <path d="M100 92 L160 92" stroke="#ef4444" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#dR)" fill="none" />
        <CarTop x={350} y={138} rot={-90} color="#3b82f6" />
        <Pedestrian x={250} y={188} />
      </svg>
    </Frame>
  );
}

export function SceneShoulderEntry({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Teepeenralt teele: anna teed sõiduteel olijatele', 'С обочины: уступи тем, кто уже на дороге', 'From the shoulder: give way to roadway traffic')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <defs>
          <ArrowDef id="sG" color="#059669" />
          <ArrowDef id="sR" color="#ef4444" />
        </defs>
        <rect width="420" height="280" fill="#9ccc65" />
        <rect x="0" y="70" width="420" height="100" fill="#546e7a" />
        <rect x="0" y="170" width="420" height="28" fill="#a1887f" />
        <line x1="0" y1="120" x2="420" y2="120" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 8" />
        <line x1="0" y1="168" x2="420" y2="168" stroke="#facc15" strokeWidth="3" />
        <BikeTop x={200} y={196} rot={-20} you label={t(lang, 'Sina', 'Ты', 'You')} />
        <path d="M200 178 Q200 150 200 130" stroke="#059669" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#sG)" fill="none" />
        <CarTop x={80} y={100} rot={90} color="#ef4444" label={t(lang, 'Auto', 'Авто', 'Car')} />
        <path d="M110 100 L170 100" stroke="#ef4444" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#sR)" fill="none" />
        <Tree x={40} y={220} />
        <Tree x={380} y={230} />
      </svg>
    </Frame>
  );
}

export function SceneRoadRightEdge({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Sõida parema ääre lähedal, ühes reas', 'Держись правого края, в один ряд', 'Stay near the right edge, single file')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <rect width="420" height="280" fill="#9ccc65" />
        <rect x="70" y="0" width="200" height="280" fill="#546e7a" />
        <line x1="170" y1="0" x2="170" y2="280" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 8" />
        <rect x="258" y="0" width="14" height="280" fill="#a1887f" />
        <CarTop x={128} y={70} rot={180} color="#64748b" />
        <CarTop x={128} y={200} rot={180} color="#3b82f6" />
        <BikeTop x={236} y={90} rot={180} you />
        <BikeTop x={236} y={150} rot={180} you={false} />
        <BikeTop x={236} y={210} rot={180} you={false} />
        <text x="300" y="150" fill="#0f172a" fontSize="12" fontWeight="700" fontFamily="system-ui">
          {t(lang, '1 rida', '1 ряд', '1 file')}
        </text>
        <Tree x={40} y={60} />
        <Tree x={40} y={200} />
        <Tree x={360} y={80} />
      </svg>
    </Frame>
  );
}

export function SceneSidewalkRules({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Kõnniteel: ära ohusta jalakäijat', 'На тротуаре: не создавай опасность пешеходу', 'On the sidewalk: do not endanger pedestrians')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <rect width="420" height="280" fill="#9ccc65" />
        <rect x="0" y="40" width="420" height="110" fill="#546e7a" />
        <line x1="0" y1="95" x2="420" y2="95" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 8" />
        <rect x="0" y="150" width="420" height="70" fill="#c4b5a0" />
        <House x={20} y={188} />
        <House x={200} y={188} />
        <House x={340} y={188} />
        <Pedestrian x={120} y={188} walking />
        <Pedestrian x={250} y={200} color="#7c3aed" walking />
        <BikeTop x={180} y={176} rot={90} you label={t(lang, 'Sina', 'Ты', 'You')} />
        <CarTop x={80} y={70} rot={90} color="#64748b" />
      </svg>
    </Frame>
  );
}

export function SceneLeftTurnStages({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Ohutu 2-etapiline vasakpööre', 'Безопасный двухэтапный левый поворот', 'Safe two-stage left turn')}>
      <CrossRoads>
        <path d="M232 240 L232 70 L70 70" fill="none" stroke="#059669" strokeWidth="3.5" strokeDasharray="6 5" markerEnd="url(#arrG)" />
        <circle cx="232" cy="70" r="6" fill="#059669" />
        <text x="244" y="66" fill="#065f46" fontSize="11" fontWeight="800" fontFamily="system-ui">
          1
        </text>
        <text x="80" y="62" fill="#065f46" fontSize="11" fontWeight="800" fontFamily="system-ui">
          2
        </text>
        <path d="M218 240 Q218 140 80 140" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 4" />
        <text x="150" y="128" fill="#b91c1c" fontSize="18" fontWeight="800">
          ✕
        </text>
        <BikeTop x={232} y={230} rot={0} you label={t(lang, 'Sina', 'Ты', 'You')} />
        <CarTop x={70} y={122} rot={90} color="#ef4444" />
        <CarTop x={350} y={158} rot={-90} color="#3b82f6" />
      </CrossRoads>
    </Frame>
  );
}

export function SceneHandSignals({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Anna käega märku enne pööret', 'Покажи рукой сигнал до поворота', 'Signal with your arm before turning')}>
      <svg viewBox="0 0 420 260" className="w-full h-auto" aria-hidden>
        <rect width="420" height="260" fill="#e8f5e9" />
        <rect x="0" y="170" width="420" height="90" fill="#9ccc65" />
        <rect x="0" y="150" width="420" height="28" fill="#78909c" />
        {/* Bike side view */}
        <g transform="translate(150 70)">
          <ellipse cx="40" cy="108" rx="22" ry="6" fill="rgba(15,23,42,0.15)" />
          <ellipse cx="140" cy="108" rx="22" ry="6" fill="rgba(15,23,42,0.15)" />
          <circle cx="40" cy="100" r="22" fill="none" stroke="#0f172a" strokeWidth="5" />
          <circle cx="40" cy="100" r="5" fill="#0f172a" />
          <circle cx="140" cy="100" r="22" fill="none" stroke="#0f172a" strokeWidth="5" />
          <circle cx="140" cy="100" r="5" fill="#0f172a" />
          <path d="M40 100 L78 100 L108 52 L58 52 Z" fill="none" stroke="#059669" strokeWidth="5" strokeLinejoin="round" />
          <path d="M78 100 L108 52 L140 100" fill="none" stroke="#059669" strokeWidth="5" strokeLinejoin="round" />
          <path d="M108 52 L158 44" stroke="#0f172a" strokeWidth="5" strokeLinecap="round" />
          <rect x="52" y="44" width="16" height="6" rx="2" fill="#0f172a" />
          {/* rider */}
          <circle cx="92" cy="28" r="12" fill="#f59e0b" />
          <path d="M80 22 Q92 12 104 22" fill="#065f46" />
          <path d="M92 40 L88 70 L78 100" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
          <path d="M92 48 L118 62 L140 48" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
          {/* left arm out */}
          <path d="M92 48 L40 36" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
          <circle cx="36" cy="34" r="5" fill="#f59e0b" />
        </g>
        <path d="M70 100 L30 100" stroke="#0284c7" strokeWidth="3" markerEnd="url(#hs)" fill="none" />
        <defs>
          <ArrowDef id="hs" color="#0284c7" />
        </defs>
        <text x="24" y="88" fill="#0284c7" fontSize="12" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Vasak', 'Левый', 'Left')}
        </text>
      </svg>
    </Frame>
  );
}

export function SceneCarDoorZone({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Hoia vahe pargitud autode ustest', 'Держи дистанцию от дверей припаркованных авто', 'Keep clear of parked-car doors')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <defs>
          <ArrowDef id="doorA" color="#ef4444" />
        </defs>
        <rect width="420" height="280" fill="#9ccc65" />
        <rect x="0" y="40" width="420" height="160" fill="#546e7a" />
        <line x1="0" y1="120" x2="420" y2="120" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 8" />
        <rect x="0" y="200" width="420" height="16" fill="#a1887f" />
        <CarTop x={80} y={178} rot={90} color="#64748b" />
        <CarTop x={160} y={178} rot={90} color="#0ea5e9" />
        <CarTop x={240} y={178} rot={90} color="#f59e0b" />
        <path d="M160 160 L160 130" stroke="#ef4444" strokeWidth="3" markerEnd="url(#doorA)" fill="none" />
        <rect x="148" y="148" width="24" height="8" rx="2" fill="#7f1d1d" transform="rotate(-25 160 152)" />
        <text x="168" y="132" fill="#b91c1c" fontSize="11" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Uks!', 'Дверь!', 'Door!')}
        </text>
        <BikeTop x={160} y={70} rot={90} you label={t(lang, 'Ohutu kaugus', 'Безопасный зазор', 'Safe gap')} />
      </svg>
    </Frame>
  );
}

export function SceneEqualIntersection({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Samaliigiline ristmik: parema käe reegel', 'Равнозначный перекрёсток: помеха справа', 'Equal intersection: priority to the right')}>
      <CrossRoads>
        <BikeTop x={232} y={230} rot={0} you label={t(lang, 'Sina', 'Ты', 'You')} />
        <path d="M232 210 L232 160" stroke="#059669" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#arrG)" fill="none" />
        <CarTop x={340} y={122} rot={-90} color="#ef4444" label={t(lang, 'Paremalt', 'Справа', 'Right')} />
        <path d="M316 122 L260 122" stroke="#ef4444" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#arrR)" fill="none" />
        <rect x="12" y="12" width="150" height="36" rx="8" fill="#0f172a" />
        <text x="22" y="35" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="system-ui">
          {t(lang, 'Anna teed paremale', 'Уступи справа', 'Give way to the right')}
        </text>
      </CrossRoads>
    </Frame>
  );
}

export function SceneTrafficLightsTurn({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Roheline foor: otse sõitjal on eesõigus pööraja ees', 'Зелёный: едущий прямо имеет преимущество', 'Green light: going straight has priority over turning')}>
      <CrossRoads>
        <TrafficLight x={164} y={18} lit="green" />
        <BikeTop x={232} y={230} rot={0} you label={t(lang, 'Sina', 'Ты', 'You')} />
        <path d="M232 210 L232 50" stroke="#059669" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#arrG)" fill="none" />
        <CarTop x={188} y={40} rot={180} color="#ef4444" label={t(lang, 'Pöörab', 'Поворачивает', 'Turning')} />
        <path d="M188 64 Q188 140 80 140" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#arrR)" />
      </CrossRoads>
    </Frame>
  );
}

export function SceneTrafficOfficer({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Reguleerija: külg vastu sind = tohid sõita', 'Регулировщик: бок к тебе = можно ехать', 'Officer: side facing you = you may go')}>
      <CrossRoads>
        <g transform="translate(210 140)">
          <circle cx="0" cy="-16" r="7" fill="#f59e0b" />
          <rect x="-8" y="-8" width="16" height="20" rx="3" fill="#1e3a5f" />
          <rect x="-14" y="-6" width="8" height="5" fill="#facc15" />
          <path d="M8 -4 L22 -18" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
          <rect x="20" y="-28" width="6" height="14" rx="1" fill="#facc15" />
        </g>
        <BikeTop x={232} y={230} rot={0} you label={t(lang, 'Sina', 'Ты', 'You')} />
        <path d="M232 210 L232 170" stroke="#059669" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#arrG)" fill="none" />
        <CarTop x={70} y={122} rot={90} color="#ef4444" />
        <text x="18" y="36" fill="#0f172a" fontSize="12" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Külg = tee vaba', 'Бок = путь свободен', 'Side = road is open')}
        </text>
      </CrossRoads>
    </Frame>
  );
}

export function SceneCrosswalk({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Ülekäigurajal rattaga: sul EI ole jalakäija eesõigust', 'На зебре на велосипеде НЕТ преимущества пешехода', 'Riding across a zebra: you do NOT have pedestrian priority')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <defs>
          <ArrowDef id="cwG" color="#0284c7" />
          <ArrowDef id="cwR" color="#ef4444" />
        </defs>
        <rect width="420" height="280" fill="#9ccc65" />
        <rect x="0" y="70" width="420" height="140" fill="#546e7a" />
        <line x1="0" y1="140" x2="420" y2="140" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 8" />
        <rect x="0" y="40" width="420" height="30" fill="#c4b5a0" />
        <rect x="0" y="210" width="420" height="30" fill="#c4b5a0" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x={178} y={78 + i * 16} width="64" height="9" fill="#f8fafc" />
        ))}
        <BikeTop x={210} y={236} rot={0} you label={t(lang, 'Sina', 'Ты', 'You')} />
        <path d="M210 218 L210 90" stroke="#0284c7" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#cwG)" fill="none" />
        <CarTop x={70} y={168} rot={90} color="#ef4444" label={t(lang, 'Auto', 'Авто', 'Car')} />
        <path d="M100 168 L160 168" stroke="#ef4444" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#cwR)" fill="none" />
        <rect x="250" y="12" width="158" height="28" rx="8" fill="#7f1d1d" />
        <text x="260" y="31" fill="#fecaca" fontSize="11" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Ratturil pole eesõigust', 'Нет преимущества', 'No cyclist priority')}
        </text>
      </svg>
    </Frame>
  );
}

export function SceneDismount({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Ratast käekõrval lükates oled jalakäija', 'Ведя велосипед рядом, ты пешеход', 'Walking the bike makes you a pedestrian')}>
      <svg viewBox="0 0 420 260" className="w-full h-auto" aria-hidden>
        <rect width="420" height="260" fill="#e8f5e9" />
        <rect x="0" y="170" width="420" height="90" fill="#9ccc65" />
        <rect x="0" y="150" width="420" height="28" fill="#c4b5a0" />
        {Array.from({ length: 7 }).map((_, i) => (
          <rect key={i} x={160} y={40 + i * 14} width="90" height="8" fill="#f8fafc" />
        ))}
        <rect x="140" y="30" width="130" height="130" fill="#546e7a" />
        {Array.from({ length: 7 }).map((_, i) => (
          <rect key={`z${i}`} x={168} y={40 + i * 16} width="74" height="9" fill="#f8fafc" />
        ))}
        <g transform="translate(130 70)">
          <circle cx="40" cy="100" r="16" fill="none" stroke="#0f172a" strokeWidth="4" />
          <circle cx="110" cy="100" r="16" fill="none" stroke="#0f172a" strokeWidth="4" />
          <path d="M40 100 L70 100 L90 68 L55 68 Z" fill="none" stroke="#059669" strokeWidth="4" />
          <path d="M70 100 L90 68 L110 100" fill="none" stroke="#059669" strokeWidth="4" />
        </g>
        <Pedestrian x={118} y={168} walking />
        <text x="24" y="40" fill="#0f172a" fontSize="13" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Jalakäija õigused', 'Права пешехода', 'Pedestrian rights')}
        </text>
      </svg>
    </Frame>
  );
}

export function SceneLights({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Pimeda ajal: valge tuli ees, punane taga', 'В темноте: белый свет спереди, красный сзади', 'In the dark: white front light, red rear light')}>
      <svg viewBox="0 0 420 260" className="w-full h-auto" aria-hidden>
        <rect width="420" height="260" fill="#0f172a" />
        <rect x="0" y="180" width="420" height="80" fill="#1e293b" />
        <ellipse cx="210" cy="200" rx="160" ry="16" fill="#334155" />
        <g transform="translate(110 40)">
          <circle cx="40" cy="120" r="24" fill="none" stroke="#94a3b8" strokeWidth="5" />
          <circle cx="160" cy="120" r="24" fill="none" stroke="#94a3b8" strokeWidth="5" />
          <path d="M40 120 L86 120 L124 64 L64 64 Z" fill="none" stroke="#38bdf8" strokeWidth="5" />
          <path d="M86 120 L124 64 L160 120" fill="none" stroke="#38bdf8" strokeWidth="5" />
          <circle cx="108" cy="40" r="13" fill="#f59e0b" />
          <path d="M96 34 Q108 24 120 34" fill="#22c55e" />
          <circle cx="168" cy="56" r="8" fill="#f8fafc">
            <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="28" cy="118" r="8" fill="#ef4444">
            <animate attributeName="opacity" values="1;0.35;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
        </g>
        <text x="300" y="70" fill="#f8fafc" fontSize="12" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Valge / kollane', 'Белый / жёлтый', 'White / amber')}
        </text>
        <text x="24" y="230" fill="#fecaca" fontSize="12" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Punane tagatuli', 'Красный задний', 'Red rear light')}
        </text>
      </svg>
    </Frame>
  );
}

export function SceneReflectors({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Helkurid: valge ees, punane taga, kollased kodarates', 'Катафоты: белый спереди, красный сзади, жёлтые в колёсах', 'Reflectors: white front, red rear, amber in wheels')}>
      <svg viewBox="0 0 420 260" className="w-full h-auto" aria-hidden>
        <rect width="420" height="260" fill="#e2e8f0" />
        <g transform="translate(110 40)">
          <circle cx="40" cy="120" r="24" fill="none" stroke="#0f172a" strokeWidth="5" />
          <circle cx="160" cy="120" r="24" fill="none" stroke="#0f172a" strokeWidth="5" />
          <path d="M40 120 L86 120 L124 64 L64 64 Z" fill="none" stroke="#059669" strokeWidth="5" />
          <path d="M86 120 L124 64 L160 120" fill="none" stroke="#059669" strokeWidth="5" />
          <circle cx="40" cy="120" r="6" fill="#facc15" />
          <circle cx="160" cy="120" r="6" fill="#facc15" />
          <rect x="20" y="108" width="10" height="8" rx="2" fill="#ef4444" />
          <rect x="168" y="52" width="10" height="8" rx="2" fill="#f8fafc" stroke="#0f172a" />
        </g>
        <text x="24" y="40" fill="#b91c1c" fontSize="12" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Punane helkur', 'Красный', 'Red')}
        </text>
        <text x="300" y="70" fill="#0f172a" fontSize="12" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Valge helkur', 'Белый', 'White')}
        </text>
        <text x="160" y="240" fill="#a16207" fontSize="12" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Kollased kodarates', 'Жёлтые в спицах', 'Amber spokes')}
        </text>
      </svg>
    </Frame>
  );
}

export function SceneHelmet({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Alla 16-aastasele on kinnitatud kiiver KOHUSTUSLIK', 'До 16 лет застёгнутый шлем ОБЯЗАТЕЛЕН', 'Under 16: a fastened helmet is MANDATORY')}>
      <svg viewBox="0 0 420 260" className="w-full h-auto" aria-hidden>
        <rect width="420" height="260" fill="#e0f2fe" />
        <rect x="0" y="180" width="420" height="80" fill="#9ccc65" />
        <g transform="translate(150 30)">
          <circle cx="60" cy="70" r="28" fill="#fde68a" />
          <path d="M32 62 Q60 18 88 62" fill="#16a34a" />
          <path d="M36 70 Q60 78 84 70" fill="none" stroke="#166534" strokeWidth="3" />
          <rect x="48" y="96" width="24" height="36" rx="6" fill="#38bdf8" />
          <path d="M48 110 L28 140" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
          <path d="M72 110 L92 140" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
        </g>
        <text x="210" y="230" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Kiiver + rihm kinni', 'Шлем + ремешок застёгнут', 'Helmet + strap fastened')}
        </text>
      </svg>
    </Frame>
  );
}

export function SceneBikeLane({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Jalgrattarada on kohustuslik, kui see on kasutatav', 'Велополоса обязательна, если ею можно пользоваться', 'Use the cycle lane when it is usable')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <rect width="420" height="280" fill="#9ccc65" />
        <rect x="40" y="0" width="220" height="280" fill="#546e7a" />
        <rect x="260" y="0" width="70" height="280" fill="#e11d48" />
        <line x1="150" y1="0" x2="150" y2="280" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 8" />
        <line x1="260" y1="0" x2="260" y2="280" stroke="#f8fafc" strokeWidth="4" />
        <CarTop x={100} y={80} rot={180} color="#64748b" />
        <CarTop x={100} y={200} rot={180} color="#3b82f6" />
        <BikeTop x={294} y={140} rot={180} you label={t(lang, 'Rada', 'Полоса', 'Lane')} />
        <text x="348" y="40" fill="#0f172a" fontSize="11" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Jalgrattarada', 'Велополоса', 'Cycle lane')}
        </text>
      </svg>
    </Frame>
  );
}

export function SceneSharedPath({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Ühisel teel hoia kiirust ja anna teed jalakäijale', 'На совмещённой дорожке уступи пешеходу', 'On a shared path, yield to pedestrians')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <rect width="420" height="280" fill="#9ccc65" />
        <rect x="90" y="0" width="240" height="280" fill="#ef9a9a" />
        <line x1="210" y1="0" x2="210" y2="280" stroke="#fff" strokeWidth="3" strokeDasharray="12 10" />
        <Pedestrian x={150} y={80} walking />
        <Pedestrian x={168} y={180} color="#7c3aed" walking />
        <BikeTop x={270} y={140} rot={180} you label={t(lang, 'Sina', 'Ты', 'You')} />
        <Tree x={50} y={70} />
        <Tree x={50} y={200} />
        <Tree x={370} y={90} />
      </svg>
    </Frame>
  );
}

export function SceneLivingZone({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Õueala: max 20 km/h, jalakäijal on eesõigus', 'Жилая зона: макс. 20 км/ч, преимущество у пешехода', 'Living zone: max 20 km/h, pedestrians have priority')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <rect width="420" height="280" fill="#a5d6a7" />
        <rect x="40" y="90" width="340" height="80" fill="#90a4ae" />
        <House x={30} y={8} />
        <House x={170} y={8} />
        <House x={310} y={8} />
        <House x={50} y={188} />
        <House x={280} y={188} />
        <Pedestrian x={140} y={150} walking />
        <Pedestrian x={220} y={128} color="#7c3aed" />
        <circle cx="260" cy="160" r="6" fill="#ef4444" />
        <BikeTop x={80} y={130} rot={90} you label="20" />
        <text x="210" y="50" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="800" fontFamily="system-ui">
          {t(lang, 'Õueala', 'Жилая зона', 'Living zone')}
        </text>
      </svg>
    </Frame>
  );
}

export function SceneRoundabout({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Ringristmik: anna teed ringil juba sõitjatele', 'Кольцо: уступи тем, кто уже на круге', 'Roundabout: give way to traffic already in the circle')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <defs>
          <ArrowDef id="rbG" color="#059669" />
          <ArrowDef id="rbR" color="#ef4444" />
        </defs>
        <rect width="420" height="280" fill="#9ccc65" />
        <rect x="0" y="118" width="420" height="44" fill="#546e7a" />
        <rect x="188" y="0" width="44" height="280" fill="#546e7a" />
        <circle cx="210" cy="140" r="70" fill="#546e7a" />
        <circle cx="210" cy="140" r="34" fill="#66bb6a" />
        <circle cx="210" cy="140" r="52" fill="none" stroke="#f8fafc" strokeWidth="2" strokeDasharray="8 6" />
        <CarTop x={258} y={110} rot={-40} color="#ef4444" label={t(lang, 'Ringil', 'На круге', 'In circle')} />
        <BikeTop x={210} y={240} rot={0} you label={t(lang, 'Sina', 'Ты', 'You')} />
        <path d="M210 222 L210 196" stroke="#059669" strokeWidth="3" strokeDasharray="4 4" markerEnd="url(#rbG)" fill="none" />
      </svg>
    </Frame>
  );
}

export function SceneObstacle({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Ümberpõige: veendu, et tagant ei tule sõidukit', 'Объезд: убедись, что сзади никого нет', 'Overtaking an obstacle: check traffic behind first')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <defs>
          <ArrowDef id="obG" color="#059669" />
        </defs>
        <rect width="420" height="280" fill="#9ccc65" />
        <rect x="80" y="0" width="200" height="280" fill="#546e7a" />
        <line x1="180" y1="0" x2="180" y2="280" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 8" />
        <rect x="230" y="110" width="36" height="50" rx="4" fill="#f59e0b" />
        <text x="248" y="140" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="800">
          {t(lang, 'Auk', 'Яма', 'Hole')}
        </text>
        <BikeTop x={248} y={210} rot={0} you />
        <path d="M248 190 C248 160 150 160 150 110" fill="none" stroke="#059669" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#obG)" />
        <CarTop x={130} y={50} rot={180} color="#ef4444" />
      </svg>
    </Frame>
  );
}

export function SceneBusStop({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Asulas: bussile, kes väljub peatusest, tuleb teed anda', 'В городе уступи автобусу, выезжающему из остановки', 'In town, give way to a bus leaving the stop')}>
      <svg viewBox="0 0 420 280" className="w-full h-auto" aria-hidden>
        <defs>
          <ArrowDef id="bsR" color="#f59e0b" />
        </defs>
        <rect width="420" height="280" fill="#9ccc65" />
        <rect x="0" y="80" width="420" height="100" fill="#546e7a" />
        <line x1="0" y1="130" x2="420" y2="130" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 8" />
        <rect x="280" y="40" width="90" height="40" rx="6" fill="#1565c0" />
        <text x="325" y="66" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800">
          BUS
        </text>
        <rect x="250" y="88" width="70" height="28" rx="6" fill="#f59e0b" />
        <path d="M250 102 L200 102" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#bsR)" fill="none" />
        <BikeTop x={80} y={154} rot={90} you label={t(lang, 'Sina', 'Ты', 'You')} />
      </svg>
    </Frame>
  );
}

export function ScenePhoneBan({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Käes hoitav telefon sõidu ajal on keelatud', 'Телефон в руке во время езды запрещён', 'Handheld phone while riding is forbidden')}>
      <svg viewBox="0 0 420 260" className="w-full h-auto" aria-hidden>
        <rect width="420" height="260" fill="#fee2e2" />
        <g transform="translate(80 50)">
          <circle cx="40" cy="120" r="22" fill="none" stroke="#0f172a" strokeWidth="5" />
          <circle cx="140" cy="120" r="22" fill="none" stroke="#0f172a" strokeWidth="5" />
          <path d="M40 120 L78 120 L108 64 L58 64 Z" fill="none" stroke="#64748b" strokeWidth="5" />
          <circle cx="90" cy="40" r="12" fill="#f59e0b" />
          <rect x="118" y="18" width="22" height="36" rx="4" fill="#0f172a" />
          <rect x="122" y="24" width="14" height="22" fill="#38bdf8" />
        </g>
        <circle cx="320" cy="110" r="48" fill="none" stroke="#dc2626" strokeWidth="10" />
        <line x1="286" y1="76" x2="354" y2="144" stroke="#dc2626" strokeWidth="10" strokeLinecap="round" />
      </svg>
    </Frame>
  );
}

export function SceneChildSeat({ lang }: SceneProps) {
  return (
    <Frame caption={t(lang, 'Lapseistmel last vedades tohid sõita ka kõnniteel', 'С ребёнком в кресле можно ехать по тротуару', 'With a child in a seat you may use the sidewalk')}>
      <svg viewBox="0 0 420 260" className="w-full h-auto" aria-hidden>
        <rect width="420" height="260" fill="#e0f2fe" />
        <rect x="0" y="180" width="420" height="80" fill="#9ccc65" />
        <g transform="translate(110 40)">
          <circle cx="40" cy="120" r="22" fill="none" stroke="#0f172a" strokeWidth="5" />
          <circle cx="150" cy="120" r="22" fill="none" stroke="#0f172a" strokeWidth="5" />
          <path d="M40 120 L84 120 L118 66 L62 66 Z" fill="none" stroke="#059669" strokeWidth="5" />
          <circle cx="100" cy="40" r="12" fill="#f59e0b" />
          <path d="M88 34 Q100 24 112 34" fill="#16a34a" />
          <rect x="48" y="70" width="22" height="20" rx="4" fill="#38bdf8" />
          <circle cx="59" cy="62" r="7" fill="#fde68a" />
          <path d="M50 58 Q59 50 68 58" fill="#16a34a" />
        </g>
      </svg>
    </Frame>
  );
}

export function SceneNightRiding({ lang }: SceneProps) {
  return <SceneLights lang={lang} />;
}

const SCENE_MAP: Record<string, React.FC<SceneProps>> = {
  driveway_exit: SceneDrivewayExit,
  shoulder_entry: SceneShoulderEntry,
  road_right_edge: SceneRoadRightEdge,
  sidewalk_rules: SceneSidewalkRules,
  left_turn_stages: SceneLeftTurnStages,
  hand_signals: SceneHandSignals,
  car_door_zone: SceneCarDoorZone,
  equal_intersection: SceneEqualIntersection,
  traffic_lights_turn: SceneTrafficLightsTurn,
  traffic_officer_side: SceneTrafficOfficer,
  crosswalk_rules: SceneCrosswalk,
  dismount_pedestrian: SceneDismount,
  lights_reflectors: SceneLights,
  reflectors_diagram: SceneReflectors,
  helmet_safety: SceneHelmet,
  bike_lane: SceneBikeLane,
  shared_path: SceneSharedPath,
  living_zone: SceneLivingZone,
  roundabout: SceneRoundabout,
  obstacle_bypass: SceneObstacle,
  bus_stop: SceneBusStop,
  phone_ban: ScenePhoneBan,
  child_seat: SceneChildSeat,
  night_riding: SceneNightRiding,
};

export function SceneIllustration({ variant, lang }: { variant: string; lang: Language }) {
  const Cmp = SCENE_MAP[variant];
  if (!Cmp) {
    return (
      <Frame caption={t(lang, 'Liiklussituatsioon', 'Дорожная ситуация', 'Traffic situation')}>
        <svg viewBox="0 0 420 200" className="w-full h-auto">
          <rect width="420" height="200" fill="#9ccc65" />
          <rect x="0" y="70" width="420" height="60" fill="#546e7a" />
          <BikeTop x={210} y={100} rot={90} you />
        </svg>
      </Frame>
    );
  }
  return <Cmp lang={lang} />;
}

export { BikeTop, CarTop, Pedestrian };
