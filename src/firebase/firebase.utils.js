import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCmPVDUuJ5wzSpe5OnbagVxB0IwOk3CzHQ",
    authDomain: "crwn-db-55c47.firebaseapp.com",
    projectId: "crwn-db-55c47",
    storageBucket: "crwn-db-55c47.appspot.com",
    messagingSenderId: "414403709339",
    appId: "1:414403709339:web:012788c4322fb03046b93e",
    measurementId: "G-92LVGEQXB2"
  };
  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;