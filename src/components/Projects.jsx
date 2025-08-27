import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projectData = [
    {
      title: "University Complaint System",
      description: "A complaint tracking system built with Python (Flask + SQLite + HTML/CSS).",
      github: "https://github.com/saadparekh/university_complain_management_system",
    },
    {
      title: "Environmental Impact Analyzer (EIA)",
      description: "AI-based system for analyzing product carbon footprints.",
      github: "https://github.com/saadparekh/Environment-Effect-Analyzer",
    },
    {
      title: "Cinema Booking (Java)",
      description: "A Java-based seat reservation and ticket booking system.",
      github: "https://github.com/saadparekh/ManagementSystemCinema",
    },
    {
      title: "GitHub Profile Finder (React + API)",
      description: "React.js project using GitHub API to search & display GitHub profiles dynamically.",
      github: "https://github.com/saadparekh/github-profile-finder",
    },
    {
      title: "AI Fake Job Detector",
      description: "AI/ML project to detect fake job postings using Python and ML algorithms.",
      github: "https://github.com/saadparekh/ai_fake-job-detector",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-md border border-gray-700 hover:border-blue-500 rounded-2xl p-6 flex flex-col justify-between w-full max-w-sm 
              hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium px-4 py-2 rounded-lg transition duration-300 shadow-md"
              >
                <FaGithub className="mr-2 text-xl" /> GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
