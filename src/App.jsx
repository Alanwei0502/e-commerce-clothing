import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import "./App.styles.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
