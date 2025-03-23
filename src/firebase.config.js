// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB77zgTMfsNEJEUUMLEIv0hIuuedxRebSI",
  authDomain: "online-job-portal-ea8e5.firebaseapp.com",
  projectId: "online-job-portal-ea8e5",
  storageBucket: "online-job-portal-ea8e5.firebasestorage.app",
  messagingSenderId: "796853011899",
  appId: "1:796853011899:web:432a8bc3d96adbf760f09e",
  measurementId: "G-SWZP3BLC2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};