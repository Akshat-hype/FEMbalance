import React, { useState } from "react";
import "./PeriodInfo.css";

const categories = [
  {
    title: "Flow",
    color: "red",
    options: ["Light", "Medium", "Heavy", "Super Heavy"],
  },
  {
    title: "Spotting",
    color: "red",
    options: ["Red", "Brown"],
  },
  {
    title: "Feelings",
    color: "orange",
    options: ["Mood Swings", "Not in Control", "Fine", "Happy", "Vomit"],
  },
  {
    title: "Pain",
    color: "blue",
    options: [
      "Pain Free",
      "Cramps",
      "Breast Tender",
      "Ovulation",
      "Back Pain",
      "Leg Pain",
    ],
  },
];

const PeriodInfo = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelection = (category, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: option,
    }));
  };

  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{category.title}</h2>
          <div className="button-group">
            {category.options.map((option, idx) => (
              <button
                key={idx}
                className={`category-button ${
                  selectedOptions[category.title] === option ? "selected" : ""
                }`}
                style={{ borderColor: category.color, color: category.color }}
                onClick={() => handleSelection(category.title, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button className="save-button">Save</button>
    </div>
  );
};

export default PeriodInfo;
