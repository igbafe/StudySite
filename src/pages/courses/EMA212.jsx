import React, { useState } from "react";
import "./courses.css";
// import { useExampleContext } from "../../data/third";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate for navigation

const CourseList = () => {
  const [openVideoIndex, setOpenVideoIndex] = useState(null);

  const courseItems = [
    {
      title: "Introduction to second-order differential equations",
      type: "Video",
      duration: "19 min",
      videoUrl: "https://www.youtube.com/embed/FrF1QBP8ejo",
    },
    {
      title: "How to solve homogeneous second-order differential equations",
      type: "Video",
      duration: "25 min",
      videoUrl: "https://www.youtube.com/embed/uI2xt8nTOlQ",
    },

    {
      title:
        "Methods to solve non-homogeneous second-order differential equations",
      type: "Video",
      duration: "25 min",
      videoUrl: "https://www.youtube.com/embed/AMuPDHj6t3A",
    },
    {
      title: "What is a line integral?",
      type: "Video",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/Tz14rC0XvHI",
    },
    {
      title: "Differentiation of Integral",
      type: "Video",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/AdLAkD-r9Rs",
    },
    {
      title: "Analytical functions of complex variables",
      type: "Video",
      duration: "1hr 23 min",
      videoUrl: "https://www.youtube.com/embed/OQz1ydBcQSA",
    },
    {
      title: "Understanding the Cauchy-Riemann equations",
      type: "Video",
      duration: "19 min",
      videoUrl: "https://www.youtube.com/embed/OfN9QG0zCXg",
    },
  ];

  const handleVideoToggle = (index) => {
    setOpenVideoIndex(openVideoIndex === index ? null : index);
  };

  const navigate = useNavigate(); // Create a navigate function

  // Functions to handle course button navigation
  const handleCourseButtonClick = (courseId) => {
    if (courseId === "EEE212") {
      navigate("/cpe200"); // Navigate to internal page for CPE351
    } else if (courseId === "EMA212") {
      navigate("/ema212"); // Navigate to internal page for CPE361
    } else if (courseId === "MEE212") {
      navigate("/mee212"); // Navigate to internal page for CPE375
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div>
      <div className=" dept mt-3  col-md-3"> Computer Engineering 200l</div>
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
              </div>
            )}
          </div>
        </div>
        <div className="course-buttons col-6">
          <button
            className="btn"
            onClick={() => handleCourseButtonClick("EEE212")}
          >
            EEE212
          </button>
          <button
            className="btn active btn-outline-light"
            onClick={() => handleCourseButtonClick("EMA212")}
          >
            EMA212
          </button>

          <button
            className="btn"
            onClick={() => handleCourseButtonClick("MEE212")}
          >
            MEE212
          </button>
        </div>
      </div>

      <div className="container mb-3">
        <div className="row">
          {/* Course Description Section */}
          <div className="col-md-6 course-des" style={{ padding: "20px" }}>
            <h4>
              <b>MEE212</b>
            </h4>
            <h5>Engineering Mathematics 2</h5>
            <p>
              Welcome to Engineering Mathematics 2, where you will tackle
              advanced mathematical concepts essential for engineering
              applications. This course covers second-order differential
              equations, multiple integrals, and functions of complex variables,
              preparing you for complex problem-solving in engineering.
            </p>
          </div>

          {/* Course List Section */}
          <div className="col-md-6" style={{ padding: "20px" }}>
            <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
              Course Content
            </div>
            <div
              style={{
                marginBottom: "20px",
                color: "#1a73e8",
                cursor: "pointer",
              }}
            ></div>
            <div className="course-list">
              {courseItems.map((item, index) => (
                <div key={index}>
                  <div
                    className="course-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 0",
                      borderBottom:
                        index < courseItems.length - 1
                          ? "1px solid #ddd"
                          : "none",
                      cursor: item.videoUrl ? "pointer" : "default",
                    }}
                    onClick={() => item.videoUrl && handleVideoToggle(index)}
                  >
                    <span
                      style={{
                        color: "green",
                        fontSize: "20px",
                        marginRight: "10px",
                      }}
                    >
                      ✔️
                    </span>
                    <div style={{ flex: 1 }}>
                      <div>{item.title}</div>
                      <div style={{ fontSize: "12px", color: "gray" }}>
                        {item.type} - {item.duration}
                      </div>
                    </div>
                  </div>
                  {openVideoIndex === index && item.videoUrl && (
                    <div style={{ padding: "10px 0" }}>
                      <iframe
                        width="100%"
                        height="315"
                        src={item.videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      <div className="container text-center d-flex flex-column justify-content-center align-items-center" style={{ padding: "20px" }}>
  <p style={{ fontSize: "16px", fontWeight: "600", color: "white" }}>
    Do you have a topic you'd like us to add that isn't covered yet? Click below to let us know!
  </p>
  
  <a href="https://forms.gle/o5jQA5jbegCBAKSB6 " target="_blank" rel="noopener noreferrer">
  <button
    className="btn"
    style={{
      backgroundColor: "#FF944D",
      color: "black",
      fontSize: "20px",
      padding: "12px 24px",
      borderRadius: "8px",
      marginTop: "20px",
      fontWeight: 500,
    }}
  >
    Request a New Topic
  </button>
</a>
</div>

    </div>
  );
};

export default CourseList;
