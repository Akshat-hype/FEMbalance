import React from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";
import { signInWithGoogle } from "./firebase";

const AuthForm = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    await signInWithGoogle(); // Authenticate the user
    navigate("/page1"); // Redirect to Page 1 after login
  };

  return (
    
    <div className="auth-box"> 
      <div className="auth-left">
        <h2>Welcome Back!</h2>
        <p>Track your PCOS health with ease</p>
      </div>

      <div className="auth-right">
        <h2>Login</h2>
        <p className="sub-text">Continue with your Google account</p>
        <button className="google-btn" onClick={handleGoogleSignIn}>
          Continue with Google
        </button>
      </div>
    </div>

  );
};

export default AuthForm;
