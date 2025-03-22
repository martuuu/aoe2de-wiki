import TransitionLink from "@/components/transition-link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Cambiar a any para evitar los errores de tipo con Next.js 15
export default function GuidePage({ params }: any) {
  const { difficulty, guide } = params

  // Esto sería reemplazado con datos reales de una base de datos o API
  let guideData;
  
  if (difficulty === "intermedio" && guide === "georgian-scout-rush") {
    guideData = {
      title: "Rush con Exploradores Georgianos",
      difficulty: "Intermedio",
      steps: [
        {
          title: "Edad Oscura Inicial (0-8 minutos)",
          instructions: [
            "Envía los primeros 7 aldeanos a las ovejas bajo el Centro Urbano",
            "Envía el siguiente aldeano a atraer el jabalí",
            "Envía 3 aldeanos más al jabalí bajo el Centro Urbano (11 población)",
            "IMPORTANTE: Atrae venados con el explorador y usa el carro de mulas para explorar",
            "Envía 1 aldeano a construir casa y luego molino en las bayas",
            "Envía 1 aldeano a atraer el segundo jabalí",
            "Envía 3 aldeanos más a cazar bajo el Centro Urbano (16 población)",
            "Investiga Telar o crea un aldeano más y envíalo a cazar",
            "Investiga la Edad Feudal (tiempo ideal: 8:00)"
          ]
        },
        {
          title: "Transición a Feudal (8:00-10:00)",
          instructions: [
            "Inmediatamente envía 8 aldeanos de la caza a una línea de madera donde posicionas tu carro de mulas",
            "Envía 3 aldeanos más de la caza a las bayas (total: 4 en bayas)",
            "Envía 2 aldeanos a construir un Cuartel cuando estés al 50-60% de avance a Feudal",
            "Investiga Telar si optaste por un aldeano extra en la Edad Oscura",
            "Construye un Establo con los constructores del Cuartel",
            "Investiga Hacha de Doble Filo para mejorar recolección de madera",
            "Comienza a emparedar ambos lados de tu base usando los constructores del Establo"
          ]
        },
        {
          title: "Edad Feudal - Fase de Rush (10:00-14:00)",
          instructions: [
            "Produce 3 exploradores y comienza a presionar a tu oponente",
            "Investiga Collar de Caballo para mejorar las granjas",
            "Crea granjas con todos los nuevos aldeanos. Si falta madera, mantén aldeanos en árboles cercanos",
            "Cuando tengas 13-14 granjas, envía los siguientes 7 aldeanos al oro y construye un carro de mulas",
            "Construye una Herrería",
            "Avanza a la Edad de los Castillos tan pronto como puedas (envía aldeanos extra a la madera)"
          ]
        },
        {
          title: "Transición a la Edad de los Castillos (14:00-18:00)",
          instructions: [
            "Decide entre 2 Establos para caballeros o un Castillo para spam de Monaspas",
            "Cuando se agoten las bayas, crea granjas con esos aldeanos alrededor del molino",
            "Investiga Líneas de Sangre, Forja y Armadura de Escamas para tus unidades de caballería",
            "Investiga la mejora de Minería de Oro",
            "Produce caballeros o Monaspas continuamente",
            "Investiga Sierra para mejorar recolección de madera",
            "Construye una Iglesia Fortificada en la mejor ubicación para tus aldeanos",
            "Entrena monjes para capturar reliquias",
            "Construye un segundo Centro Urbano en otra línea de madera"
          ]
        }
      ],
      tips: [
        "Aprovecha la capacidad de los Georgianos de construir Torres de Vigilancia en la Edad Oscura para fortalecer tu defensa",
        "La caballería Georgiana recibe +1 armadura por edad, haciéndola especialmente resistente",
        "Los aldeanos Georgianos trabajan 10% más rápido en minas de oro y canteras - prioriza estas mejoras",
        "Posiciona torres en terreno elevado para obtener +1 alcance y +2 ataque",
        "La Iglesia Fortificada es crucial para proteger aldeanos mientras atacas en otro lugar",
        "Los monjes obtienen +15 PV por cada reliquia que posees - prioriza conseguir reliquias"
      ],
      civilizationRecommendations: [
        "Georgianos - Bonus de construcción temprana de torres y caballería resistente",
        "Francos - Caballería fuerte y bonificaciones de granja",
        "Magiares - Scout rush efectivo con unidades gratuitas",
        "Lituanos - Caballería que se beneficia de las reliquias",
        "Berberiscos - Unidades de caballería más baratas para rushes numerosos"
      ]
    };
  } else if (difficulty === "intermedio" && guide === "japanese-man-at-arms") {
    guideData = {
      title: "Rush de Hombres de Armas Japonés",
      difficulty: "Intermedio",
      steps: [
        {
          title: "Edad Oscura (0-8:25)",
          instructions: [
            "Envía 6 aldeanos a ovejas",
            "Envía 2 aldeanos a madera",
            "Envía 1 aldeano a jabalí",
            "Envía 1 aldeano más a cazar bajo el Centro Urbano",
            "OBLIGATORIO: Atrae al menos 2 venados",
            "Envía 1 aldeano a construir casa y luego regresar a la caza bajo el Centro Urbano",
            "Envía 2 aldeanos más a cazar bajo el Centro Urbano (obtén el segundo jabalí durante este tiempo)",
            "Envía 1 aldeano a construir un cuartel en el frente de tu base",
            "Envía 2 aldeanos más a comida bajo el Centro Urbano",
            "Envía 1 aldeano a madera",
            "Investiga Telar",
            "Investiga la Edad Feudal (tiempo ideal: 8:25)"
          ]
        },
        {
          title: "Transición a Edad Feudal y Ataque",
          instructions: [
            "Inmediatamente envía 2 aldeanos de la caza al oro y construye un campamento minero",
            "Crea 3 milicianos y envíalos a través del mapa al enemigo lo antes posible",
            "Envía 4 aldeanos de debajo del Centro Urbano al campo maderero inicial",
            "Construye una galería de tiro con arco de inmediato y comienza a producir arqueros",
            "Investiga Hombres de Armas. Ataca aldeanos enemigos con los Hombres de Armas",
            "Construye una herrería tan pronto como puedas permitírtelo",
            "Investiga Hacha de Doble Filo (puede ser necesario dejar el Centro Urbano inactivo por 10 segundos para permitírselo)",
            "Envía 2 aldeanos al oro",
            "Envía 1 aldeano a bayas y construye un molino",
            "Añade lentamente aldeanos a granjas/bayas antes de que las ovejas se agoten por completo",
            "Investiga Puntas de Flecha tan pronto como puedas permitírselo (dejar el Centro Urbano inactivo por 15-20 segundos está bien para priorizar Puntas de Flecha)",
            "Envía tus arqueros a través del mapa y agrúpalos con los Hombres de Armas restantes. Este ejército puede matar aldeanos detrás de empalizadas y destruir edificios",
            "Sigue fabricando arqueros en casa para defensa y seguimiento"
          ]
        }
      ],
      tips: [
        "Muchas civilizaciones pueden hacer un buen rush de hombres de armas, pero pocas pueden hacerlo tan rápido como los japoneses",
        "El objetivo es ejercer inmensa presión sobre el oponente lo antes posible",
        "Queremos que nuestro primer golpe sean los hombres de armas rápidos, y seguir lo antes posible con arqueros y Puntas de Flecha",
        "Esta construcción es ajustada y deja muy poco espacio para emparedar o adaptación, así que debemos asegurarnos de mantener siempre la iniciativa",
        "Después del empuje inicial con hombres de armas y arqueros, podemos emparedar y avanzar a la Edad de los Castillos si estamos por delante o intentar estabilizarnos si estamos por detrás",
        "Inmediatamente después de atraer venados, debemos encontrar al oponente rápidamente"
      ],
      whatNext: [
        "Después de toda esta agresión, es buen momento para establecer algunas defensas:",
        "- Contra exploradores, añade algunos lanceros cuando puedas permitírtelo y empareda",
        "- Contra arqueros, solo empareda lo antes posible y si te atacan, defiende con arqueros y una torre si es necesario",
        "Si tu agresión temprana hizo mucho daño, simplemente empareda y defiende hasta la Edad de los Castillos una vez que tu ejército avanzado se haya ido",
        "Si tu agresión temprana no hizo mucho daño, tendrás que adaptarte y encontrar otra condición de victoria, ya que invertimos mucho en ella",
        "Una vez que llegues a la Edad de los Castillos, juega como cualquier construcción de arqueros y sigue los mismos principios"
      ],
      civilizationRecommendations: [
        "Japoneses - Infantería más fuerte y creación más rápida",
        "Magiares - Herrería gratis para actualización de Hombres de Armas",
        "Vikingos - Infantería más barata",
        "Celtas - Infantería más rápida",
        "Godos - Infantería más barata"
      ]
    };
  } else if (difficulty === "avanzado" && guide === "anti-lame-fast-up") {
    guideData = {
      title: "Anti-Lame Fast Up con 17 Aldeanos",
      difficulty: "Avanzado",
      steps: [
        {
          title: "Edad Oscura (0-8:25)",
          instructions: [
            "Envía 6 aldeanos a ovejas",
            "Envía 1 aldeano a jabalí",
            "Envía 2 aldeanos a madera",
            "Envía 1 aldeano más al jabalí bajo el Centro Urbano",
            "Envía 1 aldeano más para atraer el segundo jabalí",
            "Envía 1 aldeano a construir una casa y luego molino en bayas",
            "OBLIGATORIO: Atrae al menos 2 venados",
            "Envía 5 aldeanos más a comida bajo el Centro Urbano",
            "Añade 1 aldeano a madera o investiga Telar",
            "Investiga la Edad Feudal (tiempo ideal: 8:25)"
          ]
        },
        {
          title: "Transición a Edad Feudal",
          instructions: [
            "Envía aldeanos de la caza a madera hasta tener 8 en 1 campo maderero",
            "Solo haz 2 campos madereros si tu línea de madera es terrible",
            "Envía 2 aldeanos de la caza a árboles cercanos",
            "Envía 2 aldeanos de la caza a construir un cuartel y una casa"
          ]
        }
      ],
      tips: [
        "Esta construcción es excelente para contrarrestar tácticas de sabotaje temprano (laming)",
        "Te proporciona una Edad Feudal consistente a población 19 sin telar o población 18 con telar, independientemente de tu civilización",
        "Comer jabalíes temprano significa que obtienes ligeramente menos comida de ellos (primer jabalí consumido con solo 7 aldeanos produce más descomposición)",
        "Es difícil de ejecutar, pero proporciona una Edad Oscura muy suave",
        "Ideal para cualquier juego donde no necesites aperturas de infantería"
      ],
      whatNext: [
        "Si vas a por arqueros, envía 4 aldeanos al oro al comienzo de la Edad Feudal",
        "Para exploradores o lanceros/hostigadores, mantén una economía pura de comida/madera",
        "Obtén ambas mejoras económicas en feudal, o omite el Collar de Caballo si quieres ser agresivo o alcanzar un tiempo de Castillo más rápido",
        "Juega un juego regular a partir de ahí, buenos hábitos como emparedar con los primeros 2 aldeanos que hacen edificios de producción siempre es aplicable"
      ],
      civilizationRecommendations: [
        "Cualquier civilización - Esta construcción es versátil y funciona bien con todas",
        "Especialmente efectiva con civilizaciones con bonificaciones económicas tempranas",
        "Útil para civilizaciones que sufren de sabotaje temprano por falta de bonificaciones en la Edad Oscura"
      ]
    };
  } else {
    guideData = {
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
    };
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <TransitionLink href="/guides">
          <Button variant="ghost" className="flex items-center gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Volver a Guías
          </Button>
        </TransitionLink>
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
    // Principiantes
    "knight-rush": "Rush de Caballeros con 25+4 Aldeanos",
    "1-stable-scouts": "Exploradores con 18 Aldeanos",
    "1-range-archers": "Arqueros con 19 Aldeanos",
    "fast-castle-boom": "Castillo Rápido y Boom con 23+2 Aldeanos",
    
    // Intermedios
    "georgian-scout-rush": "Rush con Exploradores Georgianos",
    "japanese-man-at-arms": "Rush de Hombres de Armas Japonés",
    "scouts-into-archers": "Exploradores en Arqueros",
    "double-barracks-eagles": "Águilas de Doble Cuartel",
    "feudal-drush": "Drush Feudal con 18 Aldeanos",
    "korean-spear-skirm": "Rush Coreano de Lanceros y Hostigadores",
    "eagle-range-feudal": "Águilas y Galería en Feudal",
    "fast-castle-unique": "Castillo Rápido a Unidad Única",
    "light-cav-relics": "Caballería Ligera y Control de Reliquias",
    "armenian-spear-rush": "Rush de Lanceros Armenios",
    
    // Avanzados
    "anti-lame-fast-up": "Anti-Lame Fast Up con 17 Aldeanos",
    "cuman-2tc-boom": "Boom Cumano con 2 CCs",
    "double-stable-scouts": "Exploradores de Doble Establo",
    "modern-man-at-arms": "Hombres de Armas Moderno",
    "scouts-into-ca": "Exploradores a Arqueros a Caballo",
    "ethiopian-2range": "Arqueros Etíopes de 2 Galerías",
    "fishing-ship-build": "Construcción con 3 Barcos Pesqueros",
    "turk-fast-imperial": "Imperial Rápido Turco"
  };
  
  return titles[slug] || slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function formatDifficulty(difficulty: string): string {
  const difficulties: Record<string, string> = {
    principiante: "Principiante",
    intermedio: "Intermedio",
    avanzado: "Avanzado",
  }

  return difficulties[difficulty] || difficulty
}

