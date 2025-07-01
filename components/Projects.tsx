"use client"

import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: 'Conference Ticket Generator',
      image: '/ticketgenerator.png',
      link: 'https://hng-12-stage2-task-6kipht3qf-lilbobbs-projects.vercel.app/',
    },
    {
      name: 'Landing Page',
      image: '/shopdesklandingpage.png',
      link: 'https://shopdesklanding-kc5e-roeo8xv97-lilbobbs-projects.vercel.app/',
    },
    {
      name: 'Netflix Landing Page',
      image: '/netflixlandingpage.png',
      link: 'https://netflix-lilbobb.vercel.app/',
    },
    {
      name: 'Movie App',
      image: '/movieapp.png',
      link: 'https://latestmovieapp.vercel.app/',
    },
  ];

  return (
    <section
      id="projects"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem 1.5rem',
        textAlign: 'center'
      }}
    >
      <h2
        style={{
          width: '100%',
          maxWidth: '52rem',
          fontSize: '2.5rem',
          fontWeight: '600',
          color: '#3B9C9C',
          marginBottom: '2rem',
          textAlign: 'left'
        }}
      >
        My Projects
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '48rem'
        }}
      >
        {projectList.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              overflow: 'hidden',
              textDecoration: 'none',
              backgroundColor: '#f9fafb',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={project.image}
              alt={project.name}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div
              style={{
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: '500',
                color: '#111827'
              }}
            >
              {project.name}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
