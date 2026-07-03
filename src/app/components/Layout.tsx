import { Link, Outlet, useNavigate } from "react-router";
import { Search, ShoppingCart, User, Heart, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import logoPassus from "@/assets/passus.jpg";

export function Layout() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { itemCount } = useCart();
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    /* NOVO FUNDO GLOBAL: Areia sofisticado que destaca o branco */
    <div className="min-h-screen bg-[#F4F1EA] flex flex-col relative font-sans text-stone-800">
      
      {/* HEADER - Branco puro com borda nítida para destacar do fundo */}
      <header className="bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-90 transition-opacity">
            <img src={logoPassus} alt="PASSUS" className="w-10.5 h-10.5 object-contain rounded-full border border-stone-200 shadow-sm" />
            <span className="font-extrabold tracking-tight text-xl bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">
              PASSUS
            </span>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-md relative hidden sm:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar produtos e histórias..."
              className="w-full px-5 py-2 text-sm rounded-2xl text-stone-800 pr-10 bg-stone-50 border border-stone-200 focus:border-[#3B82F6] focus:bg-white transition-all outline-none font-medium placeholder-stone-400"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#3B82F6]">
              <Search className="w-4 h-4" />
            </button>
          </form>

          <nav className="flex items-center gap-6 flex-shrink-0">
            <div className="hidden md:flex items-center gap-6 text-sm font-bold text-stone-600">
              <Link to="/produtos" className="hover:text-[#F07147] transition-colors">Nossas Meias</Link>
              <Link to="/outros-projetos" className="hover:text-[#F07147] transition-colors">Rede Parceira</Link>
              <Link to="/sobre" className="hover:text-[#F07147] transition-colors">Quem Somos</Link>
              <Link to="/participar" className="hover:text-[#F07147] transition-colors">Como Apoiar</Link>
            </div>

            <Link to="/carrinho" className="bg-[#F07147] hover:bg-[#d85f37] text-white px-5 py-2.5 rounded-2xl transition-all flex items-center gap-2 text-sm font-bold shadow-md hover:-translate-y-0.5 relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden lg:inline">Sua Sacola</span>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1E3A5F] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link to="/login" className="text-stone-500 hover:text-[#1E3A5F] w-9 h-9 rounded-xl flex items-center justify-center bg-stone-50 border border-stone-200 hover:bg-white transition-colors shadow-sm">
              <User className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER - Tom de areia escuro para criar a "base" visual da página */}
      <footer className="bg-[#EBE5D9] text-stone-600 mt-20 border-t border-stone-300">
        
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-6 border-b border-stone-300/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoPassus} alt="PASSUS" className="w-8 h-8 rounded-lg border border-stone-200 shadow-sm bg-white" />
            <span className="font-black text-xl tracking-tight text-[#1E3A5F]">passus</span>
            <span className="text-[10px] bg-white text-[#F07147] font-bold px-2 py-0.5 rounded-md border border-stone-200 shadow-sm">PROJETO SOCIAL RECONHECIDO</span>
          </div>
          <p className="text-xs text-stone-500 text-center sm:text-right font-medium">
            Transformando fios em oportunidades reais de futuro.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-extrabold text-xs text-[#1E3A5F] uppercase tracking-wider mb-4 border-l-2 border-[#F07147] pl-2">
                O que Produzimos
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-stone-500">
                <li><Link to="/produtos" className="hover:text-[#F07147] transition-colors">Coleção de Meias</Link></li>
                <li><Link to="/produtos" className="hover:text-[#F07147] transition-colors">Linha de Algodão Cru</Link></li>
                <li><Link to="/produtos" className="hover:text-[#F07147] transition-colors">Produtos Artesanais</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-xs text-[#1E3A5F] uppercase tracking-wider mb-4 border-l-2 border-[#3B82F6] pl-2">
                Nossa Causa
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-stone-500">
                <li><Link to="/sobre" className="hover:text-[#F07147] transition-colors">Oficinas Comunitárias</Link></li>
                <li><Link to="/outros-projetos" className="hover:text-[#F07147] transition-colors">Prestando Contas</Link></li>
                <li><Link to="/participar" className="hover:text-[#F07147] transition-colors">Seja um Doador</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-xs text-[#1E3A5F] uppercase tracking-wider mb-4 border-l-2 border-stone-400 pl-2">
                Transparência
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-stone-500">
                <li><Link to="/sobre" className="hover:text-[#F07147] transition-colors">Quem Governa</Link></li>
                <li><a href="#" className="hover:text-[#F07147] transition-colors">Estatuto Social</a></li>
                <li><a href="#" className="hover:text-[#F07147] transition-colors">Políticas de Uso</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-xs text-[#1E3A5F] uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
                Sede Institucional
              </h4>
              <ul className="space-y-3 text-xs text-stone-500 font-medium">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#F07147]" /> <span>contato@passus.org.br</span></li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#F07147]" /> <span>(32) 3333-3333</span></li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#F07147]" /> <span>Juiz de Fora - Minas Gerais</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-300/60 mt-12 pt-8 text-center space-y-3">
            <p className="text-stone-500 text-xs max-w-2xl mx-auto leading-relaxed">
              © 2026 Associação Social PASSUS. Todo o lucro obtido na venda de produtos é integralmente revertido para a manutenção e expansão das oficinas de costura e capacitação de nossa comunidade.
            </p>
            <div className="text-[11px] text-stone-500 font-bold flex items-center justify-center gap-1.5 bg-white w-fit mx-auto px-4 py-1.5 rounded-xl border border-stone-200 shadow-sm">
              Feito à mão e com o coração <Heart className="w-3 h-3 text-[#F07147] fill-[#F07147]" /> para gerar autonomia.
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-white hover:bg-stone-50 text-[#F07147] p-2.5 rounded-2xl shadow-md border border-stone-200 transition-all duration-300 ${
          showScrollButton ? "opacity-100 scale-100 hover:-translate-y-1" : "opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>

    </div>
  );
}