import React from "react";
import Button from "@mui/material/Button";
import { auth } from "../firebase";

function SignOut() {
  return (
    <div className="sign-out">
      <h2>ReChat</h2>
      <Button
        variant="outlined"
        onClick={() => auth.signOut()}
        color="error"
        className="btn-auth"
      >
        SignOut
      </Button>
    </div>
  );
}

export default SignOut;
