import { Link, Outlet } from "react-router";
import { Code2, Mail, MapPin, ArrowUp, ChevronRight, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import logoPropus from "@/assets/propus.png"; 

export function Layout() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  // Estado para controlar o Dark Mode (inicia no dark por padrão)
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    // A classe "dark" aqui é o que ativa o dark mode em todo o site
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] flex flex-col relative font-sans text-slate-800 dark:text-slate-300 transition-colors duration-500">
        
        {/* HEADER */}
        <header className="bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-500">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
              <img src={logoPropus} alt="Propus" className="w-10 h-10 object-contain" />
              <div className="flex flex-col justify-center">
                <span className="font-black tracking-tight text-xl leading-none text-[#0B7269] dark:text-white mt-1">PROPUS</span>
                <span className="text-[9px] font-bold text-[#0B7269] dark:text-[#62D5B4] tracking-widest uppercase">Tech for Good</span>
              </div>
            </Link>

            <nav className="flex items-center gap-4 md:gap-6 flex-shrink-0">
              <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 dark:text-slate-400">
                <Link to="/" className="hover:text-[#0B7269] dark:hover:text-[#62D5B4] transition-colors">Início</Link>
                <Link to="/produtos" className="hover:text-[#0B7269] dark:hover:text-[#62D5B4] transition-colors">Cases & Soluções</Link>
                <Link to="/sobre" className="hover:text-[#0B7269] dark:hover:text-[#62D5B4] transition-colors">Nossa Missão</Link>
              </div>

              {/* Botão Tema Claro/Escuro */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Alternar Tema"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <a href="mailto:contato@propus.tech" className="hidden sm:flex bg-[#0B7269] dark:bg-[#62D5B4] hover:bg-[#085a52] dark:hover:bg-[#4bc19f] text-white dark:text-[#0B1120] px-6 py-2.5 rounded-xl transition-all items-center gap-2 text-sm font-bold shadow-md dark:shadow-[0_0_15px_rgba(98,213,180,0.3)] hover:-translate-y-0.5">
                Falar com Especialista <ChevronRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-1 relative">
          {/* Efeito Glow global (aparece mais no dark mode) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0B7269] rounded-full blur-[150px] opacity-10 dark:opacity-20 pointer-events-none -z-10 transition-opacity duration-500"></div>
          <Outlet />
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-100 dark:bg-[#05080F] text-slate-600 dark:text-slate-500 mt-20 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
          <div className="max-w-6xl mx-auto px-6 pt-12 pb-6 border-b border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={logoPropus} alt="Propus" className="w-8 h-8 object-contain" />
              <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white">PROPUS</span>
            </div>
            <p className="text-xs text-center sm:text-right font-medium">
              Desenvolvendo o futuro digital do Terceiro Setor.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-[#0B7269] dark:border-[#62D5B4] pl-2">Nossas Soluções</h4>
                <ul className="space-y-2.5 text-sm font-medium">
                  <li><Link to="/produtos" className="hover:text-[#0B7269] dark:hover:text-[#62D5B4] transition-colors">E-commerce Solidário</Link></li>
                  <li><Link to="/produtos" className="hover:text-[#0B7269] dark:hover:text-[#62D5B4] transition-colors">Portais de Transparência</Link></li>
                  <li><Link to="/produtos" className="hover:text-[#0B7269] dark:hover:text-[#62D5B4] transition-colors">Sistemas de Gestão</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-[#62D5B4] dark:border-[#0B7269] pl-2">A Propus</h4>
                <ul className="space-y-2.5 text-sm font-medium">
                  <li><Link to="/sobre" className="hover:text-[#0B7269] dark:hover:text-[#62D5B4] transition-colors">Nossa História</Link></li>
                  <li><Link to="/produtos" className="hover:text-[#0B7269] dark:hover:text-[#62D5B4] transition-colors">Cases de Sucesso</Link></li>
                  <li><a href="#" className="hover:text-[#0B7269] dark:hover:text-[#62D5B4] transition-colors">Carreiras</a></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-slate-300 dark:border-slate-700 pl-2">Contato</h4>
                <ul className="space-y-3 text-xs font-medium">
                  <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#0B7269] dark:text-[#62D5B4]" /> <span>hello@propus.tech</span></li>
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#0B7269] dark:text-[#62D5B4]" /> <span>São Paulo, SP - Atendimento Global</span></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center space-y-3">
              <p className="text-slate-500 dark:text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
                © 2026 Propus Technology. Transformando causas sociais através de engenharia de software e design centrado no humano.
              </p>
            </div>
          </div>
        </footer>

        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 bg-[#0B7269] dark:bg-[#62D5B4] text-white dark:text-[#0B1120] p-2.5 rounded-xl shadow-lg dark:shadow-[0_0_15px_rgba(98,213,180,0.4)] transition-all duration-300 ${
            showScrollButton ? "opacity-100 scale-100 hover:-translate-y-1" : "opacity-0 scale-75 pointer-events-none"
          }`}
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}