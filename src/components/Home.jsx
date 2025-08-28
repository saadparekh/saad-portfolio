import React from "react";
import ProfilePic from "../assets/profilee.jpeg";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 sm:pt-28 bg-gradient-to-r from-blue-900 via-purple-900 to-black overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}         // Start hidden and slightly down
        animate={{ opacity: 1, y: 0 }}          // Animate to visible and original position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        className="relative z-10 flex flex-col items-center max-w-4xl w-full space-y-4 sm:space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight drop-shadow-lg">
          Hi, I'm Saad Sohail
        </h1>

        <h2
          className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-wide italic 
          bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
          bg-clip-text text-transparent drop-shadow-md -mt-1"
        >
          Web Designer & Full-Stack Developer
        </h2>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full border-4 border-purple-500 overflow-hidden shadow-2xl transform transition hover:scale-105 -mt-2"
        >
          <img
            src={ProfilePic}
            alt="Saad Sohail"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg max-w-2xl text-gray-200 leading-relaxed -mt-2"
        >
          Building AI-driven, scalable web solutions with React, Flask, Python, and SQLite — merging full-stack development with Machine Learning for intelligent applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center -mt-1"
        >
          <a
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition shadow-lg hover:shadow-blue-500/50 cursor-pointer text-sm sm:text-base"
          >
            View My Work
          </a>

          <a
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 sm:px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition shadow-lg hover:shadow-purple-500/50 cursor-pointer text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 sm:bottom-8 animate-bounce z-10">
        <ChevronDown size={36} className="text-blue-400" />
      </div>
    </section>
  );
}
