import React from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAes2p7xY-3sEsIPi2531dCv1_9mbz9wTY",
  authDomain: "dragon-news-bd-3e23d.firebaseapp.com",
  projectId: "dragon-news-bd-3e23d",
  storageBucket: "dragon-news-bd-3e23d.firebasestorage.app",
  messagingSenderId: "459569437111",
  appId: "1:459569437111:web:4dda409a1b993216f37032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;