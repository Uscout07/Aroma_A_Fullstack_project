import { Environment, Float, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Roses } from "../models/Roses";

export default function RoseModel() {
  return (
    <Canvas shadows dpr={[1, 1.5]}>
       <mesh rotation={[0, 0.39, 0]} scale={1.26}>
      <Float
        speed={1}
        rotationIntensity={0.5}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        <Roses />
      </Float>
      </mesh>
      <SoftShadows />
      <Environment
        files={"./assets/HDR-file/light.hdr"}
        environmentIntensity={0.5}
      />
    </Canvas>
  );
}
