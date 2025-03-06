# Interactive Solar System Visualization

A beautiful, interactive 3D visualization of our solar system built with React, Three.js, and React Three Fiber. This project provides an educational and visually stunning way to explore the planets in our solar system.

![Solar System Preview](https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80)

## Features

- **Real-time 3D Visualization**: Interactive 3D rendering of the solar system with accurate orbital paths
- **Dynamic Planet Movement**: Planets orbit around the sun with relative speeds based on actual astronomical data
- **Time Control**: Adjust the date to see planet positions at different points in time
- **Interactive Selection**: Click on planets to view detailed information
- **Realistic Sun Shader**: Custom GLSL shader for realistic sun surface animation
- **Responsive Design**: Fully responsive layout that works on all screen sizes
- **Beautiful UI**: Clean, modern interface with smooth animations

## Technologies Used

- React 18
- Three.js
- React Three Fiber
- React Three Drei
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- Vite (Build Tool)

## Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/solar-system-visualization.git
```

2. Navigate to the project directory:
```bash
cd solar-system-visualization
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Usage

- **Camera Control**: Use your mouse to orbit around the solar system
  - Left click + drag to rotate
  - Scroll to zoom in/out
- **Planet Selection**: Click on any planet to view its details
- **Time Control**: Use the date picker in the top left to change the visualization date
- **Planet Information**: View detailed planet information in the side panel when a planet is selected

## Project Structure

```
src/
├── components/          # React components
│   ├── DateSelector.tsx
│   ├── PlanetInfo.tsx
│   └── SolarSystem.tsx
├── data/               # Static data
│   └── planets.ts
├── store/              # State management
│   └── usePlanetStore.ts
├── types/              # TypeScript types
│   └── index.ts
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Features in Detail

### Solar System Visualization
- Accurate relative planet sizes and orbital distances
- Realistic planet colors and appearances
- Orbital paths visualization
- Interactive camera controls

### Sun Visualization
- Custom GLSL shader for realistic solar surface
- Dynamic surface animation
- Realistic glow effect
- Temperature-based color gradients

### Planet Information
- Real-time position calculations
- Orbital period information
- Distance from sun
- Interactive selection system

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Planet orbital calculations based on astronomical data
- Three.js community for 3D rendering support
- React Three Fiber team for React integration
- Contributors and maintainers of all used libraries
