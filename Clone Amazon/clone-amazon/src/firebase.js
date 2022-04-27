import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGcKSad3j4urXJf9A5do8wv73HKyzcqgA",
  authDomain: "clone-c0954.firebaseapp.com",
  projectId: "clone-c0954",
  storageBucket: "clone-c0954.appspot.com",
  messagingSenderId: "910612516786",
  appId: "1:910612516786:web:6dccb9da9b4f9475f4deab",
  measurementId: "G-VCQ84MSM9W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

// const SignIn = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // let user = result.user;
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };

export { db, auth, provider };
