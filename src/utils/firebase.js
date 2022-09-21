import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpjklYgI-L8vOPoEg8JRfoarcSe9e987Q",
    authDomain: "mascotas-molinengo.firebaseapp.com",
    projectId: "mascotas-molinengo",
    storageBucket: "mascotas-molinengo.appspot.com",
    messagingSenderId: "447517989647",
    appId: "1:447517989647:web:31ea2ba0e2cc540f407c7a"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)