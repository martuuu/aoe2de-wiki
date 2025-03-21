import Link from "next/link"
import { ArrowLeft, Crosshair } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CounterUnitsPage() {
  const unitCategories = [
    {
      category: "Infantería",
      units: [
        {
          name: "Milicia / Hombre de Armas / Espadachín de Espada Larga / Campeón",
          counters: ["Arqueros", "Mangoneles", "Monjes"],
          counteredBy: ["Caballería", "Arqueros a Caballo", "Unidades de Asedio"],
        },
        {
          name: "Piquero / Lancero / Alabardero",
          counters: ["Caballería", "Elefantes", "Camellos"],
          counteredBy: ["Arqueros", "Mangoneles", "Caballería Ligera"],
        },
        {
          name: "Águila",
          counters: ["Monjes", "Arqueros", "Unidades de Asedio"],
          counteredBy: ["Infantería", "Caballería", "Castillos"],
        },
      ],
    },
    {
      category: "Arqueros",
      units: [
        {
          name: "Arquero / Ballestero / Arquero de Arco Largo",
          counters: ["Infantería", "Monjes", "Unidades Lentas"],
          counteredBy: ["Caballería", "Mangoneles", "Escaramuzadores"],
        },
        {
          name: "Escaramuzador / Escaramuzador Élite",
          counters: ["Arqueros", "Unidades con poco blindaje"],
          counteredBy: ["Caballería", "Infantería", "Unidades de Asedio"],
        },
        {
          name: "Arquero a Caballo / Arquero a Caballo Pesado",
          counters: ["Unidades Lentas", "Infantería", "Unidades de Asedio"],
          counteredBy: ["Escaramuzadores", "Camellos", "Piqueros"],
        },
      ],
    },
    {
      category: "Caballería",
      units: [
        {
          name: "Explorador / Caballería Ligera / Húsar",
          counters: ["Monjes", "Arqueros", "Unidades de Asedio"],
          counteredBy: ["Piqueros", "Camellos", "Infantería"],
        },
        {
          name: "Caballero / Paladín",
          counters: ["Arqueros", "Unidades de Asedio", "Infantería"],
          counteredBy: ["Piqueros", "Camellos", "Monjes"],
        },
        {
          name: "Camello / Camello Pesado",
          counters: ["Caballería", "Arqueros a Caballo"],
          counteredBy: ["Infantería", "Arqueros", "Unidades de Asedio"],
        },
      ],
    },
    {
      category: "Asedio",
      units: [
        {
          name: "Ariete / Ariete con Protección / Ariete de Asedio",
          counters: ["Edificios", "Unidades de Asedio"],
          counteredBy: ["Caballería", "Infantería", "Arqueros"],
        },
        {
          name: "Mangonel / Onagro / Onagro de Asedio",
          counters: ["Arqueros", "Infantería agrupada", "Edificios"],
          counteredBy: ["Caballería", "Unidades de Asedio", "Arqueros a Caballo"],
        },
        {
          name: "Escorpión / Escorpión Pesado",
          counters: ["Infantería agrupada", "Arqueros agrupados"],
          counteredBy: ["Caballería", "Unidades de Asedio", "Arqueros a Caballo"],
        },
      ],
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
        <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Counter Básicos</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Aprende qué unidades son efectivas contra otras para maximizar la eficiencia de tu ejército
        </p>
      </header>

      <Tabs defaultValue="Infantería" className="mb-8">
        <TabsList className="mb-4 flex w-full justify-center space-x-2">
          {unitCategories.map((category) => (
            <TabsTrigger key={category.category} value={category.category}>
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>

        {unitCategories.map((category) => (
          <TabsContent key={category.category} value={category.category} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.units.map((unit, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-accent/30 pb-3">
                    <CardTitle className="text-lg">{unit.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="mb-3">
                      <h4 className="mb-1 font-medium text-green-600 dark:text-green-400">Efectivo contra:</h4>
                      <ul className="space-y-1 pl-5">
                        {unit.counters.map((counter, i) => (
                          <li key={i} className="list-disc text-sm text-muted-foreground">
                            {counter}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-red-600 dark:text-red-400">Vulnerable a:</h4>
                      <ul className="space-y-1 pl-5">
                        {unit.counteredBy.map((counter, i) => (
                          <li key={i} className="list-disc text-sm text-muted-foreground">
                            {counter}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 rounded-lg border bg-card p-4">
              <div className="flex items-center gap-2">
                <Crosshair className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Consejos para {category.category}</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                {category.category === "Infantería" &&
                  "La infantería es generalmente barata y efectiva contra edificios. Utiliza grandes grupos para maximizar su efectividad y combínalos con unidades de largo alcance."}
                {category.category === "Arqueros" &&
                  "Los arqueros son excelentes para el control del mapa y ataques a distancia. Mantenlos protegidos detrás de tu infantería y evita la caballería enemiga."}
                {category.category === "Caballería" &&
                  "La caballería es rápida y poderosa, ideal para ataques sorpresa y perseguir unidades de asedio. Evita grupos de piqueros y utiliza su movilidad para elegir tus batallas."}
                {category.category === "Asedio" &&
                  "Las unidades de asedio son lentas pero devastadoras contra edificios y grupos de unidades. Protégelas siempre con otras unidades y mantén la distancia de la caballería enemiga."}
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

