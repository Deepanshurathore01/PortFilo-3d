import React from "react";
import me from "../assets/Images/me.jpeg";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-left">
        <h1>About Me</h1>
        <p>
          Hello! I’m <span className="highlight">Deepanshu Rathore</span>, a
          passionate and self-motivated software developer with expertise in{" "}
          <strong>Data Structures and Algorithms (DSA)</strong>, and{" "}
          <strong>Full Stack Development (MERN Stack)</strong>.
        </p>
        <p>
          My academic journey reflects my commitment to continuous learning:
        </p>
        <ul className="education-list">
          <li>
            <span className="year">2023:</span> Master of Computer Applications
            from Shri Vaishnav Institute of Management, Indore.
          </li>
          <li>
            <span className="year">2022:</span> Bachelor's in Science (Hons)
            from Barkatullah University, Bhopal.
          </li>
          <li>
            <span className="year">2019:</span> Higher Secondary Education from
            MP Board of Secondary Education.
          </li>
        </ul>
        <p>
          I enjoy solving real-world problems and crafting impactful solutions.
          Let’s connect and create something incredible together!
        </p>
      </div>
      <div className="about-right">
        <div className="profile-photo-container">
          <img src={me} alt="Profile Photo" class="profile-photo" />
        </div>
      </div>
    </div>
  );
};

export default About;
