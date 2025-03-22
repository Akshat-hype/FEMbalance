import React, { useState } from "react";
import "./PeriodInfo.css";

const trackerData = [
  {
    title: "Period Flow",
    options: [
      { text: "Light", icon: "💧" },
      { text: "Medium", icon: "💧💧" },
      { text: "Heavy", icon: "💧💧💧" },
      { text: "Super Heavy", icon: "💧💧💧💧" },
    ],
  },
  {
    title: "Spotting",
    options: [
      { text: "Red", icon: "🔴" },
      { text: "Brown", icon: "🟤" },
    ],
  },
  {
    title: "Discharge",
    options: [
      { text: "None", icon: "🚫" },
      { text: "Sticky", icon: "🩹" },
      { text: "Creamy", icon: "🥛" },
      { text: "Eggwhite", icon: "🥚" },
    ],
  },
  {
    title: "Pain",
    options: [
      { text: "Pain Free", icon: "😊" },
      { text: "Cramps", icon: "⚡" },
      { text: "Ovulation", icon: "💥" },
      { text: "Headache", icon: "🤕" },
    ],
  },
  {
    title: "Feelings",
    options: [
      { text: "Mood Swings", icon: "🌦️" },
      { text: "Not in Control", icon: "💫" },
      { text: "Fine", icon: "🙂" },
      { text: "Happy", icon: "😁" },
      { text: "Sad", icon: "😢" },
    ],
  },
];

const PeriodInfo = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (sectionTitle, optionText) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [sectionTitle]: optionText,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="tracker-container">
      {trackerData.map((section, index) => (
        <div key={index} className="tracker-section">
          <h2 className="tracker-heading">{section.title}</h2>
          <div className="tracker-options">
            {section.options.map((option, idx) => (
              <div
                key={idx}
                className={`tracker-option ${
                  selectedOptions[section.title] === option.text
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleSelect(section.title, option.text)}
              >
                <span className="tracker-icon">{option.icon}</span>
                <span className="tracker-text">{option.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="save-button" onClick={handleSubmit}>
        Save
      </button>
      {submitted && <p className="submitted-message">Submitted!</p>}
    </div>
  );
};

export default PeriodInfo;
