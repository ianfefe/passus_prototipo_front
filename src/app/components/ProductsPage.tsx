import { useState } from "react";
import { Link } from "react-router";
import { SlidersHorizontal, Sparkles, Heart, ShoppingBag } from "lucide-react";
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
    <div className="min-h-screen bg-[#F4F1EA] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-6xl mx-auto space-y-10">
        <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2A52BE] text-white p-8 md:p-10 rounded-[2.5rem] shadow-md shadow-stone-300/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 text-amber-200 px-2.5 py-1 rounded-md w-fit inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-amber-200 stroke-none" /> Produção Artesanal Justa
            </span>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">Nossa Coleção Solidária</h1>
            <p className="text-xs md:text-sm text-stone-200 leading-relaxed font-medium">Cada par costurado gera renda e dignidade para as famílias dos nossos polos.</p>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-[2rem] border border-stone-200 shadow-md shadow-stone-200/50 flex flex-col hover:-translate-y-1 transition-all">
              <Link to={`/produto/${product.id}`} className="flex-1">
                <div className="w-full h-64 bg-[#F8F6F0] flex items-center justify-center relative p-6 border-b border-stone-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-md transform group-hover:scale-105 transition-transform" />
                  <span className="absolute top-4 left-4 text-[9px] font-black uppercase bg-white border border-stone-200 px-2.5 py-1 rounded-lg text-[#1E3A5F] shadow-sm">{product.tag}</span>
                </div>
              </Link>
              <div className="p-6 space-y-4">
                <h3 className="text-stone-800 font-black text-base tracking-tight">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-[#1E3A5F] font-black text-lg">{product.price}</p>
                  <button onClick={() => handleAdd(product)} className="bg-stone-100 hover:bg-[#F07147] hover:text-white p-3 rounded-2xl transition-all shadow-sm">
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