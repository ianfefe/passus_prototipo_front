import { useState } from "react";
import { Heart, ArrowRight, Handshake, Mail, User, Phone, MessageSquare, Send, ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import { Toast } from "./Toast";

export function JoinPage() {
  const [toast, setToast] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio do formulário
    setToast("Mensagem enviada! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Intro */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F07147]">Faça parte da mudança</span>
          <h1 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight">
            Como caminhar com o{" "}
            <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">
              PASSUS
            </span>
          </h1>
          <p className="text-stone-500 text-sm md:text-base font-medium max-w-2xl mx-auto">
            Escolha a forma de fortalecer o nosso projeto e ajudar a espalhar autonomia e impacto social para as comunidades que mais precisam.
          </p>
        </div>

        {/* Opções de Engajamento Direto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] p-8 border border-stone-200 shadow-md shadow-stone-200/50 flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-[#F8F6F0] border border-stone-100 rounded-2xl flex items-center justify-center text-[#F07147] shadow-sm">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-stone-900 text-xl tracking-tight">Adquirindo Produtos</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-medium">
                Toda a renda líquida obtida na venda das meias e produtos artesanais é revertida para custear materiais, maquinários e infraestrutura para as alunas do projeto.
              </p>
            </div>
            <Link to="/produtos" className="w-full bg-[#F07147] hover:bg-[#d85f37] text-white font-bold text-sm py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5">
              Ver Catálogo Solidário <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-stone-200 shadow-md shadow-stone-200/50 flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-[#3B82F6] shadow-sm">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-stone-900 text-xl tracking-tight">Parcerias e Doações</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-medium">
                Apoie conectando sua empresa, doando insumos têxteis (como retalhos e linhas) ou patrocinando turmas inteiras nas nossas oficinas de capacitação.
              </p>
            </div>
            <a href="#formulario" className="w-full bg-[#1E3A5F] hover:bg-[#152a46] text-white font-bold text-sm py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5">
              Quero ser Parceiro <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* GRANDE BLOCO EDITORIAL COM FORMULÁRIO DE CADASTRO */}
        <section id="formulario" className="bg-white border border-stone-200 rounded-[2.5rem] shadow-md shadow-stone-200/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* Lado Esquerdo - Texto Inspiracional */}
            <div className="lg:col-span-2 bg-[#1E3A5F] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="space-y-6 relative z-10">
                <Heart className="w-8 h-8 text-[#F07147] fill-[#F07147]" />
                <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                  Seu tempo e talento também transformam vidas.
                </h2>
                <p className="text-stone-300 text-sm leading-relaxed font-medium">
                  Estamos sempre em busca de mentores voluntários, profissionais de logística, design e empresas dispostas a adotar a causa. Preencha o formulário e nossa equipe de acolhimento entrará em contato.
                </p>
              </div>

              <div className="mt-12 space-y-4 relative z-10 text-xs font-bold text-stone-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                  voluntariado@passus.org.br
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                  (32) 3333-3333
                </div>
              </div>
            </div>

            {/* Lado Direito - Formulário */}
            <div className="lg:col-span-3 p-8 md:p-12 bg-white">
              <div className="mb-8">
                <h3 className="text-xl font-extrabold text-stone-900">Formulário de Cadastro</h3>
                <p className="text-xs text-stone-500 font-medium mt-1">Como você gostaria de caminhar conosco?</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5"><User className="w-3 h-3" /> Nome Completo</label>
                    <input type="text" required placeholder="Seu nome" className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-[#3B82F6] outline-none text-sm transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5"><Phone className="w-3 h-3" /> Telefone / WhatsApp</label>
                    <input type="tel" required placeholder="(00) 00000-0000" className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-[#3B82F6] outline-none text-sm transition-colors" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5"><Mail className="w-3 h-3" /> E-mail</label>
                  <input type="email" required placeholder="seuemail@exemplo.com" className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-[#3B82F6] outline-none text-sm transition-colors" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5"><Handshake className="w-3 h-3" /> Área de Interesse</label>
                  <select required className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-[#3B82F6] outline-none text-sm text-stone-700 transition-colors appearance-none">
                    <option value="">Selecione uma opção...</option>
                    <option value="voluntario_mentor">Voluntário: Mentoria e Aulas</option>
                    <option value="voluntario_operacional">Voluntário: Operacional e Logística</option>
                    <option value="parceiro_empresa">Empresa: Compras Corporativas</option>
                    <option value="parceiro_doacao">Doação de Insumos (Tecidos/Linhas)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5"><MessageSquare className="w-3 h-3" /> Mensagem (Opcional)</label>
                  <textarea rows={3} placeholder="Conte-nos um pouco sobre você ou sua empresa..." className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-[#3B82F6] outline-none text-sm resize-none transition-colors"></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] hover:opacity-95 text-white font-bold text-sm py-4 rounded-2xl shadow-md flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 mt-2">
                  <Send className="w-4 h-4" /> Enviar Cadastro
                </button>
              </form>
            </div>

          </div>
        </section>

      </div>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}