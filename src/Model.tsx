import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FC } from "react";
import Blue30 from "./Models/Blue/Blue30";
import Blue35 from "./Models/Blue/Blue35";
import Blue40 from "./Models/Blue/Blue40";
import Blue45 from "./Models/Blue/Blue45";
import Pink30 from "./Models/Pink/Pink30";
import Pink35 from "./Models/Pink/Pink35";
import Pink40 from "./Models/Pink/Pink40";
import Pink45 from "./Models/Pink/Pink45";
import Gray30 from "./Models/Gray/Gray30";
import Gray35 from "./Models/Gray/Gray35";
import Gray40 from "./Models/Gray/Gray40";
import Gray45 from "./Models/Gray/Gray45";
import White30 from "./Models/White/White30";
import White35 from "./Models/White/White35";
import White40 from "./Models/White/White40";
import White45 from "./Models/White/White45";

interface ModelProps {
  color: string;
  size: number;
}

const Result: FC<ModelProps> = ({ color, size }) => {
  switch (color) {
    case "blue":
      switch (size) {
        case 30:
          return <Blue30 />;
        case 35:
          return <Blue35 />;
        case 40:
          return <Blue40 />;
        case 45:
          return <Blue45 />;
      }
      return null;

    case "pink":
      switch (size) {
        case 30:
          return <Pink30 />;
        case 35:
          return <Pink35 />;
        case 40:
          return <Pink40 />;
        case 45:
          return <Pink45 />;
      }
      return null;

    case "gray":
      switch (size) {
        case 30:
          return <Gray30 />;
        case 35:
          return <Gray35 />;
        case 40:
          return <Gray40 />;
        case 45:
          return <Gray45 />;
      }
      return null;

    case "white":
      switch (size) {
        case 30:
          return <White30 />;
        case 35:
          return <White35 />;
        case 40:
          return <White40 />;
        case 45:
          return <White45 />;
      }
      return null;
  }
};

const Model: FC<ModelProps> = ({ color, size }) => {
  return (
    <div
      className="absolute h-1/2 top-0 md:bottom-0 w-full md:w-1/2 md:h-full"
      id="canvas-container"
    >
      <Canvas camera={{ position: [0, 200, 200] }}>
        {/* <Canvas> */}
        {/* <ambientLight intensity={5} /> */}
        <directionalLight color={"white"} intensity={2.5} />
        <directionalLight
          position={[0, -50, -50]}
          color={"white"}
          intensity={1.5}
        />
        <directionalLight
          position={[0, 0, 100]}
          color={"white"}
          intensity={1}
        />

        <Result color={color} size={size} />
        <OrbitControls enableDamping />
      </Canvas>
    </div>
  );
};

export default Model;
