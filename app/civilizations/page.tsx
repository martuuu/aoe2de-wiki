import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function CivilizationsPage() {
  // Esto sería reemplazado con datos reales de una base de datos o API
  const civilizations = [
    { id: "aztecs", name: "Aztecas", region: "Mesoamericana", specialty: "Infantería y Monjes" },
    { id: "berbers", name: "Bereberes", region: "Africana", specialty: "Caballería y Naval" },
    { id: "britons", name: "Britones", region: "Europa Occidental", specialty: "Arqueros" },
    { id: "bulgarians", name: "Búlgaros", region: "Europa Oriental", specialty: "Infantería y Caballería" },
    { id: "burgundians", name: "Borgoñones", region: "Europa Occidental", specialty: "Caballería y Economía" },
    { id: "burmese", name: "Birmanos", region: "Sudeste Asiático", specialty: "Monjes y Caballería" },
    { id: "byzantines", name: "Bizantinos", region: "Mediterránea", specialty: "Defensiva y Versátil" },
    { id: "celts", name: "Celtas", region: "Europa Occidental", specialty: "Infantería y Asedio" },
    { id: "chinese", name: "Chinos", region: "Asia Oriental", specialty: "Arqueros y Economía" },
    { id: "cumans", name: "Cumanos", region: "Europa Oriental", specialty: "Caballería y Asedio" },
    { id: "ethiopians", name: "Etíopes", region: "Africana", specialty: "Arqueros y Asedio" },
    { id: "franks", name: "Francos", region: "Europa Occidental", specialty: "Caballería" },
    // Añadir más civilizaciones según sea necesario para llegar a 43 en total
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
          <Link key={civ.id} href={`/civilizations/${civ.id}`}>
            <Card className="h-full transition-all hover:border-primary hover:shadow-md">
              <CardHeader>
                <CardTitle>{civ.name}</CardTitle>
                <CardDescription>{civ.region}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">Especialidad: {civ.specialty}</p>
                <Button variant="outline" className="w-full">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

