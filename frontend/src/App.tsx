import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("ws://127.0.0.1:5005");

function App() {
  function handleSend() {
    const message = document.getElementById("send").value;
    const name = document.getElementById("name").value;
    const msgToSend = name + ":" + message;
    socket.send(msgToSend);
  }
  useEffect(() => {
    socket.on("message", (msg) => {
      const msgContainer = document.getElementById("msgContainer");
      const p = document.createElement("p");
      msgContainer.appendChild(p);
      p.innerText = msg;
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <div className="MainContainer">

      <div id="msgContainer" className="MsgContainer"></div>
      <div className="SendContainer">

        <input type="text" id="name" placeholder="Name" />
        <input type="text" id="send" placeholder="Message" />
        <button id="btn-connect" onClick={handleSend}>
          Send
        </button>

      </div>

    </div>
  );
}

export default App;
