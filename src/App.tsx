import { useEffect } from "react";
import Background from "./components/Background";
import ChooseYourMode from "./components/choseYourMode";

function App() {
  useEffect(() => {
    const audio = new Audio("/christmas-1.mp3");
    audio.play();
  }, []);
  return (
    <div className="relative h-screen w-screen overflow-clip">
      {/* <Main /> */}
      <ChooseYourMode />
      <Background />
    </div>
  );
}

export default App;
