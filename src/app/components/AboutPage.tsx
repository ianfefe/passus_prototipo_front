import { Heart, Instagram, MessageCircle } from "lucide-react";
  import insta1 from "@/assets/insta1.png";
  import insta2 from "@/assets/insta2.png";
  import insta3 from "@/assets/insta3.png";
  import insta4 from "@/assets/insta4.png";

export function AboutPage() {
  // Seus posts estruturados do Instagram
  const instagramPosts = [
    { id: 1, likes: "142", comments: "12", img: insta1, tag: "Detalhes" },
    { id: 2, likes: "98", comments: "5", img: insta2, tag: "Oficina" },
    { id: 3, likes: "210", comments: "28", img: insta3, tag: "Produção" },
    { id: 4, likes: "175", comments: "16", img: insta4, tag: "Campanha" }
  ];

  return (
    <div className="min-h-screen bg-[#F4F1EA] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Bloco do Manifesto */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-stone-200 shadow-md shadow-stone-200/50 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F07147]">Nossa Causa</span>
            <h1 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight">
              Sobre o <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Projeto PASSUS</span>
            </h1>
          </div>
          
          <div className="text-stone-600 space-y-4 leading-relaxed font-medium text-sm md:text-base max-w-3xl">
            <p>
              O PASSUS nasceu com o propósito simples, mas poderoso, de transformar a realidade de quem mais precisa através da moda e do design com propósito social. Mais do que fabricar e comercializar meias de excelente qualidade, nossa missão central é acolher histórias e abrir portas.
            </p>
            <p>
              Através de oficinas estruturadas de corte, costura e estamparia industrial, nós oferecemos capacitação prática completa e gratuita para moradores de comunidades da periferia, auxiliando diretamente na inserção profissional estável e na conquista de uma renda justa e autônoma.
            </p>
          </div>
        </section>

        {/* CARROSSEL DO INSTAGRAM AMPLIADO */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-stone-200 pb-3">
            <div>
              <h2 className="font-black text-2xl text-stone-950 flex items-center gap-2">
                <Instagram className="w-6 h-6 text-[#F07147]" /> Nosso Dia a Dia
              </h2>
              <p className="text-xs md:text-sm text-stone-500 font-medium mt-1">Acompanhe os bastidores e oficinas direto no Instagram</p>
            </div>
            <a 
              href="https://www.instagram.com/projeto.passus/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#3B82F6] hover:text-[#1E3A5F] transition-colors bg-white px-5 py-2.5 rounded-xl border border-stone-200 shadow-sm w-fit"
            >
              @projeto.passus
            </a>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-6 pt-2 scrollbar-thin snap-x snap-mandatory">
            {instagramPosts.map((post) => (
              <div 
                key={post.id}
                className="w-72 h-72 md:w-80 md:h-80 shrink-0 bg-white border border-stone-200 rounded-[2rem] shadow-md shadow-stone-200/50 overflow-hidden snap-start relative group transition-all"
              >
                <div className="w-full h-full bg-[#F8F6F0] relative flex items-center justify-center">
                  <img src={post.img} alt={post.tag} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs px-3 py-1 rounded-lg text-stone-600 border border-stone-200 shadow-sm">
                    {post.tag}
                  </span>
                </div>

                <div className="absolute inset-x-6 bottom-6 bg-white/95 backdrop-blur-xs rounded-2xl p-3 flex items-center justify-around text-sm font-bold text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-stone-200 shadow-md">
                  <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-red-500 fill-red-500 stroke-none" /> {post.likes}</span>
                  <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4 text-stone-400" /> {post.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}