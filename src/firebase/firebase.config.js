// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnKKzAPBotREwmuXtTIZqqf0k-UdOmDD8",
    authDomain: "b9a9-real-estate-assignment.firebaseapp.com",
    projectId: "b9a9-real-estate-assignment",
    storageBucket: "b9a9-real-estate-assignment.appspot.com",
    messagingSenderId: "319731862974",
    appId: "1:319731862974:web:f5328d15a3c404dafebdef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;