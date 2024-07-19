import React from 'react'
import './courses.css'
const courses = () => {
   
  return (
    <div>
      <div className="Header mt-3"> {/* Content Header */}
        <div className="content-header col-md-3">
          <h2>Courses</h2>
        </div>

        {/* Course Buttons */}
        <div className="course-buttons col-md-6">
          <button className="btn active btn-outline-light ">CPE351</button>
          <button className="btn">CPE361</button>
          <button className="btn ">CPE375</button>
        </div>
      </div>

      {/* Video Section */}
      <div className="container">
        <div className="row info" style={{ fontFamily: 'Poppins' }}>
          <p><b>CURRICULUM INTRO</b></p>
        </div>
        <div className="video-section mt-1">
          <div className="row">
            <div className="col-md-6">
              <div className="row w-100">
                <video controls>
                  <source src="video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  <video controls>
                    <source src="video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="col-md-4">
                  <video controls>
                    <source src="video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="col-md-4">
                  <video controls>
                    <source src="video3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <div className="col-md-6 course-des justify-content-center">
              <h4><b>CPE 351</b></h4>
              <p>This is an introduction video to your course CPE 351. Access other lecture videos once you're done with the introductory video</p>
              <p>This is an introduction video to your course CPE 351. Access other lecture videos once you're done with the introductory video</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="container">
      <div className="action-buttons d-flex justify-content-between">
        <div className="col-md-6 ">
          <button className="btn  spaced-button"><b> Got Questions?</b></button>
        </div>
        <div className="col-md-6 ">
          <button className="btn  spaced-button"><b>Answer Past Questions</b></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default courses