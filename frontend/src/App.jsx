import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageSlider from "./pages/ImageSlider";
import AuthForm from "./components/AuthForm"; // Import the login page
import Page1 from "./pages/Page1";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import PeriodInfo from "./pages/PeriodInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageSlider />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </Router>
  );
  // return <PeriodInfo />;
};

export default App;
