export interface Planet {
  id: string;
  name: string;
  radius: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  textureUrl: string;
}

export interface PlanetPosition {
  x: number;
  y: number;
  z: number;
}