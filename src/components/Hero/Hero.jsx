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
        <div className=" row ">
          <div className="d-flex justify-content-center align-items-center col-12">
            <div className=" hero-text">
              <h1>
                Maximize your Undergraduate life on
              </h1>
              <p> <span className="s-course" span>
                  Campus:
                </span> study smarter, stay safer, and seize Relevant </p>
              <p> opportunities with the help of studyboosta </p>
            </div>
          </div>
          <div className="container">
        <div className="image-container">
            <img src={pict1} className="img1" alt="pict 1"/>
            <img src={ pict4} className="img2" alt="pict 2"/>
            <img src={pict3} className="img3" alt="pict 3"/>
            <img src={pict2} className="img4" alt="pict 4"/>
        </div>
    </div>
          <div className="  col-12 ">
            
          {/* <img  className="heroimg " src={heroimg} alt="heroimgage" /> */}
          
        </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
