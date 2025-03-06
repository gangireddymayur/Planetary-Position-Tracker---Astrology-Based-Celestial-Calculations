import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { planets } from '../data/planets';
import { usePlanetStore } from '../store/usePlanetStore';
import { Planet as PlanetType } from '../types';

const Planet: React.FC<{ planet: PlanetType }> = ({ planet }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { selectedDate, setPlanetPosition, setSelectedPlanet, selectedPlanet } = usePlanetStore();
  const isSelected = selectedPlanet?.id === planet.id;

  // Self rotation speed
  const rotationSpeed = 0.005 / planet.orbitSpeed;

  const calculatePosition = (date: Date) => {
    const time = date.getTime() / (1000 * 60 * 60 * 24) * planet.orbitSpeed;
    const x = Math.cos(time) * planet.orbitRadius;
    const z = Math.sin(time) * planet.orbitRadius;
    return { x, y: 0, z };
  };

  useEffect(() => {
    const position = calculatePosition(selectedDate);
    setPlanetPosition(planet.id, position);
  }, [selectedDate, planet.id, planet.orbitRadius, planet.orbitSpeed, setPlanetPosition]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Update position
    const position = calculatePosition(selectedDate);
    meshRef.current.position.set(position.x, position.y, position.z);
    
    // Self rotation
    meshRef.current.rotation.y += rotationSpeed;
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedPlanet(planet);
        }}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        <sphereGeometry args={[planet.radius, 64, 64]} />
        <meshStandardMaterial
          color={planet.color}
          metalness={0.4}
          roughness={0.7}
          emissive={isSelected ? planet.color : '#000000'}
          emissiveIntensity={isSelected ? 0.2 : 0}
        />
        {isSelected && (
          <mesh scale={[1.1, 1.1, 1.1]}>
            <sphereGeometry args={[planet.radius, 32, 32]} />
            <meshBasicMaterial
              color={planet.color}
              transparent
              opacity={0.2}
              side={THREE.BackSide}
            />
          </mesh>
        )}
      </mesh>
    </group>
  );
};

const Sun: React.FC = () => {
  const sunRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  // Custom shader for sun surface animation
  const sunMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color('#FDB813') },
      color2: { value: new THREE.Color('#FF3D00') }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;
      varying vec3 vNormal;
      
      //
      // Description : Array and textureless GLSL 2D/3D/4D simplex 
      //               noise functions.
      //      Author : Ian McEwan, Ashima Arts.
      //  Maintainer : stegu
      //     Lastmod : 20110822 (ijm)
      //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
      //               Distributed under the MIT License. See LICENSE file.
      //               https://github.com/ashima/webgl-noise
      //               https://github.com/stegu/webgl-noise
      // 

      vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
      }

      vec4 taylorInvSqrt(vec4 r) {
        return 1.79284291400159 - 0.85373472095314 * r;
      }

      float snoise(vec3 v) { 
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;

        i = mod289(i); 
        vec4 p = permute( permute( permute( 
                  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
      }

      void main() {
        float noise = snoise(vec3(vUv * 5.0, time * 0.1));
        float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        
        vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
        color = mix(color, vec3(1.0), fresnel * 0.5);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `
  });

  useFrame((state) => {
    time.current += 0.01;
    sunMaterial.uniforms.time.value = time.current;
    
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      <mesh ref={sunRef}>
        <sphereGeometry args={[3, 64, 64]} />
        <primitive object={sunMaterial} attach="material" />
      </mesh>
      <pointLight intensity={1.5} distance={100} decay={2} />
      <ambientLight intensity={0.1} />
    </group>
  );
};

const Orbits: React.FC = () => {
  return (
    <>
      {planets.map((planet) => (
        <line key={planet.id}>
          <bufferGeometry
            attach="geometry"
            attributes={{
              position: new THREE.BufferAttribute(
                new Float32Array(
                  Array.from({ length: 128 }).flatMap((_, i) => {
                    const angle = (i / 127) * Math.PI * 2;
                    return [
                      Math.cos(angle) * planet.orbitRadius,
                      0,
                      Math.sin(angle) * planet.orbitRadius,
                    ];
                  })
                ),
                3
              ),
            }}
          />
          <lineBasicMaterial
            attach="material"
            color="#ffffff"
            opacity={0.15}
            transparent
            linewidth={1}
          />
        </line>
      ))}
    </>
  );
};

const Background: React.FC = () => (
  <Stars
    radius={300}
    depth={100}
    count={7000}
    factor={4}
    saturation={0.5}
    fade
    speed={1}
  />
);

export const SolarSystem: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 30, 0], fov: 60 }}>
      <color attach="background" args={['#000']} />
      <Background />
      <fog attach="fog" args={['#000', 50, 200]} />
      <Sun />
      <Orbits />
      {planets.map((planet) => (
        <Planet key={planet.id} planet={planet} />
      ))}
      <OrbitControls
        enablePan={false}
        minDistance={10}
        maxDistance={100}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
      />
    </Canvas>
  );
};