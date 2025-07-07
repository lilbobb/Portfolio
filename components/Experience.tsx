"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Card animation variant
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

const Experience = () => {
  useEffect(() => {
    if (window.location.hash === "#experience") {
      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        window.scrollTo({
          top: experienceSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, []);

  const experiences = [
    {
      date: "April 2023 - June 2025",
      company: "Shopdesk - Remote",
      role: "Intern Developer",
      points: [
        "Developed a user role and permissions interface for Shopdesk using Next.js, Redux, and TypeScript, enabling role creation/modification and granular permission management with a responsive table and matrix, integrated with backend APIs, following Figma designs.",
        "Enhanced Shopdesk's 'Record Sale' modal, fixing price display issues and enabling multi-product sales using Redux and TypeScript, with API integration for accurate pricing and a mobile-responsive design.",
        "Built a scalable front-end architecture for Shopdesk's free POS system, implementing automated inventory tracking and sales reporting, saving users 5-10 hours weekly and $10,000-$20,000 monthly by replacing manual processes.",
      ],
    },
    {
      date: "January - April 2025",
      company: "HNG INTERNSHIP - REMOTE",
      role: "Intern Developer Finalist",
      points: [
        "Developed a static e-commerce website with API integration to dynamically fetch and display products.",
        "Integrated Firebase for secure user authentication, enabling account creation and login functionalities.",
        "Contributed to an open-source project using Next.js and TypeScript, collaborating with other developers to build and maintain a live project, enhancing skills in both frameworks and collaborative development practices.",
        "Implemented Conference Ticket Generator that allows users to generate event tickets by filling out a form with their details, uploading an avatar, and validating the inputs.",
        "Designed and developed a full-stack application using Next.js and TypeScript, showcasing skills in both frameworks and enhancing the user experience with a responsive design.",
      ],
    },
    {
      date: "January - April 2025",
      company: "SPECTRUM INNOVATION TECHNOLOGIES LTD - FULLTIME",
      role: "Web Designer / Administrator",
      points: [
        "Designed and implemented new themes for the company's WordPress website, enhancing its visual appeal and user experience, which led to a 50% increase in website traffic.",
        "Regularly updated and maintained the company's WordPress-based website, ensuring that content is current, accurate, and engaging.",
        "Managed the end-to-end process of customer orders, coordinating with logistics to ensure timely and accurate delivery.",
        "Provided prompt and effective customer support via social media and phone, addressing inquiries and resolving issues related to products and orders, increasing customer satisfaction and loyalty.",
        "Assisted in implementing digital marketing strategies, including managing social media accounts and updating content to increase online engagement and brand visibility.",
      ],
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <section
        id="experience"
        className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl scroll-mt-20"
      >
        {/* Section Header */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#3B9C9C] text-left">
            Experience
          </h2>
        </div>

        {/* Experience Items */}
        <div className="w-full max-w-4xl space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="border-b-2 border-l-2 border-gray-200 p-4 sm:p-6 bg-white"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <span className="block text-sm sm:text-base font-medium text-white bg-black w-fit px-2 py-1 mb-4">
                {exp.date}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">{exp.company}</h3>
              <h4 className="text-lg sm:text-xl font-semibold mb-4">
                {exp.role}
              </h4>
              <ul className="space-y-3 text-gray-600">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
