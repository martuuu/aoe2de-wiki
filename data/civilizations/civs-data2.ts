import { CivilizationData } from './types';

export const civilizationsData2: Record<string, CivilizationData> = {
  celts: {
    id: "celts",
    name: "Celtas",
    description: "Civilización de guerreros europeos conocidos por sus unidades de asedio rápidas e infantería poderosa, representando a los pueblos célticos de la antigüedad.",
    region: "Europa Occidental",
    categories: ["Infantería", "Asedio", "Rush", "Unidad Única"],
    specialty: "Infantería y Asedio",
    image: "/assets/celtas.webp",
    difficulty: "Fácil",
    playstyle: "Agresivo",
    quickGuide: {
      strengths: "Unidades de asedio extremadamente rápidas, leñadores eficientes e infantería con velocidad de ataque superior.",
      strategy: "Desarrolla una economía fuerte basada en madera y presiona con oleadas de infantería, añadiendo unidades de asedio poderosas en la Edad de los Castillos.",
      tips: "Prioriza la producción de leñadores. Utiliza los Espadachines como unidad principal y complementa con Onagros que se mueven más rápido que los de otras civilizaciones."
    },
    bonuses: [
      "Unidades de asedio se mueven 20% más rápido",
      "Infantería ataca 15% más rápido desde la Edad Feudal",
      "Leñadores trabajan 15% más rápido",
      "Ovejas no pueden ser robadas ni convertidas",
      "Unidades de asedio +40% PV contra edificios"
    ],
    uniqueUnits: [
      {
        name: "Guerrero con Hacha",
        description: "Infantería rápida especializada en combate cuerpo a cuerpo",
        strengths: ["Alta velocidad de ataque", "Movimiento rápido", "Daño en área"],
        weaknesses: ["Baja armadura", "Vulnerable contra arqueros", "Costoso en alimento"]
      }
    ],
    uniqueTechs: [
      {
        name: "Furor Céltico",
        age: "Edad de los Castillos",
        description: "Talleres de Asedio trabajan 20% más rápido",
        cost: "500 Alimento, 250 Oro"
      },
      {
        name: "Sucesores",
        age: "Edad Imperial",
        description: "Guerreros con Hacha regeneran vida",
        cost: "750 Alimento, 450 Oro"
      }
    ],
    teamBonus: "Talleres de Asedio trabajan 20% más rápido",
    strategies: [
      {
        title: "Men-at-Arms Rush",
        description: "Aprovecha la velocidad de ataque superior de tu infantería para una presión temprana",
        steps: [
          "Avanza rápido a la Edad Feudal (22 aldeanos)",
          "Construye un Cuartel durante la transición",
          "Entrena Hombres de Armas inmediatamente al llegar a Feudal",
          "Investiga mejoras de infantería para maximizar el bonus de velocidad de ataque",
          "Presiona recursos críticos del enemigo",
          "Transiciona a Guerreros con Hacha en la Edad de los Castillos"
        ]
      },
      {
        title: "Asedio Móvil",
        description: "Utiliza la movilidad superior de tus unidades de asedio para devastar al enemigo",
        steps: [
          "Desarrolla una economía sólida con énfasis en madera y oro",
          "Avanza a la Edad de los Castillos",
          "Construye un Taller de Asedio y produce Escorpiones y Arietes",
          "Investiga Furor Céltico para producción más rápida",
          "Protege tu asedio con infantería de primera línea",
          "En Imperial, actualiza a Onagros y añade Guerreros con Hacha para protección"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Infantería lenta", "Edificios", "Unidades agrupadas"],
      weakAgainst: ["Arqueros", "Caballería pesada", "Conversión por monjes"]
    },
    similarCivs: [
      {
        id: "goths",
        name: "Godos",
        reason: "Infantería poderosa y económica"
      },
      {
        id: "slavs",
        name: "Eslavos",
        reason: "Fuerte en infantería y asedio"
      },
      {
        id: "vikings",
        name: "Vikingos",
        reason: "Infantería resistente y economía eficiente"
      }
    ]
  },
  
  japanese: {
    id: "japanese",
    name: "Japoneses",
    description: "Civilización isleña de Asia Oriental conocida por su infantería rápida y poderosa, junto con excelentes unidades navales y una economía eficiente.",
    region: "Asia Oriental",
    specialty: "Infantería y Naval",
    image: "/assets/japoneses.webp",
    categories: ["Infantería", "Naval", "Rush", "Unidad Única"],
    difficulty: "Intermedio",
    playstyle: "Agresivo-Flexible",
    quickGuide: {
      strengths: "Infantería con velocidad de ataque excepcional, aldeanos y pescadores eficientes, y unidades navales poderosas.",
      strategy: "Utiliza tu infantería para presionar temprano en tierra, o domina los recursos marítimos con pescadores eficientes.",
      tips: "Aprovecha el ataque rápido de tu infantería para micro-gestionar batallas. Los Samurái son extremadamente efectivos contra unidades únicas enemigas."
    },
    bonuses: [
      "Infantería ataca 25% más rápido desde la Edad Feudal",
      "Pescadores trabajan 5% más rápido en Feudal, 10% en Castillos, 15% en Imperial",
      "Barcos de pesca +2 línea de visión, doble PV",
      "Aldeanos construyen y reparan 2% más rápido en Feudal, 3% en Castillos, 5% en Imperial",
      "Minas de oro y piedra cuestan -50% madera"
    ],
    uniqueUnits: [
      {
        name: "Samurái",
        description: "Infantería de élite con bonus contra unidades únicas",
        strengths: ["Bonus de ataque vs. unidades únicas", "Alta velocidad de ataque", "Rápida creación"],
        weaknesses: ["Costoso en oro", "Vulnerable a arqueros", "Sin bonificación contra caballería"]
      }
    ],
    uniqueTechs: [
      {
        name: "Yasama",
        age: "Edad de los Castillos",
        description: "Torres disparan flechas adicionales",
        cost: "300 Madera, 300 Oro"
      },
      {
        name: "Kataparuto",
        age: "Edad Imperial",
        description: "Trebuchets disparan y se arman más rápido",
        cost: "750 Madera, 400 Oro"
      }
    ],
    teamBonus: "Galerías de Tiro trabajan 20% más rápido",
    strategies: [
      {
        title: "Rush de Hombres de Armas",
        description: "Aprovecha la velocidad de ataque superior para una agresión temprana",
        steps: [
          "Avanza a la Edad Feudal con 22 aldeanos",
          "Construye un Cuartel durante la transición",
          "Entrena Hombres de Armas y aprovecha su mayor velocidad de ataque",
          "Investiga mejoras de ataque y armadura rápidamente",
          "Presiona recursos clave del enemigo",
          "Transiciona a Campeones o Samuráis en edades posteriores"
        ]
      },
      {
        title: "Boom Pesquero Naval",
        description: "En mapas de agua, aprovecha tus bonificaciones de pesca",
        steps: [
          "Construye un Dock temprano",
          "Produce varios Barcos de Pesca aprovechando su mayor durabilidad",
          "Utiliza la eficiencia de pescadores para un boom económico naval",
          "Defiende con Galeras y controla los recursos marítimos",
          "Transiciona a una economía terrestre en la Edad de los Castillos",
          "Construye castillos para producir Samuráis en tierra firme"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Unidades únicas", "Infantería", "Unidades navales"],
      weakAgainst: ["Arqueros en masa", "Caballería pesada", "Unidades de asedio"]
    },
    similarCivs: [
      {
        id: "vikings",
        name: "Vikingos",
        reason: "Infantería fuerte y bonificaciones navales"
      },
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Versatilidad y unidades contra-unidades"
      },
      {
        id: "chinese",
        name: "Chinos",
        reason: "Civilización de Asia Oriental con tecnología avanzada"
      }
    ]
  },
  
  incas: {
    id: "incas",
    name: "Incas",
    description: "Civilización andina con infantería diversa y adaptable, estructuras eficientes y una economía basada en recursos de piedra y alimento.",
    region: "Americana",
    categories: ["Infantería", "Defensivo", "Meso", "Unidad Única"],
    specialty: "Infantería y Defensa",
    image: "/assets/incas.webp",
    difficulty: "Difícil",
    playstyle: "Defensivo-Adaptable",
    quickGuide: {
      strengths: "Infantería con armadura mejorada contra proyectiles, edificios que no requieren piedra, y fuertes aldeanos defensivos.",
      strategy: "Adapta tu estrategia de infantería según el oponente, aprovechando la diversidad de unidades contra-unidades y la economía eficiente.",
      tips: "Utiliza Honderos contra arqueros enemigos. Aprovecha tus aldeanos resistentes para defenderte de raids tempranos. Construye casas temprano para aprovechar su bonificación de población."
    },
    bonuses: [
      "Casas soportan +10 población",
      "Edificios cuestan -15% piedra",
      "Granjas se construyen +50% más rápido",
      "Llamas revelan enemigos cercanos",
      "Aldeanos reciben -10% daño de proyectiles en Feudal, -15% en Castillos, -20% en Imperial",
      "No necesitan piedra para construir edificios que normalmente la requieren"
    ],
    uniqueUnits: [
      {
        name: "Hondero",
        description: "Infantería a distancia especializada contra arqueros",
        strengths: ["Fuerte contra arqueros", "Económico (no requiere oro)", "Buena velocidad"],
        weaknesses: ["Débil contra infantería", "Corto alcance", "Bajo daño contra edificios"]
      },
      {
        name: "Kamayuk",
        description: "Infantería con lanzas de largo alcance",
        strengths: ["Bonus contra caballería", "Puede atacar desde segunda fila", "Buena armadura"],
        weaknesses: ["Requiere masa crítica", "Vulnerable a arqueros", "Costoso en oro"]
      }
    ],
    uniqueTechs: [
      {
        name: "Andean Sling",
        age: "Edad de los Castillos",
        description: "Honderos y Arqueros a Pie no tienen distancia mínima",
        cost: "200 Madera, 300 Oro"
      },
      {
        name: "Couriers",
        age: "Edad Imperial",
        description: "Kamayuks, Guerreros Águila y Honderos +10% velocidad de movimiento y +1/+2 armadura",
        cost: "600 Madera, 600 Oro"
      }
    ],
    teamBonus: "Granjas +10% alimento",
    strategies: [
      {
        title: "Eagle Rush",
        description: "Aprovecha los Guerreros Águila para presionar en la Edad de los Castillos",
        steps: [
          "Avanza a la Edad Feudal con 22 aldeanos",
          "Construye un Cuartel y transiciona a la Edad de los Castillos rápidamente",
          "Entrena Guerreros Águila para raids en los recursos enemigos",
          "Añade Honderos contra arqueros o Kamayuks contra caballería según necesites",
          "Investiga Andean Sling si enfrentas arqueros",
          "Expande tu economía con granjas rápidas y casas eficientes"
        ]
      },
      {
        title: "Defensa con Ciudadelas",
        description: "Crea una posición defensiva fuerte con edificios económicos en piedra",
        steps: [
          "Utiliza la bonificación de -15% coste de piedra para construir torres tempranas",
          "Defiende recursos clave con tus aldeanos resistentes a proyectiles",
          "Construye Casas estratégicamente para maximizar su capacidad de población",
          "Avanza a la Edad de los Castillos y añade Castillos económicos",
          "Produce una combinación de unidades anti-caballería y anti-arqueros",
          "Investiga Couriers en Imperial para unidades de infantería más resistentes"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Arqueros", "Caballería", "Civilizaciones mono-unidad"],
      weakAgainst: ["Infantería pesada", "Unidades de asedio", "Monjes"]
    },
    similarCivs: [
      {
        id: "aztecs",
        name: "Aztecas",
        reason: "Civilización americana con Eagles"
      },
      {
        id: "mayans",
        name: "Mayas",
        reason: "Economía fuerte y Eagles"
      },
      {
        id: "byzantine",
        name: "Bizantinos",
        reason: "Versatilidad y unidades contra-unidades"
      }
    ]
  },
  
  spanish: {
    id: "spanish",
    name: "Españoles",
    categories: ["Caballería", "Unidad Única", "Boom Económico", "Fast Castle"],
    description: "Poderosa civilización imperial con unidades de pólvora superiores, caballería fuerte y una economía comercial eficiente, representando el auge del Imperio Español.",
    region: "Europa Mediterránea",
    specialty: "Pólvora y Monjes",
    image: "/assets/espanoles.webp",
    difficulty: "Intermedio",
    playstyle: "Económico-Imperial",
    quickGuide: {
      strengths: "Unidades de pólvora extremadamente precisas, mejoras de herrería gratuitas y economía comercial superior.",
      strategy: "Desarrolla una economía sólida con comercio y oro, y domina en la Edad Imperial con Conquistadores, artillería precisa y tecnologías superiores.",
      tips: "Prioriza llegar a la Edad Imperial. Utiliza Misioneros para conversiones móviles. Los Conquistadores son devastadores contra infantería y excelentes para raids."
    },
    bonuses: [
      "Los constructores trabajan 30% más rápido",
      "Las mejoras de herrería no cuestan oro",
      "Los barcos comerciales generan +25% oro",
      "Las unidades de pólvora disparan 18% más rápido",
      "Las unidades de pólvora tienen máxima precisión (sin dispersión)"
    ],
    uniqueUnits: [
      {
        name: "Conquistador",
        description: "Unidad de caballería con arcabuz, combinando movilidad y poder de disparo",
        strengths: ["Alta movilidad", "Potente ataque a distancia", "Efectivo contra infantería"],
        weaknesses: ["Alto costo", "Débil contra caballería", "Vulnerable a Escaramuzadores"]
      },
      {
        name: "Misionero",
        description: "Monje a caballo más rápido pero con menos alcance",
        strengths: ["Alta movilidad", "Conversiones rápidas", "Económico en oro"],
        weaknesses: ["Menor alcance de conversión", "Débil en combate", "Vulnerable a arqueros"]
      }
    ],
    uniqueTechs: [
      {
        name: "Inquisición",
        age: "Edad de los Castillos",
        description: "Monjes convierten 30% más rápido",
        cost: "300 Oro, 300 Alimento"
      },
      {
        name: "Supremacía",
        age: "Edad Imperial",
        description: "Aldeanos +40 PV y +6 ataque",
        cost: "450 Alimento, 250 Oro"
      }
    ],
    teamBonus: "Comercio genera +25% oro",
    strategies: [
      {
        title: "Boom Comercial Imperial",
        description: "Desarrolla una economía superior con comercio y transiciona a unidades de pólvora avanzadas",
        steps: [
          "Prioriza una economía equilibrada en las edades tempranas",
          "Construye un Mercado temprano y establece rutas comerciales",
          "Avanza a la Edad Imperial rápidamente",
          "Investiga todas las mejoras de herrería (gratuitas en oro)",
          "Produce Conquistadores y unidades de pólvora como Cañones de Mano",
          "Añade Bombardas y Cañones de Asedio para completar tu ejército"
        ]
      },
      {
        title: "Estrategia de Monjes y Conquistadores",
        description: "Utiliza una combinación de conversiones y poder de fuego móvil",
        steps: [
          "Avanza a la Edad de los Castillos con una economía sólida",
          "Construye un Monasterio y entrena Monjes/Misioneros",
          "Añade un Castillo y produce Conquistadores",
          "Investiga Inquisición para conversiones más rápidas",
          "Utiliza Misioneros para curar y convertir mientras los Conquistadores atacan",
          "En Imperial, añade más unidades de pólvora y mejora a Conquistador Élite"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Infantería", "Civilizaciones sin Escaramuzadores", "Unidades lentas"],
      weakAgainst: ["Escaramuzadores", "Caballería pesada", "Civilizaciones con bonificaciones anti-pólvora"]
    },
    similarCivs: [
      {
        id: "turks",
        name: "Turcos",
        reason: "Especialistas en unidades de pólvora"
      },
      {
        id: "portuguese",
        name: "Portugueses",
        reason: "Tecnología naval y de pólvora avanzada"
      },
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Árbol tecnológico amplio y monjes fuertes"
      }
    ]
  },
  
  malay: {
    id: "malay",
    name: "Malayos",
    categories: ["Naval", "Infantería", "Boom Económico", "Unidad Única", "Rush"],
    description: "Civilización isleña del sudeste asiático con economía acelerada, unidades marítimas fuertes y guerreros con machetes que obligan a infantería enemiga a rendirse.",
    region: "Sudeste Asiático",
    specialty: "Economía y Naval",
    image: "/assets/malayos.webp",
    difficulty: "Intermedio",
    playstyle: "Boom-Presión",
    quickGuide: {
      strengths: "Avance de edad ultra rápido, pescadores infinitos y unidades de batalla rápidas y económicas.",
      strategy: "Llega a la siguiente edad más rápido que tu enemigo para obtener ventaja tecnológica y utiliza tu economía superior para abrumar con unidades económicas.",
      tips: "Aprovecha tu ventaja de velocidad de avance para ser el primero en cada edad. Utiliza Guerreros con Machete para convertir infantería enemiga en la Edad Imperial."
    },
    bonuses: [
      "Avanzan de edad 66% más rápido",
      "Pescadores pueden recolectar peces infinitamente",
      "Muelle +100% línea de visión",
      "Infantería cuesta -40% en Edad de los Castillos",
      "Las mejoras de edad afectan a los edificios antiguos automáticamente",
      "Los saguíes (monos) revelan posición de animales salvajes"
    ],
    uniqueUnits: [
      {
        name: "Guerrero con Machete",
        description: "Infantería que obliga a unidades de infantería enemigas a rendirse",
        strengths: ["Convierte infantería enemiga", "Económico", "Efectivo contra unidades amontonadas"],
        weaknesses: ["Débil contra arqueros y caballería", "Corto alcance", "Necesita microgestión"]
      },
      {
        name: "Barco de Fuego Malayo",
        description: "Barco explosivo con largo alcance",
        strengths: ["Gran alcance", "Daño en área", "Efectivo contra flotas agrupadas"],
        weaknesses: ["Frágil", "Costoso", "Requiere microgestión"]
      }
    ],
    uniqueTechs: [
      {
        name: "Thalassocracy",
        age: "Edad de los Castillos",
        description: "Docks se convierten en Puertos (pueden disparar flechas)",
        cost: "300 Madera, 200 Oro"
      },
      {
        name: "Forced Levy",
        age: "Edad Imperial",
        description: "Guerreros con Machete no cuestan oro",
        cost: "850 Alimento, 500 Oro"
      }
    ],
    teamBonus: "Docks +100% PV",
    strategies: [
      {
        title: "Rush de Avance de Edad",
        description: "Aprovecha la velocidad de avance para presionar en edades tempranas",
        steps: [
          "Avanza a la Edad Feudal extremadamente rápido (66% más rápido)",
          "Construye edificios militares durante la transición",
          "Presiona con unidades de la Edad Feudal mientras tu enemigo aún está en Edad Oscura",
          "Continúa avanzando rápido a la Edad de los Castillos",
          "Añade infantería económica (-40% coste) para mantener la presión",
          "Mantén la ventaja tecnológica en cada edad"
        ]
      },
      {
        title: "Boom Pesquero Imperial",
        description: "Utiliza la pesca infinita y los docks defensivos para una economía marina dominante",
        steps: [
          "Construye Docks temprano y maximiza la recolección de pesca",
          "Aprovecha la recolección infinita de peces con muchos pescadores",
          "Investiga Thalassocracy para convertir tus Docks en estructuras defensivas",
          "Controla el mar con Barcos de Fuego Malayos",
          "Avanza rápido a la Edad Imperial gracias a tu economía fuerte",
          "Utiliza Guerreros con Machete (sin coste de oro) para dominar en tierra"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Civilizaciones de desarrollo lento", "Infantería enemiga", "Flotas navales"],
      weakAgainst: ["Caballería", "Arqueros", "Ataques tempranos antes de poder avanzar de edad"]
    },
    similarCivs: [
      {
        id: "khmer",
        name: "Jemeres",
        reason: "Civilización del sudeste asiático con economía fuerte"
      },
      {
        id: "vikings",
        name: "Vikingos",
        reason: "Economía naval poderosa"
      },
      {
        id: "persians",
        name: "Persas",
        reason: "Economía que se fortalece con el avance de edades"
      }
    ]
  },
  
  italians: {
    id: "italians",
    name: "Italianos",
    categories: ["Arqueros", "Naval", "Boom Económico", "Unidad Única"],
    description: "Civilización mediterránea con tecnologías económicas, unidades navales avanzadas y unidades de pólvora especializadas, representando a las potencias comerciales italianas medievales.",
    region: "Europa Mediterránea",
    specialty: "Naval y Arqueros",
    image: "/assets/italianos.webp",
    difficulty: "Intermedio",
    playstyle: "Económico-Naval",
    quickGuide: {
      strengths: "Tecnologías de edad más baratas, unidades navales con armadura mejorada, y economía avanzada con descuentos en minería y madera.",
      strategy: "Desarrolla una economía avanzada y versátil. En mapas de agua domina con Galeazas y en tierra utiliza Ballesteros con Genoveses en edades posteriores.",
      tips: "Avanza de edad económicamente y utiliza la Imprenta para una ventaja tecnológica. En agua, las Galeazas son devastadoras contra otras flotas."
    },
    bonuses: [
      "Avanzar de edad cuesta -15% recursos",
      "Tecnologías de Herrería, Galería de Tiro, Cuartel y Dock cuestan -50% en Imperial",
      "Pescadores cuesta -15%",
      "Campamento Minero, Aserradero y Molino cuestan -33%",
      "Unidades navales +1 armadura por edad (desde Feudal)",
      "Condottiero disponible en cuarteles en Imperial (cuando hay aliados)"
    ],
    uniqueUnits: [
      {
        name: "Genovés",
        description: "Arquero de infantería especializado contra caballería",
        strengths: ["Fuerte contra caballería", "Disparo rápido", "Buena resistencia"],
        weaknesses: ["Corto alcance", "Débil contra infantería", "Requiere masa crítica"]
      },
      {
        name: "Condottiero",
        description: "Infantería anti-pólvora rápida (disponible para aliados)",
        strengths: ["Resistente a daño de pólvora", "Movimiento rápido", "Efectivo contra unidades de pólvora"],
        weaknesses: ["Vulnerable a arqueros", "Débil contra otra infantería", "Requiere aliados para producción masiva"]
      }
    ],
    uniqueTechs: [
      {
        name: "Pavise",
        age: "Edad de los Castillos",
        description: "Ballestas, Genoveses y Condottieros +1/+1 armadura",
        cost: "300 Madera, 150 Oro"
      },
      {
        name: "Silk Road",
        age: "Edad Imperial",
        description: "Comercio cuesta -50% oro",
        cost: "500 Alimento, 300 Oro"
      }
    ],
    teamBonus: "Condottieros disponibles en Cuarteles (contra civilizaciones con pólvora)",
    strategies: [
      {
        title: "Boom Económico con Transiciones Rápidas",
        description: "Aprovecha el descuento en avances de edad y tecnologías para un desarrollo acelerado",
        steps: [
          "Utiliza el descuento de 15% para avances rápidos entre edades",
          "Construye edificios económicos temprano aprovechando su descuento",
          "Llega a la Edad de los Castillos y establece una economía sólida",
          "Avanza a la Edad Imperial con el descuento y aprovecha las tecnologías a mitad de precio",
          "Produce Genoveses desde Castillos contra civilizaciones de caballería",
          "Complementa con Ballesteros o Condottieros contra unidades de pólvora"
        ]
      },
      {
        title: "Dominio Naval con Galeazas",
        description: "Utiliza las unidades navales con armadura mejorada para controlar el agua",
        steps: [
          "Construye varios Docks y produce pescadores económicos",
          "Transiciona a Galeras con armadura mejorada en la Edad Feudal",
          "Controla recursos marítimos clave y expande tu economía pesquera",
          "En la Edad de los Castillos, actualiza a Galeones con armadura superior",
          "Añade Galeazas (unidad única naval) para maximizar tu dominio naval",
          "Establece rutas comerciales marítimas seguras con tus aliados"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Caballería", "Unidades de pólvora", "Flotas navales"],
      weakAgainst: ["Infantería pesada", "Arqueros de largo alcance", "Monjes"]
    },
    similarCivs: [
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Versatilidad y tecnologías económicas"
      },
      {
        id: "portuguese",
        name: "Portugueses",
        reason: "Enfoque en naval y tecnologías"
      },
      {
        id: "spanish",
        name: "Españoles",
        reason: "Bonificaciones económicas y unidades especializadas"
      }
    ]
  },
  
  khmer: {
    id: "khmer",
    name: "Jemeres",
    categories: ["Asedio", "Boom Económico", "Unidad Única", "Fast Castle"],
    description: "Civilización del sudeste asiático conocida por sus poderosos elefantes de batalla, unidades de asedio avanzadas y una economía altamente eficiente y flexible.",
    region: "Sudeste Asiático",
    specialty: "Elefantes y Asedio",
    image: "/assets/jemeres.webp",
    difficulty: "Difícil",
    playstyle: "Boom-Agresivo",
    quickGuide: {
      strengths: "No requieren edificios para avanzar de edad, elefantes más rápidos y poderosos, y agricultores ultra eficientes sin necesidad de depositar recursos.",
      strategy: "Desarrolla una economía masiva con agricultores eficientes y transiciona a elefantes y unidades de asedio para aplastar al enemigo en batallas frontales.",
      tips: "Aprovecha la flexibilidad de no necesitar edificios para avanzar. Tus agricultores deben estar siempre activos. Los Elefantes Ballesteros pueden dominar el campo de batalla en masa."
    },
    bonuses: [
      "No necesitan edificios para avanzar de edad o construir otros edificios",
      "Las granjas proporcionan alimento ilimitado",
      "Los agricultores no necesitan depositar recursos",
      "Elefantes de Batalla se mueven 10% más rápido",
      "Los aldeanos pueden guarecerse en casas",
      "Unidades militares (excepto elefantes y asedio) +15% PV"
    ],
    uniqueUnits: [
      {
        name: "Elefante Ballestero",
        description: "Elefante montado con ballesta, combinando poder y ataque a distancia",
        strengths: ["Ataque a distancia", "Alta resistencia", "Efectivo contra grupos de unidades"],
        weaknesses: ["Extremadamente costoso", "Vulnerable a piqueros y monjes", "Movimiento lento"]
      }
    ],
    uniqueTechs: [
      {
        name: "Enredaderas Tropicales",
        age: "Edad de los Castillos",
        description: "Elefantes de Batalla y Elefantes Ballesteros +1 alcance",
        cost: "300 Alimento, 200 Oro"
      },
      {
        name: "Doble Ballesta",
        age: "Edad Imperial",
        description: "Escorpiones y Elefantes Ballesteros disparan dos proyectiles",
        cost: "700 Madera, 400 Oro"
      }
    ],
    teamBonus: "Escorpiones +1 alcance",
    strategies: [
      {
        title: "Fast Castle Skip",
        description: "Utiliza la habilidad de saltear requisitos de edificios para una Edad de los Castillos ultra rápida",
        steps: [
          "Avanza directamente a la Edad Feudal sin construir edificios",
          "Salta directamente a la Edad de los Castillos (sin necesidad de edificios de la Edad Feudal)",
          "Construye varios Centros Urbanos para un boom económico",
          "Establece muchas granjas con alimento ilimitado alrededor de los Centros",
          "Construye un Castillo y produce Elefantes Ballesteros",
          "Complementa con escorpiones y unidades de asedio en Imperial"
        ]
      },
      {
        title: "Elefantes y Escorpiones de Doble Disparo",
        description: "Crea un ejército lento pero imparable de elefantes y escorpiones con doble proyectil",
        steps: [
          "Desarrolla una economía masiva basada en agricultores eficientes",
          "Avanza a la Edad Imperial con recursos acumulados",
          "Construye varios Castillos y Talleres de Asedio",
          "Investiga Doble Ballesta",
          "Produce una combinación de Elefantes Ballesteros y Escorpiones Pesados",
          "Añade algunas unidades de infantería para proteger contra piqueros"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Arqueros", "Infantería (con Elefantes)", "Caballería"],
      weakAgainst: ["Piqueros", "Monjes", "Camellos"]
    },
    similarCivs: [
      {
        id: "persians",
        name: "Persas",
        reason: "Acceso a Elefantes de Guerra"
      },
      {
        id: "malay",
        name: "Malayos",
        reason: "Civilización del sudeste asiático con economía fuerte"
      },
      {
        id: "celts",
        name: "Celtas",
        reason: "Especialistas en unidades de asedio"
      }
    ]
  },
  
  lithuanians: {
    id: "lithuanians",
    name: "Lituanos",
    categories: ["Caballería", "Monjes", "Rush", "Unidad Única", "Fast Castle"],
    description: "Civilización europea del este con caballería poderosa, monjes efectivos y un imperio que se fortalece con las reliquias, representando al Gran Ducado de Lituania.",
    region: "Europa Oriental",
    specialty: "Caballería y Monjes",
    image: "/assets/lituanos.webp",
    difficulty: "Intermedio",
    playstyle: "Agresivo-Religioso",
    quickGuide: {
      strengths: "Caballería con ataque adicional por reliquia, aldeanos más resistentes contra conversión, y recursos iniciales adicionales.",
      strategy: "Prioriza la recolección temprana de reliquias para potenciar tu caballería. Desarrolla una economía inicial fuerte y presiona con caballería mejorada por reliquias.",
      tips: "Consigue al menos 3-4 reliquias para maximizar el potencial de tu caballería. Construye Colmenas para alimento adicional en la Edad Imperial."
    },
    bonuses: [
      "Empieza con +150 alimento",
      "Colmenas pueden construirse en Imperial (generan alimento pasivamente)",
      "Aldeanos +3 armadura contra conversión",
      "Monasterios trabajan 20% más rápido",
      "Cada reliquia da +1 ataque para unidades de caballería (hasta +4)"
    ],
    uniqueUnits: [
      {
        name: "Leitis",
        description: "Caballería pesada que ignora toda armadura",
        strengths: ["Ignora armadura enemiga", "Efectivo contra unidades con alta armadura", "Caballería potente"],
        weaknesses: ["Alto costo", "Vulnerable a piqueros y camellos", "Sin bonificaciones contra arqueros"]
      }
    ],
    uniqueTechs: [
      {
        name: "Torre de Escudos",
        age: "Edad de los Castillos",
        description: "Spearmen y Skirmishers +2 pierce armor",
        cost: "200 Alimento, 300 Oro"
      },
      {
        name: "Colmenas",
        age: "Edad Imperial",
        description: "Colmenas generan +500 alimento",
        cost: "500 Alimento, 300 Oro"
      }
    ],
    teamBonus: "Monasterios +3 línea de visión",
    strategies: [
      {
        title: "Rush de Caballeros con Reliquias",
        description: "Obtén reliquias temprano para potenciar tu caballería en la Edad de los Castillos",
        steps: [
          "Utiliza el bono de +150 alimento para una economía inicial sólida",
          "Avanza rápidamente a la Edad de los Castillos",
          "Construye un Monasterio y entrena Monjes para conseguir reliquias",
          "Produce Caballeros con ataque mejorado por cada reliquia",
          "Expande tu economía mientras presionas con caballería mejorada",
          "Transiciona a Paladines o Leitis en la Edad Imperial"
        ]
      },
      {
        title: "Leitis y Monjes",
        description: "Combina unidades que ignoran armadura con soporte religioso",
        steps: [
          "Desarrolla una economía equilibrada y asegura reliquias",
          "Avanza a la Edad de los Castillos y construye un Castillo",
          "Produce Leitis que ignorarán la armadura enemiga",
          "Añade Monjes para curación y conversión",
          "Protege a tus Monjes y reliquias con Skirmishers mejorados con Torre de Escudos",
          "En Imperial, construye Colmenas para alimento adicional y mantén producción constante"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Unidades con alta armadura", "Infantería", "Arqueros"],
      weakAgainst: ["Piqueros", "Camellos", "Unidades con ataque a distancia"]
    },
    similarCivs: [
      {
        id: "franks",
        name: "Francos",
        reason: "Fuerte caballería y bonificaciones"
      },
      {
        id: "poles",
        name: "Polacos",
        reason: "Civilización de Europa del Este con caballería especial"
      },
      {
        id: "byzantine",
        name: "Bizantinos",
        reason: "Unidades versátiles y monjes fuertes"
      }
    ]
  },
  
  portuguese: {
    id: "portuguese",
    name: "Portugueses",
    categories: ["Naval", "Boom Económico", "Unidad Única", "Fast Castle"],
    description: "Civilización naval y de exploración con tecnología avanzada de pólvora, economía eficiente en oro y unidades navales especializadas.",
    region: "Europa Occidental",
    specialty: "Naval y Tecnología",
    image: "/assets/portugueses.webp",
    difficulty: "Intermedio",
    playstyle: "Económico-Naval",
    quickGuide: {
      strengths: "Todas las unidades y tecnologías cuestan -20% oro, barcos con mayor PV, y tecnología avanzada en unidades navales y de pólvora.",
      strategy: "Desarrolla una economía eficiente en oro y domina los mares con carabelas y cañoneras, mientras utilizas feitorias para generar oro infinito en juegos largos.",
      tips: "Tus unidades de pólvora son más económicas y efectivas. En mapas de agua, las Carabelas pueden superar a cualquier otra unidad naval. Construye Feitorias en juegos largos."
    },
    bonuses: [
      "Todas las unidades y tecnologías cuestan -20% oro",
      "Barcos +10% PV",
      "Los complementos tecnológicos gratuitos se desarrollan automáticamente",
      "Línea de visión por niebla de guerra se revela para tu equipo",
      "Las unidades de pólvora tienen +15% HP"
    ],
    uniqueUnits: [
      {
        name: "Carabela",
        description: "Barco de guerra con múltiples cañones que dispara rápidamente",
        strengths: ["Fuego rápido", "Mayor PV", "Disparo en movimiento"],
        weaknesses: ["Alto costo", "Vulnerable a barcos de fuego", "Requiere micro para maximizar eficiencia"]
      },
      {
        name: "Órgano Naval",
        description: "Unidad naval de asedio con disparo en área",
        strengths: ["Daño en área", "Largo alcance", "Efectivo contra flotas agrupadas"],
        weaknesses: ["Movimiento lento", "Extremadamente costoso", "Vulnerable a unidades rápidas"]
      }
    ],
    uniqueTechs: [
      {
        name: "Carrack",
        age: "Edad de los Castillos",
        description: "Barcos +1/+1 armadura",
        cost: "250 Madera, 200 Oro"
      },
      {
        name: "Arquebus",
        age: "Edad Imperial",
        description: "Unidades de pólvora disparan con precisión mientras se mueven",
        cost: "700 Alimento, 400 Oro"
      }
    ],
    teamBonus: "Línea de visión compartida gratuita",
    strategies: [
      {
        title: "Dominio Naval con Carabelas",
        description: "Controla los mares con barcos mejorados y Carabelas especializadas",
        steps: [
          "Construye Docks temprano y establece una economía marítima",
          "Aprovecha los barcos con +10% PV para controlar recursos de pesca",
          "Avanza a la Edad de los Castillos y construye un Castillo",
          "Produce Carabelas para dominar el mar",
          "Investiga Carrack para mejorar la resistencia de tus barcos",
          "En Imperial, añade Órganos Navales para apoyo contra flotas enemigas agrupadas"
        ]
      },
      {
        title: "Pólvora Avanzada con Arquebus",
        description: "Utiliza unidades de pólvora precisas y económicas para dominar en tierra",
        steps: [
          "Aprovecha el descuento de 20% en oro para una economía eficiente",
          "Avanza a la Edad Imperial mientras aseguras oro abundante",
          "Produce Cañones de Mano y otras unidades de pólvora (cuestan menos oro)",
          "Investiga Arquebus para permitir que tus unidades de pólvora disparen mientras se mueven",
          "Añade Bombardas y Cañones de Asedio para completar tu ejército",
          "Construye Feitorias en juegos largos para oro infinito"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Unidades navales", "Edificios", "Unidades lentas"],
      weakAgainst: ["Caballería rápida", "Escaramuzadores", "Civilizaciones con bonos anti-pólvora"]
    },
    similarCivs: [
      {
        id: "spanish",
        name: "Españoles",
        reason: "Especialistas en unidades de pólvora"
      },
      {
        id: "italians",
        name: "Italianos",
        reason: "Bonificaciones navales y tecnológicas"
      },
      {
        id: "turks",
        name: "Turcos",
        reason: "Especialización en unidades de pólvora"
      }
    ]
  },
  
  poles: {
    id: "poles",
    name: "Polacos",
    categories: ["Caballería", "Boom Económico", "Unidad Única"],
    description: "Civilización de Europa Oriental especializada en caballería única y recolección eficiente de recursos, representando al Reino de Polonia medieval.",
    region: "Europa Oriental",
    specialty: "Caballería y Economía",
    image: "/assets/polacos.webp",
    difficulty: "Intermedio",
    playstyle: "Económico-Versátil",
    quickGuide: {
      strengths: "Graneros que generan oro, caballería única con armas anti-armadura, y minería de piedra ultra eficiente.",
      strategy: "Desarrolla una economía fuerte con graneros que generan oro. Utiliza Obuchs para deshacer la armadura enemiga y Winged Hussars para aplastar unidades de asedio.",
      tips: "Construye graneros cerca de granjas para maximizar la generación de oro. Tus Winged Hussars pueden destruir unidades de asedio instantáneamente. Los Obuchs son devastadores contra unidades con alta armadura."
    },
    bonuses: [
      "Graneros proporcionan oro además de alimento",
      "Las mejoras de caballería y tecnologías de recolección cuestan -50% piedra",
      "Aldeanos mineros de piedra +20% eficiencia",
      "Winged Hussar disponible en Imperial (reemplaza a Hussar)",
      "Caballería +1 ataque contra arqueros en Feudal, +2 en Castillos, +3 en Imperial"
    ],
    uniqueUnits: [
      {
        name: "Obuch",
        description: "Infantería que reduce armadura enemiga con cada golpe",
        strengths: ["Reduce armadura permanentemente", "Efectivo contra unidades blindadas", "Buen ratio coste-eficiencia"],
        weaknesses: ["Movimiento lento", "Vulnerable a arqueros", "Sin bonificaciones contra caballería"]
      },
      {
        name: "Winged Hussar",
        description: "Caballería ligera mejorada que destruye unidades de asedio instantáneamente",
        strengths: ["Destruye asedio instantáneamente", "Movimiento rápido", "Económico (no requiere oro)"],
        weaknesses: ["Débil contra piqueros", "Baja armadura", "Sin ventajas contra arqueros"]
      }
    ],
    uniqueTechs: [
      {
        name: "Lechitic Legacy",
        age: "Edad de los Castillos",
        description: "Caballería ligera genera oro al matar unidades",
        cost: "350 Alimento, 350 Oro"
      },
      {
        name: "Szlachta Privileges",
        age: "Edad Imperial",
        description: "Caballeros y Winged Hussars +1 ataque por cada ataque de monasterio realizado",
        cost: "750 Alimento, 450 Oro"
      }
    ],
    teamBonus: "Exploradores +2 línea de visión",
    strategies: [
      {
        title: "Boom Económico con Graneros",
        description: "Maximiza la generación de oro con granjas y graneros",
        steps: [
          "Construye graneros cerca de grupos de granjas",
          "Maximiza la producción de alimento y generación de oro simultáneamente",
          "Aprovecha la eficiencia en minería de piedra para castillos y centros urbanos",
          "Avanza a la Edad de los Castillos y construye un Castillo",
          "Produce Obuchs para contrarrestar unidades con armadura",
          "Transiciona a Winged Hussars en la Edad Imperial para raids"
        ]
      },
      {
        title: "Caballería Anti-Arquero",
        description: "Utiliza caballería con bonificación contra arqueros para contrarrestar civilizaciones de arqueros",
        steps: [
          "Avanza a la Edad Feudal y construye un Establo",
          "Entrena Exploradores con bonificación contra arqueros",
          "Presiona a civilizaciones de arqueros temprano",
          "En la Edad de los Castillos, actualiza a Caballeros con mayor bonificación",
          "Investiga Lechitic Legacy para generar oro con tus unidades de caballería",
          "En Imperial, utiliza Winged Hussars contra unidades de asedio y Obuchs contra infantería"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Arqueros", "Unidades de asedio", "Unidades con alta armadura"],
      weakAgainst: ["Piqueros", "Camellos", "Monjes"]
    },
    similarCivs: [
      {
        id: "lithuanians",
        name: "Lituanos",
        reason: "Civilización de Europa del Este con caballería fuerte"
      },
      {
        id: "franks",
        name: "Francos",
        reason: "Especialistas en caballería con bonificaciones"
      },
      {
        id: "magyars",
        name: "Magiares",
        reason: "Caballería especializada con bonificaciones específicas"
      }
    ]
  },
  
  sicilians: {
    id: "sicilians",
    name: "Sicilianos",
    categories: ["Infantería", "Defensivo", "Boom Económico", "Unidad Única"],
    description: "Civilización mediterránea defensiva con unidades resistentes al daño de bonificación y una economía agrícola fuerte, representando el Reino Normando de Sicilia.",
    region: "Europa Mediterránea",
    specialty: "Infantería y Defensa",
    image: "/assets/sicilianos.webp",
    difficulty: "Intermedio",
    playstyle: "Defensivo-Económico",
    quickGuide: {
      strengths: "Granjas construyen más rápido y proporcionan oro, unidades militares reciben 50% menos daño de bonificación, y Castillos se construyen más rápido.",
      strategy: "Desarrolla una economía sólida con granjas eficientes, aprovecha la resistencia de tus unidades a bonificaciones, y utiliza tus castillos para una base defensiva fuerte.",
      tips: "Tus unidades son excelentes contra civilizaciones que dependen de bonos contra-unidades. La Donjón te permite producir Sargentos incluso sin un Castillo."
    },
    bonuses: [
      "Granjas se construyen 100% más rápido y proporcionan 10% más de alimento",
      "Las granjas devuelven 33% de su costo en madera cuando se agota el alimento",
      "Los aldeanos transportan +10 recursos",
      "Castillos y Ciudadelas se construyen 100% más rápido",
      "Las unidades militares reciben 50% menos daño de bonificación"
    ],
    uniqueUnits: [
      {
        name: "Sargento",
        description: "Infantería versátil que puede construir Donjones",
        strengths: ["Puede construir Donjones", "Versatilidad", "Resistente a daño de bonificación"],
        weaknesses: ["Costoso en oro", "Sin bonificaciones especiales", "Requiere Castle/Donjon"]
      }
    ],
    uniqueTechs: [
      {
        name: "Primero de la Primer Cruzada",
        age: "Edad de los Castillos",
        description: "Cada Centro Urbano genera un grupo de 7 Sargentos una vez",
        cost: "400 Alimento, 300 Oro"
      },
      {
        name: "Derechos de Tierras Alodiales",
        age: "Edad Imperial",
        description: "Las granjas generan oro además de alimento",
        cost: "850 Alimento, 200 Oro"
      }
    ],
    teamBonus: "Donjones y Torres +2 ataque contra caballería",
    strategies: [
      {
        title: "Economía Agrícola y Bonus de la Primera Cruzada",
        description: "Utiliza granjas eficientes y la tecnología única para una fuerte economía y ejército",
        steps: [
          "Construye granjas rápidamente (100% más rápido)",
          "Establece Centros Urbanos adicionales en la Edad de los Castillos",
          "Investiga Primero de la Primera Cruzada",
          "Obtén instantáneamente 7 Sargentos por cada Centro Urbano",
          "Utiliza estos Sargentos para defender o presionar",
          "En Imperial, investiga Derechos de Tierras Alodiales para generar oro de tus granjas"
        ]
      },
      {
        title: "Defensa con Donjones y Counter-Units",
        description: "Aprovecha la resistencia a daño de bonificación para contrarrestar las unidades especializadas enemigas",
        steps: [
          "Construye Donjones para proteger recursos clave",
          "Entrena Sargentos desde los Donjones",
          "Utiliza unidades que normalmente serían contra-atacadas por las unidades enemigas",
          "Aprovecha la reducción del 50% del daño de bonificación",
          "Construye Castillos rápidamente (100% más rápido) para expandir tu territorio",
          "Produce una combinación de unidades según lo que enfrentes"
        ]
      }
    ],
    counters: {
      strongAgainst: ["Unidades con bonificaciones específicas", "Civilizaciones mono-unidad", "Arqueros"],
      weakAgainst: ["Unidades sin bonificaciones de daño", "Armas de asedio", "Superioridad numérica"]
    },
    similarCivs: [
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Estilo defensivo y unidades contra-unidades"
      },
      {
        id: "teutons",
        name: "Teutones",
        reason: "Infantería fuerte y defensiva"
      },
      {
        id: "italians",
        name: "Italianos",
        reason: "Civilización mediterránea con bonificaciones económicas"
      }
    ]
  }
};