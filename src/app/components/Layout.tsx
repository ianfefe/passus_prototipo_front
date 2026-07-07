import { Link, Outlet, useNavigate, useLocation } from "react-router";
import { Search, ShoppingCart, User, Heart, Mail, MapPin, Phone, ArrowUp, Instagram, Code2 } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { DoodleField, FallingDoodles } from "./Doodles";
import logoPassus from "@/assets/passus.jpg";

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const { itemCount } = useCart();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { pathname } = useLocation();

  // Barra de progresso da rolagem (fio coral que "costura" a página)
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "smooth" se quiser um efeito de rolagem suave
    });
  }, [pathname]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { to: "/produtos", label: "Nossas Meias" },
    { to: "/sobre", label: "Quem Somos" },
    { to: "/participar", label: "Como Apoiar" },
    { to: "/outros-projetos", label: "Outras Ações Sociais" },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    // Fundo global "tecelagem": trama sutil de fios sobre areia quente
    <div className="woven-bg min-h-screen flex flex-col relative font-sans text-ink">

      {/* Rabiscos lúdicos: camada fixa caindo + camada espalhada estática */}
      <FallingDoodles opacity={0.42} />
      <DoodleField opacity={0.22} className="z-0" />

      {/* ===================== HEADER ===================== */}
      <header className="sticky top-0 z-50 bg-[#FBF9F4]/85 backdrop-blur-xl border-b border-[color:var(--thread)]/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          {/* Logotipo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <span className="relative">
              <span className="absolute -inset-1 rounded-full bg-coral/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={logoPassus}
                alt="PASSUS"
                className="relative w-11 h-11 object-cover rounded-full ring-2 ring-white shadow-[0_4px_14px_-4px_rgba(30,58,95,0.5)] transition-transform duration-500 group-hover:rotate-[8deg]"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display font-black tracking-tight text-[1.55rem] text-navy">
                passus
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.32em] text-coral/90 -mt-0.5">
                moda &amp; afeto
              </span>
            </span>
          </Link>

          {/* Busca */}
          <form onSubmit={handleSearch} className="flex-1 max-w-sm relative hidden sm:block group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar meias e histórias…"
              className="w-full pl-11 pr-4 py-2.5 text-sm rounded-full text-ink bg-white/70 border border-[color:var(--thread)]/70 focus:border-sky focus:bg-white focus:ring-4 focus:ring-sky/10 transition-all outline-none font-medium placeholder-stone-400"
            />
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-sky transition-colors" />
          </form>

          {/* Navegação + ações */}
          <nav className="flex items-center gap-5 flex-shrink-0">
            <div className="hidden md:flex items-center gap-6 text-[13px] font-semibold text-navy/75">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative py-1 transition-colors hover:text-coral group"
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-coral transition-all duration-300 ${
                      isActive(link.to) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            <Link
              to="/carrinho"
              className="relative bg-coral hover:bg-coral-deep text-white pl-4 pr-4 py-2.5 rounded-full transition-all flex items-center gap-2 text-sm font-bold shadow-[0_8px_20px_-8px_rgba(240,113,71,0.9)] hover:-translate-y-0.5"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden lg:inline">Sacola</span>
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-navy text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center ring-2 ring-[#FBF9F4]">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className="text-navy/70 hover:text-navy w-10 h-10 rounded-full flex items-center justify-center bg-white/70 border border-[color:var(--thread)]/70 hover:bg-white transition-colors shadow-sm"
              aria-label="Entrar"
            >
              <User className="w-4 h-4" />
            </Link>
          </nav>
        </div>
        {/* Fio coral que costura o rodapé do header */}
        <div className="relative h-[3px] w-full bg-gradient-to-r from-transparent via-coral/25 to-transparent">
          {/* progresso da rolagem preenche o fio */}
          <motion.div
            style={{ scaleX: progress }}
            className="absolute inset-0 origin-left bg-gradient-to-r from-coral via-coral-deep to-sky"
          />
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="relative z-10 mt-24 text-navy/70 bg-[color:var(--sand-deep)] border-t border-[color:var(--thread)]">
        {/* costura decorativa no topo do rodapé */}
        <div className="stitch-line max-w-6xl mx-auto" />

        <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
          {/* Manifesto de topo */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[color:var(--thread)]/70">
            <div className="max-w-md space-y-4">
              <div className="flex items-center gap-3">
                <img src={logoPassus} alt="PASSUS" className="w-10 h-10 rounded-full ring-2 ring-white shadow-md object-cover" />
                <span className="font-display font-black text-2xl tracking-tight text-navy">passus</span>
              </div>
              <p className="font-display text-2xl md:text-[1.7rem] leading-tight text-navy text-balance">
                Transformamos fios em oportunidades reais de futuro.
              </p>
            </div>
            <a
              href="https://www.instagram.com/projeto.passus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-auto bg-white text-navy font-bold text-sm px-5 py-3 rounded-full border border-[color:var(--thread)] shadow-sm hover:-translate-y-0.5 hover:text-coral transition-all"
            >
              <Instagram className="w-4 h-4" /> @projeto.passus
            </a>
          </div>

          {/* Colunas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            <FooterCol title="O que produzimos" accent="var(--coral)" items={[
              { label: "Coleção de Meias", to: "/produtos" },
              { label: "Linha de Algodão Cru", to: "/produtos" },
              { label: "Produtos Artesanais", to: "/produtos" },
            ]} />
            <FooterCol title="Nossa causa" accent="var(--sky)" items={[
              { label: "Oficinas Comunitárias", to: "/sobre" },
              { label: "Prestando Contas", to: "/outros-projetos" },
              { label: "Seja um Doador", to: "/participar" },
            ]} />
            <FooterCol title="Transparência" accent="var(--thread)" items={[
              { label: "Quem Governa", to: "/sobre" },
              { label: "Estatuto Social", to: "#" },
              { label: "Políticas de Uso", to: "#" },
            ]} />
            <div>
              <h4 className="font-display font-bold text-sm text-navy mb-4 pl-3 border-l-2" style={{ borderColor: "var(--apple-green)" }}>
                Sede institucional
              </h4>
              <ul className="space-y-3 text-[13px] text-navy/70 font-medium">
                <li className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-coral shrink-0" /> contato@passus.org.br</li>
                <li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-coral shrink-0" /> (32) 3333-3333</li>
                <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-coral shrink-0" /> Juiz de Fora — Minas Gerais</li>
              </ul>
            </div>
          </div>

          {/* Base legal */}
          <div className="border-t border-[color:var(--thread)]/70 pt-8 flex flex-col items-center gap-4 text-center">
            <p className="text-navy/60 text-xs max-w-2xl leading-relaxed">
              © 2026 Associação Social PASSUS. Todo o lucro obtido na venda de produtos é integralmente
              revertido para a manutenção e expansão das oficinas de costura e capacitação de nossa comunidade.
            </p>
            <div className="text-[11px] text-navy/70 font-bold flex items-center gap-1.5 bg-white/80 px-4 py-1.5 rounded-full border border-[color:var(--thread)] shadow-sm">
              Feito à mão e com o coração <Heart className="w-3 h-3 text-coral fill-coral" /> para gerar autonomia.
            </div>
          </div>
        </div>
      </footer>

      <a 
        href="/prototipo_propus_case/" 
        className="fixed bottom-6 left-6 z-50 bg-[#0B1120] text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-bold hover:-translate-y-1 hover:shadow-2xl transition-all border border-slate-800 group"
        title="Conheça a Agência Propus"
      >
        <div className="bg-slate-800/50 p-1.5 rounded-lg group-hover:bg-[#0B7269]/40 transition-colors">
          <Code2 className="w-4 h-4 text-[#62D5B4]" />
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] text-slate-400 font-medium uppercase tracking-wider leading-none mb-0.5">Desenvolvido por</span>
          <span className="text-sm tracking-tight leading-none text-white group-hover:text-[#62D5B4] transition-colors">Propus</span>
        </div>
      </a>

      {/* Botão voltar ao topo */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        initial={false}
        animate={showScrollButton ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.92 }}
        className={`fixed bottom-6 right-6 z-50 bg-navy text-white p-3 rounded-full shadow-[0_10px_30px_-10px_rgba(30,58,95,0.9)] ${
          showScrollButton ? "" : "pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </motion.button>
    </div>
  );
}

function FooterCol({
  title,
  accent,
  items,
}: {
  title: string;
  accent: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <h4 className="font-display font-bold text-sm text-navy mb-4 pl-3 border-l-2" style={{ borderColor: accent }}>
        {title}
      </h4>
      <ul className="space-y-2.5 text-[13px] font-medium text-navy/70">
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="hover:text-coral transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}