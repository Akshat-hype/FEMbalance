import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => <h1>Home Page</h1>;
const Calendar = () => <h1>Calendar Page</h1>;
const PeriodInfo = () => <h1>Period Info Page</h1>;
const Exercise = () => <h1>Exercise Page</h1>;
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
