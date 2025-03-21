import TransitionLink from "@/components/transition-link"
import { ArrowLeft, Lightbulb, Coins, Crosshair, Swords, Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EssentialTipsPage() {
  const tipCategories = [
    {
      category: "Economía",
      icon: Coins,
      tips: [
        {
          title: "Nunca dejes de crear aldeanos",
          description:
            "Mantén tu Centro Urbano produciendo aldeanos constantemente hasta llegar a 120-140 aldeanos en partidas largas.",
        },
        {
          title: "Equilibra tus recursos",
          description:
            "Ajusta la distribución de aldeanos según la estrategia que estés siguiendo. Para una economía equilibrada: 40% en comida, 30% en madera, 20% en oro, 10% en piedra.",
        },
        {
          title: "Investiga mejoras económicas",
          description:
            "Prioriza mejoras como Hacha de Doble Filo, Collar de Caballo y Carretilla para aumentar significativamente la eficiencia de recolección.",
        },
        {
          title: "Construye granjas constantemente",
          description:
            "Las granjas son tu fuente de comida más confiable a largo plazo. Mantén siempre madera suficiente para reconstruirlas.",
        },
        {
          title: "Utiliza puntos de entrega eficientes",
          description:
            "Coloca campamentos madereros, molinos y campamentos mineros lo más cerca posible de los recursos para minimizar el tiempo de viaje.",
        },
      ],
    },
    {
      category: "Militar",
      icon: Swords,
      tips: [
        {
          title: "Conoce los contadores de unidades",
          description:
            "Aprende qué unidades son efectivas contra las de tu oponente. Por ejemplo: piqueros contra caballería, escaramuzadores contra arqueros.",
        },
        {
          title: "Mantén la producción constante",
          description:
            "Construye múltiples edificios militares para producir unidades sin interrupciones. 5-8 cuarteles/galerías/establos son comunes en el juego tardío.",
        },
        {
          title: "Controla el mapa con exploración",
          description:
            "Usa exploradores y unidades ligeras para mantener la visibilidad del mapa, conocer los movimientos enemigos y encontrar recursos.",
        },
        {
          title: "Investiga mejoras de unidades",
          description:
            "Prioriza las mejoras de ataque y armadura para tus unidades principales. Una unidad totalmente mejorada puede vencer a varias sin mejoras.",
        },
        {
          title: "Utiliza formaciones y micro-gestión",
          description:
            "Usa formaciones (línea, escuadrón, flanco) según la situación y micro-gestiona unidades clave como mangoneles o monjes.",
        },
      ],
    },
    {
      category: "Estrategia",
      icon: Crosshair,
      tips: [
        {
          title: "Adapta tu estrategia al mapa",
          description:
            "Diferentes mapas favorecen diferentes estrategias. Arabia es bueno para agresión temprana, Arena para boom económico, mapas insulares para juego naval.",
        },
        {
          title: "Aprende timings de edad",
          description:
            "Conoce los tiempos estándar para avanzar de edad: Feudal (10-11 min), Castillos (16-20 min), Imperial (30-35 min) para estrategias estándar.",
        },
        {
          title: "Mantén la presión constante",
          description:
            "Incluso pequeños ataques pueden distraer a tu oponente y ralentizar su economía. No necesitas destruir, solo interrumpir.",
        },
        {
          title: "Controla recursos clave",
          description:
            "Asegura oro y piedra adicionales en el mapa medio/tardío. Estos recursos son limitados y críticos para unidades avanzadas.",
        },
        {
          title: "Ten un plan para el juego tardío",
          description:
            "Piensa en tu composición final de ejército y transición de recursos cuando el oro y la piedra escaseen.",
        },
      ],
    },
    {
      category: "Técnicas Avanzadas",
      icon: Target,
      tips: [
        {
          title: "Domina los ataques rápidos (rush)",
          description:
            "Aprende estrategias como Drush (Dark Age Rush), Flush (Feudal Rush) y Trush (Tower Rush) para presionar temprano.",
        },
        {
          title: "Practica el micro de unidades",
          description:
            "Mejora tu control de unidades específicas: esquivar proyectiles con arqueros, convertir con monjes, usar mangoneles contra grupos.",
        },
        {
          title: "Utiliza grupos de control",
          description:
            "Asigna grupos de control (Ctrl+número) para acceder rápidamente a diferentes tipos de unidades y edificios.",
        },
        {
          title: "Aprende atajos de teclado",
          description:
            "Memoriza atajos para acciones comunes: construir casas (H+B), crear aldeanos (H+C), investigar mejoras, etc.",
        },
        {
          title: "Practica multitarea",
          description: "Entrena para gestionar simultáneamente economía, exploración, producción militar y combates.",
        },
      ],
    },
  ]

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
        <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Tips Imprescindibles</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Consejos esenciales para mejorar tu juego y dominar Age of Empires II
        </p>
      </header>

      <Tabs defaultValue="Economía" className="mb-8">
        <TabsList className="mb-4 flex w-full justify-center space-x-2">
          {tipCategories.map((category) => (
            <TabsTrigger key={category.category} value={category.category}>
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>

        {tipCategories.map((category) => (
          <TabsContent key={category.category} value={category.category} className="space-y-6">
            <div className="flex items-center gap-2">
              <category.icon className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Tips de {category.category}</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.tips.map((tip, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 rounded-lg border bg-accent/20 p-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Consejo Pro</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                {category.category === "Economía" &&
                  "Practica órdenes de construcción específicas hasta que se vuelvan automáticas. Un buen inicio económico es la base de cualquier estrategia exitosa."}
                {category.category === "Militar" &&
                  "La composición de tu ejército debe ser variada. Una combinación de 'piedra-papel-tijera' (infantería, arqueros, caballería) es más efectiva que un solo tipo de unidad."}
                {category.category === "Estrategia" &&
                  "Observa las repeticiones de jugadores profesionales para entender sus decisiones y timings. Analiza por qué hacen cada movimiento y cómo reaccionan a diferentes situaciones."}
                {category.category === "Técnicas Avanzadas" &&
                  "La práctica constante es clave. Establece objetivos específicos para cada partida, como mejorar tu tiempo de avance a Feudal o practicar una estrategia específica."}
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

