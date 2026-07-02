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

  return (
    /* Fundo creme/marfim acolhedor que unifica todo o projeto */
    <div className="min-h-screen bg-[#FBF9F4] flex flex-col relative font-sans text-stone-800">
      
      {/* HEADER - Suave com bordas orgânicas e acolhedoras */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          
          {/* Logo da Associação */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-90 transition-opacity">
            <img 
              src={logoPassus} 
              alt="PASSUS" 
              className="w-9 h-9 object-contain rounded-xl border border-orange-100 shadow-sm"
            />
            <span className="font-extrabold tracking-tight text-xl bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">
              PASSUS
            </span>
          </Link>

          {/* Busca com cantos arredondados e amigáveis */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md relative hidden sm:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar produtos e histórias..."
              className="w-full px-5 py-2 text-sm rounded-2xl text-stone-800 pr-10 bg-stone-50/60 border border-orange-100 focus:border-[#3B82F6] focus:bg-white transition-all outline-none font-medium placeholder-stone-400"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#3B82F6]">
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Navegação - Textos em tons quentes */}
          <nav className="flex items-center gap-6 flex-shrink-0">
            <div className="hidden md:flex items-center gap-6 text-sm font-bold text-stone-600">
              <Link to="/produtos" className="hover:text-[#F07147] transition-colors">Nossas Meias</Link>
              <Link to="/outros-projetos" className="hover:text-[#F07147] transition-colors">Rede Parceira</Link>
              <Link to="/sobre" className="hover:text-[#F07147] transition-colors">Quem Somos</Link>
              <Link to="/participar" className="hover:text-[#F07147] transition-colors">Como Apoiar</Link>
            </div>

            {/* Sacola com Cor Humana Vibrante (Coral) */}
            <Link
              to="/carrinho"
              className="bg-[#F07147] hover:bg-[#d85f37] text-white px-5 py-2.5 rounded-2xl transition-all flex items-center gap-2 text-sm font-bold shadow-md hover:scale-102"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden lg:inline">Sua Sacola</span>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1E3A5F] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className="text-stone-500 hover:text-[#1E3A5F] w-9 h-9 rounded-xl flex items-center justify-center bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors"
            >
              <User className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER - Confortável, Humano e Corporativo (Estilo Grande ONG) */}
      <footer className="bg-[#161F28] text-stone-300 mt-20 border-t-4 border-[#F07147]">
        
        {/* Topo do Footer */}
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-6 border-b border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoPassus} alt="PASSUS" className="w-8 h-8 rounded-lg bg-white p-0.5" />
            <span className="font-black text-xl tracking-tight text-white">passus</span>
            <span className="text-[10px] bg-amber-500/10 text-amber-400 font-bold border border-amber-500/20 px-2 py-0.5 rounded-md">PROJETO SOCIAL RECONHECIDO</span>
          </div>
          <p className="text-xs text-stone-400 text-center sm:text-right font-medium">
            Transformando fios em oportunidades reais de futuro.
          </p>
        </div>

        {/* Links em Colunas Claras */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div>
              <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-4 border-l-2 border-[#F07147] pl-2">
                O que Produzimos
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-stone-400">
                <li><Link to="/produtos" className="hover:text-white transition-colors">Coleção de Meias</Link></li>
                <li><Link to="/produtos" className="hover:text-white transition-colors">Linha de Algodão Cru</Link></li>
                <li><Link to="/produtos" className="hover:text-white transition-colors">Produtos Artesanais</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-4 border-l-2 border-[#3B82F6] pl-2">
                Nossa Causa
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-stone-400">
                <li><Link to="/sobre" className="hover:text-white transition-colors">Oficinas Comunitárias</Link></li>
                <li><Link to="/outros-projetos" className="hover:text-white transition-colors">Prestando Contas</Link></li>
                <li><Link to="/participar" className="hover:text-white transition-colors">Seja um Doador</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-4 border-l-2 border-stone-600 pl-2">
                Transparência
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-stone-400">
                <li><Link to="/sobre" className="hover:text-white transition-colors">Quem Governa</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Estatuto Social</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Políticas de Uso</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
                Sede Institucional
              </h4>
              <ul className="space-y-3 text-xs text-stone-400">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-stone-500" /> <span>contato@passus.org.br</span></li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-stone-500" /> <span>(32) 3333-3333</span></li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-stone-500" /> <span>Juiz de Fora - Minas Gerais</span></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-stone-800/60 mt-12 pt-8 text-center space-y-3">
            <p className="text-stone-500 text-xs max-w-2xl mx-auto leading-relaxed">
              © 2026 Associação Social PASSUS. Todo o lucro obtido na venda de produtos é integralmente revertido para a manutenção e expansão das oficinas de costura e capacitação de nossa comunidade.
            </p>
            <div className="text-[11px] text-stone-400 font-bold flex items-center justify-center gap-1.5 bg-stone-900/40 w-fit mx-auto px-4 py-1.5 rounded-xl border border-stone-800">
              Feito à mão e com o coração <Heart className="w-3 h-3 text-[#F07147] fill-[#F07147]" /> para gerar autonomia.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}