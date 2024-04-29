import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Result } from "./Result";

export default function Model() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={1} />
        {/* <directionalLight target={1, 1, 1]} intensity={6} /> */}
        <Result position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
