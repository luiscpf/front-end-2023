// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
// import { getForm } from 'firebase/form';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMgh5pw1C9H7efq25HFs1GYrPuM5sAUZQ",
  authDomain: "projeto1-2023.firebaseapp.com",
  projectId: "projeto1-2023",
  storageBucket: "projeto1-2023.appspot.com",
  messagingSenderId: "680233842378",
  appId: "1:680233842378:web:ca9b8b496db7b832146633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);
// const auth = getAuth(app);


// const form = getForm(app);

export {
    db,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  
}