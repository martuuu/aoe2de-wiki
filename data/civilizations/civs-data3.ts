import { CivilizationData } from './types';

export const civilizationsData3: Record<string, CivilizationData> = {
  ethiopians: {
    id: "ethiopians",
    name: "Etíopes",
    description: "Civilización del este africano con arqueros de disparo rápido, infantería resistente y una economía minera efectiva, representando al histórico Imperio etíope.",
    region: "África",
    specialty: "Arqueros y Infantería",
    image: "/assets/etiopes.webp",
    difficulty: "Intermedio",
    playstyle: "Agresivo-Flexible",
    categories: ["Arqueros", "Infantería", "Rush", "Unidad Única"],
    quickGuide: {
      strengths: "Arqueros con velocidad de disparo superior, economía de minería eficiente y versatilidad en unidades a distancia.",
      strategy: "Ejecuta un rush de arqueros en Feudal aprovechando su mayor velocidad de disparo y transiciona a una combinación de arqueros y infantería de asalto en Castillos.",
      tips: "Aprovecha la velocidad de disparo extra de tus arqueros para dominar en pequeñas escaramuzas. Utiliza Shotel Warriors para raids sorpresivos contra la línea de producción enemiga."
    },
    bonuses: [
      "Arqueros disparan 18% más rápido",
      "Reciben +100 oro y +100 alimento al avanzar de edad",
      "Infantería +3 línea de visión",
      "Torres y puestos de avanzada +3 línea de visión",
      "Mineros de oro trabajan 15% más rápido"
    ],
    uniqueUnits: [
      {
        name: "Shotel Warrior",
        description: "Infantería rápida con alto ataque que se entrena muy rápido",
        strengths: ["Creación ultra rápida", "Alto ataque", "Excelente movilidad"],
        weaknesses: ["Baja resistencia", "Costoso en oro", "Vulnerable a arqueros"]
      }
    ],
    uniqueTechs: [
      {
        name: "Royal Heirs",
        age: "Edad de los Castillos",
        description: "Shotel Warriors se regeneran",
        cost: "300 Alimento, 300 Oro"
      },
      {
        name: "Torsion Engines",
        age: "Edad Imperial",
        description: "Unidades de asedio tienen +0.45 área de efecto",
        cost: "1000 Madera, 600 Oro"
      }
    ],
    teamBonus: "Torres y puestos de avanzada +3 línea de visión",
    strategies: [
      {
        title: "Rush de Arqueros en Feudal",
        description: "Presiona con arqueros beneficiados por su velocidad de ataque superior",
        steps: [
          "Avanza a la Edad Feudal con 19-21 aldeanos",
          "Aprovecha el bono de +100 oro y +100 alimento al llegar a Feudal",
          "Construye dos Galerías de Tiro rápidamente",
          "Produce arqueros constantemente aprovechando su velocidad de disparo 18% superior",
          "Mantén la presión mientras avanzas a la Edad de los Castillos",
          "Actualiza a Ballesteros y añade Piqueros para defensa contra caballería"
        ]
      },
      {
        title: "Raids con Shotel Warriors",
        description: "Usa la creación ultra rápida y movilidad de los Shotel Warriors para ataques sorpresa",
        steps: [
          "Desarrolla una economía sólida con énfasis en oro (aprovechando mineros más rápidos)",
          "Avanza a la Edad de los Castillos y construye un Castillo",
          "Investiga Royal Heirs para añadir regeneración a tus Shotel Warriors",
          "Entrena grupos de Shotel Warriors (se producen muy rápido)",
          "Realiza raids simultáneos en diferentes puntos de la economía enemiga",
          "Complementa con arqueros para defender contra las contraofensivas"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Infantería pesada", "Unidades lentas", "Civilizaciones sin contraataque rápido"],
      weakAgainst: ["Caballería pesada", "Mamelucos", "Mangoneles"]
    },
    similarCivs: [
      {
        id: "mayans",
        name: "Mayas",
        reason: "Especialización en arqueros"
      },
      {
        id: "magyars",
        name: "Magiares",
        reason: "Unidades a distancia potentes"
      },
      {
        id: "vikings",
        name: "Vikingos",
        reason: "Infantería resistente y unidades a distancia fuertes"
      }
    ]
  },
  
  huns: {
    id: "huns",
    name: "Hunos",
    description: "Civilización nómada de caballería ultra rápida, conocida por su movilidad superior y agresividad temprana, representando al imperio de Atila el Huno.",
    region: "Asia Central",
    specialty: "Caballería y Rush",
    image: "/assets/hunos.webp",
    difficulty: "Fácil",
    playstyle: "Agresivo",
    categories: ["Caballería", "Rush", "Arqueros a Caballo", "Fast Castle"],
    quickGuide: {
      strengths: "No necesitan construir casas, caballería más económica y arqueros a caballo superiores con mayor línea de visión.",
      strategy: "Ejecuta un rush agresivo con exploradores en Feudal y transiciona a caballería y arqueros a caballo en Castillos para mantener la presión constante.",
      tips: "Aprovecha la ausencia de necesidad de casas para un avance de edad ultra rápido. Utiliza la movilidad de tu caballería para raids constantes y evita batallas directas contra infantería anti-caballería."
    },
    bonuses: [
      "No necesitan construir casas",
      "Caballería cuesta -10% en Edad Feudal, -15% en Castillos, -20% en Imperial",
      "Arqueros a caballo +1 línea de visión",
      "Trebuchets 30% más precisos",
      "Empiezan con +100 madera"
    ],
    uniqueUnits: [
      {
        name: "Tarkán",
        description: "Unidad de caballería especializada en destruir edificios",
        strengths: ["Bonus contra edificios", "Armadura anti-arqueros", "Buena velocidad"],
        weaknesses: ["Débil contra infantería anti-caballería", "Costoso en alimento", "Sin bonus contra unidades"]
      }
    ],
    uniqueTechs: [
      {
        name: "Marauders",
        age: "Edad de los Castillos",
        description: "Permite crear Tarkanes en establos",
        cost: "300 Madera, 200 Oro"
      },
      {
        name: "Atheism",
        age: "Edad Imperial",
        description: "Maravillas y reliquias otorgan 50% menos puntos, +100 años para victoria por reliquias/maravilla",
        cost: "500 Alimento, 300 Oro"
      }
    ],
    teamBonus: "Establos trabajan 20% más rápido",
    strategies: [
      {
        title: "Flush de Exploradores",
        description: "Ataque temprano con exploradores aprovechando el avance de edad rápido",
        steps: [
          "Avanza rápidamente a la Edad Feudal (no necesitas construir casas)",
          "Construye un Establo durante la transición",
          "Utiliza el bono de +100 madera inicial para establecer una economía temprana eficiente",
          "Produce Exploradores continuamente aprovechando su descuento",
          "Ataca la economía enemiga mientras expandes tu propia economía",
          "Transiciona a la Edad de los Castillos para actualizar a Caballeros"
        ]
      },
      {
        title: "Caballería y Arqueros a Caballo",
        description: "Combinación móvil que aprovecha las ventajas de los Hunos",
        steps: [
          "Avanza a la Edad de los Castillos con una economía equilibrada",
          "Construye Establos y Galerías de Tiro",
          "Produce Caballeros (con descuento) y Arqueros a Caballo (con mayor línea de visión)",
          "Investiga Marauders para producir Tarkanes desde Establos",
          "Mantén presión constante con raids en diferentes puntos",
          "En Imperial, actualiza a Paladines y Arqueros a Caballo Pesados"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Arqueros", "Unidades de asedio", "Civilizaciones lentas"],
      weakAgainst: ["Piqueros", "Camellos", "Monjes"]
    },
    similarCivs: [
      {
        id: "mongols",
        name: "Mongoles",
        reason: "Caballería y arqueros a caballo fuertes"
      },
      {
        id: "franks",
        name: "Francos",
        reason: "Especialización en caballería"
      },
      {
        id: "magyars",
        name: "Magiares",
        reason: "Caballería y arqueros a caballo efectivos"
      }
    ]
  },
  
  cumans: {
    id: "cumans",
    name: "Cumanos",
    description: "Civilización de las estepas con caballería rápida, torres de asedio móviles y capacidad de construir un segundo Centro Urbano en Feudal, representando a los nómadas cumanos.",
    region: "Asia Central",
    specialty: "Caballería y Rush",
    image: "/assets/cumanos.webp",
    difficulty: "Intermedio",
    playstyle: "Agresivo-Económico",
    categories: ["Caballería", "Rush", "Boom Económico", "Fast Castle"],
    quickGuide: {
      strengths: "Pueden construir un segundo Centro Urbano en Feudal, caballería más rápida y edificios de asedio móviles únicos.",
      strategy: "Desarrolla una economía superior con dos Centros Urbanos en Feudal y utiliza tu caballería rápida para dominar el campo de batalla en la Edad de los Castillos.",
      tips: "El segundo Centro Urbano en Feudal te da una ventaja económica enorme, pero asegúrate de defenderlo. Aprovechar al máximo el movimiento extra de tu caballería para tomar batallas favorables."
    },
    bonuses: [
      "Pueden construir un segundo Centro Urbano en Edad Feudal",
      "Edificios de asedio se mueven 50% más rápido",
      "Unidades de caballería +5% velocidad en Feudal, +10% en Castillos, +15% en Imperial",
      "Exploradores +10 PV",
      "Pueden construir Palizadas un 33% más rápido",
      "Mercado cuesta -75 madera"
    ],
    uniqueUnits: [
      {
        name: "Kipchak",
        description: "Arquero a caballo que dispara flechas múltiples",
        strengths: ["Disparo múltiple", "Alta movilidad", "Daño total elevado"],
        weaknesses: ["Corto alcance", "Baja precisión", "Débil contra escaramuzadores"]
      },
      {
        name: "Torre de Asedio",
        description: "Torre móvil que puede transportar unidades",
        strengths: ["Movilidad", "Capacidad de transporte", "Línea de visión extendida"],
        weaknesses: ["Alto costo", "Vulnerable a arqueros", "Movimiento lento comparado con unidades normales"]
      }
    ],
    uniqueTechs: [
      {
        name: "Steppe Husbandry",
        age: "Edad de los Castillos",
        description: "Establos producen unidades 80% más rápido",
        cost: "200 Alimento, 300 Oro"
      },
      {
        name: "Cuman Mercenaries",
        age: "Edad Imperial",
        description: "El equipo puede crear 10 Kipchaks gratuitos en cada Castillo una vez",
        cost: "650 Alimento, 400 Oro"
      }
    ],
    teamBonus: "Palizadas +50% PV",
    strategies: [
      {
        title: "Boom con Doble TC en Feudal",
        description: "Aprovecha la capacidad única de construir dos Centros Urbanos en Feudal",
        steps: [
          "Avanza a la Edad Feudal con 22 aldeanos",
          "Inmediatamente construye un segundo Centro Urbano",
          "Produce aldeanos constantemente desde ambos Centros",
          "Establece una economía muy superior a tu oponente",
          "Avanza a la Edad de los Castillos más rápido que tu enemigo",
          "Utiliza tu ventaja económica para producir más unidades"
        ]
      },
      {
        title: "Rush de Caballería Rápida",
        description: "Utiliza la velocidad superior de tu caballería para ataques devastadores",
        steps: [
          "Avanza a la Edad de los Castillos con una economía equilibrada",
          "Construye varios Establos",
          "Investiga Steppe Husbandry para producción ultra rápida",
          "Produce Caballeros rápidamente y aprovecha su mayor velocidad",
          "Realiza raids constantemente en la economía enemiga",
          "Añade Torres de Asedio para apoyo y presión adicional"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Arqueros", "Unidades lentas", "Civilizaciones defensivas"],
      weakAgainst: ["Infantería anti-caballería", "Camellos", "Monjes"]
    },
    similarCivs: [
      {
        id: "huns",
        name: "Hunos",
        reason: "Civilización de caballería agresiva"
      },
      {
        id: "mongols",
        name: "Mongoles",
        reason: "Unidades rápidas y estrategia agresiva"
      },
      {
        id: "tatars",
        name: "Tártaros",
        reason: "Caballería y arqueros a caballo fuertes"
      }
    ]
  },
  
  magyars: {
    id: "magyars",
    name: "Magiares",
    description: "Civilización de cazadores y jinetes de Europa Oriental con caballería ligera poderosa, arqueros efectivos y economía de caza superior, representando al Reino Medieval Húngaro.",
    region: "Europa Oriental",
    specialty: "Caballería y Arqueros",
    image: "/assets/magiares.webp",
    difficulty: "Intermedio",
    playstyle: "Agresivo",
    categories: ["Caballería", "Arqueros", "Rush", "Unidad Única"],
    quickGuide: {
      strengths: "Unidades militares económicas, exploradores poderosos y una ventaja significativa en caza que acelera su desarrollo temprano.",
      strategy: "Aprovecha la eficiencia en caza para un avance de edad rápido seguido de presión con exploradores y arqueros, transitando a una composición equilibrada de caballería y arqueros.",
      tips: "Utiliza tus exploradores gratuitos para expandir el mapa temprano. Aprovecha la herrería gratuita para obtener ventaja en las primeras batallas. Magyar Huszars son excelentes para eliminar armas de asedio enemigas."
    },
    bonuses: [
      "Herrería gratis para mejoras de ataque de infantería y arqueros",
      "Exploradores +2 línea de visión",
      "Unidades cuestan -10% alimento (excepto asedio)",
      "Cazadores trabajan 15% más rápido",
      "Aldeanos matan animales salvajes con un solo golpe"
    ],
    uniqueUnits: [
      {
        name: "Magyar Huszar",
        description: "Caballería ligera con bonus contra unidades de asedio",
        strengths: ["Fuerte contra armas de asedio", "Movimiento rápido", "No requiere oro"],
        weaknesses: ["Débil contra piqueros", "Baja armadura", "Sin bonus contra otras unidades"]
      }
    ],
    uniqueTechs: [
      {
        name: "Corvinian Army",
        age: "Edad de los Castillos",
        description: "Exploradores y Magyar Huszars +1 ataque por cada tecnología de herrería de caballería",
        cost: "200 Alimento, 300 Oro"
      },
      {
        name: "Recurve Bow",
        age: "Edad Imperial",
        description: "Arqueros a caballo y arqueros a pie +1 alcance y +1 ataque",
        cost: "600 Madera, 400 Oro"
      }
    ],
    teamBonus: "Arqueros +2 línea de visión",
    strategies: [
      {
        title: "Rush de Exploradores y Arqueros",
        description: "Aprovecha la economía de caza eficiente para una presión temprana",
        steps: [
          "Prioriza los jabalíes y ciervos (los aldeanos los matan de un golpe)",
          "Avanza a la Edad Feudal con 19-21 aldeanos",
          "Construye Establos y una Galería de Tiro",
          "Produce Exploradores (con descuento en alimento) y Arqueros",
          "Investiga mejoras de Herrería gratuitas para los arqueros",
          "Mantén presión constante mientras transicionas a la Edad de los Castillos"
        ]
      },
      {
        title: "Caballería y Arqueros Elite",
        description: "Combinación equilibrada que maximiza las bonificaciones Magiares",
        steps: [
          "Desarrolla una economía equilibrada aprovechando la caza eficiente",
          "Avanza a la Edad de los Castillos",
          "Produce una combinación de Caballeros y Arqueros a Caballo",
          "Investiga Corvinian Army para mejorar Exploradores",
          "Añade Magyar Huszars contra unidades de asedio enemigas",
          "En Imperial, investiga Recurve Bow para arqueros superiores"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Unidades de asedio", "Arqueros", "Civilizaciones lentas"],
      weakAgainst: ["Infantería anti-caballería", "Camellos", "Unidades con armadura pesada"]
    },
    similarCivs: [
      {
        id: "huns",
        name: "Hunos",
        reason: "Caballería fuerte y estilo agresivo"
      },
      {
        id: "poles",
        name: "Polacos",
        reason: "Caballería especializada"
      },
      {
        id: "mongols",
        name: "Mongoles",
        reason: "Cazadores eficientes y caballería móvil"
      }
    ]
  },
  
  vietnamese: {
    id: "vietnamese",
    name: "Vietnamitas",
    description: "Civilización del sudeste asiático con arqueros de élite, resistencia a la exploración enemiga y una economía maderera eficiente, representando a los reinos vietnamitas históricos.",
    region: "Sudeste Asiático",
    specialty: "Arqueros y Defensa",
    image: "/assets/vietnamitas.webp",
    difficulty: "Difícil",
    playstyle: "Defensivo-Técnico",
    categories: ["Arqueros", "Defensivo", "Unidad Única", "Boom Económico"],
    quickGuide: {
      strengths: "Revelan las posiciones enemigas iniciales, arqueros con PV adicionales y economía maderera eficiente con acceso a tecnologías económicas avanzadas.",
      strategy: "Desarrolla una defensa sólida con arqueros resistentes mientras expandes tu economía, para luego dominar en batallas de larga duración con una combinación de arqueros de élite y unidades anti-caballería.",
      tips: "Utiliza tu conocimiento de las posiciones enemigas para planificar defensas y ataques. La mayor resistencia de tus arqueros te da ventaja en micro-batallas contra otras unidades a distancia."
    },
    bonuses: [
      "Revelan posiciones enemigas al inicio del juego",
      "Arqueros +20% PV en Edad Feudal, +30% en Castillos, +40% en Imperial",
      "Tecnologías económicas gratis",
      "Acceso a todas las mejoras de infantería",
      "Leñadores +10% eficiencia"
    ],
    uniqueUnits: [
      {
        name: "Rattan Archer",
        description: "Arquero con alta resistencia a proyectiles",
        strengths: ["Extremadamente resistente a proyectiles", "Movimiento rápido", "Buen ataque"],
        weaknesses: ["Alto costo", "Vulnerable a infantería", "Producción lenta"]
      },
      {
        name: "Imperial Skirmisher",
        description: "Versión mejorada del Escaramuzador Élite (disponible para todo el equipo)",
        strengths: ["Fuerte contra arqueros", "Económico (no requiere oro)", "Mayor alcance"],
        weaknesses: ["Débil contra infantería y caballería", "Bajo daño", "Ataque lento"]
      }
    ],
    uniqueTechs: [
      {
        name: "Chatras",
        age: "Edad de los Castillos",
        description: "Elefantes de Batalla +100 PV",
        cost: "250 Alimento, 250 Oro"
      },
      {
        name: "Paper Money",
        age: "Edad Imperial",
        description: "Proporciona 500 oro a cada miembro del equipo",
        cost: "650 Alimento, 250 Madera"
      }
    ],
    teamBonus: "Imperial Skirmisher disponible en la herrería en Edad Imperial",
    strategies: [
      {
        title: "Arqueros Resilientes",
        description: "Aprovecha la mayor resistencia de tus arqueros para dominar en escaramuzas",
        steps: [
          "Utiliza el conocimiento de las posiciones enemigas para planificar tu estrategia",
          "Avanza a la Edad Feudal y construye Galerías de Tiro",
          "Produce arqueros que tienen +20% PV en Feudal",
          "Entrena a tus arqueros en batallas de micro-gestión contra otras unidades",
          "Actualiza a Ballesteros en la Edad de los Castillos (+30% PV)",
          "Añade Rattan Archers para mayor efectividad contra unidades a distancia"
        ]
      },
      {
        title: "Defensa Económica y Boom",
        description: "Utiliza las tecnologías económicas gratuitas para un boom seguro",
        steps: [
          "Establece defensas tempranas basadas en el conocimiento de las posiciones enemigas",
          "Aprovecha los leñadores más eficientes para una economía de madera sólida",
          "Utiliza las tecnologías económicas gratuitas para acelerar tu desarrollo",
          "Mantén una defensa de arqueros con PV superior",
          "En Imperial, investiga Paper Money para obtener oro adicional",
          "Combina Rattan Archers con Imperial Skirmishers y Piqueros para una composición equilibrada"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Arqueros", "Unidades a distancia", "Civilizaciones que dependen de exploración"],
      weakAgainst: ["Infantería", "Caballería pesada", "Onagros"]
    },
    similarCivs: [
      {
        id: "mayans",
        name: "Mayas",
        reason: "Enfoque en arqueros resistentes"
      },
      {
        id: "khmer",
        name: "Jemeres",
        reason: "Civilización del sudeste asiático con bonificaciones económicas"
      },
      {
        id: "chinese",
        name: "Chinos",
        reason: "Versatilidad y tecnologías avanzadas"
      }
    ]
  },
  
  koreans: {
    id: "koreans",
    name: "Coreanos",
    description: "Civilización del este asiático con torres poderosas, barcos de guerra superiores y unidades a distancia especializadas, representando a los reinos coreanos históricos.",
    region: "Asia Oriental",
    specialty: "Torres y Naval",
    image: "/assets/coreanos.webp",
    difficulty: "Difícil",
    playstyle: "Defensivo-Técnico",
    categories: ["Torres", "Naval", "Asedio", "Arqueros", "Defensivo"],
    quickGuide: {
      strengths: "Torres y muros que se construyen más rápido, barcos de guerra con mayor alcance y unidades de asedio precisas que no necesitan línea de visión directa.",
      strategy: "Establece una defensa sólida con torres y muros mientras desarrollas tu economía, para luego presionar con barcos de guerra superiores en agua y unidades de asedio precisas en tierra.",
      tips: "Tus torres se construyen 33% más rápido, aprovecha para realizar tower rush o defender recursos clave. Utiliza War Wagons para raids y protege tus máquinas de asedio que pueden disparar sin línea de visión directa."
    },
    bonuses: [
      "Aldeanos +3 línea de visión",
      "Torres y Fortalezas se construyen 33% más rápido",
      "Torre, Atalaya y Bombardera +1/+1 armadura en Edad de los Castillos/Imperial",
      "Mejoras de infantería anti-caballería cuestan -20% alimento",
      "Barcos de guerra +1 alcance en Feudal, +1 en Castillos",
      "Unidades de asedio no necesitan línea de visión directa"
    ],
    uniqueUnits: [
      {
        name: "War Wagon",
        description: "Carro de batalla a distancia con alta resistencia",
        strengths: ["Alta resistencia", "Buen ataque a distancia", "Efectivo en grupos"],
        weaknesses: ["Movimiento lento", "Costoso", "Vulnerable a piqueros"]
      },
      {
        name: "Turtle Ship",
        description: "Barco de guerra blindado con cañón potente",
        strengths: ["Alta resistencia", "Fuerte ataque", "Bonus contra barcos"],
        weaknesses: ["Movimiento muy lento", "Corto alcance", "Alto costo"]
      }
    ],
    uniqueTechs: [
      {
        name: "Eupseong",
        age: "Edad de los Castillos",
        description: "Torres y Castillos +2 alcance",
        cost: "300 Piedra, 200 Oro"
      },
      {
        name: "Shinkichon",
        age: "Edad Imperial",
        description: "Mangoneles +1 alcance",
        cost: "800 Madera, 500 Oro"
      }
    ],
    teamBonus: "Mangoneles tienen +1 alcance",
    strategies: [
      {
        title: "Tower Rush Defensivo",
        description: "Utiliza la construcción rápida de torres para presionar y defender",
        steps: [
          "Avanza a la Edad Feudal con 22 aldeanos",
          "Envía 4-5 aldeanos a construir torres cerca de recursos enemigos",
          "Aprovecha la velocidad de construcción 33% superior",
          "Defiende tus propios recursos con torres adicionales",
          "Avanza a la Edad de los Castillos y mejora tus torres",
          "Investiga Eupseong para torres con alcance extendido"
        ]
      },
      {
        title: "Dominio Naval y Asedio de Precisión",
        description: "Combina barcos de guerra de largo alcance con asedio preciso",
        steps: [
          "En mapas de agua, prioriza la construcción de Docks",
          "Produce barcos de guerra con alcance extendido",
          "Controla los recursos marinos y rutas comerciales",
          "En tierra, construye un Taller de Asedio en la Edad de los Castillos",
          "Aprovecha la capacidad de disparar sin línea de visión directa",
          "Investiga Shinkichon para Mangoneles con alcance extremo"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Arqueros", "Unidades a distancia", "Flotas navales"],
      weakAgainst: ["Caballería rápida", "Arietes", "Bombardas"]
    },
    similarCivs: [
      {
        id: "teutons",
        name: "Teutones",
        reason: "Enfoque defensivo y torres fuertes"
      },
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Versatilidad defensiva"
      },
      {
        id: "chinese",
        name: "Chinos",
        reason: "Civilización del este asiático con tecnología avanzada"
      }
    ]
  },
  
  tatars: {
    id: "tatars",
    name: "Tártaros",
    description: "Civilización de las estepas con arqueros a caballo superiores, excelente visión y unidades que se benefician de terrenos elevados, representando a las tribus túrquicas y mongólicas.",
    region: "Asia Central",
    specialty: "Arqueros a Caballo",
    image: "/assets/tartaros.webp",
    difficulty: "Intermedio",
    playstyle: "Móvil-Técnico",
    categories: ["Arqueros a Caballo", "Caballería", "Rush", "Unidad Única"],
    quickGuide: {
      strengths: "Unidades sobre terreno elevado obtienen más daño, arqueros a caballo con armadura adicional y recursos gratuitos de ovejas.",
      strategy: "Utiliza tu línea de visión superior para localizar recursos y terrenos elevados donde tus unidades tendrán ventaja. Domina con arqueros a caballo resistentes y raids de caballería.",
      tips: "Tus ovejas proporcionan 50% más de alimento - prioriza encontrarlas. Posiciona tus arqueros a caballo en terreno elevado para maximizar su daño. Los Keshiks generan oro al combatir, ideal para mantener economía en batallas prolongadas."
    },
    bonuses: [
      "Ovejas proporcionan +50% alimento",
      "Unidades reciben +25% daño en terreno elevado",
      "Exploradores +2 línea de visión",
      "Puestos de avanzada gratis al avanzar a Feudal",
      "Arqueros a caballo +1 armadura en Edad de los Castillos, +1 en Imperial",
      "Trebuchets +20% precisión"
    ],
    uniqueUnits: [
      {
        name: "Keshik",
        description: "Caballería que genera oro al combatir",
        strengths: ["Genera oro en combate", "Buena velocidad", "Eficiente en batallas prolongadas"],
        weaknesses: ["Vulnerable a piqueros", "Menor daño que los Caballeros", "Requiere microgestión"]
      },
      {
        name: "Flaming Camel",
        description: "Unidad kamikaze que daña unidades de caballería agrupadas",
        strengths: ["Daño en área contra caballería", "Bajo costo", "Sorprende al enemigo"],
        weaknesses: ["Unidad sacrificable", "Solo efectiva contra caballería", "Requiere precisión"]
      }
    ],
    uniqueTechs: [
      {
        name: "Silk Armor",
        age: "Edad de los Castillos",
        description: "Exploradores y arqueros a caballo +1/+1 armadura",
        cost: "400 Alimento, 300 Oro"
      },
      {
        name: "Timurid Siegecraft",
        age: "Edad Imperial",
        description: "Trebuchets +2 alcance, habilita Flaming Camel",
        cost: "600 Madera, 500 Oro"
      }
    ],
    teamBonus: "+2 línea de visión para arqueros a caballo",
    strategies: [
      {
        title: "Rush de Arqueros a Caballo",
        description: "Aprovecha los arqueros a caballo mejorados y el terreno elevado",
        steps: [
          "Utiliza la mejor línea de visión para localizar recursos y ovejas (+50% alimento)",
          "Avanza a la Edad Feudal y construye una Galería de Tiro",
          "Produce Arqueros a Caballo y busca terreno elevado para combatir",
          "Coloca los Puestos de Avanzada gratuitos para controlar áreas clave",
          "Investiga Silk Armor en la Edad de los Castillos para mayor resistencia",
          "Realiza raids constantes aprovechando la movilidad y resistencia mejorada"
        ]
      },
      {
        title: "Keshik y Trebuchet Precision",
        description: "Genera oro en combate mientras asedias con precisión",
        steps: [
          "Desarrolla una economía equilibrada con énfasis en recolección de ovejas",
          "Avanza a la Edad de los Castillos y construye un Castillo",
          "Produce Keshiks para generar oro adicional en combate",
          "En Imperial, añade Trebuchets con precisión mejorada",
          "Investiga Timurid Siegecraft para mayor alcance de asedio",
          "Utiliza Flaming Camels como sorpresa contra grupos de caballería enemiga"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Infantería lenta", "Arqueros", "Unidades agrupadas en terreno bajo"],
      weakAgainst: ["Piqueros en masa", "Camellos", "Escaramuzadores"]
    },
    similarCivs: [
      {
        id: "mongols",
        name: "Mongoles",
        reason: "Arqueros a caballo fuertes y movilidad"
      },
      {
        id: "huns",
        name: "Hunos",
        reason: "Enfoque en caballería y arqueros a caballo"
      },
      {
        id: "magyars",
        name: "Magiares",
        reason: "Caballería fuerte con bonificaciones específicas"
      }
    ]
  },
  
  burgundians: {
    id: "burgundians",
    name: "Borgoñones",
    description: "Civilización europea occidental con caballería económica, mejoras tempranas y unidades especiales que generan oro, representando al Ducado de Borgoña medieval.",
    region: "Europa Occidental",
    specialty: "Caballería y Economía",
    image: "/assets/borgonones.webp",
    difficulty: "Difícil",
    playstyle: "Económico-Técnico",
    categories: ["Caballería", "Boom Económico", "Unidad Única", "Fast Castle"],
    quickGuide: {
      strengths: "Mejoras económicas disponibles una edad antes, caballería más económica, y unidades generadoras de oro que potencian tu economía tardía.",
      strategy: "Desarrolla una ventaja económica temprana con tecnologías adelantadas y transiciona a caballería económica potenciada por Burgundian Vineyards para sostener una producción masiva de unidades de oro en el late game.",
      tips: "Investiga temprano las mejoras económicas que están disponibles una edad antes. Convierte alimento excedente en oro con Burgundian Vineyards. Los Coustilliers son devastadores en el primer impacto - retíralos para recargar su ataque especial."
    },
    bonuses: [
      "Mejoras económicas disponibles una edad antes de lo normal",
      "Tecnologías de establos cuestan -50% alimento",
      "Aldeanos recogen +25% alimento de granjas",
      "Pueden investigar Flemish Revolution para convertir aldeanos en Milicia Flamenca",
      "Mejoras de caballería disponibles una edad antes"
    ],
    uniqueUnits: [
      {
        name: "Coustillier",
        description: "Caballería con un poderoso ataque de carga que necesita recargarse",
        strengths: ["Daño de carga devastador", "Buena velocidad", "Efectivo para ataques sorpresa"],
        weaknesses: ["Tiempo de recarga del ataque especial", "Vulnerable a piqueros", "Requiere microgestión"]
      },
      {
        name: "Milicia Flamenca",
        description: "Infantería anti-caballería creada al investigar Flemish Revolution",
        strengths: ["Fuerte contra caballería", "Creación masiva instantánea", "Eficiente en coste"],
        weaknesses: ["Convierte aldeanos (sacrifica economía)", "Débil contra arqueros", "Táctica de uso único"]
      }
    ],
    uniqueTechs: [
      {
        name: "Burgundian Vineyards",
        age: "Edad de los Castillos",
        description: "Granjas generan oro de forma gradual. Aldeanos recogen +33% alimento de granjas",
        cost: "400 Alimento, 300 Oro"
      },
      {
        name: "Flemish Revolution",
        age: "Edad Imperial",
        description: "Convierte todos los aldeanos en Milicia Flamenca",
        cost: "850 Alimento, 450 Oro"
      }
    ],
    teamBonus: "Reliquias generan +25% oro adicional",
    strategies: [
      {
        title: "Fast Castle con Economía Superior",
        description: "Aprovecha las mejoras económicas tempranas para una ventaja económica",
        steps: [
          "Investiga Gil de Doble Filo (Mejora de Granja) en Edad Oscura",
          "Avanza rápido a la Edad Feudal y luego a Castillos",
          "Investiga Banco, Carretilla y otras mejoras económicas una edad antes",
          "Desarrolla una economía sustancialmente más eficiente que tu oponente",
          "Investiga Burgundian Vineyards para generar oro de tus granjas",
          "Produce Caballeros (con 50% menos de alimento) y Coustilliers"
        ]
      },
      {
        title: "All-in con Flemish Revolution",
        description: "Estrategia extrema de late-game para situaciones desesperadas",
        steps: [
          "Desarrolla una economía masiva con muchos aldeanos",
          "Acumula recursos para la batalla final",
          "Investiga todas las mejoras de infantería disponibles",
          "Cuando el enemigo ataque o como jugada final, investiga Flemish Revolution",
          "Todos tus aldeanos se convierten instantáneamente en Milicia Flamenca",
          "Lanza un ataque masivo con este ejército repentino",
          "Recuerda: es una táctica de todo o nada - si no funciona, habrás perdido tu economía"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Caballería lenta", "Civilizaciones que dependen de boom económico", "Unidades agrupadas"],
      weakAgainst: ["Arqueros", "Monjes", "Infantería anti-caballería"]
    },
    similarCivs: [
      {
        id: "franks",
        name: "Francos",
        reason: "Especialización en caballería y economía agrícola"
      },
      {
        id: "persians",
        name: "Persas",
        reason: "Economía acelerada y caballería fuerte"
      },
      {
        id: "lithuanians",
        name: "Lituanos",
        reason: "Caballería con bonificaciones especiales"
      }
    ]
  }
};