import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {links.map((link, i) => (
              <span
                key={i}
                onClick={() => handleScroll(link.id)}
                className="hover:text-white transition-colors duration-300 font-medium cursor-pointer"
              >
                {link.name}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <h4 className="text-white font-semibold mb-2">Connect With Me</h4>
          <div className="flex gap-4">
            <a
              href="https://github.com/saadparekh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition duration-300"
            >
              <FaGithub size={24} className="text-white hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/saad-parekh-847a06292/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition duration-300"
            >
              <FaLinkedin size={24} className="text-blue-500 hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Saad Sohail | All Rights Reserved
      </p>
    </footer>
  );
}
