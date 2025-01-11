import React, { useState } from "react";
import firebase from "firebase/app";
import { app, auth } from "./FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import toast from 'react-hot-toast';
import AuthDialogueBox from "./AuthDialogueBox";


// Goolge Auth 
const GoogleAuth = () => {
  const [load , setLoad] = useState(false);
  const[openDialog , setDialog] = useState(true);


  // singiwithgoogle function
  const singInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const GoogleDialogBox = await signInWithPopup(auth, provider);
      console.log(GoogleDialogBox.user);
    } catch (er) {
      console.log("Error", er);
    }
  };
// Minor changes in firebase config
  return(
    <>
    <button className=" flex items-center  justify-center rounded-1xl text-white  rounded-xl p-4   font-bold bg-slate-950  " onClick={()=>singInWithGoogle()}>
    {
      openDialog ? (<>
       <FaGoogle className=" mr-2 "/>
       Sign In
      </>) : (
        <>
        <AuthDialogueBox/>
        </>
      )
    }
   
    </button>
    </>
  )
};

export default GoogleAuth;
