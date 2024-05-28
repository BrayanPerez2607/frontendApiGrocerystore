// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgCbmPcF4EPFP50bjpRml0NKt9xpzanko",
  authDomain: "frontapigrocerystore.firebaseapp.com",
  projectId: "frontapigrocerystore",
  storageBucket: "frontapigrocerystore.appspot.com",
  messagingSenderId: "58424132044",
  appId: "1:58424132044:web:974ca73e1802ae99101d69"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);