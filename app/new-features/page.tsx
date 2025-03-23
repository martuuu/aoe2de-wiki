"use client";

import TransitionLink from "@/components/transition-link";
import {
  ArrowLeft,
  Lightbulb,
  Sparkles,
  Rocket,
  Zap,
  Cpu,
  BarChart,
  PlusCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NewFeaturesPage() {
  const plannedFeatures = [
    {
      icon: Sparkles,
      title: "Calculadora de Recursos",
      description:
        "Herramienta para calcular exactamente cuántos recursos necesitas para completar una estrategia específica.",
      status: "En desarrollo",
      eta: "Próximamente",
    },
    {
      icon: Rocket,
      title: "Guías en Video",
      description:
        "Tutoriales en video integrados para cada civilización y estrategia, con comentarios detallados.",
      status: "Planificado",
      eta: "Q2 2023",
    },
    {
      icon: Zap,
      title: "Modo Offline",
      description:
        "Acceso completo a todas las guías sin conexión a internet para consultar durante partidas.",
      status: "En desarrollo",
      eta: "Próximamente",
    },
    {
      icon: Cpu,
      title: "Simulador de Batallas",
      description:
        "Simula enfrentamientos entre diferentes unidades para entender mejor las mecánicas del juego.",
      status: "Idea",
      eta: "Por determinar",
    },
    {
      icon: BarChart,
      title: "Estadísticas Personales",
      description:
        "Conecta tu cuenta del juego para ver estadísticas detalladas y recomendaciones personalizadas.",
      status: "Idea",
      eta: "Por determinar",
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
          Próximas Características
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Se esta constantemente trabajando para mejorar la guía y añadir nuevas
          funcionalidades. Acá podés ver lo que estamos planeando para el
          futuro.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plannedFeatures.map((feature, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="bg-accent/30 pb-3">
              <div className="flex items-center gap-2">
                <feature.icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
              <CardDescription>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {feature.status}
                </span>
                <span className="ml-2 text-xs">{feature.eta}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 pt-4">
              <p className="text-muted-foreground flex-1">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}

        <Card className="flex flex-col border-dashed hover:border-primary hover:shadow-md">
          <CardContent className="flex h-full flex-col items-center justify-between p-6 text-center">
            <div className="flex flex-col items-center flex-1 py-6">
              <PlusCircle className="mb-4 h-10 w-10 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-medium">¿Tenés alguna idea?</h3>
              <p className="mb-4 text-muted-foreground">
                Nos encantaría escuchar tus sugerencias para nuevas
                características
              </p>
            </div>
            <TransitionLink href="/contact">
              <Button className="w-full">
                <Lightbulb className="mr-2 h-4 w-4" />
                Sugerir una característica
              </Button>
            </TransitionLink>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
