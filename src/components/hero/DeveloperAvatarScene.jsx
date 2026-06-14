import { Float, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const DeveloperAvatarScene = () => {
  const groupRef = useRef(null);

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = mouse.x * 0.22 + Math.sin(clock.elapsedTime * 0.7) * 0.08;
    groupRef.current.rotation.x = mouse.y * 0.08;
  });

  return (
    <>
      <ambientLight intensity={0.75} />
      <pointLight position={[2.5, 3, 3]} intensity={2.4} color="#00e5ff" />
      <pointLight position={[-3, -1, 2]} intensity={1.6} color="#8b5cf6" />
      <Float speed={1.25} rotationIntensity={0.25} floatIntensity={0.65}>
        <group ref={groupRef} position={[0, -0.25, 0]}>
          <mesh position={[0, 1.05, 0]} castShadow>
            <sphereGeometry args={[0.55, 48, 48]} />
            <meshStandardMaterial color="#d8d8d8" metalness={0.45} roughness={0.32} />
          </mesh>
          <mesh position={[0, 0.08, 0]} castShadow>
            <capsuleGeometry args={[0.58, 1.25, 12, 32]} />
            <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.15, 0.58]} rotation={[-0.18, 0, 0]} castShadow>
            <boxGeometry args={[1.65, 0.92, 0.08]} />
            <meshStandardMaterial color="#050505" metalness={0.9} roughness={0.16} emissive="#00e5ff" emissiveIntensity={0.18} />
          </mesh>
          <mesh position={[0, -0.15, 0.63]} rotation={[-0.18, 0, 0]}>
            <planeGeometry args={[1.32, 0.62]} />
            <meshStandardMaterial color="#071a20" emissive="#00e5ff" emissiveIntensity={0.38} />
          </mesh>
          <mesh position={[-0.62, 0.43, 0.24]} rotation={[0.25, 0, -0.7]} castShadow>
            <capsuleGeometry args={[0.13, 0.78, 8, 18]} />
            <meshStandardMaterial color="#cfcfcf" metalness={0.45} roughness={0.35} />
          </mesh>
          <mesh position={[0.62, 0.43, 0.24]} rotation={[0.25, 0, 0.7]} castShadow>
            <capsuleGeometry args={[0.13, 0.78, 8, 18]} />
            <meshStandardMaterial color="#cfcfcf" metalness={0.45} roughness={0.35} />
          </mesh>
          <mesh position={[0, -0.72, 0.04]} rotation={[0, 0, 0]}>
            <torusGeometry args={[1.12, 0.01, 8, 96]} />
            <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={1.2} />
          </mesh>
        </group>
      </Float>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.55} />
    </>
  );
};

export default DeveloperAvatarScene;
