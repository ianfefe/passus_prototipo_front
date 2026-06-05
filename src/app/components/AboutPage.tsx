import { ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react";
import { useState } from "react";
import logoPassus from "@/assets/passus.jpg"; // O "@" aponta direto para a pasta src que configuramos no alias!

export function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const instagramPosts = [
    { id: 1, caption: "Workshop de costura", emoji: "👨‍👩‍👧" },
    { id: 2, caption: "Crianças aprendendo", emoji: "👧👦" },
    { id: 3, caption: "Comunidade unida", emoji: "🏘️" },
    { id: 4, caption: "Produto finalizado", emoji: "🧦" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % instagramPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + instagramPosts.length) % instagramPosts.length
    );
  };

  return (
    // Fundo creme aconchegante com "manchas de tinta/aquarela" para trazer a temática infantil
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16 selection:bg-[#F5A623]/30">
      
      {/* Formas lúdicas e coloridas no fundo (Nuvens / Aquarela) */}
      <div className="absolute top-10 -left-16 w-96 h-96 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] -right-20 w-[600px] h-[600px] bg-[#F5A623]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-[500px] h-[500px] bg-[#7ED321]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F07147]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        {/* Título Principal - Estilo Emblema Divertido */}
        <div className="text-center mb-20 relative">
          {/* Estrelinhas mágicas flutuando perto do título */}
          <Sparkles className="absolute top-0 left-[30%] text-[#F5A623] w-6 h-6 animate-pulse hidden md:block" />
          <Heart className="absolute bottom-4 right-[32%] text-[#F07147] w-5 h-5 animate-bounce hidden md:block" />

          <span className="inline-block text-xs font-bold tracking-widest text-white uppercase bg-[#F07147] px-4 py-2 rounded-full mb-4 shadow-md transform -rotate-1">
            Conheça Nossa História! ✨
          </span>
          
          <div className="flex flex-col items-center justify-center gap-3">
            {/* Logo flutuante com borda dupla divertida */}
            <div className="w-28 h-28 rounded-full bg-[#F6EFE5] flex items-center justify-center shadow-2xl border-4 border-[#1E3A5F] transform hover:rotate-12 transition-transform duration-300">
              <img 
                src={logoPassus}
                alt="PASSUS" 
                className="w-20 h-20 object-contain rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if(e.currentTarget.nextSibling) (e.currentTarget.nextSibling as HTMLElement).style.display = 'block';
                }}
              />
              <span className="text-6xl hidden">🧦</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black tracking-wider text-[#1E3A5F] drop-shadow-sm mt-2">
              PROJETO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2]">PASSUS</span>
            </h1>
            {/* Linha ondulada ou tracejada simulando costura */}
            <div className="w-24 border-b-4 border-dashed border-[#F5A623] mx-auto mt-1 rounded-full" />
          </div>
        </div>

        {/* Cards Principais - Estilo Assimétrico e Confortável (Visual de Livro Infantil) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Card Sobre o Projeto (Gira de leve para a esquerda) */}
          <div className="bg-white rounded-[36px] p-8 shadow-2xl border-4 border-[#4A90E2] transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative">
            <div className="absolute -top-5 -left-3 w-12 h-12 bg-[#4A90E2] text-white rounded-2xl flex items-center justify-center text-2xl shadow-md">✨</div>
            <h2 className="text-[#1E3A5F] text-2xl font-black mb-4 pl-6">Sobre o projeto</h2>
            <p className="text-gray-700 leading-relaxed font-semibold text-base">
              O projeto PASSUS nasceu com o objetivo de criar oportunidades e transformar vidas através da produção e venda de meias personalizadas de alta qualidade. Somos um projeto social que acredita no poder do trabalho digno e da inclusão produtiva.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mt-4">
              Nossa missão vai além da comercialização de produtos. Buscamos construir uma rede de solidariedade onde cada compra representa um passo em direção a um futuro melhor para as famílias envolvidas no projeto.
            </p>
          </div>

          {/* Card Sobre as Meias (Gira de leve para a direita) */}
          <div className="bg-white rounded-[36px] p-8 shadow-2xl border-4 border-[#F5A623] transform rotate-1 hover:rotate-0 transition-transform duration-300 relative">
            <div className="absolute -top-5 -left-3 w-12 h-12 bg-[#F5A623] text-white rounded-2xl flex items-center justify-center text-2xl shadow-md">🧦</div>
            <h2 className="text-[#1E3A5F] text-2xl font-black mb-4 pl-6">Sobre as meias</h2>
            <p className="text-gray-700 leading-relaxed font-semibold text-base">
              Nossas meias são produzidas com materiais de primeira qualidade, garantindo conforto, durabilidade e estilo. Utilizamos fios de algodão premium que proporcionam maciez e respirabilidade.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mt-4">
              Oferecemos diversos modelos: esportivas, sociais, casuais e exclusivos com designs personalizados. Todas passam por controle de qualidade rigoroso antes de chegarem até você.
            </p>
          </div>
        </div>

        {/* Seção Artes das Crianças - Estilo Ateliê / Escolinha */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border-4 border-[#7ED321] mb-20 relative">
          {/* Selo divertido no canto */}
          <div className="absolute -top-6 right-8 bg-[#7ED321] text-white font-bold text-xs px-4 py-2 rounded-xl shadow-md uppercase tracking-wider transform rotate-3">
            Criatividade Pura! 🦄
          </div>
          
          <h2 className="text-[#1E3A5F] text-3xl font-black mb-4 flex items-center gap-3">
            <span className="text-4xl">🎨</span>
            As Artes das Crianças
          </h2>
          <p className="text-gray-700 leading-relaxed font-semibold text-base mb-8 max-w-3xl">
            Cada par de meias PASSUS traz consigo a criatividade e o talento de crianças que participam de nossos workshops de arte. Elas criam desenhos únicos que representam seus sonhos, suas histórias e suas visões de mundo.
          </p>

          {/* Grid de Desenhos - Quadrados pontilhados fofos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-[#F5F2EB]/50 rounded-3xl flex items-center justify-center border-4 border-dashed border-[#1E3A5F]/40 p-4 hover:scale-105 hover:bg-white hover:border-[#7ED321] transition-all duration-300 shadow-sm hover:shadow-xl group cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-6xl mb-2 transform group-hover:bounce group-hover:scale-120 transition-transform duration-300">🎨</div>
                  <p className="text-sm font-bold text-[#1E3A5F]/70">Desenho de Luz {i}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Processo Criativo - Caixa de Papelão / Pergaminho Divertido */}
          <div className="bg-[#F5F2EB] rounded-3xl p-6 md:p-8 border-3 border-dashed border-[#F5A623]">
            <h3 className="text-[#1E3A5F] font-black text-lg mb-6 tracking-wide flex items-center gap-2">
              <span className="text-xl">🚀</span> Como tudo ganha vida:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700 font-medium">
              <div className="flex gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-2xl">1️⃣</span>
                <p>As crianças participam de workshops semanais cheios de tintas, tinturas e muita diversão!</p>
              </div>
              <div className="flex gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-2xl">2️⃣</span>
                <p>Cada pequeno artista cria seus próprios desenhos soltando a imaginação sem limites.</p>
              </div>
              <div className="flex gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-2xl">3️⃣</span>
                <p>Os desenhos mais lindos são digitalizados com carinho e aplicados direto nas meias.</p>
              </div>
              <div className="flex gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-2xl">4️⃣</span>
                <p>O mais legal: parte da renda de cada par vendido volta como incentivo direto para a criança artista! ❤️</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carrossel de Momentos Especiais - Moldura de Álbum de Fotos */}
        <div className="bg-white rounded-[40px] p-8 shadow-2xl border-4 border-[#F07147] max-w-5xl mx-auto relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-[#1E3A5F] text-3xl font-black flex items-center gap-2">
              <span className="text-4xl">📸</span>
              Momentos Especiais
            </h2>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#F5A623] to-[#F07147] text-white px-6 py-3 rounded-full text-sm font-bold shadow-md hover:shadow-xl transition-all hover:scale-105 text-center"
            >
              Ver no Instagram 📲
            </a>
          </div>

          <div className="relative px-2">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {instagramPosts.map((post) => (
                  <div key={post.id} className="min-w-full px-2">
                    {/* Estilo Polaroid de álbum de recordação */}
                    <div className="bg-[#F5F2EB]/40 rounded-3xl p-6 border-2 border-gray-100 shadow-inner">
                      <div className="aspect-[16/10] bg-white rounded-2xl flex items-center justify-center mb-4 border-4 border-white shadow-md transform group-hover:scale-101 transition-transform">
                        <span className="text-8xl p-4 animate-pulse duration-1000">{post.emoji}</span>
                      </div>
                      <p className="text-center text-[#1E3A5F] font-black text-lg tracking-wide bg-white/80 py-2 rounded-xl border border-gray-100">
                        ✨ {post.caption} ✨
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Setas de Navegação Coloridas e Grandes */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-[#4A90E2] hover:bg-[#357abd] text-white p-3 rounded-full shadow-2xl hover:scale-115 transition-all z-20"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-[#4A90E2] hover:bg-[#357abd] text-white p-3 rounded-full shadow-2xl hover:scale-115 transition-all z-20"
            >
              <ChevronRight className="w-6 h-6 stroke-[3]" />
            </button>
          </div>

          {/* Indicadores do Carrossel (Pontinhos mais gordinhos) */}
          <div className="flex justify-center gap-2 mt-6">
            {instagramPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#F07147] w-10 shadow-sm" : "bg-gray-300 w-3"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}