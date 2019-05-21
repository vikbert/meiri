import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

const firebaseApp = firebase.initializeApp(config);
const firebaseDb = firebaseApp.database();
const base = Rebase.createClass(firebaseDb);
const rootUrl = "meiri";

export { firebaseApp, firebaseDb, base, rootUrl };
