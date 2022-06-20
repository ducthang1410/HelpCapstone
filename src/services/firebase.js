// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC12gmgDFzcKwndKxh9AhqpECU_sdG0QOY",
    authDomain: "personalstrength-83af0.firebaseapp.com",
    projectId: "personalstrength-83af0",
    storageBucket: "personalstrength-83af0.appspot.com",
    messagingSenderId: "402774877493",
    appId: "1:402774877493:web:262d650143cf2cc70d187c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        
    }).catch((error) => {
        console.log(error);
    });
}