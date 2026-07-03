import { ArrowUpRight, Heart } from "lucide-react";

import cicloc from "@/assets/cicloc.png";
import tecendo from "@/assets/tecendoLacos.png";
import tec from "@/assets/tec.png";

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

      </div>
    </div>
  );
}