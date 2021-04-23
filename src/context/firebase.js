import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA1jzqhIs4jOkP3CmtkctTnHjRlNE11INs",
    authDomain: "flux-plan.firebaseapp.com",
    projectId: "flux-plan",
    storageBucket: "flux-plan.appspot.com",
    messagingSenderId: "945956241362",
    appId: "1:945956241362:web:f3e49cc783f3d23fa7920b"
};

// Initialize Firebase
var firebasee = firebase.initializeApp(firebaseConfig);
// const db = admin.firestore();

const db = firebase.firestore();

export { db, firebasee };
