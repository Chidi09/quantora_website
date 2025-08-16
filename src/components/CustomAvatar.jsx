// src/components/CustomAvatar.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { motion } from 'framer-motion'; // Corrected import path from main package

// A simple animated 3D mesh to use as a placeholder for the actual avatar model.
function AnimatedMesh() {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    // Use motion.mesh to enable Framer Motion's animation capabilities on this 3D object
    <motion.mesh ref={mesh}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#6366F1" />
    </motion.mesh>
  );
}

// The CustomAvatar component sets up the 3D scene and renders the animated mesh.
const CustomAvatar = () => {
  return (
    <Canvas
      className="!h-full !w-full"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Stage environment="city" intensity={0.5}>
        <AnimatedMesh />
      </Stage>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default CustomAvatar;
