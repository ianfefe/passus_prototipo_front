import { Laptop, Database, Globe, ArrowRight, Code2 } from "lucide-react";

export function ProductsPage() {
  const solutions = [
    { id: 1, name: "E-commerce Projeto Passus", type: "Plataforma de Vendas", tag: "Case de Sucesso", icon: <Globe className="w-12 h-12 text-[#0B7269] dark:text-[#62D5B4]" />, tech: "React & Node.js" },
    { id: 2, name: "Sistema de Gestão EcoONG", type: "ERP Interno", tag: "Gestão Operacional", icon: <Database className="w-12 h-12 text-[#0B7269] dark:text-[#0B7269]" />, tech: "Python & PostgreSQL" },
    { id: 3, name: "Portal Transparência 360", type: "Dashboard de Dados", tag: "Auditoria", icon: <Laptop className="w-12 h-12 text-[#0B7269] dark:text-blue-400" />, tech: "Next.js & AWS" },
  ];

  return (
    <div className="min-h-screen py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        <section className="bg-white dark:bg-[#111827] text-slate-900 dark:text-white p-8 md:p-12 rounded-[2.5rem] shadow-md dark:shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between items-start gap-6 relative overflow-hidden transition-colors duration-500">
          <div className="hidden dark:block absolute top-0 right-0 w-80 h-80 bg-[#0B7269] blur-[100px] opacity-20"></div>
          <div className="space-y-4 max-w-2xl relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest bg-teal-50 dark:bg-[#0B7269]/20 text-[#0B7269] dark:text-[#62D5B4] px-3 py-1.5 rounded-md border border-teal-100 dark:border-[#0B7269]/40 transition-colors">
              Portfólio de Soluções
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white transition-colors">O que a Propus constrói?</h1>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-lg transition-colors">De e-commerces a sistemas internos robustos. Conheça as ferramentas e os cases de quem já transformou seu impacto social com a nossa tecnologia.</p>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {solutions.map((sol) => (
            <div key={sol.id} className="group bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-lg flex flex-col hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 transition-all cursor-pointer">
              <div className="w-full h-56 bg-slate-50 dark:bg-[#0B1120] flex items-center justify-center relative p-6 border-b border-slate-200 dark:border-slate-800 rounded-t-3xl overflow-hidden transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px] opacity-50 transition-colors"></div>
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300 bg-white dark:bg-[#1E293B] p-5 rounded-2xl shadow-md dark:shadow-xl border border-slate-100 dark:border-slate-700">
                  {sol.icon}
                </div>
                <span className="absolute top-4 left-4 text-[9px] font-bold uppercase bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-md text-slate-600 dark:text-slate-300 shadow-sm transition-colors">{sol.tag}</span>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest block transition-colors">{sol.type}</span>
                  <h3 className="text-slate-900 dark:text-white font-black text-xl tracking-tight leading-tight group-hover:text-[#0B7269] dark:group-hover:text-[#62D5B4] transition-colors">{sol.name}</h3>
                </div>
                
                <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 transition-colors">
                   <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 transition-colors">
                     <Code2 className="w-3 h-3 text-[#0B7269]" /> {sol.tech}
                   </div>
                   <button className="text-[#0B7269] dark:text-[#62D5B4] hover:text-[#085a52] dark:hover:text-white font-bold text-xs flex items-center gap-1 transition-colors">
                     Ver Case <ArrowRight className="w-3.5 h-3.5" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}