import TransitionLink from "@/components/transition-link";
import { ArrowLeft, Shield, Swords, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GuidesPage() {
  const difficultyGuides = [
    {
      level: "Principiante",
      icon: Shield,
      description:
        "Perfecto para nuevos jugadores que están aprendiendo los conceptos básicos de Age of Empires II",
      guides: [
        {
          id: "fast-castle",
          title: "Castillo Rápido",
          description:
            "Una construcción económica segura para llegar rápidamente a la Edad de los Castillos",
        },
        {
          id: "scout-rush",
          title: "Ataque con Exploradores",
          description: "Agresión temprana con Caballería Exploradora",
        },
        {
          id: "archer-build",
          title: "Construcción de Arqueros",
          description: "Apertura básica centrada en arqueros",
        },
      ],
    },
    {
      level: "Intermedio",
      icon: Swords,
      description:
        "Para jugadores familiarizados con el juego que buscan mejorar sus habilidades",
      guides: [
        {
          id: "drush-fc",
          title: "Drush a Castillo Rápido",
          description:
            "Presión temprana con milicia hacia la Edad de los Castillos",
        },
        {
          id: "men-at-arms",
          title: "Ataque con Hombres de Armas",
          description: "Presión agresiva en la Edad Feudal con infantería",
        },
        {
          id: "castle-drop",
          title: "Colocación de Castillo",
          description:
            "Ubicación estratégica de castillos para control del mapa",
        },
      ],
    },
    {
      level: "Avanzado",
      icon: Target,
      description:
        "Estrategias complejas para jugadores experimentados que buscan dominar el juego",
      guides: [
        {
          id: "hybrid-maps",
          title: "Estrategias para Mapas Híbridos",
          description: "Adaptación a mapas con múltiples recursos",
        },
        {
          id: "arena-strategies",
          title: "Estrategias para Arena",
          description: "Construcciones especializadas para mapas cerrados",
        },
        {
          id: "water-control",
          title: "Control Naval",
          description: "Dominando el juego naval",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <TransitionLink href="/">
          <Button variant="ghost" className="flex items-center gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Volver al Inicio
          </Button>
        </TransitionLink>
      </div>

      <header className="mb-8 text-center">
        <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
          Guías Paso a Paso
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Selecciona un nivel de dificultad y elige entre nuestras detalladas
          órdenes de construcción para mejorar tu juego
        </p>
      </header>

      <div className="space-y-12">
        {difficultyGuides.map((difficulty) => (
          <section key={difficulty.level} className="space-y-4">
            <div className="flex items-center gap-3">
              <difficulty.icon className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">{difficulty.level}</h2>
            </div>
            <p className="text-muted-foreground">{difficulty.description}</p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {difficulty.guides.map((guide) => (
                <TransitionLink
                  key={guide.id}
                  href={`/guides/${difficulty.level.toLowerCase()}/${guide.id}`}
                >
                  <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                    <CardHeader>
                      <CardTitle>{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Ver Guía
                      </Button>
                    </CardContent>
                  </Card>
                </TransitionLink>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
