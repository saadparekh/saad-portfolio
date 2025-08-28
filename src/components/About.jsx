import React from "react";
import { FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

// Variants for container (stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

// Variants for each box
const boxVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-4 py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-black overflow-hidden text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Flex container with animation */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible
        >
          {/* Left Section - About Me */}
          <motion.div
            variants={boxVariants}
            className="flex-1 p-6 bg-gray-800/70 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition duration-300"
          >
            <h1 className="text-3xl font-bold mb-3">About Me</h1>
            <h2 className="text-xl font-semibold mb-4 relative pb-1 after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-blue-400 after:mt-2">
              Student & Aspiring Full-Stack Developer
            </h2>
            <p className="text-gray-300 mb-3 text-sm md:text-base leading-relaxed">
              Hey, I’m <span className="font-semibold text-indigo-400">Saad Sohail</span> — a curious student and aspiring full-stack developer with a passion for creating intelligent and user-friendly web applications. Currently exploring modern technologies like <span className="font-semibold text-indigo-400">React, Flask, Python, AI/ML, and databases</span>.
            </p>
            <p className="text-gray-300 mb-3 text-sm md:text-base leading-relaxed">
              I focus on <span className="font-semibold text-indigo-400">crafting responsive interfaces and robust backend systems</span>, combining creativity with technology to deliver practical and innovative solutions.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Let’s create something meaningful — where <span className="font-semibold text-indigo-400">ideas meet code</span>, and technology brings them to life.
            </p>
          </motion.div>

          {/* Right Section - Expertise */}
          <motion.div
            variants={boxVariants}
            className="flex-1 p-6 bg-gray-800/70 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition duration-300 text-white"
          >
            <h2 className="text-xl font-semibold mb-4 relative pb-1 after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-indigo-400 after:to-blue-300 after:mt-2">
              My Expertise
            </h2>

            <div className="space-y-3">
              <motion.div
                variants={boxVariants}
                className="flex items-start gap-3 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl">
                  <FaBrain className="text-indigo-400 text-lg" />
                </div>
                <div>
                  <h3 className="text-md font-semibold">AI & Machine Learning</h3>
                  <p className="text-gray-300 text-xs">
                    Building intelligent models and exploring data-driven solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={boxVariants}
                className="flex items-start gap-3 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl">
                  <FaCode className="text-indigo-400 text-lg" />
                </div>
                <div>
                  <h3 className="text-md font-semibold">Web Development</h3>
                  <p className="text-gray-300 text-xs">
                    Crafting responsive, modern, and scalable websites & apps.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={boxVariants}
                className="flex items-start gap-3 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl">
                  <FaLaptopCode className="text-indigo-400 text-lg" />
                </div>
                <div>
                  <h3 className="text-md font-semibold">Software Development</h3>
                  <p className="text-gray-300 text-xs">
                    Designing scalable software solutions with strong problem-solving focus.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
