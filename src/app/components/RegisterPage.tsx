import { Link } from "react-router";

export function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] flex items-center justify-center px-6 py-12 font-sans">
      <div className="w-full max-w-md bg-white border border-orange-100/40 rounded-3xl shadow-sm p-8 space-y-6">
        
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-black text-stone-900 tracking-tight">
            Crie sua <span className="bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent">Conta Solidária</span>
          </h1>
          <p className="text-xs text-stone-400 font-medium">Faça parte do movimento e apoie a autonomia comunitária</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">Nome Completo</label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-sm focus:border-[#3B82F6] focus:bg-white transition-all outline-none font-medium"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">E-mail</label>
            <input
              type="email"
              placeholder="nome@exemplo.com"
              className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-sm focus:border-[#3B82F6] focus:bg-white transition-all outline-none font-medium"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">Defina uma Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-2xl border border-orange-100 bg-stone-50/60 text-sm focus:border-[#3B82F6] focus:bg-white transition-all outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] text-white py-3 rounded-2xl font-bold text-sm shadow-md hover:opacity-95 transition-transform hover:-translate-y-0.5"
          >
            Concluir Cadastro
          </button>
        </form>

        <div className="text-center pt-4 border-t border-stone-100 text-xs md:text-sm text-stone-500 font-medium">
          Já possui cadastro?{" "}
          <Link to="/login" className="text-[#3B82F6] font-bold hover:underline">
            Fazer login
          </Link>
        </div>

      </div>
    </div>
  );
}