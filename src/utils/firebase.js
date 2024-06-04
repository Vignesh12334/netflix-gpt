// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3BiH3BHun4VjZi90OPB4F3n9mTYXLVIo",
  authDomain: "netflixgpt-40b25.firebaseapp.com",
  projectId: "netflixgpt-40b25",
  storageBucket: "netflixgpt-40b25.appspot.com",
  messagingSenderId: "738087458996",
  appId: "1:738087458996:web:593e4f3cac8a29f3979fe1",
  measurementId: "G-97GKKSEMZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 


 export const auth = getAuth();