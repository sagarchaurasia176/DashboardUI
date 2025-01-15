import React, { useState } from "react";
import firebase from "firebase/app";
import { app, auth } from "./FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import AuthDialogueBox from "./AuthDialogueBox";
import axios from "axios";

// Goolge Auth
const GoogleAuth = () => {
  const [load, setLoad] = useState(false);
  const [openDialog, setDialog] = useState(true);

  // singiwithgoogle function
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoad(true);
      let load = toast.loading("loading...");
      const response = await signInWithPopup(auth, provider);
      const idToken = await response.user.getIdToken();
      toast.dismiss(load);
      setLoad(false);

      // send ID token to backend
      const responseUser = await axios(
        `${import.meta.env.VITE_BACKEND_LOCAL}/api/v1/user/verify-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({ idToken }),
        }
      );
      localStorage.setItem("user", responseUser.data.email);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <button
      className=" flex items-center justify-center rounded-1xl text-white rounded-lg bg-slate-950 p-2 "
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Button clicked");

        signInWithGoogle();
      }}
    >
      {openDialog ? (
        <>
          <FaGoogle className=" mr-2" />
          Sign In
        </>
      ) : (
        <>
          <AuthDialogueBox />
        </>
      )}
    </button>
  );
};

export default GoogleAuth;
