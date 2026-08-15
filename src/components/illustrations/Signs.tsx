import React from 'react';

interface SignProps {
  className?: string;
}

function Plate({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className || 'w-28 h-28'} aria-hidden>
      <defs>
        <filter id="signShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0f172a" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#signShadow)">{children}</g>
    </svg>
  );
}

function BikePictogram({ cx, cy, scale = 1, color = '#fff' }: { cx: number; cy: number; scale?: number; color?: string }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
      <circle cx="-16" cy="8" r="9" fill="none" stroke={color} strokeWidth="3.2" />
      <circle cx="16" cy="8" r="9" fill="none" stroke={color} strokeWidth="3.2" />
      <path
        d="M-16 8 L-2 8 L8 -10 L16 8 M-2 8 L-8 -10 L-16 -10 M8 -10 L16 -16 L10 -18"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="-8" cy="-16" r="3.2" fill={color} />
    </g>
  );
}

function PedPictogram({ cx, cy, scale = 1, color = '#fff' }: { cx: number; cy: number; scale?: number; color?: string }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`} stroke={color} fill={color} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="0" cy="-16" r="5" strokeWidth="0" />
      <path d="M0 -10 L0 4 M-9 -4 L9 -6 M0 4 L-8 18 M0 4 L8 18" fill="none" strokeWidth="3.2" />
    </g>
  );
}

export function Sign221({ className }: SignProps) {
  return (
    <Plate className={className}>
      <polygon points="60,108 8,16 112,16" fill="#facc15" stroke="#dc2626" strokeWidth="10" strokeLinejoin="round" />
    </Plate>
  );
}

export function Sign222({ className }: SignProps) {
  return (
    <Plate className={className}>
      <polygon points="38,8 82,8 112,38 112,82 82,112 38,112 8,82 8,38" fill="#dc2626" stroke="#fff" strokeWidth="5" />
      <text x="60" y="70" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="800" fontFamily="Arial, sans-serif">
        STOP
      </text>
    </Plate>
  );
}

export function Sign211({ className }: SignProps) {
  return (
    <Plate className={className}>
      <rect x="22" y="22" width="76" height="76" transform="rotate(45 60 60)" fill="#fff" />
      <rect x="28" y="28" width="64" height="64" transform="rotate(45 60 60)" fill="#eab308" />
    </Plate>
  );
}

export function Sign212({ className }: SignProps) {
  return (
    <Plate className={className}>
      <rect x="22" y="22" width="76" height="76" transform="rotate(45 60 60)" fill="#fff" />
      <rect x="28" y="28" width="64" height="64" transform="rotate(45 60 60)" fill="#eab308" />
      <line x1="28" y1="28" x2="92" y2="92" stroke="#0f172a" strokeWidth="8" />
    </Plate>
  );
}

export function Sign431({ className }: SignProps) {
  return (
    <Plate className={className}>
      <circle cx="60" cy="60" r="50" fill="#0284c7" stroke="#fff" strokeWidth="4" />
      <BikePictogram cx={60} cy={64} scale={1.05} />
    </Plate>
  );
}

export function Sign432({ className }: SignProps) {
  return (
    <Plate className={className}>
      <circle cx="60" cy="60" r="50" fill="#0284c7" stroke="#fff" strokeWidth="4" />
      <PedPictogram cx={60} cy={68} scale={1.15} />
    </Plate>
  );
}

export function Sign433({ className }: SignProps) {
  return (
    <Plate className={className}>
      <circle cx="60" cy="60" r="50" fill="#0284c7" stroke="#fff" strokeWidth="4" />
      <PedPictogram cx={60} cy={38} scale={0.72} />
      <line x1="22" y1="60" x2="98" y2="60" stroke="#fff" strokeWidth="3" />
      <BikePictogram cx={60} cy={86} scale={0.72} />
    </Plate>
  );
}

export function Sign434({ className }: SignProps) {
  return (
    <Plate className={className}>
      <circle cx="60" cy="60" r="50" fill="#0284c7" stroke="#fff" strokeWidth="4" />
      <line x1="60" y1="14" x2="60" y2="106" stroke="#fff" strokeWidth="3" />
      <PedPictogram cx={36} cy={68} scale={0.78} />
      <BikePictogram cx={86} cy={68} scale={0.62} />
    </Plate>
  );
}

export function Sign313a({ className }: SignProps) {
  return (
    <Plate className={className}>
      <circle cx="60" cy="60" r="50" fill="#fff" stroke="#dc2626" strokeWidth="10" />
      <g opacity="0.92">
        <BikePictogram cx={60} cy={64} scale={0.92} color="#0f172a" />
      </g>
      <line x1="28" y1="28" x2="92" y2="92" stroke="#dc2626" strokeWidth="10" strokeLinecap="round" />
    </Plate>
  );
}

export function Sign351({ className }: SignProps) {
  return (
    <Plate className={className}>
      <circle cx="60" cy="60" r="50" fill="#dc2626" stroke="#fff" strokeWidth="4" />
      <rect x="22" y="52" width="76" height="16" rx="2" fill="#fff" />
    </Plate>
  );
}

export function Sign331({ className }: SignProps) {
  return (
    <Plate className={className}>
      <circle cx="60" cy="60" r="50" fill="#fff" stroke="#dc2626" strokeWidth="10" />
      <text x="60" y="72" textAnchor="middle" fill="#0f172a" fontSize="42" fontWeight="800" fontFamily="Arial, sans-serif">
        20
      </text>
    </Plate>
  );
}

export function Sign132({ className }: SignProps) {
  return (
    <Plate className={className}>
      <polygon points="60,10 112,102 8,102" fill="#facc15" stroke="#dc2626" strokeWidth="8" strokeLinejoin="round" />
      <BikePictogram cx={60} cy={72} scale={0.78} color="#0f172a" />
    </Plate>
  );
}

export function Sign151({ className }: SignProps) {
  return (
    <Plate className={className}>
      <polygon points="60,10 112,102 8,102" fill="#facc15" stroke="#dc2626" strokeWidth="8" strokeLinejoin="round" />
      <g transform="translate(44 68) scale(0.7)" fill="#0f172a" stroke="#0f172a" strokeLinecap="round">
        <circle cx="0" cy="-16" r="5" />
        <path d="M0 -10 L0 6 M-8 -2 L8 -4 M0 6 L-7 20 M0 6 L8 20" fill="none" strokeWidth="3.2" />
        <circle cx="22" cy="-12" r="4" />
        <path d="M22 -7 L22 8 M16 0 L28 -1 M22 8 L16 20 M22 8 L28 20" fill="none" strokeWidth="2.8" />
      </g>
    </Plate>
  );
}

export function Sign543({ className }: SignProps) {
  return (
    <Plate className={className}>
      <rect x="8" y="8" width="104" height="104" rx="10" fill="#0284c7" />
      <polygon points="60,20 18,96 102,96" fill="#fff" />
      <g fill="#0284c7">
        <rect x="36" y="78" width="48" height="5" />
        <rect x="42" y="68" width="36" height="5" />
        <rect x="48" y="58" width="24" height="5" />
      </g>
      <g transform="translate(60 48)" fill="#0284c7" stroke="#0284c7" strokeLinecap="round">
        <circle cx="0" cy="-10" r="4.2" strokeWidth="0" />
        <path d="M0 -5 L0 8 M-8 1 L8 0 M0 8 L-6 20 M0 8 L7 20" fill="none" strokeWidth="3" />
      </g>
    </Plate>
  );
}

export function Sign573({ className }: SignProps) {
  return (
    <Plate className={className}>
      <rect x="8" y="8" width="104" height="104" rx="10" fill="#0284c7" />
      <g fill="#fff">
        <polygon points="88,22 70,38 106,38" />
        <rect x="74" y="38" width="28" height="18" />
        <rect x="16" y="62" width="38" height="14" rx="4" />
        <circle cx="26" cy="78" r="5" fill="#0284c7" />
        <circle cx="44" cy="78" r="5" fill="#0284c7" />
        <circle cx="68" cy="70" r="4" />
        <path d="M68 75 L68 90 M62 80 L74 80 M68 90 L62 100 M68 90 L75 100" fill="none" stroke="#fff" strokeWidth="2.4" />
        <circle cx="86" cy="96" r="4" fill="#ef4444" />
      </g>
    </Plate>
  );
}

export function Sign574({ className }: SignProps) {
  return (
    <Plate className={className}>
      <rect x="8" y="8" width="104" height="104" rx="10" fill="#0284c7" />
      <g fill="#fff">
        <polygon points="88,22 70,38 106,38" />
        <rect x="74" y="38" width="28" height="18" />
        <rect x="16" y="62" width="38" height="14" rx="4" />
      </g>
      <line x1="22" y1="22" x2="98" y2="98" stroke="#0f172a" strokeWidth="10" />
      <line x1="22" y1="22" x2="98" y2="98" stroke="#fff" strokeWidth="5" />
    </Plate>
  );
}

export function Sign571({ className }: SignProps) {
  return (
    <Plate className={className}>
      <rect x="8" y="8" width="104" height="104" rx="10" fill="#0284c7" />
      <PedPictogram cx={44} cy={62} scale={1} />
      <g transform="translate(82 70)" fill="#fff">
        <polygon points="0,-18 -12,-4 12,-4" />
        <rect x="-9" y="-4" width="18" height="14" />
      </g>
    </Plate>
  );
}

export function Sign414({ className }: SignProps) {
  return (
    <Plate className={className}>
      <circle cx="60" cy="60" r="50" fill="#0284c7" stroke="#fff" strokeWidth="4" />
      <path d="M38 78 L38 42 L78 42" fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="78,28 98,42 78,56" fill="#fff" />
    </Plate>
  );
}

const SIGN_MAP: Record<string, React.FC<SignProps>> = {
  '221': Sign221,
  '222': Sign222,
  '211': Sign211,
  '212': Sign212,
  '431': Sign431,
  '432': Sign432,
  '433': Sign433,
  '434': Sign434,
  '313a': Sign313a,
  '351': Sign351,
  '331': Sign331,
  '132': Sign132,
  '151': Sign151,
  '543': Sign543,
  '573': Sign573,
  '574': Sign574,
  '571': Sign571,
  '414': Sign414,
};

export function TrafficSignSvg({ code, className }: { code: string; className?: string }) {
  const Cmp = SIGN_MAP[code];
  if (!Cmp) {
    return (
      <Plate className={className}>
        <circle cx="60" cy="60" r="50" fill="#e2e8f0" />
        <text x="60" y="66" textAnchor="middle" fontSize="16" fill="#64748b">
          {code}
        </text>
      </Plate>
    );
  }
  return <Cmp className={className} />;
}

export const ALL_SIGN_CODES = Object.keys(SIGN_MAP);
