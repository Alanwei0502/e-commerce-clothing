import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import "./App.styles.scss";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
