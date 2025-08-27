import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
            My Portfolio
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => handleScroll(section)}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

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
        <div className="md:hidden bg-gray-800 py-4">
          <ul className="flex flex-col items-center space-y-4 font-medium">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => handleScroll(section)}
                    className="hover:text-blue-400 transition-colors duration-300 text-lg"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
