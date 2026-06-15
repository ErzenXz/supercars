import { useId } from 'react';
import type { Gradient } from '../lib/theme';

interface Geo {
  belt: number;
  bottom: number;
  nose: number;
  tail: number;
  wheelR: number;
  frontCx: number;
  rearCx: number;
  /** greenhouse polygon points (cabin glasshouse) */
  roof: string;
  /** glass polygons, slightly inset from the greenhouse */
  glass: string[];
  bed?: boolean;
}

const BODY = 124;

const GEO: Record<string, Geo> = {
  Sedan: {
    belt: 96, bottom: BODY, nose: 26, tail: 336, wheelR: 27, frontCx: 100, rearCx: 272,
    roof: '128,96 160,60 236,60 270,96',
    glass: ['136,93 161,66 188,66 188,93', '196,93 196,66 232,66 256,93']
  },
  Hatchback: {
    belt: 96, bottom: BODY, nose: 28, tail: 302, wheelR: 27, frontCx: 96, rearCx: 250,
    roof: '126,96 150,60 224,60 248,96',
    glass: ['134,93 152,64 184,64 184,93', '192,93 192,64 222,64 242,93']
  },
  Wagon: {
    belt: 96, bottom: BODY, nose: 26, tail: 332, wheelR: 27, frontCx: 100, rearCx: 286,
    roof: '128,96 154,58 288,58 300,96',
    glass: ['136,93 156,62 184,62 184,93', '192,93 192,62 286,62 290,93']
  },
  Coupe: {
    belt: 98, bottom: BODY, nose: 26, tail: 330, wheelR: 27, frontCx: 104, rearCx: 278,
    roof: '120,98 164,64 212,64 296,98',
    glass: ['132,95 166,68 196,68 196,95', '204,95 204,68 230,68 278,95']
  },
  SUV: {
    belt: 88, bottom: BODY, nose: 30, tail: 330, wheelR: 31, frontCx: 104, rearCx: 282,
    roof: '128,88 148,52 282,52 300,88',
    glass: ['136,85 152,56 188,56 188,85', '196,85 196,56 282,56 290,85']
  },
  MPV: {
    belt: 92, bottom: BODY, nose: 24, tail: 332, wheelR: 28, frontCx: 96, rearCx: 286,
    roof: '104,92 152,50 288,50 306,92',
    glass: ['116,89 154,54 190,54 190,89', '198,89 198,54 288,54 296,89']
  },
  Convertible: {
    belt: 100, bottom: BODY, nose: 28, tail: 332, wheelR: 27, frontCx: 104, rearCx: 274,
    roof: '170,100 192,74 214,74 220,100',
    glass: ['176,97 193,76 210,76 213,97']
  },
  Van: {
    belt: 94, bottom: BODY, nose: 22, tail: 340, wheelR: 28, frontCx: 100, rearCx: 298,
    roof: '92,94 120,44 304,44 318,94',
    glass: ['104,90 122,48 168,48 168,90', '176,90 176,48 304,48 308,90']
  },
  Pickup: {
    belt: 94, bottom: BODY, nose: 26, tail: 342, wheelR: 29, frontCx: 102, rearCx: 286,
    roof: '110,94 140,56 204,56 216,94',
    glass: ['120,90 142,60 172,60 172,90', '180,90 180,60 202,60 210,90'],
    bed: true
  }
};

interface CarSilhouetteProps {
  body: string;
  colors: Gradient;
  accent: string;
  className?: string;
}

export function CarSilhouette({ body, colors, accent, className }: CarSilhouetteProps) {
  const uid = useId().replace(/:/g, '');
  const g = GEO[body] ?? GEO.Hatchback;
  const bodyGrad = `bg-${uid}`;
  const wheelGrad = `wg-${uid}`;

  const lowerBody = `M ${g.nose + 10},${g.belt}
    Q ${g.nose},${g.belt} ${g.nose},${g.belt + 12}
    L ${g.nose},${g.bottom - 10} Q ${g.nose},${g.bottom} ${g.nose + 10},${g.bottom}
    L ${g.tail - 10},${g.bottom} Q ${g.tail},${g.bottom} ${g.tail},${g.bottom - 10}
    L ${g.tail},${g.belt + 10} Q ${g.tail},${g.belt} ${g.tail - 10},${g.belt} Z`;

  const wheel = (cx: number) => (
    <g>
      <circle cx={cx} cy={g.bottom} r={g.wheelR + 5} fill={colors.b} />
      <circle cx={cx} cy={g.bottom + 18} r={g.wheelR} fill="#0a0d15" />
      <circle cx={cx} cy={g.bottom + 18} r={g.wheelR} fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="2" />
      <circle cx={cx} cy={g.bottom + 18} r={g.wheelR * 0.52} fill={`url(#${wheelGrad})`} />
      <circle cx={cx} cy={g.bottom + 18} r={g.wheelR * 0.16} fill="#0a0d15" />
    </g>
  );

  return (
    <svg
      className={className}
      viewBox="0 0 360 180"
      role="img"
      aria-label={`${body} silhouette`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={bodyGrad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={colors.a} />
          <stop offset="1" stopColor={colors.b} />
        </linearGradient>
        <radialGradient id={wheelGrad} cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#e9edf5" />
          <stop offset="1" stopColor="#5b6577" />
        </radialGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="184" cy={g.bottom + 44} rx="160" ry="13" fill="rgba(0,0,0,.42)" />

      {/* lower body */}
      <path d={lowerBody} fill={`url(#${bodyGrad})`} stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />

      {/* pickup bed wall */}
      {g.bed && (
        <path
          d={`M 220,${g.belt} L 220,${g.belt - 22} L ${g.tail - 6},${g.belt - 22} L ${g.tail - 6},${g.belt} Z`}
          fill={colors.b}
          stroke="rgba(255,255,255,.1)"
          strokeWidth="1.5"
        />
      )}

      {/* wheels (drawn before greenhouse so arch tops are masked) */}
      {wheel(g.frontCx)}
      {wheel(g.rearCx)}

      {/* greenhouse / cabin */}
      <polygon points={g.roof} fill={colors.b} stroke="rgba(255,255,255,.16)" strokeWidth="1.5" />

      {/* glass */}
      {g.glass.map((pts, i) => (
        <polygon key={i} points={pts} fill="rgba(190,225,255,.34)" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
      ))}

      {/* beltline highlight */}
      <line x1={g.nose + 8} y1={g.belt} x2={g.tail - 8} y2={g.belt} stroke="rgba(255,255,255,.22)" strokeWidth="2" />

      {/* door cut */}
      <line x1="196" y1={g.belt + 4} x2="196" y2={g.bottom - 8} stroke="rgba(0,0,0,.22)" strokeWidth="2" />
      {/* door handle */}
      <rect x="206" y={g.belt + 9} width="16" height="4" rx="2" fill="rgba(255,255,255,.3)" />

      {/* headlight */}
      <rect x={g.nose + 4} y={g.belt + 6} width="12" height="9" rx="3" fill="rgba(255,255,255,.85)" />
      {/* taillight (fuel-accent glow) */}
      <rect x={g.tail - 14} y={g.belt + 6} width="10" height="10" rx="3" fill={accent} />
      <rect x={g.tail - 14} y={g.belt + 6} width="10" height="10" rx="3" fill={accent} opacity="0.5">
        <animate attributeName="opacity" values="0.25;0.7;0.25" dur="3s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}
