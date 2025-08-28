import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // menu band ho jaye click ke baad
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Saad.Dev
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {["home", "about", "skills", "projects"].map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section)}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}

          {/* Hire Me Button */}
          <button
            onClick={() => handleScroll("contact")}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transform transition shadow-md hover:shadow-blue-500/50"
          >
            Hire Me
          </button>

          {/* Social Links */}
          <div className="flex space-x-4 ml-4">
            <a
              href="https://github.com/saadparekh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/saad-parekh-847a06292/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-6">
          <ul className="flex flex-col items-center space-y-6 font-medium">
            {["home", "about", "skills", "projects"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleScroll(section)}
                  className="hover:text-blue-400 transition-colors duration-300 text-lg"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}

            {/* Hire Me Button */}
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transform transition shadow-md hover:shadow-blue-500/50"
              >
                Hire Me
              </button>
            </li>

            {/* Social Links */}
            <li className="flex space-x-6">
              <a
                href="https://github.com/saadparekh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/saad-parekh-847a06292/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin size={26} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
