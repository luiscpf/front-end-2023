import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD21Ez9kE0h_GOzKKJjPCEM5vYzw-EJoyw",
  authDomain: "frontend-53df6.firebaseapp.com",
  databaseURL: "https://frontend-53df6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "frontend-53df6",
  storageBucket: "frontend-53df6.appspot.com",
  messagingSenderId: "1001733154441",
  appId: "1:1001733154441:web:098e87f9632177f8610858"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database(); // Get a reference to the Firebase database

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.config.globalProperties.$auth = auth;
app.config.globalProperties.$db = db; // Add the Firebase database reference as a global property

app.mount('#app');
