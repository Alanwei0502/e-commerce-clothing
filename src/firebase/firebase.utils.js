// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6fL81kKtP7RAABIiyqLB6wyaDeaKFOc8",
  authDomain: "e-commerce-clothing-21f6f.firebaseapp.com",
  projectId: "e-commerce-clothing-21f6f",
  storageBucket: "e-commerce-clothing-21f6f.appspot.com",
  messagingSenderId: "19110805961",
  appId: "1:19110805961:web:32f7d63fb3f6a3a8cae818"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Firestore
const db = getFirestore();

// Authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    return user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

