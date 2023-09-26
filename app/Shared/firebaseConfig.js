// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2TMKSdKtCHOq6GpNKxCZ5sVxbWaPCdTU",
  authDomain: "photofy-uid721629.firebaseapp.com",
  projectId: "photofy-uid721629",
  storageBucket: "photofy-uid721629.appspot.com",
  messagingSenderId: "135597168880",
  appId: "1:135597168880:web:bf275a42238c6389a00a35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
