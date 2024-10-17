// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyCWfjoS3RWB0vm3hDuPsj-3tfmjzblQE",
  authDomain: "todo-list-36e77.firebaseapp.com",
  projectId: "todo-list-36e77",
  storageBucket: "todo-list-36e77.appspot.com",
  messagingSenderId: "189691848701",
  appId: "1:189691848701:web:7bdc60bab86192dc4edb94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)