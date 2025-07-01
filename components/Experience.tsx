"use client"

import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-12 text-center">
      <h2 style={{
        width: '100%',
        maxWidth: '52rem',
        fontSize: '2.5rem',
        fontWeight: '600',
        color: '#3B9C9C',
        marginBottom: '2rem',
        textAlign: 'left',
      }}>My Experience</h2>

      <div
        style={{
          marginBottom: '3rem',
          width: '100%',
          maxWidth: '52rem',
          borderBottom: '3px solid #e5e7eb',
          borderLeft: '3px solid #e5e7eb',
          textAlign: 'left',
          padding: '1rem'
        }}
      >
        <span style={{
          fontSize: '1rem',
          fontWeight: '500',
          color: '#fff',
          display: 'block',
          marginBottom: '1rem',
          backgroundColor: '#000',
          width: '24%',
          padding: '0.3rem',
        }}>April 2023-June 2025</span>
        <h1>Shopdesk - Remote </h1>
        <h1>Intern Develpoer</h1>
        <p className="text-gray-600 mt-2">
          Developed a user role and permissions interface for Shopdesk using Next.js, Redux, and TypeScript, enabling
          role creation/modification and granular permission management with a responsive table and matrix, integrated
          with backend APIs, following Figma designs. </p>
        <p className="text-gray-600 mt-2">
          Enhanced Shopdesk’s "Record Sale" modal, fixing price display issues and enabling multi-product sales using
          Redux and TypeScript, with API integration for accurate pricing and a mobile-responsive design. </p>
        <p className="text-gray-600 mt-2">
          Built a scalable front-end architecture for Shopdesk’s free POS system, implementing automated
          inventory tracking and sales reporting, saving users 5-10 hours weekly and $10,000-$20,000 monthly by
          replacing manual processes.
        </p>
      </div>

      <div
        style={{
          marginBottom: '3rem', // Added margin bottom to this div
          width: '100%',
          maxWidth: '52rem',
          borderBottom: '3px solid #e5e7eb',
          borderLeft: '3px solid #e5e7eb',
          textAlign: 'left',
          padding: '1rem',
        }}
      >
        <span style={{
          fontSize: '1rem',
          fontWeight: '500',
          color: '#fff',
          display: 'block',
          marginBottom: '1rem',
          backgroundColor: '#000',
          width: '24%',
          padding: '0.3rem',
        }}>Janurary - April 2025</span>
        <h1>HNG INTERNSHIP - REMOTE</h1>
        <h1> Intern Developer Finalist</h1>
        <p className="text-gray-600 mt-2">
          Developed astatic e-commerce website with API integration to dynamically fetch and display products
        </p>
        <p className="text-gray-600 mt-2">
          Integrated Firebase or secure user authentication, enabling account creation and login functionalities.
        </p>
        <p className="text-gray-600 mt-2">
          Contributed to an open-source project using Next.Js and TypeScript, collaborating with other developers
          to build and maintain a live project, enhancing skills in both frameworks and collaborative
          development practices.
        </p>
        <p className="text-gray-600 mt-2">
          Implemented Conference Ticket Generator that allow users to generate event tickets by filling out a form
          with their details, uploading an avatar, and validating the inputs. The ticket is generated upon successful
          submission, ensuring a smooth and accessible user experience.
        </p>
        <p className="text-gray-600 mt-2">
          Designed and developed a full-stack application using Next.js and TypeScript, showcasing skills in both frameworks and enhancing the user experience with a responsive design.
        </p>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '52rem',
          borderBottom: '3px solid #e5e7eb',
          borderLeft: '3px solid #e5e7eb',
          textAlign: 'left',
          padding: '1rem',
        }}
      >
        <span style={{
          fontSize: '1rem',
          fontWeight: '500',
          color: '#fff',
          display: 'block',
          marginBottom: '1rem',
          backgroundColor: '#000',
          width: '24%',
          padding: '0.3rem',
        }}>Janurary - April 2025</span>
        <h1>SPECTRUM INNOVATION TECHNOLOGIES LTD - FULLTIME</h1>
        <h1> Web Designer / Administrator</h1>

        <p className="text-gray-600 mt-2">
          Designed and implemeneted new themes for the company's WordPress website, enhancing its visual appeal and
          user experience, which led to a 50% increase in website traffic.
        </p>
        <p className="text-gray-600 mt-2">
          Regularly updated and maintained the company's WordPress-based website, ensuring that content is
          current, accurate, and engaging.
        </p>
        <p className="text-gray-600 mt-2">
          Managed the end-to-end process of customer orders, coordinating with logistics to ensure timely and
          accurate delivery.
        </p>
        <p className="text-gray-600 mt-2">
          Provided prompt and effective customer support via social media and phone, addressing inquiries and
          resolving issues related to products and orders, this inturn increased customer satisfaction and loyalty.
        </p>
        <p className="text-gray-600 mt-2">
          Assisted in implementing digital marketing strategies, including managing social media accounts and
          updating content to increase online engagement and brand visibility
        </p>
      </div>
    </section>
  );
};

export default Experience;
