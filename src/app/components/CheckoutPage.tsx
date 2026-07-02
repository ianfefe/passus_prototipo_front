import { ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div>
          <Link to="/carrinho" className="inline-flex items-center gap-1 text-xs font-bold text-stone-400 hover:text-[#F07147] mb-4 uppercase tracking-wider transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar para a Sacola
          </Link>
          <h1 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight">
            Concluir <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Sua Contribuição</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-7 space-y-4">
            <div className="bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider text-stone-400">1. Destino da Entrega</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input type="text" placeholder="CEP" className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-xs font-medium outline-none focus:border-[#3B82F6] focus:bg-white transition-all" />
                <input type="text" placeholder="Cidade" className="sm:col-span-2 w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-xs font-medium outline-none focus:border-[#3B82F6] focus:bg-white transition-all" />
                <input type="text" placeholder="Endereço Completo" className="sm:col-span-3 w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-xs font-medium outline-none focus:border-[#3B82F6] focus:bg-white transition-all" />
              </div>
            </div>

            <div className="bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider text-stone-400">2. Escolha o Método</h3>
              <div className="grid grid-cols-2 gap-4">
                <label className="border-2 border-[#F07147] bg-orange-50/20 p-4 rounded-2xl flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center">
                  <span className="text-2xl">✨</span>
                  <span className="text-xs font-bold text-stone-800">Pix Solidário</span>
                </label>
                <label className="border border-stone-200 bg-white p-4 rounded-2xl flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center hover:bg-stone-50 transition-colors">
                  <span className="text-2xl">💳</span>
                  <span className="text-xs font-bold text-stone-500">Cartão de Crédito</span>
                </label>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="font-extrabold text-stone-900 text-base">Revisão Final</h3>
            <div className="space-y-2 text-xs font-semibold text-stone-600 border-b border-stone-50 pb-4">
              <div className="flex justify-between"><span>Produtos Selecionados</span><span>R$ 110,00</span></div>
              <div className="flex justify-between"><span className="text-emerald-600">Frete Social Apoio</span><span>Grátis</span></div>
              <div className="flex justify-between text-sm font-black text-stone-950 pt-2"><span>Total Geral</span><span>R$ 110,00</span></div>
            </div>

            <button className="w-full bg-[#F07147] hover:bg-[#d85f37] text-white font-bold text-sm py-3 rounded-2xl shadow-sm transition-transform hover:-translate-y-0.5">
              Confirmar e Apoiar Projeto
            </button>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-[11px] text-stone-500 leading-relaxed font-medium flex gap-2 items-start">
              <ShieldCheck className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
              <span>Ambiente auditado. O recibo detalhado de aplicação dos fundos no projeto será enviado no seu e-mail cadastrado.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}