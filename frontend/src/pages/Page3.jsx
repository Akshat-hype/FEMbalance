import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page3.css";

const Page3 = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/page4"); // Redirect to Page 4
  };

  return (
    <form className="pcos-form" onSubmit={handleContinue}>
      <h2 className="title">What is your expected average cycle?</h2>

      <div className="form-group">
        <label className="input-label">🩸 Last Period Date</label>
        <input
          type="date"
          placeholder="dd-mm-yyyy"
          className="input-field"
          required
        />
      </div>

      <div className="form-group">
        <label className="input-label">
          🩸 Average Menstrual Cycle Duration?
        </label>
        <input
          type="text"
          placeholder="31 days"
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

export default Page3;
