// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJuOkbttqCMOWdSdDRnKzcNiuId875hfA",
  authDomain: "todo-list-ef167.firebaseapp.com",
  projectId: "todo-list-ef167",
  storageBucket: "todo-list-ef167.appspot.com",
  messagingSenderId: "972441320152",
  appId: "1:972441320152:web:e6cd6283dc90e0316cb5ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)