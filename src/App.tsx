import Background from "./components/Background";
import Main from "./pages/Main";

function App() {
  return (
    <div className="relative h-screen w-screen overflow-clip">
      <Main />
      <Background />
    </div>
  );
}

export default App;
