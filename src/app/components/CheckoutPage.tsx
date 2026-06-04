import { useState } from "react";
import { Link } from "react-router";
import { Copy, Check, Heart, Sparkles, Smartphone, ShieldCheck } from "lucide-react";

export function CheckoutPage() {
  const [cep, setCep] = useState("");
  const [copied, setCopied] = useState(false);

  const pixKey = "pagamento@passus.com";

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16">
      
      {/* Aquarelas de fundo */}
      <div className="absolute top-10 -left-16 w-96 h-96 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-96 h-96 bg-[#7ED321]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        <h1 className="text-[#1E3A5F] text-3xl font-black text-center mb-2 flex items-center justify-center gap-2">
          <span>💰</span> Quase lá! Finalizar Pedido
        </h1>
        <div className="w-16 h-1 bg-[#F5A623] mx-auto mb-10 rounded-full" />

        {/* Selo do Impacto Social */}
        <div className="bg-white rounded-[32px] p-6 mb-8 shadow-2xl border-4 border-[#7ED321] relative overflow-hidden transform -rotate-0.5">
          <h3 className="text-[#1E3A5F] font-black text-xl mb-2 flex items-center gap-2">
            <Heart className="text-[#FF1D8D] w-5 h-5 fill-[#FF1D8D] animate-pulse" />
            Olha o tamanho do seu Impacto!
          </h3>
          <p className="text-gray-700 font-medium text-sm leading-relaxed">
            Com a sua compra, você está apoiando diretamente famílias em situação de vulnerabilidade,
            capacitando crianças através da arte e fortalecendo comunidades inteiras. Cada par de meias
            representa um passo feliz em direção a um futuro melhor! ☀️
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Área do PIX - Ocupa 7 colunas */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[36px] p-6 sm:p-8 shadow-2xl border-4 border-[#4A90E2] transform rotate-0.5">
              <h2 className="text-[#1E3A5F] text-xl font-black mb-6 flex items-center gap-2">
                <Smartphone className="text-[#4A90E2] w-5 h-5 stroke-[3]" />
                Pagamento Rápido via PIX
              </h2>

              {/* QR Code Simulado como álbum */}
              <div className="bg-[#F5F2EB]/60 rounded-3xl p-6 mb-6 flex flex-col items-center border-4 border-dashed border-[#1E3A5F]/30 shadow-inner">
                <div className="w-56 h-56 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-md border-4 border-white transform hover:scale-102 transition-transform">
                  <div className="text-center">
                    <div className="text-7xl mb-2 animate-pulse">📱</div>
                    <p className="text-xs font-black text-[#1E3A5F] uppercase tracking-wider">QR Code PIX</p>
                    <p className="text-[10px] font-semibold text-gray-400 mt-0.5">Abra o app do seu banco</p>
                  </div>
                </div>
                <p className="text-center text-[#1E3A5F] font-black text-xl drop-shadow-sm">
                  Valor Total: <span className="text-[#F07147]">R$ 50,00</span>
                </p>
              </div>

              {/* Chave Copia e Cola */}
              <div className="bg-[#F5F2EB] rounded-2xl p-4 border border-gray-200/40">
                <p className="text-[#1E3A5F] font-bold text-xs uppercase tracking-wider mb-2 pl-1">Chave PIX (Copia e Cola)</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={pixKey}
                    readOnly
                    className="flex-1 px-4 py-2.5 rounded-xl border-2 border-[#1E3A5F] bg-white text-sm font-bold text-[#1E3A5F]"
                  />
                  <button
                    onClick={handleCopyPixKey}
                    className="bg-[#F07147] hover:bg-[#e5643a] text-white px-6 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider"
                  >
                    {copied ? <Check className="w-4 h-4 stroke-[3]" /> : <Copy className="w-4 h-4 stroke-[3]" />}
                    {copied ? "Copiado!" : "Copiar Chave"}
                  </button>
                </div>
              </div>

              {/* Instruções Fofas */}
              <div className="mt-6 bg-[#7ED321]/10 rounded-2xl p-4 border-2 border-dashed border-[#7ED321]/30 text-xs font-semibold text-gray-600 leading-relaxed">
                <p>
                  <strong>💡 Dica do PASSUS:</strong> Após fazer o PIX, o sistema reconhece tudo sozinho
                  em até 2 minutinhos! Um comprovante cheio de cores vai chegar direto no seu e-mail cadastrado.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Lateral - Ocupa 5 colunas */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Cálculo de Frete */}
            <div className="bg-white rounded-[32px] p-6 shadow-2xl border-4 border-[#F5A623] transform -rotate-0.5">
              <h3 className="text-[#1E3A5F] text-lg font-black mb-4 flex items-center gap-1.5">
                <span>🚚</span> Onde vamos entregar?
              </h3>
              <div className="space-y-3">
                <input
                  type="text"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  placeholder="Seu CEP: 00000-000"
                  className="w-full px-4 py-2.5 text-sm rounded-xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F5A623] font-bold"
                />
                <button className="w-full bg-[#F5A623] hover:bg-[#e0951a] text-white py-2.5 rounded-full font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-102">
                  Calcular Frete
                </button>
              </div>
            </div>

            {/* Ações de Finalização */}
            <div className="bg-white rounded-[32px] p-6 shadow-2xl border-4 border-[#7ED321] transform rotate-0.5">
              <h3 className="text-[#1E3A5F] text-lg font-black mb-4 flex items-center gap-1.5">
                <ShieldCheck className="text-[#7ED321] w-5 h-5 stroke-[3]" /> Próximos Passos:
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-[#7ED321] hover:bg-[#6bb81d] text-white py-4 rounded-full font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-102">
                  Confirmar Meu Pagamento 🎉
                </button>
                <Link
                  to="/carrinho"
                  className="w-full bg-[#1E3A5F] hover:bg-[#152d47] text-white py-3 rounded-full font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg text-center block hover:scale-102 transition-all"
                >
                  Voltar para o Sacolão
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}