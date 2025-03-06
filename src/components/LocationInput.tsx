import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationInputProps {
  latitude: string;
  longitude: string;
  onLatitudeChange: (value: string) => void;
  onLongitudeChange: (value: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({
  latitude,
  longitude,
  onLatitudeChange,
  onLongitudeChange,
}) => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="number"
          value={latitude}
          onChange={(e) => onLatitudeChange(e.target.value)}
          placeholder="Latitude"
          className="w-full rounded-lg border border-gray-300 bg-white px-10 py-2 focus:border-blue-500 focus:outline-none"
          step="0.000001"
          min="-90"
          max="90"
        />
      </div>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="number"
          value={longitude}
          onChange={(e) => onLongitudeChange(e.target.value)}
          placeholder="Longitude"
          className="w-full rounded-lg border border-gray-300 bg-white px-10 py-2 focus:border-blue-500 focus:outline-none"
          step="0.000001"
          min="-180"
          max="180"
        />
      </div>
    </div>
  );
};

export default LocationInput;