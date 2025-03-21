import React from 'react';
import './Page3.css';

const Page3 = () => {
  return (
    // <div className="pcos-container">
      <form className="pcos-form">
        <h2 className="title">What is your expected average cycle?</h2>
    
        <div className="form-group">
        <label className="input-label">🩸 Last Period Date</label>
        <input type="date" placeholder="dd-mm-yyyy" className="input-field" />
        </div>

        <div className="form-group">
        <label className="input-label">🩸 Average Menstrual cycle duration?</label>
        <input type="text" placeholder="31 days" className="input-field" />
        </div>

        <button type="submit" className="continue-btn">Continue</button>
      </form>
    // </div>
  );
};

export default Page3;
