"use client";

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Animation Variants
const fadeInFromTop = {
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

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (window.location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        window.scrollTo({
          top: contactSection.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value.trim() })); // Trim input immediately
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\+?[1-9]\d{9,14}$/.test(formData.phone)) { // Stricter regex: + followed by 9-14 digits
      newErrors.phone = 'Please enter a valid phone number (e.g., +4915777664313)';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const dataToSend = {
      ...formData,
      time: new Date().toLocaleString(),
      first_letter: formData.name.charAt(0).toUpperCase(),
    };
    console.log('Data being sent:', dataToSend); // Debug log

    try {
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS configuration is missing');
      }

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        dataToSend
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gray-50">
      <section 
        id="contact" 
        className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl scroll-mt-20"
      >
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInFromTop}
          custom={0}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#3B9C9C] text-left mb-8">
            Contact Me
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-4xl">
          {/* Contact Info Card */}
          <motion.div
            className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-sm"
            variants={fadeInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            <h3 className="text-2xl font-semibold text-[#3B9C9C] mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Phone Number</h4>
                <p className="text-gray-600">+49 157 77664313</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Email</h4>
                <p className="text-gray-600">ukurowo@gmail.com</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Social Network</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/lilbobb" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} className="text-gray-700 hover:text-[#3B9C9C]" />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} className="text-gray-700 hover:text-[#3B9C9C]" />
                  </a>
                  <a href="https://hashnode.com/@yourusername" target="_blank" rel="noopener noreferrer">
                    <SiHashnode size={24} className="text-gray-700 hover:text-[#3B9C9C]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-sm"
            variants={fadeInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            {submitStatus === 'success' && (
              <div className="mb-6 p-3 bg-green-100 text-green-700 rounded text-sm">
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-3 bg-red-100 text-red-700 rounded text-sm">
                Failed to send message. Please try again.
              </div>
            )}

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#3B9C9C] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#3B9C9C] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#3B9C9C] ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#3B9C9C] ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#3B9C9C] text-white py-3 px-4 rounded hover:bg-teal-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#3B9C9C] focus:ring-opacity-50 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;