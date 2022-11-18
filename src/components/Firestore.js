import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


initializeApp({
    apiKey: "AIzaSyDI4gDG-RM-D7glxIM3W2OhEuFVh2BgDlM",
    authDomain: "reservas-67cf3.firebaseapp.com",
    projectId: "reservas-67cf3",
    storageBucket: "reservas-67cf3.appspot.com",
    messagingSenderId: "125730756381",
    appId: "1:125730756381:web:fef37927b0223dfed6b3f4"
  
});

export const db = getFirestore();