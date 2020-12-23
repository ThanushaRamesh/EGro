// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyA_7Bq6HbZU3FRfvArWqu3kO053cFDaS4g",
    authDomain: "egro-cd2d2.firebaseapp.com",
    projectId: "egro-cd2d2",
    storageBucket: "egro-cd2d2.appspot.com",
    messagingSenderId: "230541960255",
    appId: "1:230541960255:web:e14134523cfd5eaff5448a",
    measurementId: "G-DBXSET0BKR"
  };
  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;