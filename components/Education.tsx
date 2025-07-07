"use client";

import React from "react";
import { motion } from "framer-motion";

interface EducationItem {
  period: string;
  institution: string;
  degree?: string;
  certificate?: string;
}

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

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      period: "November 2017 - February 2023",
      institution: "University of Cross River State (UNICROSS), Calabar",
      degree: "B.Sc In Computer Science (Honors)",
    },
    {
      period: "September 2010 - July 2016",
      institution: "Pace Setter Secondary Commercial School, Mfom Ogoja",
      certificate: "West African Senior School Certificate",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center py-4 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"
    >
      <div className="w-full max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#3B9C9C] text-left">
          Education
        </h2>
      </div>

      <div className="w-full max-w-4xl space-y-8">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            className="border-b-2 border-l-2 border-gray-200 p-4 sm:p-6 bg-white"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <span className="block text-sm sm:text-base font-medium text-white bg-black w-full sm:w-fit px-3 py-1 mb-4 text-center sm:text-left">
              {item.period}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              {item.institution}
            </h3>
            {item.degree && (
              <p className="text-lg text-gray-800">{item.degree}</p>
            )}
            {item.certificate && (
              <p className="text-lg text-gray-800">{item.certificate}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
