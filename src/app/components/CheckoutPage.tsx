import { ShieldCheck, ArrowLeft, Camera } from "lucide-react";
import { Link } from "react-router";

export function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] py-12 px-6 font-sans text-stone-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link to="/carrinho" className="inline-flex items-center gap-1 text-xs font-bold text-stone-500 hover:text-[#F07147] uppercase tracking-wider"><ArrowLeft className="w-3.5 h-3.5" /> Voltar</Link>
        <h1 className="text-3xl font-black text-stone-900">Concluir <span className="text-[#3B82F6]">Apoio</span></h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-stone-200 rounded-[2rem] p-8 shadow-md text-center space-y-4">
            <h3 className="font-extrabold text-stone-900">Pix para Apoiador</h3>
            <a href="https://www.instagram.com/projeto.passus/" target="_blank" rel="noreferrer" className="block mx-auto w-48 h-48 bg-stone-900 rounded-3xl flex items-center justify-center cursor-pointer hover:opacity-90 relative overflow-hidden">
                <span className="text-white text-[10px] font-bold p-4 uppercase text-center">Simulação QR Code<br/>(Abre Instagram)</span>
            </a>
            <p className="text-xs text-stone-500 font-medium">Escaneie com seu banco para apoiar.</p>
          </div>
          
          <div className="bg-white border border-stone-200 rounded-[2rem] p-8 shadow-md flex flex-col justify-center gap-4">
             <div className="text-sm font-black text-stone-950 pt-2 flex justify-between">
                <span>Total Geral</span><span>R$ 110,00</span>
             </div>
             <button className="w-full bg-[#F07147] text-white font-bold py-4 rounded-2xl shadow-sm">Confirmar Contribuição</button>
             <p className="text-[11px] text-stone-400 flex items-center gap-2"><ShieldCheck className="w-4 h-4" />Ambiente 100% auditado.</p>
          </div>
        </div>
      </div>
    </div>
  );
}