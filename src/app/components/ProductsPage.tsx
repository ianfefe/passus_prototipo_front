import { Laptop, Database, Globe, ArrowRight, Code2 } from "lucide-react";
import logoPassus from "@/assets/passus.jpg";
import print1 from "@/assets/print1.png";
import print2 from "@/assets/print2.png";
import print3 from "@/assets/print3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

const imagensPassus = [
  logoPassus,
  print1,
  print2,
  print3
];

export function ProductsPage() {
  const solutions = [
    { 
      id: 1, 
      name: "E-commerce Projeto Passus", 
      type: "Plataforma de Vendas", 
      tag: "Case de Sucesso", 
      // Em vez de icon, usamos um array de imagens
      media: imagensPassus, 
      tech: "React & Node.js" 
    },
    { 
      id: 2, 
      name: "Sistema de Gestão EcoONG", 
      type: "ERP Interno", 
      tag: "Gestão Operacional", 
      icon: <Database className="w-12 h-12 text-[#0B7269]" />, 
      tech: "Python & PostgreSQL" 
    },
    { 
      id: 3, 
      name: "Portal Transparência 360", 
      type: "Dashboard de Dados", 
      tag: "Auditoria", 
      icon: <Laptop className="w-12 h-12 text-blue-400" />, 
      tech: "Next.js & AWS" 
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <Card key={solution.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
            
            {/* Área de Mídia (Carrossel ou Ícone) */}
            <div className="bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-6 min-h-[220px] relative border-b border-slate-100 dark:border-slate-800">
              {solution.media ? (
                // Se tiver imagens, mostra o Carrossel
                <Carousel className="w-full max-w-[85%]">
                  <CarouselContent>
                    {solution.media.map((image, index) => (
                      <CarouselItem key={index} className="flex items-center justify-center">
                        <img 
                          src={image} 
                          alt={`${solution.name} - Imagem ${index + 1}`} 
                          className="max-h-[160px] w-auto object-contain rounded-md"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4 bg-white/80 hover:bg-white dark:bg-slate-800/80" />
                  <CarouselNext className="-right-4 bg-white/80 hover:bg-white dark:bg-slate-800/80" />
                </Carousel>
              ) : (
                // Se não, mostra o Ícone
                solution.icon
              )}
            </div>

            {/* Informações do Produto */}
            <CardContent className="flex-grow p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="secondary">{solution.tag}</Badge>
                <span className="text-xs text-slate-500 font-medium">{solution.tech}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                {solution.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {solution.type}
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                <Button onClick={() => window.open('/prototipo_propus_case/passus/', '_blank')} className="w-full bg-[#0B7269] hover:bg-[#095c55] text-white">
                  Visitar site
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}