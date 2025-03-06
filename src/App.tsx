import React from 'react';
import { SolarSystem } from './components/SolarSystem';
import { DateSelector } from './components/DateSelector';
import { PlanetInfo } from './components/PlanetInfo';

function App() {
  return (
    <div className="w-full h-screen relative">
      <SolarSystem />
      <DateSelector />
      <PlanetInfo />
    </div>
  );
}

export default App;