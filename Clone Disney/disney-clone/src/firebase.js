import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import firebase from "./firebase";
// // import "firebase/storage";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFj-0r0nFeBjjFfrDkQI1AiqTFw3SS3Ic",
  authDomain: "clone-disney-bbf74.firebaseapp.com",
  projectId: "clone-disney-bbf74",
  storageBucket: "clone-disney-bbf74.appspot.com",
  messagingSenderId: "859778066159",
  appId: "1:859778066159:web:79279f07836389c41d5d1a",
  measurementId: "G-QZRE1C0J72",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;
