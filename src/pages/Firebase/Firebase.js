import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider , signInWithPopup } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpGYn_Hyojo_RdBU6CHSmsGgW24E4H_TY",
  authDomain: "auth-b9aa6.firebaseapp.com",
  projectId: "auth-b9aa6",
  storageBucket: "auth-b9aa6.appspot.com",
  messagingSenderId: "815771509158",
  appId: "1:815771509158:web:60e1dd3224359c5b4fef67"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
    signInWithPopup(auth , provider).then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const pfp = result.user.photoURL;
      const userId = result.user.uid;
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('pfp', pfp);
      localStorage.setItem('id', userId);
      localStorage.setItem('publish', new Date);
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    })
  }
