// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_4H3SMHazv2eB9SCYVXBOiN1-wiE49-I",
  authDomain: "login-with-firebase-914d6.firebaseapp.com",
  projectId: "login-with-firebase-914d6",
  storageBucket: "login-with-firebase-914d6.appspot.com",
  messagingSenderId: "151199233794",
  appId: "1:151199233794:web:cc5f436e3247636d02741b",
  measurementId: "G-PH0VLKFX0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// value
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

//submit btn

const submit = document.getElementById("submit");
submit.addEventListener("click",function(event)(
    event.preventDefault()
    alert(5)
))

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })