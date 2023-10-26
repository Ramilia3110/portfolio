"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  const fileUrl = "/assets/desk/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  if (gltf.scene) {
    gltf.scene.scale.set(0.02, 0.02, 0.02); // Adjust the scale as needed
  }

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

const Cover: React.FC = () => {
  return (
    <div
      id="home"
      className="w-[100vw] flex justify-between items-center h-screen p-5 bg-gradient-to-t from-[rgba(99,184,154,0.0)] via-opacity-100 to-[rgba(99,184,154,0.5)]  "
    >
      <div className="w-[80vw] h-[90vh] pt-38 ">
        <Canvas className="h-3xl w-full bg-black-300">
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <MeshComponent />
        </Canvas>
      </div>

      <div className="w-2/5 min-w-[20rem] min-h-[50vh]">
        <h1>Ramilia</h1>
        <h3 className="text-[#cd4540] font-bold">Front End Developer</h3>
      </div>
    </div>
  );
};

export default Cover;
