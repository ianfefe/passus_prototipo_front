import { useState } from "react";
import { Link } from "react-router";
import { Plus, BarChart3, Tag } from "lucide-react";

export function AdminProductsPage() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const products = [
    { id: 1, name: "Meia Cano Alto Premium", color: "hover:bg-[#4A90E2]/10 hover:border-[#4A90E2]" },
    { id: 2, name: "Meia Esportiva Pro", color: "hover:bg-[#F5A623]/10 hover:border-[#F5A623]" },
    { id: 3, name: "Meia Social Elegance", color: "hover:bg-[#1E3A5F]/10 hover:border-[#1E3A5F]" },
    { id: 4, name: "Meia Kids Fun", color: "hover:bg-[#7ED321]/10 hover:border-[#7ED321]" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16">
      
      {/* Aquarelas de fundo */}
      <div className="absolute top-10 -left-16 w-96 h-96 bg-[#7ED321]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-96 h-96 bg-[#F5A623]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        {/* Botões de Canto */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 mb-10">
          <Link
            to="/admin/vendas"
            className="bg-[#4A90E2] hover:bg-[#3a7bc8] text-white px-6 py-2.5 rounded-full font-black text-xs tracking-wider uppercase shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 border-2 border-white"
          >
            <BarChart3 className="w-4 h-4" /> Ver Relatório Geral →
          </Link>
          <span className="text-xs font-black bg-white border-2 border-dashed border-gray-300 px-4 py-1.5 rounded-xl text-gray-500 shadow-sm">
            Gerenciamento 🛠️
          </span>
        </div>

        {/* Grid de Seções */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Criar Produto - Bloco Verde */}
          <div className="bg-white rounded-[36px] p-6 sm:p-8 shadow-2xl border-4 border-[#7ED321] transform -rotate-0.5">
            <h2 className="text-[#1E3A5F] text-2xl font-black mb-6 flex items-center gap-2">
              <span>🎨</span> Novo Produto da Oficina
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[#1E3A5F] font-bold text-xs uppercase tracking-wider mb-1.5 pl-1">Nome do Item *</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Nome fofo da meia"
                  className="w-full px-4 py-2.5 text-sm rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#7ED321] font-medium transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#1E3A5F] font-bold text-xs uppercase tracking-wider mb-1.5 pl-1">Preço Sugerido *</label>
                <input
                  type="text"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  placeholder="R$ 00,00"
                  className="w-full px-4 py-2.5 text-sm rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#7ED321] font-medium transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#1E3A5F] font-bold text-xs uppercase tracking-wider mb-1.5 pl-1">Anexar Desenho Digitalizado</label>
                <input
                  type="file"
                  multiple
                  className="w-full px-4 py-2 text-sm rounded-2xl border-3 border-dashed border-gray-200 bg-gray-50/50 focus:outline-none file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[#1E3A5F] file:text-white hover:file:bg-opacity-90 cursor-pointer"
                />
              </div>

              <div className="pt-2">
                <button className="w-full bg-[#7ED321] hover:bg-[#6bb81d] text-white py-3.5 rounded-full font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-102 flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5 stroke-[3]" /> Cadastrar no Lojinho
                </button>
              </div>
            </div>
          </div>

          {/* Gerenciar Itens - Bloco Amarelo */}
          <div className="bg-white rounded-[36px] p-6 sm:p-8 shadow-2xl border-4 border-[#F5A623] transform rotate-0.5">
            <h2 className="text-[#1E3A5F] text-2xl font-black mb-6 flex items-center gap-2">
              <span>🧦</span> Meias Cadastradas
            </h2>
            <div className="space-y-3">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/admin/produtos/${product.id}`}
                  className={`block py-3.5 px-4 bg-[#F5F2EB]/40 border-2 border-dashed border-gray-200 ${product.color} transition-all duration-200 rounded-2xl font-bold flex items-center justify-between group`}
                >
                  <p className="text-[#1E3A5F] text-sm group-hover:translate-x-1 transition-transform">
                    ✨ {product.name}
                  </p>
                  <span className="text-xs bg-white text-gray-400 group-hover:text-[#1E3A5F] group-hover:border-[#1E3A5F]/30 border px-2 py-1 rounded-lg transition-colors font-black uppercase tracking-wide">
                    Editar
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}