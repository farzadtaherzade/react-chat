import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import SignOut from "./SignOut";
import SendMessage from "./SendMessage";
import { Avatar, ListItem } from "@mui/material";

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(
          ...messages,
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="msgs">
      <SignOut />
      <div className="all">
        {messages.map(({ id, text, photoURL, uid }) => (
          <ListItem
            className={`msgs ${uid === auth.currentUser.id ? "sent" : ""}`}
            key={id}
          >
            <Avatar src={photoURL} sx={{ width: 37, height: 37 }} />
            <p className="msg" color="secondary">
              {text}
            </p>
          </ListItem>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;
