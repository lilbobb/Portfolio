import React from 'react';
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
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const Skill = () => {
  return (
    <section 
      id="skill" 
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"
    >
      {/* Section Header */}
      <div className="w-full max-w-4xl mx-auto mb-12 text-left">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#3B9C9C]">
          My Skills
        </h2>
      </div>

      {/* Frontend Skills */}
      <div className="w-full max-w-4xl shadow-md border border-gray-200 p-6 rounded-lg mb-8">
        <h3 className="text-2xl text-center font-semibold text-gray-900 mb-4">Frontend</h3>
        <ul className="flex flex-wrap justify-center gap-2 mt-4">
          {[
            { name: 'HTML', icon: <SiHtml5 className="w-5 h-5 text-orange-500" /> },
            { name: 'CSS', icon: <SiCss3 className="w-5 h-5 text-blue-500" /> },
            { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5 text-yellow-500" /> },
            { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5 text-blue-700" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5 text-cyan-500" /> },
            { name: 'React.js', icon: <SiReact className="w-5 h-5 text-cyan-400" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5 text-black" /> },
          ].map((skill) => (
            <li
              key={skill.name}
              className="px-4 py-3 rounded-sm border border-gray-200 bg-gray-50 flex items-center gap-2 text-base font-medium text-gray-900"
            >
              {skill.icon}
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Tools & Services */}
      <div className="w-full max-w-4xl shadow-md border border-gray-200 p-6 rounded-lg">
        <h3 className="text-2xl text-center font-semibold text-gray-900 mb-4">Tools & Services</h3>
        <ul className="flex flex-wrap justify-center gap-2 mt-4">
          {[
            { name: 'Git', icon: <SiGit className="w-5 h-5 text-orange-600" /> },
            { name: 'GitHub', icon: <SiGithub className="w-5 h-5 text-gray-800" /> },
            { name: 'VS Code', icon: <FaCode className="w-5 h-5 text-blue-500" /> },
            { name: 'Firebase', icon: <SiFirebase className="w-5 h-5 text-yellow-500" /> },
            { name: 'Redux', icon: <SiRedux className="w-5 h-5 text-purple-500" /> },
            { name: 'Figma', icon: <SiFigma className="w-5 h-5 text-pink-500" /> },
          ].map((skill) => (
            <li
              key={skill.name}
              className="px-4 py-3 rounded-sm border border-gray-200 bg-gray-50 flex items-center gap-2 text-base font-medium text-gray-900"
            >
              {skill.icon}
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skill;