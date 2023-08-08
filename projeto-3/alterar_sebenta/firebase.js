// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD21Ez9kE0h_GOzKKJjPCEM5vYzw-EJoyw",
    authDomain: "frontend-53df6.firebaseapp.com",
    databaseURL: "https://frontend-53df6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "frontend-53df6",
    storageBucket: "frontend-53df6.appspot.com",
    messagingSenderId: "1001733154441",
    appId: "1:1001733154441:web:098e87f9632177f8610858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbFirestore = getFirestore (app);
// const auth = getAuth(app);


// const form = getForm(app);

export {
    dbFirestore
  
}