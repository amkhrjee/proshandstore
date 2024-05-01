import { useState } from "react";
import Config from "./Config";
import Model from "./Model";
import Topbar from "./Topbar";

function App() {
  const [color, setColor] = useState("white");
  const [size, setSize] = useState(30);

  const handleChange = (value: string) => {
    setColor(value);
  };

  const handleSizeChange = (value: number | number[]) => {
    setSize(value as number);
  };

  return (
    <>
      <div className="h-screen">
        <Topbar />
        <div className="grid grid-cols-2 h-full">
          <Model color={color} size={size} />
          <Config
            handler={handleChange}
            sizeHandler={handleSizeChange}
            color={color}
          />
        </div>
      </div>
    </>
  );
}

export default App;
