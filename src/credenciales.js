// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU1EDY2kH5_iXAf9EX0kHx-0vXPCZnTJY",
  authDomain: "crud-09-sdk.firebaseapp.com",
  projectId: "crud-09-sdk",
  storageBucket: "crud-09-sdk.appspot.com",
  messagingSenderId: "295302950538",
  appId: "1:295302950538:web:13f82953a54247b5e20773"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;