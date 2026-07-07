import { useState } from "react";
import { Link } from "react-router";
import { Sparkles, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Toast } from "./Toast";
import meia1 from "@/assets/meia1.png";
import meia2 from "@/assets/meia2.png";
import meia3 from "@/assets/meia3.png";
import meia4 from "@/assets/meia4.png";

export function ProductsPage() {
  const { addToCart } = useCart();
  const [toast, setToast] = useState<string | null>(null);

  const allProducts = [
    { id: 1, name: "Meia Cano Alto Premium", price: "R$ 35,00", tag: "Mais Vendida", image: meia1, oficina: "Polo Central" },
    { id: 2, name: "Meia Esportiva Pro", price: "R$ 40,00", tag: "Algodão Orgânico", image: meia2, oficina: "Oficina Norte" },
    { id: 3, name: "Meia Social Elegance", price: "R$ 30,00", tag: "Coleção Clássica", image: meia3, oficina: "Polo Central" },
    { id: 4, name: "Meia Invisível Comfort", price: "R$ 25,00", tag: "Dia a Dia", image: meia4, oficina: "Oficina Sul" },
  ];

  const handleAdd = (product: any) => {
    addToCart(product);
    setToast(`${product.name} na sacola!`);
  };

  return (
    <div className="py-12 md:py-16 px-6 font-sans text-ink">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="reveal grain relative overflow-hidden bg-gradient-to-br from-navy via-[#22406b] to-[#2A52BE] text-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-30px_rgba(22,35,58,0.7)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 13px)" }} />
          <div className="relative space-y-3 max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/15 text-amber-200 px-3 py-1.5 rounded-full w-fit inline-flex items-center gap-1.5 border border-white/10">
              <Sparkles className="w-3 h-3 fill-amber-200 stroke-none" /> Produção artesanal justa
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-black tracking-tight text-white text-balance">Nossa coleção solidária</h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-md text-pretty">Cada par costurado gera renda e dignidade para as famílias dos nossos polos produtivos.</p>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allProducts.map((product, i) => (
            <div
              key={product.id}
              className="reveal group atelier-card rounded-[1.75rem] border border-white flex flex-col h-full transition-transform duration-300 hover:-translate-y-1.5"
              style={{ ["--d" as string]: `${i * 100}ms` }}
            >
              <Link to={`/produto/${product.id}`} className="flex-1">
                <div className="w-full h-64 bg-gradient-to-br from-[#F6F2EA] to-[#EFE9DD] flex items-center justify-center relative p-6 rounded-t-[1.75rem] border-b border-[color:var(--thread)]/50 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-[0_12px_18px_rgba(22,35,58,0.18)] transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" />
                  <span className="sticker absolute top-4 left-4 text-[9px] font-round font-extrabold uppercase tracking-wide bg-white border border-[color:var(--thread)]/60 px-2.5 py-1 rounded-full text-navy shadow-sm" style={{ ["--tilt" as string]: i % 2 ? "3deg" : "-3deg" }}>{product.tag}</span>
                  <span className="absolute bottom-4 right-4 text-[9px] font-bold uppercase tracking-wide text-navy/50">{product.oficina}</span>
                </div>
              </Link>
              <div className="p-6 space-y-4">
                <h3 className="font-display text-navy font-black text-lg leading-tight tracking-tight">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-coral-deep font-black text-xl">{product.price}</p>
                  <button onClick={() => handleAdd(product)} aria-label="Adicionar à sacola" className="bg-[#F6F2EA] text-navy hover:bg-coral hover:text-white p-3 rounded-full transition-all shadow-sm border border-[color:var(--thread)]/50 hover:-translate-y-0.5 active:scale-95">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}