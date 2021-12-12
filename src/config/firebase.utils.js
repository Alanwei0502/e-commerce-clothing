// import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  // onAuthStateChanged
  signInWithEmailAndPassword
} from 'firebase/auth';
import {
  getFirestore,
  // collection,
  doc,
  getDoc,
  setDoc,
  // getDocs,
  // addDoc,
  // deleteDoc,
  // onSnapshot,
  // query,
  // where
} from 'firebase/firestore';

// [Firebase Configuration]
const firebaseConfig = {
  apiKey: "AIzaSyA6fL81kKtP7RAABIiyqLB6wyaDeaKFOc8",
  authDomain: "e-commerce-clothing-21f6f.firebaseapp.com",
  projectId: "e-commerce-clothing-21f6f",
  storageBucket: "e-commerce-clothing-21f6f.appspot.com",
  messagingSenderId: "19110805961",
  appId: "1:19110805961:web:32f7d63fb3f6a3a8cae818"
};

// [Initialize Firebase]
const firebaseApp = initializeApp(firebaseConfig);

// [Firestore]
const db = getFirestore(firebaseApp);

// [Collection Ref]
// const booksRef = collection(db, 'books'); // params: (db, collection)

// [Get Collection Data]
// getDocs(booksRef)
//   .then((snapshot) => {
//     const books = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
//     console.log({ snapshot });
//     console.log(books);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

// [real time collection data]
// onSnapshot(booksRef, (snapshot) => {
//   const books = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
//   console.log('booksRef', books);
// });

// [Queries]
// const q = query(booksRef, where('author', '==', 'Roman'));

// onSnapshot(q, (snapshot) => {
//   const books = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
//   console.log('q', books);
// })



// [Authentication]
export const auth = getAuth(firebaseApp);

export const signInByEmailAndPassword = (email, password, navigate, setEmail, setPassword) => {
  signInWithEmailAndPassword(auth, email, password).then(() => {
    setEmail("");
    setPassword("");
    navigate('/');
  }).catch((error) => {
    console.log(error.message);
  })
}

// [Google Sign In Provider]
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// [Methods]
export const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, provider)
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, 'users', userAuth.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const userCreateInfo = {
      displayName,
      email,
      createdAt,
      ...additionalData
    };

    try {
      const docRef = await setDoc(userRef, userCreateInfo);
      console.log({ docRef });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}