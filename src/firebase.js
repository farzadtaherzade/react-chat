import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8REM0uQEYCamfYMHu8BHLnoMXLyn72Bs",
  authDomain: "rechat-203c5.firebaseapp.com",
  projectId: "rechat-203c5",
  storageBucket: "rechat-203c5.appspot.com",
  messagingSenderId: "500026414467",
  appId: "1:500026414467:web:d084031fa9efca25f692b6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
