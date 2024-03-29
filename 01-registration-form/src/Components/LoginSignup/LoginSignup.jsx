import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    // main container start
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      {/* 3 inputs container */}
      <div className="inputs">
        {/* 1st input {username}*/}
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src="" alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        {/* 2nd input {email address}*/}
        <div className="input">
          <img src="" alt="" />
          <input type="email" placeholder="Email" />
        </div>
        {/* 3rd input {password}*/}
        <div className="input">
          <img src="" alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgotten Password? <span>Click here!</span>
        </div>
      )}

      {/* submit container start */}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
