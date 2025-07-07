"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiRedux,
  SiFirebase,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

// Title Animation
const sectionTitle = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Card Animation (Frontend & Tools Cards)
const cardVariant = {
  hidden: { y: -30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// List Item Animation
const listItemVariant = {
  hover: {
    y: -5,
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

const Skill = () => {
  const frontendSkills = [
    { name: "HTML", icon: <SiHtml5 className="w-5 h-5 text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="w-5 h-5 text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-700" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-cyan-500" /> },
    { name: "React.js", icon: <SiReact className="w-5 h-5 text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-black" /> },
  ];

  const toolsAndServices = [
    { name: "Git", icon: <SiGit className="w-5 h-5 text-orange-600" /> },
    { name: "GitHub", icon: <SiGithub className="w-5 h-5 text-gray-800" /> },
    { name: "VS Code", icon: <FaCode className="w-5 h-5 text-blue-500" /> },
    { name: "Firebase", icon: <SiFirebase className="w-5 h-5 text-yellow-500" /> },
    { name: "Redux", icon: <SiRedux className="w-5 h-5 text-purple-500" /> },
    { name: "Figma", icon: <SiFigma className="w-5 h-5 text-pink-500" /> },
  ];

  return (
    <section
      id="skill"
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"
    >
      {/* Section Header */}
      <motion.div
        className="w-full max-w-4xl mx-auto mb-12 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionTitle}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#3B9C9C]">
          Skills
        </h2>
      </motion.div>

      {/* Frontend Skills Card */}
      <motion.div
        className="w-full max-w-4xl shadow-md border border-gray-200 p-6 rounded-lg mb-8"
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={0}
      >
        <h3 className="text-2xl text-center font-semibold text-gray-900 mb-4">Frontend</h3>
        <ul className="flex flex-wrap justify-center gap-2 mt-4">
          {frontendSkills.map((skill) => (
            <motion.li
              key={skill.name}
              className="px-4 py-3 rounded-sm border border-gray-200 bg-gray-50 flex items-center gap-2 text-base font-medium text-gray-900"
              variants={listItemVariant}
              whileHover="hover"
            >
              {skill.icon}
              {skill.name}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Tools & Services Card */}
      <motion.div
        className="w-full max-w-4xl shadow-md border border-gray-200 p-6 rounded-lg"
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={1}
      >
        <h3 className="text-2xl text-center font-semibold text-gray-900 mb-4">Tools & Services</h3>
        <ul className="flex flex-wrap justify-center gap-2 mt-4">
          {toolsAndServices.map((tool) => (
            <motion.li
              key={tool.name}
              className="px-4 py-3 rounded-sm border border-gray-200 bg-gray-50 flex items-center gap-2 text-base font-medium text-gray-900"
              variants={listItemVariant}
              whileHover="hover"
            >
              {tool.icon}
              {tool.name}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Skill;