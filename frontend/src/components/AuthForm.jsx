import React from "react";
import "./AuthForm.css"; // Keep your CSS file
import { signInWithGoogle } from "./firebase";

const AuthForm = () => {
  return (
    // <div className="auth-container">
    <div className="auth-box">
      {/* Left Side */}
      <div className="auth-left">
        <h2>Welcome Back!</h2>
        <p>Track your PCOS health with ease</p>
      </div>

      {/* Right Side */}
      <div className="auth-right">
        <h2>Login</h2>
        <p className="sub-text">Continue with your Google account</p>

        {/* Google Auth Button */}
        <button className="google-btn" onClick={signInWithGoogle}>
          Continue with Google
        </button>
      </div>
    </div>
    // </div>
  );
};

export default AuthForm;
