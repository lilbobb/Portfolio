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
    <section id="skill" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-12 text-center">
      <h2 style={{
        width: '100%',
        maxWidth: '52rem',
        fontSize: '2.5rem',
        fontWeight: '600',
        color: '#3B9C9C',
        marginBottom: '2rem',
        textAlign: 'left',
      }}>My Skills</h2>

      <div
        className="shadow-md border border-gray-200 p-6"
        style={{
          borderRadius: '6px',
          width: '100%',
          maxWidth: '48rem',
          marginBottom: '3rem'
        }}
      >
        <span style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#111827',
          display: 'block',
          marginBottom: '1rem',
        }}>Frontend</span>
        <ul className="flex flex-wrap mt-4 justify-center">
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
              style={{
                padding: '1rem 1.5rem',
                borderRadius: '0.2rem',
                margin: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid #e5e7eb',
                backgroundColor: '#f9fafb',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#111827',
              }}
            >
              {skill.icon}
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="shadow-md border border-gray-200 p-6"
        style={{
          borderRadius: '6px',
          width: '100%',
          maxWidth: '48rem'
        }}
      >
        <span style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#111827',
          display: 'block',
          marginBottom: '1rem',
        }}>TOOLS & SERVICES</span>
        <ul className="flex flex-wrap mt-4 justify-center">
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
              style={{
                padding: '1rem 1.5rem',
                borderRadius: '0.2rem',
                margin: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid #e5e7eb',
                backgroundColor: '#f9fafb',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#111827',
              }}
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
