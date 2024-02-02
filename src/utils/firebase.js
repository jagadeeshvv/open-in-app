// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx3LRiivoJt-W632-D1nCday3SvaiOlDo",
  authDomain: "open-in-app-ec35c.firebaseapp.com",
  projectId: "open-in-app-ec35c",
  storageBucket: "open-in-app-ec35c.appspot.com",
  messagingSenderId: "756831273386",
  appId: "1:756831273386:web:00886fe96a6d32695dabd3",
  measurementId: "G-KY59P2DRWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
