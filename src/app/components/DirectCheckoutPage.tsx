import { useState } from "react";
import { useParams, Link } from "react-router";
import { Copy, Check, Heart, Smartphone, ShieldCheck } from "lucide-react";

export function DirectCheckoutPage() {
  const { id } = useParams();
  const [cep, setCep] = useState("");
  const [copied, setCopied] = useState(false);

  const product = {
    id,
    name: "Meia Cano Alto Premium",
    price: 35.0,
    quantity: 1,
  };

  const shipping = 15.0;
  const total = product.price + shipping;
  const pixKey = `passus-${id}-${total.toFixed(2)}`;

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16">
      
      {/* Aquarelas de fundo */}
      <div className="absolute top-10 -left-16 w-96 h-96 bg-[#F07147]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-96 h-96 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        <h1 className="text-[#1E3A5F] text-3xl font-black text-center mb-2 flex items-center justify-center gap-2">
          <span>⚡</span> Checkout Num Vupt!
        </h1>
        <div className="w-16 h-1 bg-[#F07147] mx-auto mb-10 rounded-full" />

        {/* Caixa Informativa */}
        <div className="bg-white rounded-[32px] p-6 mb-8 shadow-2xl border-4 border-[#F07147] relative overflow-hidden transform -rotate-0.5">
          <h3 className="text-[#1E3A5F] font-black text-xl mb-2 flex items-center gap-2">
            <Heart className="text-[#F07147] w-5 h-5 fill-[#F07147] animate-pulse" />
            Obrigado por apoiar a nossa causa!
          </h3>
          <p className="text-gray-700 font-medium text-sm leading-relaxed">
            Sua compra ajuda a manter nossos workshops de arte funcionando e proporciona oportunidades
            reais de trabalho e capacitação para famílias que mais precisam. Você está transformando o futuro! 🎨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Lado Esquerdo - PIX (Ocupa 7 colunas) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[36px] p-6 sm:p-8 shadow-2xl border-4 border-[#4A90E2] transform rotate-0.5">
              <h2 className="text-[#1E3A5F] text-xl font-black mb-6 flex items-center gap-2">
                <Smartphone className="text-[#4A90E2] w-5 h-5 stroke-[3]" /> Pagamento Expresso via PIX
              </h2>

              {/* QR Code */}
              <div className="bg-[#F5F2EB]/60 rounded-3xl p-6 mb-6 flex flex-col items-center border-4 border-dashed border-[#1E3A5F]/30 shadow-inner">
                <div className="w-52 h-52 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-md border-4 border-white transform hover:scale-102 transition-transform">
                  <div className="text-center">
                    <div className="text-7xl mb-1 animate-pulse">📱</div>
                    <p className="text-[10px] font-black text-[#1E3A5F] uppercase tracking-wider">Escaneie o QR</p>
                  </div>
                </div>
                <p className="text-center text-[#1E3A5F] font-black text-xl drop-shadow-sm">
                  Valor do Par: <span className="text-[#F07147]">R$ {total.toFixed(2)}</span>
                </p>
              </div>

              {/* Chave Copia e Cola */}
              <div className="bg-[#F5F2EB] rounded-2xl p-4 mb-6 border border-gray-200/40">
                <p className="text-[#1E3A5F] font-bold text-xs uppercase tracking-wider mb-2 pl-1">Chave Copia e Cola</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={pixKey}
                    readOnly
                    className="flex-1 px-4 py-2.5 rounded-xl border-2 border-[#1E3A5F] bg-white text-xs font-bold text-[#1E3A5F]"
                  />
                  <button
                    onClick={handleCopyPixKey}
                    className="bg-[#F07147] hover:bg-[#e5643a] text-white px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider"
                  >
                    {copied ? <Check className="w-4 h-4 stroke-[3]" /> : <Copy className="w-4 h-4 stroke-[3]" />}
                    {copied ? "Copiado!" : "Copiar"}
                  </button>
                </div>
              </div>

              {/* Cálculo Rápido de Frete */}
              <div className="bg-white rounded-2xl border-3 border-dashed border-[#F5A623] p-4">
                <label className="block mb-1.5 text-[#1E3A5F] font-bold text-xs uppercase tracking-wider pl-1">Calcular o Frete:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="CEP: 00000-000"
                    className="flex-1 px-4 py-2.5 text-sm rounded-xl border-2 border-[#1E3A5F] bg-gray-50/40 font-bold focus:outline-none"
                  />
                  <button className="bg-[#F5A623] hover:bg-[#d89018] text-white px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-md">
                    Calcular
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Resumo (Ocupa 5 colunas) */}
          <div className="lg:col-span-5">
            <div className="bg-[#1E3A5F] text-white rounded-[36px] p-6 shadow-2xl border-4 border-[#F5A623] sticky top-24 transform -rotate-0.5">
              <h3 className="mb-5 flex items-center gap-2 font-black text-lg tracking-wide uppercase">
                <span>📋</span> Resumo do Item
              </h3>
              
              <div className="bg-white rounded-2xl p-3 mb-5 shadow-md border-2 border-dashed border-[#1E3A5F]/20">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-[#F5F2EB] rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200">
                    <span className="text-3xl">🧦</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#1E3A5F] font-black text-sm truncate">{product.name}</p>
                    <p className="text-gray-500 font-bold text-xs">Quantidade: {product.quantity}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 text-sm font-semibold text-white/80">
                <div className="flex justify-between">
                  <span>Meia Premium:</span>
                  <span>R$ {product.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete Fixo:</span>
                  <span>R$ {shipping.toFixed(2)}</span>
                </div>
                <div className="border-t-4 border-dashed border-white/20 pt-3 mt-3 flex justify-between font-black text-xl text-white">
                  <span>Total:</span>
                  <span className="text-[#F5A623] drop-shadow-sm">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full bg-[#7ED321] hover:bg-[#6bb81d] text-white py-3.5 rounded-full font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-102">
                  Confirmar PIX 🎉
                </button>
                <Link
                  to={`/produto/${id}`}
                  className="w-full bg-white text-[#1E3A5F] py-2.5 rounded-full font-black text-xs uppercase tracking-wider text-center block hover:scale-102 transition-all border border-gray-100 shadow-sm"
                >
                  Desistir e Voltar
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}