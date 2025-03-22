import React, { useState } from "react";
import "./Exercise.css";

const exercisesList = [
  { name: "PCOD Workout", duration: "10 mins", calories: "150 kcal" },
  { name: "Back Pain Workout", duration: "10 mins", calories: "150 kcal" },
  { name: "Workout for Periods", duration: "10 mins", calories: "150 kcal" },
];

const ExercisePage = () => {
  const [completed, setCompleted] = useState(false);
  const [activeExercise, setActiveExercise] = useState(null);

  const handleComplete = () => {
    setCompleted(true);
  };

  const handleStartExercise = (index) => {
    setActiveExercise(index);
  };

  return (
    <div className="exercise-container">
      <h1>Workouts For You</h1>
      <div className="exercise-boxes">
        {exercisesList.map((exercise, index) => (
          <div
            key={index}
            className={`exercise-card ${
              activeExercise === index ? "active" : "breathing"
            }`}
            onClick={() => handleStartExercise(index)}
          >
            <h2>{exercise.name}</h2>
            <p>Duration: {exercise.duration}</p>
            <p>Calories: {exercise.calories}</p>
          </div>
        ))}
      </div>

      <button
        className={`complete-btn ${completed ? "completed" : ""}`}
        onClick={handleComplete}
        disabled={completed}
      >
        {completed ? "Completed ✅" : "Mark as Completed"}
      </button>
    </div>
  );
};

export default ExercisePage;
