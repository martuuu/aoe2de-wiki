export interface CivQuickGuide {
  strengths: string;
  strategy: string;
  tips: string;
}

export interface UniqueUnit {
  name: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
}

export interface UniqueTech {
  name: string;
  age: string;
  description: string;
  cost: string;
}

export interface Strategy {
  title: string;
  description: string;
  steps: string[];
}

export interface Counters {
  strongAgainst: string[];
  weakAgainst: string[];
}

export interface CivilizationData {
  id: string;
  name: string;
  description: string;
  region: string;
  specialty: string;
  image: string;
  difficulty: string;
  playstyle: string;
  categories: string[]; 
  quickGuide: {
    strengths: string;
    strategy: string;
    tips: string;
  };
  bonuses: string[];
  uniqueUnits: Array<{
    name: string;
    description: string;
    strengths: string[];
    weaknesses: string[];
  }>;
  uniqueTechs: Array<{
    name: string;
    age: string;
    description: string;
    cost: string;
  }>;
  teamBonus: string;
  strategies: Array<{
    title: string;
    description: string;
    steps: string[];
  }>;
  counters: {
    strongAgainst: string[];
    weakAgainst: string[];
  };
  similarCivs: Array<{
    id: string;
    name: string;
    reason: string;
  }>;
}