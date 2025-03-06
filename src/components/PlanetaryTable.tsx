import React from 'react';
import { PlanetaryPosition } from '../types/planets';

interface PlanetaryTableProps {
  data: PlanetaryPosition[];
}

const PlanetaryTable: React.FC<PlanetaryTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Planet
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Longitude
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Latitude
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Speed
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              House
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Sign
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((position, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-6 py-4">{position.planet}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {position.longitude.toFixed(2)}°
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {position.latitude.toFixed(2)}°
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {position.speed.toFixed(2)}°/day
              </td>
              <td className="whitespace-nowrap px-6 py-4">{position.house}</td>
              <td className="whitespace-nowrap px-6 py-4">{position.sign}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanetaryTable;