import Config from "./Config";
import Model from "./Model";
import Topbar from "./Topbar";

function App() {
  return (
    <>
      <Topbar />
      <div className="grid grid-cols-2">
        <Model />
        <Config />
      </div>
    </>
  );
}

export default App;
