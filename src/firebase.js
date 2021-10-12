import firebase from "firebase/app";
import "firebase/firestore";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzkS8ilTb0W0fdwsbpUVj7XkVtWOhIhmI",
  authDomain: "fb-messenger-c7185.firebaseapp.com",
  projectId: "fb-messenger-c7185",
  storageBucket: "fb-messenger-c7185.appspot.com",
  messagingSenderId: "682396458827",
  appId: "1:682396458827:web:3e0f640f86623e7df712ce",
  measurementId: "G-TESZ7HXHQ5",
});

var db = firebaseApp.firestore();

export default db;
