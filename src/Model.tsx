import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import WhiteResult from "./models/WhiteResult";
import PinkResult from "./models/PinkResult";
import TealResult from "./models/TealResult";
import GrayResult from "./models/GrayResult";
import YellowResult from "./models/YellowResult";
import { FC } from "react";

interface ModelProps {
  color: string;
}

const Result: FC<ModelProps> = ({ color }) => {
  switch (color) {
    case "white":
      return <WhiteResult />;
    case "pink":
      return <PinkResult />;
    case "teal":
      return <TealResult />;
    case "gray":
      return <GrayResult />;
    case "yellow":
      return <YellowResult />;
  }
};

const Model: FC<ModelProps> = ({ color }) => {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [100, 20, 200] }}>
        <ambientLight intensity={1} />
        <directionalLight color={"white"} intensity={5} />
        <directionalLight
          position={[0, -50, -50]}
          color={"white"}
          intensity={5}
        />
        <Result color={color} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Model;
