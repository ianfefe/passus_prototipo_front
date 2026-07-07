import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import confetti from "canvas-confetti";
import { Sparkles, Hand } from "lucide-react";
import { Squiggle, Heart, Loop, Sparkle, Spiral } from "./Doodles";
import logoPassus from "@/assets/passus.jpg";
import meia1 from "@/assets/meia1.png";
import meia2 from "@/assets/meia2.png";
import meia3 from "@/assets/meia3.png";
import meia4 from "@/assets/meia4.png";

/* Meias que flutuam pela capa, cada uma com seu balanço e rotação. */
const floatingSocks = [
  { img: meia1, top: "12%", left: "8%", size: 120, rot: -14, anim: "animate-sway", dur: 0 },
  { img: meia2, top: "18%", right: "9%", size: 140, rot: 12, anim: "animate-bob", dur: 0.4 },
  { img: meia3, bottom: "14%", left: "12%", size: 110, rot: 8, anim: "animate-bob", dur: 0.8 },
  { img: meia4, bottom: "12%", right: "11%", size: 130, rot: -10, anim: "animate-sway", dur: 0.2 },
] as const;

/* Estrelinhas/rabiscos que piscam ao fundo. */
const doodles = [
  { top: "24%", left: "26%", s: 22, c: "var(--coral)" },
  { top: "16%", left: "62%", s: 16, c: "var(--sky)" },
  { top: "68%", left: "30%", s: 18, c: "var(--sunny-yellow)" },
  { top: "72%", left: "70%", s: 24, c: "var(--coral)" },
  { top: "40%", left: "88%", s: 14, c: "var(--sky)" },
  { top: "50%", left: "6%", s: 16, c: "var(--sunny-yellow)" },
];

export function IntroCover() {
  const [open, setOpen] = useState(true);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();

  // pequeno atraso para a animação de entrada tocar e evitar cliques acidentais
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 650);
    return () => clearTimeout(t);
  }, []);

  const enter = useCallback(() => {
    if (!ready) return;
    if (!reduce) {
      const colors = ["#F07147", "#1E3A5F", "#3B82F6", "#F5A623", "#10B981"];
      // rajada dupla de confete, saindo das laterais de baixo
      confetti({ particleCount: 90, spread: 70, origin: { x: 0.2, y: 0.9 }, angle: 60, colors, scalar: 1.1 });
      confetti({ particleCount: 90, spread: 70, origin: { x: 0.8, y: 0.9 }, angle: 120, colors, scalar: 1.1 });
      setTimeout(() => confetti({ particleCount: 60, spread: 100, origin: { y: 0.7 }, colors, scalar: 0.9 }), 180);
    }
    setOpen(false);
  }, [reduce, ready]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="intro"
          onClick={enter}
          initial={false}
          exit={{ y: "-100%", borderBottomLeftRadius: "50% 12%", borderBottomRightRadius: "50% 12%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] overflow-hidden cursor-pointer woven-bg grain flex items-center justify-center"
          role="button"
          aria-label="Entrar no site"
        >
          {/* halos quentes */}
          <div className="pointer-events-none absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-coral/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 w-[30rem] h-[30rem] rounded-full bg-sky/20 blur-3xl" />

          {/* meias flutuantes */}
          {floatingSocks.map((s, i) => (
            <motion.img
              key={i}
              src={s.img}
              alt=""
              aria-hidden
              initial={{ opacity: 0, scale: 0.5, rotate: s.rot }}
              animate={{ opacity: 1, scale: 1, rotate: s.rot }}
              transition={{ delay: 0.2 + s.dur, type: "spring", stiffness: 200, damping: 14 }}
              className={`pointer-events-none absolute rounded-[1.4rem] ring-[5px] ring-white object-cover shadow-[0_18px_30px_-12px_rgba(22,35,58,0.4)] ${reduce ? "" : s.anim}`}
              style={{
                top: (s as any).top,
                left: (s as any).left,
                right: (s as any).right,
                bottom: (s as any).bottom,
                width: s.size,
                height: s.size,
                animationDelay: `${s.dur}s`,
              }}
            />
          ))}

          {/* rabiscos/estrelas */}
          {doodles.map((d, i) => (
            <Star key={i} style={{ top: d.top, left: d.left }} size={d.s} color={d.c} reduce={!!reduce} delay={i * 0.25} />
          ))}

          {/* rabiscos extras — ondinhas, corações, laços */}
          <span className={`pointer-events-none absolute left-[18%] top-[38%] ${reduce ? "" : "animate-sway"}`} style={{ color: "var(--sky)" }} aria-hidden>
            <Squiggle size={54} />
          </span>
          <span className={`pointer-events-none absolute right-[16%] top-[46%] ${reduce ? "" : "animate-bob"}`} style={{ color: "var(--coral)" }} aria-hidden>
            <Heart size={26} />
          </span>
          <span className={`pointer-events-none absolute left-[40%] top-[14%] ${reduce ? "" : "animate-bob"}`} style={{ color: "var(--coral)", animationDelay: "0.6s" }} aria-hidden>
            <Loop size={34} />
          </span>
          <span className={`pointer-events-none absolute right-[30%] bottom-[16%] ${reduce ? "" : "animate-twinkle"}`} style={{ color: "var(--sunny-yellow)" }} aria-hidden>
            <Sparkle size={26} />
          </span>
          <span className={`pointer-events-none absolute left-[26%] bottom-[24%] ${reduce ? "" : "animate-sway"}`} style={{ color: "var(--sky)", animationDelay: "0.4s" }} aria-hidden>
            <Spiral size={32} />
          </span>

          {/* conteúdo central */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 140, damping: 16 }}
            className="relative z-10 flex flex-col items-center text-center px-6"
          >
            {/* medalhão do logo, balançando */}
            <motion.div
              whileHover={{ scale: 1.06, rotate: 3 }}
              className={`relative mb-6 ${reduce ? "" : "animate-wobble"}`}
            >
              <div className="absolute -inset-3 rounded-full border-[3px] border-dashed border-coral/50" style={{ animation: reduce ? "none" : "hero-spin 22s linear infinite" }} />
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white ring-4 ring-white shadow-[0_24px_50px_-18px_rgba(30,58,95,0.55)] flex items-center justify-center overflow-hidden">
                <img src={logoPassus} alt="PASSUS" className="w-[86%] h-[86%] object-cover rounded-full" />
              </div>
            </motion.div>

            <span className="inline-flex items-center gap-1.5 text-coral text-[11px] font-bold uppercase tracking-[0.25em] bg-coral/10 px-4 py-1.5 rounded-full border border-coral/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 fill-coral stroke-none" /> Bem-vindo(a)!
            </span>

            <h1 className="font-round font-extrabold text-navy text-[3.4rem] md:text-[5.5rem] leading-none tracking-tight">
              passus
            </h1>
            <p className="font-display italic text-coral text-xl md:text-2xl mt-1">
              moda &amp; afeto, feita à mão 🧦
            </p>
            <p className="text-navy/60 text-sm md:text-base mt-4 max-w-xs font-medium">
              Cada meia carrega uma história de recomeço. Entra pra conhecer a nossa?
            </p>

            {/* botão pra entrar, saltitante */}
            <motion.button
              onClick={(e) => { e.stopPropagation(); enter(); }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.94 }}
              className={`relative mt-8 bg-coral text-white font-round font-bold text-lg px-9 py-4 rounded-full shadow-[0_16px_34px_-12px_rgba(240,113,71,0.95)] ${reduce ? "" : "animate-bob"}`}
            >
              {/* halo pulsante */}
              {!reduce && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-coral/40 -z-10"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              Vamos entrar!
            </motion.button>

            <span className="flex items-center gap-1.5 text-navy/45 text-xs mt-5 font-medium">
              <Hand className="w-3.5 h-3.5" /> clique em qualquer lugar
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Estrelinha de 4 pontas desenhada à mão, piscando. */
function Star({
  style,
  size,
  color,
  reduce,
  delay,
}: {
  style: React.CSSProperties;
  size: number;
  color: string;
  reduce: boolean;
  delay: number;
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute ${reduce ? "" : "animate-twinkle"}`}
      style={{ ...style, animationDelay: `${delay}s` }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z" />
      </svg>
    </span>
  );
}
