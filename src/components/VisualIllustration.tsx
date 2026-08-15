import React from 'react';
import { VisualData, Language } from '@/types';

interface VisualIllustrationProps {
  visual: VisualData;
  lang: Language;
}

export const VisualIllustration: React.FC<VisualIllustrationProps> = ({ visual, lang }) => {
  if (visual.type === 'none') return null;

  // Render traffic sign if visual.type is 'sign' or signCode provided
  if (visual.type === 'sign' || visual.signCode) {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="w-32 h-32 flex items-center justify-center drop-shadow-md">
          {visual.signCode === '221' && (
            // Upside-down triangle (Give way)
            <svg viewBox="0 0 100 100" className="w-28 h-28">
              <polygon points="10,15 90,15 50,85" fill="#fef08a" stroke="#dc2626" strokeWidth="9" strokeLinejoin="round" />
            </svg>
          )}

          {visual.signCode === '222' && (
            // Octagon STOP
            <svg viewBox="0 0 100 100" className="w-28 h-28">
              <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#dc2626" stroke="#ffffff" strokeWidth="4" />
              <text x="50" y="58" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="sans-serif">STOP</text>
            </svg>
          )}

          {visual.signCode === '211' && (
            // Yellow diamond (Priority road)
            <svg viewBox="0 0 100 100" className="w-28 h-28">
              <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" fill="#facc15" stroke="#ffffff" strokeWidth="5" />
              <rect x="28" y="28" width="44" height="44" transform="rotate(45 50 50)" fill="#eab308" />
            </svg>
          )}

          {visual.signCode === '431' && (
            // Round blue (Bike path)
            <svg viewBox="0 0 100 100" className="w-28 h-28">
              <circle cx="50" cy="50" r="45" fill="#0284c7" stroke="#ffffff" strokeWidth="3" />
              {/* Bike icon */}
              <circle cx="33" cy="62" r="12" fill="none" stroke="#ffffff" strokeWidth="3" />
              <circle cx="67" cy="62" r="12" fill="none" stroke="#ffffff" strokeWidth="3" />
              <path d="M33 62 L48 62 L58 45 L67 62 M48 62 L42 45 L35 45 M58 45 L65 40 L60 38" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="42" cy="40" r="3" fill="#ffffff" />
            </svg>
          )}

          {visual.signCode === '433' && (
            // Round blue (Shared bike & pedestrian)
            <svg viewBox="0 0 100 100" className="w-28 h-28">
              <circle cx="50" cy="50" r="45" fill="#0284c7" stroke="#ffffff" strokeWidth="3" />
              {/* Pedestrian on top */}
              <circle cx="50" cy="25" r="4" fill="#ffffff" />
              <path d="M50 30 L50 42 M44 34 L56 34 M50 42 L43 52 M50 42 L57 52" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              {/* Separator */}
              <line x1="20" y1="56" x2="80" y2="56" stroke="#ffffff" strokeWidth="2" />
              {/* Bike at bottom */}
              <circle cx="35" cy="74" r="8" fill="none" stroke="#ffffff" strokeWidth="2" />
              <circle cx="65" cy="74" r="8" fill="none" stroke="#ffffff" strokeWidth="2" />
              <path d="M35 74 L48 74 L55 64 L65 74 M48 74 L44 64" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}

          {visual.signCode === '313a' && (
            // Round red prohibition (No bikes)
            <svg viewBox="0 0 100 100" className="w-28 h-28">
              <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#dc2626" strokeWidth="8" />
              <circle cx="33" cy="55" r="10" fill="none" stroke="#1e293b" strokeWidth="2.5" />
              <circle cx="67" cy="55" r="10" fill="none" stroke="#1e293b" strokeWidth="2.5" />
              <path d="M33 55 L48 55 L56 42 L67 55 M48 55 L43 42 L38 42 M56 42 L62 38" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}

          {visual.signCode === '543' && (
            // Blue square (Crosswalk)
            <svg viewBox="0 0 100 100" className="w-28 h-28">
              <rect x="5" y="5" width="90" height="90" rx="8" fill="#0284c7" />
              <polygon points="50,15 15,80 85,80" fill="#ffffff" />
              {/* Zebra stripes */}
              <line x1="26" y1="74" x2="74" y2="74" stroke="#0284c7" strokeWidth="3" />
              <line x1="33" y1="68" x2="67" y2="68" stroke="#0284c7" strokeWidth="3" />
              <line x1="40" y1="62" x2="60" y2="62" stroke="#0284c7" strokeWidth="3" />
              {/* Walking person */}
              <circle cx="50" cy="34" r="4" fill="#0284c7" />
              <path d="M50 40 L50 54 M42 46 L58 44 M50 54 L44 65 M50 54 L56 65" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}

          {visual.signCode === '573' && (
            // Blue square living zone
            <svg viewBox="0 0 100 100" className="w-28 h-28">
              <rect x="5" y="5" width="90" height="90" rx="8" fill="#0284c7" />
              {/* House */}
              <polygon points="75,25 60,38 90,38" fill="#ffffff" />
              <rect x="63" y="38" width="24" height="20" fill="#ffffff" />
              {/* Car */}
              <rect x="15" y="55" width="30" height="12" rx="3" fill="#ffffff" />
              <circle cx="22" cy="67" r="4" fill="#0284c7" />
              <circle cx="38" cy="67" r="4" fill="#0284c7" />
              {/* Child & ball */}
              <circle cx="56" cy="62" r="3" fill="#ffffff" />
              <line x1="56" y1="65" x2="56" y2="76" stroke="#ffffff" strokeWidth="2" />
              <circle cx="68" cy="74" r="3" fill="#ef4444" />
            </svg>
          )}
        </div>
        {visual.signName && (
          <span className="mt-2 text-xs font-medium text-slate-700 dark:text-slate-300 text-center">
            {visual.signName[lang]}
          </span>
        )}
      </div>
    );
  }

  // Render SVG situation diagrams
  return (
    <div className="w-full flex flex-col items-center justify-center p-3 sm:p-5 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden text-white">
      {visual.svgVariant === 'equal_intersection' && (
        <svg viewBox="0 0 300 200" className="w-full max-w-sm h-48">
          {/* Background asphalt roads */}
          <rect x="0" y="70" width="300" height="60" fill="#334155" />
          <rect x="120" y="0" width="60" height="200" fill="#334155" />
          {/* Road centerlines */}
          <line x1="0" y1="100" x2="110" y2="100" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="190" y1="100" x2="300" y2="100" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="150" y1="0" x2="150" y2="60" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="150" y1="140" x2="150" y2="200" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6 6" />
          
          {/* Bicycle coming from bottom going straight */}
          <g transform="translate(160, 160)">
            <circle cx="0" cy="0" r="8" fill="#10b981" />
            <text x="0" y="3" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">🚴</text>
            <text x="14" y="3" fill="#10b981" fontSize="11" fontWeight="bold">Sina (You)</text>
          </g>
          <path d="M160 150 L160 90" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-green)" />

          {/* Car coming from the right */}
          <g transform="translate(240, 85)">
            <rect x="0" y="0" width="28" height="15" rx="3" fill="#ef4444" />
            <text x="14" y="11" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">🚗 Auto</text>
          </g>
          <path d="M230 92 L180 92" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-red)" />

          {/* Text alert */}
          <rect x="10" y="10" width="100" height="36" rx="4" fill="#0f172a" opacity="0.8" />
          <text x="16" y="24" fill="#38bdf8" fontSize="10" fontWeight="bold">Samaliigiline</text>
          <text x="16" y="38" fill="#cbd5e1" fontSize="9">Parema käe reegel</text>

          <defs>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
            </marker>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
            </marker>
          </defs>
        </svg>
      )}

      {visual.svgVariant === 'crosswalk_rules' && (
        <svg viewBox="0 0 300 200" className="w-full max-w-sm h-48">
          {/* Main road */}
          <rect x="0" y="40" width="300" height="120" fill="#334155" />
          <line x1="0" y1="100" x2="300" y2="100" stroke="#f8fafc" strokeWidth="2" strokeDasharray="8 8" />

          {/* Zebra stripes */}
          <g fill="#ffffff">
            <rect x="130" y="45" width="8" height="20" />
            <rect x="130" y="70" width="8" height="20" />
            <rect x="130" y="95" width="8" height="20" />
            <rect x="130" y="120" width="8" height="20" />
            <rect x="145" y="45" width="8" height="20" />
            <rect x="145" y="70" width="8" height="20" />
            <rect x="145" y="95" width="8" height="20" />
            <rect x="145" y="120" width="8" height="20" />
          </g>

          {/* Sidewalk */}
          <rect x="0" y="0" width="300" height="40" fill="#64748b" />
          <rect x="0" y="160" width="300" height="40" fill="#64748b" />

          {/* Cyclist on zebra crossing */}
          <g transform="translate(141, 175)">
            <circle cx="0" cy="0" r="8" fill="#3b82f6" />
            <text x="0" y="3" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">🚴</text>
          </g>
          <path d="M141 165 L141 65" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="3 3" />

          {/* Approaching car */}
          <g transform="translate(40, 115)">
            <rect x="0" y="0" width="36" height="20" rx="3" fill="#f43f5e" />
            <text x="18" y="14" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">🚗 Auto</text>
          </g>
          <line x1="80" y1="125" x2="115" y2="125" stroke="#f43f5e" strokeWidth="2" />

          {/* Priority badge */}
          <rect x="175" y="8" width="115" height="28" rx="4" fill="#0f172a" />
          <text x="182" y="24" fill="#f87171" fontSize="9" fontWeight="bold">⚠️ Ratturil pole eesõigust!</text>
        </svg>
      )}

      {visual.svgVariant === 'traffic_lights_turn' && (
        <svg viewBox="0 0 300 200" className="w-full max-w-sm h-48">
          <rect x="0" y="60" width="300" height="80" fill="#334155" />
          <rect x="110" y="0" width="80" height="200" fill="#334155" />

          {/* Green traffic light */}
          <g transform="translate(85, 20)">
            <rect x="0" y="0" width="14" height="32" rx="3" fill="#0f172a" />
            <circle cx="7" cy="8" r="3" fill="#475569" />
            <circle cx="7" cy="16" r="3" fill="#475569" />
            <circle cx="7" cy="24" r="4" fill="#22c55e" />
          </g>

          {/* Cyclist going straight */}
          <g transform="translate(160, 170)">
            <circle cx="0" cy="0" r="7" fill="#22c55e" />
            <text x="0" y="3" textAnchor="middle" fill="#ffffff" fontSize="8">🚴</text>
          </g>
          <line x1="160" y1="160" x2="160" y2="40" stroke="#22c55e" strokeWidth="2.5" strokeDasharray="4 4" />

          {/* Oncoming car turning left */}
          <g transform="translate(130, 25)">
            <rect x="0" y="0" width="22" height="16" rx="3" fill="#ef4444" />
            <text x="11" y="11" textAnchor="middle" fill="#ffffff" fontSize="8">🚗</text>
          </g>
          <path d="M141 45 L141 90 Q141 105 70 105" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 4" />

          <rect x="10" y="160" width="110" height="30" rx="4" fill="#0f172a" />
          <text x="16" y="178" fill="#22c55e" fontSize="9" fontWeight="bold">Ratturil on eesõigus</text>
        </svg>
      )}

      {visual.svgVariant === 'left_turn_stages' && (
        <svg viewBox="0 0 300 200" className="w-full max-w-sm h-48">
          <rect x="0" y="60" width="300" height="80" fill="#334155" />
          <rect x="110" y="0" width="80" height="200" fill="#334155" />

          {/* Direct left dangerous turn (X) */}
          <path d="M165 170 Q165 100 50 100" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
          <text x="110" y="115" fill="#ef4444" fontSize="14" fontWeight="bold">✕</text>

          {/* Safe 2-stage path (Checkmark) */}
          <path d="M175 170 L175 55 L40 55" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4 4" />
          <circle cx="175" cy="55" r="4" fill="#10b981" />
          <text x="185" y="58" fill="#10b981" fontSize="9" fontWeight="bold">1. Peatu & vaata</text>

          <rect x="10" y="10" width="95" height="30" rx="4" fill="#0f172a" />
          <text x="16" y="24" fill="#10b981" fontSize="9" fontWeight="bold">Ohutu vasakpööre</text>
          <text x="16" y="34" fill="#94a3b8" fontSize="8">2-etapiline manööver</text>
        </svg>
      )}

      {(!visual.svgVariant || ['driveway_exit', 'shoulder_entry', 'road_right_edge', 'sidewalk_rules', 'hand_signals', 'car_door_zone', 'traffic_officer_side', 'dismount_pedestrian', 'lights_reflectors', 'reflectors_diagram', 'helmet_safety'].includes(visual.svgVariant)) && (
        <div className="flex flex-col items-center justify-center py-4 text-center">
          <div className="text-4xl mb-2">
            {visual.svgVariant === 'helmet_safety' && '⛑️'}
            {visual.svgVariant === 'lights_reflectors' && '💡'}
            {visual.svgVariant === 'reflectors_diagram' && '✨'}
            {visual.svgVariant === 'hand_signals' && '🙋‍♂️'}
            {visual.svgVariant === 'car_door_zone' && '🚪🚗'}
            {visual.svgVariant === 'dismount_pedestrian' && '🚶‍♂️🚲'}
            {visual.svgVariant === 'shoulder_entry' && '🛣️'}
            {visual.svgVariant === 'driveway_exit' && '🏡🚗'}
            {visual.svgVariant === 'road_right_edge' && '🚲➡️'}
            {visual.svgVariant === 'sidewalk_rules' && '🚶🚲'}
            {visual.svgVariant === 'traffic_officer_side' && '👮'}
          </div>
          <span className="text-xs text-slate-300 font-medium max-w-xs">
            {visual.svgVariant === 'helmet_safety' && (lang === 'et' ? 'Kiiver on alla 16-aastastele kohustuslik' : lang === 'ru' ? 'Шлем обязателен для лиц младше 16 лет' : 'Helmet is mandatory under 16')}
            {visual.svgVariant === 'lights_reflectors' && (lang === 'et' ? 'Valge tuli ees, punane taga pimedal ajal' : lang === 'ru' ? 'Белая фара спереди, красная сзади в темноте' : 'White front light, red rear light in the dark')}
            {visual.svgVariant === 'hand_signals' && (lang === 'et' ? 'Suunamärguanne käega enne pööret' : lang === 'ru' ? 'Сигнал рукой заблаговременно до маневра' : 'Hand signal well in advance')}
            {visual.svgVariant === 'car_door_zone' && (lang === 'et' ? 'Hoidu ohutusse kaugusse pargitud autode ustest' : lang === 'ru' ? 'Держите безопасный интервал от дверей машин' : 'Keep clear of opening car doors')}
            {visual.svgVariant === 'dismount_pedestrian' && (lang === 'et' ? 'Käekõrval ratast lükates oled jalakäija' : lang === 'ru' ? 'Пешком с велосипедом вы имеете права пешехода' : 'Walking your bike makes you a pedestrian')}
          </span>
        </div>
      )}
    </div>
  );
};
