import { ArrowUpRight, Heart } from "lucide-react";

export function OtherProjectsPage() {
  const projects = [
    { id: 1, title: "Oficina Costura Criativa", area: "Capacitação", desc: "Formação técnica em costura industrial para mulheres chefes de família da região metropolitana." },
    { id: 2, title: "Têxtil Verde Sustentável", area: "Ecologia", desc: "Reaproveitamento criativo de retalhos de malha descartados por malharias locais." },
    { id: 3, title: "Logística Jovem Autônomo", area: "Inclusão", desc: "Capacitação em rotinas de distribuição e e-commerce para jovens da rede pública de ensino." },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1EA] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-5xl mx-auto space-y-10">
        
        <div className="border-b border-stone-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-stone-900 tracking-tight">
              Nossa <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Rede de Impacto</span>
            </h1>
            <p className="text-stone-500 text-sm font-medium mt-1">Conheça as frentes integradas que dão vida à nossa causa social.</p>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-xl px-4 py-2 text-xs font-bold text-[#F07147] w-fit shadow-sm">
            <Heart className="w-4 h-4 fill-[#F07147] stroke-none" /> Projetos Ativos
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-white border border-stone-200 rounded-[2rem] p-8 shadow-md shadow-stone-200/50 flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 border border-stone-200 text-stone-500 px-3 py-1 rounded-lg">
                  {proj.area}
                </span>
                <h3 className="font-extrabold text-stone-900 text-xl tracking-tight leading-tight">
                  {proj.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed font-medium">
                  {proj.desc}
                </p>
              </div>

              <a href="#" className="text-xs font-bold text-[#1E3A5F] hover:text-[#F07147] flex items-center gap-1 transition-colors border-t border-stone-100 pt-4">
                Conhecer histórico de impacto <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}