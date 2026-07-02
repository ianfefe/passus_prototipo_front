import { ShieldCheck, ArrowLeft, Truck, Package } from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

export function CheckoutPage() {
  const context = useCart();
  const cartItems = context?.cartItems || context?.items || [];
  
  const total = Array.isArray(cartItems) 
    ? cartItems.reduce((acc: number, item: any) => acc + ((parseFloat(item.price) || 0) * (item.quantity || 1)), 0)
    : 0;

  return (
    <div className="min-h-screen bg-[#F4F1EA] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Navegação */}
        <div>
          <Link to="/carrinho" className="inline-flex items-center gap-1 text-xs font-bold text-stone-500 hover:text-[#F07147] mb-4 uppercase tracking-wider transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar para a Sacola
          </Link>
          <h1 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight">
            Finalizar <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Contribuição</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Lado Esquerdo: Dados de Envio e Pagamento */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-stone-200 rounded-[2rem] p-8 shadow-md shadow-stone-200/50 space-y-4">
              <h3 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider text-stone-400">1. Destino da Entrega</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input type="text" placeholder="CEP" className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-stone-50 text-xs font-medium outline-none" />
                <input type="text" placeholder="Cidade" className="sm:col-span-2 w-full px-4 py-3 rounded-2xl border border-stone-200 bg-stone-50 text-xs font-medium outline-none" />
                <input type="text" placeholder="Endereço Completo" className="sm:col-span-3 w-full px-4 py-3 rounded-2xl border border-stone-200 bg-stone-50 text-xs font-medium outline-none" />
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-[2rem] p-8 shadow-md shadow-stone-200/50 space-y-4">
              <h3 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider text-stone-400">2. Método de Apoio</h3>
              <div className="flex gap-4">
                <div className="border-2 border-[#F07147] bg-orange-50/20 p-5 rounded-2xl flex-1 flex flex-col items-center gap-2 text-center cursor-pointer">
                  <span className="text-3xl">✨</span>
                  <span className="text-xs font-bold text-stone-800">Pix Solidário</span>
                </div>
              </div>
              <div className="bg-stone-900 rounded-2xl p-6 flex flex-col items-center gap-4 text-center">
                 <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center p-2">
                    <span className="text-[9px] text-stone-800 font-bold">QR CODE DEMO<br/>(Link p/ Instagram)</span>
                 </div>
                 <a href="https://www.instagram.com/projeto.passus/" target="_blank" rel="noreferrer" className="text-xs font-bold text-stone-300 underline">Abrir via Instagram</a>
              </div>
            </div>
          </div>

          {/* Lado Direito: Resumo da Compra (Preenchendo o vazio) */}
          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-[2rem] p-8 shadow-md shadow-stone-200/50 space-y-6 sticky top-28">
            <div className="flex items-center gap-2 font-extrabold text-stone-900 border-b border-stone-100 pb-4">
               <Package className="w-5 h-5 text-[#3B82F6]" /> Resumo do Apoio
            </div>

            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
              {cartItems.map((item: any) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-stone-600 font-medium">{item.quantity}x {item.name}</span>
                  <span className="font-bold text-stone-900">R$ {(item.price * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-100 pt-6 space-y-4">
              <div className="flex justify-between text-sm font-black text-stone-950">
                <span>Total Geral</span>
                <span className="text-2xl text-[#1E3A5F]">R$ {total.toFixed(2)}</span>
              </div>
              
              <button className="w-full bg-[#F07147] hover:bg-[#d85f37] text-white font-bold text-sm py-4 rounded-2xl shadow-md transition-transform hover:-translate-y-0.5">
                Confirmar Contribuição
              </button>

              <div className="bg-[#F8F6F0] rounded-2xl p-4 text-[11px] text-stone-500 leading-relaxed font-medium flex gap-2 items-start border border-stone-200">
                <ShieldCheck className="w-5 h-5 text-[#3B82F6] shrink-0" />
                <span>O recibo detalhado da sua doação e o comprovante de compra serão enviados ao seu e-mail imediatamente após a confirmação.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}