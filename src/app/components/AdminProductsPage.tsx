import { Link } from "react-router";
import { Plus, Edit3, Eye } from "lucide-react";

export function AdminProductsPage() {
  const products = [
    { id: 1, name: "Meia Cano Alto Premium", price: "R$ 35,00", stock: "24 pares" },
    { id: 2, name: "Meia Esportiva Pro", price: "R$ 40,00", stock: "12 pares" },
    { id: 3, name: "Meia Social Elegance", price: "R$ 30,00", stock: "08 pares" },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F4] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Topo Operacional */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-orange-100/60 pb-4">
          <div>
            <h1 className="text-2xl font-black text-stone-900 tracking-tight">
              Gerenciar <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Catálogo de Meias</span>
            </h1>
            <p className="text-xs text-stone-500 font-medium">Controle de itens produzidos nas oficinas comunitárias</p>
          </div>
          <Link 
            to="/admin/produto/novo"
            className="bg-[#1E3A5F] hover:bg-stone-800 text-white font-bold text-xs px-4 py-2.5 rounded-2xl flex items-center gap-1 shadow-sm w-fit transition-colors"
          >
            <Plus className="w-4 h-4" /> Cadastrar Novo Lote
          </Link>
        </div>

        {/* Listagem Estilo Revista */}
        <div className="space-y-3">
          {products.map((p) => (
            <div key={p.id} className="bg-white border border-orange-100/30 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FAF7F0] border border-orange-100/20 rounded-xl flex items-center justify-center text-2xl">🧦</div>
                <div>
                  <h4 className="font-extrabold text-stone-900 text-base">{p.name}</h4>
                  <p className="text-xs text-stone-400 font-semibold">Valor unitário: {p.price} | Estoque Atual: <span className="text-stone-700">{p.stock}</span></p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-fit justify-end border-t sm:border-t-0 border-stone-50 pt-3 sm:pt-0">
                <Link to={`/admin/produto/${p.id}`} className="p-2 border border-stone-200 text-stone-600 hover:bg-stone-50 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors">
                  <Edit3 className="w-3.5 h-3.5" /> Editar
                </Link>
                <Link to={`/produto/${p.id}`} className="p-2 bg-stone-50 text-stone-600 hover:bg-stone-100 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors">
                  <Eye className="w-3.5 h-3.5" /> Ver Loja
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}