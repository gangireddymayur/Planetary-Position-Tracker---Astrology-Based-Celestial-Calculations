import { create } from 'zustand';
import { Planet, PlanetPosition } from '../types';

interface PlanetStore {
  selectedPlanet: Planet | null;
  selectedDate: Date;
  planetPositions: Record<string, PlanetPosition>;
  setSelectedPlanet: (planet: Planet | null) => void;
  setSelectedDate: (date: Date) => void;
  setPlanetPosition: (planetId: string, position: PlanetPosition) => void;
}

export const usePlanetStore = create<PlanetStore>((set) => ({
  selectedPlanet: null,
  selectedDate: new Date(),
  planetPositions: {},
  setSelectedPlanet: (planet) => set({ selectedPlanet: planet }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setPlanetPosition: (planetId, position) => 
    set((state) => ({
      planetPositions: {
        ...state.planetPositions,
        [planetId]: position
      }
    }))
}));