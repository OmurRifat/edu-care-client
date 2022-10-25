// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD99Yj0R2GrHAezJawSMsUoG6_0XRRbnBM",
    authDomain: "edu-care-bd.firebaseapp.com",
    projectId: "edu-care-bd",
    storageBucket: "edu-care-bd.appspot.com",
    messagingSenderId: "677622310658",
    appId: "1:677622310658:web:a528524e0f54549bdb041b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;