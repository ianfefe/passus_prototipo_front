import { useState } from "react";
import { Link } from "react-router";
import { Trash2, Heart, ArrowRight, ShieldCheck, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";

export function CartPage() {
  const context = useCart();
  const [etapa, setEtapa] = useState<"carrinho" | "checkout">("carrinho");
  
  const cartItems = context?.cartItems || context?.items || [];
  const removeFromCart = context?.removeFromCart || (() => {});

  const displayItems = cartItems.length > 0 ? cartItems : [
    { id: 1, name: "Meia Cano Alto Premium", price: 35.00, quantity: 2 },
    { id: 2, name: "Meia Esportiva Pro", price: 40.00, quantity: 1 }
  ];

  const total = displayItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  if (etapa === "carrinho") {
    return (
      <div className="min-h-screen bg-[#FBF9F4] py-12 px-6 font-sans text-stone-800">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight">
              Sua <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Sacola Solidária</span>
            </h1>
            <p className="text-xs text-stone-500 font-medium mt-0.5">Gerando autonomia e fomento social a cada escolha.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              {displayItems.map((item) => (
                <div key={item.id} className="bg-white border border-orange-100/30 rounded-3xl p-5 flex items-center justify-between gap-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#F9F5EE] rounded-2xl flex items-center justify-center text-3xl border border-orange-100/20">🧦</div>
                    <div>
                      <h3 className="font-extrabold text-stone-800 text-base">{item.name}</h3>
                      <p className="text-xs text-stone-400 font-bold">Contribuição: R$ {item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-bold text-stone-500 bg-stone-50 px-2.5 py-1 rounded-xl border border-stone-200">Qtd: {item.quantity || 1}</span>
                    <p className="font-black text-stone-900 text-base text-right min-w-[70px]">R$ {(item.price * (item.quantity || 1)).toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.id)} className="text-stone-400 hover:text-red-500 p-1.5 rounded-xl transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-6">
                <h2 className="font-extrabold text-stone-900 text-base border-b border-stone-50 pb-2">Resumo Geral</h2>
                <div className="space-y-2 text-xs font-semibold text-stone-600">
                  <div className="flex justify-between"><span>Subtotal dos Itens</span><span>R$ {total.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-emerald-600">Frete Comunidade</span><span className="text-emerald-600">Grátis</span></div>
                  <div className="border-t border-stone-100 pt-3 flex justify-between text-sm font-black text-stone-950">
                    <span>Total do Apoio</span><span className="text-xl text-[#1E3A5F]">R$ {total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* FIX: Se preferir navegar por troca de estado seguro e local para evitar 404 */}
                <button
                  onClick={() => setEtapa("checkout")}
                  className="w-full bg-[#F07147] hover:bg-[#d85f37] text-white py-3 rounded-2xl font-bold text-sm text-center shadow-sm flex items-center justify-center gap-1 transition-all"
                >
                  Avançar para o Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* VISÃO DO CHECKOUT SEGURO INTEGRADO (Aponta para /pagamento se enviado como form) */
  return (
    <div className="min-h-screen bg-[#FBF9F4] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <button onClick={() => setEtapa("carrinho")} className="inline-flex items-center gap-1 text-xs font-bold text-stone-400 hover:text-[#F07147] mb-4 uppercase tracking-wider transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar para a Sacola
          </button>
          <h1 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight">
            Concluir <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Sua Contribuição</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-4">
            <div className="bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider text-stone-400">1. Destino da Entrega</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input type="text" placeholder="CEP" className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-xs font-medium outline-none" />
                <input type="text" placeholder="Cidade" className="sm:col-span-2 w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-xs font-medium outline-none" />
                <input type="text" placeholder="Endereço Completo" className="sm:col-span-3 w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-xs font-medium outline-none" />
              </div>
            </div>

            <div className="bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider text-stone-400">2. Escolha o Método</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-[#F07147] bg-orange-50/20 p-4 rounded-2xl flex flex-col items-center justify-center gap-1.5 text-center">
                  <span className="text-2xl">✨</span>
                  <span className="text-xs font-bold text-stone-800">Pix Solidário</span>
                </div>
                <div className="border border-stone-200 bg-white p-4 rounded-2xl flex flex-col items-center justify-center gap-1.5 text-center text-stone-400">
                  <span className="text-2xl">💳</span>
                  <span className="text-xs font-bold text-stone-400">Cartão de Crédito</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="font-extrabold text-stone-900 text-base">Revisão Final</h3>
            <div className="space-y-2 text-xs font-semibold text-stone-600 border-b border-stone-50 pb-4">
              <div className="flex justify-between"><span>Produtos Selecionados</span><span>R$ {total.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-emerald-600">Frete Social Apoio</span><span>Grátis</span></div>
              <div className="flex justify-between text-sm font-black text-stone-950 pt-2"><span>Total Geral</span><span>R$ {total.toFixed(2)}</span></div>
            </div>

            {/* Redirecionamento nativo final para a sua rota de pagamento cadastrada */}
            <Link
              to="/pagamento"
              className="w-full text-center block bg-[#F07147] hover:bg-[#d85f37] text-white font-bold text-sm py-3 rounded-2xl shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Confirmar e Apoiar Projeto
            </Link>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-[11px] text-stone-500 leading-relaxed font-medium flex gap-2 items-start">
              <ShieldCheck className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
              <span>Ambiente de apoio comunitário. O recibo de aplicação dos fundos será enviado no seu e-mail.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}