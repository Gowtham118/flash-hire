import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAYrwlfVR422U4HYoLf9AlwPkz2nhwqoe0",
  authDomain: "flash-hire-aaceb.firebaseapp.com",
  projectId: "flash-hire-aaceb",
  storageBucket: "flash-hire-aaceb.appspot.com",
  messagingSenderId: "722625528902",
  appId: "1:722625528902:web:aa4fd12fee1851f534f647",
  measurementId: "G-NDR478TW8J",
});

var db = firebaseApp.firestore();

export { db };
