import React, { useState } from "react";
import { Input, TextField } from "@mui/material";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";

function SendMessage({ dummy }) {
  const [msg, setMsg] = useState("");
  const sendMessageHandler = async (e) => {
    e.preventDefault();
    if (msg) {
      const { uid, photoURL } = auth.currentUser;
      await db.collection("messages").add({
        text: msg,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMsg("");
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <form onSubmit={sendMessageHandler}>
        <input
          type="text"
          value={msg}
          placeholder="Message..."
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          className="send-message"
        />
      </form>
    </div>
  );
}

export default SendMessage;
