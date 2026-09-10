"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import * as THREE from "three";

export function FactoryModel() {
  const group = useRef<THREE.Group>(null);
  
  // Use framer-motion's useScroll to track the window scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // Animate the factory based on window scroll progress
  useFrame(() => {
    if (!group.current) return;
    
    // Read current scroll progress value
    const progress = scrollYProgress.get(); 

    // Rotate the entire factory based on overall scroll
    group.current.rotation.y = progress * Math.PI * 2;
    
    // Slightly move up and down
    group.current.position.y = Math.sin(progress * Math.PI) * 1;
  });

  return (
    <group ref={group} dispose={null}>
      {/* Main Factory Building */}
      <mesh position={[0, -1, 0]} receiveShadow castShadow>
        <boxGeometry args={[4, 2, 4]} />
        <meshStandardMaterial color="#0A192F" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Chimney 1 */}
      <mesh position={[-1, 1.5, -1]} receiveShadow castShadow>
        <cylinderGeometry args={[0.3, 0.4, 3, 16]} />
        <meshStandardMaterial color="#112240" roughness={0.7} />
      </mesh>

      {/* Chimney 2 */}
      <mesh position={[1, 1.5, -1]} receiveShadow castShadow>
        <cylinderGeometry args={[0.3, 0.4, 3, 16]} />
        <meshStandardMaterial color="#112240" roughness={0.7} />
      </mesh>

      {/* Pipeline 1 (Glowing Teal) */}
      <mesh position={[0, 0, 2.1]} receiveShadow castShadow>
        <cylinderGeometry args={[0.2, 0.2, 4, 16]} />
        <meshStandardMaterial color="#0d9488" emissive="#0d9488" emissiveIntensity={0.5} roughness={0.1} metalness={1} />
      </mesh>
      
      {/* Pipeline 2 Horizontal */}
      <mesh position={[1.5, -0.5, 2.1]} rotation={[0, 0, Math.PI / 2]} receiveShadow castShadow>
        <cylinderGeometry args={[0.15, 0.15, 3, 16]} />
        <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.8} />
      </mesh>

      {/* Abstract floating tech spheres */}
      <mesh position={[-2, 1, 2]} receiveShadow castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={1} roughness={0} metalness={1} />
      </mesh>
    </group>
  );
}
