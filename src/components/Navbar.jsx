import React from 'react';

const Navbar = () => {
    console.log('Home');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Study Booster</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/courses">Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/chatbot">Chatbot</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/scholarship">Scholarships</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/security">Security</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="/Register" className="btn btn-warning ml-auto">Get Started</a>
      </div>
    </nav>
  );
}

export default Navbar;
