import { useEffect } from "react";
import Background from "./components/Background";
import Main from "./pages/Main";

function App() {
  useEffect(() => {
    const audio = new Audio("/christmas-1.mp3");
    audio.play();
  }, []);
  return (
    <div className="relative h-screen w-screen overflow-clip">
      <Main />
      <Background />
    </div>
  );
}

export default App;
