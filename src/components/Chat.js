import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase";
import SignOut from "./SignOut";
import SendMessage from "./SendMessage";
import { Avatar, ListItem } from "@mui/material";

function Chat() {
  const [messages, setMessages] = useState([]);
  const dummy = useRef();

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
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
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="msgs">
      <SignOut />
      <div className="all">
        {messages.map(({ id, text, photoURL, uid }) => (
          <ListItem
            className={`msgs ${uid === auth.currentUser.uid ? "sent" : ""}`}
            key={id}
          >
            <Avatar src={photoURL} sx={{ width: 37, height: 37 }} />
            <p className="msg" color="secondary">
              {text}
            </p>
          </ListItem>
        ))}
      </div>
      <SendMessage dummy={dummy} />
      <div ref={dummy} className="dummy"></div>
    </div>
  );
}

export default Chat;
