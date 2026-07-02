import { Link } from "react-router";
import { Heart } from "lucide-react";

export function LoginPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] flex items-center justify-center px-6 py-12 font-sans">
      <div className="w-full max-w-md bg-white border border-orange-100/40 rounded-3xl shadow-sm p-8 md:p-10 space-y-6">
        
        <div className="text-center space-y-1">
          <h1 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight">
            Bem-vindo ao <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">PASSUS</span>
          </h1>
          <p className="text-xs text-stone-400 font-medium">Entre para acompanhar seus pedidos e projetos apoiados</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">
              Seu E-mail
            </label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-sm focus:border-[#3B82F6] focus:bg-white transition-all outline-none font-medium placeholder-stone-400"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">
                Sua Senha
              </label>
              <a href="#" className="text-xs font-bold text-[#3B82F6] hover:underline">Esqueceu?</a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-sm focus:border-[#3B82F6] focus:bg-white transition-all outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F07147] hover:bg-[#d85f37] text-white py-3 rounded-2xl font-bold text-sm shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Entrar no Portal
          </button>
        </form>

        <div className="text-center pt-4 border-t border-stone-100 text-xs md:text-sm text-stone-500 font-medium flex flex-col sm:flex-row justify-center gap-1">
          <span>Ainda não faz parte da nossa rede?</span>
          <Link to="/cadastro" className="text-[#3B82F6] font-bold hover:underline inline-flex items-center gap-0.5">
            Criar conta <Heart className="w-3 h-3 fill-[#3B82F6] stroke-none" />
          </Link>
        </div>

      </div>
    </div>
  );
}