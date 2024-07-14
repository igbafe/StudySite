import React from "react";
import Group_2 from "../assets/images/Group_2.png";
import Group_1 from "../assets/images/Group_1.png";
import image1 from "../assets/images/7.png";
import image2 from "../assets/images/4.png";
import image3 from "../assets/images/5.png";
import image4 from "../assets/images/1.png";
import image5 from "../assets/images/2.png";
import image6 from "../assets/images/3.png";
import image7 from "../assets/images/6.png";
import Ellipse_3 from "../assets/images/Ellipse_3.png";

const Hero = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="container mt-4">
          <div className="d-flex  justify-content-center align-items-center">
            <div className="col-2 d-flex flex-column justify-content-center">
              <img
                src={Group_1}
                className="img-fluid deco"
                alt="Background Decoration"
                style={{ marginRight: "5px" }}
              />
            </div>
            <div className="col-6 ">
              <h1 className="hero-text">
                Find the best{" "}
                <span className="s-course">
                  <i>Courses</i>
                </span>
              </h1>
              <h1 className="hero-text">for academic growth</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-0">
        <div className="image-container">
          {/* Image 1 */}
          <div className="image-item image-1">
            <img src={image1} alt="Image 1" />
          </div>

          {/* Images 2 and 3 */}
          <div className="image-item image-2-3">
            <img src={image2} alt="Image 2" />
            <img src={image3} alt="Image 3" />
          </div>

          {/* Image 4 */}
          <div className="image-item image-4">
            <img src={image4} alt="Image 4" />
          </div>

          {/* Images 5 and 6 */}
          <div className="image-item image-5-6">
            <img src={image5} alt="Image 5" />
            <img src={image6} alt="Image 6" />
          </div>

          {/* Image 7 */}
          <div className="image-item image-7">
            <img src={image7} alt="Image 7" />
          </div>
        </div>
        {/* Last Image */}
        <div className="image-item image-last">
          <img src={Group_2} alt="Last Image" />
        </div>
        <div>
          <img
            src={Ellipse_3}
            className="background-image"
            alt="Background Decoration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
