import React, { useState, useEffect } from "react";
import "./periodtracker.css";

function PeriodTracker() {
  // Example: store the date of the last period in state (could come from props or context)
  const [lastPeriodDate, setLastPeriodDate] = useState(null);
  // Store the current day count since the last period
  const [daysSinceLastPeriod, setDaysSinceLastPeriod] = useState(0);

  // Example cycle length to compare “late” status (you can make this dynamic)
  const AVERAGE_CYCLE_LENGTH = 28;

  // On mount or whenever lastPeriodDate changes, calculate the difference in days
  useEffect(() => {
    if (lastPeriodDate) {
      const today = new Date();
      const diffInTime = today.getTime() - lastPeriodDate.getTime();
      const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
      setDaysSinceLastPeriod(diffInDays);
    }
  }, [lastPeriodDate]);

  // Simulate "marking" a new period to reset the cycle
  const handleNewPeriod = () => {
    // Reset last period date to today
    setLastPeriodDate(new Date());
  };

  // If there’s no lastPeriodDate yet, pretend the user set it 31 days ago for demonstration
  useEffect(() => {
    if (!lastPeriodDate) {
      // Setting an example date 31 days in the past
      const exampleDate = new Date();
      exampleDate.setDate(exampleDate.getDate() - 31);
      setLastPeriodDate(exampleDate);
    }
  }, [lastPeriodDate]);

  // Determine if user is “late”
  const isLate = daysSinceLastPeriod > AVERAGE_CYCLE_LENGTH;
  const lateDays = isLate ? daysSinceLastPeriod - AVERAGE_CYCLE_LENGTH : 0;

  // For the circular progress bar
  // Let's assume a max "visual" cycle of 40 days for the ring. You can adjust as needed.
  const MAX_DAYS_VISUAL = 40;
  const circumference = 2 * Math.PI * 60; // If the circle radius is 60 in the CSS
  const offset =
    circumference - (daysSinceLastPeriod / MAX_DAYS_VISUAL) * circumference;
  // Clamp offset so it doesn’t go negative if days exceed MAX_DAYS_VISUAL
  const finalOffset = Math.max(offset, 0);

  return (
    <div className="period-tracker-container">
      <div className="header-section">
        <h2>Your current cycle</h2>
      </div>

      <div className="circle-wrapper">
        <svg className="progress-ring" width="150" height="150">
          <circle
            className="progress-ring__background"
            stroke="#ccc"
            fill="transparent"
            strokeWidth="10"
            r="60"
            cx="75"
            cy="75"
          />
          <circle
            className="progress-ring__progress"
            stroke="#ff6f6f"
            fill="transparent"
            strokeWidth="10"
            r="60"
            cx="75"
            cy="75"
            strokeDasharray={circumference}
            strokeDashoffset={finalOffset}
          />
        </svg>
        <div className="progress-ring__text">
          <div className="day-count">
            Day <strong>{daysSinceLastPeriod}</strong>
          </div>
          {isLate ? (
            <div className="late-info">
              Your period is <strong>{lateDays} days</strong> late
            </div>
          ) : (
            <div className="late-info">Not late</div>
          )}
        </div>
      </div>

      <div className="actions">
        <button onClick={handleNewPeriod}>Track New Period (Reset)</button>
      </div>
    </div>
  );
}

export default PeriodTracker;
