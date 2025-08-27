import React from "react";
import { FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";

export default function About() {
  const expertise = [
    {
      icon: FaBrain,
      title: "AI & Machine Learning",
      desc: "Building intelligent models and exploring data-driven solutions with AI/ML.",
    },
    {
      icon: FaCode,
      title: "Web Development",
      desc: "Crafting responsive, modern, and scalable websites & applications.",
    },
    {
      icon: FaLaptopCode,
      title: "Software Development",
      desc: "Designing and implementing scalable software solutions with strong problem-solving focus.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Section */}
        <div className="flex-1 p-10 bg-gray-800 rounded-2xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-500">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <h2 className="text-2xl font-semibold mb-6 relative pb-3 after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-blue-400 after:mt-2">
            Passionate Developer & Tech Enthusiast
          </h2>
          <p className="text-gray-300 mb-4 text-lg md:text-xl leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold text-indigo-400">Saad Sohail</span>, a
            dedicated developer who loves building impactful digital solutions. I
            work with{" "}
            <span className="font-semibold text-indigo-400">
              HTML, CSS, JavaScript, React.js, TailwindCSS
            </span>{" "}
            for frontend development, and also explore{" "}
            <span className="font-semibold text-indigo-400">
              Python, Java, SQL, and AI/ML
            </span>
            .
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            I am passionate about combining creativity with technology and
            continuously learning to grow as a full-stack developer.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full font-semibold shadow-lg transform transition hover:scale-105 hover:shadow-indigo-500/60"
          >
            Get In Touch
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-8 bg-gradient-to-br from-indigo-700 to-blue-600 rounded-2xl shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 relative pb-3 after:block after:w-20 after:h-1 after:bg-white after:mt-2">
            My Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertise.map((exp, i) => (
              <div
                key={i}
                className="p-4 bg-white/10 backdrop-blur-md rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col items-start"
                style={{ minHeight: "0", maxHeight: "200px" }} // fixed height
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl mr-4">
                    <exp.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">{exp.title}</h3>
                </div>
                <p className="text-white/90 text-base md:text-lg leading-snug">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
