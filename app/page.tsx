'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleResumeClick = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Robert-Adoga-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/lilbobb', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (window.location.hash === '#home' && window.performance.navigation.type !== 1) {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        window.scrollTo({
          top: homeSection.offsetTop,
          behavior: 'smooth'
        });
      }
    }
    
    if (sectionRef.current) {
      sectionRef.current.style.scrollMarginTop = '0px';
    }
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] via-[#e4e8ed] to-[#dfe3e8]">
      <motion.section 
        ref={sectionRef}
        id="home"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        whileInView="visible"
        viewport={{once: true, amount: 0.3}}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-7xl"
        style={{ scrollMarginTop: '0px' }} 
      >
        <motion.div 
          variants={itemVariants}
          whileInView="visible"
        viewport={{once: true, amount: 0.3}}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center order-2 lg:order-1 mt-8 lg:mt-0 lg:pr-12"
        >
          <div className="w-full max-w-[550px]">
            <motion.h2 
              variants={itemVariants}
              whileInView="visible"
        viewport={{once: true, amount: 0.3}}
              className="text-3xl font-bold sm:text-3xl md:text-4xl text-left text-[#3B9C9C] mb-4 font-poppins"
            >
              _Robert Adoga
            </motion.h2>

            <div className="text-left">
              <motion.h1 
              initial="hidden"
                variants={itemVariants}
                whileInView="visible"
        viewport={{once: true, amount: 0.3}}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8" 
                style={{ fontFamily: "'Luckiest Guy', cursive" }}
              >
                Software<br />Developer
              </motion.h1>
            </div>

            <motion.div 
              variants={itemVariants}
              whileInView="visible"
        viewport={{once: true, amount: 0.3}}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Button
                onClick={handleResumeClick}
                variant="default"
                size="xl"
                className="w-full sm:w-auto px-8 py-6 cursor-pointer border border-black rounded-sm hover:bg-gray-100 transition-colors font-poppins"
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
              >
                View Resume
              </Button>
              <Button
                onClick={handleGitHubClick}
                variant="outline"
                size="xl"
                className="w-full sm:w-auto px-14 py-6 cursor-pointer border border-black rounded-sm hover:bg-gray-100 transition-colors font-poppins"
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
              >
                GitHub
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          variants={imageVariants}
          whileInView="visible"
        viewport={{once: true, amount: 0.3}}
          className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0 lg:pl-12"
        >
          <motion.div 
          whileInView="visible"
        viewport={{once: true, amount: 0.3}}
            whilehover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative rounded-lg overflow-hidden shadow-xl w-full max-w-[500px]"
          >
            <img 
              src="/BobAdoga1.jpg"
              alt="Robert Adoga's profile"
              className="w-full h-auto object-contain"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}