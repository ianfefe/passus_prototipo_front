import { useState } from "react";
import { Link } from "react-router";
import { Sparkles, Star, Heart } from "lucide-react";

export function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", formData);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#F5F2EB] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      
      {/* Fundo lúdico de aquarela e elementos mágicos infantis */}
      <div className="absolute top-10 -left-16 w-80 h-80 bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-80 h-80 bg-[#7ED321]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute top-20 left-20 text-7xl rotate-12">🎨</div>
        <div className="absolute top-1/4 right-20 text-6xl -rotate-6">✏️</div>
        <div className="absolute bottom-20 left-1/4 text-6xl rotate-45">🖍️</div>
        <div className="absolute bottom-40 right-1/3 text-5xl -rotate-12">🌈</div>
      </div>

      <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl max-w-md w-full border-4 border-[#1E3A5F] relative z-10 transform -rotate-0.5">
        <Sparkles className="absolute -top-3 right-12 text-[#F5A623] w-6 h-6 animate-pulse" />
        <Heart className="absolute bottom-12 -left-3 text-[#F07147] w-5 h-5 animate-bounce" />
        
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#7ED321] rounded-full shadow-md" />
        <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-[#F5A623] rounded-full shadow-md" />

        <h1 className="text-[#1E3A5F] text-3xl font-black text-center mb-1">
          Junte-se ao PASSUS!
        </h1>
        <p className="text-gray-600 font-semibold text-center text-sm mb-6">
          Crie sua conta e faça parte da mudança
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Nome completo</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Seu lindo nome"
              className="w-full px-4 py-2.5 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu@email.com"
              className="w-full px-4 py-2.5 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Senha</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-[#1E3A5F] mb-1.5 font-bold text-sm">Confirmar senha</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-2xl border-3 border-[#1E3A5F] bg-[#F5F2EB]/30 focus:bg-white focus:outline-none focus:border-[#F07147] font-medium transition-colors text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F07147] hover:bg-[#e5643a] text-white py-3.5 rounded-full font-black text-sm tracking-wide shadow-lg hover:shadow-xl transition-all uppercase hover:scale-102 mt-2"
          >
            Cadastrar 💌
          </button>
        </form>

        <div className="mt-6 text-center text-sm font-semibold">
          <p className="text-gray-500">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-[#F07147] hover:text-[#e5643a] font-black underline decoration-dashed">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}