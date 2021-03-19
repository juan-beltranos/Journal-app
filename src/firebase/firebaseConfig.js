import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcguC-ddVA5l_U3_och-FauIsvzXfLS14",
  authDomain: "journal-app-af4aa.firebaseapp.com",
  projectId: "journal-app-af4aa",
  storageBucket: "journal-app-af4aa.appspot.com",
  messagingSenderId: "392974104379",
  appId: "1:392974104379:web:2466b31134f4399354e91e",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}