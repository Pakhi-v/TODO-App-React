import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZXXoc9VY6Zv3fe7DFRWt5SU-4vGhSL7Q",
    authDomain: "todo-app-cp-fdf01.firebaseapp.com",
    projectId: "todo-app-cp-fdf01",
    storageBucket: "todo-app-cp-fdf01.appspot.com",
    messagingSenderId: "33617216658",
    appId: "1:33617216658:web:bd582459a6917ce9a1124b",
    measurementId: "G-3Q5HPKBRHV"
});

const db = firebaseApp.firestore();


export default db;