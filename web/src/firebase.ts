
import firebase from "firebase/app";

import "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBDmi6nYFsGPCemtjbkBqTzQYGgCHuDdBs",
  authDomain: "firestore-test-d2480.firebaseapp.com",
  projectId: "firestore-test-d2480",
  storageBucket: "firestore-test-d2480.appspot.com",
  messagingSenderId: "668685129831",
  appId: "1:668685129831:web:a992cc8c6393dee2cadcc2",
  measurementId: "G-MCLHKEZHXJ",
};

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
