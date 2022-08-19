import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import Button from "@mui/material/Button";

function SignIn() {
  const signInWithGoogleHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div className="sign-in">
      <h2>ReChat</h2>
      <Button
        variant="contained"
        onClick={signInWithGoogleHandler}
        className="btn-auth"
      >
        Sign In With Google{" "}
      </Button>
    </div>
  );
}

export default SignIn;
