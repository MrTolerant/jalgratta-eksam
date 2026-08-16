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
