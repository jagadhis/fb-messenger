import React from "react";

function Message(props) {
  return (
    <div>
      <Card></Card>
      <h2>
        {props.username}
        {props.text}
      </h2>
    </div>
  );
}

export default Message;
