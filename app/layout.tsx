import type { Metadata } from 'next'

import { Poppins } from 'next/font/google';
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import './globals.css';
import Skill from '@/components/Skill';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Robert Ukurowo Adoga - Portfolio',
  description: 'Frontend Engineer | React | Next.js | TypeScript | Cybersecurity Enthusiast',
}


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.className} bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Skill />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}