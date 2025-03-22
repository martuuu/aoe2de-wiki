import { civilizationsData } from "./civs-data";
import { civilizationsData2 } from "./civs-data2";
import { civilizationsData3 } from "./civs-data3";
import { civilizationsData4 } from "./civs-data4";

import type { CivilizationData } from "./types";

// Combinar todos los datos de civilizaciones
const allCivilizationsData: Record<string, CivilizationData> = {
  ...civilizationsData,
  ...civilizationsData2,
  ...civilizationsData3,
  ...civilizationsData4,
};

// Para obtener una lista de todas las civilizaciones para el listado
export const getAllCivilizations = () => {
  return Object.values(allCivilizationsData).map((civ) => ({
    id: civ.id,
    name: civ.name,
    region: civ.region,
    specialty: civ.specialty,
    image: civ.image || `/assets/${civ.id}.webp`,
    difficulty: civ.difficulty,
    playstyle: civ.playstyle,
    categories: civ.categories || [], // Incluir las categorías
  }));
};

// Función para filtrar civilizaciones por región
export const getCivilizationsByRegion = (region: string) => {
  return Object.values(allCivilizationsData)
    .filter((civ) => civ.region.toLowerCase() === region.toLowerCase())
    .map((civ) => ({
      id: civ.id,
      name: civ.name,
      specialty: civ.specialty,
      image: civ.image || `/assets/${civ.id}.webp`,
    }));
};

// Para obtener los datos de una civilización específica
export const getCivilization = (id: string): CivilizationData | undefined => {
  return allCivilizationsData[id];
};

// Obtener las regiones disponibles
export const getAvailableRegions = (): string[] => {
  const regions = new Set<string>();
  Object.values(allCivilizationsData).forEach((civ) => regions.add(civ.region));
  return Array.from(regions).sort();
};

// Exportar tipos para uso en componentes
export * from "./types";
