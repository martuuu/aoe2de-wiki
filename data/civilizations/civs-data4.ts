import { CivilizationData } from "./types";

export const civilizationsData4: Record<string, CivilizationData> = {
  slavs: {
    id: "slavs",
    name: "Eslavos",
    description:
      "Civilización de Europa Oriental con infantería poderosa, economía agrícola superior y unidades de asedio eficaces, representando a los pueblos eslavos medievales.",
    region: "Europa Oriental",
    specialty: "Infantería y Economía",
    image: "/assets/eslavos.webp",
    difficulty: "Intermedio",
    playstyle: "Económico-Agresivo",
    categories: ["Infantería", "Asedio", "Boom Económico", "Unidad Única"],
    quickGuide: {
      strengths:
        "Agricultores ultra eficientes (+15%), infantería con mayor velocidad de ataque y unidades de asedio más económicas, permitiendo una economía fuerte y ejércitos poderosos.",
      strategy:
        "Desarrolla una base económica sólida con granjas eficientes, seguido de una presión constante con infantería económica y máquinas de asedio de apoyo.",
      tips: "Posiciona los centros urbanos cerca de recursos agrícolas para maximizar el rendimiento de tus agricultores superiores. Tu infantería ataca 15% más rápido, lo que les da ventaja significativa en combates directos.",
    },
    bonuses: [
      "Agricultores trabajan 15% más rápido",
      "Unidades militares (excepto asedio) +5% PV en Edad Feudal, +10% en Castillos, +15% en Imperial",
      "Infantería ataca 15% más rápido desde la Edad Feudal",
      "Tecnologías de asedio cuestan -15%",
      "Los edificios pueden ser guarnecidos con el doble de unidades",
    ],
    uniqueUnits: [
      {
        name: "Boyar",
        description: "Caballería pesada con alta armadura",
        strengths: [
          "Armadura excepcional",
          "Alto ataque",
          "Resistente a proyectiles",
        ],
        weaknesses: [
          "Movimiento lento",
          "Costoso",
          "Vulnerable a infantería anti-caballería",
        ],
      },
    ],
    uniqueTechs: [
      {
        name: "Ortodoxia",
        age: "Edad de los Castillos",
        description: "Monjes +3/+3 armadura",
        cost: "200 Alimento, 300 Oro",
      },
      {
        name: "Druzhina",
        age: "Edad Imperial",
        description: "Infantería inflige 5 de daño en área",
        cost: "950 Alimento, 600 Oro",
      },
    ],
    teamBonus: "Edificios militares proporcionan +5 población",
    strategies: [
      {
        title: "Boom Agrícola Imperial",
        description:
          "Aprovecha la eficiencia agrícola para un desarrollo económico superior",
        steps: [
          "Prioriza la construcción de granjas alrededor de los Centros Urbanos",
          "Aprovecha el bono de +15% en eficiencia de agricultores",
          "Desarrolla una economía sólida basada en alimento",
          "Avanza a la Edad de los Castillos y añade más Centros Urbanos",
          "Construye Cuarteles y Talleres de Asedio",
          "En Imperial, presiona con infantería masiva apoyada por unidades de asedio económicas",
        ],
      },
      {
        title: "Infantería y Asedio",
        description:
          "Combina infantería de ataque rápido con unidades de asedio económicas",
        steps: [
          "Desarrolla una economía equilibrada con énfasis en granjas",
          "Avanza a la Edad de los Castillos",
          "Produce Hombres de Armas que atacan 15% más rápido",
          "Añade unidades de asedio aprovechando su descuento de 15%",
          "Investiga Druzhina en Imperial para daño en área con tu infantería",
          "Complementa con Boyars para proteger tus unidades de asedio de la caballería enemiga",
        ],
      },
    ],
    counters: {
      strongAgainst: ["Arqueros", "Edificios", "Unidades con baja armadura"],
      weakAgainst: [
        "Caballería de élite",
        "Arqueros bien microgestionados",
        "Civilizaciones con infantería superior",
      ],
    },
    similarCivs: [
      {
        id: "celts",
        name: "Celtas",
        reason: "Infantería poderosa y unidades de asedio fuertes",
      },
      {
        id: "teutons",
        name: "Teutones",
        reason: "Infantería resistente y economía fuerte",
      },
      {
        id: "goths",
        name: "Godos",
        reason: "Especialización en infantería masiva",
      },
    ],
  },

  bohemians: {
    id: "bohemians",
    name: "Bohemios",
    description:
      "Civilización de Europa Central con tecnologías avanzadas de pólvora, monjes superiores y defensas fuertes, representando al Reino medieval de Bohemia y los husitas.",
    region: "Europa Central",
    specialty: "Monjes y Pólvora",
    image: "/assets/bohemios.webp",
    difficulty: "Difícil",
    playstyle: "Defensivo-Técnico",
    categories: ["Monjes", "Unidad Única", "Defensivo", "Boom Económico"],
    quickGuide: {
      strengths:
        "Tecnologías de universidad y monasterio gratuitas, mejoras de minería aplicables a oro y piedra, y unidades de pólvora avanzadas con mayor alcance.",
      strategy:
        "Desarrolla una economía técnicamente avanzada con minería eficiente, establece una defensa sólida con unidades de pólvora y utiliza monjes con tecnologías completas para control religioso.",
      tips: "Aprovecha las tecnologías gratuitas de universidad y monasterio para obtener una ventaja tecnológica sin gastar recursos. Tus minas de oro y piedra comparten mejoras, maximizando la eficiencia de tus aldeanos.",
    },
    bonuses: [
      "Las mejoras de minería afectan tanto al oro como a la piedra",
      "Todas las tecnologías de Universidad y Monasterio son gratuitas",
      "Mercado cuesta -100 madera",
      "Herrerías y Universidades trabajan 80% más rápido",
      "Los Centros Urbanos pueden disparar flechas desde la Edad Feudal",
      "Acceso a Husita, una unidad anti-caballería temprana",
    ],
    uniqueUnits: [
      {
        name: "Husita",
        description: "Unidad anti-caballería disponible en Edad Feudal",
        strengths: [
          "Disponible en Feudal",
          "Fuerte contra caballería",
          "Bonus contra monjes",
        ],
        weaknesses: [
          "Débil contra infantería",
          "Bajo ataque general",
          "Vulnerable a arqueros",
        ],
      },
      {
        name: "Houfnice",
        description: "Bombarda mejorada con más alcance y daño",
        strengths: [
          "Alcance extendido",
          "Alto daño",
          "Efectivo contra edificios y unidades",
        ],
        weaknesses: [
          "Muy costoso",
          "Movimiento lento",
          "Vulnerable a unidades rápidas",
        ],
      },
    ],
    uniqueTechs: [
      {
        name: "Wagenburg Tactics",
        age: "Edad de los Castillos",
        description: "Unidades de pólvora +1 alcance",
        cost: "300 Alimento, 300 Oro",
      },
      {
        name: "Hussite Reforms",
        age: "Edad Imperial",
        description:
          "Monjes reciben +3/+3 armadura. Tecnologías de Monasterio cuestan -50%",
        cost: "750 Alimento, 550 Oro",
      },
    ],
    teamBonus: "Mercados trabajan 80% más rápido",
    strategies: [
      {
        title: "Defensa con Tecnología Superior",
        description:
          "Aprovecha las tecnologías gratuitas para una ventaja defensiva",
        steps: [
          "Construye un Mercado económico en la Edad Feudal",
          "Investiga mejoras de minería para oro y piedra",
          "Construye Universidad y obtén tecnologías defensivas gratuitas",
          "Utiliza los Centros Urbanos con flechas como parte de tu defensa",
          "Entrena Husitas para contrarrestar caballería enemiga",
          "Añade Monasterio para tecnologías religiosas gratuitas y conversiones",
        ],
      },
      {
        title: "Pólvora Avanzada y Control Religioso",
        description:
          "Combina unidades de pólvora de largo alcance con monjes blindados",
        steps: [
          "Desarrolla una economía equilibrada con énfasis en oro y piedra",
          "Avanza a la Edad de los Castillos y construye un Monasterio",
          "Investiga todas las tecnologías de Monasterio (gratuitas)",
          "Añade unidades de pólvora cuando estén disponibles",
          "Investiga Wagenburg Tactics para extender su alcance",
          "En Imperial, añade Houfnices y monjes con Hussite Reforms para armadura superior",
        ],
      },
    ],
    counters: {
      strongAgainst: ["Caballería", "Edificios", "Unidades agrupadas"],
      weakAgainst: [
        "Mangudais",
        "Caballería rápida",
        "Arqueros bien microgestionados",
      ],
    },
    similarCivs: [
      {
        id: "spanish",
        name: "Españoles",
        reason: "Unidades de pólvora superiores",
      },
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Monjes fuertes y versatilidad defensiva",
      },
      {
        id: "portuguese",
        name: "Portugueses",
        reason: "Tecnología avanzada y unidades de pólvora",
      },
    ],
  },

  hindustanis: {
    id: "hindustanis",
    name: "Hindustaníes",
    description:
      "Civilización del sur de Asia con camellos superiores, pescadores eficientes y una economía diversificada, representando a los sultanatos musulmanes del subcontinente indio.",
    region: "Sur de Asia",
    specialty: "Camellos y Economía",
    image: "/assets/hindustanies.webp",
    difficulty: "Intermedio",
    playstyle: "Económico-Flexible",
    categories: [
      "Camellos",
      "Arqueros a Caballo",
      "Boom Económico",
      "Unidad Única",
    ],
    quickGuide: {
      strengths:
        "Aldeanos más económicos, pescadores eficientes y camellos extremadamente poderosos con mayor armadura y capacidad contra arqueros.",
      strategy:
        "Desarrolla una economía sólida aprovechando aldeanos económicos y pescadores eficientes, y transiciona a una fuerza de camellos resistentes y arqueros apoyados por unidades únicas anti-infantería.",
      tips: "Tus aldeanos cuestan -10% por edad, permitiendo una expansión económica rápida. Los camellos reciben +1 de armadura contra arqueros, haciéndolos especialmente efectivos contra civilizaciones de arquería.",
    },
    bonuses: [
      "Aldeanos cuestan -10% en Feudal, -15% en Castillos, -20% en Imperial",
      "Pescadores trabajan 15% más rápido y llevan +15 pescado",
      "Exploradores +2 línea de visión",
      "Camellos +1 armadura contra arqueros",
      "Las tecnologías del Molino son gratuitas",
      "Pueden investigar Sultans para compartir oro con aliados",
    ],
    uniqueUnits: [
      {
        name: "Ghulam",
        description: "Infantería anti-infantería con alta velocidad",
        strengths: [
          "Bonus contra infantería",
          "Movimiento rápido",
          "Buena armadura",
        ],
        weaknesses: [
          "Débil contra caballería",
          "Costoso en alimento",
          "Sin bonus contra arqueros",
        ],
      },
      {
        name: "Imperial Camel Rider",
        description: "Versión mejorada del Camello Elite en Edad Imperial",
        strengths: [
          "Extremadamente fuerte contra caballería",
          "Buena armadura",
          "Efectivo en masa",
        ],
        weaknesses: [
          "Vulnerable a piqueros",
          "Alto costo",
          "Débil contra arqueros de élite",
        ],
      },
    ],
    uniqueTechs: [
      {
        name: "Grand Trunk Road",
        age: "Edad de los Castillos",
        description:
          "Recibe +50 oro y alimento por cada tecnología del Molino investigada",
        cost: "300 Madera, 200 Oro",
      },
      {
        name: "Sultans",
        age: "Edad Imperial",
        description: "El equipo recibe +10% oro de minería y comercio",
        cost: "400 Alimento, 300 Piedra",
      },
    ],
    teamBonus: "Los aldeanos obtienen +5 contra caballería",
    strategies: [
      {
        title: "Boom Económico con Aldeanos Económicos",
        description:
          "Aprovecha el menor costo de aldeanos para una expansión rápida",
        steps: [
          "Prioriza la producción constante de aldeanos aprovechando su descuento",
          "Investiga las tecnologías del Molino gratuitas",
          "Utiliza Grand Trunk Road para obtener recursos adicionales",
          "Expande tu economía más rápido que tus oponentes",
          "Avanza a la Edad Imperial antes que tu enemigo",
          "Produce Imperial Camel Riders como unidad principal",
        ],
      },
      {
        title: "Camellos y Ghulams",
        description:
          "Combinación de unidades para contrarrestar casi cualquier composición enemiga",
        steps: [
          "Explora el mapa con Exploradores (+2 línea de visión)",
          "Desarrolla una economía equilibrada con aldeanos económicos",
          "Entrena camellos para contrarrestar caballería",
          "Añade Ghulams para combatir infantería enemiga",
          "Complementa con Escaramuzadores contra arqueros",
          "Investiga Sultans en Imperial para beneficiar a tu equipo con oro adicional",
        ],
      },
    ],
    counters: {
      strongAgainst: [
        "Caballería",
        "Infantería estándar",
        "Civilizaciones dependientes de oro",
      ],
      weakAgainst: [
        "Infantería anti-caballería",
        "Arqueros de élite",
        "Monjes",
      ],
    },
    similarCivs: [
      {
        id: "saracens",
        name: "Sarracenos",
        reason: "Camellos fuertes y bonificaciones de mercado",
      },
      {
        id: "berbers",
        name: "Bereberes",
        reason: "Caballería económica y unidades versátiles",
      },
      {
        id: "persians",
        name: "Persas",
        reason: "Caballería fuerte y economía poderosa",
      },
    ],
  },

  dravidians: {
    id: "dravidians",
    name: "Dravidianos",
    description:
      "Civilización del sur de la India con infantería poderosa, tecnologías de madera superiores y unidades a distancia especializadas, representando a los reinos dravidianos.",
    region: "Sur de Asia",
    specialty: "Infantería y Naval",
    image: "/assets/dravidicos.webp",
    difficulty: "Difícil",
    playstyle: "Defensivo-Técnico",
    categories: ["Infantería", "Naval", "Boom Económico", "Unidad Única"],
    quickGuide: {
      strengths:
        "Leñadores ultra eficientes, infantería con armadura extra contra proyectiles y acceso a barcos especializados y tecnologías únicas para bonus de oro.",
      strategy:
        "Desarrolla una economía maderera superior y utiliza infantería resistente como base de tu ejército, complementada con barcos en mapas de agua y unidades a distancia especializadas.",
      tips: "Tus tecnologías de madera son más baratas y efectivas - priorízalas. La infantería recibe +2 armadura contra proyectiles, haciéndola resistente contra ataques de arqueros.",
    },
    bonuses: [
      "Mejoras de madera cuestan -50%",
      "Edificios de madera +20% PV",
      "Infantería +2 armadura contra proyectiles",
      "Pescadores llevan +15 pescado",
      "Llevan +200 de madera",
      "Tecnologías de mercado cuestan -50%",
    ],
    uniqueUnits: [
      {
        name: "Urumi Swordsman",
        description: "Infantería con daño en área",
        strengths: [
          "Daño en área",
          "Efectivo contra unidades agrupadas",
          "Fuerte en masa",
        ],
        weaknesses: [
          "Baja armadura",
          "Alto costo en oro",
          "Vulnerable a arqueros",
        ],
      },
      {
        name: "Thirisadai",
        description: "Barco de guerra de élite con múltiples ataques",
        strengths: ["Ataques múltiples", "Alta resistencia", "Dominio naval"],
        weaknesses: [
          "Alto costo",
          "Producción lenta",
          "Vulnerable a ataques de fuego",
        ],
      },
    ],
    uniqueTechs: [
      {
        name: "Medical Corps",
        age: "Edad de los Castillos",
        description: "Unidades de infantería se regeneran lentamente",
        cost: "300 Alimento, 200 Oro",
      },
      {
        name: "Wootz Steel",
        age: "Edad Imperial",
        description:
          "Unidades de infantería y Urumi Swordsmen causan +25% de daño",
        cost: "750 Alimento, 650 Oro",
      },
    ],
    teamBonus: "Las empalizadas duran 100% más",
    strategies: [
      {
        title: "Economía Maderera Superior",
        description:
          "Aprovecha las mejoras de madera económicas para desarrollo rápido",
        steps: [
          "Investiga mejoras de madera temprano (cuestan 50% menos)",
          "Construye edificios de madera resistentes (+20% PV)",
          "Utiliza los 200 de madera iniciales extra para acelerar el desarrollo",
          "Coloca pescadores eficientes (+15 pescado) en mapas con agua",
          "Investiga tecnologías de mercado económicas (50% menos)",
          "Desarrolla una base económica sólida basada en madera",
        ],
      },
      {
        title: "Infantería Anti-Arqueros y Naval",
        description:
          "Combina infantería resistente a proyectiles con dominio naval",
        steps: [
          "Entrena infantería que tiene +2 armadura contra proyectiles",
          "Investiga Medical Corps para regeneración en tus unidades",
          "Añade Urumi Swordsmen para daño en área contra unidades agrupadas",
          "En mapas de agua, produce Thirisadais para control naval",
          "Investiga Wootz Steel para aumentar el daño de tu infantería",
          "Mantén la presión con unidades terrestres resistentes y dominio naval",
        ],
      },
    ],
    counters: {
      strongAgainst: [
        "Arqueros",
        "Civilizaciones navales",
        "Unidades agrupadas",
      ],
      weakAgainst: [
        "Caballería pesada",
        "Unidades de asedio",
        "Infantería especializada",
      ],
    },
    similarCivs: [
      {
        id: "malay",
        name: "Malayos",
        reason: "Bonificaciones navales y economía de madera",
      },
      {
        id: "japanese",
        name: "Japoneses",
        reason: "Infantería fuerte y presencia naval",
      },
      {
        id: "vikings",
        name: "Vikingos",
        reason: "Bonificaciones navales y de infantería",
      },
    ],
  },

  gurjaras: {
    id: "gurjaras",
    name: "Gurjaras",
    description:
      "Civilización del noroeste de la India con camellos poderosos, caballería especializada contra alimento y una economía ganadera eficiente, representando a los reinos rajput.",
    region: "Sur de Asia",
    specialty: "Camellos y Caballería",
    image: "/assets/gurjaras.webp",
    difficulty: "Intermedio",
    playstyle: "Agresivo-Flexible",
    categories: ["Camellos", "Caballería", "Rush", "Unidad Única"],
    quickGuide: {
      strengths:
        "Ganado proporciona alimento permanente, scout de inicio con más vitalidad, y caballería especializada contra unidades que cuestan alimento.",
      strategy:
        "Desarrolla una base económica sólida con ganado inagotable, realiza presión temprana con exploradores resistentes, y transiciona a camellos y caballería especializada contra infantería y arqueros.",
      tips: "Tu ganado nunca se agota, proporcionando una fuente inagotable de alimento - protégelo. La caballería Gurjara causa daño masivo contra unidades que cuestan principalmente alimento como la infantería.",
    },
    bonuses: [
      "Comienzan con 2 búfalos de agua que no se agotan",
      "Exploradores +20 PV",
      "Caballería hace +50% de daño a unidades que cuestan alimento",
      "Los pastores trabajan 25% más rápido",
      "Tecnologías para mejorar camellos y elefantes cuestan -60% de recursos",
      "Acceso al Camel Scout en la Edad Feudal",
    ],
    uniqueUnits: [
      {
        name: "Shrivamsha Rider",
        description: "Caballería ligera rápida que puede esquivar proyectiles",
        strengths: [
          "Esquiva los primeros proyectiles",
          "Movimiento ultra rápido",
          "Bueno contra arqueros",
        ],
        weaknesses: [
          "Baja armadura",
          "Vulnerable tras perder el escudo",
          "Débil contra infantería",
        ],
      },
      {
        name: "Chakram Thrower",
        description:
          "Infantería a distancia que lanza chakrams con daño en área",
        strengths: [
          "Daño en área",
          "Efectivo contra unidades agrupadas",
          "Buen alcance",
        ],
        weaknesses: [
          "Bajo daño individual",
          "Costoso",
          "Vulnerable a caballería",
        ],
      },
    ],
    uniqueTechs: [
      {
        name: "Kshatriyas",
        age: "Edad de los Castillos",
        description:
          "La comida requerida para unidades militares se reduce en un 25%",
        cost: "350 Alimento, 300 Oro",
      },
      {
        name: "Frontier Guards",
        age: "Edad Imperial",
        description: "Camellos y Elefantes +4 PN (puntos de vida) por segundo",
        cost: "650 Alimento, 400 Oro",
      },
    ],
    teamBonus: "Exploradores +2 ataque contra arqueros",
    strategies: [
      {
        title: "Rush con Exploradores Mejorados",
        description: "Utiliza exploradores fuertes para presión temprana",
        steps: [
          "Aprovecha los búfalos inagotables para una economía alimentaria estable",
          "Avanza rápidamente a la Edad Feudal",
          "Produce varios exploradores que tienen +20 PV",
          "Presiona la economía enemiga con ataques rápidos",
          "Añade Camel Scouts en Feudal contra civilizaciones de caballería",
          "Transiciona a Shrivamsha Riders en la Edad de los Castillos",
        ],
      },
      {
        title: "Caballería Anti-Infantería y Camellos",
        description:
          "Maximiza el daño de caballería contra unidades de alimento",
        steps: [
          "Desarrolla una economía sólida con pastores eficientes y búfalos inagotables",
          "Entrena caballería que hace +50% daño a unidades de alimento (infantería)",
          "Añade camellos con mejoras económicas (-60% costo)",
          "Investiga Kshatriyas para reducir el coste de alimento de tus unidades",
          "Complementa con Chakram Throwers contra infantería agrupada",
          "En Imperial, investiga Frontier Guards para regeneración de camellos",
        ],
      },
    ],
    counters: {
      strongAgainst: ["Infantería", "Caballería", "Arqueros poco espaciados"],
      weakAgainst: ["Arqueros de élite", "Unidades de asedio", "Monjes"],
    },
    similarCivs: [
      {
        id: "hindustanis",
        name: "Hindustaníes",
        reason: "Camellos poderosos y unidades especializadas",
      },
      {
        id: "saracens",
        name: "Sarracenos",
        reason: "Caballería fuerte contra ciertos tipos de unidades",
      },
      {
        id: "berbers",
        name: "Bereberes",
        reason: "Caballería rápida y camellos efectivos",
      },
    ],
  },

  bengalis: {
    id: "bengalis",
    name: "Bengalíes",
    description:
      "Civilización del este de la India con elefantes poderosos, monjes superiores y una economía estable basada en alimento, representando a los reinos de la región de Bengala.",
    region: "Sur de Asia",
    specialty: "Elefantes y Monjes",
    image: "/assets/bengalies.webp",
    difficulty: "Difícil",
    playstyle: "Económico-Religioso",
    categories: ["Elefantes", "Monjes", "Boom Económico", "Unidad Única"],
    quickGuide: {
      strengths:
        "Elefantes con movimiento más rápido, economía resistente a saqueos con bonus de alimento, y monjes con mayor velocidad de conversión.",
      strategy:
        "Desarrolla una economía protegida por edificios defensivos, aprovecha la tecnología superior y transiciona a una combinación de elefantes rápidos y monjes eficientes.",
      tips: "Tus edificios económicos revelan terreno al construirse, permitiendo mejor visibilidad. Los elefantes son más rápidos que los normales, lo que compensa su tradicional lentitud. La tecnología Town Watch es gratuita y viene pre-investigada.",
    },
    bonuses: [
      "Edificios económicos proporcionan +5 población y revelan terreno cuando se construyen",
      "Reciben +100 de cada recurso al avanzar de edad",
      "Elefantes se mueven 10% más rápido",
      "Town Watch gratuita y pre-investigada",
      "Los monjes convierten 20% más rápido",
      "Los aldeanos llevan +15 de alimento",
    ],
    uniqueUnits: [
      {
        name: "Ratha",
        description:
          "Carro de guerra que puede cambiar entre modo cuerpo a cuerpo y a distancia",
        strengths: [
          "Versatilidad",
          "Cambio entre ataques",
          "Efectividad en diferentes situaciones",
        ],
        weaknesses: [
          "Alto costo",
          "Requiere microgestión",
          "Vulnerable a unidades anti-arqueros/caballería según modo",
        ],
      },
      {
        name: "Elephant Archer",
        description: "Arquero montado en elefante con alta resistencia",
        strengths: [
          "Alta resistencia",
          "Buena potencia de fuego",
          "Bonus contra infantería",
        ],
        weaknesses: [
          "Costoso",
          "Movimiento lento",
          "Vulnerable a piqueros y escaramuzadores",
        ],
      },
    ],
    uniqueTechs: [
      {
        name: "Paiks",
        age: "Edad de los Castillos",
        description: "Elefantes atacan 20% más rápido",
        cost: "400 Alimento, 300 Oro",
      },
      {
        name: "Mahayana",
        age: "Edad Imperial",
        description:
          "Los monjes reciben +1 conversión por cada tecnología de Monasterio investigada",
        cost: "750 Alimento, 550 Oro",
      },
    ],
    teamBonus: "Elefantes +4 ataque contra edificios",
    strategies: [
      {
        title: "Boom Económico Seguro",
        description:
          "Aprovecha los edificios económicos fortificados para un desarrollo protegido",
        steps: [
          "Construye edificios económicos que proporcionan +5 población y revelan terreno",
          "Utiliza aldeanos que llevan +15 de alimento para una recolección eficiente",
          "Aprovecha los +100 recursos adicionales al avanzar de edad",
          "Invierte en una economía sólida y protegida",
          "Transiciona a Elefantes de Guerra y Elefantes Arqueros",
          "Investiga Paiks para aumentar la velocidad de ataque de tus elefantes",
        ],
      },
      {
        title: "Control Religioso y Militar",
        description:
          "Combina monjes rápidos de conversión con unidades de élite",
        steps: [
          "Construye un Monasterio en la Edad de los Castillos",
          "Entrena monjes que convierten 20% más rápido",
          "Investiga tecnologías de Monasterio para mejorar tus monjes",
          "Añade Rathas para una fuerza militar versátil",
          "Produce elefantes que se mueven 10% más rápido",
          "En Imperial, investiga Mahayana para convertir aún más rápido",
        ],
      },
    ],
    counters: {
      strongAgainst: [
        "Caballería",
        "Arqueros",
        "Civilizaciones sin unidades anti-elefante",
      ],
      weakAgainst: ["Piqueros", "Monjes enemigos", "Unidades anti-elefante"],
    },
    similarCivs: [
      {
        id: "khmer",
        name: "Jemeres",
        reason: "Fuerza de elefantes y economía basada en alimento",
      },
      {
        id: "malay",
        name: "Malayos",
        reason: "Elefantes económicos y economía rápida",
      },
      {
        id: "burmese",
        name: "Birmanos",
        reason: "Elefantes fuertes y monjes poderosos",
      },
    ],
  },

  romans: {
    id: "romans",
    name: "Romanos",
    description:
      "Civilización mediterránea con infantería poderosa, tecnologías avanzadas y fortalezas defensivas superiores, representando al Imperio Romano de Oriente.",
    region: "Europa Meridional",
    specialty: "Infantería y Defensas",
    image: "/assets/romanos.webp",
    difficulty: "Intermedio",
    playstyle: "Defensivo-Técnico",
    categories: ["Infantería", "Defensivo", "Boom Económico", "Unidad Única"],
    quickGuide: {
      strengths:
        "Infantería con armadura superior, edificios más resistentes con mayor línea de visión, y tecnologías avanzadas disponibles una edad antes.",
      strategy:
        "Establece una defensa robusta con edificios resistentes mientras desarrollas una economía tecnológicamente avanzada, para luego presionar con infantería bien equipada y poderosas máquinas de asedio.",
      tips: "Tus edificios tienen +1 línea de visión por edad, permitiendo mejor detección de ataques enemigos. La infantería recibe +1 armadura por edad, haciéndola excepcionalmente resistente en la Edad Imperial.",
    },
    bonuses: [
      "Infantería +1 armadura por edad",
      "Edificios +1 línea de visión por edad",
      "Tecnologías de infantería disponibles una edad antes",
      "Mercado cuesta -25% madera",
      "Legionarios sustituyen a Campeones (infantería mejorada)",
      "Ballesteros +1 alcance",
    ],
    uniqueUnits: [
      {
        name: "Centurion",
        description:
          "Infantería de élite que proporciona aura de combate a unidades cercanas",
        strengths: [
          "Aura de combate para aliados",
          "Alta resistencia",
          "Fuerte contra unidades cuerpo a cuerpo",
        ],
        weaknesses: [
          "Costoso",
          "Movimiento lento",
          "Vulnerable a arqueros y unidades de asedio",
        ],
      },
      {
        name: "Dromon",
        description: "Barco de guerra con ataque de fuego incendiario",
        strengths: [
          "Daño continuo por fuego",
          "Efectivo contra otros barcos",
          "Buen alcance",
        ],
        weaknesses: ["Baja salud", "Costoso", "Vulnerable a barcos de asedio"],
      },
    ],
    uniqueTechs: [
      {
        name: "Testudo Formation",
        age: "Edad de los Castillos",
        description: "Infantería +3 armadura contra proyectiles",
        cost: "300 Alimento, 200 Oro",
      },
      {
        name: "Greek Fire",
        age: "Edad Imperial",
        description: "Barcos y torres hacen +25% daño y tienen +1 alcance",
        cost: "700 Madera, 500 Oro",
      },
    ],
    teamBonus:
      "Aliados pueden entrenar Legionarios en sus Cuarteles (requiere Castillo)",
    strategies: [
      {
        title: "Defensa Fortificada",
        description:
          "Aprovecha la resistencia superior de tus edificios y unidades",
        steps: [
          "Construye edificios defensivos con mayor línea de visión",
          "Utiliza infantería con armadura mejorada (+1 por edad) para defender",
          "Investiga tecnologías de infantería una edad antes",
          "Construye Mercados económicos para desarrollo comercial",
          "Investiga Testudo Formation para protección contra proyectiles",
          "En mapas con agua, añade Dromons para control naval",
        ],
      },
      {
        title: "Infantería de Élite con Centuriones",
        description:
          "Combina Legionarios con Centuriones para unidades súper efectivas",
        steps: [
          "Desarrolla una economía sólida con un Mercado temprano",
          "Avanza a la Edad de los Castillos y construye un Castillo",
          "Entrena una combinación de Legionarios y Centuriones",
          "Coloca Centuriones estratégicamente para que su aura beneficie al máximo número de unidades",
          "Complementa con Ballesteros de mayor alcance",
          "En Imperial, añade unidades de asedio para completar tu ejército",
        ],
      },
    ],
    counters: {
      strongAgainst: [
        "Caballería",
        "Civilizaciones agresivas tempranas",
        "Infantería estándar",
      ],
      weakAgainst: [
        "Arqueros bien micromanejados",
        "Unidades de asedio",
        "Civilizaciones con infantería superior",
      ],
    },
    similarCivs: [
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Defensas fuertes e infantería resistente",
      },
      {
        id: "teutons",
        name: "Teutones",
        reason: "Infantería con alta armadura y edificios resistentes",
      },
      {
        id: "italian",
        name: "Italianos",
        reason: "Tecnologías avanzadas y unidades navales especializadas",
      },
    ],
  },

  armenians: {
    id: "armenians",
    name: "Armenios",
    description:
      "Civilización caucásica con caballería a distancia especializada, monjes poderosos y defensas estables, representando al Reino histórico de Armenia.",
    region: "Cáucaso",
    specialty: "Arqueros a caballo y Monjes",
    image: "/assets/armenios.webp",
    difficulty: "Difícil",
    playstyle: "Religioso-Móvil",
    categories: ["Arqueros a Caballo", "Monjes", "Defensivo", "Unidad Única"],
    quickGuide: {
      strengths:
        "Monjes con mayor velocidad de curación y conversión, edificios que generan oro gradualmente, y caballería a distancia especializada que puede combatir eficazmente.",
      strategy:
        "Desarrolla una economía fortalecida por oro de edificios, establece defensa sólida, y utiliza una combinación de arqueros a caballo y monjes para control del campo de batalla.",
      tips: "Tus Monasterios pueden entrenar tus unidades únicas - aprovecha esta sinergia. Los edificios generan oro gradualmente tras avanzar a Castillos, proporcionando una fuente constante de ingresos.",
    },
    bonuses: [
      "Monjes curan 25% más rápido",
      "Los edificios generan oro gradualmente desde la Edad de los Castillos",
      "Las granjas cuestan -40 madera",
      "Los monjes aumentan su velocidad de conversión un 10% por reliquia que poseen",
      "Pueden construir Monasterios en Edad Feudal",
      "Unidades únicas pueden ser entrenadas en Monasterios",
    ],
    uniqueUnits: [
      {
        name: "Warrior Monk",
        description: "Monje montado con capacidades de combate y curación",
        strengths: [
          "Combate y curación",
          "Alta movilidad",
          "Conversión en movimiento",
        ],
        weaknesses: [
          "Alto costo",
          "Débil en combate directo",
          "Vulnerable a arqueros",
        ],
      },
      {
        name: "Composite Bowman",
        description: "Arquero a caballo con mejor precisión y armadura",
        strengths: ["Alta precisión", "Buena armadura", "Movilidad efectiva"],
        weaknesses: [
          "Costoso",
          "Producción lenta",
          "Vulnerable a escaramuzadores",
        ],
      },
    ],
    uniqueTechs: [
      {
        name: "Faith Healing",
        age: "Edad de los Castillos",
        description:
          "Las unidades cercanas a los monjes se curan automáticamente",
        cost: "350 Alimento, 350 Oro",
      },
      {
        name: "Mountain Monasteries",
        age: "Edad Imperial",
        description: "Los Monasterios tienen +4 línea de visión y +100% PV",
        cost: "600 Piedra, 400 Oro",
      },
    ],
    teamBonus: "+50% tiempo para convertir los edificios del equipo",
    strategies: [
      {
        title: "Control Religioso Temprano",
        description: "Aprovecha los monjes tempranos y efectivos",
        steps: [
          "Avanza a la Edad Feudal y construye un Monasterio temprano",
          "Entrena monjes que curan 25% más rápido",
          "Captura reliquias para mejorar la velocidad de conversión",
          "Entrena Warrior Monks directamente desde el Monasterio",
          "Investiga Faith Healing para curación pasiva",
          "Complementa con Composite Bowmen para apoyo a distancia",
        ],
      },
      {
        title: "Economía Dorada y Arqueros a Caballo",
        description: "Combina ingresos pasivos de oro con unidades móviles",
        steps: [
          "Construye varios edificios que generarán oro en la Edad de los Castillos",
          "Establece una economía eficiente con granjas económicas (-40 madera)",
          "Entrena Composite Bowmen para ataques móviles",
          "Añade Warrior Monks para apoyo religioso y combate",
          "Investiga Mountain Monasteries para Monasterios más resistentes",
          "Mantén la presión con unidades móviles mientras tu economía crece pasivamente",
        ],
      },
    ],
    counters: {
      strongAgainst: [
        "Caballería pesada",
        "Unidades lentas",
        "Civilizaciones sin contraataque religioso",
      ],
      weakAgainst: [
        "Arqueros de élite",
        "Escaramuzadores",
        "Unidades anti-monje",
      ],
    },
    similarCivs: [
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Monjes poderosos y defensas fuertes",
      },
      {
        id: "georgians",
        name: "Georgianos",
        reason: "Unidades montadas especializadas y economía defensiva",
      },
      {
        id: "saracens",
        name: "Sarracenos",
        reason: "Arqueros a caballo efectivos",
      },
    ],
  },

  georgians: {
    id: "georgians",
    name: "Georgianos",
    description:
      "Civilización caucásica con caballería pesada especializada, defensas montañosas superiores y economía minera avanzada, representando al Reino medieval de Georgia.",
    region: "Cáucaso",
    specialty: "Caballería y Defensa",
    image: "/assets/georgianos.webp",
    difficulty: "Intermedio",
    playstyle: "Defensivo-Económico",
    categories: ["Caballería", "Defensivo", "Monjes", "Unidad Única"],
    quickGuide: {
      strengths:
        "Caballería con mayor armadura, minas y canteras más eficientes, y torres especializadas en terrenos elevados con bonificaciones defensivas.",
      strategy:
        "Establece una economía minera sólida, construye defensas fuertes en terrenos elevados, y utiliza caballería pesada y monjes para controlar el campo de batalla.",
      tips: "Posiciona tus torres en terreno elevado para obtener bonificaciones sustanciales de daño y alcance. La caballería tiene +1 de armadura por edad, haciéndola extremadamente resistente en la Edad Imperial.",
    },
    bonuses: [
      "Caballería +1 armadura por edad",
      "Torres en terreno elevado +1 alcance y +2 ataque",
      "Aldeanos trabajan 10% más rápido en minas de oro y canteras",
      "Tecnologías de Centro Urbano disponibles una edad antes",
      "Pueden construir Torres de Vigilancia en la Edad Oscura (30% más débiles)",
      "Monjes +15 PV por reliquia en posesión",
    ],
    uniqueUnits: [
      {
        name: "Monaspa Cavalry",
        description: "Caballería pesada con bonus contra infantería",
        strengths: ["Bonus contra infantería", "Alta armadura", "Buen ataque"],
        weaknesses: ["Movimiento lento", "Alto costo", "Vulnerable a camellos"],
      },
      {
        name: "Mountain Defenders",
        description: "Infantería a distancia especializada en terreno elevado",
        strengths: [
          "Bonus en terreno elevado",
          "Daño extra contra caballería",
          "Alcance extendido",
        ],
        weaknesses: [
          "Débil en terreno regular",
          "Alto costo en oro",
          "Vulnerable a mangoneles",
        ],
      },
    ],
    uniqueTechs: [
      {
        name: "Mountain Watch",
        age: "Edad de los Castillos",
        description:
          "Torres +2 línea de visión y pueden detectar unidades ocultas",
        cost: "300 Piedra, 200 Oro",
      },
      {
        name: "Golden Age",
        age: "Edad Imperial",
        description:
          "Minas de oro y canteras +100% PV, generan 20% de recursos de forma pasiva",
        cost: "650 Madera, 500 Piedra",
      },
    ],
    teamBonus: "Las unidades en terreno elevado reciben -20% daño",
    strategies: [
      {
        title: "Defensa en Altura",
        description:
          "Aprovecha los bonus de terreno elevado para control territorial",
        steps: [
          "Construye Torres de Vigilancia tempranas en terreno elevado",
          "Mejora las torres que obtienen +1 alcance y +2 ataque en altura",
          "Posiciona Mountain Defenders en terreno elevado para máxima efectividad",
          "Investiga Mountain Watch para mayor visibilidad y detección de unidades ocultas",
          "Coloca minas y canteras en áreas defendibles",
          "Protege tus áreas económicas con Monaspa Cavalry contra incursiones",
        ],
      },
      {
        title: "Caballería Acorazada y Monjes",
        description: "Utiliza caballería resistente con apoyo religioso",
        steps: [
          "Desarrolla una economía minera eficiente (+10% velocidad)",
          "Entrena caballería que obtiene +1 armadura por edad",
          "Añade monjes que se fortalecen con cada reliquia (+15 PV)",
          "Investiga tecnologías de Centro Urbano temprano (disponibles una edad antes)",
          "Produce Monaspa Cavalry para enfrentamientos contra infantería",
          "En Imperial, investiga Golden Age para recursos pasivos de minas y canteras",
        ],
      },
    ],
    counters: {
      strongAgainst: [
        "Infantería",
        "Arqueros",
        "Civilizaciones sin unidades para asediar altura",
      ],
      weakAgainst: [
        "Camellos",
        "Unidades de asedio",
        "Infantería anti-caballería en masa",
      ],
    },
    similarCivs: [
      {
        id: "armenians",
        name: "Armenios",
        reason: "Civilización caucásica con unidades especializadas",
      },
      {
        id: "byzantines",
        name: "Bizantinos",
        reason: "Defensas poderosas y caballería resistente",
      },
      {
        id: "teutons",
        name: "Teutones",
        reason: "Caballería con alta armadura y construcciones defensivas",
      },
    ],
  },
};
