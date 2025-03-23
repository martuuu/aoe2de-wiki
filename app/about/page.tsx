import TransitionLink from "@/components/transition-link";
import {
  ArrowLeft,
  Info,
  Heart,
  Code,
  Coffee,
  Github,
  Linkedin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function AboutPage() {
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
          Quiénes Somos
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Conoce más sobre el proyecto AoE II Guía y la misión detrás de esta
          herramienta para la comunidad.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Sobre el Proyecto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Este proyecto surgio como una herramienta para que nosotros, los
              manquitos, podamos tener una guia util y en al momento de iniciar
              una partida con una civilizacion que no conocemos. A partir de
              esta idea se le fueron anexando muchas otras funcionalidades y
              tips para progresar en el juego y los matchs
            </p>
            <p>
              La misión es simple: hacer que Age of Empires II sea más
              accesible para todos, desde principiantes absolutos hasta
              jugadores experimentados que buscan mejorar sus habilidades.
              Queremos que la comunidad siga creciendo y que más personas puedan
              disfrutar de este excelente juego.
            </p>
            <p>
              Esta guía está en constante evolución, y tu feedback es
              fundamental para mejorarla. Todas las sugerencias son bienvenidas
              y nos ayudan a crear una herramienta cada vez más útil para la
              comunidad.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Sobre el Desarrollador
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/20 bg-black">
                <Image
                  src="/assets/units/lanzadordeacha.webp"
                  alt="Avatar de Martin"
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Martin Navarro</h3>
                <p className="text-muted-foreground">
                  Desarrollador Full Stack & Jugador <span className="italic">-manquito-</span> de AoE II 
                </p>
                <div className="mt-2 flex gap-2">
                  <a
                    href="https://github.com/martuuu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <Separator />

            <p>
              Soy un desarrollador apasionado por crear herramientas y apps para multiples propositos. Llevo jugando Age of Empires II casi desde su salida con Age of Empires: The Age of Kings, aun que nunca de manera competitiva. Hoy en dia somos 16 amigos que nos juntamos online/LAN a jugar partidas amistosas (algunas no tan amistosas jaja).
            </p>
            <p>
              Mi objetivo con este proyecto es combinar mis habilidades de
              desarrollo con mi gusto por AoE II para crear una herramienta que
              realmente ayude a los que recien comenzamos a jugar de manera mas "seria". Creo firmemente que los juegos
              como Age of Empires II no solo son entretenidos, sino que también
              desarrollan habilidades valiosas como el pensamiento estratégico,
              la gestión de recursos y la toma de decisiones rápidas.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Agradecimientos
            </CardTitle>
            <CardDescription>
              Este proyecto no sería posible sin el apoyo de la comunidad y
              estos recursos increíbles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-primary" />
                <span>
                  A todos los que han apoyado el proyecto a través de Cafecito
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-primary" />
                <span>
                  A los creadores de contenido que comparten su conocimiento con
                  la comunidad
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-primary" />
                <span>
                  A los desarrolladores de Age of Empires II por mantener vivo
                  este increíble juego
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-primary" />
                <span>
                  Y especialmente a ti, por usar esta guía y ser parte de la
                  comunidad
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
