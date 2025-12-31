import React from "react";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaBrain,
} from "react-icons/fa";
import { SiFlask, SiSqlite, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const skills = [
  { name: "Python", icon: <FaPython className="text-yellow-400 text-4xl md:text-5xl" /> },
  { name: "Java", icon: <FaJava className="text-red-500 text-4xl md:text-5xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl md:text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl md:text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300 text-4xl md:text-5xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-4xl md:text-5xl" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-4xl md:text-5xl" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-300 text-4xl md:text-5xl" /> },
  { name: "SQLite", icon: <SiSqlite className="text-blue-400 text-4xl md:text-5xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 text-4xl md:text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl md:text-5xl" /> },
  { name: "AI/ML", icon: <FaBrain className="text-pink-400 text-4xl md:text-5xl" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center py-20 text-white relative bg-gradient-to-r from-blue-900 via-purple-900 to-black overflow-hidden"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Skills
        </span>
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-11/12 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center justify-center bg-white/10 p-5 rounded-2xl shadow-lg hover:shadow-purple-500/50 cursor-pointer"
          >
            <div className="mb-3">{skill.icon}</div>
            <p className="text-base md:text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
