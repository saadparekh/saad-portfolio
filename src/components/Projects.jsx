import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

// Import images from src/assets
import uniImg from "../assets/projects/university.jpeg";
import eiaImg from "../assets/projects/eia.jpeg";
import cinemaImg from "../assets/projects/cinema.jpeg";

export default function Projects() {
  const projectData = [
    {
      title: "University Complaint System",
      description:
        "A Flask + SQLite system to track and manage university complaints efficiently.",
      github: "https://github.com/saadparekh/university_complain_management_system",
      tech: ["Flask", "SQLite", "HTML", "CSS"],
      image: uniImg,
    },
    {
      title: "Environmental Impact Analyzer",
      description:
        "AI-based tool to calculate carbon footprint and analyze product impact.",
      github: "https://github.com/saadparekh/Environment-Effect-Analyzer",
      tech: ["Python", "AI", "Data Analysis"],
      image: eiaImg,
    },
    {
      title: "Cinema Booking System",
      description:
        "Java-based seat reservation and ticket booking system with a simple UI.",
      github: "https://github.com/saadparekh/ManagementSystemCinema",
      tech: ["Java", "OOP"],
      image: cinemaImg,
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 text-white min-h-screen relative bg-gradient-to-r from-blue-900 via-purple-900 to-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.07, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/10 rounded-2xl shadow-md overflow-hidden w-full md:w-72 flex flex-col transform transition cursor-pointer"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              {/* Project Details */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-1 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-3 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-blue-600/30 text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-white rounded-full text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/saadparekh?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition transform"
          >
            More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
