import React, { useState } from "react";
import "./courses.css";
// import { useExampleContext } from "../../data/third";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate for navigation

const CourseList = () => {
  const [openVideoIndex, setOpenVideoIndex] = useState(null);

  const courseItems = [
    {
      title: "Introduction to position and reference frames in mechanics",
      type: "Video",
      duration: "7 min",
      videoUrl: "https://www.youtube.com/embed/NxAvWfs92U4",
    },
    {
      title: "Types of coordinate systems in engineering mechanics",
      type: "Video",
      duration: "11 min",
      videoUrl: "https://www.youtube.com/embed/2-xHwk7rB94",
    },

    {
      title: "Scalar vs vector functions in engineering",
      type: "Video",
      duration: "23 min",
      videoUrl: "https://www.youtube.com/embed/haJVEtLN6-k",
    },
    {
      title: "Differentiation of functions in mechanics",
      type: "Video",
      duration: "9 min",
      videoUrl: "https://www.youtube.com/embed/pFeuGMMiZWw",
    },
    {
      title: "Understanding relative motion in mechanics",
      type: "Video",
      duration: "7 min",
      videoUrl: "https://www.youtube.com/embed/UcY5Gx_WMvI",
    },
    {
      title: "Kinetics of rigid bodies",
      type: "Video",
      duration: "55 min",
      videoUrl: "https://www.youtube.com/embed/IpH2NyaB9JU",
    },
    {
      title: "Translation and rotation of rigid bodies about a fixed axis",
      type: "Video",
      duration: "17 min",
      videoUrl: "https://www.youtube.com/embed/VnzsQmP6eMQ",
    },
    {
      title: "2D motion of rigid bodies",
      type: "Video",
      duration: "10 min",
      videoUrl: "https://www.youtube.com/embed/4LsLy9iJKFA",
    },
    {
      title: "Vectorial and non-vectorial methods in mechanics",
      type: "Video",
      duration: "59 min",
      videoUrl: "https://www.youtube.com/embed/8cyYqzlvSmg",
    },
    {
      title: "Impulse & Momentum ",
      type: "Video",
      duration: "8 min",
      videoUrl: "https://www.youtube.com/embed/bl2gEps8pEk",
    },
    {
      title: "Moment of inertia explained",
      type: "Video",
      duration: "24 min",
      videoUrl: "https://www.youtube.com/embed/NuZ27LgNeN8",
    },

    {
      title: "Simple harmonic motion in engineering",
      type: "Video",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/_Gnke2x3vT8",
    },
    {
      title: "Kinematics of SHM",
      type: "Video",
      duration: "10 min",
      videoUrl: "https://www.youtube.com/embed/Pj_2tiDmLHA",
    },
    {
      title: "SHM properties and applications",
      type: "Video",
      duration: "30 min",
      videoUrl: "https://www.youtube.com/embed/zI0Qgq5x1ok",
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
            className="btn"
            onClick={() => handleCourseButtonClick("EMA212")}
          >
            EMA212
          </button>

          <button
            className="btn active btn-outline-light"
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
            <h5>Engineering Mechanics 2</h5>
            <p>
              Welcome to Engineering Mechanics 2, a fundamental course focusing
              on the principles of dynamics. This course will help you
              understand the motion of bodies under the influence of forces,
              covering topics such as kinematics, kinetics, impulse, and
              momentum for practical engineering applications
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
