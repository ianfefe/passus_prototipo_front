import { Link, useSearchParams } from "react-router";
import { useState } from "react";
import { Sparkles, Star, ArrowRight, Tag } from "lucide-react";

export function ProductsPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterOptions = [
    { id: "colorful", label: "Coloridas", color: "#F5A623", icon: "🎨" },
    { id: "drawings", label: "Desenhos", color: "#4A90E2", icon: "🖍️" },
    { id: "size", label: "Tamanho", color: "#7ED321", icon: "📏" },
    { id: "kids", label: "Infantil", color: "#F07147", icon: "👧" },
  ];

  // Adicionei uma cor única para cada produto combinar com o estilo artesanal
  const products = [
    {
      id: 1,
      name: "Meia Cano Alto Premium",
      description: "Algodão premium com design moderno",
      price: "R$ 35,00",
      rotation: -1,
      color: "#4A90E2",
    },
    {
      id: 2,
      name: "Meia Esportiva Pro",
      description: "Tecnologia de absorção de impacto",
      price: "R$ 40,00",
      rotation: 1,
      color: "#F5A623",
    },
    {
      id: 3,
      name: "Meia Social Elegance",
      description: "Elegante para ocasiões formais",
      price: "R$ 30,00",
      rotation: 0,
      color: "#1E3A5F",
    },
    {
      id: 4,
      name: "Meia Casual Confort",
      description: "Conforto para o dia a dia",
      price: "R$ 25,00",
      rotation: 1.5,
      color: "#F07147",
    },
    {
      id: 5,
      name: "Meia Térmica Winter",
      description: "Aquecimento extra para dias frios",
      price: "R$ 45,00",
      rotation: -1.5,
      color: "#9013FE",
    },
    {
      id: 6,
      name: "Meia Running Speed",
      description: "Ideal para corridas e treinos",
      price: "R$ 38,00",
      rotation: 1,
      color: "#7ED321",
    },
    {
      id: 7,
      name: "Meia Bamboo Eco",
      description: "Sustentável e respirável",
      price: "R$ 42,00",
      rotation: -1,
      color: "#00B4D8",
    },
    {
      id: 8,
      name: "Meia Compressão Plus",
      description: "Compressão graduada para performance",
      price: "R$ 50,00",
      rotation: 0,
      color: "#FF1D8D",
    },
    {
      id: 9,
      name: "Meia Kids Fun",
      description: "Coloridas e divertidas para crianças",
      price: "R$ 20,00",
      rotation: 2,
      color: "#E63946",
    },
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  // Converte o valor numérico de rotation para classes do Tailwind
  const getRotationClass = (rotation: number) => {
    if (rotation === -1) return "-rotate-1";
    if (rotation === 1) return "rotate-1";
    if (rotation === -1.5) return "-rotate-2";
    if (rotation === 1.5) return "rotate-2";
    if (rotation === 2) return "rotate-3";
    if (rotation === -2) return "-rotate-3";
    return "rotate-0";
  };

  return (
    // Fundo creme aconchegante com manchas lúdicas de tinta
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16">
      
      {/* Elementos de aquarela flutuando no fundo */}
      <div className="absolute top-10 -left-16 w-96 h-96 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-[#F5A623]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#7ED321]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        {/* Título de Seção e Feedback de Busca */}
        <div className="mb-10 text-center md:text-left relative">
          <h1 className="text-3xl md:text-4xl font-black tracking-wider text-[#1E3A5F] flex items-center justify-center md:justify-start gap-2 mb-2">
            <span>🛍️</span> Nossa Lojinha de Meias
          </h1>
          <p className="text-gray-600 font-semibold text-sm pl-1">
            Escolha seu par favorito! Lembre-se: cada compra apoia uma criança artista. ❤️
          </p>
          
          {searchQuery && (
            <div className="mt-4 bg-white rounded-2xl py-2 px-4 shadow-md border-3 border-dashed border-[#4A90E2] inline-flex items-center gap-2 animate-fade-in text-sm font-bold text-[#1E3A5F]">
              <span>🔍</span> Mostrando achados para: <span className="text-[#4A90E2]">"{searchQuery}"</span>
            </div>
          )}
        </div>

        {/* Barra de Filtros - Botões Gordinhos Estilo Adesivo */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center md:justify-start">
          {filterOptions.map((filter) => {
            const isSelected = selectedFilters.includes(filter.id);
            return (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className="px-5 py-2.5 rounded-full font-black text-sm tracking-wide shadow-md hover:shadow-lg transition-all hover:scale-105 uppercase flex items-center gap-2 border-3"
                style={{
                  backgroundColor: isSelected ? filter.color : "#ffffff",
                  color: isSelected ? "#ffffff" : filter.color,
                  borderColor: filter.color,
                }}
              >
                <span>{filter.icon}</span>
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Produtos com Rotações Divertidas e Cores Únicas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/produto/${product.id}`}
              className="group"
            >
              {/* Card dinâmico com borda colorida baseada no produto e rotação lúdica */}
              <div
                className={`bg-white rounded-[36px] p-6 shadow-2xl transition-all duration-300 hover:rotate-0 hover:-translate-y-2 group border-4`}
                style={{ borderColor: product.color }}
              >
                {/* Janela do Produto (Fundo texturizado com costura tracejada) */}
                <div
                  className="w-full h-56 rounded-2xl flex items-center justify-center mb-4 border-4 border-dashed transition-colors duration-300 group-hover:bg-white"
                  style={{
                    backgroundColor: `${product.color}10`,
                    borderColor: `${product.color}40`,
                  }}
                >
                  <span className="text-7xl transform group-hover:scale-115 group-hover:rotate-12 transition-all duration-300 drop-shadow-sm">
                    🧦
                  </span>
                </div>

                {/* Bloco de Informações - Estilo Fofinho Interno */}
                <div className="bg-[#F5F2EB]/70 rounded-xl p-4 text-center border border-gray-100/50 group-hover:bg-[#F5F2EB] transition-colors relative">
                  <h3 className="text-[#1E3A5F] mb-1 font-black text-lg tracking-wide truncate">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-500 font-semibold text-xs mb-3 truncate px-2">
                    {product.description}
                  </p>
                  
                  <p className="text-[#F07147] font-black text-2xl mb-3 drop-shadow-sm">
                    {product.price}
                  </p>

                  {/* Etiqueta de botão interna fofa */}
                  <span
                    className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-white px-4 py-1.5 rounded-full shadow-md transition-all group-hover:scale-105"
                    style={{ backgroundColor: product.color }}
                  >
                    Olhar <ArrowRight className="w-3 h-3 stroke-[3]" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mensagem Amigável no Fim da Página */}
        <div className="text-center mt-16">
          <p className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 border-2 border-dashed border-gray-300 text-xs font-bold text-gray-500">
            <Tag className="w-3.5 h-3.5 text-[#F5A623]" /> Não encontrou o desenho que queria? Novos modelos são adicionados toda semana após os workshops! 🎨
          </p>
        </div>

      </div>
    </div>
  );
}