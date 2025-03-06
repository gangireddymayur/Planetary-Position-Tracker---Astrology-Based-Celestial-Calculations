import React from 'react';
import { X } from 'lucide-react';
import { usePlanetStore } from '../store/usePlanetStore';
import { format } from 'date-fns';

export const PlanetInfo: React.FC = () => {
  const { selectedPlanet, planetPositions, setSelectedPlanet, selectedDate } = usePlanetStore();

  if (!selectedPlanet) return null;

  const position = planetPositions[selectedPlanet.id];

  return (
    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{selectedPlanet.name}</h2>
        <button
          onClick={() => setSelectedPlanet(null)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">Position on {format(selectedDate, 'MMMM d, yyyy')}</h3>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div>
              <p className="text-sm text-gray-600">X</p>
              <p className="font-mono">{position?.x.toFixed(2)} AU</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Y</p>
              <p className="font-mono">{position?.y.toFixed(2)} AU</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Z</p>
              <p className="font-mono">{position?.z.toFixed(2)} AU</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-600">Orbital Details</h3>
          <p className="mt-1 text-gray-700">
            Orbit Radius: {selectedPlanet.orbitRadius} AU
          </p>
          <p className="text-gray-700">
            Orbital Period: {(365 / selectedPlanet.orbitSpeed).toFixed(1)} Earth days
          </p>
        </div>
      </div>
    </div>
  );
};