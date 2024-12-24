import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import ChooseYourMode from "./components/choseYourMode";
import Main from "./pages/Main";
import ShowCard from "./components/ShowCard";

function App() {
  useEffect(() => {
    const audio = new Audio("/christmas-1.mp3");
    audio.load();
    audio.play();
  }, []);
  return (
    <div className="relative h-screen w-screen overflow-clip">
      {/* <Main /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChooseYourMode />} />
          <Route path="/create" element={<Main />} />
          <Route path="/show" element={<ShowCard />} />
        </Routes>
      </BrowserRouter>
      <Background />
    </div>
  );
}

export default App;
