import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { RoundedBox, MeshWobbleMaterial } from '@react-three/drei';

const MorphingCube: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.4;
    }
  });

  return (
    <RoundedBox ref={meshRef} position={position} args={[1, 1, 1]} radius={0.2} smoothness={4}>
      <MeshWobbleMaterial
        color="#0A0A0A"
        attach="material"
        factor={0.6}
        speed={2}
        roughness={0.2}
        metalness={0.9}
        transparent
        opacity={0.9}
      />
    </RoundedBox>
  );
};

export default MorphingCube;