import Link from "next/link"
import { ArrowLeft, Swords } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function UniqueCountersPage() {
  const uniqueUnits = [
    {
      civilization: "Aztecas",
      unit: "Guerrero Jaguar",
      description: "Infantería especializada en combatir otras unidades de infantería",
      strongAgainst: ["Infantería", "Águilas", "Guerreros Woad"],
      weakAgainst: ["Arqueros", "Caballería", "Unidades de Asedio"],
      bestCounters: ["Arqueros a Caballo", "Mangoneles", "Paladines"],
    },
    {
      civilization: "Britones",
      unit: "Arquero de Arco Largo",
      description: "Arquero con alcance extremadamente largo",
      strongAgainst: ["Infantería", "Arqueros", "Unidades lentas"],
      weakAgainst: ["Caballería", "Escaramuzadores", "Mangoneles"],
      bestCounters: ["Escaramuzadores Élite", "Caballería Ligera", "Onagros"],
    },
    {
      civilization: "Bizantinos",
      unit: "Catafracta",
      description: "Caballería pesada con armadura contra infantería",
      strongAgainst: ["Infantería", "Caballería", "Arqueros"],
      weakAgainst: ["Piqueros", "Camellos", "Monjes"],
      bestCounters: ["Alabarderos", "Camellos Pesados", "Monjes con Santidad"],
    },
    {
      civilization: "Francos",
      unit: "Lanzador de Hacha",
      description: "Infantería con ataque a distancia",
      strongAgainst: ["Infantería", "Arqueros", "Unidades con poco blindaje"],
      weakAgainst: ["Caballería", "Mangoneles", "Escaramuzadores"],
      bestCounters: ["Caballería Ligera", "Onagros", "Escaramuzadores Élite"],
    },
    {
      civilization: "Godos",
      unit: "Huscarle",
      description: "Infantería rápida con resistencia a los arqueros",
      strongAgainst: ["Arqueros", "Edificios", "Infantería"],
      weakAgainst: ["Caballería", "Monjes", "Unidades de Asedio"],
      bestCounters: ["Paladines", "Catafractas", "Mangoneles"],
    },
    {
      civilization: "Mayas",
      unit: "Arquero de Plumas",
      description: "Arquero rápido con alta tasa de disparo",
      strongAgainst: ["Infantería", "Unidades lentas", "Unidades de Asedio"],
      weakAgainst: ["Escaramuzadores", "Caballería", "Mangoneles"],
      bestCounters: ["Escaramuzadores Élite", "Caballería Ligera", "Huscarles"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Volver al Inicio
          </Button>
        </Link>
      </div>

      <header className="mb-8 text-center">
        <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Counter Únicos</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Aprende cómo contrarrestar efectivamente las poderosas unidades únicas de cada civilización
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {uniqueUnits.map((unit, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-accent/30 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{unit.unit}</CardTitle>
                  <CardDescription>{unit.civilization}</CardDescription>
                </div>
                <div className="h-12 w-12 overflow-hidden rounded-full bg-primary/10">
                  <Image
                    src={`/placeholder.svg?height=48&width=48`}
                    alt={unit.unit}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-3 text-sm text-muted-foreground">{unit.description}</p>

              <div className="mb-3">
                <h4 className="mb-1 font-medium text-green-600 dark:text-green-400">Fuerte contra:</h4>
                <ul className="space-y-1 pl-5">
                  {unit.strongAgainst.map((strength, i) => (
                    <li key={i} className="list-disc text-sm text-muted-foreground">
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <h4 className="mb-1 font-medium text-red-600 dark:text-red-400">Débil contra:</h4>
                <ul className="space-y-1 pl-5">
                  {unit.weakAgainst.map((weakness, i) => (
                    <li key={i} className="list-disc text-sm text-muted-foreground">
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="my-3" />

              <div>
                <h4 className="mb-1 flex items-center gap-1 font-medium text-primary">
                  <Swords className="h-4 w-4" />
                  Mejores contraunidades:
                </h4>
                <ul className="space-y-1 pl-5">
                  {unit.bestCounters.map((counter, i) => (
                    <li key={i} className="list-disc text-sm font-medium">
                      {counter}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

