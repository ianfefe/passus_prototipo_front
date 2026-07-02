import { useParams, Link } from "react-router";
import { useCart } from "../context/CartContext";
import { ArrowLeft, Users, ShoppingBag, CreditCard, Heart, Truck, ShieldCheck } from "lucide-react";

import meia1 from "@/assets/meia1.png";
import meia2 from "@/assets/meia2.png";
import meia3 from "@/assets/meia3.png";
import meia4 from "@/assets/meia4.png";

export function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const productId = id ? parseInt(id) : 1;

  const productsMap: Record<number, { id: number; name: string; price: number; image: string; oficina: string; tag: string; desc: string }> = {
    1: { id: 1, name: "Meia Cano Alto Premium", price: 35.00, image: meia1, oficina: "Polo Central", tag: "Mais Vendida", desc: "Desenvolvida com algodão penteado de fibra longa e pontas com costura invisível. Ideal para o máximo de conforto diário e durabilidade estrutural." },
    2: { id: 2, name: "Meia Esportiva Pro", price: 40.00, image: meia2, oficina: "Oficina Norte", tag: "Algodão Orgânico", desc: "Estrutura atoalhada com média compressão no arco do pé, perfeita para atividades físicas e alta absorção de impacto." },
    3: { id: 3, name: "Meia Social Elegance", price: 30.00, image: meia3, oficina: "Polo Central", tag: "Coleção Clássica", desc: "Malha fina mercerizada com toque acetinado. Elegância discreta combinada com a causa do comércio justo." },
    4: { id: 4, name: "Meia Invisível Comfort", price: 25.00, image: meia4, oficina: "Oficina Sul", tag: "Dia a Dia", desc: "Corte anatômico de perfil baixo que não aparece no calçado, contando com silicone interno no calcanhar para não escapar." },
  };

  const product = productsMap[productId] || productsMap[1];

  return (
    <div className="min-h-screen bg-[#F4F1EA] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-6xl mx-auto">
        
        <Link to="/produtos" className="inline-flex items-center gap-1 text-xs font-bold text-stone-500 hover:text-[#F07147] mb-6 uppercase tracking-wider transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar à Coleção
        </Link>

        {/* Layout Expandido para maior presença visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white border border-stone-200 rounded-[2.5rem] p-6 md:p-12 shadow-md shadow-stone-200/50 items-start">
          
          {/* LADO ESQUERDO: Imagem Imponente */}
          <div className="lg:col-span-6 w-full h-[400px] md:h-[500px] bg-[#F8F6F0] rounded-3xl flex items-center justify-center p-8 overflow-hidden relative shadow-inner border border-stone-200">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-6 left-6 text-[10px] font-black uppercase tracking-wider bg-white border border-stone-200 px-3 py-1.5 rounded-xl text-[#1E3A5F] shadow-sm">
              {product.tag}
            </span>
          </div>

          {/* LADO DIREITO: Informações, Compra e Frete */}
          <div className="lg:col-span-6 space-y-8 py-4">
            
            {/* Cabeçalho do Produto */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                Produção Garantida • {product.oficina}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-black text-[#1E3A5F]">
                R$ {product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-medium">
              {product.desc}
            </p>

            {/* Ações de Compra */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => addToCart?.({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
                className="flex-1 bg-white hover:bg-stone-50 text-[#F07147] border-2 border-[#F07147] font-bold text-sm py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-sm hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-5 h-5" /> Pôr na Sacola
              </button>

              <Link
                to="/pagamento"
                onClick={() => addToCart?.({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
                className="flex-1 bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] hover:opacity-95 text-white font-bold text-sm py-3.5 rounded-2xl text-center shadow-md transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" /> Apoiar Agora
              </Link>
            </div>

            {/* PROTÓTIPO DE CÁLCULO DE FRETE */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-sm font-extrabold text-stone-800">
                <Truck className="w-5 h-5 text-stone-400" /> Consultar Prazos e Frete
              </div>
              <div className="flex gap-3">
                <input 
                  type="text" 
                  placeholder="Seu CEP (Ex: 36000-000)" 
                  className="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm font-medium outline-none focus:border-[#3B82F6]"
                  maxLength={9}
                />
                <button className="bg-stone-200 hover:bg-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors">
                  Calcular
                </button>
              </div>
              <p className="text-[10px] text-stone-400 font-medium px-1">
                *Entregas para Juiz de Fora e região possuem frete subsidiado.
              </p>
            </div>

            {/* Selos de Confiança / História */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F8F6F0] rounded-2xl p-4 border border-stone-200 shadow-sm flex flex-col gap-2">
                <Users className="w-5 h-5 text-[#F07147]" />
                <div>
                  <h4 className="font-extrabold text-stone-800 text-xs uppercase tracking-wider">Comércio Justo</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed mt-0.5 font-medium">100% da renda financia as oficinas locais de capacitação.</p>
                </div>
              </div>
              <div className="bg-[#F8F6F0] rounded-2xl p-4 border border-stone-200 shadow-sm flex flex-col gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <div>
                  <h4 className="font-extrabold text-stone-800 text-xs uppercase tracking-wider">Compra Segura</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed mt-0.5 font-medium">Ambiente auditado com prestação de contas digital.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}