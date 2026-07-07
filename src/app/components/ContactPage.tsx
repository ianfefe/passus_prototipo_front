import { useState } from "react";
import { Mail, MapPin, Send, User, Briefcase, MessageSquare, Code2, Rocket } from "lucide-react";

export function ContactPage() {
  const [toast, setToast] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui entraria a integração com back-end (ex: EmailJS, Formspree, ou sua API)
    setToast("Mensagem enviada com sucesso! Um especialista falará com você em breve.");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] py-12 px-6 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-500">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Bloco Principal Dividido */}
        <section className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-lg overflow-hidden flex flex-col lg:flex-row transition-colors duration-500 relative">
          
          {/* Efeito Glow no Modo Escuro */}
          <div className="hidden dark:block absolute top-0 left-0 w-96 h-96 bg-[#0B7269] blur-[150px] opacity-30 pointer-events-none"></div>

          {/* Lado Esquerdo - Informações */}
          <div className="lg:w-2/5 bg-slate-50 dark:bg-[#0B1120]/50 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between relative z-10 transition-colors duration-500">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-[#0B7269] dark:text-[#62D5B4] text-xs font-bold uppercase tracking-wider bg-teal-50 dark:bg-[#0B7269]/20 px-3 py-1.5 rounded-lg border border-teal-100 dark:border-[#0B7269]/40">
                <Rocket className="w-4 h-4" /> Vamos decolar?
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Construa o futuro da sua causa.
              </h1>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Preencha o formulário detalhando o seu desafio tecnológico. Nossa equipe de engenharia e design entrará em contato para agendar uma consultoria gratuita.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-[#0B7269] dark:text-[#62D5B4]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">E-mail Direto</p>
                  <p className="font-bold text-slate-900 dark:text-white">hello@propus.tech</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#0B7269] dark:text-[#62D5B4]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Sede</p>
                  <p className="font-bold text-slate-900 dark:text-white">Juiz de Fora, MG<br/><span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Atendimento Global</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="lg:w-3/5 p-10 md:p-14 relative z-10">
            <div className="mb-8">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#0B7269] dark:text-[#62D5B4]" /> Fale com um Especialista
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5"><User className="w-3 h-3" /> Nome Completo</label>
                  <input type="text" required placeholder="Ex: João Silva" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 focus:border-[#0B7269] dark:focus:border-[#62D5B4] outline-none text-sm transition-colors text-slate-900 dark:text-white" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5"><Briefcase className="w-3 h-3" /> ONG / Instituição</label>
                  <input type="text" required placeholder="Nome da organização" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 focus:border-[#0B7269] dark:focus:border-[#62D5B4] outline-none text-sm transition-colors text-slate-900 dark:text-white" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5"><Mail className="w-3 h-3" /> E-mail Corporativo</label>
                <input type="email" required placeholder="seu.nome@ong.org.br" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 focus:border-[#0B7269] dark:focus:border-[#62D5B4] outline-none text-sm transition-colors text-slate-900 dark:text-white" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5"><Code2 className="w-3 h-3" /> Tipo de Solução</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 focus:border-[#0B7269] dark:focus:border-[#62D5B4] outline-none text-sm text-slate-700 dark:text-slate-300 transition-colors appearance-none">
                  <option value="">Selecione uma opção...</option>
                  <option value="ecommerce">E-commerce Solidário (B2C)</option>
                  <option value="erp">Sistema de Gestão Interna (ERP)</option>
                  <option value="portal">Portal de Transparência / Dados</option>
                  <option value="outro">Outro Desafio Tecnológico</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5"><MessageSquare className="w-3 h-3" /> Detalhes do Projeto</label>
                <textarea required rows={4} placeholder="Conte-nos um pouco sobre a necessidade da sua instituição..." className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 focus:border-[#0B7269] dark:focus:border-[#62D5B4] outline-none text-sm resize-none transition-colors text-slate-900 dark:text-white"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0B7269] dark:bg-[#62D5B4] hover:bg-[#085a52] dark:hover:bg-[#4bc19f] text-white dark:text-[#0B1120] font-bold text-sm py-4 rounded-xl shadow-md dark:shadow-[0_0_15px_rgba(98,213,180,0.3)] flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 mt-4">
                <Send className="w-4 h-4" /> Enviar Solicitação
              </button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}