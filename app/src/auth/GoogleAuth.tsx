import React, { useState } from "react";
import { auth } from "./FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import loaderToast from "react-hot-toast";
import AuthDialogueBox from "./AuthDialogueBox";
import axios from "axios";
import { BACKEND_URL } from "../../lib/vars";
import { useToast } from "../shadcn/hooks/use-toast";

const GoogleAuth = () => {
  const { toast } = useToast();
  const [load, setLoad] = useState(false);
  const [openDialog, setDialog] = useState(true);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoad(true);
      let load = loaderToast.loading("loading...");
      const response = await signInWithPopup(auth, provider);
      const idToken = await response.user.getIdToken();

      loaderToast.dismiss(load);
      setLoad(false);
      await axios(`${BACKEND_URL}/api/v1/user/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ idToken }),
        withCredentials: true,
      });
      toast({
        variant: "success",
        title: `Login success`,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <button
      className=" flex items-center justify-center rounded-1xl text-white rounded-lg bg-slate-950 p-2 "
      onClick={() => {
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
