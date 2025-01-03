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
      setLoad(true);
      let load = toast.loading("loading...");
      const GoogleDialogBox = await signInWithPopup(auth, provider);
      console.log(GoogleDialogBox.user);
      toast.dismiss(load);
      setLoad(false)
    } catch (er) {
      console.log("Error", er);
    }
  };

  return(
    <>
    <button className=" flex items-center justify-center rounded-1xl text-white rounded-lg bg-slate-950 p-2 " onClick={()=>singInWithGoogle()}>
    {
      openDialog ? (<>
       <FaGoogle className=" mr-2"/>
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
