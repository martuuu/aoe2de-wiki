import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Cambiar a any para evitar los errores de tipo con Next.js 15
export default function GuidePage({ params }: any) {
  const { difficulty, guide } = params

  // Esto sería reemplazado con datos reales de una base de datos o API
  const guideData = {
    title: formatTitle(guide),
    difficulty: formatDifficulty(difficulty),
    steps: [
      {
        title: "Edad Oscura Temprana (0-5 minutos)",
        instructions: [
          "Crea 6 aldeanos y envíalos a las ovejas",
          "Investiga Telar",
          "Construye 2 casas con los aldeanos iniciales",
          "Explora el mapa para encontrar recursos",
          "Crea 2 aldeanos más y envíalos a la madera",
        ],
      },
      {
        title: "Edad Oscura Media (5-10 minutos)",
        instructions: [
          "Crea 4 aldeanos más y envíalos a la madera (total 6 en madera)",
          "Construye un campamento maderero",
          "Crea 3 aldeanos y envíalos al oro",
          "Construye un campamento minero cerca del oro",
          "Crea 2 aldeanos más y envíalos a las bayas",
          "Construye un molino cerca de las bayas",
        ],
      },
      {
        title: "Edad Oscura Tardía (10-12 minutos)",
        instructions: [
          "Crea 2 aldeanos más y envíalos a la comida (bayas o granjas)",
          "Investiga Hacha de Doble Filo en el campamento maderero",
          "Ahorra recursos para el avance a la Edad Feudal",
          "Pon en cola 2 aldeanos más antes de avanzar",
        ],
      },
      {
        title: "Edad Feudal (12-16 minutos)",
        instructions: [
          "Construye una herrería y un mercado para el avance a la Edad de los Castillos",
          "Crea 2 aldeanos más y envíalos al oro (total 5 en oro)",
          "Crea 3 aldeanos más y envíalos a la madera (total 9 en madera)",
          "Construye granjas con los aldeanos de comida restantes",
          "Investiga Collar de Caballo en el molino",
        ],
      },
      {
        title: "Edad de los Castillos (16-20 minutos)",
        instructions: [
          "Avanza a la Edad de los Castillos cuando tengas suficientes recursos",
          "Construye un monasterio y una universidad al llegar a la Edad de los Castillos",
          "Comienza a crear aldeanos para tu estrategia elegida",
          "Comienza a investigar mejoras económicas importantes",
          "Prepárate para tu composición militar elegida",
        ],
      },
    ],
    tips: [
      "Mantén tu Centro Urbano produciendo aldeanos constantemente",
      "Usa grupos de control para acceder rápidamente a tus edificios militares",
      "No olvides construir casas para evitar quedarte bloqueado por población",
      "Explora a tu oponente temprano para adaptar tu estrategia",
      "Equilibra tu economía según las unidades que quieras producir",
    ],
    civilizationRecommendations: [
      "Francos - Caballería fuerte y bonificación de granjas",
      "Bizantinos - Versátiles y permisivos para principiantes",
      "Britones - Arqueros fuertes con alcance extra",
      "Hunos - No necesitan construir casas, caballería fuerte",
      "Mayas - Bonificación económica y arqueros fuertes",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/guides">
          <Button variant="ghost" className="flex items-center gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Volver a Guías
          </Button>
        </Link>
      </div>

      <header className="mb-8">
        <div className="mb-2 text-sm font-medium text-primary">Guía de {guideData.difficulty}</div>
        <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">{guideData.title}</h1>
        <p className="text-muted-foreground">
          Sigue esta guía paso a paso para dominar la estrategia de {guideData.title} en Age of Empires II.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-8 rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-bold">Orden de Construcción</h2>

            {guideData.steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                <ul className="space-y-2 pl-5">
                  {step.instructions.map((instruction, i) => (
                    <li key={i} className="list-disc text-muted-foreground">
                      {instruction}
                    </li>
                  ))}
                </ul>
                {index < guideData.steps.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-xl font-semibold">Consejos Pro</h3>
            <ul className="space-y-2 pl-5">
              {guideData.tips.map((tip, index) => (
                <li key={index} className="list-disc text-muted-foreground">
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-xl font-semibold">Civilizaciones Recomendadas</h3>
            <ul className="space-y-2 pl-5">
              {guideData.civilizationRecommendations.map((civ, index) => (
                <li key={index} className="list-disc text-muted-foreground">
                  {civ}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// El resto de las funciones auxiliares permanecen igual...
function formatTitle(slug: string): string {
  const titles: Record<string, string> = {
    "fast-castle": "Castillo Rápido",
    "scout-rush": "Ataque con Exploradores",
    "archer-build": "Construcción de Arqueros",
    "drush-fc": "Drush a Castillo Rápido",
    "men-at-arms": "Ataque con Hombres de Armas",
    "castle-drop": "Colocación de Castillo",
    "hybrid-maps": "Estrategias para Mapas Híbridos",
    "arena-strategies": "Estrategias para Arena",
    "water-control": "Control Naval",
  }

  return (
    titles[slug] ||
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  )
}

function formatDifficulty(difficulty: string): string {
  const difficulties: Record<string, string> = {
    principiante: "Principiante",
    intermedio: "Intermedio",
    avanzado: "Avanzado",
  }

  return difficulties[difficulty] || difficulty
}

