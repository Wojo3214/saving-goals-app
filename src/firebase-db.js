import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyCbx18gwl-sb8oJEU4MpcECaV0suILk0yg",
    authDomain: "saving-app-b3e2c.firebaseapp.com",
    databaseURL: "https://saving-app-b3e2c.firebaseio.com",
    projectId: "saving-app-b3e2c",
    storageBucket: "saving-app-b3e2c.appspot.com",
    messagingSenderId: "204753451779",
    appId: "1:204753451779:web:4bb7822e4ec922bca50736",
    measurementId: "G-0RL112W63T"
  })
  .firestore();

export const goalRef = db.collection("goals");