import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import "./App.styles.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
