
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingOrb = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          opacity={0.15}
          transparent
          roughness={0}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const ModernGeometry = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#ffffff"
          opacity={0.1}
          transparent
          wireframe
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <Environment preset="night" />
          
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ffffff" />
          
          <FloatingOrb position={[-6, 3, -5]} scale={1.2} />
          <FloatingOrb position={[6, -3, -8]} scale={0.8} />
          <FloatingOrb position={[4, 4, -6]} scale={1} />
          <FloatingOrb position={[-4, -4, -4]} scale={0.9} />
          
          <ModernGeometry position={[-3, 1, -3]} />
          <ModernGeometry position={[5, -2, -7]} />
          <ModernGeometry position={[0, 5, -9]} />
          
          <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.5}>
            <mesh position={[0, 0, -10]}>
              <torusGeometry args={[3, 0.1, 32, 100]} />
              <meshStandardMaterial
                color="#ffffff"
                opacity={0.08}
                transparent
                metalness={1}
                roughness={0}
              />
            </mesh>
          </Float>
          
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
