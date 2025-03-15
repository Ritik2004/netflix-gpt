// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNLYB-p0xQr0ljxowOa7DAPriDitcF8ac",
  authDomain: "netflixclone-ae77d.firebaseapp.com",
  projectId: "netflixclone-ae77d",
  storageBucket: "netflixclone-ae77d.firebasestorage.app",
  messagingSenderId: "249185691679",
  appId: "1:249185691679:web:75bbb43d733bcbe7910d2a",
  measurementId: "G-M1XRTSVGEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();