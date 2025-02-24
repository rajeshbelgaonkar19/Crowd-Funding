// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArHhqjIA6fzN6GIJMWDt2_rOPiDpB-340",
    authDomain: "crowd-funding-7bb09.firebaseapp.com",
    projectId: "crowd-funding-7bb09",
    storageBucket: "crowd-funding-7bb09.appspot.com", // Corrected the storage bucket URL
    messagingSenderId: "359842087742",
    appId: "1:359842087742:web:49064e463bfd9c268ca26f",
    measurementId: "G-EYF57TH5N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider };
