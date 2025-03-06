import { Planet } from '../types';

export const planets: Planet[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    radius: 0.5,
    color: '#A37D6E',
    orbitRadius: 5,
    orbitSpeed: 0.48,
    textureUrl: 'https://space-assets-1.s3.amazonaws.com/mercury.jpg'
  },
  {
    id: 'venus',
    name: 'Venus',
    radius: 0.9,
    color: '#DFB17F',
    orbitRadius: 7,
    orbitSpeed: 0.35,
    textureUrl: 'https://space-assets-1.s3.amazonaws.com/venus.jpg'
  },
  {
    id: 'earth',
    name: 'Earth',
    radius: 1,
    color: '#4B67AB',
    orbitRadius: 10,
    orbitSpeed: 0.29,
    textureUrl: 'https://space-assets-1.s3.amazonaws.com/earth.jpg'
  },
  {
    id: 'mars',
    name: 'Mars',
    radius: 0.6,
    color: '#C1440E',
    orbitRadius: 13,
    orbitSpeed: 0.24,
    textureUrl: 'https://space-assets-1.s3.amazonaws.com/mars.jpg'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    radius: 2,
    color: '#C88B3A',
    orbitRadius: 18,
    orbitSpeed: 0.13,
    textureUrl: 'https://space-assets-1.s3.amazonaws.com/jupiter.jpg'
  },
  {
    id: 'saturn',
    name: 'Saturn',
    radius: 1.8,
    color: '#C4A777',
    orbitRadius: 23,
    orbitSpeed: 0.097,
    textureUrl: 'https://space-assets-1.s3.amazonaws.com/saturn.jpg'
  },
  {
    id: 'uranus',
    name: 'Uranus',
    radius: 1.2,
    color: '#93B8BE',
    orbitRadius: 28,
    orbitSpeed: 0.068,
    textureUrl: 'https://space-assets-1.s3.amazonaws.com/uranus.jpg'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    radius: 1.1,
    color: '#4B70DD',
    orbitRadius: 32,
    orbitSpeed: 0.054,
    textureUrl: 'https://space-assets-1.s3.amazonaws.com/neptune.jpg'
  }
];