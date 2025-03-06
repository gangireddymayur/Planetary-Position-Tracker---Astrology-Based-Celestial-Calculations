import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { PlanetaryPosition } from '../types/planets';
import { format } from 'date-fns';

interface PlanetaryChartProps {
  data: PlanetaryPosition[];
  dates: Date[];
}

const PlanetaryChart: React.FC<PlanetaryChartProps> = ({ data, dates }) => {
  const chartData = data.map((position, index) => ({
    date: format(dates[index], 'MMM d'),
    longitude: position.longitude,
    latitude: position.latitude,
    speed: position.speed,
  }));

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="longitude"
            name="Longitude (°)"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="latitude"
            name="Latitude (°)"
            stroke="#82ca9d"
          />
          <Line
            type="monotone"
            dataKey="speed"
            name="Speed (°/day)"
            stroke="#ffc658"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PlanetaryChart;