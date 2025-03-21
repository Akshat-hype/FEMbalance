import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Calendar from "./pages/Calendar";
import PeriodInfo from "./pages/PeriodInfo";

const Home = () => <h1>Home Page</h1>;

import Exercise from "./pages/Exercise";
const Diet = () => <h1>Diet Page</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/period-info" element={<PeriodInfo />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/diet" element={<Diet />} />
      </Routes>
    </Router>
  );
}

export default App;
