"use client"

import React from 'react';

const Experience = () => {
  return (
    <div className="w-full bg-gray-50">
      <section 
        id="experience" 
        className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"
      >
        {/* Section Header */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#3B9C9C] text-left">
            My Experience
          </h2>
        </div>

        {/* Experience Items Container */}
        <div className="w-full max-w-4xl space-y-8">

          {/* Experience Item 1 */}
          <div className="border-b-2 border-l-2 border-gray-200 p-4 sm:p-6 bg-white">
            <span className="block text-sm sm:text-base font-medium text-white bg-black w-fit px-2 py-1 mb-4">
              April 2023 - June 2025
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">Shopdesk - Remote</h3>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Intern Developer</h4>
            
            <ul className="space-y-3 text-gray-600">
              <li className="leading-relaxed">
                Developed a user role and permissions interface for Shopdesk using Next.js, Redux, and TypeScript, enabling
                role creation/modification and granular permission management with a responsive table and matrix, integrated
                with backend APIs, following Figma designs.
              </li>
              <li className="leading-relaxed">
                Enhanced Shopdesk's "Record Sale" modal, fixing price display issues and enabling multi-product sales using
                Redux and TypeScript, with API integration for accurate pricing and a mobile-responsive design.
              </li>
              <li className="leading-relaxed">
                Built a scalable front-end architecture for Shopdesk's free POS system, implementing automated
                inventory tracking and sales reporting, saving users 5-10 hours weekly and $10,000-$20,000 monthly by
                replacing manual processes.
              </li>
            </ul>
          </div>

          {/* Experience Item 2 */}
          <div className="border-b-2 border-l-2 border-gray-200 p-4 sm:p-6 bg-white">
            <span className="block text-sm sm:text-base font-medium text-white bg-black w-fit px-2 py-1 mb-4">
              January - April 2025
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">HNG INTERNSHIP - REMOTE</h3>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Intern Developer Finalist</h4>
            
            <ul className="space-y-3 text-gray-600">
              <li className="leading-relaxed">
                Developed a static e-commerce website with API integration to dynamically fetch and display products.
              </li>
              <li className="leading-relaxed">
                Integrated Firebase for secure user authentication, enabling account creation and login functionalities.
              </li>
              <li className="leading-relaxed">
                Contributed to an open-source project using Next.js and TypeScript, collaborating with other developers
                to build and maintain a live project, enhancing skills in both frameworks and collaborative
                development practices.
              </li>
              <li className="leading-relaxed">
                Implemented Conference Ticket Generator that allows users to generate event tickets by filling out a form
                with their details, uploading an avatar, and validating the inputs.
              </li>
              <li className="leading-relaxed">
                Designed and developed a full-stack application using Next.js and TypeScript, showcasing skills in both frameworks and enhancing the user experience with a responsive design.
              </li>
            </ul>
          </div>

          {/* Experience Item 3 */}
          <div className="border-b-2 border-l-2 border-gray-200 p-4 sm:p-6 bg-white">
            <span className="block text-sm sm:text-base font-medium text-white bg-black w-fit px-2 py-1 mb-4">
              January - April 2025
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">SPECTRUM INNOVATION TECHNOLOGIES LTD - FULLTIME</h3>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Web Designer / Administrator</h4>
            
            <ul className="space-y-3 text-gray-600">
              <li className="leading-relaxed">
                Designed and implemented new themes for the company's WordPress website, enhancing its visual appeal and
                user experience, which led to a 50% increase in website traffic.
              </li>
              <li className="leading-relaxed">
                Regularly updated and maintained the company's WordPress-based website, ensuring that content is
                current, accurate, and engaging.
              </li>
              <li className="leading-relaxed">
                Managed the end-to-end process of customer orders, coordinating with logistics to ensure timely and
                accurate delivery.
              </li>
              <li className="leading-relaxed">
                Provided prompt and effective customer support via social media and phone, addressing inquiries and
                resolving issues related to products and orders, this in turn increased customer satisfaction and loyalty.
              </li>
              <li className="leading-relaxed">
                Assisted in implementing digital marketing strategies, including managing social media accounts and
                updating content to increase online engagement and brand visibility.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;