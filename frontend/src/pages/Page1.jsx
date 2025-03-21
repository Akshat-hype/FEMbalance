import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page1.css";

const Page1 = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/page3"); // Redirect to Page 3
  };

  return (
    <form className="pcos-form" onSubmit={handleContinue}>
      <h2 className="title">Tell us about your DOB, Height, and Weight</h2>

      <div className="form-group">
        <label className="input-label">📆 Date of Birth</label>
        <input
          type="date"
          placeholder="dd-mm-yyyy"
          className="input-field"
          required
        />
      </div>

      <div className="form-group">
        <label className="input-label">📏 Height (cm)</label>
        <input
          type="number"
          placeholder="Enter your height in cm"
          className="input-field"
          required
        />
      </div>

      <div className="form-group">
        <label className="input-label">⚖️ Weight (kg)</label>
        <input
          type="number"
          placeholder="Enter your weight in kg"
          className="input-field"
          required
        />
      </div>

      <button type="submit" className="continue-btn">
        Continue
      </button>
    </form>
  );
};

export default Page1;
