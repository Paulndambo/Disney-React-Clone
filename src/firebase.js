import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

import 'firebase/compat/auth';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



/*
const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyD9mEZwQV67sM4O3dLC3SBqoNvOxTUxqjI",
  authDomain: "disney-clone-b4635.firebaseapp.com",
  projectId: "disney-clone-b4635",
  storageBucket: "disney-clone-b4635.appspot.com",
  messagingSenderId: "863965569902",
  appId: "1:863965569902:web:a447e7e88fa40b88c6977f",
  measurementId: "G-7HBTRPY503"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage};
export default db;
