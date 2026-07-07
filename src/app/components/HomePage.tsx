import { Link } from "react-router";
import { Code2, ArrowRight, Smartphone, Globe, ShieldCheck, Heart, Server, ExternalLink, TrendingUp } from "lucide-react";
import logoPassus from "@/assets/passus.jpg";

export function HomePage() {
  return (
    <div className="font-sans pb-16 selection:bg-[#0B7269]/20 dark:selection:bg-[#62D5B4]/30">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-24 relative z-10">
        
        {/* HERO BANNER */}
        <section className="text-center space-y-6 max-w-4xl mx-auto pt-10 md:pt-20 pb-8">
          <div className="inline-flex items-center gap-2 text-[#0B7269] dark:text-[#62D5B4] text-xs font-bold uppercase tracking-wider bg-teal-50 dark:bg-[#0B7269]/20 px-4 py-1.5 rounded-lg border border-teal-100 dark:border-[#0B7269]/40 backdrop-blur-sm transition-colors duration-500">
            <Code2 className="w-4 h-4" /> Engenharia de Software para o Bem
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-colors duration-500">
            Código que transforma. Tecnologia para o <span className="bg-gradient-to-r from-[#0B7269] to-[#62D5B4] bg-clip-text text-transparent dark:drop-shadow-[0_0_20px_rgba(98,213,180,0.3)]">Terceiro Setor.</span>
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto transition-colors duration-500">
            A Propus constrói e-commerces, sistemas de gestão e portais de transparência que escalam o impacto de ONGs, fundações e projetos sociais.
          </p>
          <div className="flex items-center justify-center gap-4 pt-6">
            <Link to="/produtos" className="bg-[#0B7269] dark:bg-[#62D5B4] hover:bg-[#085a52] dark:hover:bg-[#4bc19f] text-white dark:text-[#0B1120] px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-lg dark:shadow-[0_0_20px_rgba(98,213,180,0.3)] hover:-translate-y-0.5">
              Ver Nossos Cases
            </Link>
          </div>
        </section>

        {/* CASE DE DESTAQUE: PROJETO PASSUS */}
        <section className="bg-white dark:bg-[#111827] rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden relative transition-colors duration-500">
          <div className="hidden dark:block absolute top-0 right-0 w-96 h-96 bg-[#0B7269] blur-[120px] opacity-20 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
            {/* Lado Esquerdo - Descrição */}
            <div className="p-8 md:p-14 flex flex-col justify-center space-y-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0B7269] dark:text-[#0B1120] bg-teal-50 dark:bg-[#62D5B4] px-3 py-1 rounded-md w-fit">Case de Sucesso</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">E-commerce Solidário: Projeto Passus</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Desenvolvemos do zero a plataforma de vendas do Projeto Passus. Uma infraestrutura robusta de e-commerce integrada com gateways de doação e cálculo de frete, permitindo que a associação vendesse suas meias artesanais para todo o Brasil.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300"><ShieldCheck className="w-5 h-5 text-[#0B7269] dark:text-[#62D5B4]" /> Checkout Seguro & Transparente</li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300"><Smartphone className="w-5 h-5 text-[#0B7269] dark:text-[#62D5B4]" /> Design Mobile-First Performance</li>
              </ul>
              <Link to="/produtos" className="text-[#0B7269] dark:text-[#62D5B4] font-bold text-sm flex items-center gap-1 hover:text-[#085a52] dark:hover:text-white transition-colors pt-4">
                Explorar detalhes técnicos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Lado Direito - Mini Dashboard de Informações */}
            <div className="bg-slate-50 dark:bg-[#0B1120]/50 p-8 md:p-14 flex items-center justify-center border-l border-slate-100 dark:border-slate-800/50 transition-colors duration-500">
              
              <div className="w-full max-w-sm bg-white dark:bg-[#1E293B] rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-6 hover:scale-105 transition-all duration-500">
                
                {/* Cabeçalho do Card */}
                <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-700 pb-4">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-white rounded-xl flex items-center justify-center shadow-inner shrink-0">
                    <img src={logoPassus} alt="Passus Case" className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-tight">passus.org.br</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Sistema Operante</span>
                    </div>
                  </div>
                </div>

                {/* Métricas e Informações */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-teal-50 dark:bg-[#0B1120] p-3 rounded-xl border border-teal-100 dark:border-slate-700">
                    <Heart className="w-4 h-4 text-[#0B7269] dark:text-[#62D5B4] mb-2" />
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Impacto</p>
                    <p className="font-black text-slate-800 dark:text-white text-sm">100% Social</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-[#0B1120] p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                    <TrendingUp className="w-4 h-4 text-[#0B7269] dark:text-[#62D5B4] mb-2" />
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Tecnologia</p>
                    <p className="font-black text-slate-800 dark:text-white text-sm">React & Vite</p>
                  </div>
                </div>

                {/* Botão de Link Externo */}
                <a 
                  href="/prototipo_propus_case/passus/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 dark:bg-[#62D5B4] hover:bg-slate-800 dark:hover:bg-[#4bc19f] text-white dark:text-[#0B1120] font-bold text-sm py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Visitar Site do Projeto <ExternalLink className="w-4 h-4" />
                </a>

              </div>

            </div>
          </div>
        </section>

        {/* NOSSAS VERTICAIS DE SOLUÇÃO */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-md dark:shadow-lg space-y-4 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all group">
            <Globe className="w-8 h-8 text-[#0B7269] dark:text-[#62D5B4] group-hover:scale-110 transition-transform" />
            <h3 className="font-extrabold text-slate-900 dark:text-white text-lg transition-colors">E-commerces B2C</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed transition-colors">Lojas virtuais otimizadas para ONGs venderem produtos sociais e escalarem sua captação de recursos.</p>
          </div>
          <div className="bg-[#0B7269] border border-[#0B7269] rounded-3xl p-8 shadow-lg dark:shadow-[0_0_30px_rgba(11,114,105,0.2)] space-y-4 text-white hover:-translate-y-1 transition-transform group">
            <Server className="w-8 h-8 text-[#62D5B4] group-hover:scale-110 transition-transform" />
            <h3 className="font-extrabold text-white text-lg">Sistemas de Gestão</h3>
            <p className="text-teal-50 text-sm font-medium leading-relaxed">ERPs customizados para controle de voluntariado, gestão de alunos e acompanhamento de doações.</p>
          </div>
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-md dark:shadow-lg space-y-4 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all group">
            <ShieldCheck className="w-8 h-8 text-[#0B7269] dark:text-[#62D5B4] group-hover:scale-110 transition-transform" />
            <h3 className="font-extrabold text-slate-900 dark:text-white text-lg transition-colors">Portais Transparência</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed transition-colors">Plataformas de dados abertos para que investidores acompanhem o impacto real de cada centavo doado.</p>
          </div>
        </section>

      </div>
    </div>
  );
}