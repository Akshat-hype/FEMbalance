import React from "react";
import "./AuthForm.css"; // Import the CSS file

const AuthForm = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* Left Side */}
        <div className="auth-left">
          <h2>Welcome Back!</h2>
          <p>Enter your personal details to use all site features</p>
          <button className="btn-outline">SIGN IN</button>
        </div>

        {/* Right Side */}
        <div className="auth-right">
          <h2>Create Account</h2>
          <p className="sub-text">or use your email for registration</p>

          {/* Google Auth Button */}
          <button className="google-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google"
            />
            Sign Up with Google
          </button>

          {/* Input Fields */}
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          {/* Sign Up Button */}
          <button className="btn-primary">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
