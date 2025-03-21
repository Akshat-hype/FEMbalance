import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page4.css";

const Page4 = () => {
  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault(); // Prevent default form submission
    navigate("/periodinfo");
  };

  return (
    <form className="pcos-form">
      <h2 className="title">Do you ever had PCOD?</h2>
      <div className="form-group">
        <label className="input-label">Select one option</label>
        <div className="input-field">
          <label>
            <input type="radio" name="pcod" value="yes" /> Yes
          </label>
        </div>
        <br />
        <div className="input-field">
          <label>
            <input type="radio" name="pcod" value="no" /> No
          </label>
        </div>
        <br />
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </form>
  );
};

export default Page4;
