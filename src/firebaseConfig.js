// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAmFxkUCJm9p_aD2NnTaoUDj1Wijc6ISw",
  authDomain: "proyecto-ecommerce-e221c.firebaseapp.com",
  projectId: "proyecto-ecommerce-e221c",
  storageBucket: "proyecto-ecommerce-e221c.appspot.com",
  messagingSenderId: "35916162891",
  appId: "1:35916162891:web:e08931da9f3a0cab846ace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db