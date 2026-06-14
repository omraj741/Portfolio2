import { Float, OrbitControls, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

// Lightweight text-based logos keep the scene fast and responsive.
const techLogos = [
  { label: 'C', color: '#38bdf8' },
  { label: 'C++', color: '#818cf8' },
  { label: 'Java', color: '#f97316' },
  { label: 'Python', color: '#22d3ee' },
];

const TechIcon = ({ item, position }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.08;

    const targetScale = hovered ? 1.15 : 1;
    ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.45} floatIntensity={0.8}>
      <group
        ref={ref}
        position={position}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <mesh>
          <sphereGeometry args={[0.72, 20, 20]} />
          <meshStandardMaterial color={item.color} emissive={item.color} emissiveIntensity={0.35} transparent opacity={0.22} />
        </mesh>
        <Text fontSize={0.34} color="white" anchorX="center" anchorY="middle" outlineWidth={0.01} outlineColor={item.color}>
          {item.label}
        </Text>
      </group>
    </Float>
  );
};

const TechCanvasScene = () => {
  // Cluster responds to mouse movement for subtle parallax depth.
  const clusterRef = useRef();

  const positions = useMemo(
    () => [
      [2.1, 0.7, -0.2],
      [0.4, 1.5, -0.9],
      [-1.8, -0.2, 0.3],
      [0.1, -1.3, -0.4],
    ],
    [],
  );

  useFrame(({ mouse }) => {
    if (!clusterRef.current) return;
    clusterRef.current.rotation.y = THREE.MathUtils.lerp(clusterRef.current.rotation.y, mouse.x * 0.35, 0.05);
    clusterRef.current.rotation.x = THREE.MathUtils.lerp(clusterRef.current.rotation.x, mouse.y * 0.15, 0.05);
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight intensity={2.1} position={[2, 2.5, 2]} color="#60a5fa" />
      <pointLight intensity={1.5} position={[-2, -1.4, -1]} color="#a78bfa" />

      <group ref={clusterRef}>
        {techLogos.map((item, index) => (
          <TechIcon key={item.label} item={item} position={positions[index]} />
        ))}
      </group>

      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.4} />
    </>
  );
};

export default TechCanvasScene;
