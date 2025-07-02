import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Stars, Sparkles } from '@react-three/drei';
import EnhancedSphere from './EnhancedSphere';
import MorphingCube from './MorphingCube';

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#FF6B35" />
          <spotLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />
          
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1}
          />
          
          <Sparkles 
            count={100}
            scale={[4, 4, 4]}
            size={2}
            speed={0.4}
            opacity={0.6}
            color="#FF6B35"
          />
          
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <MorphingCube position={[-3, 2, -2]} />
          </Float>
          
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <EnhancedSphere position={[3, -1, -1]} />
          </Float>
          
          <Float speed={2.5} rotationIntensity={1.5} floatIntensity={3}>
            <MorphingCube position={[2, 3, -3]} />
          </Float>
          
          <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
            <EnhancedSphere position={[-2, -2, -2]} />
          </Float>
          
          <Float speed={3} rotationIntensity={2} floatIntensity={4}>
            <EnhancedSphere position={[0, 4, -4]} />
          </Float>
          
          <Environment preset="studio" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.3}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;