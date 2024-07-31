import Hero from "../../components/Hero/Hero";
import './homepage.css';

import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="section d-flex flex-column justify-content-center align-items-center mt-5 ">
      <div className="container d-flex flex-column align-items-center">
        <div className="row justify-content-center">
          <div className="col-md-5 d-flex justify-content-center m-1">
            <video controls className="video-center">
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center platform m-1">
            <div className="plat text-center">
              <h3><b>How to navigate the StudyBoosta platform</b></h3>
              <p>Practical tutorial on how to use the StudyBoosta platform to Study Smarter, Stay Safer, and Seize relevant Opportunities on campus</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <Link to="/Register" className="btn btn-dark text-light btn-lg">Create Your Account Now</Link>
        </div>
      </div>
    </div>



    </>
  );
};

export default HomePage;
