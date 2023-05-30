// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHjI5SyRMa3C1WZfxZ0KThQcM8g49SWaM",
    authDomain: "umasebenta-63c97.firebaseapp.com",
    projectId: "umasebenta-63c97",
    storageBucket: "umasebenta-63c97.appspot.com",
    messagingSenderId: "572106692493",
    appId: "1:572106692493:web:0da7d388a61442aa428fc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export {
    db
}