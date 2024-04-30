import { useState } from "react";
import Config from "./Config";
import Model from "./Model";
import Topbar from "./Topbar";

function App() {
  const [color, setColor] = useState("teal");

  const handleChange = (value: string) => {
    setColor(value);
  };

  // const colors = ["pink", "teal", "yellow", "white", "black"];

  return (
    <>
      <div className="h-screen">
        <Topbar />
        <div className="grid grid-cols-2 h-full">
          <Model color={color} />
          <Config handler={handleChange} color={color} />
        </div>
      </div>
    </>
  );
}

export default App;
