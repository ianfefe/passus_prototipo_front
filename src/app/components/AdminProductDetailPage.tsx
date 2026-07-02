import { Link } from "react-router";
import { ArrowLeft, Save } from "lucide-react";

export function AdminProductDetailPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] py-12 px-6 font-sans text-stone-800">
      <div className="w-full max-w-2xl mx-auto bg-white border border-orange-100/40 rounded-3xl shadow-sm p-6 md:p-8 space-y-6">
        
        <div>
          <Link to="/admin/produtos" className="inline-flex items-center gap-1 text-xs font-bold text-stone-400 hover:text-[#F07147] mb-3 uppercase tracking-wider">
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar para a Lista
          </Link>
          <h1 className="text-2xl font-black text-stone-900 tracking-tight">
            Detalhes do <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Lote de Produção</span>
          </h1>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">Nome da Peça / Modelo</label>
              <input type="text" placeholder="Ex: Meia Cano Alto Premium - Inverno" className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-sm font-medium outline-none" />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">Preço de Repasse Social</label>
              <input type="text" placeholder="R$ 00,00" className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-sm font-medium outline-none" />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">Quantidade Tecida</label>
              <input type="number" placeholder="Ex: 50" className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-sm font-medium outline-none" />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-stone-600 uppercase tracking-wider">Histórico / Oficina Envolvida</label>
              <textarea rows={3} placeholder="Descreva qual polo comunitário ou turma costurou este lote para exibir no card transparente do produto..." className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-sm font-medium outline-none resize-none" />
            </div>
          </div>

          <button type="submit" className="w-full bg-[#F07147] hover:bg-[#d85f37] text-white py-3 rounded-2xl font-bold text-sm shadow-sm flex items-center justify-center gap-1.5 transition-transform hover:-translate-y-0.5">
            <Save className="w-4 h-4" /> Salvar Alterações do Lote
          </button>
        </form>

      </div>
    </div>
  );
}