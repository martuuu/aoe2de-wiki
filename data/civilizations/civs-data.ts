import { CivilizationData } from './types';

export const civilizationsData: Record<string, CivilizationData> = {
  franks: {
    id: "franks",
    name: "Francos",
    description: "Una civilización de Europa Occidental especializada en caballería, con unidades montadas extremadamente poderosas y una economía agrícola fuerte.",
    region: "Europa Occidental",
    categories: ["Caballería", "Boom Económico", "Fast Castle", "Rush", "Unidad Única"],
    specialty: "Caballería y Economía",
    image: "/assets/francos.webp",
    difficulty: "Fácil",
    playstyle: "Agresivo",
    quickGuide: {
      strengths: "Excelente caballería con bonificaciones de PV y velocidad de ataque. Economía agrícola fuerte con mejoras gratuitas.",
      strategy: "Utiliza Castillo Rápido a Caballeros como estrategia principal. Aprovecha tus granjas gratuitas para una economía sólida y presiona con caballería en la Edad de los Castillos.",
      tips: "Construye castillos agresivamente aprovechando su descuento. Combina caballería con algunas unidades a distancia para contrarrestar piqueros."
    },
    bonuses: [
      "Caballería +20% PV desde la Edad Feudal",
      "Mejoras de granjas gratuitas",
      "Castillos cuestan -25%",
      "Caballería ataca 25% más rápido desde la Edad de los Castillos",
      "Recolectores de baya trabajan 15% más rápido",
      "Pueden investigar Herencia Caballeresca (actualiza Exploradores a Caballeros)"
    ],
    uniqueUnits: [
      {
        name: "Lanzador de Hachas",
        description: "Unidad única de infantería arrojadiza con alto ataque y bono contra infantería",
        strengths: ["Fuerte contra infantería", "Bueno contra edificios", "Bono contra caballería"],
        weaknesses: ["Vulnerable a arqueros", "Corto alcance", "Costoso en oro"]
      }
    ],
    uniqueTechs: [
      {
        name: "Caballería",
        age: "Edad de los Castillos",
        description: "Establos trabajan 40% más rápido",
        cost: "300 Alimento, 300 Oro"
      },
      {
        name: "Hacha Barbuda",
        age: "Edad Imperial",
        description: "Lanzadores de Hachas +1 alcance",
        cost: "500 Alimento, 250 Oro"
      }
    ],
    teamBonus: "Caballeros +2 línea de visión",
    strategies: [
      {
        title: "Castillo Rápido a Caballeros",
        description: "Utiliza las fuertes bonificaciones de caballería de la civilización con una estrategia de Castillo Rápido a Caballeros.",
        steps: [
          "Sigue una orden de construcción estándar de Castillo Rápido",
          "Prioriza la minería de oro en la Edad de los Castillos temprana",
          "Construye 2-3 establos y produce Caballeros continuamente",
          "Añade un Monasterio para Monjes que apoyen a tus Caballeros",
          "Investiga Líneas de Sangre y Cría Caballar tan pronto como sea posible",
          "Añade Centros Urbanos y expande tu economía detrás de tu agresión con Caballeros"
        ]
      },
      {
        title: "Juego con Arqueros a Caballo",
        description: "Combina las bonificaciones de caballería de la civilización con Arqueros a Caballo para un ejército móvil.",
        steps: [
          "Abre con Exploradores en la Edad Feudal",
          "Transiciona a Arqueros a Caballo en la Edad de los Castillos",
          "Añade Caballeros para proteger a tus Arqueros a Caballo",
          "Investiga Anillo del Pulgar y Líneas de Sangre",
          "Añade más Galerías de Tiro y Establos mientras expandes tu economía",
          "Transiciona a Paladines y Arqueros a Caballo Pesados en la Edad Imperial"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Arqueros", "Armas de asedio", "Infantería"],
      weakAgainst: ["Piqueros", "Jinetes de Camello", "Monjes con conversión"]
    },
    similarCivs: [
      {
        id: "lithuanians",
        name: "Lituanos",
        reason: "Caballería fuerte y economía"
      },
      {
        id: "magyars",
        name: "Magiares",
        reason: "Civilización centrada en caballería"
      },
      {
        id: "berbers",
        name: "Bereberes",
        reason: "Caballería rápida y efectiva"
      }
    ]
  },
  
  aztecs: {
    id: "aztecs",
    name: "Aztecas",
    description: "Una civilización mesoamericana con poderosa infantería y monjes, junto a una fuerte economía gracias a sus aldeanos que transportan más recursos.",
    region: "Mesoamericana",
    categories: ["Infantería", "Rush", "Meso", "Unidad Única", "Monjes"],    specialty: "Infantería y Monjes",
    image: "/assets/aztecas.webp",
    difficulty: "Intermedio",
    playstyle: "Agresivo",
    quickGuide: {
      strengths: "Infantería poderosa con bonificación de ataque, monjes fuertes y economía eficiente con aldeanos que transportan más recursos.",
      strategy: "Presiona en Feudal con Men-at-Arms o aprovecha tu ventaja económica para llegar rápido a Castillos y usar monjes o infantería Eagle.",
      tips: "Aprovecha tus monjes para recoger reliquias temprano. Utiliza la tecnología Atlatl para mejorar tus Skirmishers contra arqueros."
    },
    bonuses: [
      "Aldeanos transportan +5 recursos",
      "Unidades militares se crean 15% más rápido",
      "+5 PV para Monjes por cada tecnología de Monasterio",
      "Recursos iniciales +50 oro",
      "Infantería +1 ataque por edad (desde la Edad Feudal)"
    ],
    uniqueUnits: [
      {
        name: "Guerrero Jaguar",
        description: "Infantería de élite especializada contra otras unidades de infantería",
        strengths: ["Bono de daño contra infantería", "Ataque elevado", "Creación rápida"],
        weaknesses: ["Vulnerable contra arqueros", "Baja velocidad", "Sin bonificación contra caballería"]
      }
    ],
    uniqueTechs: [
      {
        name: "Atlatl",
        age: "Edad de los Castillos",
        description: "+1 alcance y +1 ataque para Skirmishers",
        cost: "400 Alimento, 350 Oro"
      },
      {
        name: "Guerreros Jaguar",
        age: "Edad Imperial",
        description: "+4 ataque para infantería contra edificios",
        cost: "750 Alimento, 450 Oro"
      }
    ],
    teamBonus: "Reliquias generan +33% de oro",
    strategies: [
      {
        title: "Men-at-Arms Rush",
        description: "Aprovecha tu infantería mejorada para presionar en la Edad Feudal temprana.",
        steps: [
          "Avanza rápido a la Edad Feudal (22 aldeanos)",
          "Construye un cuartel durante la transición",
          "Entrena Men-at-Arms inmediatamente al llegar a Feudal",
          "Investiga la mejora de Forja rápidamente",
          "Presiona los recursos principales del enemigo",
          "Transiciona a Eagles en la Edad de los Castillos"
        ]
      },
      {
        title: "Monjes y Siege",
        description: "Aprovecha los monjes mejorados con la infantería y las armas de asedio.",
        steps: [
          "Avanza rápido a la Edad de los Castillos (27-28 aldeanos)",
          "Construye un Monasterio y entrena 3-4 monjes",
          "Recolecta reliquias para ventaja económica",
          "Añade un Taller de Asedio para Mangoneles",
          "Refuerza con Eagles o Guerreros Jaguar",
          "Controla el mapa con monjes y conquistando reliquias"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Infantería", "Caballería (con Eagles)", "Monjes enemigos"],
      weakAgainst: ["Arqueros", "Artillería", "Caballería pesada"]
    },
    similarCivs: [
      {
        id: "mayans",
        name: "Mayas",
        reason: "Civilización mesoamericana con foco en infantería"
      },
      {
        id: "incas",
        name: "Incas",
        reason: "Infantería diversa y Eagles"
      },
      {
        id: "goths",
        name: "Godos",
        reason: "Especialistas en spam de infantería"
      }
    ]
  },
  
  britons: {
    id: "britons",
    name: "Britones",
    description: "Civilización de Europa Occidental especializada en arqueros, con unidades de arco de largo alcance y una economía basada en pastores eficientes.",
    region: "Europa Occidental",
    specialty: "Arqueros y Economía",
    categories: ["Arqueros", "Boom Económico", "Defensivo", "Unidad Única"],
    image: "/assets/britanos.webp",
    difficulty: "Fácil",
    playstyle: "Defensivo",
    quickGuide: {
      strengths: "Arqueros con mayor alcance, pastores eficientes, y centros urbanos económicos en la Edad Imperial.",
      strategy: "Realiza una estrategia de arqueros en Feudal, transicionando a arqueros de largo alcance en Castillos para mantener al enemigo a distancia.",
      tips: "Aprovecha tu ventaja de alcance para mantener distancia de la infantería enemiga. Mantén tus ejércitos protegidos con infantería para contrarrestar caballería."
    },
    bonuses: [
      "Centros Urbanos cuestan -50% madera desde la Edad de los Castillos",
      "Arqueros a pie +1 alcance en Feudal, +1 en Castillos, +1 en Imperial",
      "Pastores trabajan 25% más rápido",
      "Granjas cuestan -40% madera"
    ],
    uniqueUnits: [
      {
        name: "Arquero Largo",
        description: "Arquero de largo alcance con gran precisión y poder de ataque",
        strengths: ["Alcance extraordinario", "Alto daño", "Excelente en masa"],
        weaknesses: ["Vulnerable contra caballería", "Débil en combate cercano", "Requiere masa crítica"]
      }
    ],
    uniqueTechs: [
      {
        name: "Yeomen",
        age: "Edad de los Castillos",
        description: "+1 alcance para torres de arqueros; +2 ataque para arqueros a pie",
        cost: "750 Madera, 450 Oro"
      },
      {
        name: "Guardianes",
        age: "Edad Imperial",
        description: "Arqueros disparan 20% más rápido",
        cost: "850 Alimento, 500 Oro"
      }
    ],
    teamBonus: "Galerías de Tiro trabajan 20% más rápido",
    strategies: [
      {
        title: "Rush de Arqueros",
        description: "Aprovecha la mejora de alcance para presionar al enemigo desde la Edad Feudal",
        steps: [
          "Avanza a la Edad Feudal con 22 aldeanos",
          "Construye 2 Galerías de Tiro durante la transición",
          "Produce Arqueros constantemente",
          "Investiga Flechas con Puntas de Fuego y la mejora de Arquero",
          "Añade un Cuartel y entrena algunos Piqueros para protección",
          "Transiciona a Arqueros Largos en la Edad de los Castillos"
        ]
      },
      {
        title: "Boom de Centros Urbanos",
        description: "Aprovecha el descuento en Centros Urbanos para una economía fuerte",
        steps: [
          "Avanza a la Edad de los Castillos con 27-28 aldeanos",
          "Construye 2-3 Centros Urbanos adicionales inmediatamente",
          "Produce aldeanos constantemente de todos los Centros",
          "Establece granjas baratas alrededor de los Centros",
          "Transiciona a la Edad Imperial para Arqueros Largos",
          "Defiende con Torres de Guardia y pequeños grupos de arqueros"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Infantería", "Arqueros enemigos", "Unidades lentas"],
      weakAgainst: ["Caballería", "Escorpiones", "Artillería de asedio"]
    },
    similarCivs: [
      {
        id: "ethiopians",
        name: "Etíopes",
        reason: "Especialistas en arqueros con disparo rápido"
      },
      {
        id: "vietnamese",
        name: "Vietnamitas",
        reason: "Arqueros resistentes con buenas tecnologías"
      },
      {
        id: "mayans",
        name: "Mayas",
        reason: "Arqueros económicos y poderosos"
      }
    ]
  },
  
  berbers: {
    id: "berbers",
    name: "Bereberes",
    
    categories: ["Caballería", "Naval", "Arqueros a Caballo", "Camellos", "Rush", "Unidad Única"],
    description: "Civilización norteafricana conocida por su caballería rápida y económica, junto con una fuerte armada.",
    region: "Africana",
    specialty: "Caballería y Naval",
    image: "/assets/bereberes.webp",
    difficulty: "Intermedio",
    playstyle: "Flexible",
    quickGuide: {
      strengths: "Caballería más rápida y económica, poderosas unidades navales y ventajas en mapas con costa.",
      strategy: "Aprovecha los exploradores económicos en Feudal para raid, y transiciona a caballeros baratos en Castillos para dominar el mapa.",
      tips: "Utiliza Jinetes de Camello contra civilizaciones con caballería fuerte. En mapas de agua, aprovecha tus barcos de ataque rápidos."
    },
    bonuses: [
      "Unidades de caballería cuesta -15% en Feudal, -20% en Castillos",
      "Unidades de caballería se mueven 10% más rápido desde la Edad de los Castillos",
      "Barcos de ataque se mueven 10% más rápido",
      "Aldeanos se mueven 10% más rápido desde la Edad Oscura"
    ],
    uniqueUnits: [
      {
        name: "Jinete Genitoro",
        description: "Caballería ligera con capacidad para lanzar jabalinas",
        strengths: ["Ataque a distancia contra infantería", "Alta movilidad", "Efectivo en grupos"],
        weaknesses: ["Débil contra arqueros", "Bajo ataque a distancia", "Requiere microgestión"]
      },
      {
        name: "Camello Armado",
        description: "Unidad de camello con armadura pesada resistente a flechas",
        strengths: ["Bono contra caballería", "Resistente a proyectiles", "Versátil"],
        weaknesses: ["Vulnerable a infantería", "Producción lenta", "Costoso"]
      }
    ],
    uniqueTechs: [
      {
        name: "Camellos Magrebíes",
        age: "Edad de los Castillos",
        description: "Regeneración de salud para Camellos y Jinetes Genitoros",
        cost: "700 Alimento, 300 Oro"
      },
      {
        name: "Alcazabas",
        age: "Edad Imperial",
        description: "Castillos y torres disparan 25% más rápido",
        cost: "600 Piedra, 500 Oro"
      }
    ],
    teamBonus: "Jinetes Genitoros +2 ataque contra Unidades Anti-Caballería",
    strategies: [
      {
        title: "Rush de Exploradores",
        description: "Aprovecha los exploradores económicos para una fuerte presión en Feudal",
        steps: [
          "Avanza a la Edad Feudal con 20-21 aldeanos",
          "Construye un Establo durante la transición",
          "Produce Exploradores continuamente (son 15% más baratos)",
          "Realiza raids en los recursos enemigos",
          "Transiciona a Caballeros económicos en la Edad de los Castillos",
          "Añade Jinetes Genitoros contra infantería"
        ]
      },
      {
        title: "Estrategia Naval Agresiva",
        description: "En mapas de agua, utiliza tus barcos rápidos para controlar el mar",
        steps: [
          "Prioriza recursos y dock temprano",
          "Construye Galeras en la Edad Feudal",
          "Aprovecha la velocidad adicional para raids y microgestión",
          "Controla recursos clave de pesca",
          "Transiciona a Galeones en la Edad de los Castillos",
          "Apoya con Jinetes Genitoro y Camellos Armados en tierra"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Caballería", "Infantería (con Genitoros)", "Arqueros (con Camellos Armados)"],
      weakAgainst: ["Arqueros en masa", "Infantería con alto ataque", "Artillería"]
    },
    similarCivs: [
      {
        id: "franks",
        name: "Francos",
        reason: "Civilización fuerte en caballería"
      },
      {
        id: "saracens",
        name: "Sarracenos",
        reason: "Civilización de camello y alternativas de contraataque"
      },
      {
        id: "indians",
        name: "Indios",
        reason: "Especialistas en camellos con economía fuerte"
      }
    ]
  },
 
  byzantines: {
    id: "byzantines",
    name: "Bizantinos",
    description: "Civilización defensiva con excelente tecnología y versatilidad, herederos del Imperio Romano Oriental con unidades que contrarrestan efectivamente a cada oponente.",
    region: "Europa Oriental",
    categories: ["Defensivo", "Naval", "Unidad Única", "Caballería", "Boom Económico"],
    specialty: "Defensa y Versatilidad",
    image: "/assets/bizantinos.webp",
    difficulty: "Intermedio",
    playstyle: "Defensivo",
    quickGuide: {
      strengths: "Árbol tecnológico casi completo con acceso a casi todas las mejoras. Edificios más resistentes y unidades de contraataque efectivas.",
      strategy: "Juega defensivamente en las primeras edades mientras desarrollas tu economía. Adapta tu composición de ejército según el oponente.",
      tips: "Aprovecha la unidad Catafracta contra infantería. Utiliza la bonificación de puntos de resistencia en edificios para crear una base sólida."
    },
    bonuses: [
      "Edificios +10% PV en Edad Oscura, +20% en Feudal, +30% en Castillos, +40% en Imperial",
      "Camellos, Escaramuzadores, Piqueros y Lanceros cuestan -25%",
      "Fuego Griego afecta un área mayor",
      "Avanzan a la Edad Imperial cuesta -33%",
      "Tecnologías de ciudad cuestan -50%"
    ],
    uniqueUnits: [
      {
        name: "Catafracta",
        description: "Caballería pesada con armadura resistente a ataques anti-caballería",
        strengths: ["Resistente a ataques anti-caballería", "Fuerte contra infantería", "Alta resistencia"],
        weaknesses: ["Movimiento lento", "Alto costo", "Vulnerable a arqueros"]
      }
    ],
    uniqueTechs: [
      {
        name: "Fuego Griego",
        age: "Edad de los Castillos",
        description: "Barcos de combate +25% ataque",
        cost: "250 Alimento, 300 Oro"
      },
      {
        name: "Logística",
        age: "Edad Imperial",
        description: "Catafractas causan daño en área",
        cost: "800 Alimento, 600 Oro"
      }
    ],
    teamBonus: "Monjes curan 50% más rápido",
    strategies: [
      {
        title: "Defensa Prolongada",
        description: "Aprovecha la resistencia de los edificios y contrarrestaques para desgastar al enemigo",
        steps: [
          "Construye murallas y torres tempranas aprovechando la bonificación de PV",
          "Avanza rápido a la Edad Imperial con el descuento de 33%",
          "Adapta tu composición de unidades según el oponente",
          "Construye una masa de Catafractas contra civilizaciones de infantería",
          "Complementa con Escaramuzadores económicos contra arqueros",
          "Investiga todas las mejoras disponibles para maximizar tu versatilidad"
        ]
      },
      {
        title: "Estrategia Naval Dominante",
        description: "En mapas de agua, domina con barcos de fuego y unidades navales mejoradas",
        steps: [
          "Construye un Dock temprano y asegura recursos de pesca",
          "Produce Galeras y transiciona a Barcos de Demolición",
          "Investiga Fuego Griego en la Edad de los Castillos",
          "Mezcla Galeones y Barcos de Fuego para una flota poderosa",
          "Asegura la tierra con edificios resistentes y murallas",
          "Establece una economía fuerte detrás de tus defensas"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Infantería", "Unidades anti-caballería", "Estrategias de asedio"],
      weakAgainst: ["Arqueros", "Caballería rápida", "Conversión de monjes"]
    },
    similarCivs: [
      {
        id: "teutons",
        name: "Teutones",
        reason: "Enfoque defensivo y unidades resistentes"
      },
      {
        id: "slavs",
        name: "Eslavos",
        reason: "Buena infantería y contraataques"
      },
      {
        id: "turks",
        name: "Turcos",
        reason: "Conexión histórica y buena caballería"
      }
    ]
  },
  
  chinese: {
    id: "chinese",
    name: "Chinos",
    categories: ["Arqueros", "Boom Económico", "Unidad Única", "Rush"],
    description: "Una civilización versátil y equilibrada con fuerte economía inicial y tecnologías adicionales únicas que representan su histórica innovación tecnológica.",
    region: "Asia Oriental",
    specialty: "Versatilidad y Tecnología",
    image: "/assets/chinos.webp",
    difficulty: "Difícil",
    playstyle: "Económico",
    quickGuide: {
      strengths: "Empiezan con recursos extra y aldeanos adicionales. Tecnologías más baratas y acceso a casi todas las mejoras del juego.",
      strategy: "Maximiza tu ventaja económica temprana mediante microgestión eficiente de aldeanos. Utiliza una amplia variedad de unidades según la situación.",
      tips: "La fase inicial es crucial - practica la construcción temprana con los aldeanos adicionales. Invierte en todas las tecnologías económicas aprovechando su descuento."
    },
    bonuses: [
      "Comienzan con +3 aldeanos, pero -150 alimento y -50 madera",
      "Tecnologías cuestan -10% en Edad Feudal, -15% en Castillos, -20% en Imperial",
      "Centros Urbanos +5 línea de visión y soportan +5 población",
      "Granjas +45 alimento",
      "Revelan posiciones de jabalíes al inicio"
    ],
    uniqueUnits: [
      {
        name: "Chu Ko Nu",
        description: "Ballestero que dispara múltiples flechas por ataque",
        strengths: ["Dispara varias flechas por ataque", "Excelente daño en área", "Efectivo contra infantería"],
        weaknesses: ["Corto alcance", "Baja precisión", "Vulnerable a caballería y escorpiones"]
      }
    ],
    uniqueTechs: [
      {
        name: "Gran Muralla",
        age: "Edad de los Castillos",
        description: "Murallas y torres +30% PV",
        cost: "400 Madera, 200 Piedra"
      },
      {
        name: "Cohetes",
        age: "Edad Imperial",
        description: "Chu Ko Nu +2 ataque, +2 alcance",
        cost: "700 Alimento, 400 Oro"
      }
    ],
    teamBonus: "Granjas +45 alimento",
    strategies: [
      {
        title: "Rush Feudal Agresivo",
        description: "Aprovecha tus aldeanos adicionales para una presión temprana",
        steps: [
          "Organiza rápidamente tus aldeanos iniciales para evitar tiempo de inactividad",
          "Llega a la Edad Feudal con 18-20 aldeanos",
          "Construye 2 Galerías de Tiro y produce arqueros",
          "Investiga las mejoras de arqueros aprovechando el descuento tecnológico",
          "Presiona los recursos enemigos con arqueros mientras expandes tu economía",
          "Transiciona a Chu Ko Nu en la Edad de los Castillos"
        ]
      },
      {
        title: "Boom Económico Imperial",
        description: "Maximiza tu ventaja económica para dominar en la Edad Imperial",
        steps: [
          "Avanza rápido a la Edad de los Castillos con una economía equilibrada",
          "Construye centros urbanos adicionales (aprovechando el bono de población)",
          "Invierte en todas las mejoras económicas con descuento",
          "Defiende con murallas y torres mejoradas con Gran Muralla",
          "Avanza a Imperial y desarrolla una composición equilibrada de unidades",
          "Produce Chu Ko Nu y caballería para un ejército versátil"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Infantería", "Unidades lentas", "Ejércitos agrupados"],
      weakAgainst: ["Caballería rápida", "Escorpiones", "Mangoneles"]
    },
    similarCivs: [
      {
        id: "saracens",
        name: "Sarracenos",
        reason: "Versatilidad y adaptabilidad"
      },
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Amplio árbol tecnológico y versatilidad"
      },
      {
        id: "koreans",
        name: "Coreanos",
        reason: "Enfoque en tecnología y arqueros"
      }
    ]
  },
  
  goths: {
    id: "goths",
    name: "Godos",
    categories: ["Infantería", "Rush", "Unidad Única"],
    description: "Civilización especializada en infantería masiva con énfasis en producción rápida y económica de unidades, representando a los guerreros bárbaros que derrotaron al Imperio Romano.",
    region: "Europa Oriental",
    specialty: "Infantería y Población",
    image: "/assets/godos.webp",
    difficulty: "Fácil",
    playstyle: "Agresivo",
    quickGuide: {
      strengths: "Infantería extremadamente económica y rápida de producir. Bono de población y ventaja contra edificios con Huscarle Godo.",
      strategy: "Sobrevive al principio y luego abruma al enemigo con oleadas masivas de infantería barata en la Edad Imperial.",
      tips: "Utiliza la caza eficientemente con tu bonificación. No temas perder unidades, puedes reemplazarlas rápidamente. Evita murallas enemigas usando Huscarles."
    },
    bonuses: [
      "Infantería cuesta -20% en Edad Feudal, -25% en Castillos, -30% en Imperial",
      "Infantería +1 ataque contra edificios por edad (desde Feudal)",
      "+10 población en Imperial",
      "Cazadores trabajan +15% más rápido",
      "Infantería +10% velocidad desde la Edad Feudal"
    ],
    uniqueUnits: [
      {
        name: "Huscarle",
        description: "Infantería rápida que ignora el daño de flechas de edificios",
        strengths: ["Resistente a flechas de edificios", "Rápido para infantería", "Excelente contra arqueros"],
        weaknesses: ["Vulnerable a otra infantería", "Débil contra caballería", "Sin armadura"]
      }
    ],
    uniqueTechs: [
      {
        name: "Carro de Bueyes",
        age: "Edad de los Castillos",
        description: "Infantería +15% velocidad de movimiento",
        cost: "500 Alimento, 250 Oro"
      },
      {
        name: "Anarquía",
        age: "Edad Imperial",
        description: "Permite crear Huscarles en Cuarteles",
        cost: "450 Alimento, 250 Oro"
      }
    ],
    teamBonus: "Cuarteles trabajan 20% más rápido",
    strategies: [
      {
        title: "Spam de Infantería Imperial",
        description: "La estrategia clásica de los Godos: abrumar con infantería masiva en Imperial",
        steps: [
          "Desarrolla una economía sólida usando la bonificación de caza",
          "Avanza constantemente en las edades manteniendo la producción de aldeanos",
          "Construye 5-6 cuarteles en la Edad de los Castillos",
          "Investiga Anarquía al llegar a Imperial",
          "Produce continuamente Huscarles y Campeones desde todos los cuarteles",
          "Abruma al enemigo con oleadas constantes de infantería barata"
        ]
      },
      {
        title: "Rush Feudal de Hombres de Armas",
        description: "Aprovecha la infantería económica para presionar desde la Edad Feudal",
        steps: [
          "Avanza a Feudal con 21-22 aldeanos",
          "Construye un Cuartel durante la transición",
          "Entrena Hombres de Armas inmediatamente al llegar a Feudal",
          "Aprovecha el descuento de 20% para producir más unidades",
          "Presiona los recursos del enemigo con tus unidades",
          "Transiciona a infantería más fuerte en la Edad de los Castillos"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Arqueros", "Edificios defensivos", "Unidades caras"],
      weakAgainst: ["Caballería pesada", "Unidades de asedio", "Infantería con bonos"]
    },
    similarCivs: [
      {
        id: "aztecs",
        name: "Aztecas",
        reason: "Enfoque en infantería poderosa"
      },
      {
        id: "japanese",
        name: "Japoneses",
        reason: "Infantería con bono de ataque"
      },
      {
        id: "vikings",
        name: "Vikingos",
        reason: "Economía fuerte e infantería resistente"
      }
    ]
  },
  
  mayans: {
    id: "mayans",
    name: "Mayas",
    categories: ["Arqueros", "Meso", "Boom Económico", "Unidad Única"],
    description: "Civilización mesoamericana enfocada en arqueros económicos y efectivos, con bonificaciones en recursos y una fuerte economía desde el inicio del juego.",
    region: "Mesoamericana",
    specialty: "Arqueros y Economía",
    image: "/assets/mayas.webp",
    difficulty: "Intermedio",
    playstyle: "Defensivo-Ofensivo",
    quickGuide: {
      strengths: "Arqueros extremadamente económicos, recursos iniciales adicionales y edificios más duraderos. Economía eficiente.",
      strategy: "Aprovecha la bonificación de recursos iniciales para un desarrollo rápido. Utiliza arqueros económicos desde Feudal para presionar.",
      tips: "Prioriza tus arqueros y construye masa crítica. Utiliza murallas y Arqueros de Plumas para defender contra caballería."
    },
    bonuses: [
      "Recursos duran 20% más (excepto alimento de granjas)",
      "Arqueros cuestan -10% en Feudal, -20% en Castillos, -30% en Imperial",
      "Empiezan con +1 aldeano y +50 oro",
      "Edificios +5% PV en Feudal, +10% en Castillos, +20% en Imperial"
    ],
    uniqueUnits: [
      {
        name: "Arquero de Plumas",
        description: "Arquero rápido y ágil con alta velocidad de disparo",
        strengths: ["Alta velocidad de ataque", "Movimiento rápido", "Económico con bonificación maya"],
        weaknesses: ["Bajo ataque base", "Menos alcance que arqueros élite", "Vulnerable a escorpiones"]
      }
    ],
    uniqueTechs: [
      {
        name: "Vista de Lince",
        age: "Edad de los Castillos",
        description: "Arqueros +2 de línea de visión",
        cost: "250 Alimento, 300 Oro"
      },
      {
        name: "El Dorado",
        age: "Edad Imperial",
        description: "Guerreros Águila +40 PV",
        cost: "750 Alimento, 450 Oro"
      }
    ],
    teamBonus: "Murallas cuestan -50%",
    strategies: [
      {
        title: "Rush de Arqueros Feudal",
        description: "Aprovecha los arqueros económicos para una presión temprana efectiva",
        steps: [
          "Avanza a Feudal con 22 aldeanos (recuerda que empiezas con uno extra)",
          "Construye 2-3 Galerías de Tiro durante la transición",
          "Produce arqueros constantemente aprovechando el descuento de 10%",
          "Investiga las mejoras de arqueros para maximizar efectividad",
          "Añade un Cuartel para protección contra infantería",
          "Transiciona a Arqueros de Plumas en la Edad de los Castillos"
        ]
      },
      {
        title: "Águilas y Arqueros de Plumas",
        description: "Combinación poderosa de unidades únicas mayas",
        steps: [
          "Desarrolla una economía sólida con recursos que duran más tiempo",
          "Avanza a la Edad de los Castillos y construye un Castillo",
          "Produce Arqueros de Plumas desde el Castillo",
          "Añade un Cuartel y entrena Guerreros Águila",
          "Investiga El Dorado en la Edad Imperial para Águilas poderosos",
          "Combina ambas unidades: Águilas contra arqueros y Plumas contra infantería"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Infantería", "Unidades lentas", "Monjes"],
      weakAgainst: ["Caballería en masa", "Escorpiones", "Mangoneles"]
    },
    similarCivs: [
      {
        id: "aztecs",
        name: "Aztecas",
        reason: "Civilización mesoamericana con Eagles"
      },
      {
        id: "britons",
        name: "Britones",
        reason: "Especialistas en arqueros"
      },
      {
        id: "ethiopians",
        name: "Etíopes",
        reason: "Fuerte enfoque en arqueros efectivos"
      }
    ]
  },
  
  mongols: {
    id: "mongols",
    categories: ["Caballería", "Arqueros a Caballo", "Rush", "Asedio", "Unidad Única"],
    name: "Mongoles",
    description: "Civilización de las estepas especializadas en unidades montadas y movilidad, con cazadores eficientes y un poderoso ejército de arqueros a caballo.",
    region: "Asia Central",
    specialty: "Caballería y Caza",
    image: "/assets/mongoles.webp",
    difficulty: "Intermedio",
    playstyle: "Agresivo",
    quickGuide: {
      strengths: "Cazadores súper eficientes, arqueros a caballo extremadamente rápidos y mangonel con mayor alcance.",
      strategy: "Aprovecha la eficiencia de caza para un desarrollo económico rápido y utiliza la movilidad superior de tus unidades para raids constantes.",
      tips: "Prioriza la caza sobre las granjas. Mantén tus unidades en movimiento con tácticas de 'hit and run'. Nunca te involucres en batallas estáticas."
    },
    bonuses: [
      "Cazadores trabajan 50% más rápido",
      "Arqueros a Caballo +30% PV",
      "Caballería Ligera +30% velocidad de ataque",
      "Mangoneles +1 alcance por edad (desde la Edad de los Castillos)"
    ],
    uniqueUnits: [
      {
        name: "Mangudai",
        description: "Arquero a caballo especializado contra unidades de asedio",
        strengths: ["Bono contra unidades de asedio", "Alta movilidad", "Excelente para hit and run"],
        weaknesses: ["Costoso", "Vulnerable a escaramuzadores", "Débil contra camellos"]
      }
    ],
    uniqueTechs: [
      {
        name: "Nómadas",
        age: "Edad de los Castillos",
        description: "Casas soportan +5 población",
        cost: "300 Madera, 200 Oro"
      },
      {
        name: "Entrenamiento de Asedio",
        age: "Edad Imperial",
        description: "Unidades de asedio disparan 20% más rápido",
        cost: "800 Alimento, 500 Oro"
      }
    ],
    teamBonus: "Explorador +2 línea de visión",
    strategies: [
      {
        title: "Rush de Exploradores",
        description: "Aprovecha la caza eficiente para una Edad Feudal rápida y presión con exploradores",
        steps: [
          "Prioriza la caza utilizando tu bonificación de +50% velocidad",
          "Avanza a la Edad Feudal con 19-20 aldeanos",
          "Construye un Establo durante la transición",
          "Produce Exploradores continuamente y realiza raids",
          "Expande tu economía detrás de la presión",
          "Transiciona a Arqueros a Caballo en la Edad de los Castillos"
        ]
      },
      {
        title: "Mangudai y Asedio",
        description: "Combinación letal de Mangudai con unidades de asedio mejoradas",
        steps: [
          "Desarrolla una economía fuerte con caza eficiente",
          "Avanza a la Edad de los Castillos y construye un Castillo",
          "Produce Mangudai constantemente",
          "Añade un Taller de Asedio y produce Mangoneles con alcance extendido",
          "Investiga Entrenamiento de Asedio en la Edad Imperial",
          "Utiliza Mangudai para proteger tus unidades de asedio y eliminar las del enemigo"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Unidades de asedio", "Unidades lentas", "Arqueros a pie"],
      weakAgainst: ["Escaramuzadores", "Camellos", "Piqueros en formación"]
    },
    similarCivs: [
      {
        id: "huns",
        name: "Hunos",
        reason: "Enfoque en caballería y arqueros a caballo"
      },
      {
        id: "magyars",
        name: "Magiares",
        reason: "Caballería fuerte y cazadores eficientes"
      },
      {
        id: "tatars",
        name: "Tártaros",
        reason: "Arqueros a caballo y unidades de las estepas"
      }
    ]
  },
  
  persians: {
    id: "persians",
    name: "Persas",
    categories: ["Caballería", "Boom Económico", "Unidad Única", "Rush"],
    description: "Poderosa civilización con enfoque en caballería y economía, representando al antiguo Imperio Persa con una combinación de poder militar y prosperidad.",
    region: "Medio Oriente",
    specialty: "Caballería y Economía",
    image: "/assets/persas.webp",
    difficulty: "Fácil",
    playstyle: "Económico-Agresivo",
    quickGuide: {
      strengths: "Centro Urbano y Dock con más PV y trabajo más rápido. Caballería con bono contra arqueros. Elefantes de Guerra poderosos.",
      strategy: "Desarrolla una economía sólida aprovechando el bono de Centro Urbano y transiciona a caballería pesada o Elefantes de Guerra.",
      tips: "Utiliza tus Caballeros para contrarrestar arqueros. En partidas largas, los Elefantes de Guerra pueden ser imparables si están bien apoyados."
    },
    bonuses: [
      "Empieza con +50 alimento y +50 madera",
      "Centro Urbano y Dock tienen +100% PV y trabajan +10% en Feudal, +15% en Castillos, +20% en Imperial",
      "Caballería +2 ataque contra arqueros",
      "Tecnologías de Centro Urbano gratis"
    ],
    uniqueUnits: [
      {
        name: "Elefante de Guerra",
        description: "Unidad de caballería pesada extremadamente poderosa pero lenta",
        strengths: ["Enorme cantidad de PV", "Alto daño en área", "Casi imparable en masa"],
        weaknesses: ["Muy lento", "Extremadamente costoso", "Vulnerable a monjes y piqueros"]
      },
      {
        name: "Arquero a Camello",
        description: "Unidad de arquero montado en camello con bonificación contra edificios",
        strengths: ["Bonus contra edificios", "Buena movilidad", "Buen alcance"],
        weaknesses: ["Bajo daño por proyectil", "Costoso", "Débil contra escaramuzadores"]
      }
    ],
    uniqueTechs: [
      {
        name: "Camellos Botines",
        age: "Edad de los Castillos",
        description: "Caballería genera oro al matar unidades",
        cost: "400 Alimento, 300 Oro"
      },
      {
        name: "Tambores de Guerra",
        age: "Edad Imperial",
        description: "Centro Urbano crea Caballería Pesada",
        cost: "850 Madera, 500 Oro"
      }
    ],
    teamBonus: "Caballeros +2 ataque contra arqueros",
    strategies: [
      {
        title: "Douching Persa",
        description: "Estrategia agresiva de construir un Centro Urbano cerca del enemigo",
        steps: [
          "Recolecta suficientes recursos para un segundo Centro Urbano",
          "Envía varios aldeanos cerca de la base enemiga",
          "Construye un Centro Urbano fortificado (con +100% PV) cerca de sus recursos",
          "Produce aldeanos desde ambos centros",
          "Presiona sus recursos mientras desarrollas tu economía",
          "Transiciona a caballería para defender tu Centro avanzado"
        ]
      },
      {
        title: "Boom a Elefantes de Guerra",
        description: "Desarrolla una economía poderosa para crear Elefantes de Guerra en masa",
        steps: [
          "Aprovecha el trabajo rápido del Centro Urbano para una economía fuerte",
          "Añade más Centros Urbanos en la Edad de los Castillos",
          "Asegura oro y alimento abundantes",
          "Construye un Castillo y comienza a producir Elefantes de Guerra",
          "Investiga todas las mejoras de caballería",
          "Complementa con unidades anti-piquero como Mangoneles o Arqueros a Camello"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Arqueros", "Edificios", "Caballería (con Elefantes)"],
      weakAgainst: ["Monjes", "Piqueros", "Unidades con bonus contra caballería"]
    },
    similarCivs: [
      {
        id: "franks",
        name: "Francos",
        reason: "Fuerte caballería y bonificaciones económicas"
      },
      {
        id: "khmer",
        name: "Jemeres",
        reason: "Acceso a Elefantes y economía fuerte"
      },
      {
        id: "lithuanians",
        name: "Lituanos",
        reason: "Caballería poderosa y económica fuerte"
      }
    ]
  },
  
  saracens: {
    id: "saracens",
    name: "Sarracenos",
    categories: ["Camellos", "Arqueros", "Naval", "Boom Económico", "Unidad Única"],
    description: "Civilización versátil del Medio Oriente con excelentes unidades de camello, arqueros y economía basada en el mercado, representando a los califatos medievales árabes.",
    region: "Medio Oriente",
    specialty: "Camellos y Mercado",
    image: "/assets/sarracenos.webp",
    difficulty: "Difícil",
    playstyle: "Adaptable",
    quickGuide: {
      strengths: "Mercado extremadamente eficiente, arqueros con bonus contra edificios y excelentes unidades de camello con velocidad.",
      strategy: "Aprovecha el mercado para una economía flexible y adapta tus unidades según el oponente. Utiliza Mamelucos contra caballería y arqueros contra edificios.",
      tips: "Mantén un ojo en las proporciones de recursos y usa el mercado eficientemente. Tus arqueros pueden derribar edificios sorprendentemente rápido."
    },
    bonuses: [
      "Mercado cuesta -100 madera; tasas de comercio solo 5%",
      "Mercader +10 capacidad de transporte",
      "Transporte +5 capacidad de transporte",
      "Galeras +25% velocidad de ataque",
      "Arqueros +1 ataque contra edificios por edad (desde Feudal)",
      "Costado de unidades de camello +10% velocidad"
    ],
    uniqueUnits: [
      {
        name: "Mameluco",
        description: "Unidad montada en camello que lanza proyectiles contra caballería",
        strengths: ["Demoledor contra caballería", "Ataque a distancia", "Movilidad elevada"],
        weaknesses: ["Alto costo", "Baja efectividad contra infantería", "Vulnerable a arqueros"]
      }
    ],
    uniqueTechs: [
      {
        name: "Mercenarios Camelleros",
        age: "Edad de los Castillos",
        description: "Camellos regeneran salud",
        cost: "300 Alimento, 450 Oro"
      },
      {
        name: "Fanatismo",
        age: "Edad Imperial",
        description: "Mamelucos +20 PV",
        cost: "750 Alimento, 350 Oro"
      }
    ],
    teamBonus: "Arqueros a pie +1 ataque contra edificios",
    strategies: [
      {
        title: "Flush de Mercado",
        description: "Aprovecha el mercado barato para una ventaja económica temprana",
        steps: [
          "Avanza rápido a la Edad Feudal",
          "Construye un Mercado inmediatamente (cuesta -100 madera)",
          "Utiliza el comercio eficiente para equilibrar recursos",
          "Desarrolla una economía equilibrada mientras presionas con arqueros",
          "Aprovecha el bonus contra edificios de los arqueros",
          "Transiciona a Camellos o Caballeros en la Edad de los Castillos"
        ]
      },
      {
        title: "Contraataque con Mamelucos",
        description: "Utiliza Mamelucos para contrarrestar civilizaciones de caballería",
        steps: [
          "Explora al enemigo y confirma su estrategia de caballería",
          "Avanza a la Edad de los Castillos y construye un Castillo",
          "Produce Mamelucos contra su caballería",
          "Investiga Mercenarios Camelleros para regeneración de salud",
          "Refuerza con arqueros para proteger a tus Mamelucos de infantería",
          "En Imperial, investiga Fanatismo para Mamelucos más durables"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Caballería", "Edificios", "Barcos enemigos"],
      weakAgainst: ["Arqueros", "Infantería con alto ataque", "Unidades anti-camello"]
    },
    similarCivs: [
      {
        id: "berbers",
        name: "Bereberes",
        reason: "Unidades de camello efectivas y economía flexible"
      },
      {
        id: "indians",
        name: "Indios",
        reason: "Especialistas en camellos y economía"
      },
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Unidades contra-unidades efectivas"
      }
    ]
  },
  
  teutons: {
    id: "teutons",
    name: "Teutones",
    categories: ["Infantería", "Caballería", "Defensivo", "Unidad Única", "Boom Económico"],    description: "Civilización de infantería y caballería pesada con excelentes defensas, representando a las órdenes militares y pueblos germánicos medievales.",
    region: "Europa Central",
    specialty: "Infantería Pesada y Defensa",
    image: "/assets/teutones.webp",
    
    difficulty: "Intermedio",
    playstyle: "Defensivo",
    quickGuide: {
      strengths: "Unidades de infantería y caballería con armadura excepcional. Torres con mayor alcance y granjas más eficientes.",
      strategy: "Juega defensivamente en las primeras edades mientras desarrollas una economía sólida. Avanza con unidades pesadas bien armadas para aplastar al enemigo.",
      tips: "Utiliza Caballeros Teutones para combate cuerpo a cuerpo imbatible. Defiende con torres de largo alcance. Cuidado con la baja movilidad de tus unidades."
    },
    bonuses: [
      "Granjas cuestan -40% madera",
      "Monjes con doble curación a corta distancia",
      "Torres +1 alcance por edad (desde Feudal)",
      "Unidades resistentes a conversión",
      "Infantería y caballería +1 armadura en Castillos, +1 en Imperial",
      "Centros Urbanos pueden disparar flechas sin necesidad de Guardia de la Ciudad"
    ],
    uniqueUnits: [
      {
        name: "Caballero Teutónico",
        description: "Infantería pesada con armadura extrema",
        strengths: ["Armadura excepcional", "Alto daño", "Casi invencible en combate cuerpo a cuerpo"],
        weaknesses: ["Movimiento muy lento", "Vulnerable a arqueros", "Costoso en oro"]
      }
    ],
    uniqueTechs: [
      {
        name: "Crenalaciones",
        age: "Edad de los Castillos",
        description: "Castillos y torres +3 alcance",
        cost: "350 Madera, 350 Piedra"
      },
      {
        name: "Primer Cerco",
        age: "Edad Imperial",
        description: "Torres y Castillos pueden disparar simultaneamente 5 flechas adicionales cuando está guarnecido",
        cost: "850 Alimento, 400 Oro"
      }
    ],
    teamBonus: "Unidades más resistentes a conversión",
    strategies: [
      {
        title: "Defensa y Torre",
        description: "Aprovecha el alcance extendido de torres para una defensa sólida",
        steps: [
          "Desarrolla una economía sólida con granjas económicas",
          "Construye torres en puntos estratégicos aprovechando el alcance adicional",
          "Investiga Crenalaciones para un alcance devastador",
          "Protege recursos clave con torres y centros urbanos armados",
          "Expande tu economía detrás de tus defensas",
          "En la fase tardía, ataca con Caballeros Teutónicos y unidades de asedio"
        ]
      },
      {
        title: "Caballeros con Armadura",
        description: "Utiliza la bonificación de armadura para una caballería ultra resistente",
        steps: [
          "Avanza a la Edad de los Castillos con una economía sólida",
          "Produce Caballeros que se beneficien de la armadura adicional",
          "Investiga todas las tecnologías de armadura disponibles",
          "Añade Monjes para curación mejorada a corta distancia",
          "Complementa con unidades anti-arquero como Escorpiones",
          "En Imperial, añade Caballeros Teutónicos para la infantería enemiga"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Infantería", "Caballería", "Unidades de asedio"],
      weakAgainst: ["Arqueros", "Unidades rápidas", "Armas de asedio a distancia"]
    },
    similarCivs: [
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Enfoque defensivo y unidades resistentes"
      },
      {
        id: "franks",
        name: "Francos",
        reason: "Caballería fuerte y economía agrícola"
      },
      {
        id: "celts",
        name: "Celtas",
        reason: "Infantería fuerte y unidades de asedio"
      }
    ]
  },
  
  turks: {
    id: "turks",
    categories: ["Caballería", "Rush", "Unidad Única", "Fast Castle"],    name: "Turcos",
    description: "Civilización con pólvora avanzada y caballería ligera, representando al Imperio Otomano con unidades de pólvora superiores y minería eficiente.",
    region: "Medio Oriente",
    specialty: "Unidades de Pólvora y Caballería Ligera",
    image: "/assets/turcos.webp",
    difficulty: "Intermedio",
    playstyle: "Agresivo",
    quickGuide: {
      strengths: "Unidades de pólvora superiores, minería gratuita y rápida, y caballería ligera mejorada. Tecnologías de química e ingeniería gratuitas.",
      strategy: "Utiliza Exploradores y Caballería Ligera para raids tempranos, luego transiciona a unidades de pólvora avanzadas en la Edad Imperial.",
      tips: "Aprovecha tu minería eficiente para obtener oro rápidamente. Tus Jenízaros son letales contra infantería y tus Bombardas son las mejores del juego."
    },
    bonuses: [
      "Unidades de pólvora +25% PV",
      "Minería de oro +20% más rápida y mejoras gratis",
      "Mejora de Caballería Ligera y Hussar gratis",
      "Química e Ingeniería gratis",
      "Cañones de bombardeo +2 alcance"
    ],
    uniqueUnits: [
      {
        name: "Jenízaro",
        description: "Arcabucero de élite con alto poder de fuego y precisión",
        strengths: ["Alto daño", "Efectivo contra infantería", "PV mejorado como unidad de pólvora"],
        weaknesses: ["Costoso", "Creación lenta", "Débil contra caballería rápida"]
      }
    ],
    uniqueTechs: [
      {
        name: "Sipahi",
        age: "Edad de los Castillos",
        description: "Caballería ligera +20 PV",
        cost: "350 Alimento, 150 Oro"
      },
      {
        name: "Artillería",
        age: "Edad Imperial",
        description: "Unidades de pólvora disparan 25% más rápido",
        cost: "600 Alimento, 750 Oro"
      }
    ],
    teamBonus: "Unidades de pólvora se crean 25% más rápido",
    strategies: [
      {
        title: "Rush de Caballería Ligera",
        description: "Aprovecha las mejoras gratuitas para una caballería ligera superior",
        steps: [
          "Avanza a la Edad Feudal con 19-20 aldeanos",
          "Construye un Establo y produce Exploradores",
          "Aprovecha la minería de oro más rápida para mantener la producción",
          "En la Edad de los Castillos, actualiza a Caballería Ligera gratuitamente",
          "Investiga Sipahi para aumentar los PV de la Caballería Ligera",
          "Realiza raids constantes y controla el mapa"
        ]
      },
      {
        title: "Unidades de Pólvora Imperial",
        description: "Domina el campo de batalla con unidades de pólvora superiores",
        steps: [
          "Desarrolla una economía sólida con énfasis en minería de oro",
          "Avanza a la Edad Imperial rápidamente",
          "Aprovecha Química gratuita para unidades de pólvora inmediatas",
          "Produce Jenízaros desde Castillos",
          "Añade Cañones de Mano y Cañones de Bombardeo con alcance extendido",
          "Investiga Artillería para aumentar la velocidad de disparo"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Infantería", "Unidades lentas", "Edificios"],
      weakAgainst: ["Caballería rápida", "Escorpiones", "Arqueros en masa"]
    },
    similarCivs: [
      {
        id: "spanish",
        name: "Españoles",
        reason: "Unidades de pólvora y bonificaciones"
      },
      {
        id: "portuguese",
        name: "Portugueses",
        reason: "Tecnología de pólvora avanzada"
      },
      {
        id: "saracens",
        name: "Sarracenos",
        reason: "Conexión histórica y caballería"
      }
    ]
  },
  
  vikings: {
    id: "vikings",
    name: "Vikingos",
    categories: ["Naval", "Infantería", "Boom Económico", "Unidad Única"],
    description: "Civilización naval y de infantería con increíble economía, representando a los guerreros nórdicos famosos por sus incursiones marítimas y resistencia.",
    region: "Europa del Norte",
    specialty: "Naval e Infantería",
    image: "/assets/vikingos.webp",
    difficulty: "Fácil",
    playstyle: "Económico",
    quickGuide: {
      strengths: "Economía excepcional con bonificaciones de inicio. Infantería y barcos más baratos y fuertes. Berzerk que regenera vida.",
      strategy: "Aprovecha tu ventaja económica para avanzar rápidamente. Domina el agua en mapas navales y usa infantería económica en tierra.",
      tips: "Prioriza las mejoras económicas tempranas. En mapas de agua, asegura el control marítimo con barcos económicos. En tierra, el Berzerk es excelente para sitios prolongados."
    },
    bonuses: [
      "Barcos cuestan -15% en Feudal, -15% en Castillos, -20% en Imperial",
      "Ruedas Hidráulicas y Arco de Sierra gratis",
      "Infantería +10% PV en Feudal, +15% en Castillos, +20% en Imperial",
      "Dock +10% PV",
      "Inicias con +3 Aldeanos pero sin alimento inicial"
    ],
    uniqueUnits: [
      {
        name: "Berzerk",
        description: "Unidad de infantería que regenera vida",
        strengths: ["Regeneración de vida", "Alta resistencia", "Efectivo en batallas prolongadas"],
        weaknesses: ["Costoso", "Sin armadura de arquero", "Débil contra caballería y arqueros"]
      },
      {
        name: "Barco Dragón",
        description: "Barco de guerra vikingo rápido y potente",
        strengths: ["Alta velocidad", "Fuerte ataque", "Económico con bonificación"],
        weaknesses: ["Menor alcance que galeras", "Vulnerable a barcos de fuego", "Débil contra defensas costeras"]
      }
    ],
    uniqueTechs: [
      {
        name: "Carrera de Boga",
        age: "Edad de los Castillos",
        description: "Barcos se mueven 15% más rápido",
        cost: "450 Alimento, 250 Oro"
      },
      {
        name: "Berzerks",
        age: "Edad Imperial",
        description: "Berzerks regeneran más rápido (1 PV cada 3 segundos)",
        cost: "850 Alimento, 400 Oro"
      }
    ],
    teamBonus: "Muelles +10% línea de visión",
    strategies: [
      {
        title: "Boom Económico",
        description: "Aprovecha las bonificaciones económicas para un desarrollo explosivo",
        steps: [
          "Utiliza los 3 aldeanos adicionales iniciales para un inicio rápido",
          "Prioriza la recolección de alimento y madera balanceada",
          "Avanza a la Edad de los Castillos rápidamente",
          "Construye 2-3 Centros Urbanos adicionales",
          "Aprovecha las mejoras económicas gratuitas",
          "Transiciona a una economía de 3 recursos y un ejército fuerte"
        ]
      },
      {
        title: "Dominación Naval",
        description: "En mapas de agua, aprovecha los barcos económicos y mejorados",
        steps: [
          "Construye un Dock temprano y asegura recursos de pesca",
          "Produce barcos de guerra aprovechando el descuento",
          "Investiga Carrera de Boga para barcos más rápidos",
          "Controla recursos marinos y corta el acceso naval enemigo",
          "Produce Barcos Dragón en la Edad de los Castillos",
          "Realiza desembarcos con infantería resistente en las costas enemigas"
        ]
      },
      {
        title: "Infantería Económica",
        description: "Utiliza infantería con más PV y económica para presionar",
        steps: [
          "Avanza a la Edad Feudal con una economía sólida",
          "Produce Hombres de Armas que se benefician del bono de PV",
          "Investiga mejoras de infantería para maximizar efectividad",
          "Añade Piqueros económicos contra caballería",
          "En Castillos, produce Berzerks para batallas prolongadas",
          "Complementa con Onagros o Escorpiones contra arqueros"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Unidades navales", "Infantería", "Estrategias de desgaste"],
      weakAgainst: ["Caballería pesada", "Arqueros en masa", "Unidades de asedio a distancia"]
    },
    similarCivs: [
      {
        id: "celts",
        name: "Celtas",
        reason: "Fuerte infantería y economía similar"
      },
      {
        id: "japanese",
        name: "Japoneses",
        reason: "Infantería fuerte y bonificaciones navales"
      },
      {
        id: "goths",
        name: "Godos",
        reason: "Especialistas en infantería económica"
      }
    ]
  },
  
  bulgarian: {
    id: "bulgarian",
    name: "Búlgaros",
    categories: ["Infantería", "Caballería", "Rush", "Unidad Única"],
    description: "Civilización de Europa del Este con poderosa infantería y caballería, representando al Imperio Búlgaro medieval con mejoras de herrería instantáneas.",
    region: "Europa Oriental",
    specialty: "Infantería y Caballería",
    image: "/assets/bulgaros.webp",
    difficulty: "Intermedio",
    playstyle: "Agresivo",
    quickGuide: {
      strengths: "Mejoras de herrería instantáneas, infantería única con alta resistencia anti-arquero, y milicia más barata con rápida producción.",
      strategy: "Avanza agresivamente con caballería e infantería aprovechando las mejoras instantáneas de herrería para ventajas rápidas de combate.",
      tips: "Utiliza los Konnik como unidades versátiles que continúan luchando después de ser derrotados. Aprovecha las mejoras de herrería instantáneas para timing attacks."
    },
    bonuses: [
      "Mejoras de herrería cuestan -50% alimento y son instantáneas",
      "Milicia, Hombres de Armas y unidades relacionadas cuestan -50% alimento",
      "Milicia, Hombres de Armas y unidades relacionadas se crean 50% más rápido",
      "Centurión aumenta la velocidad de creación del establo en 80%",
      "Aldeanos reciben +3 ataque contra jabalíes"
    ],
    uniqueUnits: [
      {
        name: "Konnik",
        description: "Unidad de caballería que se convierte en infantería cuando es derribada",
        strengths: ["Segunda vida como unidad de infantería", "Versátil", "Efectivo contra varias unidades"],
        weaknesses: ["Costoso", "Vulnerable a piqueros y camellos", "Segunda forma es más débil"]
      }
    ],
    uniqueTechs: [
      {
        name: "Estribos",
        age: "Edad de los Castillos",
        description: "Konnik a caballo +3 ataque, Konnik desmontado +5 ataque",
        cost: "200 Alimento, 400 Oro"
      },
      {
        name: "Bagains",
        age: "Edad Imperial",
        description: "Milicia y unidades derivadas +5 armadura contra ataques de melee",
        cost: "900 Alimento, 450 Oro"
      }
    ],
    teamBonus: "Herrerías trabajan 80% más rápido",
    strategies: [
      {
        title: "Rush de Men-at-Arms",
        description: "Aprovecha la infantería económica y rápida para presión temprana",
        steps: [
          "Avanza a la Edad Feudal rápidamente",
          "Construye un Cuartel durante la transición",
          "Produce Hombres de Armas inmediatamente (50% más baratos en alimento)",
          "Investiga mejoras de herrería instantáneamente para ventaja de combate",
          "Presiona los recursos enemigos mientras expandes tu economía",
          "Transiciona a Caballeros o Konnik en la Edad de los Castillos"
        ]
      },
      {
        title: "Konnik y Bagains",
        description: "Combina las unidades únicas con infantería fuertemente armada",
        steps: [
          "Desarrolla una economía sólida y avanza a la Edad de los Castillos",
          "Construye un Castillo y produce Konniks",
          "Investiga Estribos para aumentar su ataque",
          "Añade cuarteles para producir infantería",
          "En la Edad Imperial, investiga Bagains para infantería super-armada",
          "Combina Konniks e infantería para un ejército versátil y resistente"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Arqueros", "Caballería ligera", "Infantería estándar"],
      weakAgainst: ["Piqueros en masa", "Camellos", "Artillería pesada"]
    },
    similarCivs: [
      {
        id: "slavs",
        name: "Eslavos",
        reason: "Infantería fuerte y bonificaciones militares"
      },
      {
        id: "magyar",
        name: "Magiares",
        reason: "Enfoque en caballería y mejoras de herrería"
      },
      {
        id: "lithuanians",
        name: "Lituanos",
        reason: "Caballería fuerte y unidades versátiles"
      }
    ]
  }
};