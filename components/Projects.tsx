"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
  name: string;
  image: string;
  link: string;
}

// Card animation variant
const cardVariant = {
  hidden: { y: -30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  const projectList: Project[] = [
    {
      name: "Conference Ticket Generator",
      image: "/ticketgenerator.png",
      link: "https://hng-12-stage2-task-6kipht3qf-lilbobbs-projects.vercel.app/",
    },
    {
      name: "Landing Page",
      image: "/shopdesklandingpage.png",
      link: "https://shopdesklanding-kc5e-roeo8xv97-lilbobbs-projects.vercel.app/",
    },
    {
      name: "Netflix Landing Page",
      image: "/netflixlandingpage.png",
      link: "https://netflix-lilbobb.vercel.app/",
    },
    {
      name: "Movie App",
      image: "/movieapp.png",
      link: "https://latestmovieapp.vercel.app/",
    },
  ];

  return (
    <div className="w-full">
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center py-4 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"
      >
        <div className="w-full max-w-4xl mx-auto mb-12 text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#3B9C9C]">
            Projects
          </h2>
        </div>

        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectList.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-200 rounded-lg overflow-hidden bg-gray-50 hover:bg-white transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {project.name}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
