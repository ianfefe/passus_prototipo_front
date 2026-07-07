import { Heart, Instagram, MessageCircle, Scissors, Sprout, HandHeart } from "lucide-react";
import { TiltCard } from "./motion/TiltCard";
import insta1 from "@/assets/insta1.png";
import insta2 from "@/assets/insta2.png";
import insta3 from "@/assets/insta3.png";
import insta4 from "@/assets/insta4.png";

export function AboutPage() {
  const instagramPosts = [
    { id: 1, likes: "142", comments: "12", img: insta1, tag: "Detalhes" },
    { id: 2, likes: "98", comments: "5", img: insta2, tag: "Oficina" },
    { id: 3, likes: "210", comments: "28", img: insta3, tag: "Produção" },
    { id: 4, likes: "175", comments: "16", img: insta4, tag: "Campanha" },
  ];

  const pillars = [
    { icon: Scissors, title: "Capacitação", text: "Oficinas gratuitas de corte, costura e estamparia industrial." },
    { icon: Sprout, title: "Autonomia", text: "Inserção profissional estável e uma renda justa e digna." },
    { icon: HandHeart, title: "Acolhimento", text: "Mais do que produzir meias, abrimos portas e acolhemos histórias." },
  ];

  return (
    <div className="font-sans py-12 md:py-16 px-6 text-ink">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* Manifesto */}
        <section className="reveal grain relative atelier-card rounded-[2.5rem] p-8 md:p-14 border border-white overflow-hidden">
          <div className="pointer-events-none absolute -top-20 -right-16 w-80 h-80 rounded-full bg-sky/15 blur-3xl" />
          <div className="relative space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-coral">Nossa causa</span>
              <h1 className="font-display text-4xl md:text-6xl font-black text-navy tracking-tight text-balance">
                Sobre o <span className="italic text-coral">Projeto Passus</span>
              </h1>
            </div>
            <div className="stitch-line max-w-xs" />
            <div className="text-navy/75 space-y-4 leading-relaxed text-[15px] md:text-base max-w-3xl text-pretty">
              <p>
                O PASSUS nasceu com o propósito simples, mas poderoso, de transformar a realidade de quem mais
                precisa através da moda e do design com propósito social. Mais do que fabricar e comercializar meias
                de excelente qualidade, nossa missão central é acolher histórias e abrir portas.
              </p>
              <p>
                Através de oficinas estruturadas de corte, costura e estamparia industrial, nós oferecemos
                capacitação prática completa e gratuita para moradores de comunidades da periferia, auxiliando
                diretamente na inserção profissional estável e na conquista de uma renda justa e autônoma.
              </p>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={p.title} className="reveal" style={{ ["--d" as string]: `${i * 120}ms` }}>
              <TiltCard className="h-full" max={10}>
                <div className="atelier-card rounded-[1.75rem] p-7 border border-white space-y-3 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-coral/10 border border-coral/20 text-coral flex items-center justify-center animate-wobble">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-navy text-xl">{p.title}</h3>
                  <p className="text-navy/70 text-sm leading-relaxed">{p.text}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </section>

        {/* Instagram */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3">
            <div>
              <h2 className="font-display font-black text-3xl text-navy flex items-center gap-2.5">
                <Instagram className="w-7 h-7 text-coral" /> Nosso dia a dia
              </h2>
              <p className="text-sm text-navy/60 font-medium mt-1">
                Acompanhe os bastidores e as oficinas direto no Instagram.
              </p>
            </div>
            <a
              href="https://www.instagram.com/projeto.passus/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-navy hover:text-coral transition-colors bg-white px-5 py-2.5 rounded-full border border-[color:var(--thread)] shadow-sm w-fit"
            >
              @projeto.passus
            </a>
          </div>

          <div className="stitch-line" />

          <div className="flex overflow-x-auto gap-6 pb-6 pt-2 scrollbar-thin snap-x snap-mandatory">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="w-72 h-72 md:w-80 md:h-80 shrink-0 atelier-card border border-white rounded-[1.75rem] overflow-hidden snap-start relative group"
              >
                <div className="w-full h-full bg-[#F6F2EA] relative flex items-center justify-center">
                  <img
                    src={post.img}
                    alt={post.tag}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur px-3 py-1 rounded-full text-navy border border-[color:var(--thread)]/60 shadow-sm">
                    {post.tag}
                  </span>
                </div>
                <div className="absolute inset-x-6 bottom-6 bg-white/95 backdrop-blur rounded-2xl p-3 flex items-center justify-around text-sm font-bold text-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[color:var(--thread)]/60 shadow-md">
                  <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-coral fill-coral stroke-none" /> {post.likes}</span>
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