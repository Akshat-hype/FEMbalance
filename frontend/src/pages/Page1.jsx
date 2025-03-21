import React from 'react';
import './Page1.css';

const Page1 = () => {
  return (
    <form className="pcos-form">
      <h2 className="title">Tell us about your DOB, Height and Weight</h2>

      <div className="form-group">
        <label className="input-label">📆 Date of Birth</label>
        <input type="date" placeholder="dd-mm-yyyy" className="input-field" />
      </div>

      <div className="form-group">
        <label className="input-label">📏 Height (cm)</label>
        <input type="number" placeholder="Enter your height in cm" className="input-field" />
      </div>

      <div className="form-group">
        <label className="input-label">⚖️ Weight (kg)</label>
        <input type="number" placeholder="Enter your weight in kg" className="input-field" />
      </div>

      <button type="submit" className="continue-btn">Continue</button>
    </form>
  );
};

export default Page1;
