import React from 'react';
import { Planet, PLANETS } from '../types/planets';
import { ChevronDown } from 'lucide-react';

interface PlanetSelectorProps {
  selectedPlanet: Planet | null;
  onSelectPlanet: (planet: Planet) => void;
}

const PlanetSelector: React.FC<PlanetSelectorProps> = ({
  selectedPlanet,
  onSelectPlanet,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-left focus:border-blue-500 focus:outline-none"
      >
        <div className="flex items-center justify-between">
          <span className="block truncate">
            {selectedPlanet ? selectedPlanet.name : 'Select a planet'}
          </span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-300 bg-white shadow-lg">
          {PLANETS.map((planet) => (
            <button
              key={planet.id}
              onClick={() => {
                onSelectPlanet(planet);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            >
              <div>
                <div className="font-medium">{planet.name}</div>
                <div className="text-sm text-gray-500">{planet.description}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanetSelector;