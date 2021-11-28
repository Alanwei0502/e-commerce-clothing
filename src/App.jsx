import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUpPage";

import "./App.styles.scss";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log(currentUser);

    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribeFromAuth();
  }, [currentUser]);

  return (
    <div className="app">
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
