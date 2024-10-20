import React from "react";
import "../comingsoon/comingsoon.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content justify-content-center">
        <h1>COMING SOON!</h1>
        <p>We're crafting something amazing!</p>
        <p>Join the StudyBoosta Community for updates.</p>
        <a
          className="join-button"
          href="https://chat.whatsapp.com/I2FEWTyTANI5F3sVWRQJD8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join StudyBoosta Community on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
