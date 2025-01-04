import { useEffect, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

const socket = io("ws://192.168.1.7:5005");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home socket={socket}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
