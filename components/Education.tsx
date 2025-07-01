"use client"

import React from 'react';

const Education = () => {
  return (
    <section id="education" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-12 text-center">
      <h2 style={{
        width: '100%',
        maxWidth: '52rem',
        fontSize: '2.5rem',
        fontWeight: '600',
        color: '#3B9C9C',
        marginTop: '-8rem',
        textAlign: 'left',
      }}>My Education</h2>

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
          width: '18rem',
          padding: '0.3rem',
          textAlign: "center",
        }}>November 2017 - February 2023</span>
        <h1>University of Cross River State (UNICROSS), Calabar</h1>
        <p>B.Sc In Computer Science (Honors)</p>
      </div>

      <div
        style={{
          marginBottom: '3rem', 
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
          width: '16rem',
          padding: '0.3rem',
          textAlign: "center"
        }}>September 2010 - July 2016</span>
        <h1>Pace Setter Secondary Commercial School, Mfom Ogoja</h1>
        <p> West African Senior School Certificate</p>
        <p className="text-gray-600 mt-2">
          
        </p>
      </div>

      
    </section>
  );
};

export default Education;
