import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameLayout from "./pages/components/GameLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleplayer/triviaOfTheDay" element={<GameLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
