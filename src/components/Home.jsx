import React from "react";
import ProfilePic from "../assets/profilee.jpeg";
import { ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // colored icons

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-6"
    >
      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Hi, I'm Saad Sohail
      </h1>

      {/* Profile Picture */}
      <div className="mt-8 w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-500 overflow-hidden shadow-2xl transform transition hover:scale-105">
        <img
          src={ProfilePic}
          alt="Saad Sohail"
          className="w-full h-full object-cover object-center scale-95"
        />
      </div>

      {/* Description */}
      <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300 leading-relaxed">
        Full-Stack Web Developer • AI Enthusiast • Data Engineer
      </p>

      {/* Social Icons */}
      <div className="flex mt-4 space-x-6">
        <a
          href="https://github.com/saadparekh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transform transition duration-300"
        >
          <FaGithub size={32} className="text-white hover:text-gray-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/saad-parekh-847a06292/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transform transition duration-300"
        >
          <FaLinkedin size={32} className="text-blue-500 hover:text-blue-400" />
        </a>
      </div>

      {/* View My Work Button */}
      <a
        onClick={() =>
          document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition shadow-xl hover:shadow-blue-500/50 cursor-pointer"
      >
        View My Work
      </a>

      {/* Chevron Down */}
      <div className="mt-12 animate-bounce">
        <ChevronDown size={40} className="text-blue-400" />
      </div>
    </section>
  );
}
