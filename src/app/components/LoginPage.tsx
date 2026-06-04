import { useState } from "react";
import { Link } from "react-router";
import { Star, Heart } from "lucide-react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#F5F2EB] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      
      {/* Aquarelas de fundo */}
      <div className="absolute top-12 -right-16 w-80 h-80 bg-[#F5A623]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -left-16 w-80 h-80 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute top-20 left-20 text-7xl rotate-12">🎨</div>
        <div className="absolute top-1/4 right-20 text-6xl -rotate-6">✏️</div>
        <div className="absolute bottom-20 left-1/4 text-6xl rotate-45">🖍️</div>
        <div className="absolute bottom-40 right-1/3 text-5xl -rotate-12">🌈</div>
      </div>

      <div className="relative z-10 bg-white rounded-[40px] p-8 md:p-10 shadow-2xl max-w-md w-full border-4 border-[#1E3A5F] transform rotate-0.5">
        <Star className="absolute -top-3 left-12 text-[#7ED321] w-6 h-6 animate-pulse" />
        
        <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#F5A623] rounded-full shadow-md" />
        <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-[#4A90E2] rounded-full shadow-md" />

        <h1 className="text-[#1E3A5F] text-3xl font-black text-center mb-1">
          Bem-vindo de volta!
        </h1>
        <p className="text-gray-600 font-semibold text-center text-sm mb-6">
          Entre na sua conta PASSUS
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-2.5 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F07147] hover:bg-[#e5643a] text-white py-3.5 rounded-full font-black text-sm tracking-wide shadow-lg hover:shadow-xl transition-all uppercase hover:scale-102 mt-2"
          >
            Entrar 🚀
          </button>
        </form>

        <div className="mt-6 text-center text-sm font-semibold">
          <p className="text-gray-500">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="text-[#F07147] hover:text-[#e5643a] font-black underline decoration-dashed">
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}