import { Heart, ArrowRight } from "lucide-react";

export function JoinPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] py-12 px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Intro */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black text-stone-900 tracking-tight">
            Como caminhar com o{" "}
            <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">
              PASSUS
            </span>
          </h1>
          <p className="text-stone-500 text-sm font-medium">Escolha uma forma de fortalecer o projeto e espalhar impacto social</p>
        </div>

        {/* Opções de Engajamento Amigáveis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-orange-100/40 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#F07147] font-bold text-lg">❤️</div>
              <h3 className="font-extrabold text-stone-900 text-lg">Adquirindo Nossos Produtos</h3>
              <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-medium">
                Toda a renda líquida obtida na venda das meias é revertida para custear materiais, maquinários e infraestrutura para as alunas do projeto.
              </p>
            </div>
            <button className="w-full bg-[#F07147] hover:bg-[#d85f37] text-white font-bold text-xs py-3 rounded-2xl transition-colors flex items-center justify-center gap-1">
              Ver Catálogo de Meias <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-orange-100/40 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#3B82F6] font-bold text-lg">🤝</div>
              <h3 className="font-extrabold text-stone-900 text-lg">Trabalho Voluntário / Parcerias</h3>
              <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-medium">
                Seja doando seu tempo, ensinando uma habilidade, doando retalhos de tecidos ou conectando sua marca institucional com a nossa associação.
              </p>
            </div>
            <button className="w-full bg-[#1E3A5F] hover:bg-stone-800 text-white font-bold text-xs py-3 rounded-2xl transition-colors flex items-center justify-center gap-1">
              Entre em Contato <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}