import { Terminal, Users, Globe2 } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] py-12 px-6 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        <section className="bg-white dark:bg-[#111827] rounded-3xl p-8 md:p-14 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl space-y-8 relative overflow-hidden transition-colors duration-500">
          {/* Efeito Glow apenas no dark mode */}
          <div className="hidden dark:block absolute -top-32 -left-32 w-96 h-96 bg-[#0B7269] blur-[150px] opacity-20 pointer-events-none"></div>
          
          <div className="space-y-3 text-center md:text-left relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B7269] dark:text-[#62D5B4] transition-colors">
              Nossa História
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">
              Acreditamos que a tecnologia deve servir ao <span className="text-[#0B7269] dark:text-[#62D5B4] dark:drop-shadow-[0_0_15px_rgba(98,213,180,0.3)] transition-colors">impacto humano.</span>
            </h1>
          </div>
          
          <div className="text-slate-600 dark:text-slate-400 space-y-5 leading-relaxed font-medium text-sm md:text-base border-l-4 border-[#0B7269] pl-6 bg-slate-50 dark:bg-[#0B1120]/50 p-6 rounded-r-2xl relative z-10 transition-colors duration-500">
            <p>
              A <strong className="text-slate-900 dark:text-white transition-colors">Propus</strong> nasceu com a missão de reduzir a lacuna tecnológica entre o mercado corporativo e o terceiro setor. Nós enxergamos que ONGs e projetos sociais possuem propósitos incríveis, mas frequentemente esbarram na falta de infraestrutura digital para escalar suas ações.
            </p>
            <p>
              Nós projetamos, desenhamos e codificamos soluções de software — como o e-commerce do <strong className="text-slate-900 dark:text-white transition-colors">Projeto Passus</strong> —, entregando produtos digitais de alta performance que permitem que associações arrecadem mais, operem melhor e transformem a vida de mais pessoas.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#111827] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg flex flex-col items-center text-center gap-4 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-teal-50 dark:bg-[#0B7269]/20 rounded-xl flex items-center justify-center text-[#0B7269] dark:text-[#62D5B4] border border-transparent dark:border-[#0B7269]/40 transition-colors">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white transition-colors">Código Limpo</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed transition-colors">Desenvolvemos arquiteturas modernas, seguras e fáceis de manter pelas equipes técnicas dos projetos.</p>
          </div>

          <div className="bg-white dark:bg-[#111827] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg flex flex-col items-center text-center gap-4 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-teal-50 dark:bg-[#0B7269]/20 rounded-xl flex items-center justify-center text-[#0B7269] dark:text-[#62D5B4] border border-transparent dark:border-[#0B7269]/40 transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white transition-colors">Foco no Humano</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed transition-colors">UX/UI Design pensado para doadores e voluntários, facilitando a navegação e a conversão de apoio.</p>
          </div>

          <div className="bg-white dark:bg-[#111827] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg flex flex-col items-center text-center gap-4 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-slate-100 dark:bg-[#0B7269]/20 rounded-xl flex items-center justify-center text-[#0B7269] dark:text-[#62D5B4] border border-transparent dark:border-[#0B7269]/40 transition-colors">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white transition-colors">Escala Global</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed transition-colors">Tecnologia escalável em nuvem para que projetos locais possam impactar pessoas em qualquer lugar.</p>
          </div>
        </section>

      </div>
    </div>
  );
}