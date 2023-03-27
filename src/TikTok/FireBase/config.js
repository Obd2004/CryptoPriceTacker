import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4xUD4IdYRfrF-J1726ugGA85-iOje8FE",
  authDomain: "tiktokclone-8c792.firebaseapp.com",
  projectId: "tiktokclone-8c792",
  storageBucket: "tiktokclone-8c792.appspot.com",
  messagingSenderId: "839197347866",
  appId: "1:839197347866:web:420ee9cd438a1855d9c1a3",
  measurementId: "G-3YJN1PZKBZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db ;