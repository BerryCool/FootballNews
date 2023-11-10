
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwn0mCEBL51ptCq33Km_BUU0BmyqV3ZGw",
    authDomain: "football-news-10757.firebaseapp.com",
    projectId: "football-news-10757",
    storageBucket: "football-news-10757.appspot.com",
    messagingSenderId: "219707443622",
    appId: "1:219707443622:web:710736758cbc0c055c2767",
    measurementId: "G-SFXKB9VE8D"
};
function accountLink(){
    location.href = "account.html";
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
if (user) {
    const uid = user.uid;
    console.log("signed in");
    console.log(user.email);

    document.getElementById("joinbtn").hidden=true;

    var signinbtn = document.getElementById("signinbtn");
    signinbtn.textContent = "Account";
    signinbtn.onclick = function() {
    location.href = "account.html";   
        }

} else {}
});
