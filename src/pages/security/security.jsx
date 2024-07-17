import React from 'react';
import './security.css'

const SecuritySection = () => {
  return (
    <div className="container mt-1">
      <div className="section-title col-md-3">
        <h4><b>Security</b></h4>
      </div>

      <div className="card-container mt-3">
        <div className="">
          <div className="info-card">
            <p>Update on the list of Verified Campus Organizations/ Associations</p>
            <button>Click Here</button>
          </div>
        </div>
        <div className="">
          <div className="info-card">
            <p>Daily Campus Update. Know what's happening before you step out of your hostel</p>
            <button>Click Here</button>
          </div>
        </div>
        <div className="">
          <div className="info-card">
            <p>Reduce Clearance Stress and know what exactly is needed all through your clearance process</p>
            <button>Click Here</button>
          </div>
        </div>
        <div className="">
          <div className="info-card">
            <p>Are you a fresher? Keep yourself updated with the University orientation & regulations</p>
            <button>Click Here</button>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-custom px-5 py-3">Contact Campus Security</button>
        <button className="btn btn-custom px-5 py-3">Contact Campus Hospital</button>
      </div>
    </div>
  );
};

export default SecuritySection;
