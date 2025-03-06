import React from 'react';
import { PlanetaryPosition } from '../types/planets';

interface PlanetaryDetailsProps {
  data: PlanetaryPosition;
}

const PlanetaryDetails: React.FC<PlanetaryDetailsProps> = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-gray-50 px-4 py-5">
            <dt className="truncate text-sm font-medium text-gray-500">Longitude</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {data.longitude.toFixed(2)}°
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-50 px-4 py-5">
            <dt className="truncate text-sm font-medium text-gray-500">Latitude</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {data.latitude.toFixed(2)}°
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-50 px-4 py-5">
            <dt className="truncate text-sm font-medium text-gray-500">Speed</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {data.speed.toFixed(2)}°/day
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-50 px-4 py-5">
            <dt className="truncate text-sm font-medium text-gray-500">House</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {data.house}
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-50 px-4 py-5">
            <dt className="truncate text-sm font-medium text-gray-500">Sign</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {data.sign}
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-50 px-4 py-5">
            <dt className="truncate text-sm font-medium text-gray-500">Motion</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {data.isRetrograde ? 'Retrograde' : 'Direct'}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PlanetaryDetails;