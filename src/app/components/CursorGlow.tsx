import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/**
 * Cursor "novelo de lã": um ponto coral que segue o mouse SEM atraso, com um
 * anel que acompanha de leve. Tudo é feito com motion values (zero re-render
 * do React por movimento) → sem travar. Só em telas com mouse fino; respeita
 * prefers-reduced-motion.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  // posição (atualizada no listener, não dispara render)
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // estados como motion values (também sem render)
  const hover = useMotionValue(0);
  const press = useMotionValue(0);

  // ponto = 1:1 (instantâneo). anel = mola bem rápida (quase sem atraso).
  const ringX = useSpring(x, { stiffness: 1100, damping: 50, mass: 0.35 });
  const ringY = useSpring(y, { stiffness: 1100, damping: 50, mass: 0.35 });

  const ringScale = useTransform([hover, press], ([h, p]: number[]) => (1 + h * 0.6) * (1 - p * 0.18));
  const ringOpacity = useTransform(press, [0, 1], [0.85, 0.4]);
  const dotScale = useTransform(hover, [0, 1], [1, 0.7]);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("yarn-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target;
      const interactive = t instanceof Element && t.closest("a, button, input, [role='button'], select, textarea, label");
      hover.set(interactive ? 1 : 0);
    };
    const down = () => press.set(1);
    const up = () => press.set(0);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down, { passive: true });
    window.addEventListener("mouseup", up, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("yarn-cursor");
    };
  }, [x, y, hover, press]);

  if (!enabled) return null;

  const willChange = { willChange: "transform" } as const;

  return (
    <>
      {/* anel (acompanha de leve) */}
      <motion.div className="pointer-events-none fixed top-0 left-0 z-[120]" style={{ x: ringX, y: ringY, ...willChange }}>
        <motion.div
          className="w-9 h-9 rounded-full border-2 border-coral/80"
          style={{ translateX: "-50%", translateY: "-50%", scale: ringScale, opacity: ringOpacity, ...willChange }}
        />
      </motion.div>

      {/* ponto central (1:1, sem atraso) */}
      <motion.div className="pointer-events-none fixed top-0 left-0 z-[120]" style={{ x, y, ...willChange }}>
        <motion.div
          className="w-2.5 h-2.5 rounded-full bg-coral"
          style={{ translateX: "-50%", translateY: "-50%", scale: dotScale, ...willChange }}
        />
      </motion.div>
    </>
  );
}
