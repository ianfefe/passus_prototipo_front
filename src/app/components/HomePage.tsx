import { Link } from "react-router";
import { Sparkles, Star, Heart, ArrowRight } from "lucide-react";
import logoPassus from "@/assets/passus.jpg"; // O "@" aponta direto para a pasta src que configuramos no alias!

export function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Meia Cano Alto Premium",
      price: "R$ 35,00",
      rotation: -1.5,
      color: "#4A90E2" // Azul
    },
    {
      id: 2,
      name: "Meia Esportiva Pro",
      price: "R$ 40,00",
      rotation: 1.5,
      color: "#F5A623" // Amarelo
    },
    {
      id: 3,
      name: "Meia Social Elegance",
      price: "R$ 30,00",
      rotation: -1,
      color: "#7ED321" // Verde
    },
  ];

  return (
    // Fundo creme com manchas de aquarela lúdicas para manter a unidade visual do app
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16 selection:bg-[#F5A623]/30">
      
      {/* Formas lúdicas e coloridas no fundo (Nuvens / Aquarela) */}
      <div className="absolute top-10 -left-16 w-96 h-96 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -right-20 w-[600px] h-[600px] bg-[#F5A623]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#7ED321]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        {/* Banner Principal / Hero - Redesenhado como um grande livro de recados amigável */}
        <section className="bg-white rounded-[40px] shadow-2xl overflow-hidden mb-20 border-4 border-[#1E3A5F] relative transform -rotate-0.5">
          {/* Elementos decorativos fofos nas pontas */}
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#F5A623] rounded-full shadow-md animate-pulse" />
          <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-[#7ED321] rounded-full shadow-md" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Lado Esquerdo - O selo redondo do projeto */}
            <div className="bg-gradient-to-br from-[#4A90E2]/15 to-[#7ED321]/15 h-96 flex items-center justify-center p-8 relative border-b-4 md:border-b-0 md:border-r-4 border-dashed border-[#1E3A5F]/30">
              <Sparkles className="absolute top-8 left-8 text-[#F5A623] w-5 h-5 animate-pulse" />
              
              <div className="text-center">
                {/* Logo real do projeto com uma sombra bem gordinha e acolhedora */}
                <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl border-4 border-[#1E3A5F] transform hover:scale-105 hover:rotate-6 transition-transform duration-300">
                  <img 
                    src={logoPassus}
                    alt="PASSUS" 
                    className="w-36 h-36 object-contain rounded-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if(e.currentTarget.nextSibling) (e.currentTarget.nextSibling as HTMLElement).style.display = 'block';
                    }}
                  />
                  <span className="text-7xl hidden">🧦</span>
                </div>
                <p className="text-[#1E3A5F] font-black text-sm uppercase tracking-widest bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100">
                  🚀 Projeto Social em Ação
                </p>
              </div>
            </div>

            {/* Lado Direito - Mensagem de Impacto Calorosa */}
            <div className="flex flex-col justify-center p-8 md:p-12 bg-white relative">
              <Heart className="absolute top-6 right-8 text-[#F07147] w-5 h-5 animate-bounce" />
              
              <h1 className="text-3xl md:text-4xl font-black text-[#1E3A5F] leading-tight mb-4">
                Transformando vidas através de meias coloridas! 🎨
              </h1>
              <p className="text-gray-700 leading-relaxed mb-4 font-semibold text-base">
                O PASSUS é um projeto social que gera oportunidades e impacto positivo de verdade através da produção de meias personalizadas de alta qualidade.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Cada par que você escolhe contribui diretamente para workshops de arte infantis, capacitação profissional e geração de renda em comunidades vulneráveis. Vamos dar esse passo juntos? ❤️
              </p>
            </div>
          </div>
        </section>

        {/* Seção de Vitrine de Produtos */}
        <section>
          {/* Título de Seção Divertido */}
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-[#1E3A5F] text-2xl md:text-3xl font-black flex items-center gap-2 flex-shrink-0">
              <span className="text-3xl">🛍️</span>
              Produtos em Destaque
            </h2>
            {/* Linha pontilhada estilosa simulando costura de meia */}
            <div className="flex-1 border-b-4 border-dashed border-[#F5A623]/60 rounded-full" />
          </div>

          {/* Grid de Produtos com Rotações Divertidas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2">
            {featuredProducts.map((product) => {
              // Converte o valor de rotation para a classe correspondente do Tailwind
              const rotationClass = product.rotation < 0 ? "-rotate-2" : "rotate-2";
              
              return (
                <Link
                  key={product.id}
                  to={`/produto/${product.id}`}
                  className="group"
                >
                  {/* Card com borda colorida baseada no produto e rotação lúdica */}
                  <div 
                    className={`bg-white rounded-[32px] p-5 shadow-2xl transition-all duration-300 hover:rotate-0 hover:-translate-y-2 border-4 ${rotationClass}`}
                    style={{ borderColor: product.color }}
                  >
                    {/* Área do Produto (Fundo com costura pontilhada) */}
                    <div 
                      className="w-full h-60 rounded-2xl flex items-center justify-center mb-4 border-4 border-dashed transition-colors duration-300 group-hover:bg-white"
                      style={{ 
                        backgroundColor: `${product.color}10`,
                        borderColor: `${product.color}40`
                      }}
                    >
                      <span className="text-8xl transform group-hover:scale-115 group-hover:rotate-12 transition-all duration-300 drop-shadow-sm">
                        🧦
                      </span>
                    </div>
                    
                    {/* Detalhes do Produto - Caixa fofa interna */}
                    <div className="bg-[#F5F2EB]/70 rounded-xl p-4 text-center border border-gray-100/50 group-hover:bg-[#F5F2EB] transition-colors">
                      <h3 className="text-[#1E3A5F] mb-1.5 font-black text-lg tracking-wide group-hover:text-[#4A90E2] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[#F07147] font-black text-2xl mb-3 drop-shadow-sm">
                        {product.price}
                      </p>
                      
                      {/* Tag de botão de clique amigável */}
                      <span 
                        className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-white px-4 py-1.5 rounded-full shadow-md transition-all group-hover:scale-105"
                        style={{ backgroundColor: product.color || product.color }}
                      >
                        Ver Detalhes <ArrowRight className="w-3 h-3 stroke-[3]" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Rodapé Interno da Home - Pequeno convite extra */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white rounded-2xl px-6 py-3 shadow-md border-2 border-dashed border-[#7ED321] transform rotate-1">
            <p className="text-[#1E3A5F] font-bold text-sm flex items-center gap-2">
              <Star className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" /> 
              Cada par de meias comprado apoia diretamente uma criança artista! 🎨
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}