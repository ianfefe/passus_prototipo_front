import { Link } from "react-router";
import { Sparkles, BarChart2, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function AdminAnalyticsPage() {
  const annualData = [
    { year: "2016", vendas: 20, meta: 30 },
    { year: "2017", vendas: 35, meta: 40 },
    { year: "2018", vendas: 45, meta: 50 },
    { year: "2019", vendas: 55, meta: 60 },
    { year: "2020", vendas: 70, meta: 75 },
  ];

  const quarterlyData = [
    { quarter: "Q1", produto1: 45, produto2: 35, produto3: 25, produto4: 20 },
    { quarter: "Q2", produto1: 55, produto2: 42, produto3: 30, produto4: 28 },
    { quarter: "Q3", produto1: 48, produto2: 38, produto3: 32, produto4: 24 },
    { quarter: "Q4", produto1: 65, produto2: 50, produto3: 38, produto4: 32 },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EB] relative overflow-hidden font-sans pb-16">
      
      {/* Aquarelas de fundo */}
      <div className="absolute top-10 -left-16 w-96 h-96 bg-[#4A90E2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-96 h-96 bg-[#7ED321]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            to="/admin/produtos"
            className="bg-[#4A90E2] hover:bg-[#3a7bc8] text-white px-6 py-2.5 rounded-full font-black text-xs tracking-wider uppercase shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 border-2 border-white"
          >
            ← Voltar pros Produtos
          </Link>
          <span className="text-xs font-black bg-white border-2 border-dashed border-gray-300 px-4 py-1.5 rounded-xl text-gray-500 shadow-sm">
            Painel Administrativo 🛠️
          </span>
        </div>

        <h1 className="text-[#1E3A5F] text-3xl font-black mb-12 flex items-center justify-center md:justify-start gap-3">
          <span className="text-4xl">📊</span> Gráficos de Crescimento
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Gráfico Anual */}
          <div className="bg-white rounded-[36px] border-4 border-[#F07147] p-6 sm:p-8 shadow-2xl transform -rotate-0.5">
            <h3 className="text-[#1E3A5F] mb-6 font-black text-lg flex items-center gap-2">
              <TrendingUp className="text-[#F07147] w-5 h-5 stroke-[3]" />
              Comparação de Metas Anuais
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={annualData}>
                <CartesianGrid strokeDasharray="4 4" stroke="#1E3A5F15" />
                <XAxis dataKey="year" stroke="#1E3A5F" font-weight-bold />
                <YAxis stroke="#1E3A5F" font-weight-bold />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#F5F2EB",
                    border: "3px solid #1E3A5F",
                    borderRadius: "1.25rem",
                    fontWeight: "bold",
                  }}
                />
                <Legend wrapperStyle={{ fontWeight: "bold" }} />
                <Line
                  type="monotone"
                  dataKey="vendas"
                  stroke="#F07147"
                  strokeWidth={4}
                  dot={{ fill: "#F07147", r: 6 }}
                  name="Vendas Concluídas"
                />
                <Line
                  type="monotone"
                  dataKey="meta"
                  stroke="#4A90E2"
                  strokeWidth={4}
                  dot={{ fill: "#4A90E2", r: 6 }}
                  name="Meta de Impacto"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico Trimestral */}
          <div className="bg-white rounded-[36px] border-4 border-[#7ED321] p-6 sm:p-8 shadow-2xl transform rotate-0.5">
            <h3 className="text-[#1E3A5F] mb-6 font-black text-lg flex items-center gap-2">
              <BarChart2 className="text-[#7ED321] w-5 h-5 stroke-[3]" />
              Vendas de Meias por Trimestre
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={quarterlyData}>
                <CartesianGrid strokeDasharray="4 4" stroke="#1E3A5F15" />
                <XAxis dataKey="quarter" stroke="#1E3A5F" font-weight-bold />
                <YAxis stroke="#1E3A5F" font-weight-bold />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#F5F2EB",
                    border: "3px solid #1E3A5F",
                    borderRadius: "1.25rem",
                    fontWeight: "bold",
                  }}
                />
                <Legend wrapperStyle={{ fontWeight: "bold" }} />
                <Bar dataKey="produto1" fill="#F07147" name="Oficina Arte" radius={[6, 6, 0, 0]} />
                <Bar dataKey="produto2" fill="#4A90E2" name="Esportiva Pro" radius={[6, 6, 0, 0]} />
                <Bar dataKey="produto3" fill="#7ED321" name="Social Elegance" radius={[6, 6, 0, 0]} />
                <Bar dataKey="produto4" fill="#F5A623" name="Kids Fun" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}