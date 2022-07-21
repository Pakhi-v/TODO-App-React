import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyD4jPKvp2PpqFqkdtAGmwwyyjqBpk6Uu7I",
    authDomain: "todo-6d3ab.firebaseapp.com",
    projectId: "todo-6d3ab",
    storageBucket: "todo-6d3ab.appspot.com",
    messagingSenderId: "153302994127",
    appId: "1:153302994127:web:1680ebd1720a460249bbba",
    measurementId: "G-9TKQY2YB6G"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };