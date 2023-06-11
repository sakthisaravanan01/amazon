// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACdSI7TjdW3OXKixUVMUkd83-WdQmoO1Y",
  authDomain: "clone-df38e.firebaseapp.com",
  projectId: "clone-df38e",
  storageBucket: "clone-df38e.appspot.com",
  messagingSenderId: "258621834792",
  appId: "1:258621834792:web:7da193b6f6e3d610b8171d",
  measurementId: "G-SJRZKLGESX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);