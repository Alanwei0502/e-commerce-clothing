import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./config/firebase.utils";
import { onSnapshot } from "@firebase/firestore";

import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUpPage";
import { createUserProfileDocument } from "./config/firebase.utils";
import "./App.styles.scss";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        createUserProfileDocument(userAuth).then((userRef) => {
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribeFromAuth;
  }, []);

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
