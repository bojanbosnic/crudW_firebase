import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_TV4kvcrkanyV49Vf9IAGBa_zXCBer7I",
  authDomain: "todo-app-80ba6.firebaseapp.com",
  projectId: "todo-app-80ba6",
  storageBucket: "todo-app-80ba6.appspot.com",
  messagingSenderId: "657369943754",
  appId: "1:657369943754:web:549449d9439b3897c86e33",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore();