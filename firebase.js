import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfk9KkBaHemwfLYGOaBTQqxNUn8rb_6Ts",
  authDomain: "lessonbychemchris.firebaseapp.com",
  projectId: "lessonbychemchris",
  storageBucket: "lessonbychemchris.appspot.com",
  messagingSenderId: "168316724765",
  appId: "1:168316724765:web:96797590f64117d80e08f4",
  measurementId: "G-M9EB6QZH0Z",
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
