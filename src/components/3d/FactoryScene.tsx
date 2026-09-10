"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Environment, PerspectiveCamera } from "@react-three/drei";
import { FactoryModel } from "./FactoryModel";
import { OverlayContent } from "./OverlayContent";

export function FactoryScene() {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#020617] -z-10 pointer-events-none">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
        
        {/* Lighting Setup */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0d9488" />

        {/* The 3D elements */}
        <FactoryModel />

        {/* Optional: Adds realistic reflections/lighting */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
