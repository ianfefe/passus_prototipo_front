import { Link } from "react-router";
import { Sparkles, Star, Heart, ArrowRight, Gift, ShoppingBag, Users } from "lucide-react";
import logoPassus from "@/assets/passus.jpg";

import meia1 from "@/assets/meia1.png";
import meia2 from "@/assets/meia2.png";
import meia3 from "@/assets/meia3.png";
import criancas from "@/assets/criancas.png";

export function HomePage() {
  const featuredProducts = [
    { id: 1, name: "Meia Cano Alto Premium", price: "R$ 35,00", image: meia2 },
    { id: 2, name: "Meia Esportiva Pro", price: "R$ 40,00", image: meia1 },
    { id: 3, name: "Meia Social Elegance", price: "R$ 30,00", image: meia3 },
  ];

  return (
    /* Herda o fundo areia global do Layout, não forçamos fundo novo aqui */
    <div className="font-sans pb-16 selection:bg-[#F07147]/10">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* HERO BANNER - Nítido, branco puro, com sombra e borda marcadas */}
        <section className="bg-white rounded-[2.5rem] shadow-md shadow-stone-200/60 border border-stone-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            <div className="md:col-span-5 bg-[#F8F6F0] flex items-center justify-center p-10 border-b md:border-b-0 md:border-r border-stone-200 relative overflow-hidden">
              <img src={meia1} alt="" className="absolute w-72 h-72 opacity-[0.07] -bottom-10 -right-10 pointer-events-none rotate-12" />
              <div className="text-center relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#F07147] to-[#3B82F6] rounded-3xl blur-xl opacity-10"></div>
                <div className="w-44 h-44 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-md border border-stone-200 relative">
                  <img src={logoPassus} alt="PASSUS" className="w-32 h-32 object-contain" />
                </div>
                <p className="text-xs font-bold text-stone-500 mt-4 tracking-wide">Moda e Transformação Humana</p>
              </div>
            </div>

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
                <Link to="/produtos" className="bg-[#F07147] hover:bg-[#d85f37] text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-md flex items-center gap-2 hover:-translate-y-0.5">
                  <ShoppingBag className="w-4 h-4" /> Conhecer Nossa Produção
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* BANNER EMOCIONAL DAS CRIANÇAS - Com Borda Definida */}
        <section className="relative w-full h-[350px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-md shadow-stone-200/60 border border-stone-200 group bg-stone-100 flex items-center justify-center">
          <img 
            src={criancas} 
            alt="Crianças e comunidade do projeto PASSUS"
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const placeholder = document.createElement('div');
                placeholder.className = 'absolute inset-0 flex flex-col items-center justify-center text-stone-400 font-bold bg-white';
                placeholder.innerHTML = '<span class="text-4xl mb-2">📸</span><span>Espaço para a foto das crianças (/criancas.jpg)</span>';
                parent.appendChild(placeholder);
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F] via-[#1E3A5F]/40 to-transparent flex flex-col justify-end p-8 md:p-14">
            <div className="inline-flex items-center gap-1.5 text-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-4 h-4" /> Mais que um produto
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-black max-w-3xl leading-tight tracking-tight">
              O futuro que estamos construindo juntos, um passo de cada vez.
            </h2>
          </div>
        </section>

        {/* BLOCO DE IMPACTO SOCIAL - Separado do fundo areia */}
        <section className="bg-white border border-stone-200 shadow-md shadow-stone-200/50 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex gap-4 items-center md:col-span-2">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100 text-[#F07147] shrink-0 shadow-sm">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-stone-900 text-lg">Por que sua escolha importa?</h3>
              <p className="text-stone-600 text-xs md:text-sm mt-0.5 leading-relaxed font-medium">
                O PASSUS é uma iniciativa sem fins lucrativos. Todo o resultado financeiro obtido com as vendas é integralmente reinvestido em maquinários e capacitação para os polos produtivos.
              </p>
            </div>
          </div>
          <div className="bg-[#F8F6F0] rounded-2xl p-4 border border-stone-200 text-center shadow-inner">
            <span className="block text-2xl font-black text-[#1E3A5F]">100%</span>
            <span className="text-[11px] uppercase tracking-wider font-bold text-stone-500">Destinação Social</span>
          </div>
        </section>

        {/* VITRINE DE PRODUTOS - Cards brancos sobre fundo areia = Contraste */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
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
                /* Aqui a mágica do contraste: bg-white, border forte e shadow-md */
                className="group bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-md shadow-stone-200/50 hover:shadow-lg transition-all flex flex-col hover:-translate-y-1"
              >
                <div className="w-full h-56 bg-[#F8F6F0] flex items-center justify-center relative p-4 overflow-hidden border-b border-stone-200">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain drop-shadow-md transform group-hover:scale-105 transition-transform duration-300" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const label = document.createElement('span');
                        label.className = 'text-stone-400 font-bold text-xs bg-white/80 px-2 py-1 rounded-lg border border-stone-200';
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
                  
                  <div className="w-full py-2.5 bg-stone-50 text-[#1E3A5F] group-hover:bg-[#1E3A5F] group-hover:text-white border border-stone-200 text-center font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-sm">
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