import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBipUqHGfOLiPSp4mXKNO8lHboI71ALlz0",
  authDomain: "automated-social-media.firebaseapp.com",
  projectId: "automated-social-media",
  storageBucket: "automated-social-media.appspot.com",
  messagingSenderId: "739590355246",
  appId: "1:739590355246:web:d48a2896fe9c7b4e0562bf",
  measurementId: "G-YRFWZZ9GPL",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { firebase, db, auth };
