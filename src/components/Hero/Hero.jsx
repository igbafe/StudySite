import React from "react";
import "./hero.css";
import heroimg from "../assets/images/hero_con.png";
const Hero = () => {
  return (
    <div className="hro ">
      <div className="hero-section container">
        <div className="container row ">
          <div className="d-flex justify-content-center align-items-center col-12">
            <div className="mt-4">
              <h1 className="hero-text">
                Find the best{" "}
                <span className="s-course" span>
                  <i>Courses</i>
                </span>
              </h1>
              <h1 className="hero-text">for academic growth</h1>
            </div>
          </div>
          <div className=" heroimg justify-content-center container col-12 ">
          <img src={heroimg} alt="heroimgage" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
