import React from "react";
import './Scholarship.css';

const Scholarship = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center mb-4 selection">
        <button className=" btn-custom m-1">Select Category &gt;</button>
        <button className=" btn-custom m-1">Select Location &gt;</button>
        <button className=" btn-custom btn-sec">Search</button>
      </div>

      <div className="update-section">
        <div className="update">
          <div className="section-title mt-2">
            <p>FEATURED UPDATES</p>
          </div>
          <div className="card-deck mt-3 row">
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h5 className="card-title">Canadian Council of Muslim Women Lila Fahlman Scholarship 2024</h5>
                <p className="card-text">Deadline: July 31, 2024</p>
                <a href="/" className="btn btn-custom">Apply Today</a>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h5 className="card-title">Stanbic IBTC University Scholarship 2024 for Nigerian Students</h5>
                <p className="card-text">Deadline: July 31, 2024</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h5 className="card-title">Open Futures Scholarship for Black Students 2024/2025</h5>
                <p className="card-text">Deadline: July 31, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="update mt-3">
          <div className="section-title mt-2">
            <p>SCHOLARSHIPS</p>
          </div>
          <div className="card-deck mt-3 row">
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h5 className="card-title">Canadian Council of Muslim Women Lila Fahlman Scholarship 2024</h5>
                <p className="card-text">Deadline: July 31, 2024</p>
                <a href="/" className="btn btn-custom">Apply Today</a>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h5 className="card-title">Stanbic IBTC University Scholarship 2024 for Nigerian Students</h5>
                <p className="card-text">Deadline: July 31, 2024</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h5 className="card-title">Open Futures Scholarship for Black Students 2024/2025</h5>
                <p className="card-text">Deadline: July 31, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="update mt-3">
          <div className="section-title mt-2">
            <p>INTERNSHIPS</p>
          </div>
          <div className="card-deck mt-3 row">
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h5 className="card-title">Canadian Council of Muslim Women Lila Fahlman Scholarship 2024</h5>
                <p className="card-text">Deadline: July 31, 2024</p>
                <a href="/#" className="btn btn-custom">Apply Today</a>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h5 className="card-title">Stanbic IBTC University Scholarship 2024 for Nigerian Students</h5>
                <p className="card-text">Deadline: July 31, 2024</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h5 className="card-title">Open Futures Scholarship for Black Students 2024/2025</h5>
                <p className="card-text">Deadline: July 31, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scholarship;
