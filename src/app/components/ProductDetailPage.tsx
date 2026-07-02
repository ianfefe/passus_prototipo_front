import { useParams, Link } from "react-router";
import { useCart } from "../context/CartContext";
import { ArrowLeft, Users, ShoppingBag, CreditCard, Heart } from "lucide-react";

// 1. IMPORTAÇÃO DOS ATIVOS REAIS
import meia1 from "@/assets/meia1.png";
import meia2 from "@/assets/meia2.png";
import meia3 from "@/assets/meia3.png";
import meia4 from "@/assets/meia4.png";

export function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const productId = id ? parseInt(id) : 1;

  // 2. DICIONÁRIO CORRIGIDO: Adicionado 'id: number' ao tipo e a cada objeto interno
  const productsMap: Record<number, { id: number; name: string; price: number; image: string; oficina: string; tag: string; desc: string }> = {
    1: { 
      id: 1,
      name: "Meia Cano Alto Premium", 
      price: 35.00, 
      image: meia1, 
      oficina: "Polo Central", 
      tag: "Mais Vendida",
      desc: "Desenvolvida com algodão penteado de fibra longa e pontas com costura invisível, ideal para quem busca o máximo de conforto diário e durabilidade."
    },
    2: { 
      id: 2,
      name: "Meia Esportiva Pro", 
      price: 40.00, 
      image: meia2, 
      oficina: "Oficina Norte", 
      tag: "Algodão Orgânico",
      desc: "Estrutura atoalhada com média compressão no arco do pé, perfeita para atividades físicas e alta absorção de impacto."
    },
    3: { 
      id: 3,
      name: "Meia Social Elegance", 
      price: 30.00, 
      image: meia3, 
      oficina: "Polo Central", 
      tag: "Coleção Clássica",
      desc: "Malha fina mercerizada com toque acetinado. Elegância discreta combinada com a causa do comércio justo."
    },
    4: { 
      id: 4,
      name: "Meia Invisível Comfort", 
      price: 25.00, 
      image: meia4, 
      oficina: "Oficina Sul", 
      tag: "Dia a Dia",
      desc: "Corte anatômico de perfil baixo que não aparece no calçado, contando com silicone interno no calcanhar para não escapar do pé."
    },
  };

  // Coleta o produto seguro ou assume o primeiro como padrão
  const product = productsMap[productId] || productsMap[1];

  return (
    <div className="min-h-screen bg-[#FBF9F4] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Link de Retorno */}
        <Link to="/produtos" className="inline-flex items-center gap-1 text-xs font-bold text-stone-400 hover:text-[#F07147] mb-6 uppercase tracking-wider transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar à Coleção
        </Link>

        {/* Card Editorial de Detalhes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white border border-orange-100/40 rounded-3xl p-6 md:p-10 shadow-sm items-center">
          
          {/* CONTAINER DA IMAGEM COMPILADA */}
          <div className="w-full h-80 bg-[#F4EFE6] rounded-2xl flex items-center justify-center p-6 overflow-hidden relative shadow-inner border border-orange-100/20">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-md transform group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const label = document.createElement('span');
                  label.className = 'text-stone-400 font-bold text-xs bg-white/80 px-3 py-1.5 rounded-xl border border-orange-100';
                  label.innerText = '📷 Foto Indisponível';
                  parent.appendChild(label);
                }
              }}
            />
            <span className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-wider bg-white border border-orange-100 px-2.5 py-1 rounded-lg text-[#1E3A5F] shadow-sm">
              {product.tag}
            </span>
          </div>

          {/* TEXTOS E INTEGRAÇÃO DE COMPRA */}
          <div className="space-y-5">
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                Produção Garantida • {product.oficina}
              </span>
              <h1 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight mt-1">
                {product.name}
              </h1>
              <p className="text-2xl font-black text-[#1E3A5F] mt-1">
                R$ {product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-stone-500 text-sm leading-relaxed font-medium">
              {product.desc}
            </p>

            {/* Ações de Compra */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => addToCart?.({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
                className="flex-1 bg-white hover:bg-stone-50 text-[#F07147] border-2 border-[#F07147] font-bold text-xs py-3 rounded-2xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" /> Adicionar à Sacola
              </button>

              {/* Botão direcionando para a Sacola, que agora contém o Checkout Interno Integrado */}
              <Link
                to="/carrinho"
                onClick={() => addToCart?.({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
                className="flex-1 bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] hover:opacity-95 text-white font-bold text-xs py-3 rounded-2xl text-center shadow-md transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-1.5"
              >
                <CreditCard className="w-4 h-4" /> Apoiar Agora
              </Link>
            </div>

            {/* Selo Humano de Fabricação */}
            <div className="bg-[#FAF7F0] rounded-2xl p-4 flex gap-3 border border-orange-100/60 shadow-inner">
              <Users className="w-5 h-5 text-[#F07147] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-stone-800 text-xs uppercase tracking-wider flex items-center gap-1">
                  História da confecção <Heart className="w-3 h-3 text-[#F07147] fill-[#F07147] stroke-none" />
                </h4>
                <p className="text-[11px] text-stone-500 leading-relaxed mt-1 font-medium">
                  Este lote foi produzido artesanalmente em nossas oficinas integradas de capacitação têxtil, assegurando geração de renda e autonomia para famílias locais.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}