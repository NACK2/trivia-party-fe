import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TriviaOfTheDay from "./pages/Singleplayer/TriviaOfTheDay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/singleplayer/triviaOfTheDay"
          element={<TriviaOfTheDay />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
