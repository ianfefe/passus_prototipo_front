import { BarChart3, Users, Scissors, Heart } from "lucide-react";

export function AdminAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] bg-blue-50 px-2.5 py-0.5 rounded-md">Painel de Controle Interno</span>
          <h1 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight mt-1">
            Métricas de <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Transparência Social</span>
          </h1>
        </div>

        {/* Blocos de Dados de Impacto Humanos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-2">
            <div className="w-9 h-9 bg-orange-50 text-[#F07147] rounded-xl flex items-center justify-center"><Heart className="w-4 h-4 fill-[#F07147] stroke-none" /></div>
            <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">Fundo Arrecadado</p>
            <p className="text-xl font-black text-stone-900">R$ 14.350,00</p>
          </div>

          <div className="bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-2">
            <div className="w-9 h-9 bg-blue-50 text-[#3B82F6] rounded-xl flex items-center justify-center"><Users className="w-4 h-4" /></div>
            <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">Alunos Atendidos</p>
            <p className="text-xl font-black text-stone-900">42 Famílias</p>
          </div>

          <div className="bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-2">
            <div className="w-9 h-9 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center"><Scissors className="w-4 h-4" /></div>
            <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">Peças Concluídas</p>
            <p className="text-xl font-black text-stone-900">1.120 Pares</p>
          </div>

          <div className="bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-2">
            <div className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center"><BarChart3 className="w-4 h-4" /></div>
            <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">Oficinas Ativas</p>
            <p className="text-xl font-black text-stone-900">3 Polos Locais</p>
          </div>
        </div>

        {/* Gráfico/Placeholder de Relatório */}
        <div className="bg-white border border-orange-100/30 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="font-extrabold text-base text-stone-900">Evolução Mensal da Inclusão Cooperativa</h3>
          <div className="w-full h-48 bg-[#FAF7F0] rounded-2xl flex items-center justify-center text-xs font-bold text-stone-400 border border-orange-100/20">
            Área reservada para o gráfico de linhas de faturamento líquido vs turmas formadas.
          </div>
        </div>

      </div>
    </div>
  );
}