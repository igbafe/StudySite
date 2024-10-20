import React from "react";
import "./security.css";
import { Link } from "react-router-dom";

const SecuritySection = () => {
  return (
    <div className="container mt-1">
      {/* <div className="section-title">
        <h4><b>Security</b></h4>
      </div> */}

      <div className="row card-container mt-3">
        <div className="col-md-6 col-lg-4 mb-2">
          <div className="info-card">
            <p>
              Update on the list of Verified Campus Organizations/ Associations
            </p>
            <button className="btn btn-primary">
              <Link to="/ComingSoon">Click Here</Link>
            </button>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-2">
          <div className="info-card">
            <p>
              Daily Campus Update. Know what's happening before you step out of
              your hostel
            </p>
            <button className="btn">
              <Link to="/ComingSoon">Click Here</Link>
            </button>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-2">
          <div className="info-card">
            <p>
              Reduce Clearance Stress and know what exactly is needed all
              through your clearance process
            </p>
            <button className="btn btn-primary">Click Here</button>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-2">
          <div className="info-card">
            <p>
              Are you a fresher? Keep yourself updated with the University
              orientation & regulations
            </p>
            <button className="btn btn-primary">Click Here</button>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-1 flex-wrap">
        <button className="btn1 btncustom m-2 px-5 py-3 spaced-button">
          Contact Campus Security
        </button>
        <button className=" btncustom m-2 px-5 py-3">
          Contact Campus Hospital
        </button>
      </div>
    </div>
  );
};

export default SecuritySection;
