import React from 'react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { usePlanetStore } from '../store/usePlanetStore';

export const DateSelector: React.FC = () => {
  const { selectedDate, setSelectedDate } = usePlanetStore();

  return (
    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="w-5 h-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-800">Select Date</h2>
      </div>
      <input
        type="date"
        value={format(selectedDate, 'yyyy-MM-dd')}
        onChange={(e) => setSelectedDate(new Date(e.target.value))}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};