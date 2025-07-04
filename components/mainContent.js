"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { useRef } from "react";

function Model() {
  const { scene } = useGLTF("/models/robot/robot.glb");
  const modelRef = useRef();

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Center disableY scale={2.5}>
      <primitive object={scene} ref={modelRef} />
    </Center>
  );
}

export default function MainContent() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col lg:flex-row justify-center items-center font-['Aalto'] text-white">
      {/* 3D Model Section */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full bg-black pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <Canvas camera={{ position: [6, 2, 8], fov: 45 }}>
            <ambientLight intensity={2} />
            <directionalLight position={[20, 20, -5]} intensity={4} />
            <Model />
          </Canvas>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-6 lg:p-10 flex items-center justify-center bg-black">
        <p className="text-3xl lg:text-6xl text-white tracking-wider text-center lg:text-left leading-snug">
          I&apos;m Not a Three.js guru—but fluent enough to make your 3D pop like it’s 2025, not stuck in 2005. If your site wants ‘wow’ and not ‘meh’ look, you need that.
        </p>
      </div>
    </div>
  );
}
