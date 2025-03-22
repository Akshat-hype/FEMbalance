import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageSlider from "./pages/ImageSlider";
import AuthForm from "./components/AuthForm"; // Import the login page
import PeriodInfo from "./pages/PeriodInfo";
import QuestionForm from "./pages/QuestionForm";

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<ImageSlider />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/QuestionForm" element={<QuestionForm />} />
        
       
      </Routes>
   
    </Router>
     
  );
  //return <PeriodInfo />;
};

export default App;
