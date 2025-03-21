import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  eachDayOfInterval,
} from "date-fns";
import {
  db,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "./firebaseConfig";
import "./Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [periodDates, setPeriodDates] = useState([]);
  const userId = "user123"; // Change this dynamically based on authentication
  const navigate = useNavigate();

  // Fetch period dates from Firestore
  useEffect(() => {
    const fetchPeriodDates = async () => {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        setPeriodDates(userDoc.data().periodDates || []);
      }
    };
    fetchPeriodDates();
  }, []);

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const handleDateClick = async (day) => {
    const formattedDate = format(day, "yyyy-MM-dd");

    if (!periodDates.includes(formattedDate)) {
      const userRef = doc(db, "users", userId);

      try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          await updateDoc(userRef, { periodDates: arrayUnion(formattedDate) });
        } else {
          await setDoc(userRef, { periodDates: [formattedDate] });
        }

        setPeriodDates((prev) => [...prev, formattedDate]); // Update state
        navigate("/period-info"); // Redirect after marking date
      } catch (error) {
        console.error("Error saving period date:", error);
      }
    }
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const weekStart = startOfWeek(monthStart);
  const weekEnd = endOfWeek(monthEnd);
  const today = format(new Date(), "yyyy-MM-dd");

  const days = eachDayOfInterval({ start: weekStart, end: weekEnd });

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth} className="nav-button">
          {"<"}
        </button>
        <h2>{format(currentDate, "MMMM yyyy")}</h2>
        <button onClick={handleNextMonth} className="nav-button">
          {">"}
        </button>
      </div>
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}
        {days.map((day) => {
          const formattedDay = format(day, "yyyy-MM-dd");
          const isCurrentDay = formattedDay === today;
          const isPeriodDay = periodDates.includes(formattedDay);

          return (
            <div
              key={day}
              className={`calendar-day ${
                format(day, "MM") !== format(currentDate, "MM")
                  ? "other-month"
                  : ""
              } ${isCurrentDay ? "current-day" : ""} ${
                isPeriodDay ? "period-day" : ""
              }`}
              onClick={() => handleDateClick(day)}
            >
              {format(day, "d")}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
