'use client';

import { Button } from '@/components/ui/button';

export default function Home() {
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

  return (
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] via-[#e4e8ed] to-[#dfe3e8]">
      <section 
        id="home" 
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-7xl"
      >
        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center order-2 lg:order-1 mt-8 lg:mt-0 lg:pr-12">
          <div className="w-full max-w-[550px]">
            <h2 className="text-3xl font-bold sm:text-3xl md:text-4xl text-left text-[#3B9C9C] mb-4 font-poppins">
              _Robert Adoga
            </h2>

            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8" 
                  style={{ fontFamily: "'Luckiest Guy', cursive" }}>
                Software<br />Developer
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button
                onClick={handleResumeClick}
                variant="default"
                size="xl"
                className="w-full sm:w-auto px-8 py-6 cursor-pointer border border-black rounded-sm hover:bg-gray-100 transition-colors font-poppins"
              >
                View Resume
              </Button>
              <Button
                onClick={handleGitHubClick}
                variant="outline"
                size="xl"
                className="w-full sm:w-auto px-8 py-6 cursor-pointer border border-black rounded-sm hover:bg-gray-100 transition-colors font-poppins"
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0 lg:pl-12">
          <div className="relative rounded-lg overflow-hidden shadow-xl w-full max-w-[500px]">
            <img
              src="/BobAdoga1.jpg"
              alt="Robert Adoga's profile"
              className="w-full h-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </div>
  );
}