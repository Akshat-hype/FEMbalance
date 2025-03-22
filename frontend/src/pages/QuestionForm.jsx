import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuestionForm.css";

const QuestionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    dob: "",
    height: "",
    weight: "",
    lastPeriodDate: "",
    cycleDuration: "",
    pcod: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/home");
  };

  return (
    <div className="question-form">
      <form onSubmit={handleSubmit}>
        <h1>Tell us about yourself</h1>

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Height (cm):</label>
        <input type="number" name="height" value={formData.height} onChange={handleChange} required />

        <label>Weight (kg):</label>
        <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />

        <label>Last Period Date:</label>
        <input type="date" name="lastPeriodDate" value={formData.lastPeriodDate} onChange={handleChange} required />

        <label>Average Menstrual Cycle Duration (days):</label>
        <input type="number" name="cycleDuration" value={formData.cycleDuration} onChange={handleChange} required />

        <label>Did you have PCOD?</label>
        <select name="pcod" value={formData.pcod} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <button type="submit" className="continue-btn">Continue</button>
      </form>
    </div>
  );
};

export default QuestionForm;
