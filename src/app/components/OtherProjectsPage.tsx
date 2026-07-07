import { ArrowUpRight, Heart } from "lucide-react";

import cicloc from "@/assets/cicloc.png";
import tecendo from "@/assets/tecendoLacos.png";
import tec from "@/assets/tec.png";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function OtherProjectsPage() {
  // Array de projetos com imagens e cores de tags dinâmicas
  const projects = [
    { 
      id: 1, 
      title: "Tecendo Laços", 
      area: "Capacitação", 
      desc: "Capacitações para mulheres, promovendo independência financeira e sustentabilidade.",
      img: tecendo,
      colorTheme: "bg-orange-100 text-[#6D28D9] border-orange-200",
      emojiFallback: "🧵"
    },
    { 
      id: 2, 
      title: "Ciclo C", 
      area: "Ecologia", 
      desc: "Empoderamos comunidades em vulnerabilidade social mediante o conhecimento sobre compostagem e produção sustentável.",
      img: cicloc,
      colorTheme: "bg-emerald-100 text-emerald-700 border-emerald-200",
      emojiFallback: "🌱"
    },
    { 
      id: 3, 
      title: "Logística Jovem Tech", 
      area: "Tecnologia", 
      desc: "Capacitação em rotinas de e-commerce, distribuição e tecnologia para jovens da rede pública.",
      img: tec,
      colorTheme: "bg-blue-100 text-[#3B82F6] border-blue-200",
      emojiFallback: "💻"
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1EA] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Cabeçalho da Página */}
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

        {/* Grade de Iniciativas com Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-white border border-stone-200 rounded-[2.5rem] p-6 shadow-md shadow-stone-200/50 flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform group"
            >
              
              {/* Bloco de Imagem Editorial (Menor e Integrada) */}
              <div className="w-full h-48 bg-[#F8F6F0] rounded-[1.5rem] overflow-hidden relative border border-stone-100">
                <img 
                  src={proj.img} 
                  alt={proj.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback se a imagem não existir na pasta public
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'w-full h-full flex flex-col items-center justify-center bg-[#F4F1EA] text-stone-400';
                      placeholder.innerHTML = `<span class="text-4xl mb-2">${proj.emojiFallback}</span><span class="text-[10px] font-bold uppercase tracking-wider">Sem Imagem</span>`;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
                {/* Tag Colorida Sobreposta à imagem para economizar espaço */}
                <span className={`absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg border shadow-sm ${proj.colorTheme}`}>
                  {proj.area}
                </span>
              </div>

              {/* Textos do Projeto */}
              <div className="space-y-3 flex-1">
                <h3 className="font-extrabold text-stone-900 text-xl tracking-tight leading-tight">
                  {proj.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed font-medium">
                  {proj.desc}
                </p>
              </div>

              {/* Botão de Ação */}
              <a href="#" className="text-xs font-bold text-[#1E3A5F] hover:text-[#F07147] flex items-center gap-1 transition-colors border-t border-stone-100 pt-4">
                Conhecer histórico de impacto <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Card Ação Venezuela */}
          <a 
            href="https://www.paraquemdoar.com.br/hub/venezuela?ref=home_banner" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group relative overflow-hidden rounded-[2.0rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            {/* Imagem de Fundo (Unsplash placeholder) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop')" }}
            />
            {/* Overlay escuro para dar leitura ao texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-slate-900/30" />

            <CardContent className="relative z-10 p-6 flex flex-col h-full justify-end min-h-[280px] border-0 bg-transparent">
              <div className="flex justify-between items-start mb-auto">
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-100 border border-blue-500/30 backdrop-blur-md">
                  Ação Patrocinada
                </Badge>
                {/* Logo da TV Globo */}
                <img 
                  src="https://cdn.guiademarcas.globo/capa_tvglobo_n1tynUD.png" 
                  alt="Parceria TV Globo" 
                  className="h-16 w-26 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors mt-6 drop-shadow-md">
                Apoio a Refugiados
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed drop-shadow">
                Ajude a garantir direitos básicos, alimentação e dignidade para famílias venezuelanas em situação de vulnerabilidade.
              </p>
            </CardContent>
          </a>

          {/* Card Doe Gols */}
          <a 
            href="https://www.paraquemdoar.com.br/hub/doegols?ref=home_banner" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group relative overflow-hidden rounded-[2.0rem] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            {/* Imagem de Fundo (Unsplash placeholder focada em futebol/chuteira) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: "url('https://live.staticflickr.com/3019/2701038251_050ebb4a9a_z.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-slate-900/30" />

            <CardContent className="relative z-10 p-6 flex flex-col h-full justify-end min-h-[280px] border-0 bg-transparent">
              <div className="flex justify-between items-start mb-auto">
                <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-100 border border-emerald-500/30 backdrop-blur-md">
                  Ação Patrocinada
                </Badge>
                {/* Logo da TV Globo */}
                <img 
                  src="https://cdn.guiademarcas.globo/capa_tvglobo_n1tynUD.png" 
                  alt="Parceria TV Globo" 
                  className="h-16 w-26 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors mt-6 drop-shadow-md">
                Projeto Doe Gols
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed drop-shadow">
                Transformando a paixão nacional pelo futebol em calçados para crianças e adolescentes de comunidades carentes.
              </p>
            </CardContent>
          </a>
        </div>

      </div>
    </div>
  );
}