import React from "react";

const Navbar = () => {
  const handleGitHubClick = () => {
    window.open("https://github.com/Deepanshurathore01", "_blank");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Portfolio</h1>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact me</a>
      </div>
      <div className="github-btn">
        <button onClick={handleGitHubClick}>GitHub</button>
      </div>
    </div>
  );
};

export default Navbar;
