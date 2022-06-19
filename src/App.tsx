import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Pomodoro, NotFound } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro/:id" element={<Pomodoro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
