import { Link } from "react-router";
import { Trash2, Heart, Sparkles, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export function CartPage() {
  const { items, removeFromCart } = useCart();

  const cartItems = items.length > 0 ? items : [
    { id: "1", name: "Meia Cano Alto Premium", quantity: 2, price: 25.0, color: "#4A90E2" },
    { id: "2", name: "Meia Esportiva Pro", quantity: 1, price: 35.0, color: "#F5A623" },
    { id: "3", name: "Meia Social Elegance", quantity: 3, price: 30.0, color: "#7ED321" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const shipping = 15.0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16">
      
      {/* Aquarelas de fundo */}
      <div className="absolute top-10 -left-16 w-96 h-96 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-16 w-96 h-96 bg-[#7ED321]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        <h1 className="text-[#1E3A5F] text-3xl font-black mb-8 flex items-center gap-3">
          <span className="text-4xl">🛒</span> Seu Sacolão de Compras
        </h1>

        {/* Bloco de impacto social - Estilo "Painel Escolar" */}
        <div className="bg-white rounded-[32px] p-6 mb-10 shadow-2xl border-4 border-[#7ED321] relative overflow-hidden transform -rotate-0.5">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#7ED321]/5 rounded-bl-[80px]" />
          <h3 className="text-[#1E3A5F] font-black text-xl mb-4 flex items-center gap-2">
            <Heart className="text-[#F07147] w-6 h-6 fill-[#F07147] animate-pulse" />
            Você Está Fazendo a Diferença!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 font-bold text-sm">
            <div className="bg-[#7ED321]/10 p-4 rounded-2xl text-center border-2 border-dashed border-[#7ED321]/30">
              <div className="text-4xl mb-1">👨‍👩‍👧</div>
              <p><span className="text-[#7ED321] font-black text-base">5 famílias</span> apoiadas com esta compra</p>
            </div>
            <div className="bg-[#4A90E2]/10 p-4 rounded-2xl text-center border-2 border-dashed border-[#4A90E2]/30">
              <div className="text-4xl mb-1">🎨</div>
              <p><span className="text-[#4A90E2] font-black text-base">12 crianças</span> participando das oficinas</p>
            </div>
            <div className="bg-[#F5A623]/10 p-4 rounded-2xl text-center border-2 border-dashed border-[#F5A623]/30">
              <div className="text-4xl mb-1">💚</div>
              <p><span className="text-[#F5A623] font-black text-base">100% do lucro</span> vai direto pro projeto</p>
            </div>
          </div>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Lista de Itens */}
          <div className="lg:col-span-2 space-y-5">
            {cartItems.map((item, index) => {
              const itemColor = (item as any).color || "#1E3A5F";
              const rotationClass = index % 2 === 0 ? "-rotate-0.5" : "rotate-0.5";
              
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-3xl p-5 flex items-center gap-4 sm:gap-6 shadow-xl border-4 ${rotationClass} hover:rotate-0 transition-all duration-200`}
                  style={{ borderColor: itemColor }}
                >
                  <div 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner border-2 border-dashed"
                    style={{ backgroundColor: `${itemColor}15`, borderColor: `${itemColor}40` }}
                  >
                    <span className="text-4xl sm:text-5xl drop-shadow-sm">🧦</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-[#1E3A5F] text-base truncate mb-1">{item.name}</p>
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <div className="text-gray-500 font-bold text-xs sm:text-sm space-y-0.5">
                        <p>Quantidade: <span className="text-[#1E3A5F] font-black">{item.quantity}</span></p>
                        <p>Unitário: R$ {item.price.toFixed(2)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-wider font-black text-gray-400">Total item</p>
                        <p className="font-black text-xl" style={{ color: itemColor }}>
                          R$ {(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-xl hover:bg-red-50 flex-shrink-0"
                  >
                    <Trash2 className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Resumo da Compra - Caixa Escura Divertida */}
          <div className="bg-[#1E3A5F] text-white rounded-[36px] p-6 sm:p-8 h-fit shadow-2xl border-4 border-[#F5A623] transform rotate-0.5">
            <h3 className="mb-5 flex items-center gap-2 font-black text-xl tracking-wide uppercase">
              <span>📋</span> Resumo Geral
            </h3>
            <div className="space-y-3 font-semibold text-sm">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-white/80 gap-4">
                  <span className="truncate">{item.name} (x{item.quantity})</span>
                  <span className="font-bold flex-shrink-0">R$ {(item.quantity * item.price).toFixed(2)}</span>
                </div>
              ))}
              
              <div className="border-t-4 border-dashed border-white/20 pt-4 mt-4 space-y-2">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal:</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70 mb-2">
                  <span>Frete de Entrega:</span>
                  <span>R$ {shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 border-t-2 border-white/40 font-black text-xl">
                  <span>Total:</span>
                  <span className="text-[#F5A623] drop-shadow-sm">R$ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Finalização */}
        <div className="text-center mt-12">
          <Link
            to="/pagamento"
            className="inline-flex items-center gap-2 bg-[#F07147] hover:bg-[#e5643a] text-white px-12 py-4 rounded-full transition-all shadow-xl hover:shadow-xl font-black text-base hover:scale-105 uppercase tracking-wider"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2.5]" /> Fechar e Pagar
          </Link>
        </div>
      </div>
    </div>
  );
}