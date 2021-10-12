import React, { useState, useEffect } from "react";
import "./App.css";

import FormControl from "@mui/material/FormControl";
import { Input } from "@mui/material";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase/app";
import FlipMove from "react-flip-move";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="App">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input
            className="app_input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app_iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
