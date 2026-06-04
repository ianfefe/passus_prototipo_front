import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Trash2, Save, Sparkles, Image } from "lucide-react";

export function AdminProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: `Produto ${id}`,
    price: "35.00",
    description: "Meia de alta qualidade com design moderno",
    stock: "100",
  });

  const handleSave = () => {
    console.log("Saving product:", formData);
    navigate("/admin/produtos");
  };

  const handleDelete = () => {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      console.log("Deleting product:", id);
      navigate("/admin/produtos");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16">
      
      {/* Aquarelas de fundo */}
      <div className="absolute top-10 -left-16 w-80 h-80 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-80 h-80 bg-[#F5A623]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        <div className="bg-white rounded-[40px] p-6 md:p-10 shadow-2xl border-4 border-[#1E3A5F] relative">
          <Sparkles className="absolute -top-3 right-12 text-[#F5A623] w-6 h-6 animate-pulse" />
          
          <h1 className="text-[#1E3A5F] text-3xl font-black mb-8 text-center">Ficha Cadastral do Produto</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Fotos - Estilo Retalho Costurado */}
            <div>
              <div className="bg-gradient-to-br from-[#F5F2EB] to-gray-50 rounded-3xl h-72 flex items-center justify-center border-4 border-dashed border-[#1E3A5F]/40 mb-4 shadow-inner">
                <span className="text-8xl drop-shadow-sm">🧦</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#1E3A5F] cursor-pointer transition-colors shadow-sm"
                  >
                    <span className="text-3xl">🧦</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inputs Customizados */}
            <div className="space-y-4">
              <div>
                <label className="block text-[#1E3A5F] font-bold text-sm mb-1.5">Nome do Produto *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#1E3A5F] font-bold text-sm mb-1.5">Preço na Lojinha (R$) *</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#1E3A5F] font-bold text-sm mb-1.5">História / Descrição *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 text-sm rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1E3A5F] font-bold text-sm mb-1.5">Estoque *</label>
                  <input
                    type="text"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#1E3A5F] font-bold text-sm mb-1.5">Subir Fotos</label>
                  <label className="w-full px-4 py-2.5 text-sm rounded-2xl border-3 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center gap-1 cursor-pointer font-bold text-gray-400 hover:bg-gray-100 transition-colors">
                    <Image className="w-4 h-4" /> Anexar
                    <input type="file" multiple className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t-2 border-dashed border-gray-100">
            <button
              onClick={handleSave}
              className="flex-1 bg-[#F07147] hover:bg-[#e5643a] text-white py-3.5 rounded-full font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-102 flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4 stroke-[3]" /> Salvar Ficha
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-102 flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4 stroke-[3]" /> Excluir Do Lojinho 🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}