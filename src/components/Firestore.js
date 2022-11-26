import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyDQTkyU_kclh3Woqjx7lBq_SXoGW5OvGEU",
  authDomain: "restaurant-84dce.firebaseapp.com",
  projectId: "restaurant-84dce",
  storageBucket: "restaurant-84dce.appspot.com",
  messagingSenderId: "593237353278",
  appId: "1:593237353278:web:381a6c7c9f7d1cbcdb026f",
});

export const db = getFirestore();
