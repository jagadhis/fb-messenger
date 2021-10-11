import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Input, InputLabel } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["hello", "hi"]);
  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>lets build a fb-messenger 🚀</h1>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </form>
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
