import { ArrowLeft, Search } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import TransitionLink from "@/components/transition-link"

export default function CivilizationsPage() {
  const civilizations = [
    { id: "aztecs", name: "Aztecas", region: "Mesoamericana", specialty: "Infantería y Monjes", icon: "/assets/aztecas.webp" },
    { id: "berbers", name: "Bereberes", region: "Africana", specialty: "Caballería y Naval", icon: "/assets/bereberes.webp" },
    { id: "britons", name: "Britones", region: "Europa Occidental", specialty: "Arqueros", icon: "/assets/britanos.webp" },
    { id: "bulgarians", name: "Búlgaros", region: "Europa Oriental", specialty: "Infantería y Caballería", icon: "/assets/bulgaros.webp" },
    { id: "burgundians", name: "Borgoñones", region: "Europa Occidental", specialty: "Caballería y Economía", icon: "/assets/borgonones.webp" },
    { id: "burmese", name: "Birmanos", region: "Sudeste Asiático", specialty: "Monjes y Caballería", icon: "/assets/birmanos.webp" },
    { id: "byzantines", name: "Bizantinos", region: "Mediterránea", specialty: "Defensiva y Versátil", icon: "/assets/bizantinos.webp" },
    { id: "celts", name: "Celtas", region: "Europa Occidental", specialty: "Infantería y Asedio", icon: "/assets/celtas.webp" },
    { id: "chinese", name: "Chinos", region: "Asia Oriental", specialty: "Arqueros y Economía", icon: "/assets/chinos.webp" },
    { id: "cumans", name: "Cumanos", region: "Europa Oriental", specialty: "Caballería y Asedio", icon: "/assets/cumanos.webp" },
    { id: "ethiopians", name: "Etíopes", region: "Africana", specialty: "Arqueros y Asedio", icon: "/assets/ethiopes.webp" },
    { id: "franks", name: "Francos", region: "Europa Occidental", specialty: "Caballería", icon: "/assets/francos.webp" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <TransitionLink href="/" transitionName="route-home">
          <Button variant="ghost" className="flex items-center gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Volver al Inicio
          </Button>
        </TransitionLink>
      </div>

      <header className="mb-8 text-center">
        <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Guía de Civilizaciones</h1>
        <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
          Explora las 43 civilizaciones de Age of Empires II y aprende sus fortalezas y estrategias únicas
        </p>

        <div className="mx-auto flex max-w-md items-center space-x-2">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input type="search" placeholder="Buscar civilizaciones..." className="flex-1" />
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {civilizations.map((civ) => (
          <TransitionLink 
            key={civ.id} 
            href={`/civilizations/${civ.id}`}
            transitionName={`civ-${civ.id}`}
          >
            <Card className="h-full transition-all hover:border-primary hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>{civ.name}</CardTitle>
                  <CardDescription>{civ.region}</CardDescription>
                </div>
                <Image 
                  src={civ.icon || `/assets/${civ.id}.webp`}
                  alt={`Ícono de ${civ.name}`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-md object-cover"
                />
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">Especialidad: {civ.specialty}</p>
                <Button variant="outline" className="w-full">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          </TransitionLink>
        ))}
      </div>
    </div>
  )
}

