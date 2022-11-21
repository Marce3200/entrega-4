import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5_5jlK9y8NgICjB1ITVUN6WU-OY1Duss",
  authDomain: "entradas-blog-1f4b2.firebaseapp.com",
  projectId: "entradas-blog-1f4b2",
  storageBucket: "entradas-blog-1f4b2.appspot.com",
  messagingSenderId: "968001391488",
  appId: "1:968001391488:web:ec2eb315b6928972600f65"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);