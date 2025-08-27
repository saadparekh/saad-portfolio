import React from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiTensorflow } from "react-icons/si";

const skills = [
  { name: "Python", level: 90, icon: <FaPython className="text-yellow-400 text-4xl" />, category: "Backend", experience: "2 years" },
  { name: "Java", level: 80, icon: <FaJava className="text-red-500 text-4xl" />, category: "Backend", experience: "1.5 years" },
  { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500 text-4xl" />, category: "Frontend", experience: "3 years" },
  { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500 text-4xl" />, category: "Frontend", experience: "3 years" },
  { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-300 text-4xl" />, category: "Frontend", experience: "2.5 years" },
  { name: "React", level: 80, icon: <FaReact className="text-blue-400 text-4xl" />, category: "Frontend", experience: "2 years" },
  { name: "Tailwind", level: 85, icon: <SiTailwindcss className="text-cyan-400 text-4xl" />, category: "Frontend", experience: "1.5 years" },
  { name: "SQL", level: 80, icon: <FaDatabase className="text-green-400 text-4xl" />, category: "Database", experience: "2 years" },
  { name: "Bootstrap", level: 75, icon: <SiBootstrap className="text-purple-500 text-4xl" />, category: "Frontend", experience: "1 year" },
  { name: "AI/ML", level: 90, icon: <SiTensorflow className="text-orange-400 text-4xl" />, category: "AI/ML", experience: "1 year" },
];

export default function Skills() {
  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>

        <div className="space-y-12">
          {categories.map((cat, i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold mb-6 text-blue-300 border-b border-gray-700 inline-block pb-1">
                {cat}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl
                                 flex flex-col justify-center items-center text-center
                                 hover:scale-105 hover:shadow-blue-500/40 transition-all duration-300"
                      whileHover={{ scale: 1.08 }}
                      title={`Experience: ${skill.experience}`}
                    >
                      {/* Icon */}
                      <div className="mb-4">{skill.icon}</div>

                      {/* Circular Progress */}
                      <div className="w-24 h-24 mb-4">
                        <CircularProgressbar
                          value={skill.level}
                          text={`${skill.level}%`}
                          styles={buildStyles({
                            pathColor: `rgba(59, 130, 246, ${skill.level / 100})`,
                            textColor: "#fff",
                            trailColor: "rgba(255,255,255,0.1)",
                          })}
                        />
                      </div>

                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{skill.experience}</p>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
