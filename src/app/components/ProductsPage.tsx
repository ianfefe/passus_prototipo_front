import { Link } from "react-router";
import { SlidersHorizontal, Sparkles, Heart } from "lucide-react";


  import meia1 from "@/assets/meia1.png";
  import meia2 from "@/assets/meia2.png";
  import meia3 from "@/assets/meia3.png";
  import meia4 from "@/assets/meia4.png";


export function ProductsPage() {
  const allProducts = [
    { 
      id: 1, 
      name: "Meia Cano Alto Premium", 
      price: "R$ 35,00", 
      tag: "Mais Vendida", 
      image: meia1, // Usando a variável importada
      oficina: "Polo Central"
    },
    { 
      id: 2, 
      name: "Meia Esportiva Pro", 
      price: "R$ 40,00", 
      tag: "Algodão Orgânico", 
      image: meia2, 
      oficina: "Oficina Norte"
    },
    { 
      id: 3, 
      name: "Meia Social Elegance", 
      price: "R$ 30,00", 
      tag: "Coleção Clássica", 
      image: meia3, // Usando a variável importada
      oficina: "Polo Central"
    },
    { 
      id: 4, 
      name: "Meia Invisível Comfort", 
      price: "R$ 25,00", 
      tag: "Dia a Dia", 
      image: meia4, 
      oficina: "Oficina Sul"
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F4] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* BANNER INTRODUTÓRIO - Preenche o espaço e traz calor humano */}
        <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2A52BE] text-white p-8 md:p-10 rounded-3xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 text-amber-200 px-2.5 py-1 rounded-md w-fit inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-amber-200 stroke-none" /> Produção Artesanal Justa
            </span>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">
              Nossa Coleção de Meias Solidárias
            </h1>
            <p className="text-xs md:text-sm text-stone-200 leading-relaxed font-medium">
              Cada ponto costurado representa uma oportunidade de emancipação e renda para costureiras locais. Escolha qualidade com impacto real.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center min-w-[140px] shrink-0 self-stretch md:self-auto flex flex-col justify-center">
            <span className="block text-2xl font-black text-amber-300">100%</span>
            <span className="text-[10px] text-stone-200 uppercase tracking-wider font-bold">Lucro Revertido</span>
          </div>
        </section>

        {/* BARRA DE FILTROS E INFOS */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-white/60 border border-orange-100/40 p-4 rounded-2xl shadow-sm">
          <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">
            Mostrando {allProducts.length} modelos tecidos à mão
          </p>
          <button className="flex items-center gap-1.5 bg-white border border-stone-200 hover:bg-stone-50 rounded-xl px-4 py-2 text-xs font-bold text-stone-700 shadow-sm transition-colors">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filtrar por Oficina
          </button>
        </div>

        {/* VITRINE DE PRODUTOS COM IMAGEM E FUNDO AQUECIDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <Link
              key={product.id}
              to={`/produto/${product.id}`}
              className="group bg-white rounded-3xl border border-orange-100/30 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col hover:-translate-y-0.5"
            >
              {/* CONTAINER DA IMAGEM - Substituído o emoji por tag <img> real com fundo natural quente */}
              <div className="w-full h-64 bg-[#F4EFE6] flex items-center justify-center relative p-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  onError={(e) => {
                    // Fallback visual elegante caso a imagem ainda não tenha sido encontrada na pasta
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const label = document.createElement('span');
                      label.className = 'text-stone-400 font-bold text-xs bg-white/80 px-3 py-1.5 rounded-xl border border-orange-100';
                      label.innerText = '📷 Foto da Meia';
                      parent.appendChild(label);
                    }
                  }}
                />
                
                {/* Tag flutuante da peça */}
                <span className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-wider bg-white border border-orange-100 px-2.5 py-1 rounded-lg text-[#1E3A5F] shadow-sm">
                  {product.tag}
                </span>
              </div>
              
              {/* CONTEÚDO E INFORMAÇÕES DO ARTESANATO */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                    Fabricado por: {product.oficina}
                  </span>
                  <h3 className="text-stone-800 font-black text-base group-hover:text-[#F07147] transition-colors tracking-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between pt-1">
                    <p className="text-[#1E3A5F] font-black text-lg">{product.price}</p>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-emerald-600 stroke-none" /> Apoia Comunidade
                    </span>
                  </div>
                </div>

                {/* Botão de chamada que se integra com o layout */}
                <div className="w-full py-3 bg-[#161F28] text-white group-hover:bg-[#F07147] text-center font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-sm">
                  Ver Detalhes do Modelo
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}