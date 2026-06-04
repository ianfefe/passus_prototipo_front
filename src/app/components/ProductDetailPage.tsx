import { useParams, Link } from "react-router";
import { Truck, ShoppingCart, Sparkles, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Toast } from "./Toast";

export function ProductDetailPage() {
  const { id } = useParams();
  const [showFreight, setShowFreight] = useState(false);
  const [cep, setCep] = useState("");
  const [freightResult, setFreightResult] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useCart();

  const thumbnails = [1, 2, 3];

  const handleCalculateFreight = () => {
    if (cep) {
      setFreightResult("Frete para sua região: R$ 15,00 (Prazo: 3 dias úteis)");
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: id || "1",
      name: "Meia Cano Alto Premium",
      price: 35.0,
      quantity: 1,
    });
    setShowToast(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16">
      
      {/* Aquarelas de fundo */}
      <div className="absolute top-10 -left-16 w-96 h-96 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-96 h-96 bg-[#F5A623]/15 rounded-full blur-3xl pointer-events-none" />

      {showToast && (
        <Toast
          message="Meia fofa adicionada ao carrinho com sucesso! 🧦"
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        <h1 className="text-[#1E3A5F] text-3xl font-black mb-10 flex items-center gap-3 justify-center md:justify-start">
          <span className="text-4xl animate-bounce">🧦</span> Meia Cano Alto Premium
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Lado Esquerdo - Imagens Polaroid */}
          <div>
            <div className="w-full aspect-square bg-white rounded-[40px] flex items-center justify-center mb-6 border-4 border-white shadow-2xl transform -rotate-1 relative overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-[#F5F2EB] to-gray-50 rounded-[32px] flex items-center justify-center p-8 border-4 border-dashed border-gray-200/60 shadow-inner">
                <span className="text-9xl drop-shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">🧦</span>
              </div>
            </div>
            
            {/* Fotos menores do carrossel */}
            <div className="grid grid-cols-3 gap-4">
              {thumbnails.map((thumb, index) => (
                <div
                  key={thumb}
                  className="aspect-square bg-white rounded-2xl flex items-center justify-center border-2 border-white shadow-md cursor-pointer hover:border-[#F07147] transition-all hover:scale-105 p-1.5"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#F5F2EB] to-gray-50 rounded-xl flex items-center justify-center border border-dashed border-gray-200">
                    <span className="text-3xl">🧦</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito - Ficha de Detalhes */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-[36px] p-8 shadow-2xl border-4 border-[#4A90E2] mb-6 relative transform rotate-0.5">
              <Sparkles className="absolute top-4 right-6 text-[#F5A623] w-5 h-5 animate-pulse" />
              <h2 className="text-[#1E3A5F] text-xl font-black mb-3 flex items-center gap-2">
                <span>✨</span> Sobre Essa Arte em Meia:
              </h2>
              <p className="text-gray-700 mb-4 font-semibold text-sm leading-relaxed">
                Meia de cano alto confeccionada em algodão premium de altíssima qualidade, proporcionando máximo aconchego, elasticidade e alta durabilidade pros seus pés. 
              </p>
              <p className="text-gray-600 text-xs leading-relaxed border-t-2 border-dashed border-gray-100 pt-4">
                Disponível em tamanhos flexíveis. Possui material respirável que mantém o conforto o dia todinho. E o mais legal: a estampa traz traços criados com amor direto das oficinas infantis do PASSUS! 🖍️
              </p>
            </div>

            {/* Ações e Cálculo de Frete */}
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => setShowFreight(!showFreight)}
                  className="w-full bg-[#1E3A5F] hover:bg-[#152d47] text-white px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider hover:scale-102"
                >
                  <Truck className="w-4 h-4 stroke-[3]" /> Calcular Frete de Envio
                </button>

                {showFreight && (
                  <div className="mt-4 space-y-3 animate-fade-in">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        placeholder="CEP: 00000-000"
                        className="flex-1 px-4 py-2.5 text-sm rounded-2xl border-3 border-[#1E3A5F] bg-white font-bold"
                      />
                      <button
                        onClick={handleCalculateFreight}
                        className="bg-[#F07147] hover:bg-[#e5643a] text-white px-5 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider shadow-md"
                      >
                        Calcular
                      </button>
                    </div>

                    {freightResult && (
                      <div className="bg-white rounded-2xl p-4 border-3 border-dashed border-[#F07147] shadow-md flex items-center gap-2 text-sm font-bold text-[#1E3A5F]">
                        <CheckCircle className="w-4 h-4 text-[#7ED321] flex-shrink-0" />
                        <p>{freightResult}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Botões de Compra Rápidos */}
              <Link
                to={`/checkout-direto/${id}`}
                className="w-full bg-gradient-to-r from-[#F07147] to-[#F5A623] hover:from-[#e5643a] hover:to-[#db9520] text-white px-6 py-4 rounded-full transition-all shadow-xl hover:shadow-xl flex items-center justify-center gap-2 font-black text-base uppercase tracking-wider hover:scale-102"
              >
                Comprar Agora ⚡
              </Link>
              
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#7ED321] hover:bg-[#6bb81d] text-white px-6 py-4 rounded-full transition-all shadow-xl hover:shadow-xl flex items-center justify-center gap-2 font-black text-base uppercase tracking-wider hover:scale-102"
              >
                <ShoppingCart className="w-5 h-5 stroke-[3]" /> Adicionar ao Carrinho
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}