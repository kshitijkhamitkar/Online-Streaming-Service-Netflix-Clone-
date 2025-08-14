
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth';
import {getFirestore,addDoc,collection} from 'firebase/firestore';
import {toast} from 'react-toastify';

const firebaseConfig = {
  apiKey: "AIzaSyCwKhjl2doBz7Ir-ywiP5Z5hv4SVT512xI",
  authDomain: "netflix-6ff2c.firebaseapp.com",
  projectId: "netflix-6ff2c",
  storageBucket: "netflix-6ff2c.firebasestorage.app",
  messagingSenderId: "1028016293654",
  appId: "1:1028016293654:web:8db0dbabd022b7dca8b237",
  measurementId: "G-G2RDX3833G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try{
        const response = await createUserWithEmailAndPassword(auth,email,password);
        const user = response.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email
        })
    }
    catch(error){
         console.log(error);
         toast.error(error.code);
    }
}

const login = async (email,password)=>{
    try{
         await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error){
        console.log(error);
         toast.error(error.code);
        
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};