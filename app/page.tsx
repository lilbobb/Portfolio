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
    <section id="home" className="min-h-screen flex flex-row items-center justify-around px-12">
      <div className="relative flex flex-col justify-center h-full">
        <div className="pl-24 pr-10 max-w-2xl">
          <h2 className="text-[36px] text-left text-[#3B9C9C]">
            _Robert Adoga
          </h2>

          <div className="max-w-3xl text-left">
            <p className="text-[64px] font-bold leading-[0.9]">Software<br />Developer</p>
          </div>

          <div className="flex items-center">
            <Button
              onClick={handleResumeClick}
              variant="default"
              size="xl"
              className="px-12 py-4 cursor-pointer border border-black "
              style={{ marginRight: '3rem', padding: '1rem 2rem', borderRadius: '0.2rem' }}
            >
              View Resume
            </Button>
            <Button
              onClick={handleGitHubClick}
              variant="outline"
              size="xl"
              className="px-12 py-4 cursor-pointer border border-black"
              style={{
                padding: '1rem 3.5rem', borderRadius: '0.2rem'
              }}
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>

      <div className="h-[600px] w-[400px] rounded-lg flex items-center justify-center text-white">
        <img
          src="/BobAdoga1.jpg"
          alt="Robert Adoga's profile"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
}