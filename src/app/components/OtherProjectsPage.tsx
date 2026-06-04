import { ExternalLink, Sparkles, Heart } from "lucide-react";

export function OtherProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Projeto Costura Solidária",
      description:
        "Capacitação em costura para mulheres em situação de vulnerabilidade social.",
      url: "https://example.com/costura",
      emoji: "🧵",
      color: "#FF1D8D",
      rotation: -1,
    },
    {
      id: 2,
      name: "Artesanato Comunitário",
      description:
        "Produção de artesanato sustentável com geração de renda local.",
      url: "https://example.com/artesanato",
      emoji: "🎨",
      color: "#F5A623",
      rotation: 1,
    },
    {
      id: 3,
      name: "TechEdu Jovens",
      description:
        "Inclusão digital e capacitação tecnológica para jovens de comunidades periféricas.",
      url: "https://example.com/techedu",
      emoji: "💻",
      color: "#4A90E2",
      rotation: -1.5,
    },
    {
      id: 4,
      name: "Horta Urbana Social",
      description:
        "Cultivo de alimentos orgânicos em espaços urbanos com distribuição comunitária.",
      url: "https://example.com/horta",
      emoji: "🌱",
      color: "#F07147",
      rotation: 1.5,
    },
    {
      id: 5,
      name: "Biblioteca Móvel",
      description:
        "Incentivo à leitura através de bibliotecas itinerantes em regiões carentes.",
      url: "https://example.com/biblioteca",
      emoji: "📚",
      color: "#9013FE",
      rotation: -1,
    },
    {
      id: 6,
      name: "Recicla & Transforma",
      description:
        "Reciclagem e reutilização de materiais com impacto ambiental positivo.",
      url: "https://example.com/recicla",
      emoji: "♻️",
      color: "#7ED321",
      rotation: 1,
    },
  ];

  // Função auxiliar amigável para mapear o número da rotação para classes do Tailwind
  const getRotationClass = (rotation: number) => {
    if (rotation === -1) return "-rotate-1";
    if (rotation === 1) return "rotate-1";
    if (rotation === -1.5 || rotation === -2) return "-rotate-2";
    if (rotation === 1.5 || rotation === 2) return "rotate-2";
    return "rotate-0";
  };

  return (
    // Fundo creme aconchegante com manchas de tinta lúdicas (Garante a unidade visual do site)
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16 selection:bg-[#F5A623]/30">
      
      {/* Elementos de aquarela flutuando nas laterais (Elimina a sensação de vazio) */}
      <div className="absolute top-12 -left-20 w-96 h-96 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[35%] -right-24 w-[600px] h-[600px] bg-[#7ED321]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F5A623]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        {/* Cabeçalho Alegre */}
        <div className="text-center mb-20 relative">
          <Sparkles className="absolute top-0 right-[22%] text-[#FF1D8D] w-6 h-6 animate-pulse hidden md:block" />
          <Heart className="absolute bottom-2 left-[24%] text-[#F07147] w-5 h-5 animate-bounce hidden md:block" />

          <span className="inline-block text-xs font-bold tracking-widest text-white uppercase bg-[#7ED321] px-4 py-2 rounded-full mb-4 shadow-md transform rotate-1">
            Rede de Solidariedade! 🌟
          </span>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-wider text-[#1E3A5F] mb-4">
            Outros Projetos Sociais
          </h1>

          <p className="text-gray-700 font-semibold max-w-xl mx-auto text-base leading-relaxed">
            Conheça outras iniciativas parceiras que, assim como o PASSUS, estão transformando o mundo com muito amor e carinho.
          </p>
          <div className="w-24 border-b-4 border-dashed border-[#FF1D8D] mx-auto mt-6 rounded-full" />
        </div>

        {/* Grid de Projetos - Estilo Mural de Fotos Descontraído */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              /* Agora usa a propriedade rotation para inclinar de forma divertida */
              className={`bg-white rounded-[36px] p-6 shadow-2xl transition-all duration-300 hover:rotate-0 hover:-translate-y-2 group border-4`}
              style={{
                borderColor: project.color,
              }}
            >
              {/* Banner interno do emoji com borda tracejada de costura */}
              <div
                className="w-full h-36 rounded-2xl flex items-center justify-center mb-5 shadow-inner border-4 border-dashed transition-colors duration-300 group-hover:bg-white"
                style={{ 
                  backgroundColor: `${project.color}15`,
                  borderColor: `${project.color}40`
                }}
              >
                {/* Círculo do emoji flutuante */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                  style={{ backgroundColor: project.color }}
                >
                  <span className="text-4xl drop-shadow-sm text-white">
                    {project.emoji}
                  </span>
                </div>
              </div>

              {/* Título do Projeto */}
              <h3 className="text-[#1E3A5F] mb-2 font-black text-xl">
                {project.name}
              </h3>
              
              {/* Descrição */}
              <p className="text-gray-700 font-medium text-sm mb-6 leading-relaxed h-12 overflow-hidden text-ellipsis">
                {project.description}
              </p>

              {/* Botão Saiba Mais Redesenhado */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-black text-sm tracking-wide shadow-md transition-all hover:scale-102 uppercase"
                style={{
                  backgroundColor: project.color,
                  color: "white",
                }}
              >
                <span>Saiba mais</span>
                <ExternalLink className="w-4 h-4 stroke-[3]" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}