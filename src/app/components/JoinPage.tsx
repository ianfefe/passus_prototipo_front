import { useState } from "react";
import { Users, Heart, Award, Mail, Phone, Sparkles, Star } from "lucide-react";

export function JoinPage() {
  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    email: "",
    telefone: "",
    areaInteresse: "",
    disponibilidade: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const volunteerAreas = [
    {
      icon: "🎨",
      title: "Oficinas de Arte",
      description: "Ensine técnicas de desenho e pintura para crianças",
      borderColor: "border-[#4A90E2]",
      bgColor: "bg-[#4A90E2]/10",
      rotate: "-rotate-1"
    },
    {
      icon: "🧵",
      title: "Produção",
      description: "Ajude na confecção e controle de qualidade das meias",
      borderColor: "border-[#7ED321]",
      bgColor: "bg-[#7ED321]/10",
      rotate: "rotate-1"
    },
    {
      icon: "📢",
      title: "Comunicação",
      description: "Divulgue o projeto nas redes sociais e eventos",
      borderColor: "border-[#F5A623]",
      bgColor: "bg-[#F5A623]/10",
      rotate: "-rotate-1"
    },
    {
      icon: "💼",
      title: "Administrativo",
      description: "Apoie na gestão, finanças e organização",
      borderColor: "border-[#1E3A5F]",
      bgColor: "bg-[#1E3A5F]/10",
      rotate: "rotate-1"
    },
  ];

  const benefits = [
    { icon: <Heart className="w-5 h-5" />, text: "Transforme vidas através do impacto social direto" },
    { icon: <Users className="w-5 h-5" />, text: "Faça parte de uma comunidade engajada e solidária" },
    { icon: <Award className="w-5 h-5" />, text: "Desenvolva novas habilidades e experiências" },
  ];

  return (
    // Fundo creme aconchegante com manchas lúdicas de aquarela (Igual à AboutPage)
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16 selection:bg-[#F5A623]/30">
      
      {/* Formas lúdicas e coloridas no fundo (Nuvens / Aquarela) */}
      <div className="absolute top-10 -left-16 w-96 h-96 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -right-20 w-[600px] h-[600px] bg-[#F5A623]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-[500px] h-[500px] bg-[#7ED321]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F07147]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        {/* Header - Alegre e Convidativo */}
        <div className="text-center mb-20 relative">
          <Sparkles className="absolute top-0 right-[25%] text-[#7ED321] w-6 h-6 animate-pulse hidden md:block" />
          <Star className="absolute bottom-4 left-[26%] text-[#F5A623] w-5 h-5 animate-bounce hidden md:block" />

          <span className="inline-block text-xs font-bold tracking-widest text-white uppercase bg-[#F07147] px-4 py-2 rounded-full mb-4 shadow-md transform -rotate-1">
            Faça a Diferença com a Gente! ❤️
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-wider text-[#1E3A5F] mb-4">
            Junte-se ao <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2]">PASSUS</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
            Transforme vidas através do voluntariado! Seja parte da nossa missão de gerar oportunidades
            e impacto social positivo em comunidades que mais precisam.
          </p>
          <div className="w-24 border-b-4 border-dashed border-[#4A90E2] mx-auto mt-6 rounded-full" />
        </div>

        {/* Áreas de Atuação - Estilo Brinquedo / Caixa de Lápis */}
        <section className="mb-20">
          <h2 className="text-[#1E3A5F] text-2xl font-black text-center mb-10 flex items-center justify-center gap-3">
            <span className="text-3xl">🎯</span>
            Áreas de Atuação para Voluntários
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerAreas.map((area, index) => (
              <div
                key={index}
                className={`bg-white rounded-[32px] p-6 shadow-2xl border-4 ${area.borderColor} ${area.rotate} hover:rotate-0 transition-all duration-300 group`}
              >
                <div className={`w-16 h-16 ${area.bgColor} rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {area.icon}
                </div>
                <h3 className="text-[#1E3A5F] font-black mb-2 text-center text-lg">{area.title}</h3>
                <p className="text-gray-700 font-medium text-sm leading-relaxed text-center">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção Lado a Lado: Por que ser voluntário + Jornada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Benefícios - Estilo Card de Giz de Cera Escuro */}
          <section className="lg:col-span-5">
            <div className="bg-[#1E3A5F] rounded-[36px] p-8 text-white shadow-2xl h-full flex flex-col justify-center border-4 border-white/20 relative overflow-hidden transform -rotate-1">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                <span className="text-3xl">💚</span>
                Por Que Ser Voluntário?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/10 p-4 rounded-2xl border border-white/5 hover:bg-white/15 transition-all">
                    <div className="text-[#F07147] bg-white rounded-xl p-2 flex-shrink-0 shadow-md">
                      {benefit.icon}
                    </div>
                    <p className="text-white/90 text-sm font-bold leading-relaxed pt-1">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Como Funciona - Estilo Mural de Recados com Alfinete */}
          <section className="lg:col-span-7">
            <div className="bg-white rounded-[36px] p-8 shadow-2xl border-4 border-[#7ED321] h-full relative transform rotate-1">
              <div className="absolute -top-4 left-6 bg-[#7ED321] text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm uppercase transform -rotate-2">
                É super simples! 🚀
              </div>
              
              <h2 className="text-[#1E3A5F] text-2xl font-black mb-8 flex items-center gap-3">
                <span className="text-3xl">📝</span>
                Como Funciona a Rotina
              </h2>
              
              {/* Timeline estilo escolinha */}
              <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-6 before:w-1 before:bg-dashed before:border-l-2 before:border-gray-200">
                <div className="flex gap-4 relative">
                  <div className="w-12 h-12 rounded-full bg-[#F5A623] text-white flex items-center justify-center font-black text-lg shadow-md z-10 flex-shrink-0">1️⃣</div>
                  <div>
                    <h4 className="text-[#1E3A5F] font-black text-base mb-1">Cadastro</h4>
                    <p className="text-gray-700 font-medium text-sm leading-relaxed">Preencha o formulário abaixo contando seus superpoderes e horários. Nós te respondemos rapidinho!</p>
                  </div>
                </div>
                
                <div className="flex gap-4 relative">
                  <div className="w-12 h-12 rounded-full bg-[#7ED321] text-white flex items-center justify-center font-black text-lg shadow-md z-10 flex-shrink-0">2️⃣</div>
                  <div>
                    <h4 className="text-[#1E3A5F] font-black text-base mb-1">Treinamento</h4>
                    <p className="text-gray-700 font-medium text-sm leading-relaxed">Participe de um encontro super acolhedor para conhecer a turminha, a equipe e tirar todas as dúvidas.</p>
                  </div>
                </div>

                <div className="flex gap-4 relative">
                  <div className="w-12 h-12 rounded-full bg-[#4A90E2] text-white flex items-center justify-center font-black text-lg shadow-md z-10 flex-shrink-0">3️⃣</div>
                  <div>
                    <h4 className="text-[#1E3A5F] font-black text-base mb-1">Atuação</h4>
                    <p className="text-gray-700 font-medium text-sm leading-relaxed">Hora de espalhar alegria! Você começa a atuar na sua área com carinho, reuniões mensais e muito apoio.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Formulário de Inscrição - Estilo "Folha de Caderno / Artesanato" */}
        <section>
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border-4 border-[#F07147] max-w-3xl mx-auto relative overflow-hidden">
            {/* Detalhes de círculos nas pontas parecendo carimbos */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#F5A623]/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#7ED321]/20 rounded-full blur-xl pointer-events-none" />

            <div className="text-center mb-8">
              <h2 className="text-[#1E3A5F] text-2xl md:text-3xl font-black mb-2 flex items-center justify-center gap-2">
                <span className="text-3xl">✨</span>
                Inscreva-se Como Voluntário
              </h2>
              <p className="text-gray-600 font-semibold text-sm">
                Preencha os campos abaixo e venha colorir o mundo com a gente!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Nome Completo *</label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu lindo nome"
                    className="w-full px-4 py-3 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Cidade / UF *</label>
                  <input
                    type="text"
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    placeholder="Onde você mora?"
                    className="w-full px-4 py-3 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">E-mail *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Qual oficina ou área você mais gostou? *</label>
                <select
                  value={formData.areaInteresse}
                  onChange={(e) => setFormData({ ...formData, areaInteresse: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-bold transition-colors text-sm"
                  required
                >
                  <option value="">Selecione uma área do coração</option>
                  <option value="oficinas">🎨 Oficinas de Arte</option>
                  <option value="producao">🧵 Produção e Costura</option>
                  <option value="comunicacao">📢 Comunicação e Redes</option>
                  <option value="administrativo">💼 Organização e Apoio</option>
                </select>
              </div>

              <div>
                <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Sua Disponibilidade *</label>
                <select
                  value={formData.disponibilidade}
                  onChange={(e) => setFormData({ ...formData, disponibilidade: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-bold transition-colors text-sm"
                  required
                >
                  <option value="">Escolha seus melhores dias</option>
                  <option value="manha">🌅 Manhã (08h-12h)</option>
                  <option value="tarde">☀️ Tarde (13h-17h)</option>
                  <option value="noite">🌙 Noite (18h-21h)</option>
                  <option value="fds">🎈 Finais de semana</option>
                  <option value="flexivel">✨ Sou flexível!</option>
                </select>
              </div>

              <div>
                <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Conte-nos Mais Sobre Você</label>
                <textarea
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Conta pra gente: por que você quer fazer parte do PASSUS? Escreva o que seu coração mandar..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors resize-none text-sm"
                />
              </div>

              <div className="pt-2">
                {/* Botão de envio largo e saltitante */}
                <button
                  type="submit"
                  className="w-full bg-[#F07147] hover:bg-[#e5643a] text-white py-4 rounded-full transition-all shadow-xl hover:shadow-xl font-black text-base hover:scale-102 uppercase tracking-wider"
                >
                  Enviar Minha Inscrição 💌
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Rodapé de Dúvidas - Estilo Selo de Correspondência */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-3xl px-8 py-4 shadow-2xl border-3 border-[#1E3A5F] transform -rotate-1">
            <p className="text-[#1E3A5F] font-black text-sm mb-2">Ficou com alguma dúvida sobre o voluntariado?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-700 font-bold">
              <div className="flex items-center gap-2 hover:text-[#F07147] transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-[#F07147]" />
                <span>voluntariado@passus.com</span>
              </div>
              <span className="hidden sm:inline text-gray-300">|</span>
              <div className="flex items-center gap-2 hover:text-[#F07147] transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-[#F07147]" />
                <span>(11) 9999-9999</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}