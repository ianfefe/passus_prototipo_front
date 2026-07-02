import { Link } from "react-router";
import { Sparkles, Star, Heart, ArrowRight, Gift, ShoppingBag } from "lucide-react";
import logoPassus from "@/assets/passus.jpg";

import meia1 from "@/assets/meia1.png";
  import meia2 from "@/assets/meia2.png";
  import meia3 from "@/assets/meia3.png";

export function HomePage() {
  const featuredProducts = [
    { id: 1, name: "Meia Cano Alto Premium", price: "R$ 35,00", image: meia2 },
    { id: 2, name: "Meia Esportiva Pro", price: "R$ 40,00", image: meia1 },
    { id: 3, name: "Meia Social Elegance", price: "R$ 30,00", image: meia3 },
  ];

  return (
    <div className="font-sans pb-16 selection:bg-[#F07147]/10 bg-[#FBF9F4]">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* HERO BANNER */}
        <section className="bg-gradient-to-br from-white via-[#FDFBF7] to-[#F5EBE1] rounded-3xl shadow-sm border border-orange-100/40 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Lado Esquerdo - Box da Imagem Principal / Logo */}
            <div className="md:col-span-5 bg-[#F4EFE6] flex items-center justify-center p-10 border-b md:border-b-0 md:border-r border-orange-100/40 relative overflow-hidden">
              {/* Imagem de fundo sutil de produto para preencher o branco */}
              <img src="/meia1.png" alt="" className="absolute w-72 h-72 opacity-10 -bottom-10 -right-10 pointer-events-none rotate-12" />
              <div className="text-center relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#F07147] to-[#3B82F6] rounded-3xl blur-xl opacity-15"></div>
                <div className="w-44 h-44 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-md border border-orange-100 relative">
                  <img src={logoPassus} alt="PASSUS" className="w-32 h-32 object-contain" />
                </div>
                <p className="text-xs font-bold text-stone-500 mt-4 tracking-wide">Moda e Transformação Humana</p>
              </div>
            </div>

            {/* Lado Direito - Conteúdo e Manifesto */}
            <div className="md:col-span-7 flex flex-col justify-center p-8 md:p-12 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-[#F07147] text-xs font-bold uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-xl w-fit border border-orange-100">
                <Heart className="w-3.5 h-3.5 fill-[#F07147] stroke-none" /> Tecendo Autonomia e Afeto
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-[#1E3A5F] via-[#2A52BE] to-[#3B82F6] bg-clip-text text-transparent">
                  Roupas que vestem o corpo e acolhem histórias.
                </span>
              </h1>
              
              <p className="text-stone-600 leading-relaxed text-sm md:text-base font-medium">
                Cada par de meias PASSUS carrega a dedicação de pessoas que estão reconstruindo suas trajetórias através da capacitação têxtil profissional e do comércio justo.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/produtos" className="bg-[#F07147] hover:bg-[#d85f37] text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-md flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" /> Conhecer Nossa Produção
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* BLOCO DE IMPACTO SOCIAL */}
        <section className="bg-amber-50/60 border border-amber-200/50 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex gap-4 items-center md:col-span-2">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-amber-200 text-[#F07147] shrink-0 shadow-sm">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-stone-900 text-lg">Por que sua escolha importa?</h3>
              <p className="text-stone-600 text-xs md:text-sm mt-0.5 leading-relaxed font-medium">
                O PASSUS é uma iniciativa sem fins lucrativos. Todo o resultado financeiro obtido com as vendas é integralmente reinvestido em maquinários e capacitação para os polos produtivos.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-amber-200/60 text-center shadow-sm">
            <span className="block text-2xl font-black text-[#1E3A5F]">100%</span>
            <span className="text-[11px] uppercase tracking-wider font-bold text-stone-400">Destinação Social</span>
          </div>
        </section>

        {/* VITRINE DE PRODUTOS DESTACADOS COM FOTO */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-orange-100/60 pb-4">
            <h2 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
              Modelos Feitos com Amor
            </h2>
            <Link to="/produtos" className="text-sm font-bold text-[#F07147] hover:text-[#d85f37] flex items-center gap-1 transition-colors">
              Ver Coleção Completa <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/produto/${product.id}`}
                className="group bg-white rounded-3xl border border-orange-100/30 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col hover:-translate-y-1"
              >
                {/* Imagem do Produto real */}
                <div className="w-full h-56 bg-[#F4EFE6] flex items-center justify-center relative p-4 overflow-hidden border-b border-stone-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain drop-shadow-md transform group-hover:scale-105 transition-transform duration-300" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const label = document.createElement('span');
                        label.className = 'text-stone-400 font-bold text-xs bg-white/80 px-2 py-1 rounded-lg border border-orange-100';
                        label.innerText = '🧦 Visualizar Meia';
                        parent.appendChild(label);
                      }
                    }}
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-stone-800 font-extrabold text-base group-hover:text-[#F07147] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[#1E3A5F] font-black text-lg mt-0.5">{product.price}</p>
                  </div>
                  
                  <div className="w-full py-2.5 bg-white text-[#1E3A5F] group-hover:bg-[#1E3A5F] group-hover:text-white border border-[#1E3A5F] text-center font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-sm">
                    Ver de Perto
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}