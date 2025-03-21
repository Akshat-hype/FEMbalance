import React from 'react';
import './Page4.css';

const Page4 = () => {
  return (
    // <div className="pcos-container">
      <form className="pcos-form">
        <h2 className="title">Do you ever had pcod?</h2>
        <div className="form-group"></div>
        <label className="input-label">Select one option</label>
        <div className="input-field">
          <label>
            <input type="radio" name="pcod" value="yes" /> Yes
          </label>
          </div>
          <br />
          <div className="input-field">
          <label>
            <input type="radio" name="pcod" value="no" /> No
          </label>
          
          </div>
          
      </form>
    // </div>
  );
};

export default Page4;
