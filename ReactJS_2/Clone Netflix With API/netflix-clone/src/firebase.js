// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB66GxEQHI9u0CR4FmccJl_rDIH2guLeSk",
  authDomain: "netflix-clone-97bf4.firebaseapp.com",
  projectId: "netflix-clone-97bf4",
  storageBucket: "netflix-clone-97bf4.appspot.com",
  messagingSenderId: "355357017056",
  appId: "1:355357017056:web:e51d3b19c6647a4a7e2185",
  measurementId: "G-6JGRGDYVVD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
