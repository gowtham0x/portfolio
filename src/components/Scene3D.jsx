/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Line } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const Particles = ({ count = 2000 }) => {
  const points = useRef();
  const [particles, colors] = useMemo(() => {
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    const color1 = new THREE.Color("#ffffff"); 
    const color2 = new THREE.Color("#3b82f6"); 
    
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 50;
      p[i * 3 + 1] = (Math.random() - 0.5) * 50;
      p[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      const mixedColor = color1.clone().lerp(color2, Math.random() * 0.5);
      c[i * 3] = mixedColor.r;
      c[i * 3 + 1] = mixedColor.g;
      c[i * 3 + 2] = mixedColor.b;
    }
    return [p, c];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!points.current) return;
    
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = time * 0.025;
    
    const { x, y } = state.mouse;
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, x * 2, 0.05);
    points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, y * 2, 0.05);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particles} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.4} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
};

const GeometricCore = () => {
  const group = useRef();
  
  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.getElapsedTime();
    const { x, y } = state.mouse;
    
    group.current.rotation.y = time * 0.2;
    group.current.rotation.x = time * 0.15;
    
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, (x * 2) + 4, 0.03);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (y * 2), 0.03);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={group} position={[4, 0, -5]}>
        <mesh>
          <icosahedronGeometry args={[2.5, 1]} />
          <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.15} blending={THREE.AdditiveBlending} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.3} blending={THREE.AdditiveBlending} />
        </mesh>
        {/* Core point */}
        <mesh>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#3b82f6" />
        </mesh>
      </group>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div id="canvas-container">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 45 }} gl={{ antialias: false, alpha: false }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 30]} />
        
        <ambientLight intensity={0.2} />
        
        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={0.8} />
        <Particles />
        <GeometricCore />
      </Canvas>
    </div>
  );
};

export default Scene3D;
