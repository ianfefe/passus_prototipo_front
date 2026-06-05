import { Link, Outlet, useNavigate } from "react-router";
import { Search, ShoppingCart, User, Heart, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react"; // Garanta que o useEffect está importado
import { ArrowUp } from "lucide-react"; // Importe a seta para cima
import logoPassus from "@/assets/passus.jpg"; // O "@" aponta direto para a pasta src que configuramos no alias!

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

  // Função que joga a página para o topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] flex flex-col relative font-sans text-[#1E3A5F]">
      
      {/* HEADER - Fundo Azul Marinho com bordinha de costura para baixo */}
      {/* HEADER - Bloco Azul Marinho com arredondamento e tracejado para baixo */}
      <header className="bg-[#1E3A5F] text-white rounded-b-[48px] border-b-8 border-dashed border-[#F5A623] pt-4 pb-8 px-4 shadow-2xl relative overflow-hidden mb-12">
        {/* Detalhe lúdico de brilho no fundo do bloco azul */}
        <div className="absolute top-0 right-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        {/* A Nuvem Branca Flutuante (Dentro do bloco azul) */}
        <div className="max-w-6xl mx-auto bg-white text-[#1E3A5F] rounded-3xl p-3 shadow-xl border border-white/20 flex items-center justify-between gap-6 relative z-10 animate-fade-in">
          
          {/* Logo Redonda Fofa */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 hover:scale-105 transform transition-transform duration-300">
            <div className="w-12 h-12 bg-[#F5F2EB] rounded-full flex items-center justify-center p-1 shadow-inner border-2 border-[#1E3A5F]">
              <img 
<<<<<<< HEAD
                src="./assets/passus.jpg" 
=======
                src={logoPassus} 
>>>>>>> e1c3fb8 (Corrige caminho da logo)
                alt="PASSUS" 
                className="w-12 h-12 object-contain rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if(e.currentTarget.nextSibling) (e.currentTarget.nextSibling as HTMLElement).style.display = 'block';
                }}
              />
              <span className="text-3xl hidden">🧦</span>
            </div>
            <span className="font-black tracking-wider text-xl text-[#1E3A5F] hidden sm:inline">
              PASSUS
            </span>
          </Link>

          {/* Barra de Busca integrada na nuvem branca */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar meia ou desenho... 🧦"
              className="w-full px-5 py-2.5 text-sm rounded-full text-gray-800 pr-12 bg-[#F5F2EB]/60 border-2 border-[#F5F2EB] focus:border-[#4A90E2] focus:bg-white transition-all shadow-inner outline-none font-bold"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#4A90E2] hover:bg-[#357abd] p-2 rounded-full transition-colors shadow-md text-white"
            >
              <Search className="w-4 h-4 stroke-[3]" />
            </button>
          </form>

          {/* Navegação - Links com Efeito Underline Colorido */}
          <nav className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
            <div className="hidden md:flex items-center gap-4 lg:gap-5 text-sm font-black tracking-wider uppercase">
              <Link to="/produtos" className="text-[#1E3A5F] hover:text-[#4A90E2] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4A90E2] hover:after:w-full after:transition-all">
                Meias
              </Link>
              <Link to="/outros-projetos" className="text-[#1E3A5F] hover:text-[#FF1D8D] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF1D8D] hover:after:w-full after:transition-all">
                Parceiros
              </Link>
              <Link to="/sobre" className="text-[#1E3A5F] hover:text-[#F5A623] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F5A623] hover:after:w-full after:transition-all">
                Sobre
              </Link>
              <Link to="/participar" className="text-[#1E3A5F] hover:text-[#7ED321] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7ED321] hover:after:w-full after:transition-all">
                Participar
              </Link>
            </div>

            {/* Carrinho Laranja - Super Vivo */}
            <Link
              to="/carrinho"
              className="bg-[#F07147] hover:bg-[#e5643a] text-white px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm font-black uppercase tracking-wider hover:scale-105 relative"
            >
              <ShoppingCart className="w-4 h-4 stroke-[3]" />
              <span className="hidden lg:inline">Carrinho</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#F5A623] text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Avatar Usuário */}
            <Link
              to="/login"
              className="bg-[#F5F2EB] hover:bg-white text-[#1E3A5F] w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-sm border-2 border-[#1E3A5F]/10 hover:border-[#4A90E2]"
            >
              <User className="w-4 h-4 stroke-[3]" />
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL (ONDE AS OUTRAS PÁGINAS ENTRAM) */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* FOOTER - Acolhedor e com Cara de Retalho / Costura */}
      <footer className="bg-[#1E3A5F] text-white rounded-t-[48px] border-t-8 border-dashed border-[#F5A623] mt-20 relative overflow-hidden">
        {/* Mancha lúdica interna para quebrar a frieza do rodapé escuro */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            
            {/* Bloco Logo Institucional */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#F5A623] shadow-md transform -rotate-6">
                  <span className="text-2xl">🧦</span>
                </div>
                <h3 className="font-black text-2xl tracking-wider text-white">PASSUS</h3>
              </div>
              <p className="text-white/80 font-medium text-sm leading-relaxed">
                Transformando vidas e colorindo o futuro através de meias cheias de história e impacto social positivo.
              </p>
            </div>

            {/* Coluna 2 */}
            <div>
              <h4 className="font-black text-base mb-4 text-[#F5A623] tracking-wide uppercase flex items-center gap-1.5">
                <span>🎈</span> Navegação
              </h4>
              <ul className="space-y-2.5 text-sm font-semibold">
                <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Início</Link></li>
                <li><Link to="/produtos" className="text-white/70 hover:text-white transition-colors">Nossas Meias</Link></li>
                <li><Link to="/sobre" className="text-white/70 hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link to="/outros-projetos" className="text-white/70 hover:text-white transition-colors">Parceiros Sociais</Link></li>
                <li><Link to="/participar" className="text-white/70 hover:text-white transition-colors">Quero Participar</Link></li>
              </ul>
            </div>

            {/* Coluna 3 */}
            <div>
              <h4 className="font-black text-base mb-4 text-[#7ED321] tracking-wide uppercase flex items-center gap-1.5">
                <span>🔒</span> Cantinho Útil
              </h4>
              <ul className="space-y-2.5 text-sm font-semibold">
                <li><Link to="/carrinho" className="text-white/70 hover:text-white transition-colors">Meu Sacolão / Carrinho</Link></li>
                <li><Link to="/login" className="text-white/70 hover:text-white transition-colors">Minha Conta</Link></li>
                <li><Link to="/admin/produtos" className="text-white/70 hover:text-white transition-colors">Painel Admin</Link></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacidade Segura</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>

            {/* Coluna 4 - Contato Festivo */}
            <div>
              <h4 className="font-black text-base mb-4 text-[#FF1D8D] tracking-wide uppercase flex items-center gap-1.5">
                <span>💌</span> Conversar
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-3 text-white/90">
                  <div className="bg-white/10 p-1.5 rounded-lg border border-white/5"><Mail className="w-4 h-4 text-[#F07147]" /></div>
                  <span>projeto@passus.com</span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <div className="bg-white/10 p-1.5 rounded-lg border border-white/5"><Phone className="w-4 h-4 text-[#4A90E2]" /></div>
                  <span>(32) 9999-9999</span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <div className="bg-white/10 p-1.5 rounded-lg border border-white/5"><MapPin className="w-4 h-4 text-[#7ED321]" /></div>
                  <span>Juiz de Fora, MG</span>
                </li>
              </ul>
              
              <div className="mt-5">
                <a
                  href="https://www.instagram.com/projeto.passus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#F07147] hover:bg-[#e5643a] text-white py-2.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md hover:shadow-xl transition-all hover:scale-102"
                >
                  Siga no Instagram 📲
                </a>
              </div>
            </div>
          </div>

          {/* Sub-rodapé com Linha de Costura */}
          <div className="border-t-2 border-dashed border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <p className="text-white/50 text-xs font-medium">
              © 2026 PASSUS - Todos os direitos reservados. Feito com muito amor!
            </p>
            <p className="text-white/70 text-xs font-black flex items-center gap-1.5 bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
              Criado com <Heart className="w-3.5 h-3.5 text-[#FF1D8D] fill-[#FF1D8D]" /> para transformar vidas reais
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO VOLTAR AO TOPO - Estilo Peça de Encaixe / Pop-up Alegre */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-[#F07147] hover:bg-[#e5643a] text-white p-3.5 rounded-full shadow-2xl border-4 border-white transition-all duration-300 hover:scale-115 active:scale-95 group ${
          showScrollButton 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        title="Voltar para o topo!"
      >
        <ArrowUp className="w-6 h-6 stroke-[3] animate-pulse group-hover:-translate-y-1 transition-transform" />
      </button>

    </div>
  );
}