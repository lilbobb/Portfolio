'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'Skill', path: '#skill' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Education', path: '#education' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Set initial active section based on URL hash
    if (window.location.hash) {
      setActiveSection(window.location.hash);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavClick = (path: string) => {
    setActiveSection(path);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const isActive = (path: string) => {
    return activeSection === path || pathname === path;
  };

  return (
    <nav className="bg-[#F9FAFB] py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center md:justify-center">
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#3B9C9C] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-4 py-2 text-base font-medium no-underline text-gray-800 hover:text-[#3B9C9C] transition-colors duration-200 relative group ${
                    isActive(item.path) ? 'text-[#3B9C9C]' : ''
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.name}
                  <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-[#3B9C9C] transition-all duration-200 ${
                    isActive(item.path) ? 'w-[70%]' : 'w-0 group-hover:w-[70%]'
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden w-6"></div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 pb-2">
            <ul className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`block px-4 py-2 text-base font-medium no-underline text-gray-800 hover:text-[#3B9C9C] transition-colors duration-200 relative ${
                      isActive(item.path) ? 'text-[#3B9C9C]' : ''
                    }`}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.name}
                    <span className={`absolute left-4 bottom-1 h-[2px] bg-[#3B9C9C] transition-all duration-200 ${
                      isActive(item.path) ? 'w-[calc(100%-2rem)]' : 'w-0 group-hover:w-[calc(100%-2rem)]'
                    }`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}