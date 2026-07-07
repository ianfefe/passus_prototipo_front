import { Link } from "react-router";
import { Heart, ArrowRight, ArrowUpRight, Gift, ShoppingBag, Users, Scissors } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { TiltCard } from "./motion/TiltCard";
import logoPassus from "@/assets/passus.jpg";

import meia1 from "@/assets/meia1.png";
import meia2 from "@/assets/meia2.png";
import meia3 from "@/assets/meia3.png";
import criancas from "@/assets/criancas.png";

const featuredProducts = [
  { id: 1, name: "Meia Cano Alto Premium", price: "R$ 35,00", image: meia2, oficina: "Polo Central" },
  { id: 2, name: "Meia Esportiva Pro", price: "R$ 40,00", image: meia1, oficina: "Oficina Norte" },
  { id: 3, name: "Meia Social Elegance", price: "R$ 30,00", image: meia3, oficina: "Polo Central" },
];

export function HomePage() {
  const reduce = useReducedMotion();

  /* ---------- Parallax ligado à rolagem do hero ---------- */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const blobUp = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : -120]);
  const blobDown = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : 90]);
  const contentY = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : 80]);
  const contentFade = useTransform(heroProgress, [0, 0.8], [1, reduce ? 1 : 0]);
  const medallionY = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : -40]);

  /* ---------- Parallax pelo mouse (medalhão + blobs) ---------- */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const medX = useTransform(sx, [-0.5, 0.5], [reduce ? 0 : -18, reduce ? 0 : 18]);
  const medY = useTransform(sy, [-0.5, 0.5], [reduce ? 0 : -14, reduce ? 0 : 14]);
  const blobMX = useTransform(sx, [-0.5, 0.5], [reduce ? 0 : 24, reduce ? 0 : -24]);
  const blobMY = useTransform(sy, [-0.5, 0.5], [reduce ? 0 : 18, reduce ? 0 : -18]);

  const handlePointer = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetPointer = () => {
    mx.set(0);
    my.set(0);
  };

  /* ---------- Parallax da imagem do banner emocional ---------- */
  const bannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress: bannerProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const bannerImgY = useTransform(bannerProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);

  return (
    <div className="font-sans pb-20 selection:bg-coral/15 selection:text-coral-deep">
      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 space-y-20">

        {/* ============================ HERO ============================ */}
        <motion.section
          ref={heroRef}
          onPointerMove={handlePointer}
          onPointerLeave={resetPointer}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grain relative overflow-hidden rounded-[2.75rem] atelier-card border border-white"
        >
          {/* atmosfera: malhas de cor difusas (parallax scroll + mouse) */}
          <motion.div
            style={{ y: blobUp, x: blobMX }}
            className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sky/20 blur-3xl"
          />
          <motion.div
            style={{ y: blobDown, x: blobMY }}
            className="pointer-events-none absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-coral/20 blur-3xl"
          />

          {/* fios flutuantes decorativos */}
          <FloatingThreads />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Coluna do selo/logo */}
            <div className="md:col-span-5 relative flex items-center justify-center p-10 md:p-12 border-b md:border-b-0 md:border-r border-[color:var(--thread)]/50">
              <motion.div style={{ y: medallionY }} className="relative text-center">
                <motion.div
                  style={{ x: medX, y: medY }}
                  animate={reduce ? {} : { y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-52 h-52 mx-auto"
                >
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-coral/40"
                    style={{ animation: "hero-spin 26s linear infinite" }}
                  />
                  <div className="absolute inset-3 rounded-full bg-white shadow-[0_20px_50px_-20px_rgba(30,58,95,0.6)] ring-1 ring-[color:var(--thread)]/60 flex items-center justify-center overflow-hidden">
                    <img
                      src={logoPassus}
                      alt="PASSUS"
                      className="w-[88%] h-[88%] object-cover rounded-full"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.nextElementSibling)
                          (e.currentTarget.nextElementSibling as HTMLElement).style.display = "block";
                      }}
                    />
                    <span className="text-7xl hidden">🧦</span>
                  </div>
                </motion.div>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.3em] text-navy/50">
                  Moda &amp; Transformação Humana
                </p>
              </motion.div>

              {/* dica de rolagem — no rodapé da coluna do medalhão */}
              <ScrollCue reduce={!!reduce} />
            </div>

            {/* Coluna do conteúdo (parallax de saída) */}
            <motion.div
              style={{ y: contentY, opacity: contentFade }}
              className="md:col-span-7 flex flex-col justify-center p-8 md:p-14 space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 self-start text-coral text-[11px] font-bold uppercase tracking-[0.2em] bg-coral/10 px-3.5 py-1.5 rounded-full border border-coral/20 overflow-hidden relative"
              >
                <span className="absolute inset-0 thread-run" />
                <Heart className="relative w-3.5 h-3.5 fill-coral stroke-none" />
                <span className="relative">Tecendo autonomia e afeto</span>
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[2.6rem] md:text-[3.9rem] font-black leading-[0.98] tracking-tight text-navy text-balance"
              >
                Roupas que vestem o corpo e{" "}
                <span className="relative inline-block text-coral italic">
                  acolhem histórias
                  {/* sublinhado costurado à mão, desenhado no load */}
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="10"
                    viewBox="0 0 300 10"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <motion.path
                      d="M2 6 Q 75 1 150 5 T 298 4"
                      stroke="var(--coral)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="1 9"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.7, duration: 1.1, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-navy/70 leading-relaxed text-[15px] md:text-base max-w-xl text-pretty"
              >
                Cada par de meias PASSUS carrega a dedicação de pessoas que estão reconstruindo suas
                trajetórias através da capacitação têxtil profissional e do comércio justo.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/produtos"
                    className="group bg-coral hover:bg-coral-deep text-white px-6 py-3.5 rounded-full font-bold text-sm transition-colors shadow-[0_12px_28px_-10px_rgba(240,113,71,0.95)] flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" /> Conhecer nossa produção
                    <ArrowRight className="w-4 h-4 -ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <Link
                  to="/sobre"
                  className="text-navy font-bold text-sm inline-flex items-center gap-1.5 hover:text-coral transition-colors"
                >
                  Nossa história <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ==================== FAIXA DE MÉTRICAS ==================== */}
        <RevealGroup className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-[2rem] overflow-hidden border border-[color:var(--thread)]/60 bg-[color:var(--thread)]/50" amount={0.4}>
          {[
            { n: "100%", l: "Destinação social" },
            { n: "3", l: "Polos produtivos" },
            { n: "+40", l: "Mãos capacitadas" },
            { n: "∞", l: "Histórias tecidas" },
          ].map((s) => (
            <RevealItem key={s.l} className="bg-[#FBF9F4] px-6 py-7 text-center transition-transform duration-300 hover:-rotate-2 hover:scale-[1.06] hover:bg-white cursor-default">
              <span className="block font-round text-3xl md:text-4xl font-extrabold text-navy">{s.n}</span>
              <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-navy/50">{s.l}</span>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* ==================== BANNER EMOCIONAL ==================== */}
        <Reveal amount={0.2}>
          <section
            ref={bannerRef}
            className="relative w-full h-[360px] md:h-[520px] rounded-[2.75rem] overflow-hidden shadow-[0_30px_60px_-30px_rgba(22,35,58,0.6)] group"
          >
            <motion.img
              style={{ y: bannerImgY, scale: 1.15 }}
              src={criancas}
              alt="Crianças e comunidade do projeto PASSUS"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const ph = document.createElement("div");
                  ph.className = "absolute inset-0 flex flex-col items-center justify-center text-stone-400 font-bold bg-white";
                  ph.innerHTML = '<span class="text-4xl mb-2">📸</span><span>Espaço para a foto das crianças</span>';
                  parent.appendChild(ph);
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 text-amber-200 text-[11px] font-bold uppercase tracking-[0.25em] mb-4"
              >
                <Users className="w-4 h-4" /> Mais que um produto
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-white text-[2rem] md:text-[3.4rem] font-black max-w-3xl leading-[1.02] tracking-tight text-balance"
              >
                O futuro que estamos construindo juntos, um passo de cada vez.
              </motion.h2>
            </div>
          </section>
        </Reveal>

        {/* ==================== BLOCO DE IMPACTO ==================== */}
        <Reveal direction="up" amount={0.3}>
          <section className="atelier-card border border-white rounded-[2rem] p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex gap-5 items-start md:col-span-2">
              <div className="w-14 h-14 bg-coral/10 rounded-2xl flex items-center justify-center border border-coral/20 text-coral shrink-0">
                <Gift className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-black text-navy text-xl md:text-2xl">Por que sua escolha importa?</h3>
                <p className="text-navy/70 text-sm mt-1.5 leading-relaxed text-pretty">
                  O PASSUS é uma iniciativa sem fins lucrativos. Todo o resultado financeiro obtido com as vendas é
                  integralmente reinvestido em maquinários e capacitação para os polos produtivos.
                </p>
              </div>
            </div>
            <motion.div
              whileHover={{ y: -4, rotate: -1 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="relative bg-navy rounded-2xl p-6 text-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 12px)" }} />
              <span className="relative block font-display text-5xl font-black text-white">100%</span>
              <span className="relative text-[11px] uppercase tracking-[0.2em] font-bold text-amber-200">Destinação social</span>
            </motion.div>
          </section>
        </Reveal>

        {/* ==================== VITRINE DE PRODUTOS ==================== */}
        <section className="space-y-10">
          <Reveal amount={0.6}>
            <div className="flex items-end justify-between gap-4">
              <div className="relative space-y-1">
                {/* estrelinha desenhada à mão */}
                <span className="animate-twinkle pointer-events-none absolute -top-4 -left-5 hidden sm:block" style={{ color: "var(--sunny-yellow)" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z" />
                  </svg>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-coral">
                  <Scissors className="w-3.5 h-3.5" /> Feito à mão
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-black text-navy tracking-tight">
                  Modelos feitos com amor
                </h2>
              </div>
              <Link to="/produtos" className="group text-sm font-bold text-navy hover:text-coral flex items-center gap-1.5 transition-colors shrink-0 pb-1">
                Ver coleção <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          {/* divisor ondulado, feito à mão */}
          <div className="wavy-divider" style={{ color: "var(--coral)", opacity: 0.55 }} />

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" stagger={0.14} amount={0.15}>
            {featuredProducts.map((product, i) => (
              <RevealItem key={product.id}>
                <TiltCard className="h-full" max={8}>
                  <Link
                    to={`/produto/${product.id}`}
                    className="group atelier-card rounded-[1.75rem] border border-white overflow-hidden flex flex-col h-full"
                  >
                    <div className="relative w-full h-60 flex items-center justify-center p-6 overflow-hidden bg-gradient-to-br from-[#F6F2EA] to-[#EFE9DD] border-b border-[color:var(--thread)]/50">
                      <span
                        className="sticker absolute top-4 left-4 z-10 text-[9px] font-round font-extrabold uppercase tracking-wide bg-white px-2.5 py-1 rounded-full text-navy border border-[color:var(--thread)]/60 shadow-sm"
                        style={{ ["--tilt" as string]: i % 2 ? "3deg" : "-3deg" }}
                      >
                        {product.oficina}
                      </span>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain drop-shadow-[0_12px_18px_rgba(22,35,58,0.18)] transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                      <div>
                        <h3 className="font-display font-black text-navy text-lg leading-tight group-hover:text-coral transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-coral-deep font-black text-xl mt-1">{product.price}</p>
                      </div>
                      <div className="w-full py-3 bg-[#F6F2EA] text-navy group-hover:bg-navy group-hover:text-white border border-[color:var(--thread)]/50 text-center font-round font-bold text-xs uppercase tracking-[0.15em] rounded-full transition-all inline-flex items-center justify-center gap-1.5">
                        Ver de perto <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Fios coral flutuantes no hero — pequenos pontos/traços que derivam devagar.
--------------------------------------------------------------------------- */
function FloatingThreads() {
  const reduce = useReducedMotion();
  const dots = [
    { top: "14%", left: "8%", size: 8, dur: 7, delay: 0, color: "var(--coral)" },
    { top: "72%", left: "14%", size: 6, dur: 9, delay: 1.2, color: "var(--sky)" },
    { top: "22%", left: "46%", size: 5, dur: 8, delay: 0.6, color: "var(--coral)" },
    { top: "82%", left: "60%", size: 7, dur: 10, delay: 0.3, color: "var(--sky)" },
    { top: "10%", left: "88%", size: 6, dur: 8.5, delay: 1.6, color: "var(--coral)" },
  ];
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{ top: d.top, left: d.left, width: d.size, height: d.size, background: d.color, opacity: 0.5 }}
          animate={{ y: [0, -18, 0], x: [0, 8, 0], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Indicador de rolagem (agulha que sobe e desce).
--------------------------------------------------------------------------- */
function ScrollCue({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.8 }}
      className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5"
    >
      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-navy/40">Role</span>
      <div className="w-5 h-8 rounded-full border-2 border-navy/25 flex justify-center pt-1.5">
        <motion.span
          className="w-1 h-1.5 rounded-full bg-coral"
          animate={reduce ? {} : { y: [0, 8, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}