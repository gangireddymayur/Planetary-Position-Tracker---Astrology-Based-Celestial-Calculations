export interface Planet {
  id: string;
  name: string;
  description: string;
}

export interface PlanetaryPosition {
  planet: string;
  longitude: number;
  latitude: number;
  speed: number;
  house: number;
  sign: string;
  isRetrograde: boolean;
}

export interface AstroResponse {
  success: boolean;
  data: {
    positions: PlanetaryPosition[];
  };
}

export const PLANETS: Planet[] = [
  { id: 'sun', name: 'Sun', description: 'The center of our solar system' },
  { id: 'moon', name: 'Moon', description: "Earth's natural satellite" },
  { id: 'mars', name: 'Mars', description: 'The red planet' },
  { id: 'mercury', name: 'Mercury', description: 'The smallest planet' },
  { id: 'jupiter', name: 'Jupiter', description: 'The largest planet' },
  { id: 'venus', name: 'Venus', description: 'The morning star' },
  { id: 'saturn', name: 'Saturn', description: 'The ringed planet' },
  { id: 'rahu', name: 'Rahu', description: 'North Node of the Moon' },
  { id: 'ketu', name: 'Ketu', description: 'South Node of the Moon' }
];