import React from "react";
import "./hero.css";
// import heroimg from "../assets/images/hero_con.png";
import pict2 from "../assets/images/WhatsApp Image 2024-07-19 at 10.18.46_5c1c3f53.jpg";
import pict4 from "../assets/images/WhatsApp Image 2024-07-19 at 10.18.46_e5d7eefc.jpg";
import pict1 from "../assets/images/WhatsApp Image 2024-07-19 at 10.18.46_0a2df633.jpg";
import pict3 from "../assets/images/WhatsApp Image 2024-07-19 at 10.18.47_ec41c15d.jpg";
const Hero = () => {
  return (
    <div className="hro">
      <div className="hero-section container">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center col-12">
            <div className="hero-text">
              <h1>What’s Holding You Back from Reaching Your Full Potential as a Student?"</h1>
              <p>
                <span className="s-course">Campus:</span> StudyBoosta is your one click to open doors you didn’t know existed. Transform your university experience with easy access to your past questions, simplified course tutorials, exclusive scholarship and internship updates, and essential digital skills. We’re here to fuel your success every step of the way.

              </p>
              <p>opportunities with the help of studyboosta</p>
            </div>
          </div>
          <div className="container">
            <div className="image-container">
              <img src={pict1} className="img1" alt="Image1" />
              <img src={pict2} className="img2" alt="Image2" />
              <img src={pict3} className="img3" alt="Image3" />
              <img src={pict4} className="img4" alt="Image4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;