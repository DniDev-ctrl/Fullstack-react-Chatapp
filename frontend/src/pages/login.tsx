import { Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";



export function Login() {
  const navigate = useNavigate();

  function handleLogin(e: any) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <div>
      <input type="text" id="username" placeholder="Username" />
      <button
        id="btn-login"
        onClick={(e) => {
          handleLogin(e)
        }}
      >
        Login
      </button>
    </div>
  );
}
