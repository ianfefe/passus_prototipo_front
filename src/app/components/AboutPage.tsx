import { Heart, Instagram, MessageCircle } from "lucide-react";

export function AboutPage() {
  // Seus posts estruturados do Instagram
  const instagramPosts = [
    { id: 1, likes: "142", comments: "12", img: "/insta1.png", tag: "Oficina" },
    { id: 2, likes: "98", comments: "5", img: "/insta2.png", tag: "Detalhes" },
    { id: 3, likes: "210", comments: "28", img: "/insta3.png", tag: "Produção" },
    { id: 4, likes: "175", comments: "16", img: "/insta4.png", tag: "Comunidade" },
    { id: 5, likes: "132", comments: "9", img: "/insta5.png", tag: "Fios" },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F4] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Bloco do Manifesto */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border border-orange-100/40 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F07147]">Nourishing Cause</span>
            <h1 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tight">
              Sobre o <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Projeto PASSUS</span>
            </h1>
          </div>
          
          <div className="text-stone-600 space-y-4 leading-relaxed font-medium text-sm md:text-base">
            <p>
              O PASSUS nasceu com o propósito simples, mas poderoso, de transformar a realidade de quem mais precisa através da moda e do design com propósito social. Mais do que fabricar e comercializar meias de excelente qualidade, nossa missão central é acolher histórias e abrir portas.
            </p>
            <p>
              Através de oficinas estruturadas de corte, costura e estamparia industrial, nós oferecemos capacitação prática completa e gratuita para moradores de comunidades da periferia, auxiliando diretamente na inserção profissional estável e na conquista de uma renda justa e autônoma.
            </p>
          </div>
        </section>

        {/* SEÇÃO DO CARROSSEL PROTEGIDO CONTRA DISTORÇÃO */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-orange-100/60 pb-3">
            <div>
              <h2 className="font-black text-xl text-stone-950 flex items-center gap-2">
                <Instagram className="w-5 h-5 text-[#F07147]" /> Nosso Dia a Dia
              </h2>
              <p className="text-xs text-stone-400 font-medium">Acompanhe os bastidores e oficinas direto no Instagram</p>
            </div>
            <a 
              href="https://www.instagram.com/projeto.passus/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#3B82F6] hover:text-[#1E3A5F] transition-colors bg-white px-4 py-2 rounded-xl border border-orange-100 shadow-sm w-fit"
            >
              @projeto.passus
            </a>
          </div>

          {/* Carrossel Horizontal Estabilizado */}
          <div className="flex overflow-x-auto gap-5 pb-4 pt-2 scrollbar-thin snap-x snap-mandatory">
            {instagramPosts.map((post) => (
              <div 
                key={post.id}
                /* FIX: w-60 h-60 e shrink-0 travam o card como um quadrado perfeito de 240px sem ceder ao flexbox */
                className="w-60 h-60 shrink-0 bg-white border border-orange-100/40 rounded-3xl shadow-sm overflow-hidden snap-start relative group transition-all"
              >
                {/* Container interno da imagem */}
                <div className="w-full h-full bg-[#F4EFE6] relative flex items-center justify-center">
                  <img 
                    src={post.img} 
                    alt={post.tag}
                    /* FIX: object-cover garante que a imagem corte proporcionalmente em vez de achatar */
                    className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback elegante caso remova ou mude o arquivo durante testes
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const label = document.createElement('span');
                        label.className = 'text-stone-400 font-bold text-xs bg-white border border-orange-100 px-3 py-1.5 rounded-xl shadow-sm';
                        label.innerText = `📸 ${post.tag}`;
                        parent.appendChild(label);
                      }
                    }}
                  />
                  
                  {/* Tag discreta de identificação da foto */}
                  <span className="absolute top-3 left-3 text-[9px] font-bold bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-stone-600 border border-orange-100/20">
                    {post.tag}
                  </span>
                </div>

                {/* Info de interações que aparece suavemente no Hover */}
                <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-xs rounded-2xl p-2.5 flex items-center justify-around text-xs font-bold text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-orange-100/30 shadow-sm">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 stroke-none" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-stone-400" /> {post.comments}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}