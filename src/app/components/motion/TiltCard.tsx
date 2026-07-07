import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Cartão que inclina em 3D seguindo o cursor (efeito "adesivo vivo"),
 * com brilho suave que acompanha o mouse. Volta ao lugar com mola macia.
 */
export function TiltCard({
  children,
  className,
  max = 9,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 220, damping: 18 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 220, damping: 18 });
  const glareBg = useTransform(
    px,
    (v) => `radial-gradient(320px circle at ${v * 100}% 0%, rgba(255,255,255,0.35), transparent 60%)`
  );

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 900 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`relative ${className ?? ""}`}
    >
      <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>{children}</div>
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
}
