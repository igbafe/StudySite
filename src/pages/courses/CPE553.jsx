import React, { useState } from "react";
import axios from "axios";
import "./courses.css";
// import { useExampleContext } from "../../data/third";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate for navigation
// import { Link } from "react-router-dom";
const Courses = () => {
  // const { Courses } = useExampleContext();
  console.log(Courses);

  const navigate = useNavigate(); // Create a navigate function

  // State management for 'Got Questions?' button
  const [loadingSend, setLoadingSend] = useState(false);
  const [questionSent, setQuestionSent] = useState(false);
  const [sendError, setSendError] = useState(null);

  // State management for 'Answer Past Questions' button
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [pastQuestions, setPastQuestions] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  // Function to send data (for 'Got Questions?' button)
  const handleSendData = async () => {
    setLoadingSend(true);
    setSendError(null); // Reset error
    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/got-questions",
        {
          question: "Your question data", // replace with dynamic data if needed
        }
      );
      setQuestionSent(true); // Data sent successfully
      setLoadingSend(false);
    } catch (err) {
      setSendError(err.message);
      setLoadingSend(false);
    }
  };

  // Function to fetch data (for 'Answer Past Questions' button)
  const handleFetchData = async () => {
    setLoadingFetch(true);
    setFetchError(null); // Reset error
    try {
      const response = await axios.get(
        "https://your-api-endpoint.com/past-questions"
      );
      setPastQuestions(response.data); // Set the data from the API
      setLoadingFetch(false);
    } catch (err) {
      setFetchError(err.message);
      setLoadingFetch(false);
    }
  };

  // Functions to handle course button navigation
  const handleCourseButtonClick = (courseId) => {
    if (courseId === "CPE551") {
      navigate("/cpe500"); // Navigate to internal page for CPE351
    } else if (courseId === "CPE531") {
      navigate("/cpe531"); // Navigate to internal page for CPE361
    } else if (courseId === "CPE551") {
      navigate("/cpe551"); // Navigate to internal page for CPE375
    }
  };
  // // State to manage the dropdown visibility
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // // Toggle dropdown visibility
  // const toggleDropdown = () => {
  //   setIsDropdownOpen((prev) => !prev);
  // };

  // // Handle navigation to different pages from dropdown items
  // const handleDropdownNavigation = (path) => {
  //   navigate(path);
  // };
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <div className=" dept mt-3  col-md-3"> Computer Engineering 500l</div>
      <div className="Header mt-3 justify-content-center">
        <div className="content-header header-container col-md-3">
          <div className="dropdown">
            <div className="dropdown-btn" onClick={toggleDropdown}>
              LEVEL
              <span>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <Link
                  to="/CPE200"
                  className="dropdown-item"
                  onClick={toggleDropdown}
                >
                  CPE200
                </Link>
                <Link
                  to="/courses"
                  className="dropdown-item"
                  onClick={toggleDropdown}
                >
                  CPE300
                </Link>

                <Link
                  to="/CPE500"
                  className="dropdown-item"
                  onClick={toggleDropdown}
                >
                  CPE500
                </Link>
             
                <Link
                  to="/CPE500"
                  className="dropdown-item"
                  onClick={toggleDropdown}
                >
                  CPE500
                </Link>
        </div>
      )}
    </div>
          
        </div>
        <div className="course-buttons col-6">
          <button
            className="btn"
            onClick={() => handleCourseButtonClick("CPE551")}
          >
            CPE551
          </button>
          <button
            className="btn"
            onClick={() => handleCourseButtonClick("CPE531")}
          >
            CPE531
          </button>

          <button
            className="btn  active btn-outline-light"
            onClick={() => handleCourseButtonClick("CPE551")}
          >
            CPE551
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="container">
        <div className="row info" style={{ fontFamily: "Poppins" }}>
          <p>
            <b>CURRICULUM INTRO</b>
          </p>
        </div>
        <div className="video-section mt-1">
          <div className="row">
            <div className="col-md-6">
              <div className="row alone">
                <iframe
                  src="https://www.youtube.com/embed/4hVWXQEVYSA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width="100%"
                  height="250"
                  frameBorder="0"
                ></iframe>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  <iframe
                    src="https://www.youtube.com/embed/7OS1wVx4634"
                    title="YouTube video 2"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="100%"
                    height="200"
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="col-md-4">
                  <iframe
                    src="https://www.youtube.com/embed/iQaFDpiNOlA"
                    title="YouTube video 3"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="100%"
                    height="200"
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="col-md-4">
                  <iframe
                    src="https://www.youtube.com/embed/XyZerq7-IvA?"
                    title="YouTube video 4"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="100%"
                    height="200"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-6 course-des justify-content-center">
              <h4>
                <b>CPE 551</b>
              </h4>
              <h5>Digital Signal Processing</h5>
              <p>
                This is an introduction video to your course CPE 551(Digital
                Signal Processing) Access other lecture videos once you're done
                with the introductory video.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="container ">
        <div className="action-buttons d-flex justify-content-between">
          {/* 'Got Questions?' button to send data */}
          <div className="col-md-6">
            <button
              className="btn spaced-button"
              onClick={handleSendData}
              disabled={loadingSend}
            >
              <b>{loadingSend ? "Sending..." : "Got Questions?"}</b>
            </button>
            {questionSent && <p>Question sent successfully!</p>}
            {sendError && <p>Error: {sendError}</p>}
          </div>

          {/* 'Answer Past Questions' button to fetch data */}
          <div className="col-md-6">
            <button
              className="btn spaced-button"
              onClick={handleFetchData}
              disabled={loadingFetch}
            >
              <b>{loadingFetch ? "Loading..." : "Answer Past Questions"}</b>
            </button>
            {pastQuestions && (
              <div>
                {/* Render past questions data */}
                {pastQuestions.map((question, index) => (
                  <p key={index}>{question}</p>
                ))}
              </div>
            )}
            {fetchError && <p>Error: {fetchError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
