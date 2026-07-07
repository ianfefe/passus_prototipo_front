/* =========================================================================
   Doodles · rabiscos desenhados à mão (estrelas, ondinhas, corações, laços…)
   Usados como camada de fundo lúdica no site e na capa. Puramente decorativos.
   ========================================================================= */

type DoodleProps = { size?: number; color?: string; className?: string; style?: React.CSSProperties };

export function Star({ size = 24, color = "currentColor", className, style }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} style={style} aria-hidden>
      <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z" />
    </svg>
  );
}

export function Squiggle({ size = 40, color = "currentColor", className, style }: DoodleProps) {
  return (
    <svg width={size} height={size * 0.4} viewBox="0 0 50 20" fill="none" className={className} style={style} aria-hidden>
      <path d="M2 10 Q 9 0 16 10 T 30 10 T 44 10" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Heart({ size = 22, color = "currentColor", className, style }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} style={style} aria-hidden>
      <path d="M12 21s-7-4.35-9.5-8.5C.5 9 2 5.5 5.5 5.5c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3C21 5.5 22.5 9 21.5 12.5 19 16.65 12 21 12 21z" />
    </svg>
  );
}

export function Loop({ size = 30, color = "currentColor", className, style }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" className={className} style={style} aria-hidden>
      <circle cx="15" cy="15" r="11" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 6" />
    </svg>
  );
}

export function Sparkle({ size = 20, color = "currentColor", className, style }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" className={className} style={style} aria-hidden>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    </svg>
  );
}

export function Spiral({ size = 28, color = "currentColor", className, style }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" className={className} style={style} aria-hidden>
      <path d="M15 15 m0 0 a3 3 0 1 1 3 3 a6 6 0 1 1 -7-6 a9 9 0 1 1 10 9" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

type Item = {
  shape: "star" | "squiggle" | "heart" | "loop" | "sparkle" | "spiral";
  top: string;
  left: string;
  size: number;
  color: string;
  rotate?: number;
  opacity?: number;
  anim?: "twinkle" | "sway" | "bob" | "";
  delay?: number;
};

const SHAPES = { star: Star, squiggle: Squiggle, heart: Heart, loop: Loop, sparkle: Sparkle, spiral: Spiral };

/* Espalhado pelo fundo do site inteiro (colocar dentro de um container relativo). */
const SITE_DOODLES: Item[] = [
  { shape: "star", top: "6%", left: "4%", size: 26, color: "var(--sunny-yellow)", anim: "twinkle", delay: 0 },
  { shape: "squiggle", top: "12%", left: "88%", size: 46, color: "var(--sky)", rotate: -8, anim: "sway", delay: 0.4 },
  { shape: "loop", top: "24%", left: "20%", size: 30, color: "var(--coral)", anim: "bob", delay: 0.8 },
  { shape: "spiral", top: "38%", left: "92%", size: 30, color: "var(--coral)", rotate: 12, anim: "sway", delay: 0.2 },
  { shape: "heart", top: "46%", left: "6%", size: 22, color: "var(--coral)", anim: "bob", delay: 1 },
  { shape: "sparkle", top: "55%", left: "82%", size: 22, color: "var(--sunny-yellow)", anim: "twinkle", delay: 0.6 },
  { shape: "star", top: "64%", left: "14%", size: 20, color: "var(--sky)", anim: "twinkle", delay: 1.2 },
  { shape: "squiggle", top: "72%", left: "90%", size: 42, color: "var(--coral)", rotate: 10, anim: "sway", delay: 0.3 },
  { shape: "loop", top: "80%", left: "8%", size: 26, color: "var(--sunny-yellow)", anim: "bob", delay: 0.9 },
  { shape: "sparkle", top: "88%", left: "78%", size: 20, color: "var(--sky)", anim: "twinkle", delay: 0.5 },
  { shape: "heart", top: "33%", left: "50%", size: 16, color: "var(--sky)", anim: "bob", delay: 1.4 },
  { shape: "star", top: "94%", left: "40%", size: 18, color: "var(--coral)", anim: "twinkle", delay: 0.7 },
];

/* --------------------------------------------------------------------------
   Doodles CAINDO do topo ao rodapé (camada ambiente, tipo "neve" de rabiscos).
   Camada fixa na viewport, atrás do conteúdo. Compositor-friendly (só transform).
-------------------------------------------------------------------------- */
type FallItem = {
  shape: Item["shape"];
  left: string;
  size: number;
  color: string;
  dur: number;   // duração da queda (s)
  delay: number; // atraso negativo distribui pela tela
  drift: number; // deslocamento horizontal (px)
  spin: number;  // rotação total (deg)
};

const FALLING: FallItem[] = [
  { shape: "star",     left: "4%",  size: 22, color: "var(--sunny-yellow)", dur: 17, delay: -2,  drift: 30,  spin: 300 },
  { shape: "heart",    left: "11%", size: 20, color: "var(--coral)",        dur: 21, delay: -9,  drift: -24, spin: 220 },
  { shape: "squiggle", left: "18%", size: 40, color: "var(--sky)",          dur: 19, delay: -14, drift: 40,  spin: 180 },
  { shape: "loop",     left: "26%", size: 26, color: "var(--coral)",        dur: 24, delay: -5,  drift: -34, spin: 260 },
  { shape: "sparkle",  left: "33%", size: 20, color: "var(--sky)",          dur: 15, delay: -11, drift: 20,  spin: 340 },
  { shape: "star",     left: "41%", size: 16, color: "var(--coral)",        dur: 22, delay: -18, drift: -18, spin: 300 },
  { shape: "spiral",   left: "49%", size: 28, color: "var(--sunny-yellow)", dur: 20, delay: -3,  drift: 34,  spin: 280 },
  { shape: "heart",    left: "57%", size: 18, color: "var(--sky)",          dur: 18, delay: -13, drift: -28, spin: 200 },
  { shape: "squiggle", left: "64%", size: 44, color: "var(--coral)",        dur: 23, delay: -7,  drift: 26,  spin: 160 },
  { shape: "sparkle",  left: "72%", size: 22, color: "var(--sunny-yellow)", dur: 16, delay: -16, drift: -20, spin: 340 },
  { shape: "star",     left: "80%", size: 24, color: "var(--sky)",          dur: 21, delay: -1,  drift: 32,  spin: 300 },
  { shape: "loop",     left: "87%", size: 24, color: "var(--coral)",        dur: 19, delay: -12, drift: -30, spin: 240 },
  { shape: "heart",    left: "93%", size: 22, color: "var(--coral)",        dur: 25, delay: -6,  drift: 22,  spin: 220 },
  { shape: "star",     left: "96%", size: 14, color: "var(--sunny-yellow)", dur: 17, delay: -20, drift: -16, spin: 300 },
  // segunda leva, intercalada, para um "cair" mais contínuo e completo
  { shape: "sparkle",  left: "8%",  size: 18, color: "var(--coral)",        dur: 20, delay: -10, drift: 24,  spin: 320 },
  { shape: "star",     left: "22%", size: 14, color: "var(--sky)",          dur: 26, delay: -22, drift: -20, spin: 300 },
  { shape: "heart",    left: "37%", size: 16, color: "var(--coral)",        dur: 18, delay: -6,  drift: 18,  spin: 210 },
  { shape: "loop",     left: "53%", size: 20, color: "var(--sky)",          dur: 23, delay: -15, drift: -26, spin: 250 },
  { shape: "star",     left: "68%", size: 20, color: "var(--sunny-yellow)", dur: 21, delay: -4,  drift: 28,  spin: 300 },
  { shape: "sparkle",  left: "84%", size: 16, color: "var(--coral)",        dur: 19, delay: -17, drift: -22, spin: 340 },
  { shape: "spiral",   left: "90%", size: 22, color: "var(--sky)",          dur: 24, delay: -8,  drift: 20,  spin: 280 },
];

export function FallingDoodles({ opacity = 0.34 }: { opacity?: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" style={{ opacity }} aria-hidden>
      {FALLING.map((d, i) => {
        const Shape = SHAPES[d.shape];
        return (
          <span
            key={i}
            className="falling absolute top-0"
            style={{
              left: d.left,
              ["--dur" as string]: `${d.dur}s`,
              ["--delay" as string]: `${d.delay}s`,
              ["--drift" as string]: `${d.drift}px`,
              ["--spin" as string]: `${d.spin}deg`,
            }}
          >
            <Shape size={d.size} color={d.color} />
          </span>
        );
      })}
    </div>
  );
}

export function DoodleField({
  items = SITE_DOODLES,
  opacity = 0.4,
  animate = true,
  className = "",
}: {
  items?: Item[];
  opacity?: number;
  animate?: boolean;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} style={{ opacity }} aria-hidden>
      {items.map((d, i) => {
        const Shape = SHAPES[d.shape];
        const anim = animate && d.anim ? `animate-${d.anim}` : "";
        return (
          <span
            key={i}
            className={`absolute ${anim}`}
            style={{
              top: d.top,
              left: d.left,
              transform: `rotate(${d.rotate ?? 0}deg)`,
              animationDelay: `${d.delay ?? 0}s`,
              opacity: d.opacity ?? 1,
            }}
          >
            <Shape size={d.size} color={d.color} />
          </span>
        );
      })}
    </div>
  );
}
