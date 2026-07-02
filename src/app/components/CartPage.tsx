import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Trash2, Heart, ArrowRight, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Toast } from "./Toast";

export function CartPage() {
  const navigate = useNavigate();
  const context = useCart();
  const [toast, setToast] = useState<string | null>(null);
  
  const cartItems = context?.cartItems || context?.items || [];
  const removeFromCart = context?.removeFromCart || (() => {});

  // Função robusta para limpar valores (remove R$, espaços e converte para número)
  const parsePrice = (price: any): number => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      return parseFloat(price.replace(/[^0-9,.]/g, '').replace(',', '.')) || 0;
    }
    return 0;
  };

  const handleRemove = (id: number, name: string) => {
    removeFromCart(id);
    setToast(`${name} removido.`);
  };

  const displayItems = Array.isArray(cartItems) ? cartItems : [];
  
  const total = displayItems.reduce((acc, item) => {
    return acc + (parsePrice(item.price) * (item.quantity || 1));
  }, 0);

  return (
    <div className="min-h-screen bg-[#F4F1EA] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            Sua <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Sacola Solidária</span>
          </h1>
          <p className="text-xs text-stone-500 font-medium mt-0.5">Gerando autonomia e fomento social a cada escolha.</p>
        </div>

        {displayItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[2rem] border border-stone-200 shadow-md">
            <p className="text-stone-500 font-bold mb-4">Sua sacola está vazia.</p>
            <Link to="/produtos" className="text-[#F07147] font-bold underline">Ver nossa produção</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-4">
              {displayItems.map((item: any) => {
                const price = parsePrice(item.price);
                const subtotal = price * (item.quantity || 1);
                
                return (
                  <div key={item.id} className="bg-white border border-stone-200 rounded-3xl p-5 flex items-center justify-between gap-4 shadow-md shadow-stone-200/50">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#F8F6F0] rounded-2xl flex items-center justify-center text-3xl border border-stone-100">🧦</div>
                      <div>
                        <h3 className="font-extrabold text-stone-800 text-base">{item.name || "Item"}</h3>
                        <p className="text-xs text-stone-400 font-bold">Contribuição: R$ {price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-bold text-stone-500 bg-stone-50 px-3 py-1 rounded-xl border border-stone-200">
                        Qtd: {item.quantity || 1}
                      </span>
                      <p className="font-black text-stone-900 text-base text-right min-w-[70px]">
                        R$ {subtotal.toFixed(2)}
                      </p>
                      <button 
                        onClick={() => handleRemove(item.id, item.name)} 
                        className="text-stone-400 hover:text-red-500 p-1.5 rounded-xl transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-md shadow-stone-200/50 space-y-6">
                <h2 className="font-extrabold text-stone-900 text-base border-b border-stone-100 pb-2">Resumo Geral</h2>
                
                <div className="space-y-2 text-xs font-semibold text-stone-600">
                  <div className="flex justify-between"><span>Subtotal dos Itens</span><span>R$ {total.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-emerald-600">Frete Comunidade</span><span className="text-emerald-600">Grátis</span></div>
                  <div className="border-t border-stone-100 pt-3 flex justify-between text-sm font-black text-stone-950">
                    <span>Total do Apoio</span><span className="text-xl text-[#1E3A5F]">R$ {total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/pagamento")}
                  className="w-full bg-[#F07147] hover:bg-[#d85f37] text-white py-3 rounded-2xl font-bold text-sm text-center shadow-md transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-1"
                >
                  Avançar para o Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2563EB] text-white rounded-3xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-1 text-xs font-bold uppercase text-amber-300">
                  <Heart className="w-3.5 h-3.5 fill-amber-300 stroke-none" /> Destinação Transparente
                </div>
                <p className="text-[11px] text-stone-100 leading-relaxed font-medium">
                  O valor desta sacola financia diretamente insumos têxteis e manutenção das máquinas das nossas cooperadas locais.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}