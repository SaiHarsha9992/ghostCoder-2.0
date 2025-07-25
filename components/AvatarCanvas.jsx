import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import { Html, OrbitControls, useProgress } from '@react-three/drei';
import { Avatar } from './Avatar';

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-2 text-white">
        <div className="h-10 w-10 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-white opacity-80" />
        <span className="text-sm font-medium">{progress.toFixed(0)}% Loaded</span>
      </div>
    </Html>
  );
}

export default function AvatarCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cameraPosition = isMobile ? [0, -3.5, 20] : [0, -10, 29];
  const scale = isMobile ? 2.7 : 4.5;
  const position = isMobile ? [0, -45, -30] : [5, -70, -28];
  return (
    <div className="relative w-full h-full min-h-[100vh] overflow-hidden">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: cameraPosition, fov: 35 }}
        shadows
        className="w-full h-full"
        style={{ height: '100%', width: '100%' }}
        onCreated={({ gl }) => {
          gl.getContext().canvas.addEventListener('webglcontextlost', (e) => {
            e.preventDefault();
          });
        }}
      >
        <ambientLight intensity={3} />
        <directionalLight position={[2, 10, 2]} intensity={16} />

        <Suspense fallback={<Loader />}>
          <Avatar scale={scale} position={position} rotation={[0.25, -0.2, 0]} />
        </Suspense>

<OrbitControls
  target={[0, 1, -10]}             // 👈 Adjusted Y-target to center on the model's chest/face
  enableZoom={false}
  enablePan={false}
  minPolarAngle={Math.PI / 7}      // 👈 ~60°: prevents looking too far up
  maxPolarAngle={(6 * Math.PI) / 8} // 👈 ~112.5°: limits looking down too far
  minAzimuthAngle={-Math.PI / 8}   // 👈 Left-right control (~22.5° each side)
  maxAzimuthAngle={Math.PI / 8}
  makeDefault
/>



      </Canvas>
    </div>
  );
}
