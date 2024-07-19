import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="  navbar navbar-expand-lg  ">
      <div className="dash "> StudyBoosta</div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <ul className="navbarnav navbar-nav  navbar-expand d-flex ">
          <li className="nav-link p-1">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link p-1">
            <NavLink
              to={"/courses"}
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Courses
            </NavLink>
          </li>
          <li className="nav-link p-1">
            <NavLink
              to={"/chatbot"}
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Chatbot
            </NavLink>
          </li>
          <li className="nav-link p-1">
            <NavLink
              to={"/Scholarship"}
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Scholarships
            </NavLink>
          </li>
          <li className="nav-link p-1">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              to={"/security"}
            >
              Security
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <NavLink
          to={"/Register"}
          className={"btn btn-warning btn-get-started ml-auto"}
        >
          Get Started
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
