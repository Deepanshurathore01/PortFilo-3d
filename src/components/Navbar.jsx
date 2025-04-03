import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGitHubClick = () => {
    window.open("https://github.com/Deepanshurathore01", "_blank");
  };

  return (
    <div className="bg-gray-900 text-white p-4 sticky top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl font-bold">Portfolio</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Links - Hidden on Mobile */}
        <div className={`absolute top-16 left-0 w-full bg-gray-900 md:static md:flex md:items-center md:gap-6 transition-all duration-300 ease-in ${isOpen ? "block" : "hidden"}`}>
          <a href="#home" className="block py-2 px-4 md:py-0 hover:text-gray-400">Home</a>
          <a href="#projects" className="block py-2 px-4 md:py-0 hover:text-gray-400">Projects</a>
          <a href="#about" className="block py-2 px-4 md:py-0 hover:text-gray-400">About</a>
          <a href="#skills" className="block py-2 px-4 md:py-0 hover:text-gray-400">Skills</a>
          <a href="#contact" className="block py-2 px-4 md:py-0 hover:text-gray-400">Contact me</a>
        </div>

        {/* GitHub Button - Shown Only on Desktop */}
        <div className="github-btn hidden md:block">
          <button onClick={handleGitHubClick} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
