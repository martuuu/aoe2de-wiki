import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Castle, Crown, Shield, Swords, BookOpen } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Simplificar usando any para los parámetros
export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `${params.civilization} - Guía de Age of Empires II`,
    description: `Información completa sobre la civilización ${params.civilization} en Age of Empires II`,
  }
}

// Elimina completamente la interfaz y utiliza la definición directamente
export default async function CivilizationPage({ 
  params 
}: any) {
  const { civilization } = params
  
  // Aquí normalmente obtendrías datos sobre la civilización
  // Por ejemplo:
  // const civData = await getCivilizationData(civilization)
  
  // Si no se encuentra la civilización
  if (!civilization) {
    notFound()
  }

  // Esto sería reemplazado con datos reales de una base de datos o API
  const civData = {
    name: formatName(civilization),
    description: "Una civilización poderosa con fuertes bonificaciones económicas y unidades militares únicas.",
    region: "Europa Occidental",
    specialty: "Caballería y Economía",
    image: `/placeholder.svg?height=300&width=300`,
    quickGuide: {
      strengths:
        "Excelente caballería con bonificaciones de PV y velocidad de ataque. Economía agrícola fuerte con mejoras gratuitas.",
      strategy:
        "Utiliza Castillo Rápido a Caballeros como estrategia principal. Aprovecha tus granjas gratuitas para una economía sólida y presiona con caballería en la Edad de los Castillos.",
      tips: "Construye castillos agresivamente aprovechando su descuento. Combina caballería con algunas unidades a distancia para contrarrestar piqueros.",
    },
    bonuses: [
      "Caballería +20% PV desde la Edad Feudal",
      "Mejoras de granjas gratuitas",
      "Castillos cuestan -25%",
      "Caballería ataca 25% más rápido desde la Edad de los Castillos",
      "Pueden construir Torreones",
    ],
    uniqueUnits: [
      {
        name: "Paladín",
        description: "Unidad de caballería pesada con alto ataque y PV",
        strengths: ["Fuerte contra arqueros", "Bueno contra infantería", "Alta movilidad"],
        weaknesses: ["Vulnerable a piqueros", "Costoso", "Lento de producir"],
      },
      {
        name: "Cañonero de Mano",
        description: "Unidad de pólvora con alto ataque pero velocidad de disparo lenta",
        strengths: ["Fuerte contra infantería", "Alto daño", "Buen alcance"],
        weaknesses: ["Débil contra caballería", "Velocidad de disparo lenta", "Impreciso"],
      },
    ],
    uniqueTechs: [
      {
        name: "Caballería",
        age: "Edad de los Castillos",
        description: "Establos trabajan 40% más rápido",
        cost: "300 Alimento, 300 Oro",
      },
      {
        name: "Hacha Barbuda",
        age: "Edad Imperial",
        description: "Lanzadores de Hachas +1 alcance",
        cost: "500 Alimento, 250 Oro",
      },
    ],
    teamBonus: "Caballeros +2 línea de visión",
    strategies: [
      {
        title: "Castillo Rápido a Caballeros",
        description:
          "Utiliza las fuertes bonificaciones de caballería de la civilización con una estrategia de Castillo Rápido a Caballeros.",
        steps: [
          "Sigue una orden de construcción estándar de Castillo Rápido",
          "Prioriza la minería de oro en la Edad de los Castillos temprana",
          "Construye 2-3 establos y produce Caballeros continuamente",
          "Añade un Monasterio para Monjes que apoyen a tus Caballeros",
          "Investiga Líneas de Sangre y Cría Caballar tan pronto como sea posible",
          "Añade Centros Urbanos y expande tu economía detrás de tu agresión con Caballeros",
        ],
      },
      {
        title: "Juego con Arqueros a Caballo",
        description:
          "Combina las bonificaciones de caballería de la civilización con Arqueros a Caballo para un ejército móvil.",
        steps: [
          "Abre con Exploradores en la Edad Feudal",
          "Transiciona a Arqueros a Caballo en la Edad de los Castillos",
          "Añade Caballeros para proteger a tus Arqueros a Caballo",
          "Investiga Anillo del Pulgar y Líneas de Sangre",
          "Añade más Galerías de Tiro y Establos mientras expandes tu economía",
          "Transiciona a Paladines y Arqueros a Caballo Pesados en la Edad Imperial",
        ],
      },
    ],
    counters: {
      strongAgainst: ["Arqueros", "Armas de asedio", "Monjes"],
      weakAgainst: ["Piqueros", "Jinetes de Camello", "Monjes con conversión"],
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/civilizations">
          <Button variant="ghost" className="flex items-center gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Volver a Civilizaciones
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <header className="mb-6">
            <h1 className="mb-2 text-3xl font-bold text-primary md:text-4xl">{civData.name}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                {civData.region}
              </span>
              <span className="flex items-center gap-1">
                <Swords className="h-4 w-4" />
                {civData.specialty}
              </span>
            </div>
          </header>

          <p className="mb-6 text-lg">{civData.description}</p>

          {/* Nueva sección: Guía rápida de juego */}
          <div className="mb-8 rounded-lg border-2 border-primary bg-accent/30 p-6">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold text-primary">Guía Rápida de Juego</h2>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-primary">Fortalezas principales:</h3>
                <p className="text-foreground">{civData.quickGuide.strengths}</p>
              </div>
              <div>
                <h3 className="font-medium text-primary">Estrategia recomendada:</h3>
                <p className="text-foreground">{civData.quickGuide.strategy}</p>
              </div>
              <div>
                <h3 className="font-medium text-primary">Consejos clave:</h3>
                <p className="text-foreground">{civData.quickGuide.tips}</p>
              </div>
            </div>
          </div>

          <div className="mb-8 rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold">Bonificaciones de Civilización</h2>
            <ul className="space-y-2 pl-5">
              {civData.bonuses.map((bonus, index) => (
                <li key={index} className="list-disc text-muted-foreground">
                  {bonus}
                </li>
              ))}
            </ul>
            <Separator className="my-4" />
            <div className="text-sm text-muted-foreground">
              <strong>Bonificación de Equipo:</strong> {civData.teamBonus}
            </div>
          </div>

          <Tabs defaultValue="units" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="units">Unidades Únicas</TabsTrigger>
              <TabsTrigger value="techs">Tecnologías Únicas</TabsTrigger>
              <TabsTrigger value="counters">Contadores</TabsTrigger>
            </TabsList>
            <TabsContent value="units" className="space-y-4 rounded-lg border bg-card p-6">
              {civData.uniqueUnits.map((unit, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-semibold">{unit.name}</h3>
                  <p className="text-muted-foreground">{unit.description}</p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-medium text-primary">Fortalezas</h4>
                      <ul className="space-y-1 pl-5">
                        {unit.strengths.map((strength, i) => (
                          <li key={i} className="list-disc text-sm text-muted-foreground">
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-primary">Debilidades</h4>
                      <ul className="space-y-1 pl-5">
                        {unit.weaknesses.map((weakness, i) => (
                          <li key={i} className="list-disc text-sm text-muted-foreground">
                            {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {index < civData.uniqueUnits.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </TabsContent>
            <TabsContent value="techs" className="space-y-4 rounded-lg border bg-card p-6">
              {civData.uniqueTechs.map((tech, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Crown className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                    <span className="ml-auto rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      {tech.age}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{tech.description}</p>
                  <p className="text-sm font-medium">Costo: {tech.cost}</p>

                  {index < civData.uniqueTechs.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </TabsContent>
            <TabsContent value="counters" className="rounded-lg border bg-card p-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-green-600">Fuerte Contra</h3>
                  <ul className="space-y-2 pl-5">
                    {civData.counters.strongAgainst.map((unit, index) => (
                      <li key={index} className="list-disc text-muted-foreground">
                        {unit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-red-600">Débil Contra</h3>
                  <ul className="space-y-2 pl-5">
                    {civData.counters.weakAgainst.map((unit, index) => (
                      <li key={index} className="list-disc text-muted-foreground">
                        {unit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <h2 className="mb-4 text-2xl font-bold">Estrategias Recomendadas</h2>
          <div className="space-y-6">
            {civData.strategies.map((strategy, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{strategy.title}</CardTitle>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 pl-5">
                    {strategy.steps.map((step, i) => (
                      <li key={i} className="list-decimal text-muted-foreground">
                        {step}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={civData.image || "/placeholder.svg"}
              alt={`Civilización ${civData.name}`}
              width={300}
              height={300}
              className="w-full object-cover"
            />
          </div>

          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <Castle className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Resumen de Civilización</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">Región:</div>
                <div className="text-muted-foreground">{civData.region}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">Especialidad:</div>
                <div className="text-muted-foreground">{civData.specialty}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">Dificultad:</div>
                <div className="text-muted-foreground">Intermedio</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">Estilo de Juego:</div>
                <div className="text-muted-foreground">Agresivo</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-xl font-semibold">Civilizaciones Similares</h3>
            <div className="space-y-3">
              <Link href="/civilizations/franks" className="block rounded-md p-2 transition-colors hover:bg-accent">
                <div className="font-medium">Francos</div>
                <div className="text-sm text-muted-foreground">Enfoque similar en caballería</div>
              </Link>
              <Link
                href="/civilizations/lithuanians"
                className="block rounded-md p-2 transition-colors hover:bg-accent"
              >
                <div className="font-medium">Lituanos</div>
                <div className="text-sm text-muted-foreground">Caballería fuerte y economía</div>
              </Link>
              <Link href="/civilizations/magyars" className="block rounded-md p-2 transition-colors hover:bg-accent">
                <div className="font-medium">Magiares</div>
                <div className="text-sm text-muted-foreground">Civilización centrada en caballería</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatName(slug: string): string {
  const names: Record<string, string> = {
    aztecs: "Aztecas",
    berbers: "Bereberes",
    britons: "Britones",
    bulgarians: "Búlgaros",
    burgundians: "Borgoñones",
    burmese: "Birmanos",
    byzantines: "Bizantinos",
    celts: "Celtas",
    chinese: "Chinos",
    cumans: "Cumanos",
    ethiopians: "Etíopes",
    franks: "Francos",
    lithuanians: "Lituanos",
    magyars: "Magiares",
  }

  return (
    names[slug] ||
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  )
}

