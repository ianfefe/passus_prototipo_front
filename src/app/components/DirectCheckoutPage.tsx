import { Link } from "react-router";
import { ArrowLeft, CheckCircle } from "lucide-react";

export function DirectCheckoutPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-xl mx-auto bg-white border border-orange-100/30 rounded-3xl shadow-sm p-6 md:p-8 space-y-6">
        
        <div className="text-center space-y-1">
          <Link to="/produtos" className="inline-flex items-center gap-1 text-xs font-bold text-stone-400 hover:text-[#F07147] mb-2 uppercase tracking-wider">
            <ArrowLeft className="w-3.5 h-3.5" /> Cancelar Fluxo
          </Link>
          <h1 className="text-2xl font-black text-stone-900 tracking-tight">
            Apoio <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Imediato</span>
          </h1>
          <p className="text-xs text-stone-400 font-medium">Você escolheu o Checkout Expresso para 1 item</p>
        </div>

        <div className="bg-[#FAF7F0] border border-orange-100/40 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🧦</span>
            <div>
              <h4 className="font-extrabold text-stone-900 text-sm">Meia Cano Alto Premium</h4>
              <p className="text-xs text-stone-400 font-bold">Quantidade: 1 unidade</p>
            </div>
          </div>
          <span className="font-black text-stone-900 text-base">R$ 35,00</span>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-[#161F28] hover:bg-stone-800 text-white font-bold text-sm py-3 rounded-2xl flex items-center justify-center gap-2 transition-colors">
            <span>📱 Pagar via PIX Copia e Cola</span>
          </button>
          
          <div className="text-center">
            <span className="text-[11px] text-stone-400 font-bold uppercase tracking-wider">Ou insira os dados do cartão abaixo</span>
          </div>

          <input type="text" placeholder="Número do Cartão de Crédito" className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-xs font-medium outline-none" />
        </div>

        <button className="w-full bg-[#F07147] hover:bg-[#d85f37] text-white font-bold text-sm py-3 rounded-2xl shadow-sm transition-transform hover:-translate-y-0.5">
          Concluir Apoio Instantâneo
        </button>

        <p className="text-center text-[10px] text-stone-400 font-medium flex items-center justify-center gap-1">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Operação segura protegida pela rede PASSUS.
        </p>

      </div>
    </div>
  );
}