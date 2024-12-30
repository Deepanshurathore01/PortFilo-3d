import React, { useState, useEffect } from "react";
import coder from "../assets/Images/imgcoder.jpg";

const FrontPage = () => {
  const [designation, setDesignation] = useState("Software Developer");
  const [cubeColor, setCubeColor] = useState("#00aaff"); // Initial color of cube

  // Change designation and cube color every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDesignation((prev) =>
        prev === "Software Developer"
          ? "Mern Stack Developer"
          : "Software Developer"
      );
      
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="frontpage">
      <div className="left-side">
        <h1>Deepanshu Rathore 👨‍💻</h1>
        <h2>{designation}</h2>
        <p>
          Passionate Problem Solver. I specialize in:
          <br />
          🔢 Data Structures & Algorithms (DSA)
          <br />
          🌐 Proficient in front-end and back-end technologies
          (MERN).
          <br />
          💡 Good At Problem Solving
        </p>
        <div className="button-container">
          <a href="#contact">
  <button className="hire-me-button">Hire Me</button></a>
  <a href="https://www.linkedin.com/in/deepanshu-rathore/">
  <button className="connect-button">Connect</button></a>
</div>

      </div>

      <div className="right-side">
        <img src={coder} alt="" />
      </div>
    </div>
  );
};

export default FrontPage;
