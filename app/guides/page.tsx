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
          id: "knight-rush",
          title: "Rush de Caballeros con 25+4 Aldeanos",
          description: "Construcción sencilla para nuevos jugadores enfocada en caballeros",
        },
        {
          id: "1-stable-scouts",
          title: "Exploradores con 18 Aldeanos",
          description: "Agresión temprana con Caballería Exploradora de un solo Establo",
        },
        {
          id: "1-range-archers",
          title: "Arqueros con 19 Aldeanos",
          description: "Apertura básica centrada en arqueros con una sola galería",
        },
        {
          id: "fast-castle-boom",
          title: "Castillo Rápido y Boom con 23+2 Aldeanos",
          description: "Construcción económica segura para llegar rápidamente a la Edad de los Castillos",
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
          id: "georgian-scout-rush",
          title: "Rush con Exploradores Georgianos",
          description: "Presión temprana con exploradores seguida de una transición a caballería Monaspa",
        },
        {
          id: "japanese-man-at-arms",
          title: "Rush de Hombres de Armas Japonés",
          description: "Presión agresiva con hombres de armas utilizando los bonos japoneses",
        },
        {
          id: "scouts-into-archers",
          title: "Exploradores en Arqueros",
          description: "Construcción flexible que inicia con exploradores y transiciona a arqueros",
        },
        {
          id: "double-barracks-eagles",
          title: "Águilas de Doble Cuartel",
          description: "Estrategia de presión Mesoamericana con dos cuarteles de águilas",
        },
        {
          id: "feudal-drush",
          title: "Drush Feudal con 18 Aldeanos",
          description: "Presión temprana con milicia durante la transición a la Edad Feudal",
        },
        {
          id: "korean-spear-skirm",
          title: "Rush Coreano de Lanceros y Hostigadores",
          description: "Estrategia de unidades de contraataque coreanas para presión temprana",
        },
        {
          id: "eagle-range-feudal",
          title: "Águilas y Galería en Feudal",
          description: "Combinación potente de unidades mesoamericanas para presión feudal",
        },
        {
          id: "fast-castle-unique",
          title: "Castillo Rápido a Unidad Única",
          description: "Construcción económica enfocada en conseguir un castillo temprano",
        },
        {
          id: "light-cav-relics",
          title: "Caballería Ligera y Control de Reliquias",
          description: "Estrategia para mapas cerrados enfocada en controlar reliquias",
        },
        {
          id: "armenian-spear-rush",
          title: "Rush de Lanceros Armenios",
          description: "Presión con lanceros armenios y transición a control de reliquias",
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
          id: "anti-lame-fast-up",
          title: "Anti-Lame Fast Up con 17 Aldeanos",
          description: "Construcción avanzada para contrarrestar estrategias de sabotaje temprano",
        },
        {
          id: "cuman-2tc-boom",
          title: "Boom Cumano con 2 CCs",
          description: "Explotación del bono único cumano para ventaja económica",
        },
        {
          id: "double-stable-scouts",
          title: "Exploradores de Doble Establo",
          description: "Presión máxima con exploradores de dos establos",
        },
        {
          id: "modern-man-at-arms",
          title: "Hombres de Armas Moderno",
          description: "Versión actualizada y optimizada del rush de hombres de armas",
        },
        {
          id: "scouts-into-ca",
          title: "Exploradores a Arqueros a Caballo",
          description: "Transición compleja hacia arqueros a caballo para dominio de mapa",
        },
        {
          id: "ethiopian-2range",
          title: "Arqueros Etíopes de 2 Galerías",
          description: "Estrategia de equipo con etíopes enfocada en presión de arqueros",
        },
        {
          id: "fishing-ship-build",
          title: "Construcción con 3 Barcos Pesqueros",
          description: "Adaptación a mapas híbridos con economía marítima temprana",
        },
        {
          id: "turk-fast-imperial",
          title: "Imperial Rápido Turco",
          description: "Avance ultra rápido a la Era Imperial para sorprender con unidades de pólvora",
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
